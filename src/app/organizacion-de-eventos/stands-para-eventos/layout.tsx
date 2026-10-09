import type { Metadata } from "next";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

const ogImage = optimizeCloudinaryUrl(cloudinaryImages["stands-para-eventos"][3], {
  width: 1200,
  height: 630,
});

export const metadata: Metadata = {
  title: "Stands para Eventos y Exposiciones | La Trinchera México",
  description:
    "Diseño, fabricación, montaje y renta de stands para eventos, ferias y exposiciones. Stands personalizados según tu marca y tu espacio. Cotiza en CDMX y Edomex.",
  alternates: {
    canonical: "/organizacion-de-eventos/stands-para-eventos",
  },
  openGraph: {
    title: "Stands para Eventos y Exposiciones | La Trinchera México",
    description:
      "Diseño, fabricación, montaje y renta de stands personalizados para eventos, ferias y exposiciones. Solicita tu cotización.",
    url: "https://latrincheramexico.com/organizacion-de-eventos/stands-para-eventos",
    siteName: "La Trinchera México",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Stands en una exposición - La Trinchera México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stands para Eventos y Exposiciones | La Trinchera México",
    description:
      "Diseño, fabricación, montaje y renta de stands personalizados para eventos, ferias y exposiciones.",
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

export default function StandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
