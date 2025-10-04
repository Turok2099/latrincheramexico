import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Organización de Bodas | Wedding Planner Profesional - La Trinchera México",
  description:
    "Wedding planner profesional en CDMX. Organizamos bodas inolvidables, bodas en la playa, bodas de aniversario. Servicio completo: invitaciones de boda, decoraciones para bodas, banquetes, vestida de novia y más.",
  keywords: [
    "bodas",
    "organización de bodas",
    "wedding planner",
    "wedding planner México",
    "organizador de bodas",
    "invitación de boda",
    "invitación de boda digital",
    "decoraciones para bodas",
    "decoraciones de boda",
    "bodas en la playa",
    "boda en la playa",
    "vestida de novia",
    "recuerditos de boda",
    "aniversario de boda",
    "bodas de aniversario",
    "banquetes para fiestas",
    "banquetes para bodas",
    "planificación de bodas",
    "coordinación de bodas",
    "La Trinchera México",
    "bodas CDMX",
    "bodas Ciudad de México",
  ],
  openGraph: {
    title: "Organización de Bodas | Wedding Planner - La Trinchera México",
    description:
      "Hacemos realidad el día más importante de tu vida. Wedding planner profesional especializado en bodas, bodas en la playa y celebraciones únicas.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organización de Bodas - La Trinchera México",
    description:
      "Wedding planner profesional para bodas inolvidables en CDMX y bodas en la playa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BodasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
