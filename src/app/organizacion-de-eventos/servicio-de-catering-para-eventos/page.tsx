import Image from "next/image";
import Link from "next/link";
import InspirationSection from "@/components/Home/InspirationSection";
import TiposServiciosCatering from "@/components/OrganizacionDeEventos/TiposServiciosCatering";
import {
  CATERING_PATH,
  CateringHero,
  CotizarSection,
  FaqSection,
  StructuredData,
  buildMetadata,
  cateringImages,
  modalidades,
  type Faq,
} from "@/components/OrganizacionDeEventos/CateringBlocks";

export const metadata = buildMetadata({
  title: "Catering para Eventos en CDMX | La Trinchera México",
  description:
    "Servicio de catering para eventos en CDMX y Edomex: taquizas, box lunch, coffee break y canapés. Catering empresarial y banquetes. Cotiza con La Trinchera México.",
  path: CATERING_PATH,
  ogDescription:
    "Taquizas, box lunch, coffee break, canapés y más para eventos empresariales y celebraciones en CDMX y Estado de México.",
  image: cateringImages[0],
  imageAlt: "Mesas con canapés y bocadillos durante un evento",
});

const faqs: Faq[] = [
  {
    q: "¿Qué servicios de catering ofrecen?",
    a: "Taquizas, box lunch, coffee break y canapés y bocadillos, además de banquetes para fiestas, comida en 3 tiempos, brunch y desayunos, mesas temáticas y servicio de meseros. Cuéntanos tu evento y te ayudamos a elegir.",
  },
  {
    q: "¿Ofrecen servicio de catering en CDMX?",
    a: "Sí. Por ahora atendemos eventos en CDMX y en el Estado de México.",
  },
  {
    q: "¿Qué información necesitan para cotizar?",
    a: "La fecha del evento, la ubicación, el número de asistentes, el horario y tus preferencias de alimentos.",
  },
  {
    q: "¿Atienden eventos empresariales y celebraciones?",
    a: "Sí. Ofrecemos catering empresarial y también servicio para celebraciones. Si tu evento requiere organización completa, conoce nuestros servicios de organización de eventos.",
  },
];

const galeria = [
  { i: 1, alt: "Canapés sobre pan con camarón, huevo y aguacate", pie: "Canapés" },
  { i: 3, alt: "Estación de café y bebidas con vasos de papel, botellas de bebidas y postres sobre una mesa", pie: "Estación de café" },
  { i: 2, alt: "Charolas con guisados en un buffet y una persona sirviendo un plato", pie: "Guisados en buffet" },
  { i: 4, alt: "Mesa de postres con un letrero de candy bar, vasitos y cupcakes", pie: "Mesa de postres" },
];

export default function CateringPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StructuredData
        name="Servicio de catering para eventos"
        serviceType="Catering para eventos"
        description="Servicio de catering para eventos empresariales y celebraciones en CDMX y Estado de México: taquizas, box lunch, coffee break, canapés y más."
        path={CATERING_PATH}
        crumbs={[
          { name: "Organización de eventos", path: "/organizacion-de-eventos" },
          { name: "Catering para eventos", path: CATERING_PATH },
        ]}
        faqs={faqs}
      />

      <CateringHero
        titleTop="SERVICIO DE CATERING"
        titleAccent="PARA EVENTOS"
        subtitle="Taquizas, box lunch, coffee break, canapés y más para tu evento"
        cta="Cotizar catering"
        image={cateringImages[0]}
        imageAlt="Mesas con canapés y bocadillos durante un evento"
      />

      {/* Introducción */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
            SERVICIO DE CATERING PARA EVENTOS EN CDMX
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <p className="text-muted text-lg leading-relaxed mb-4">
            La Trinchera México es una empresa de organización de eventos con más
            de 10 años de experiencia. Ofrecemos servicio de catering para
            eventos empresariales y celebraciones en CDMX y en el Estado de
            México.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Si tu catering forma parte de un evento mayor, conoce la{" "}
            <Link
              href="/organizacion-de-eventos/eventos-corporativos"
              className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
            >
              organización de eventos corporativos
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
      </section>

      {/* Elegir modalidad */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
              Elige tu servicio de catering
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
            <p className="text-ink-muted text-lg max-w-3xl mx-auto">
              Cada modalidad tiene su propia página con los datos que necesitas
              para cotizar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalidades.map((m) => (
              <Link
                key={m.slug}
                href={`${CATERING_PATH}/${m.slug}`}
                className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#22d3f7]"
              >
                <h3 className="text-2xl font-bold text-surface mb-3">{m.titulo}</h3>
                <p className="text-ink-muted leading-relaxed mb-4">{m.descripcion}</p>
                <span className="text-[#1ab8d4] font-semibold">Ver servicio →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TiposServiciosCatering />

      {/* Fotografías */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
              Catering para eventos: fotografías
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {galeria.map((g) => (
              <figure key={g.i}>
                <div className="relative rounded-2xl overflow-hidden h-72">
                  <Image
                    src={cateringImages[g.i]}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-ink-muted text-center">{g.pie}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CotizarSection
        heading="Qué enviar para cotizar tu catering"
        intro="Para preparar tu cotización necesitamos:"
        items={[
          "Fecha del evento",
          "Ubicación",
          "Número de asistentes",
          "Horario",
          "Preferencias de alimentos",
        ]}
        cta="Cotizar catering"
      />

      <FaqSection title="Preguntas frecuentes sobre catering para eventos" faqs={faqs} light />

      <InspirationSection />
    </div>
  );
}

