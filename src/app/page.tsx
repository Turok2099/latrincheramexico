import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
  loading: () => <div className="h-64 bg-gray-900 animate-pulse"></div>,
});

const InspirationSection = dynamic(
  () => import("@/components/Home/InspirationSection")
);

const ServiciosDestacados = dynamic(
  () => import("@/components/Home/ServiciosDestacados"),
  {
    loading: () => <div className="h-96 bg-gray-800 animate-pulse"></div>,
  }
);

const SobreNosotros = dynamic(() => import("@/components/Home/SobreNosotros"));

const ContactForm = dynamic(() => import("@/components/Home/ContactForm"));

export const metadata: Metadata = {
  title:
    "La Trinchera México | Organización de Eventos en CDMX | Bodas, Corporativos y Más",
  description:
    "Somos la mejor empresa de organización de eventos en Ciudad de México. Especialistas en bodas, eventos corporativos, graduaciones y celebraciones. Servicios completos: catering, mobiliario, fotografía, música y más. ¡Transformamos tu evento en una experiencia inolvidable!",
  keywords: [
    "organización de eventos CDMX",
    "eventos corporativos Ciudad de México",
    "organización de bodas México",
    "catering para eventos",
    "mobiliario para eventos",
    "fotografía de eventos",
    "música para eventos",
    "graduaciones México",
    "eventos empresariales CDMX",
    "La Trinchera México",
    "agencia de eventos",
    "planificación de eventos",
    "coordinación de eventos",
    "eventos sociales México",
    "celebración de eventos",
  ],
  authors: [{ name: "La Trinchera México" }],
  creator: "La Trinchera México",
  publisher: "La Trinchera México",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    "https://trinchera-6lmo4poby-jorge-castros-projects-839066ef.vercel.app"
  ),
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  openGraph: {
    title: "La Trinchera México | Organización de Eventos en CDMX",
    description:
      "Somos la mejor empresa de organización de eventos en Ciudad de México. Especialistas en bodas, eventos corporativos, graduaciones y celebraciones. ¡Transformamos tu evento en una experiencia inolvidable!",
    url: "https://trinchera-6lmo4poby-jorge-castros-projects-839066ef.vercel.app",
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
      "Somos la mejor empresa de organización de eventos en Ciudad de México. Especialistas en bodas, eventos corporativos, graduaciones y celebraciones.",
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
  verification: {
    google: "google-site-verification-code-here", // Agregar cuando tengas el código
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "La Trinchera México",
    description:
      "Empresa líder en organización de eventos en Ciudad de México. Especialistas en bodas, eventos corporativos, graduaciones y celebraciones.",
    url: "https://trinchera-6lmo4poby-jorge-castros-projects-839066ef.vercel.app",
    logo: "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_400,h_400,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
    image:
      "https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,w_1200,h_630,c_fill/v1758905577/trinchera/eventos-sociales/23.png",
    telephone: "+52-55-1234-5678",
    email: "contacto@latrinchera.mx",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
    sameAs: [
      "https://www.facebook.com/latrincheramexico",
      "https://www.instagram.com/latrincheramexico",
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 19.4326,
        longitude: -99.1332,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Organización de Eventos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Organización de Bodas",
            description:
              "Servicio completo de organización de bodas desde la planificación hasta la ejecución",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eventos Corporativos",
            description:
              "Organización de eventos empresariales, conferencias y team buildings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Catering para Eventos",
            description:
              "Servicio de catering completo con menús personalizados",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobiliario para Eventos",
            description:
              "Renta de mobiliario elegante y decoración para eventos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fotografía y Video",
            description:
              "Servicio profesional de fotografía y video para eventos",
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
