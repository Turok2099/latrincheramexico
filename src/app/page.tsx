import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import HeroSection from "@/components/Home/HeroSection";
import LaTrinchera from "@/components/Home/LaTrinchera";

// 🚀 Lazy loading para componentes no críticos
const Galeria = dynamic(() => import("@/components/Home/Galeria"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      Cargando galería...
    </div>
  ),
});

const StatsSection = dynamic(() => import("@/components/Home/StatsSection"), {
  loading: () => <div className="h-64 bg-surface animate-pulse"></div>,
});

const InspirationSection = dynamic(
  () => import("@/components/Home/InspirationSection")
);

const ServiciosDestacados = dynamic(
  () => import("@/components/Home/ServiciosDestacados"),
  {
    loading: () => <div className="h-96 bg-surface animate-pulse"></div>,
  }
);

const SobreNosotros = dynamic(() => import("@/components/Home/SobreNosotros"));

const ContactForm = dynamic(() => import("@/components/Home/ContactForm"));

export const metadata: Metadata = {
  title:
    "La Trinchera México | Organización de Eventos en CDMX",
  description:
    "Organización de eventos en CDMX: eventos corporativos, bodas, catering, stands, pantallas y música para eventos. Más de 10 años de experiencia.",
  authors: [{ name: "La Trinchera México" }],
  creator: "La Trinchera México",
  publisher: "La Trinchera México",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://latrincheramexico.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  openGraph: {
    title: "La Trinchera México | Organización de Eventos en CDMX",
    description:
      "Organización de eventos en CDMX: eventos corporativos, bodas, catering, stands, pantallas y música para eventos. Más de 10 años de experiencia.",
    url: "https://latrincheramexico.com",
    siteName: "La Trinchera México",
    images: [
      {
        url: "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_1200,h_630,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
        width: 1200,
        height: 630,
        alt: "La Trinchera México - Organización de Eventos",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Trinchera México | Organización de Eventos en CDMX",
    description:
      "Organización de eventos en CDMX: eventos corporativos, bodas, catering, stands, pantallas y música para eventos. Más de 10 años de experiencia.",
    images: [
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_1200,h_630,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
    ],
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

type HomeSearchParams = Record<string, string | string[] | undefined>;

type HomeProps = {
  searchParams?: Promise<HomeSearchParams>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  if (resolvedSearchParams?.p) {
    notFound();
  }
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "La Trinchera México",
    description:
      "Organización de eventos en CDMX: eventos corporativos, bodas, catering, stands, pantallas y música para eventos. Más de 10 años de experiencia.",
    url: "https://latrincheramexico.com",
    logo: "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_400,h_400,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_1200,h_630,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
    telephone: "+52-55-4521-0178",
    email: "contacto@latrincheramexico.com",
    areaServed: [
      { "@type": "City", name: "Ciudad de México" },
      { "@type": "State", name: "Estado de México" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Organización de Eventos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eventos Corporativos",
            description:
              "Organización y producción de eventos corporativos y empresariales en CDMX",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Organización de Bodas",
            description:
              "Planificación y organización de bodas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Catering para Eventos",
            description:
              "Servicio de catering para eventos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stands para Eventos",
            description:
              "Diseño, fabricación y montaje de stands",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pantallas para Escenarios",
            description:
              "Pantallas LED para escenarios y eventos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Música para Eventos",
            description:
              "DJ y grupos musicales para eventos",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full">
        <HeroSection />
        {/* Sección de estadísticas */}
        <StatsSection />

        {/* Sección de inspiración */}
        <InspirationSection />

        {/* Sección de servicios debajo del Hero */}
        <Galeria />

        {/* Sección de servicios destacados */}
        <ServiciosDestacados />

        {/* Sección Sobre Nosotros */}
        <SobreNosotros />

        {/* Formulario de contacto */}
        <ContactForm />

        {/* Sección La Trinchera */}
        <LaTrinchera />
      </div>
    </>
  );
}
