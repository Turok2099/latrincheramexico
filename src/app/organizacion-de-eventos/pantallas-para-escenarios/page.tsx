import Image from "next/image";
import Link from "next/link";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";

const SITE = "https://latrincheramexico.com";
const PAGE_URL = `${SITE}/organizacion-de-eventos/pantallas-para-escenarios`;

const faqs = [
  {
    q: "¿De qué medidas son las pantallas LED?",
    a: "Montamos pantallas LED de 3 × 3 metros o mayores. La configuración exacta se define y se cotiza según las necesidades de cada evento.",
  },
  {
    q: "¿Hacen el montaje de la pantalla?",
    a: "Sí. La contratación incluye el montaje de la pantalla en la ubicación de tu evento.",
  },
  {
    q: "¿Cuánto cuesta la renta de una pantalla LED?",
    a: "No manejamos un precio fijo: el costo depende de las medidas solicitadas, la ubicación, la fecha, la duración, el espacio de montaje y el uso previsto. Envíanos esos datos y preparamos tu cotización.",
  },
  {
    q: "¿Rentan pantallas LED en CDMX y Edomex?",
    a: "Sí. Por ahora atendemos eventos en CDMX y en el Estado de México (Edomex).",
  },
  {
    q: "¿Puedo usar la pantalla en exteriores?",
    a: "Indícanos si tu evento será en interior o exterior. Esa información nos permite evaluar la viabilidad del montaje al preparar tu cotización.",
  },
  {
    q: "¿Qué necesito para solicitar una cotización?",
    a: "Ciudad o recinto, fecha del evento, tamaño aproximado de la pantalla, duración y si será en interior o exterior.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Renta y montaje de pantallas LED para eventos",
      serviceType: "Renta de pantallas LED",
      url: PAGE_URL,
      description:
        "Renta y montaje de pantallas LED de 3 × 3 metros o mayores para eventos, instaladas en la ubicación del evento.",
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
          name: "Pantallas LED para eventos",
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

function Divider() {
  return (
    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
  );
}

function CtaButton() {
  return (
    <Link
      href="/contact"
      className="inline-block bg-[#22d3f7] text-black font-bold px-8 py-3 rounded-full hover:bg-[#1ab8d4] transition-colors duration-300"
    >
      Cotizar pantalla LED
    </Link>
  );
}

export default function PantallasParaEscenariosPage() {
  const images = cloudinaryImages["pantallas-para-escenarios"];
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
            alt="Pantallas LED montadas en un escenario con una imagen de un atardecer en el mar"
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
              RENTA Y MONTAJE DE
              <span className="block text-[#22d3f7] mt-2">PANTALLAS LED PARA EVENTOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed">
              Pantallas de 3 × 3 metros o mayores, montadas en la ubicación de tu evento
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <CtaButton />
          </div>
        </div>
      </section>

      {/* Renta y montaje */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                RENTA DE PANTALLAS LED PARA EVENTOS
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                Ofrecemos la renta de pantallas LED con montaje en la ubicación
                de tu evento. Tú nos cuentas qué necesitas y nosotros nos
                encargamos de instalar la pantalla.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                La Trinchera México es una empresa de organización de eventos
                con más de 10 años de experiencia, por lo que la pantalla puede
                integrarse al resto de tu evento. Conoce todos nuestros{" "}
                <Link
                  href="/organizacion-de-eventos"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  servicios de organización de eventos
                </Link>
                .
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo
                src={images[3]}
                alt="Pantallas LED en un escenario dentro de un salón de eventos con mesas y sillas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medidas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Photo
                src={images[1]}
                alt="Pantalla LED en un escenario durante un evento, mostrando a una persona en primer plano"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                PANTALLAS LED DE 3 × 3 METROS O MAYORES
              </h2>
              <Divider />
              <p className="text-ink-muted text-lg leading-relaxed mb-4">
                Montamos pantallas LED de 3 × 3 metros o de mayor tamaño. Si
                buscas pantallas gigantes para eventos, la configuración se
                define y se cotiza según las necesidades de tu proyecto.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed">
                Cuéntanos qué medidas necesitas y el espacio disponible, y
                preparamos una propuesta a tu medida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                PANTALLAS PARA ESCENARIOS Y EVENTOS
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                Las pantallas LED se usan en escenarios para mostrar
                presentaciones, videos e imágenes a los asistentes. Las
                montamos, por ejemplo, en{" "}
                <Link
                  href="/organizacion-de-eventos/eventos-corporativos"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  eventos corporativos
                </Link>
                , conciertos y{" "}
                <Link
                  href="/organizacion-de-eventos/organizacion-de-bodas"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  bodas
                </Link>
                .
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Cuando la pantalla es parte de un evento más grande, también
                podemos coordinar la planeación y el resto de la
                infraestructura.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo
                src={images[0]}
                alt="Pantallas LED montadas en un escenario con una imagen de un atardecer en el mar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Photo
                src={images[2]}
                alt="Estación de control con monitores frente a una estructura con pantallas LED"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
                Cómo definimos tu propuesta
              </h2>
              <Divider />
              <p className="text-ink-muted text-lg leading-relaxed mb-4">
                Preparamos la propuesta de renta de tu pantalla LED a partir de:
              </p>
              <ul className="text-ink-muted text-lg leading-relaxed space-y-2">
                {[
                  "Las medidas solicitadas",
                  "La ubicación del evento",
                  "La fecha",
                  "La duración",
                  "El espacio de montaje",
                  "El uso previsto de la pantalla",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cotización */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
            QUÉ ENVIAR PARA COTIZAR
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-muted text-lg leading-relaxed mb-4">
            Para cotizar la renta de pantallas LED en CDMX o Estado de México,
            envíanos:
          </p>
          <ul className="text-muted text-lg leading-relaxed mb-6 space-y-1">
            <li>Ciudad o recinto del evento</li>
            <li>Fecha</li>
            <li>Tamaño aproximado de la pantalla</li>
            <li>Duración</li>
            <li>Si el evento será en interior o exterior</li>
          </ul>
          <p className="text-muted mb-8">
            Indicar si el evento es en interior o exterior nos sirve para
            evaluar la viabilidad del montaje.
          </p>
          <CtaButton />
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide text-center text-surface">
            Preguntas frecuentes sobre pantallas LED para eventos
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl border border-black/10 p-5">
                <summary className="cursor-pointer font-semibold text-surface">{f.q}</summary>
                <p className="mt-3 text-ink-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InspirationSection />
    </div>
  );
}
