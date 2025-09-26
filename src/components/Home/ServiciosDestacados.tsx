import {
  UserGroupIcon,
  CogIcon,
  ChartBarIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function ServiciosDestacados() {
  const caracteristicas = [
    {
      id: 1,
      titulo: "Experiencia Personalizada",
      descripcion:
        "Diseño de eventos a medida según el tipo de público y objetivos del cliente. Asesoría creativa para lograr un impacto emocional y visual memorable.",
      icono: UserGroupIcon,
    },
    {
      id: 2,
      titulo: "Expertise Técnico y Logístico",
      descripcion:
        "Coordinación profesional con proveedores, artistas y staff técnico. Infraestructura robusta para eventos sociales, empresariales y masivos.",
      icono: CogIcon,
    },
    {
      id: 3,
      titulo: "Impacto Medible",
      descripcion:
        "Eventos que generan resultados: posicionamiento, engagement, ventas o fidelización. Métricas claras para evaluar el retorno de inversión.",
      icono: ChartBarIcon,
    },
    {
      id: 4,
      titulo: "Innovación y Tecnología",
      descripcion:
        "Uso de herramientas digitales para planificación, seguimiento y visualización. Integración de experiencias interactivas y escenografías modernas.",
      icono: LightBulbIcon,
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
            Nuestro Enfoque
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Combinamos creatividad, tecnología y experiencia para crear eventos
            extraordinarios
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caracteristicas.map((caracteristica) => {
            const IconComponent = caracteristica.icono;
            return (
              <div
                key={caracteristica.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Icono */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center tracking-wide">
                  {caracteristica.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {caracteristica.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
