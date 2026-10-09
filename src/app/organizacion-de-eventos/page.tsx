import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";
import ContactForm from "@/components/Home/ContactForm";
import ProcesoOrganizacion from "@/components/OrganizacionDeEventos/ProcesoOrganizacion";
import ServiciosGrid, {
  serviciosEventos,
} from "@/components/OrganizacionDeEventos/ServiciosGrid";

const SITE = "https://latrincheramexico.com";
const PAGE_URL = `${SITE}/organizacion-de-eventos`;

const ogImage = optimizeCloudinaryUrl(cloudinaryImages["eventos-empresariales"][0], {
  width: 1200,
  height: 630,
});

export const metadata: Metadata = {
  title: "Organización de Eventos en CDMX | Agencia de Eventos - La Trinchera",
  description:
    "Agencia de eventos en CDMX: organización y producción integral de eventos corporativos, bodas, catering, stands, pantallas y música. Más de 10 años de experiencia.",
  alternates: { canonical: "/organizacion-de-eventos" },
  openGraph: {
    title: "Organización de Eventos en CDMX | La Trinchera México",
    description:
      "Agencia de eventos en CDMX: planeación, producción e infraestructura para eventos corporativos, bodas y más.",
    url: PAGE_URL,
    siteName: "La Trinchera México",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Organización de eventos en CDMX - La Trinchera México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organización de Eventos en CDMX | La Trinchera México",
    description:
      "Agencia de eventos en CDMX: organización y producción integral de eventos.",
    images: [ogImage],
  },
};

const faqs = [
  {
    q: "¿Qué hace una empresa organizadora de eventos?",
    a: "Se encarga de planear el evento, coordinar a los proveedores, diseñar e instalar la infraestructura y supervisar la operación el día del evento, para que tú no tengas que resolver cada detalle.",
  },
  {
    q: "¿Cómo contratar un organizador de eventos?",
    a: "Escríbenos con el tipo de evento, la fecha y el número aproximado de asistentes. Con esa información preparamos una propuesta personalizada con cronograma y presupuesto detallado.",
  },
  {
    q: "¿Qué incluye el servicio de organización de eventos?",
    a: "Según lo que necesites: eventos corporativos, organización de bodas, catering, stands, pantallas LED para escenarios y música para eventos. Puedes contratar el servicio completo o solo una parte.",
  },
  {
    q: "¿Ofrecen producción integral de eventos?",
    a: "Sí. Cubrimos planeación, diseño, infraestructura y operación, con tecnología audiovisual cuando el evento lo requiere.",
  },
  {
    q: "¿Trabajan eventos en CDMX?",
    a: "Sí. Atendemos eventos en CDMX y en el Estado de México. Cuéntanos tu proyecto y te decimos cómo podemos ayudarte.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Organización de eventos en CDMX",
      url: PAGE_URL,
      about: {
        "@type": "Organization",
        name: "La Trinchera México",
        url: SITE,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: serviciosEventos.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.titulo,
          url: `${SITE}${s.href}`,
        })),
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
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function OrganizacionEventosPage() {
  const heroUrl = optimizeCloudinaryUrl(cloudinaryImages["eventos-empresariales"][0], {
    width: 1920,
    height: 1080,
    quality: "auto:eco",
    priority: true,
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroUrl}
            alt="Evento organizado por La Trinchera México en CDMX"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90 z-10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
              ORGANIZACIÓN DE
              <span className="block text-[#22d3f7] mt-2">EVENTOS EN CDMX</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed">
              Agencia de eventos: planeación, producción e infraestructura
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <Link
              href="/contact"
              className="inline-block bg-[#22d3f7] text-black font-bold px-8 py-3 rounded-full hover:bg-[#1ab8d4] transition-colors duration-300"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      {/* Agencia de eventos */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
            AGENCIA DE EVENTOS EN CDMX
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-muted text-lg leading-relaxed mb-4">
            En La Trinchera México somos una empresa organizadora de eventos con
            más de 10 años de experiencia. Ofrecemos un servicio de
            organización de eventos completo: nos encargamos de la planeación,
            la coordinación de proveedores, la infraestructura y la operación,
            para que tu evento salga como lo imaginaste.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Si buscas empresas de eventos que se responsabilicen de cada detalle,
            o quieres contratar un organizador de eventos para tu empresa o tu
            celebración, cuéntanos tu proyecto.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
              Servicios de organización de eventos
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
            <p className="text-ink-muted text-lg max-w-3xl mx-auto">
              Elige el servicio que necesitas o combínalos en un solo evento.
            </p>
          </div>
          <ServiciosGrid />
        </div>
      </section>

      {/* Producción integral */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
            PRODUCCIÓN INTEGRAL DE EVENTOS
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-muted text-lg leading-relaxed mb-4">
            La producción de eventos incluye todo lo que ocurre entre la idea y
            el día del evento: diseño, escenarios, pantallas LED, stands,
            iluminación, sonorización y tecnología audiovisual. Con nuestra
            producción integral de eventos, un solo equipo coordina esas piezas.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Conoce la{" "}
            <Link
              href="/organizacion-de-eventos/eventos-corporativos"
              className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
            >
              producción de eventos corporativos
            </Link>
            , nuestros{" "}
            <Link
              href="/organizacion-de-eventos/stands-para-eventos"
              className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
            >
              stands para eventos
            </Link>{" "}
            y las{" "}
            <Link
              href="/organizacion-de-eventos/pantallas-para-escenarios"
              className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
            >
              pantallas para escenarios
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CDMX */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Organizadores de eventos en CDMX
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-ink-muted text-lg leading-relaxed mb-8">
            Atendemos eventos en CDMX y en el Estado de México. Si buscas empresas
            organizadoras de eventos en CDMX, una agencia de eventos en CDMX o
            una empresa para organizar eventos, escríbenos con la fecha, el tipo
            de evento y el número aproximado de asistentes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#22d3f7] text-black font-bold px-8 py-3 rounded-full hover:bg-[#1ab8d4] transition-colors duration-300"
          >
            Solicitar cotización
          </Link>
        </div>
      </section>

      <ProcesoOrganizacion />

      <InspirationSection />

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide text-center text-white">
            Preguntas frecuentes sobre organización de eventos
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-surface rounded-xl border border-white/10 p-5">
                <summary className="cursor-pointer font-semibold text-white">{f.q}</summary>
                <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
