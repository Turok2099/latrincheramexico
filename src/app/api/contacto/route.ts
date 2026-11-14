import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { contactoVacio, serviciosContacto, validarContacto, type DatosContacto } from "@/lib/contacto";

export const runtime = "nodejs";
const WINDOW_MS = 10 * 60 * 1000;
// Barrera por instancia, complementaria al Firewall de Vercel; no es un limite global.
const hits = new Map<string, { hasta: number; cuenta: number }>();
function limited(ip: string) {
  const ahora = Date.now();
  for (const [clave, entrada] of hits) if (entrada.hasta <= ahora) hits.delete(clave);
  const entrada = hits.get(ip) ?? { hasta: ahora + WINDOW_MS, cuenta: 0 };
  if (!hits.has(ip) && hits.size >= 5000) return true;
  entrada.cuenta++; hits.set(ip, entrada);
  return entrada.cuenta > 5;
}
const fallo = (error: string, status: number) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  const origen = req.headers.get("origin");
  if (!origen || origen !== new URL(req.url).origin) return fallo("Envía la solicitud desde el formulario de nuestro sitio.", 403);
  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return fallo("Formato de solicitud inválido.", 415);
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "desconocida";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "Has realizado varios intentos. Espera 10 minutos o escríbenos por WhatsApp." }, { status: 429, headers: { "Retry-After": "600" } });

  let body: Record<string, unknown>;
  try {
    // Limitar los bytes leidos, incluso cuando no existe Content-Length.
    const lector = req.body?.getReader();
    if (!lector) return fallo("Solicitud inválida.", 400);
    const partes: Uint8Array[] = []; let bytes = 0;
    while (true) {
      const { done, value } = await lector.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 16384) { await lector.cancel(); return fallo("La solicitud es demasiado larga.", 413); }
      partes.push(value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(partes).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallo("Solicitud inválida.", 400);
    body = parsed as Record<string, unknown>;
  } catch { return fallo("Solicitud inválida.", 400); }
  if (typeof body.controlInterno === "string" && body.controlInterno) return NextResponse.json({ ok: true });

  const datos = { ...contactoVacio };
  for (const clave of Object.keys(contactoVacio) as (keyof DatosContacto)[]) {
    if (clave === "privacidad") { datos.privacidad = body.privacidad === true; continue; }
    if (typeof body[clave] !== "string") return fallo("Revisa el formato de los campos del formulario.", 400);
    datos[clave] = body[clave] as string;
  }
  const campos = validarContacto(datos);
  if (Object.keys(campos).length) return NextResponse.json({ ok: false, error: "Revisa los campos señalados.", campos }, { status: 400 });
  if (typeof body.solicitudId !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.solicitudId)) return fallo("Actualiza la página y vuelve a enviar tu solicitud.", 400);
  if (body.origen !== "/" && body.origen !== "/contact") return fallo("Origen del formulario inválido.", 400);
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return fallo("El envío no está disponible por ahora. Escríbenos por WhatsApp.", 503);
  const servicio = serviciosContacto.find(([valor]) => valor === datos.tipoEvento)![1];
  const contenido = {
    from: "La Trinchera México <contacto@latrincheramexico.com>",
    to: ["contacto@latrincheramexico.com"], reply_to: datos.email.trim(),
    subject: "Nueva solicitud de cotización — La Trinchera México",
    text: ["Nueva solicitud desde el sitio web", "", `Nombre: ${datos.nombre.trim()}`, `Correo: ${datos.email.trim()}`,
      `Teléfono: ${datos.telefono.trim()}`, `Servicio: ${servicio}`, `Fecha: ${datos.fechaEvento || "Por definir"}`,
      `Invitados aproximados: ${datos.numeroInvitados || "Por definir"}`, `Origen: ${body.origen}`,
      "Privacidad: el visitante confirmó la lectura y autorizó atender su solicitud.", "", "Mensaje:", datos.mensaje.trim()].join("\n"),
  };
  // Mismo contenido + misma solicitud = mismo correo, aunque cambie la instancia de Vercel.
  const clave = createHash("sha256").update(JSON.stringify({ id: body.solicitudId, contenido })).digest("hex");
  try {
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `contacto/${clave}` },
      signal: AbortSignal.timeout(15000), body: JSON.stringify(contenido),
    });
    const resultado = await respuesta.json().catch(() => null);
    if (!respuesta.ok || typeof resultado?.id !== "string" || !resultado.id) {
      console.error("contacto: Resend no aceptó el envío", respuesta.status);
      return fallo("No pudimos confirmar el envío. Puedes reintentar sin cambiar los datos o escribirnos por WhatsApp.", 502);
    }
    return NextResponse.json({ ok: true });
  } catch { return fallo("No pudimos confirmar el envío. Puedes reintentar sin cambiar los datos o escribirnos por WhatsApp.", 502); }
}
