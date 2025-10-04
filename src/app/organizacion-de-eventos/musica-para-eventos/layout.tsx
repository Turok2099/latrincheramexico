import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Música para Eventos | DJ para Fiestas | Grupos Musicales | Mariachis - La Trinchera México",
  description:
    "DJ para fiestas, grupos musicales para eventos, mariachis para serenata y músicos para bodas. Contratación de DJs para eventos, bandas musicales, música para bodas, cumpleaños y fiestas infantiles en CDMX.",
  keywords: [
    "dj para fiestas",
    "dj para eventos",
    "dj para fiestas en casa",
    "djs para bodas",
    "sonido dj para fiestas",
    "musica para eventos",
    "grupos musicales para eventos",
    "grupos musicales para fiestas",
    "musicos para bodas",
    "grupos musicales para bodas",
    "bandas musicales para eventos",
    "contratacion de mariachis",
    "mariachis para serenata",
    "mariachis para cumpleaños",
    "mariachi boda",
    "mariachi para serenatas",
    "mariachis en cumpleaños",
    "musica de mariachi para cumpleaños",
    "musica fiesta",
    "musica para bautizo",
    "musica para fiesta de adultos",
    "musica para fiesta infantil",
    "musica para fiestas infantiles",
    "musica para la boda",
    "musica para una boda",
    "musicas para cumpleaños",
    "musicas para fiestas",
    "La Trinchera México",
    "música CDMX",
    "entretenimiento eventos",
  ],
  openGraph: {
    title: "Música para Eventos | DJ y Grupos Musicales - La Trinchera México",
    description:
      "DJ para fiestas, grupos musicales, mariachis y música para eventos. Entretenimiento profesional para bodas, cumpleaños y eventos corporativos.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Música para Eventos - La Trinchera México",
    description:
      "DJ para fiestas, grupos musicales y mariachis. Música profesional para todo tipo de eventos.",
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

export default function MusicaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
