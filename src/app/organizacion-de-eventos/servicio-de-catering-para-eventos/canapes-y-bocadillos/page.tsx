import Image from "next/image";
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

const PATH = `${CATERING_PATH}/canapes-y-bocadillos`;

export const metadata = buildMetadata({
  title: "Canapés y Bocadillos para Eventos | La Trinchera México",
  description:
    "Servicio de canapés y bocadillos para eventos empresariales y sociales en CDMX y Edomex. Presentación elegante para cócteles, recepciones y networking.",
  path: PATH,
  ogDescription:
    "Canapés y bocadillos de presentación elegante para cócteles, recepciones y eventos en CDMX y Estado de México.",
  image: cateringImages[1],
  imageAlt: "Canapés sobre pan con camarón, huevo y aguacate",
});

const faqs: Faq[] = [
  {
    q: "¿Para qué eventos son los canapés y bocadillos?",
    a: "Para cócteles, recepciones y eventos de networking, tanto empresariales como sociales.",
  },
  {
    q: "¿Qué variedad de canapés y bocadillos ofrecen?",
    a: "Contamos con variedad de canapés y bocadillos. Cuéntanos tu tipo de evento y tus preferencias de alimentos y definimos la selección en la cotización.",
  },
  {
    q: "¿El servicio incluye meseros?",
    a: "Ofrecemos servicio de meseros como un servicio disponible. Indica si lo necesitas al solicitar tu cotización para incluirlo en la propuesta.",
  },
  {
    q: "¿Cuánto cuesta el servicio de bocadillos para eventos?",
    a: "El precio depende del número de asistentes, la selección de canapés y bocadillos, la fecha y la ubicación. Envíanos esos datos y preparamos una cotización.",
  },
  {
    q: "¿Qué datos necesito para cotizar?",
    a: "Fecha, ubicación, número de asistentes, horario y tus preferencias de alimentos.",
  },
];

const galeria = [
  { i: 5, alt: "Canapés en tartaletas con uvas y otros bocadillos sobre un plato", pie: "Canapés y tartaletas" },
  { i: 6, alt: "Canapés de berenjena sobre pan, en una charola oscura", pie: "Canapés sobre pan" },
  { i: 0, alt: "Mesas con canapés, bocadillos en vasos y platos durante un evento", pie: "Mesas de bocadillos" },
];

export default function CanapesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StructuredData
        name="Canapés y bocadillos para eventos"
        serviceType="Canapés y bocadillos para eventos"
        description="Servicio de canapés y bocadillos de presentación elegante para eventos empresariales y sociales en CDMX y Estado de México."
        path={PATH}
        crumbs={[
          { name: "Organización de eventos", path: "/organizacion-de-eventos" },
          { name: "Catering para eventos", path: CATERING_PATH },
          { name: "Canapés y bocadillos", path: PATH },
        ]}
        faqs={faqs}
      />

      <CateringHero
        titleTop="CANAPÉS Y BOCADILLOS"
        titleAccent="PARA EVENTOS"
        subtitle="Presentación elegante para cócteles, recepciones y networking"
        cta="Cotizar canapés"
        image={cateringImages[1]}
        imageAlt="Canapés sobre pan con camarón, huevo y aguacate"
      />

      {/* Qué es */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                SERVICIO DE BOCADILLOS PARA EVENTOS
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                Los canapés y bocadillos son pequeños bocados de presentación
                elegante, pensados para que tus invitados coman de pie mientras
                conviven. Son una opción para cócteles, recepciones y eventos de
                networking.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-4">
                Ofrecemos bocadillos para eventos empresariales, como
                lanzamientos y recepciones corporativas, y también bocadillos
                para eventos sociales, como bodas y celebraciones.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Forman parte de nuestro{" "}
                <Link
                  href={CATERING_PATH}
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  servicio de catering para eventos
                </Link>
                . Para la organización completa conoce los{" "}
                <Link
                  href="/organizacion-de-eventos/eventos-corporativos"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  eventos corporativos
                </Link>{" "}
                y la{" "}
                <Link
                  href="/organizacion-de-eventos/organizacion-de-bodas"
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  organización de bodas
                </Link>
                .
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo
                src={cateringImages[0]}
                alt="Mesas con canapés, bocadillos en vasos y platos durante un evento"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alcance */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Qué ofrece el servicio
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <ul className="text-ink-muted text-lg leading-relaxed space-y-3 inline-block text-left">
            {[
              "Presentación elegante",
              "Variedad de canapés y bocadillos",
              "Para cócteles, recepciones y networking",
              "Para eventos empresariales y sociales",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fotografías */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide text-center text-[#22d3f7]">
            CANAPÉS Y BOCADILLOS: FOTOGRAFÍAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galeria.map((g) => (
              <figure key={g.i}>
                <div className="relative rounded-2xl overflow-hidden h-64">
                  <Image
                    src={cateringImages[g.i]}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-muted text-center">{g.pie}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CotizarSection
        heading="Qué enviar para cotizar tus canapés"
        intro="Para preparar tu cotización de canapés y bocadillos necesitamos:"
        items={[
          "Fecha del evento",
          "Ubicación",
          "Número de asistentes",
          "Horario",
          "Preferencias de alimentos",
        ]}
        cta="Cotizar canapés"
        light
      />

      <FaqSection title="Preguntas frecuentes sobre canapés y bocadillos" faqs={faqs} />

      <RelacionadasSection current="canapes-y-bocadillos" />

      <InspirationSection />
    </div>
  );
}
