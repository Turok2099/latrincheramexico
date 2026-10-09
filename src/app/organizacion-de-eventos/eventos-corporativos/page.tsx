import Image from "next/image";
import Link from "next/link";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import ProcesoOrganizacion from "@/components/OrganizacionDeEventos/ProcesoOrganizacion";
import InspirationSection from "@/components/Home/InspirationSection";

const SITE = "https://latrincheramexico.com";
const PAGE_URL = `${SITE}/organizacion-de-eventos/eventos-corporativos`;

const faqs = [
  {
    q: "¿Qué incluye la organización de eventos corporativos?",
    a: "Planeación, diseño, infraestructura y operación del evento: escenarios, pantallas LED, stands, iluminación y sonorización, tecnología audiovisual y catering, según lo que tu empresa necesite.",
  },
  {
    q: "¿Qué tipos de eventos empresariales organizan?",
    a: "Conferencias, expos, congresos, lanzamientos y fiestas corporativas, entre otros. Cada proyecto se diseña a la medida de la empresa.",
  },
  {
    q: "¿Atienden eventos corporativos en CDMX?",
    a: "Sí. Atendemos eventos en CDMX y en el Estado de México. Cuéntanos la fecha y el tipo de evento para preparar una propuesta.",
  },
  {
    q: "¿Pueden transmitir o grabar el evento?",
    a: "Sí. Ofrecemos transmisión en vivo, transmisión multiplataforma, traducción simultánea y grabación profesional.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Escríbenos desde la página de contacto o por WhatsApp con el tipo de evento, la fecha y el número aproximado de asistentes.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Organización y producción de eventos corporativos",
      serviceType: "Eventos corporativos y empresariales",
      url: PAGE_URL,
      description:
        "Organización y producción de eventos corporativos y empresariales en CDMX: planeación, infraestructura, tecnología audiovisual y operación.",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Eventos corporativos",
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

function Bullets({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className={`${className} space-y-2`}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
    </div>
  );
}

export default function EventosCorporativosPage() {
  const images = cloudinaryImages["eventos-empresariales"];
  const cateringImages = cloudinaryImages["catering-para-eventos"];
  const heroUrl = optimizeCloudinaryUrl(images[0], {
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
            alt="Evento corporativo en CDMX con escenario y pantallas LED"
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
              EVENTOS
              <span className="block text-[#22d3f7] mt-2">CORPORATIVOS EN CDMX</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed">
              Productora y organizadores de eventos empresariales en Ciudad de México
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

      {/* Organización de eventos corporativos */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                ORGANIZACIÓN DE EVENTOS CORPORATIVOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-muted text-lg leading-relaxed mb-4">
                Somos una empresa para eventos corporativos con más de 10 años
                de experiencia. Nuestro equipo se encarga de la organización de
                eventos empresariales de principio a fin: planeación, diseño,
                infraestructura y operación.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Si buscas organizadores de eventos corporativos que se
                responsabilicen de cada detalle, trabajamos contigo para que lo
                que tu empresa necesita se haga realidad.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo src={images[0]} alt="Organización de eventos corporativos" />
            </div>
          </div>
        </div>
      </section>

      {/* Producción: infraestructura */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Photo src={images[1]} alt="Montaje de escenario y estructuras para evento empresarial" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                PRODUCCIÓN DE EVENTOS CORPORATIVOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-ink-muted text-lg leading-relaxed mb-6">
                Como productora de eventos corporativos diseñamos y montamos la
                infraestructura que tu evento necesita, desde escenarios hasta
                pantallas gigantes, stands personalizados y escenografía
                completa.
              </p>
              <Bullets
                className="text-ink-muted mb-6"
                items={[
                  "Escenarios profesionales",
                  "Pantallas gigantes LED",
                  "Stands personalizados",
                  "Iluminación y sonorización",
                ]}
              />
              <p className="text-ink-muted">
                Conoce también nuestros{" "}
                <Link href="/organizacion-de-eventos/stands-para-eventos" className="text-black underline hover:text-[#1ab8d4]">
                  stands para eventos
                </Link>{" "}
                y{" "}
                <Link href="/organizacion-de-eventos/pantallas-para-escenarios" className="text-black underline hover:text-[#1ab8d4]">
                  pantallas para escenarios
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología audiovisual */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                TECNOLOGÍA AUDIOVISUAL PARA EVENTOS EMPRESARIALES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Tecnología para transmisión en vivo, traducción simultánea y
                producción multiplataforma, para que tu evento llegue también a
                quienes no pueden asistir.
              </p>
              <Bullets
                className="text-muted"
                items={[
                  "Transmisión en vivo",
                  "Traducción simultánea",
                  "Transmisión multiplataforma",
                  "Grabación profesional",
                ]}
              />
            </div>
            <div className="order-1 lg:order-2">
              <Photo src={images[2]} alt="Tecnología audiovisual para eventos empresariales" />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de eventos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Photo src={cateringImages[0]} alt="Catering para evento corporativo" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                EVENTOS EMPRESARIALES QUE ORGANIZAMOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-ink-muted text-lg leading-relaxed mb-6">
                Organizamos conferencias, expos, congresos, lanzamientos y
                fiestas corporativas. Cada proyecto es único y lo tratamos con
                la dedicación que merece. Si tu evento requiere alimentos,
                revisa nuestro{" "}
                <Link href="/organizacion-de-eventos/servicio-de-catering-para-eventos" className="text-black underline hover:text-[#1ab8d4]">
                  servicio de catering para eventos
                </Link>
                .
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Conferencias", "Expos", "Fiestas corporativas", "Congresos", "Lanzamientos"].map((t) => (
                  <div key={t} className="bg-surface-light rounded-lg p-3 text-center border border-black/10">
                    <p className="text-ink-muted font-medium text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CDMX */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
            AGENCIA DE EVENTOS CORPORATIVOS EN CIUDAD DE MÉXICO
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Atendemos eventos en CDMX y en el Estado de México. Si buscas empresas
            organizadoras de eventos corporativos en CDMX, cuéntanos la fecha,
            el tipo de evento y el número aproximado de asistentes para
            preparar tu propuesta.
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

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide text-center text-white">
            Preguntas frecuentes sobre eventos corporativos
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-surface rounded-xl border border-white/10 p-5 group">
                <summary className="cursor-pointer font-semibold text-white">{f.q}</summary>
                <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InspirationSection />
    </div>
  );
}
