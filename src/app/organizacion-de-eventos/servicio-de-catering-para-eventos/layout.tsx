import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Servicio de Catering para Eventos | Banquetes y Comida para Eventos - La Trinchera México",
  description:
    "Servicio de catering para eventos profesionales. Banquetes para eventos, comida para eventos, catering empresarial, banquetes a domicilio. Más de 10 años de experiencia en catering eventos.",
  keywords: [
    "catering",
    "catering para eventos",
    "servicio de catering",
    "banquetes para eventos",
    "comida para eventos",
    "banquetes para fiestas",
    "servicio de catering para eventos",
    "banquetes a domicilio",
    "catering eventos",
    "servicio catering",
    "servicio de comida para eventos",
    "catering empresarial",
    "comida para eventos a domicilio",
    "banquetes para eventos pequeños",
    "catering desayunos",
    "La Trinchera México",
    "taquizas y parrilladas",
    "comida en 3 tiempos",
    "bocadillos y canapés",
    "brunch y desayunos",
    "box lunch",
    "barra de café a domicilio",
  ],
  openGraph: {
    title: "Servicio de Catering para Eventos - La Trinchera México",
    description:
      "Transformamos cada ocasión en una experiencia gastronómica inolvidable con nuestro servicio de catering profesional.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicio de Catering para Eventos - La Trinchera México",
    description:
      "Catering profesional para eventos empresariales, sociales y celebraciones especiales.",
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

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
