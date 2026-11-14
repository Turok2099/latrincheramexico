"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { enviarContacto } from "@/lib/enviarContacto";
import { contactoVacio, digitosTelefono, limitesContacto, serviciosContacto, validarContacto, fechaLocal, type DatosContacto, type ErroresContacto } from "@/lib/contacto";

const control = "w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder:text-muted/70 transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:border-[#22d3f7] focus-visible:ring-2 focus-visible:ring-[#22d3f7] disabled:opacity-60";
const etiqueta = "block mb-2 text-sm font-semibold text-white/90";
const seccion = "md:col-span-2 text-xs font-semibold uppercase tracking-widest text-[#22d3f7]";
const whatsapp = "https://wa.me/525545210178";

export default function Formulario({ origen, principal = false }: { origen: "/" | "/contact"; principal?: boolean }) {
  const id = useId();
  const [datos, setDatos] = useState<DatosContacto>({ ...contactoVacio });
  const [errores, setErrores] = useState<ErroresContacto>({});
  const [error, setError] = useState("");
  const [estado, setEstado] = useState<"reposo" | "enviando" | "exito">("reposo");
  const bloqueo = useRef(false);
  const intento = useRef<{ contenido: string; id: string; creado: number } | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const resultado = useRef<HTMLDivElement>(null);
  const titulo = principal ? "h1" : "h2";
  const Titulo = titulo;
  useEffect(() => { if (estado === "exito") resultado.current?.focus(); }, [estado]);

  function cambiar(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    // Teléfono: no admitir más dígitos que el máximo válido (se ignora la tecla o el pegado que lo exceda).
    if (name === "telefono" && value.replace(/\D/g, "").length > digitosTelefono.max) return;
    const valor = e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? e.target.checked : value;
    setDatos(prev => ({ ...prev, [name]: valor }));
    setErrores(prev => ({ ...prev, [name]: undefined }));
    setError("");
  }
  function atributos(campo: keyof DatosContacto) {
    return { id: `${id}-${campo}`, name: campo, "aria-invalid": !!errores[campo], "aria-describedby": errores[campo] ? `${id}-${campo}-error` : undefined };
  }
  function aviso(campo: keyof DatosContacto) {
    return errores[campo] && <p id={`${id}-${campo}-error`} className="text-red-300 text-sm mt-2">{errores[campo]}</p>;
  }
  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (bloqueo.current) return;
    const fallos = validarContacto(datos);
    setErrores(fallos);
    if (Object.keys(fallos).length) {
      setError("Revisa los campos señalados antes de enviar.");
      // Enfocar el primer campo con error en el orden visual del formulario.
      const primero = Array.from(form.current?.elements ?? []).find(el => (el as HTMLInputElement).name in fallos);
      (primero as HTMLElement | undefined)?.focus();
      return;
    }
    bloqueo.current = true;
    setEstado("enviando"); setError("");
    try {
      const contenido = JSON.stringify({ ...datos, origen });
      // Reutilizar la clave si se reintenta el mismo contenido dentro de las 24 h.
      if (!intento.current || intento.current.contenido !== contenido || Date.now() - intento.current.creado >= 23 * 60 * 60 * 1000) {
        intento.current = { contenido, id: crypto.randomUUID(), creado: Date.now() };
      }
      const respuesta = await enviarContacto(datos, origen, intento.current.id);
      if (!respuesta.ok) { setErrores(respuesta.campos ?? {}); setError(respuesta.error); setEstado("reposo"); return; }
      setEstado("exito"); setDatos({ ...contactoVacio }); intento.current = null;
    } catch {
      setError("No pudimos confirmar el envío. Conservamos tus datos para que puedas reintentar."); setEstado("reposo");
    } finally { bloqueo.current = false; }
  }

  return <div className="w-full max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <Titulo className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">Cuéntanos tu proyecto</Titulo>
      <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6" />
      <p className="text-muted text-lg">Cuéntanos qué necesitas y nos pondremos en contacto contigo para preparar tu cotización.</p>
    </div>
    {estado === "exito" ? <div ref={resultado} tabIndex={-1} className="text-center bg-surface rounded-2xl p-8 md:p-10 border border-[#22d3f7]/40 shadow-2xl shadow-black/50 focus-visible:outline-[#22d3f7]">
      <h3 className="text-2xl font-bold mb-4">¡Solicitud enviada!</h3>
      <p>Gracias por contactarnos. Nos pondremos en contacto contigo para conocer los detalles de tu evento.</p>
      <button type="button" className="mt-6 underline focus-visible:outline-[#22d3f7]" onClick={() => setEstado("reposo")}>Enviar otra solicitud</button>
    </div> : <form ref={form} onSubmit={enviar} noValidate aria-busy={estado === "enviando"} className="relative space-y-6 overflow-hidden rounded-2xl border border-white/15 bg-surface p-6 shadow-2xl shadow-black/50 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#22d3f7] md:p-10">
      <p className="text-sm text-muted">Los campos con * son obligatorios. Puedes dejar la fecha y los invitados por definir.</p>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label htmlFor={`${id}-controlInterno`}>No llenar este campo</label><input {...atributos("controlInterno")} value={datos.controlInterno} onChange={cambiar} tabIndex={-1} autoComplete="off" /></div>
      <fieldset disabled={estado === "enviando"} className="space-y-6 min-w-0">
        <legend className="sr-only">Datos para tu solicitud de cotización</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h3 className={seccion}>Tus datos</h3>
          <div className="md:col-span-2"><label htmlFor={`${id}-nombre`} className={etiqueta}>Nombre completo *</label><input {...atributos("nombre")} className={control} value={datos.nombre} onChange={cambiar} autoComplete="name" required minLength={2} maxLength={limitesContacto.nombre} placeholder="Tu nombre completo" />{aviso("nombre")}</div>
          <div><label htmlFor={`${id}-email`} className={etiqueta}>Correo electrónico *</label><input {...atributos("email")} type="email" className={control} value={datos.email} onChange={cambiar} autoComplete="email" required maxLength={limitesContacto.email} placeholder="tu@correo.com" />{aviso("email")}</div>
          <div><label htmlFor={`${id}-telefono`} className={etiqueta}>Teléfono *</label><input {...atributos("telefono")} type="tel" inputMode="tel" className={control} value={datos.telefono} onChange={cambiar} autoComplete="tel" required maxLength={limitesContacto.telefono} placeholder="+52 55 1234 5678" />{aviso("telefono")}</div>
          <h3 className={`${seccion} mt-2`}>Tu evento</h3>
          <div className="md:col-span-2"><label htmlFor={`${id}-tipoEvento`} className={etiqueta}>Servicio que necesitas *</label><select {...atributos("tipoEvento")} className={control} value={datos.tipoEvento} onChange={cambiar} required><option value="">Selecciona un servicio</option>{serviciosContacto.map(([valor, nombre]) => <option key={valor} value={valor}>{nombre}</option>)}</select>{aviso("tipoEvento")}</div>
          <div><label htmlFor={`${id}-fechaEvento`} className={etiqueta}>Fecha del evento (opcional)</label><input {...atributos("fechaEvento")} type="date" min={fechaLocal()} max="9999-12-31" className={control} value={datos.fechaEvento} onChange={cambiar} /><p className="text-sm text-muted mt-2">Déjala vacía si aún no tienes fecha.</p>{aviso("fechaEvento")}</div>
          <div><label htmlFor={`${id}-numeroInvitados`} className={etiqueta}>Invitados aproximados (opcional)</label><input {...atributos("numeroInvitados")} type="number" inputMode="numeric" min={1} max={999999} step={1} className={control} value={datos.numeroInvitados} onChange={cambiar} placeholder="Por definir" />{aviso("numeroInvitados")}</div>
        </div>
        <div><label htmlFor={`${id}-mensaje`} className={etiqueta}>Cuéntanos sobre tu evento *</label><textarea {...atributos("mensaje")} rows={5} required minLength={10} maxLength={limitesContacto.mensaje} className={`${control} resize-y`} value={datos.mensaje} onChange={cambiar} placeholder="¿Qué estás planeando? Puedes incluir ubicación, necesidades y presupuesto aproximado." /><p className="text-sm text-muted text-right">{datos.mensaje.length} / {limitesContacto.mensaje}</p>{aviso("mensaje")}</div>
        <div><label className="flex items-start gap-3" htmlFor={`${id}-privacidad`}><input {...atributos("privacidad")} type="checkbox" checked={datos.privacidad} onChange={cambiar} required className="mt-1 accent-[#22d3f7] focus-visible:outline-2 focus-visible:outline-[#22d3f7]" /><span>He leído la <Link href="/aviso-privacidad" target="_blank" rel="noopener noreferrer" className="underline text-[#22d3f7]">información de privacidad (abre otra pestaña)</Link> y autorizo el uso de mis datos para atender esta solicitud. *</span></label>{aviso("privacidad")}</div>
      </fieldset>
      <div role="alert" aria-atomic="true">{error && <><p className="text-red-300">{error}</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 underline text-[#22d3f7]">Continuar por WhatsApp</a></>}</div>
      <div className="text-center"><button type="submit" disabled={estado === "enviando"} className="w-full cursor-pointer rounded-full bg-[#22d3f7] px-8 py-4 font-semibold text-black transition-colors hover:bg-white md:w-auto md:px-12 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22d3f7]">{estado === "enviando" ? "Enviando…" : "Enviar solicitud"}</button></div>
    </form>}
    <p role="status" aria-live="polite" className="sr-only">{estado === "enviando" ? "Enviando tu solicitud." : estado === "exito" ? "Tu solicitud se envió correctamente." : ""}</p>
  </div>;
}
