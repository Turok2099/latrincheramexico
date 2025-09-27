"use client";

import { getRandomImage } from "../../helpers/CloudinaryMapping";

export default function EventosSocialesSection() {
  const imageUrl = getRandomImage("eventos-sociales");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
                Eventos Sociales
              </h2>
              <div className="w-24 h-1 bg-[#22d3f7] mx-auto lg:mx-0 mb-8"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              En nuestra empresa <span className="text-[#22d3f7] font-semibold">organizadora de eventos en CDMX</span>, transformamos
              cada idea en una experiencia inolvidable. Nos especializamos en la
              <span className="text-[#22d3f7] font-semibold"> organización de eventos sociales</span>, desde <span className="text-[#22d3f7] font-semibold">bodas</span> y <span className="text-[#22d3f7] font-semibold">cumpleaños</span> hasta
              <span className="text-[#22d3f7] font-semibold"> celebraciones temáticas</span>, cuidando cada detalle para que tú solo te
              ocupes de disfrutar. Con un enfoque personalizado y creativo,
              convertimos cualquier evento social en un momento único que
              refleja tu estilo y propósito.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-[#22d3f7] text-black rounded-full text-sm font-semibold">
                Bodas
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Cumpleaños
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Fiestas Infantiles
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                DJ para eventos
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#22d3f7] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
