import Image from "next/image";
import Link from "next/link";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";

const SITE = "https://latrincheramexico.com";
const PAGE_URL = `${SITE}/organizacion-de-eventos/stands-para-eventos`;

const datosCotizacion = [
  "Fecha del evento",
  "Ciudad y recinto",
  "Medidas del espacio y altura permitida",
  "Tipo de espacio",
  "Objetivo de la marca en el evento",
  "Referencias visuales",
  "Presupuesto aproximado",
  "Horarios de montaje y desmontaje que indique el organizador",
];

const faqs = [
  {
    q: "¿Qué información necesitan para cotizar un stand?",
    a: "La fecha del evento, la ciudad y el recinto, las medidas del espacio y la altura permitida, el tipo de espacio, el objetivo de tu marca, referencias visuales, un presupuesto aproximado y los horarios de montaje y desmontaje del organizador.",
  },
  {
    q: "¿Qué incluye el servicio de stands?",
    a: "Diseño, fabricación y montaje de stands para eventos, ferias y exposiciones, y también la renta de stands. El alcance exacto de cada proyecto se define en la cotización.",
  },
  {
    q: "¿Rentan stands?",
    a: "Sí. La renta de stands para expo y ferias no tiene un costo fijo: elaboramos el presupuesto después de diseñar el proyecto y el stand.",
  },
  {
    q: "¿De qué depende el precio de un stand o de su renta?",
    a: "No manejamos un precio fijo. Elaboramos el presupuesto después de diseñar el proyecto y el stand, a partir de las medidas del espacio, el diseño necesario, el recinto y los horarios de montaje.",
  },
  {
    q: "¿Pueden adaptar el diseño al espacio de la exposición?",
    a: "Sí. Diseñamos el stand según tu marca, tu objetivo y el espacio asignado por el organizador. Compártenos las medidas y la altura permitida.",
  },
  {
    q: "¿Atienden eventos en CDMX?",
    a: "Sí. Por ahora atendemos eventos en CDMX y en el Estado de México.",
  },
];

const ejemplos = [
  {
    indice: 1,
    alt: "Render de un stand con panel rojo, logotipos hexagonales iluminados y una pantalla al centro",
    pie: "Diseño de stand (render)",
  },
  {
    indice: 4,
    alt: "Módulo de atención tipo mostrador con paneles gráficos en un diseño en 3D",
    pie: "Diseño de módulo de atención (render)",
  },
  {
    indice: 2,
    alt: "Escenario montado dentro de una carpa, con panel gráfico rojo y blanco, podio y pantalla de presentación",
    pie: "Montaje de escenografía",
  },
  {
    indice: 5,
    alt: "Render de un escenario con escalones, pantallas y gráficos de colores",
    pie: "Diseño de escenografía (render)",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Diseño, fabricación, montaje y renta de stands",
      serviceType: "Stands para eventos, ferias y exposiciones",
      url: PAGE_URL,
      description:
        "Diseño, fabricación, montaje y renta de stands personalizados para eventos, ferias y exposiciones.",
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
          name: "Stands para eventos",
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
      Cotizar mi stand
    </Link>
  );
}

export default function StandsParaEventosPage() {
  const images = cloudinaryImages["stands-para-eventos"];
  const heroUrl = optimizeCloudinaryUrl(images[3], {
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
            alt="Pasillo de una exposición con varios stands y visitantes"
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
              STANDS PARA EVENTOS,
              <span className="block text-[#22d3f7] mt-2">FERIAS Y EXPOSICIONES</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed">
              Diseño, fabricación, montaje y renta de stands personalizados
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <CtaButton />
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                STANDS PARA EXPOSICIONES Y EVENTOS
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                Diseñamos, fabricamos y montamos stands para eventos, ferias y
                exposiciones. La Trinchera México es una empresa de
                organización de eventos con más de 10 años de experiencia, y
                trabajamos cada stand a partir de lo que tu marca necesita
                mostrar.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Si tu stand forma parte de un evento mayor, conoce nuestros{" "}
                <Link
                  href="/organizacion-de-eventos"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  servicios de organización de eventos
                </Link>{" "}
                y la{" "}
                <Link
                  href="/organizacion-de-eventos/eventos-corporativos"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  organización de eventos corporativos
                </Link>
                .
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo
                src={images[1]}
                alt="Render de un stand con panel rojo, logotipos hexagonales iluminados y una pantalla al centro"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diseño */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Diseño de stands según tu marca y tu espacio
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-ink-muted text-lg leading-relaxed mb-4">
            El diseño de stands parte de tres datos: tu marca, el objetivo que
            quieres lograr en el evento y el espacio que te asignó el
            organizador. Con esa información desarrollamos stands
            personalizados que se adaptan a las medidas y a la altura
            permitida del recinto.
          </p>
          <p className="text-ink-muted text-lg leading-relaxed">
            Compártenos tus referencias visuales y las medidas de tu espacio, y
            preparamos una propuesta de diseño y montaje de stands a tu medida.
          </p>
        </div>
      </section>

      {/* Fabricación y montaje */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Photo
                src={images[2]}
                alt="Escenario montado dentro de una carpa, con panel gráfico rojo y blanco, podio y pantalla de presentación"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                FABRICACIÓN Y MONTAJE DE STANDS
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                Una vez aprobado el diseño, nos encargamos de la fabricación de
                stands y de su montaje en el recinto. Coordinamos el montaje y
                el desmontaje con los horarios que indique el organizador del
                evento.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                ¿Tu stand necesita pantallas? Consulta la{" "}
                <Link
                  href="/organizacion-de-eventos/pantallas-para-escenarios"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  renta de pantallas LED para eventos
                </Link>
                ; se cotiza como un servicio aparte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Renta */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Renta de stands para expo
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-ink-muted text-lg leading-relaxed mb-4">
            Además de diseñar, fabricar y montar tu stand, ofrecemos la renta de
            stands para ferias, exposiciones y eventos corporativos. La renta no
            tiene un costo fijo: elaboramos el presupuesto después de diseñar el
            proyecto y el stand, según tu marca, el espacio asignado y las
            necesidades de tu evento.
          </p>
          <p className="text-ink-muted text-lg leading-relaxed">
            Si buscas renta de stands en CDMX o en el Estado de México, envíanos
            los datos de tu evento y empezamos con el diseño.
          </p>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
              EJEMPLOS DE TRABAJOS
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ejemplos.map((e) => (
              <figure key={e.indice}>
                <div className="relative rounded-2xl overflow-hidden h-72">
                  <Image
                    src={images[e.indice]}
                    alt={e.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-muted text-center">{e.pie}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Cotización */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Qué enviar para cotizar tu stand
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-ink-muted text-lg leading-relaxed mb-6">
            Para preparar tu cotización necesitamos:
          </p>
          <ul className="text-ink-muted text-lg leading-relaxed mb-8 space-y-2 inline-block text-left">
            {datosCotizacion.map((d) => (
              <li key={d} className="flex items-center">
                <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 shrink-0"></span>
                {d}
              </li>
            ))}
          </ul>
          <div>
            <CtaButton />
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide text-center text-white">
            Preguntas frecuentes sobre stands para eventos
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

      <InspirationSection />
    </div>
  );
}
