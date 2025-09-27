"use client";

import { getRandomImage } from "../../helpers/CloudinaryMapping";

export default function EventosEmpresarialesSection() {
  const imageUrl = getRandomImage("eventos-empresariales");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {imageUrl && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#22d3f7] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-300 rounded-full opacity-30"></div>
          </div>

          {/* Contenido de texto */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
                Eventos Empresariales
              </h2>
              <div className="w-24 h-1 bg-[#22d3f7] mx-auto lg:mx-0 mb-8"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              La organización de eventos empresariales requiere precisión,
              impacto y profesionalismo. Por eso, en nuestra agencia diseñamos
              experiencias corporativas que fortalecen tu marca: lanzamientos,
              conferencias, cenas de gala y team buildings. Nuestra
              planificación de eventos se basa en metodologías claras,
              proveedores confiables y una ejecución impecable, posicionándonos
              como una de las mejores agencias de eventos en CDMX.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-[#22d3f7] text-black rounded-full text-sm font-semibold">
                Lanzamientos
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Conferencias
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Cenas de Gala
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Team Buildings
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
