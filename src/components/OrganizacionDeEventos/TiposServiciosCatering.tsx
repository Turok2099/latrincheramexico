"use client";

export default function TiposServiciosCatering() {
  const tiposServicios = [
    {
      nombre: "Taquizas y parrilladas",
      descripcion:
        "Auténticos sabores mexicanos con guisados tradicionales y carnes asadas a la perfección. Perfectas para eventos casuales y celebraciones familiares.",
      icono: "🌮",
      caracteristicas: [
        "Guisados tradicionales",
        "Carnes asadas",
        "Con cubertería y mantelería",
        "Casual o formal",
      ],
    },
    {
      nombre: "Banquetes para fiestas",
      descripcion:
        "Servicios completos de banquetes diseñados para celebraciones especiales. Desde bodas hasta fiestas de cumpleaños con menús personalizados.",
      icono: "🍽️",
      caracteristicas: [
        "Menús personalizados",
        "Casual o formal",
        "Particulares o empresariales",
        "Alta calidad",
      ],
    },
    {
      nombre: "Comida en 3 tiempos",
      descripcion:
        "Experiencia gastronómica completa con entrada, plato fuerte y postre. Ideal para eventos formales y cenas especiales.",
      icono: "🍴",
      caracteristicas: [
        "Entrada, plato fuerte y postre",
        "Eventos formales",
        "Coordinación perfecta",
        "Amplia experiencia",
      ],
    },
    {
      nombre: "Bocadillos y canapés",
      descripcion:
        "Pequeños bocados elegantes perfectos para eventos de networking, cócteles y recepciones. Presentación artística y sabores únicos.",
      icono: "🥂",
      caracteristicas: [
        "Presentación elegante",
        "Perfectos para cócteles",
        "Variedad gourmet",
        "Fácil de servir",
      ],
    },
    {
      nombre: "Brunch y Desayunos",
      descripcion:
        "La combinación perfecta entre desayuno y almuerzo. Ideal para eventos matutinos, reuniones de trabajo y celebraciones familiares.",
      icono: "☀️",
      caracteristicas: [
        "Opción dulce y salada",
        "Cubertería y mantelería",
        "Opción de cocina en vivo",
        "Hasta 500 personas",
      ],
    },
    {
      nombre: "Box Lunch",
      descripcion:
        "Lunch boxes individuales perfectos para eventos corporativos, capacitaciones y reuniones. Prácticos, deliciosos y fáciles de distribuir.",
      icono: "📦",
      caracteristicas: [
        "Individual y práctico",
        "Eventos corporativos",
        "Fácil distribución",
        "Variedad de opciones",
      ],
    },
    {
      nombre: "Barra de café a domicilio",
      descripcion:
        "Servicio de café premium directamente en tu evento. Desde espresso hasta bebidas especiales, con barista profesional incluido.",
      icono: "☕",
      caracteristicas: [
        "Barista profesional",
        "Bebidas premium",
        "Servicio a domicilio",
        "Variedad de granos y tipos de café",
      ],
    },
    {
      nombre: "Servicio de meseros",
      descripcion:
        "Personal de servicio profesional para garantizar una atención impecable durante tu evento. Meseros experimentados que se encargan de todos los detalles del servicio.",
      icono: "🤵",
      caracteristicas: [
        "Personal profesional",
        "Atención personalizada",
        "Servicio impecable",
        "Experiencia en eventos",
      ],
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
            TIPOS DE SERVICIOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Ofrecemos una amplia variedad de servicios de catering adaptados a
            cada tipo de evento y ocasión especial
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiposServicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Icono */}
              <div className="text-4xl mb-4 text-center">{servicio.icono}</div>

              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-[#22d3f7] transition-colors duration-300">
                {servicio.nombre}
              </h3>

              {/* Descripción */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {servicio.descripcion}
              </p>

              {/* Características */}
              <div className="space-y-2">
                {servicio.caracteristicas.map((caracteristica, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">
                      {caracteristica}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-8">
            ¿No encuentras el servicio que necesitas? Contáctanos para una
            propuesta personalizada
          </p>
          <a
            href="/contact"
            className="group relative px-8 py-4 font-semibold border-2 border-[#22d3f7] bg-[#22d3f7] text-black overflow-hidden rounded-full cursor-pointer transition-all duration-300 hover:scale-105 inline-block"
          >
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
            <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
              COTIZAR SERVICIO
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
