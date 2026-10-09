import type { Metadata } from "next";
import HeroContactForm from "@/components/Contact/HeroContactForm";

export const metadata: Metadata = {
  title: "Contacto y Cotización de Eventos | La Trinchera México",
  description:
    "Solicita una cotización para tu evento en CDMX. Escríbenos y cuéntanos qué necesitas: eventos corporativos, bodas, catering, stands o pantallas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto y Cotización de Eventos | La Trinchera México",
    description: "Solicita una cotización para tu evento en CDMX.",
    url: "https://latrincheramexico.com/contact",
    type: "website",
    locale: "es_MX",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroContactForm />
    </div>
  );
}
