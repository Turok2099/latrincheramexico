import Link from "next/link";

const BASE = "/organizacion-de-eventos";

const servicios = {
  corporativos: {
    href: `${BASE}/eventos-corporativos`,
    titulo: "Eventos corporativos",
    descripcion: "Organización y producción de eventos empresariales en CDMX y Estado de México.",
  },
  bodas: {
    href: `${BASE}/organizacion-de-bodas`,
    titulo: "Organización de bodas",
    descripcion: "Planeación y organización de tu boda de principio a fin.",
  },
  catering: {
    href: `${BASE}/servicio-de-catering-para-eventos`,
    titulo: "Catering para eventos",
    descripcion: "Taquizas, box lunch, coffee break y canapés para eventos.",
  },
  stands: {
    href: `${BASE}/stands-para-eventos`,
    titulo: "Stands para eventos",
    descripcion: "Diseño, fabricación, montaje y renta de stands.",
  },
  pantallas: {
    href: `${BASE}/pantallas-para-escenarios`,
    titulo: "Pantallas para escenarios",
    descripcion: "Pantallas LED para escenarios y eventos.",
  },
  musica: {
    href: `${BASE}/musica-para-eventos`,
    titulo: "Música para eventos",
    descripcion: "DJ, grupos musicales y mariachis para tu celebración.",
  },
} as const;

export type ServicioClave = keyof typeof servicios;

export default function ServiciosRelacionados({ items }: { items: ServicioClave[] }) {
  return (
    <section className="py-16 bg-black" aria-labelledby="servicios-relacionados">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="servicios-relacionados"
          className="text-2xl md:text-3xl font-bold mb-8 tracking-wide text-center text-white"
        >
          Otros servicios para tu evento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((clave) => {
            const s = servicios[clave];
            return (
              <Link
                key={clave}
                href={s.href}
                className="block bg-surface rounded-xl border border-white/10 p-6 hover:border-[#22d3f7] focus-visible:outline-2 focus-visible:outline-[#22d3f7] transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-[#22d3f7] mb-2">{s.titulo}</h3>
                <p className="text-muted leading-relaxed">{s.descripcion}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
