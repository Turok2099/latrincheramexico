"use client";

import { useState } from "react";

export default function LaTrinchera() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/latrinchera.JPG')",
        }}
      >
        {/* Overlay para el blur cuando se activa la información */}
        <div
          className={`absolute inset-0 backdrop-blur-sm bg-black/50 transition-all duration-500 ${
            showInfo ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Contenido informativo */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
                ¿En que se inspira el nombre de la Trinchera México?
              </h2>
              <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
                La Trinchera México se inspira en uno de las obras más icónicas
                del famoso muralista José Clemente Orozco, «LA TRINCHERA», que
                fue plasmada en el Antiguo Colegio de San Ildefonso y se remonta
                al año 1926, cuando iniciaba la guerra cristera en México. El
                muralismo en México es reconocido a nivel mundial y ha inspirado
                a artistas de todo el mundo y ahora sirve de inspiración para
                nuestro restaurante.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón central inferior */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="group relative w-fit bg-[#22d3f7] text-black font-medium px-8 py-4 text-base border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          {/* Capa blanca animada que entra desde la izquierda */}
          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>

          {/* Texto que pasa de blanco a turquesa */}
          <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
            {showInfo ? "CERRAR INFORMACIÓN" : "CONOCE LA HISTORIA"}
          </span>
        </button>
      </div>

      {/* Bloque del pintor - esquina inferior derecha */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
            LA TRINCHERA
          </h3>
          <p className="text-lg text-[#22d3f7] font-medium">
            José Clemente Orozco
          </p>
          <p className="text-sm text-gray-300 mt-1">
            1926 • Antiguo Colegio de San Ildefonso
          </p>
        </div>
      </div>
    </section>
  );
}
