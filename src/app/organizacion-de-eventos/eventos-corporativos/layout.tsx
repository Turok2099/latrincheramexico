import type { Metadata } from "next";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

const ogImage = optimizeCloudinaryUrl(cloudinaryImages["eventos-empresariales"][0], {
  width: 1200,
  height: 630,
});

export const metadata: Metadata = {
  title: "Eventos Corporativos en CDMX | Productora de Eventos - La Trinchera",
  description:
    "Organización y producción de eventos corporativos y empresariales en CDMX. Planeación, infraestructura y operación para tu empresa. Más de 10 años de experiencia.",
  alternates: {
    canonical: "/organizacion-de-eventos/eventos-corporativos",
  },
  openGraph: {
    title: "Eventos Corporativos en CDMX | La Trinchera México",
    description:
      "Productora y organizadores de eventos corporativos y empresariales en Ciudad de México: planeación, infraestructura y operación.",
    url: "https://latrincheramexico.com/organizacion-de-eventos/eventos-corporativos",
    siteName: "La Trinchera México",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Eventos corporativos en CDMX - La Trinchera México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventos Corporativos en CDMX | La Trinchera México",
    description:
      "Organización y producción de eventos corporativos y empresariales en Ciudad de México.",
    images: [ogImage],
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

export default function EventosCorporativosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
