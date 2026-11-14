import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacidad de las solicitudes | La Trinchera México",
  description: "Información sobre los datos que compartes al solicitar una cotización a La Trinchera México.",
  alternates: { canonical: "/aviso-privacidad" },
};
export default function Privacidad() {
  return <main className="max-w-3xl mx-auto px-6 py-24 text-white space-y-6">
    <h1 className="text-3xl font-bold">Privacidad de las solicitudes</h1>
    <p>Al solicitar una cotización a La Trinchera México, compartes tu nombre, correo, teléfono y los detalles que decidas incluir sobre tu evento. La fecha y el número aproximado de invitados son opcionales.</p>
    <h2 className="text-xl font-bold">Responsable</h2>
    <p>El responsable del tratamiento de tus datos es Jorge Castro Cruz, de La Trinchera México. Teléfono: <a className="text-[#22d3f7] underline" href="tel:+525545210178">+52 55 4521 0178</a>. Correo: <a className="text-[#22d3f7] underline" href="mailto:contacto@latrincheramexico.com">contacto@latrincheramexico.com</a>.</p>
    <h2 className="text-xl font-bold">Para qué usamos tus datos</h2>
    <p>Usamos esta información para responder tu consulta, conocer las necesidades del evento y preparar y dar seguimiento a tu cotización.</p>
    <h2 className="text-xl font-bold">Cómo se envía tu solicitud</h2>
    <p>El sitio utiliza Vercel para procesar el formulario y Resend para enviar la solicitud al correo de contacto de La Trinchera México. El buzón está alojado en Hostinger. El formulario no guarda las solicitudes en una base de datos del sitio; la información se recibe por correo electrónico.</p>
    <p>Evita incluir datos sensibles o información de otras personas que no sea necesaria para tu consulta.</p>
    <h2 className="text-xl font-bold">Contacto sobre tu información</h2>
    <p>Para consultar sobre el tratamiento de tus datos o solicitar una corrección o eliminación, escríbenos a <a className="text-[#22d3f7] underline" href="mailto:contacto@latrincheramexico.com">contacto@latrincheramexico.com</a>.</p>
  </main>;
}
