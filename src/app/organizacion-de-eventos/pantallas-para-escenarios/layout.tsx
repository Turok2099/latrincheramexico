import type { Metadata } from "next";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

const ogImage = optimizeCloudinaryUrl(
  cloudinaryImages["pantallas-para-escenarios"][0],
  { width: 1200, height: 630 }
);

export const metadata: Metadata = {
  title: "Renta de Pantallas LED para Eventos | La Trinchera México",
  description:
    "Renta y montaje de pantallas LED para eventos: pantallas de 3 × 3 metros o mayores instaladas en la ubicación de tu evento. Cotiza en CDMX y Edomex con La Trinchera México.",
  alternates: {
    canonical: "/organizacion-de-eventos/pantallas-para-escenarios",
  },
  openGraph: {
    title: "Renta de Pantallas LED para Eventos | La Trinchera México",
    description:
      "Pantallas LED de 3 × 3 metros o mayores con montaje en la ubicación de tu evento. Solicita tu cotización.",
    url: "https://latrincheramexico.com/organizacion-de-eventos/pantallas-para-escenarios",
    siteName: "La Trinchera México",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Pantallas LED montadas en un escenario - La Trinchera México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renta de Pantallas LED para Eventos | La Trinchera México",
    description:
      "Renta y montaje de pantallas LED de 3 × 3 metros o mayores para eventos.",
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

export default function PantallasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
