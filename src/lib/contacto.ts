export const serviciosContacto = [
  ["catering", "Catering para eventos"],
  ["corporativos", "Eventos corporativos"],
  ["bodas", "Organización de bodas"],
  ["pantallas", "Pantallas para escenarios"],
  ["stands", "Stands para eventos"],
  ["musica", "Música para eventos"],
  ["otro", "Otro / necesito orientación"],
] as const;

export const limitesContacto = { nombre: 120, email: 200, telefono: 30, mensaje: 3000 };
export type DatosContacto = {
  nombre: string; email: string; telefono: string; tipoEvento: string;
  fechaEvento: string; numeroInvitados: string; mensaje: string; sitioWeb: string;
  privacidad: boolean;
};
export type ErroresContacto = Partial<Record<keyof DatosContacto, string>>;
export const contactoVacio: DatosContacto = {
  nombre: "", email: "", telefono: "", tipoEvento: "", fechaEvento: "",
  numeroInvitados: "", mensaje: "", sitioWeb: "", privacidad: false,
};

export function fechaLocal() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date());
}

export function validarContacto(datos: DatosContacto): ErroresContacto {
  const errores: ErroresContacto = {};
  for (const [campo, max] of Object.entries(limitesContacto)) {
    const clave = campo as keyof typeof limitesContacto;
    if (datos[clave].length > max) errores[clave] = `Usa como máximo ${max} caracteres.`;
  }
  if (datos.nombre.trim().length < 2) errores.nombre = "Escribe tu nombre (al menos 2 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email.trim()) || /[\r\n]/.test(datos.email)) errores.email = "Escribe un correo válido.";
  if (!/^[+\d\s().-]+$/.test(datos.telefono) || !/^\d{7,15}$/.test(datos.telefono.replace(/\D/g, ""))) errores.telefono = "Escribe un teléfono de 7 a 15 dígitos.";
  if (!serviciosContacto.some(([valor]) => valor === datos.tipoEvento)) errores.tipoEvento = "Selecciona un servicio.";
  if (datos.fechaEvento) {
    const fecha = new Date(`${datos.fechaEvento}T12:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(datos.fechaEvento) || Number.isNaN(fecha.getTime()) || fecha.toISOString().slice(0, 10) !== datos.fechaEvento || datos.fechaEvento < fechaLocal()) errores.fechaEvento = "Elige una fecha válida de hoy en adelante, o déjala por definir.";
  }
  if (datos.numeroInvitados && (!/^\d{1,6}$/.test(datos.numeroInvitados) || Number(datos.numeroInvitados) < 1)) errores.numeroInvitados = "Escribe un número entero entre 1 y 999999, o déjalo sin definir.";
  if (datos.mensaje.trim().length < 10) errores.mensaje = "Cuéntanos un poco más (al menos 10 caracteres).";
  if (datos.privacidad !== true) errores.privacidad = "Confirma que leíste la información de privacidad.";
  return errores;
}
