import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stands para Eventos y Ferias | Diseño de Stands | Renta de Stands - La Trinchera México",
  description:
    "Diseño, fabricación y montaje de stands para eventos, ferias y exposiciones. Stands creativos, stand publicitario portátil, renta de stands para expo. Fabricantes de stands profesionales en CDMX.",
  keywords: [
    "stands para expos",
    "montaje de stands",
    "diseño stands",
    "stands para eventos",
    "stands para ferias",
    "stand para ferias",
    "diseño de stands",
    "stand feria",
    "stand de feria",
    "stand para exposiciones",
    "stand publicitario portatil",
    "stand para ferias y exposiciones",
    "fabricantes de stands",
    "renta de stands para expo",
    "fabricacion de stand",
    "stand para feria",
    "stand portatiles para ferias",
    "renta de stand para expo",
    "stand de carton para exposicion",
    "stand de madera para ferias",
    "stand exposicion",
    "stands portatiles para ferias",
    "stands creativos",
    "diseñar un stand",
    "diseñar stand",
    "stand de exhibición",
    "stand de expo",
    "stand de exposición",
    "La Trinchera México",
    "stands CDMX",
  ],
  openGraph: {
    title:
      "Stands para Eventos | Diseño y Renta de Stands - La Trinchera México",
    description:
      "Diseño, fabricación y montaje de stands para eventos, ferias y exposiciones. Stands creativos y personalizados.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stands para Eventos - La Trinchera México",
    description:
      "Diseño y fabricación de stands para ferias, expos y eventos corporativos. Soluciones creativas y profesionales.",
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

export default function StandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
