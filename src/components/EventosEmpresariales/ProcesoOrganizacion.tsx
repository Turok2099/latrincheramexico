"use client";

import {
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ClockIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function ProcesoOrganizacion() {
  const pasos = [
    {
      numero: "01",
      icono: ClipboardDocumentListIcon,
      titulo: "Consulta y Planificación",
      descripcion:
        "Iniciamos con una consulta detallada para entender tus necesidades específicas. Nuestro equipo de <strong className='text-[#22d3f7]'>profesionales en organización de eventos</strong> desarrolla un plan personalizado para tu celebración.",
      detalles: [
        "Análisis de requerimientos",
        "Propuesta personalizada",
        "Cronograma de actividades",
        "Presupuesto detallado",
      ],
    },
    {
      numero: "02",
      icono: UserGroupIcon,
      titulo: "Coordinación de Equipos",
      descripcion:
        "Coordinamos todos los proveedores y equipos necesarios. Como <strong className='text-[#22d3f7]'>empresas organizadoras de eventos</strong> experimentadas, tenemos una red sólida de colaboradores profesionales.",
      detalles: [
        "Selección de proveedores",
        "Coordinación de equipos",
        "Gestión de contratos",
        "Supervisión de calidad",
      ],
    },
    {
      numero: "03",
      icono: ClockIcon,
      titulo: "Ejecución y Supervisión",
      descripcion:
        "El día del evento, nuestro equipo supervisa cada detalle para asegurar que todo funcione perfectamente. La <strong className='text-[#22d3f7]'>organización de eventos empresariales</strong> y sociales requiere precisión absoluta.",
      detalles: [
        "Supervisión en tiempo real",
        "Resolución de imprevistos",
        "Coordinación de horarios",
        "Control de calidad",
      ],
    },
    {
      numero: "04",
      icono: CheckBadgeIcon,
      titulo: "Seguimiento y Evaluación",
      descripcion:
        "Después del evento, realizamos un seguimiento para evaluar los resultados y recopilar feedback. Esto nos permite mejorar continuamente nuestros servicios de <strong className='text-[#22d3f7]'>planificación de eventos</strong>.",
      detalles: [
        "Evaluación de resultados",
        "Recopilación de feedback",
        "Análisis de mejoras",
        "Relación a largo plazo",
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Nuestro Proceso de{" "}
            <span className="text-[#22d3f7]">Organización de Eventos</span>
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Nuestro método probado para{" "}
            <strong className="text-[#22d3f7]">organizar eventos</strong>{" "}
            garantiza resultados excepcionales. Desde la{" "}
            <strong className="text-[#22d3f7]">planificación de eventos</strong>{" "}
            inicial hasta la ejecución final, cada paso está diseñado para el
            éxito.
          </p>
        </div>

        <div className="space-y-12">
          {pasos.map((paso, index) => {
            const IconComponent = paso.icono;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Contenido de texto */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {paso.numero}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#22d3f7]" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white tracking-wide">
                    {paso.titulo}
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {paso.descripcion}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {paso.detalles.map((detalle, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></div>
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Espacio visual */}
                <div className="flex-1">
                  <div className="h-64 bg-gradient-to-br from-[#22d3f7]/10 to-gray-800 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#22d3f7] rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-300 font-medium">
                        Paso {paso.numero}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
