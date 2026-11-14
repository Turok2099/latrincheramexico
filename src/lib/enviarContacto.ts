import type { DatosContacto, ErroresContacto } from "./contacto";
export type { DatosContacto } from "./contacto";
export type ResultadoEnvio = { ok: true } | { ok: false; error: string; campos?: ErroresContacto };

export async function enviarContacto(datos: DatosContacto, origen: string, solicitudId: string): Promise<ResultadoEnvio> {
  try {
    const res = await fetch("/api/contacto", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...datos, origen, solicitudId }),
      signal: AbortSignal.timeout(25000),
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json?.ok === true) return { ok: true };
    return { ok: false, error: json?.error ?? "No pudimos confirmar el envío. Puedes reintentar sin cambiar los datos.", campos: json?.campos };
  } catch {
    return { ok: false, error: "No pudimos confirmar el envío. Revisa tu conexión y reintenta sin cambiar los datos, o contáctanos por WhatsApp." };
  }
}
