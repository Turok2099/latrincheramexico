// Otras modalidades de catering que se presentan en la página principal
// (sin subpágina propia). Descripciones breves y sin cifras ni promesas.
const otrosServicios = [
  {
    nombre: "Banquetes para fiestas",
    descripcion:
      "Banquetes para bodas, cumpleaños y otras celebraciones, particulares o empresariales.",
  },
  {
    nombre: "Comida en 3 tiempos",
    descripcion: "Entrada, plato fuerte y postre para eventos formales y cenas especiales.",
  },
  {
    nombre: "Brunch y desayunos",
    descripcion: "Opciones dulces y saladas para eventos matutinos y reuniones de trabajo.",
  },
  {
    nombre: "Mesas temáticas",
    descripcion: "Mesas dulces y saladas adaptadas a la temática de tu evento.",
  },
  {
    nombre: "Servicio de meseros",
    descripcion: "Personal de servicio para atender a tus invitados durante el evento.",
  },
];

export default function TiposServiciosCatering() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
            CATERING EMPRESARIAL Y BANQUETES PARA EVENTOS
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            Además de las cuatro modalidades anteriores, el servicio de catering
            para eventos empresariales y celebraciones puede incluir banquetes
            para eventos y otros servicios. Cuéntanos qué necesitas y armamos la
            propuesta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otrosServicios.map((s) => (
            <div key={s.nombre} className="bg-surface rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">{s.nombre}</h3>
              <p className="text-muted leading-relaxed">{s.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
