"use client";

import { getRandomImage } from "../../helpers/CloudinaryMapping";

export default function SolucionesEscalablesSection() {
  const imageUrl = getRandomImage("pantallas-para-escenarios");

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
                Soluciones Escalables
              </h2>
              <div className="w-24 h-1 bg-[#22d3f7] mx-auto lg:mx-0 mb-8"></div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Ya sea que busques la organización de fiestas privadas o la
              organización de eventos masivos, nuestro equipo en la organización
              de eventos CDMX está listo para ayudarte. Combinamos tecnología,
              logística y creatividad para ofrecer soluciones escalables y
              memorables. Si estás buscando una empresa que entienda tus
              necesidades y las convierta en resultados, estás en el lugar
              correcto.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-[#22d3f7] text-black rounded-full text-sm font-semibold">
                Fiestas Privadas
              </span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-semibold">
                Eventos Masivos
              </span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-semibold">
                Tecnología
              </span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-semibold">
                Logística
              </span>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {imageUrl && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#22d3f7] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-600 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
