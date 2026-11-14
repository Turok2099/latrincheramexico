import type { Metadata } from "next";
import ServiciosRelacionados from "@/components/OrganizacionDeEventos/ServiciosRelacionados";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

const SITE = "https://latrincheramexico.com";
const PAGE_PATH = "/organizacion-de-eventos/musica-para-eventos";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const TITLE = "Música para Eventos en CDMX | La Trinchera México";
const DESCRIPTION =
  "DJ, grupos musicales y mariachis para bodas, cumpleaños, fiestas y eventos corporativos en CDMX y Estado de México. Cotiza con La Trinchera México.";

const ogImage = optimizeCloudinaryUrl(cloudinaryImages["musica-para-eventos"][5], {
  width: 1200,
  height: 630,
});

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "La Trinchera México",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Música para eventos en CDMX - La Trinchera México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Música para eventos",
      serviceType: "DJ, grupos musicales y mariachis para eventos",
      url: PAGE_URL,
      description:
        "DJ, grupos musicales y mariachis para bodas, cumpleaños, fiestas y eventos corporativos en CDMX y Estado de México.",
      areaServed: [
        { "@type": "City", name: "Ciudad de México" },
        { "@type": "State", name: "Estado de México" },
      ],
      provider: {
        "@type": "Organization",
        name: "La Trinchera México",
        url: SITE,
        telephone: "+52-55-4521-0178",
        email: "contacto@latrincheramexico.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Organización de eventos",
          item: `${SITE}/organizacion-de-eventos`,
        },
        { "@type": "ListItem", position: 3, name: "Música para eventos", item: PAGE_URL },
      ],
    },
  ],
};

export default function MusicaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
      <ServiciosRelacionados items={["bodas", "corporativos", "pantallas"]} />
    </>
  );
}
