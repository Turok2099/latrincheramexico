import type { Metadata } from "next";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

const ogImage = optimizeCloudinaryUrl(cloudinaryImages["eventos-empresariales"][0], {
  width: 1200,
  height: 630,
});

export const metadata: Metadata = {
  title: "Sobre Nosotros | La Trinchera México",
  description:
    "Conoce a La Trinchera México, empresa de organización de eventos en CDMX con más de 10 años de experiencia. Equipo profesional especializado en bodas, eventos corporativos y otros servicios para eventos.",
  keywords: [
    "sobre nosotros",
    "La Trinchera México",
    "empresa de eventos CDMX",
    "organizadores de eventos profesionales",
    "equipo de eventos",
    "historia La Trinchera",
    "experiencia en eventos",
    "valores empresariales",
    "misión y visión",
    "wedding planners CDMX",
    "eventos corporativos profesionales",
  ],
  openGraph: {
    title: "Sobre Nosotros - La Trinchera México",
    description:
      "Empresa de organización de eventos con más de 10 años de experiencia. Conoce nuestro equipo y nuestra pasión por crear eventos inolvidables.",
    type: "website",
    locale: "es_MX",
    url: "https://latrincheramexico.com/about",
    siteName: "La Trinchera México",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Sobre La Trinchera México" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros - La Trinchera México",
    description:
      "Expertos en organización de eventos en CDMX. Más de 10 años creando experiencias inolvidables.",
    images: [ogImage],
  },
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre Nosotros | La Trinchera México",
  url: "https://latrincheramexico.com/about",
  inLanguage: "es-MX",
  about: {
    "@type": "Organization",
    name: "La Trinchera México",
    url: "https://latrincheramexico.com",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}

