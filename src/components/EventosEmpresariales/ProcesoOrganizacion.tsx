"use client";

import { useState } from "react";
import {
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ClockIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function ProcesoOrganizacion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            <span className="text-[#22d3f7] font-bold">organizar eventos</span>{" "}
            garantiza resultados excepcionales. Desde la{" "}
            <span className="text-[#22d3f7] font-bold">
              planificación de eventos
            </span>{" "}
            inicial hasta la ejecución final, cada paso está diseñado para el
            éxito.
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {pasos.map((paso, index) => {
            const IconComponent = paso.icono;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#22d3f7]/50"
              >
                {/* Header del Acordeón */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Número */}
                    <div className="w-12 h-12 bg-[#22d3f7] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">
                        {paso.numero}
                      </span>
                    </div>

                    {/* Icono */}
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-[#22d3f7]" />
                    </div>

                    {/* Título */}
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {paso.titulo}
                    </h3>
                  </div>

                  {/* Icono de Chevron */}
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#22d3f7] transition-transform duration-300 flex-shrink-0 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Contenido del Acordeón */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6 space-y-4">
                    {/* Descripción */}
                    <p
                      className="text-lg text-gray-300 leading-relaxed pl-16"
                      dangerouslySetInnerHTML={{ __html: paso.descripcion }}
                    />

                    {/* Detalles */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-16">
                      {paso.detalles.map((detalle, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 flex-shrink-0"></div>
                          {detalle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos hacer realidad el evento que
            tu empresa necesita
          </p>
          <a
            href="/contact"
            className="group relative inline-block px-8 py-4 font-semibold border-2 border-[#22d3f7] bg-[#22d3f7] text-black overflow-hidden rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
            <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
              SOLICITA TU COTIZACIÓN
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
