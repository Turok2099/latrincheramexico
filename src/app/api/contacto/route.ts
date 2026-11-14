import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Límite básico por IP (en memoria: por instancia, es una barrera ligera, no total).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  // Campo trampa: los bots lo rellenan. Respondemos "ok" sin enviar.
  if (str(body.sitioWeb, 200)) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "desconocida";
  if (limited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiados intentos. Inténtalo de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  const nombre = str(body.nombre, 120);
  const email = str(body.email, 200);
  const telefono = str(body.telefono, 30);
  const mensaje = str(body.mensaje, 3000);
  const tipoEvento = str(body.tipoEvento, 60);
  const fecha = str(body.fechaEvento, 10);
  const invitados = Number.parseInt(str(body.numeroInvitados, 7), 10);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/[\r\n]/.test(email);
  const telOk = telefono.replace(/\D/g, "").length >= 7;
  const fechaOk = /^\d{4}-\d{2}-\d{2}$/.test(fecha) && !Number.isNaN(Date.parse(fecha));

  if (nombre.length < 2 || !emailOk || !telOk) {
    return NextResponse.json(
      { ok: false, error: "Revisa tu nombre, correo y teléfono." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "El envío no está disponible por ahora. Escríbenos por WhatsApp." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        from: "La Trinchera México <contacto@latrincheramexico.com>",
        to: ["contacto@latrincheramexico.com"],
        reply_to: email,
        subject: "Nueva solicitud de cotización — La Trinchera México",
        text: [
          "Nueva solicitud desde el sitio web",
          "",
          `Nombre: ${nombre}`,
          `Correo: ${email}`,
          `Teléfono: ${telefono}`,
          `Tipo de evento: ${tipoEvento || "No especificado"}`,
          `Fecha: ${fechaOk ? fecha : "No especificada"}`,
          `Invitados: ${Number.isFinite(invitados) && invitados > 0 ? invitados : "No especificados"}`,
          `Origen: ${str(body.origen, 120) || "No especificado"}`,
          "",
          "Mensaje:",
          mensaje || "Sin mensaje",
        ].join("\n"),
      }),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || typeof result?.id !== "string" || !result.id) {
      // Nunca registrar el cuerpo del correo, credenciales o datos personales.
      console.error("contacto: Resend no aceptó el envío", response.status);
      return NextResponse.json(
        { ok: false, error: "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No pudimos confirmar el envío. Inténtalo de nuevo o escríbenos por WhatsApp." },
      { status: 502 }
    );
  }
}