import Link from "next/link";
import InspirationSection from "@/components/Home/InspirationSection";
import {
  CATERING_PATH,
  CateringHero,
  CotizarSection,
  Divider,
  FaqSection,
  Photo,
  RelacionadasSection,
  StructuredData,
  buildMetadata,
  cateringImages,
  type Faq,
} from "@/components/OrganizacionDeEventos/CateringBlocks";

const PATH = `${CATERING_PATH}/coffee-break`;

export const metadata = buildMetadata({
  title: "Coffee Break para Eventos | La Trinchera México",
  description:
    "Servicio de coffee break para eventos y empresas en CDMX y Edomex: café y bebidas calientes, alimentos, barra de café con barista y montaje de la estación.",
  path: PATH,
  ogDescription:
    "Coffee break para reuniones y eventos de empresa: café, bebidas calientes, alimentos y montaje de la estación en CDMX y Estado de México.",
  image: cateringImages[3],
  imageAlt: "Estación de café y bebidas con vasos de papel sobre una mesa",
});

const faqs: Faq[] = [
  {
    q: "¿Qué incluye el servicio de coffee break?",
    a: "Café y bebidas calientes, alimentos para acompañar y el montaje de la estación o mesa en tu evento. El alcance exacto se confirma en la cotización.",
  },
  {
    q: "¿El coffee break incluye barista?",
    a: "Ofrecemos barra de café con barista. Indícalo al solicitar tu cotización para incluirlo en la propuesta.",
  },
  {
    q: "¿Montan la estación de coffee break en mi evento?",
    a: "Sí. El servicio incluye el montaje de la estación o mesa en el lugar del evento.",
  },
  {
    q: "¿Cuánto cuesta un coffee break para empresas?",
    a: "El precio depende del número de asistentes, los alimentos y bebidas elegidos, la fecha y la ubicación. Envíanos esos datos y preparamos una cotización.",
  },
  {
    q: "¿Qué datos necesito para cotizar un coffee break?",
    a: "Fecha, ubicación, número de asistentes, horario y tus preferencias de alimentos y bebidas.",
  },
];

export default function CoffeeBreakPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StructuredData
        name="Coffee break para eventos"
        serviceType="Coffee break para eventos y empresas"
        description="Servicio de coffee break con café, bebidas calientes, alimentos y montaje de la estación, con opción de barra de café con barista, en CDMX y Estado de México."
        path={PATH}
        crumbs={[
          { name: "Organización de eventos", path: "/organizacion-de-eventos" },
          { name: "Catering para eventos", path: CATERING_PATH },
          { name: "Coffee break para eventos", path: PATH },
        ]}
        faqs={faqs}
      />

      <CateringHero
        titleTop="COFFEE BREAK"
        titleAccent="PARA EVENTOS"
        subtitle="Café, bebidas calientes y alimentos para reuniones y eventos de empresa"
        cta="Cotizar coffee break"
        image={cateringImages[3]}
        imageAlt="Estación de café y bebidas con vasos de papel, botellas de bebidas y postres sobre una mesa"
      />

      {/* Qué es */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                SERVICIO DE COFFEE BREAK PARA EMPRESAS
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                El coffee break es una pausa con café, bebidas calientes y
                alimentos para acompañar, pensada para reuniones de trabajo,
                capacitaciones y otros eventos empresariales. Es una opción de
                coffee break ejecutivo cuando se necesita atender a un grupo sin
                interrumpir la agenda.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Forma parte de nuestro{" "}
                <Link
                  href={CATERING_PATH}
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  servicio de catering para eventos
                </Link>
                . Para eventos de empresa más grandes, conoce la{" "}
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
                src={cateringImages[3]}
                alt="Estación de café y bebidas con vasos de papel, botellas de bebidas y postres sobre una mesa"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alcance */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Qué ofrece el coffee break
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <ul className="text-ink-muted text-lg leading-relaxed space-y-3 inline-block text-left">
            {[
              "Café y bebidas calientes",
              "Alimentos para acompañar",
              "Montaje de la estación o mesa en tu evento",
              "Opción de barra de café con barista",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-ink-muted text-lg leading-relaxed mt-8">
            Si buscas un coffee break a domicilio, indícanos la ubicación de tu
            evento: atendemos CDMX y Estado de México.
          </p>
        </div>
      </section>

      <CotizarSection
        heading="Qué enviar para cotizar tu coffee break"
        intro="Para preparar tu cotización de coffee break necesitamos:"
        items={[
          "Fecha del evento",
          "Ubicación",
          "Número de asistentes",
          "Horario",
          "Preferencias de alimentos y bebidas",
        ]}
        cta="Cotizar coffee break"
      />

      <FaqSection title="Preguntas frecuentes sobre coffee break" faqs={faqs} light />

      <RelacionadasSection current="coffee-break" />

      <InspirationSection />
    </div>
  );
}
