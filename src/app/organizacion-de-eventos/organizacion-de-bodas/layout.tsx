import type { Metadata } from "next";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

const ogImage = optimizeCloudinaryUrl(cloudinaryImages["organizacion-de-bodas"][0], {
  width: 1200,
  height: 630,
});

export const metadata: Metadata = {
  title: "Organización de Bodas y Wedding Planner CDMX | La Trinchera",
  description:
    "Organización de bodas en CDMX: planeación, coordinación e infraestructura para bodas privadas, pequeñas o grandes. Cotiza con tu wedding planner. Más de 10 años de experiencia.",
  alternates: {
    canonical: "/organizacion-de-eventos/organizacion-de-bodas",
  },
  openGraph: {
    title: "Organización de Bodas y Wedding Planner CDMX | La Trinchera México",
    description:
      "Planeación, coordinación e infraestructura para bodas privadas, pequeñas o grandes, en Ciudad de México.",
    url: "https://latrincheramexico.com/organizacion-de-eventos/organizacion-de-bodas",
    siteName: "La Trinchera México",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Organización de bodas en CDMX - La Trinchera México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organización de Bodas y Wedding Planner CDMX | La Trinchera México",
    description:
      "Planeación, coordinación e infraestructura para tu boda en Ciudad de México.",
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

export default function BodasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
