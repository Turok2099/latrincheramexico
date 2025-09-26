"use client";

import { useState } from "react";
import {
  HeartIcon,
  AcademicCapIcon,
  MusicalNoteIcon,
  PresentationChartLineIcon,
  CakeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function TiposEventos() {
  const [eventoSeleccionado, setEventoSeleccionado] = useState(0);

  const tiposEventos = [
    {
      icono: HeartIcon,
      titulo: "Eventos Sociales",
      descripcion:
        "Celebraciones familiares, cumpleaños, aniversarios y reuniones sociales. Creamos momentos únicos e inolvidables para tus eventos sociales más especiales.",
      caracteristicas: [
        "Cumpleaños",
        "Aniversarios",
        "Reuniones familiares",
        "Celebraciones especiales",
      ],
    },
    {
      icono: CakeIcon,
      titulo: "Bodas",
      descripcion:
        "El día más importante de tu vida merece la mejor organización. Desde la ceremonia hasta la recepción, creamos bodas únicas e inolvidables.",
      caracteristicas: [
        "Ceremonias religiosas",
        "Recepciones elegantes",
        "Decoración temática",
        "Coordinación completa",
      ],
    },
    {
      icono: TruckIcon,
      titulo: "Catering",
      descripcion:
        "Servicio de catering profesional para cualquier tipo de evento. Desde menús corporativos hasta banquetes de gala, satisfaciendo todos los paladares.",
      caracteristicas: [
        "Menús personalizados",
        "Servicio profesional",
        "Cocina en vivo",
        "Postres especializados",
      ],
    },
    {
      icono: AcademicCapIcon,
      titulo: "Graduaciones",
      descripcion:
        "Ceremonias de graduación, fiestas de graduación y celebraciones académicas. Hacemos que este momento tan especial sea perfecto y memorable.",
      caracteristicas: [
        "Ceremonias de graduación",
        "Fiestas de graduación",
        "Celebraciones académicas",
        "Eventos escolares",
      ],
    },
    {
      icono: MusicalNoteIcon,
      titulo: "Eventos Musicales",
      descripcion:
        "Conciertos, festivales, eventos musicales privados y presentaciones artísticas. Contamos con equipos de sonido e iluminación profesionales.",
      caracteristicas: [
        "Conciertos privados",
        "Festivales musicales",
        "Presentaciones artísticas",
        "Eventos culturales",
      ],
    },
    {
      icono: PresentationChartLineIcon,
      titulo: "Eventos Corporativos",
      descripcion:
        "Seminarios, workshops, eventos de ventas y presentaciones ejecutivas. Nuestra planificación de eventos corporativos maximiza el impacto y los resultados.",
      caracteristicas: [
        "Seminarios ejecutivos",
        "Workshops corporativos",
        "Eventos de ventas",
        "Presentaciones ejecutivas",
      ],
    },
  ];

  const eventoActual = tiposEventos[eventoSeleccionado];
  const IconComponent = eventoActual.icono;

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
            Tipos de <span className="text-[#22d3f7]">Eventos</span> que
            Organizamos
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nuestra experiencia destaca entre las{" "}
            <strong>empresas organizadoras de eventos. </strong>
            Eso nos permite manejar cualquier tipo de celebración, desde{" "}
            <strong>eventos sociales </strong>
            hasta <strong>organización de eventos empresariales</strong> de gran
            nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lista de navegación - Izquierda */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Selecciona un tipo de evento:
            </h3>
            {tiposEventos.map((evento, index) => {
              const IconComponent = evento.icono;
              return (
                <button
                  key={index}
                  onClick={() => setEventoSeleccionado(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    eventoSeleccionado === index
                      ? "bg-[#22d3f7] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        eventoSeleccionado === index
                          ? "bg-white/20"
                          : "bg-[#22d3f7]"
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          eventoSeleccionado === index
                            ? "text-white"
                            : "text-white"
                        }`}
                      />
                    </div>
                    <h4
                      className={`text-lg font-semibold ${
                        eventoSeleccionado === index
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {evento.titulo}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contenido dinámico - Derecha */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mr-6">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 tracking-wide">
                {eventoActual.titulo}
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {eventoActual.descripcion}
            </p>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Nuestros servicios incluyen:
              </h4>
              <ul className="space-y-3">
                {eventoActual.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-3 h-3 bg-[#22d3f7] rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-lg">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="/contact"
                className="group relative inline-block bg-[#22d3f7] text-black font-semibold px-8 py-4 text-lg border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                  Solicitar información
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
