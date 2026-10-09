export type DatosContacto = {
  nombre: string;
  email: string;
  telefono: string;
  tipoEvento: string;
  fechaEvento: string;
  numeroInvitados: string;
  mensaje: string;
  sitioWeb: string; // campo trampa anti-bots: debe ir vacío
};

export type ResultadoEnvio = { ok: true } | { ok: false; error: string };

// Devuelve ok solo si el servidor confirma que la consulta se guardó.
export async function enviarContacto(
  datos: DatosContacto,
  origen: string
): Promise<ResultadoEnvio> {
  try {
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...datos, origen }),
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json?.ok === true) return { ok: true };
    return {
      ok: false,
      error: json?.error ?? "No pudimos enviar tu solicitud. Inténtalo de nuevo.",
    };
  } catch {
    return { ok: false, error: "Sin conexión. Revisa tu internet e inténtalo de nuevo." };
  }
}
