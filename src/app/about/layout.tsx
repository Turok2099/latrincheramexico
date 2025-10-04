import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | La Trinchera México - Expertos en Organización de Eventos",
  description:
    "Conoce a La Trinchera México, empresa líder en organización de eventos en CDMX con más de 10 años de experiencia. Equipo profesional especializado en bodas, eventos corporativos y celebraciones sociales.",
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
      "Empresa líder en organización de eventos con más de 10 años de experiencia. Conoce nuestro equipo y nuestra pasión por crear eventos inolvidables.",
    type: "website",
    locale: "es_MX",
    url: "https://latrincheramexico.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros - La Trinchera México",
    description:
      "Expertos en organización de eventos en CDMX. Más de 10 años creando experiencias inolvidables.",
  },
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

