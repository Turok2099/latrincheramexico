import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Eventos Empresariales | Agencia de Eventos Corporativos CDMX - La Trinchera México",
  description:
    "Agencia de eventos empresariales y corporativos en CDMX. Productora de eventos profesionales, empresas organizadoras de eventos, catering empresarial. Más de 10 años de experiencia.",
  keywords: [
    "eventos empresariales",
    "eventos corporativos",
    "agencia de eventos",
    "productora de eventos",
    "empresas organizadoras de eventos",
    "catering empresarial",
    "eventos empresariales en cdmx",
    "eventos corporativos en cdmx",
    "organización de eventos empresariales",
    "eventos corporativos cdmx",
    "productora de eventos cdmx",
    "agencia de eventos corporativos",
    "empresas de eventos",
    "La Trinchera México",
    "eventos empresariales méxico",
    "organización de eventos corporativos",
  ],
  openGraph: {
    title:
      "Eventos Empresariales | Agencia de Eventos Corporativos - La Trinchera México",
    description:
      "Somos tu agencia de eventos empresariales especializada en CDMX. Productora de eventos corporativos con experiencia en organización y catering empresarial.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventos Empresariales | Agencia de Eventos Corporativos CDMX",
    description:
      "Productora de eventos empresariales y corporativos. Empresas organizadoras de eventos profesionales en Ciudad de México.",
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

export default function EventosEmpresarialesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
