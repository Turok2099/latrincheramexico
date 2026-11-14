import type { Metadata } from "next";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import HeroContactForm from "@/components/Contact/HeroContactForm";

const ogImage = optimizeCloudinaryUrl(cloudinaryImages["eventos-empresariales"][0], {
  width: 1200,
  height: 630,
});

export const metadata: Metadata = {
  title: "Contacto y Cotización | La Trinchera México",
  description:
    "Solicita una cotización para tu evento en CDMX. Escríbenos y cuéntanos qué necesitas: eventos corporativos, bodas, catering, stands o pantallas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto y Cotización | La Trinchera México",
    description: "Solicita una cotización para tu evento en CDMX.",
    url: "https://latrincheramexico.com/contact",
    type: "website",
    locale: "es_MX",
    siteName: "La Trinchera México",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Solicita una cotización - La Trinchera México" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto y Cotización | La Trinchera México",
    description: "Solicita una cotización para tu evento en CDMX.",
    images: [ogImage],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto y Cotización | La Trinchera México",
  url: "https://latrincheramexico.com/contact",
  inLanguage: "es-MX",
  about: {
    "@type": "Organization",
    name: "La Trinchera México",
    url: "https://latrincheramexico.com",
    telephone: "+52-55-4521-0178",
    email: "contacto@latrincheramexico.com",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroContactForm />
    </div>
  );
}
