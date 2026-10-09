import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseServer";

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
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  // Campo trampa: los bots lo rellenan. Respondemos "ok" sin guardar.
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

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const telOk = telefono.replace(/\D/g, "").length >= 7;
  const fechaOk = /^\d{4}-\d{2}-\d{2}$/.test(fecha) && !Number.isNaN(Date.parse(fecha));

  if (nombre.length < 2 || !emailOk || !telOk) {
    return NextResponse.json(
      { ok: false, error: "Revisa tu nombre, correo y teléfono." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("contacto: faltan variables de entorno de Supabase");
    return NextResponse.json(
      { ok: false, error: "El envío no está disponible por ahora. Escríbenos por WhatsApp." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("contactos").insert({
    nombre,
    email,
    telefono,
    tipo_evento: tipoEvento || null,
    fecha_evento: fechaOk ? fecha : null,
    numero_invitados: Number.isFinite(invitados) && invitados > 0 ? invitados : null,
    mensaje: mensaje || null,
    origen: str(body.origen, 120) || null,
  });

  if (error) {
    // Solo el código de error: nunca registrar datos personales.
    console.error("contacto: error al guardar", error.code);
    return NextResponse.json(
      { ok: false, error: "No pudimos guardar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
