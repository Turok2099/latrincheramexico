import Link from "next/link";
import InspirationSection from "@/components/Home/InspirationSection";
import {
  CATERING_PATH,
  CateringHero,
  CotizarSection,
  Divider,
  FaqSection,
  RelacionadasSection,
  StructuredData,
  buildMetadata,
  cateringImages,
  type Faq,
} from "@/components/OrganizacionDeEventos/CateringBlocks";

const PATH = `${CATERING_PATH}/box-lunch`;

export const metadata = buildMetadata({
  title: "Box Lunch para Empresas | La Trinchera México",
  description:
    "Box lunch empresarial para capacitaciones, reuniones y eventos corporativos en CDMX y Edomex. Cajas individuales y varias opciones de menú. Cotiza con La Trinchera.",
  path: PATH,
  ogDescription:
    "Box lunch empresarial: cajas individuales con varias opciones de menú para eventos corporativos en CDMX y Estado de México.",
  image: cateringImages[0],
  imageAlt: "Mesas con alimentos durante un evento",
});

const faqs: Faq[] = [
  {
    q: "¿Cómo se entrega el box lunch?",
    a: "La entrega es en el lugar de tu evento. Podemos ir al sitio, hacer un montaje y entregar los box lunch al personal.",
  },
  {
    q: "¿Cada box lunch es individual?",
    a: "Sí, cada caja es individual, lo que facilita su distribución entre los asistentes.",
  },
  {
    q: "¿Qué opciones de menú tienen?",
    a: "Contamos con varias opciones de menú. Cuéntanos tus preferencias de alimentos y las definimos en la cotización.",
  },
  {
    q: "¿Para qué eventos sirve el box lunch empresarial?",
    a: "Para eventos corporativos, como capacitaciones y reuniones, donde se necesita servir alimentos a varias personas de forma práctica.",
  },
  {
    q: "¿Qué datos necesito para cotizar box lunch para empresas?",
    a: "Fecha, ubicación, número de asistentes, horario y tus preferencias de alimentos.",
  },
];

export default function BoxLunchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StructuredData
        name="Box lunch empresarial"
        serviceType="Box lunch para empresas"
        description="Box lunch empresarial en cajas individuales, con varias opciones de menú y entrega en el lugar del evento, en CDMX y Estado de México."
        path={PATH}
        crumbs={[
          { name: "Organización de eventos", path: "/organizacion-de-eventos" },
          { name: "Catering para eventos", path: CATERING_PATH },
          { name: "Box lunch empresarial", path: PATH },
        ]}
        faqs={faqs}
      />

      <CateringHero
        titleTop="BOX LUNCH"
        titleAccent="EMPRESARIAL"
        subtitle="Cajas individuales para tus eventos corporativos, entregadas en el lugar del evento"
        cta="Cotizar box lunch"
      />

      {/* Qué es */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
            BOX LUNCH PARA EMPRESAS
          </h2>
          <Divider />
          <p className="text-muted text-lg leading-relaxed mb-4">
            El box lunch es una caja individual con alimentos, práctica para
            servir a muchas personas sin montar un banquete. Es una opción para
            capacitaciones, reuniones y otros eventos corporativos.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Forma parte de nuestro{" "}
            <Link
              href={CATERING_PATH}
              className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
            >
              servicio de catering para eventos
            </Link>
            . Si necesitas organizar todo el evento, conoce nuestra{" "}
            <Link
              href="/organizacion-de-eventos/eventos-corporativos"
              className="text-[#22d3f7] underline hover:text-[#1ab8d4]"
            >
              organización de eventos corporativos
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Alcance */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-surface">
            Cómo funciona el servicio de box lunch
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <ul className="text-ink-muted text-lg leading-relaxed space-y-3 inline-block text-left">
            {[
              "Cada caja es individual",
              "Varias opciones de menú",
              "Entrega en el lugar del evento",
              "Podemos ir al sitio, hacer un montaje y entregar los box lunch al personal",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 mt-3 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CotizarSection
        heading="Qué enviar para cotizar tu box lunch"
        intro="Para preparar tu cotización de box lunch empresarial necesitamos:"
        items={[
          "Fecha del evento",
          "Ubicación",
          "Número de asistentes",
          "Horario",
          "Preferencias de alimentos",
        ]}
        cta="Cotizar box lunch"
      />

      <FaqSection title="Preguntas frecuentes sobre box lunch" faqs={faqs} light />

      <RelacionadasSection current="box-lunch" />

      <InspirationSection />
    </div>
  );
}
