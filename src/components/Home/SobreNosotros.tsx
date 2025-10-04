"use client";

import Image from "next/image";

export default function SobreNosotros() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bloque de texto - Izquierda */}
          <div className="space-y-8">
            {/* Título pequeño */}
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Sobre Nosotros
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Una empresa de{" "}
              <span className="relative">
                personas
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#22d3f7] opacity-30 -z-10"></span>
              </span>{" "}
              al servicio de personas.
            </h2>

            {/* Descripción */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#22d3f7]">
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos un equipo de{" "}
                <strong>
                  profesionales en la organización de eventos sociales
                </strong>{" "}
                con más de <strong>10 años de experiencia</strong>. Conocemos en
                profundidad nuestro negocio lo que nos permite{" "}
                <strong>llevar tu evento a un nivel superior</strong>.
              </p>
            </div>

            {/* Botón de acción */}
            <div className="pt-4">
              <button className="group relative bg-[#22d3f7] text-black font-semibold px-8 py-4 text-lg border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer hover:scale-105 transition-all duration-300">
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                  Conoce Nuestro Trabajo
                </span>
              </button>
            </div>
          </div>

          {/* Imagen - Derecha */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,fl_lossy,w_600,h_500,c_fill/v1759531986/trinchera/main-images/about2.png"
                alt="Equipo profesional de La Trinchera México"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22d3f7]/10 via-transparent to-transparent"></div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#22d3f7] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-800 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
