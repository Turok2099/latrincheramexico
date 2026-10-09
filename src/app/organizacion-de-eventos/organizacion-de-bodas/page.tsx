import Image from "next/image";
import Link from "next/link";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";

const SITE = "https://latrincheramexico.com";
const PAGE_URL = `${SITE}/organizacion-de-eventos/organizacion-de-bodas`;

const faqs = [
  {
    q: "¿Qué incluye el servicio de wedding planner?",
    a: "Planeación de la boda, coordinación de proveedores, infraestructura para el montaje visual y coordinación el día del evento. Puedes contratar el servicio completo o solo la parte que necesites.",
  },
  {
    q: "¿Cuánto cuesta un wedding planner?",
    a: "No hay un precio fijo: el costo depende del número de invitados, la fecha, el lugar, el estilo de la boda y los servicios que incluyas. Cotizamos cada boda a la medida; cuéntanos tu proyecto y te preparamos una propuesta con presupuesto detallado.",
  },
  {
    q: "¿Con cuánto tiempo conviene contratar un wedding planner?",
    a: "Mientras antes nos escribas, más margen hay para planear y coordinar. Comparte tu fecha tentativa y revisamos juntos cómo organizarla.",
  },
  {
    q: "¿Organizan bodas pequeñas?",
    a: "Sí. Organizamos bodas privadas, pequeñas o grandes, y adaptamos la planeación y la infraestructura al tamaño de tu celebración.",
  },
  {
    q: "¿Atienden bodas en CDMX y Estado de México?",
    a: "Sí. Atendemos bodas en CDMX y en el Estado de México.",
  },
];

const pasos = [
  {
    titulo: "Consulta y propuesta",
    texto:
      "Conocemos tu idea, la fecha, el número de invitados y el estilo de tu boda, y preparamos una propuesta personalizada con cronograma y presupuesto detallado.",
  },
  {
    titulo: "Planeación y coordinación de proveedores",
    texto:
      "Definimos el plan, seleccionamos y coordinamos a los proveedores y diseñamos la infraestructura del montaje.",
  },
  {
    titulo: "Montaje",
    texto:
      "Instalamos la infraestructura y la ambientación para que todo esté listo antes de que lleguen tus invitados.",
  },
  {
    titulo: "Coordinación el día de la boda",
    texto:
      "Supervisamos en tiempo real los horarios, los proveedores y el montaje, y resolvemos los imprevistos.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Organización de bodas",
      serviceType: "Organización y coordinación de bodas",
      url: PAGE_URL,
      description:
        "Organización de bodas privadas, pequeñas o grandes, en CDMX: planeación, coordinación de proveedores e infraestructura para el montaje.",
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
          name: "Organización de bodas",
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

export default function OrganizacionDeBodasPage() {
  const images = cloudinaryImages["organizacion-de-bodas"];
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
            alt="Boda organizada por La Trinchera México en CDMX"
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
              <span className="block text-[#22d3f7] mt-2">BODAS EN CDMX</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed">
              Wedding planner para bodas privadas, pequeñas o grandes
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <Link
              href="/contact"
              className="inline-block bg-[#22d3f7] text-black font-bold px-8 py-3 rounded-full hover:bg-[#1ab8d4] transition-colors duration-300"
            >
              Cotizar mi boda
            </Link>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                WEDDING PLANNER EN CDMX
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                En La Trinchera México somos una empresa organizadora de bodas
                con más de 10 años de experiencia organizando eventos. Como tu
                wedding planner en CDMX nos encargamos de la organización de tu
                boda privada: planeación, coordinación de proveedores e
                infraestructura para el montaje visual.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Nuestro servicio de organización de bodas se adapta al tamaño de
                tu celebración, ya sea una boda pequeña o una gran fiesta.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo src={images[0]} alt="Organización de bodas en CDMX" />
            </div>
          </div>
        </div>
      </section>

      {/* Planeación de bodas */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
              Planeación de bodas, paso a paso
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
            <p className="text-ink-muted text-lg max-w-3xl mx-auto">
              Así trabajamos la planeación de tu boda, de la primera consulta al
              día del evento.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pasos.map((p, i) => (
              <li key={p.titulo} className="bg-white rounded-2xl p-8 shadow-lg">
                <span className="text-[#1ab8d4] font-bold text-sm tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold text-surface mt-2 mb-3">{p.titulo}</h3>
                <p className="text-ink-muted leading-relaxed">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Servicio incluido */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Photo src={images[1]} alt="Montaje e infraestructura para una boda" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                SERVICIO DE WEDDING PLANNER: QUÉ INCLUYE
              </h2>
              <Divider />
              <ul className="text-muted text-lg leading-relaxed space-y-4">
                <li>
                  <strong className="text-white">Planeación y cronograma</strong>{" "}
                  de tu boda.
                </li>
                <li>
                  <strong className="text-white">Coordinación de proveedores</strong>{" "}
                  antes y durante el evento.
                </li>
                <li>
                  <strong className="text-white">Infraestructura para el montaje visual</strong>{" "}
                  de la boda, por ejemplo escenarios y{" "}
                  <Link
                    href="/organizacion-de-eventos/pantallas-para-escenarios"
                    className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                  >
                    pantallas LED
                  </Link>
                  , según tu proyecto.
                </li>
                <li>
                  <strong className="text-white">Catering opcional:</strong>{" "}
                  conoce nuestro{" "}
                  <Link
                    href="/organizacion-de-eventos/servicio-de-catering-para-eventos"
                    className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                  >
                    servicio de catering para eventos
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinación del día */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
                Coordinador de bodas el día del evento
              </h2>
              <Divider />
              <p className="text-ink-muted text-lg leading-relaxed mb-4">
                El día de la boda, nuestro equipo actúa como coordinador de
                bodas: supervisa en tiempo real los horarios, los proveedores y
                el montaje, y resuelve los imprevistos para que tú y tus
                invitados solo se ocupen de disfrutar.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed">
                Organizamos bodas privadas pequeñas o grandes: adaptamos la
                coordinación y la infraestructura al número de invitados y al
                estilo que imaginas.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo src={images[2]} alt="Coordinación de una boda privada" />
            </div>
          </div>
        </div>
      </section>

      {/* Cotización */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
            COTIZACIÓN DE WEDDING PLANNER
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-muted text-lg leading-relaxed mb-4">
            Para preparar tu cotización de wedding planner necesitamos:
          </p>
          <ul className="text-muted text-lg leading-relaxed mb-8 space-y-1">
            <li>La fecha tentativa de tu boda</li>
            <li>El número aproximado de invitados</li>
            <li>El lugar, si ya lo tienes</li>
            <li>El estilo que imaginas y los servicios que necesitas</li>
          </ul>
          <p className="text-muted text-lg mb-8">
            ¿Quieres contratar un wedding planner para tu boda? Escríbenos y
            te enviamos una propuesta a tu medida.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#22d3f7] text-black font-bold px-8 py-3 rounded-full hover:bg-[#1ab8d4] transition-colors duration-300"
          >
            Cotizar mi boda
          </Link>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide text-center text-surface">
            Preguntas frecuentes sobre organización de bodas
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
