import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pantallas para Eventos | Pantallas LED Gigantes para Escenarios - La Trinchera México",
  description:
    "Pantallas gigantes y pantallas LED para eventos. Renta de pantallas LED gigantes para escenarios, pantallas de LED gigantes para eventos corporativos, bodas y conciertos. Tecnología audiovisual profesional.",
  keywords: [
    "pantallas gigantes",
    "pantallas para eventos",
    "pantallas led gigantes",
    "pantallas led para eventos",
    "pantallas gigantes para eventos",
    "pantalla led para escenario",
    "pantallas de led gigantes",
    "pantallas para escenarios",
    "renta de pantallas led",
    "pantallas audiovisuales",
    "pantallas para bodas",
    "pantallas para conciertos",
    "tecnología audiovisual",
    "La Trinchera México",
    "pantallas CDMX",
    "eventos con pantallas",
  ],
  openGraph: {
    title:
      "Pantallas para Eventos | Pantallas LED Gigantes - La Trinchera México",
    description:
      "Pantallas gigantes y pantallas LED para eventos. Tecnología audiovisual de vanguardia para bodas, eventos corporativos y conciertos.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantallas para Eventos - La Trinchera México",
    description:
      "Pantallas LED gigantes y pantallas para escenarios. Tecnología audiovisual profesional para eventos.",
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

export default function PantallasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
