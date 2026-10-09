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

const PATH = `${CATERING_PATH}/taquizas`;

export const metadata = buildMetadata({
  title: "Taquizas para Eventos | La Trinchera México",
  description:
    "Servicio de taquizas para eventos y fiestas en CDMX y Edomex: guisados tradicionales y carnes asadas, con cubertería y mantelería. Cotiza tu taquiza.",
  path: PATH,
  ogDescription:
    "Taquizas con guisados tradicionales y carnes asadas para fiestas y eventos en CDMX y Estado de México.",
  image: cateringImages[2],
  imageAlt: "Charolas con guisados en un buffet",
});

const faqs: Faq[] = [
  {
    q: "¿Qué incluye el servicio de taquizas?",
    a: "Ofrecemos guisados tradicionales y carnes asadas o parrilladas, con cubertería y mantelería. El servicio de meseros está disponible si lo necesitas. El alcance de cada taquiza se confirma en la cotización.",
  },
  {
    q: "¿Cuánto cuestan las taquizas para eventos?",
    a: "El precio depende del número de asistentes, el menú, la fecha y la ubicación del evento. Envíanos esos datos y preparamos una cotización.",
  },
  {
    q: "¿Hacen taquizas a domicilio?",
    a: "Atendemos eventos en CDMX y en el Estado de México. Indícanos dónde será tu evento para confirmar el servicio en esa ubicación.",
  },
  {
    q: "¿Puedo contratar meseros para la taquiza?",
    a: "Sí, el servicio de meseros está disponible. Indícalo al solicitar tu cotización.",
  },
  {
    q: "¿Qué datos necesito para cotizar una taquiza?",
    a: "Fecha, ubicación, número de asistentes, horario y tus preferencias de alimentos.",
  },
];

export default function TaquizasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StructuredData
        name="Taquizas para eventos"
        serviceType="Taquizas para eventos y fiestas"
        description="Servicio de taquizas con guisados tradicionales y carnes asadas, con cubertería y mantelería, para eventos y fiestas en CDMX y Estado de México."
        path={PATH}
        crumbs={[
          { name: "Organización de eventos", path: "/organizacion-de-eventos" },
          { name: "Catering para eventos", path: CATERING_PATH },
          { name: "Taquizas para eventos", path: PATH },
        ]}
        faqs={faqs}
      />

      <CateringHero
        titleTop="TAQUIZAS"
        titleAccent="PARA EVENTOS Y FIESTAS"
        subtitle="Guisados tradicionales y carnes asadas, con cubertería y mantelería"
        cta="Cotizar mi taquiza"
      />

      {/* Qué es */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                SERVICIO DE TAQUIZAS PARA EVENTOS
              </h2>
              <Divider />
              <p className="text-muted text-lg leading-relaxed mb-4">
                Nuestro servicio de taquizas lleva sabores mexicanos a tu
                evento: guisados tradicionales y carnes asadas para celebraciones
                familiares, taquizas para fiestas y reuniones.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Es parte de nuestro{" "}
                <Link
                  href={CATERING_PATH}
                  className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
                >
                  servicio de catering para eventos
                </Link>
                , que también cubre eventos empresariales.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Photo
                src={cateringImages[2]}
                alt="Charolas con guisados en un buffet y una persona sirviendo un plato"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Qué ofrece la taquiza
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <ul className="text-ink-muted text-lg leading-relaxed space-y-3 inline-block text-left">
            {[
              "Guisados tradicionales",
              "Carnes asadas o parrilladas",
              "Cubertería y mantelería",
              "Servicio de meseros disponible",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-ink-muted text-lg leading-relaxed mt-8">
            Si tu taquiza es para un evento de empresa, revisa también la{" "}
            <Link
              href="/organizacion-de-eventos/eventos-corporativos"
              className="text-[#1ab8d4] underline"
            >
              organización de eventos corporativos
            </Link>
            .
          </p>
        </div>
      </section>

      <CotizarSection
        heading="Qué enviar para cotizar tu taquiza"
        intro="Para preparar tu cotización de taquizas necesitamos:"
        items={[
          "Fecha del evento",
          "Ubicación",
          "Número de asistentes",
          "Horario",
          "Preferencias de alimentos",
        ]}
        cta="Cotizar mi taquiza"
      />

      <FaqSection title="Preguntas frecuentes sobre taquizas" faqs={faqs} light />

      <RelacionadasSection current="taquizas" />

      <InspirationSection />
    </div>
  );
}
