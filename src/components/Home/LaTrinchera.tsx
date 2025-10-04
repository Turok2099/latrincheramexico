"use client";

import { useState, useEffect } from "react";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import Image from "next/image";

export default function LaTrinchera() {
  const [showInfo, setShowInfo] = useState(false);

  // URL optimizada para LCP crítico
  const heroImageUrl =
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1759531984/trinchera/main-images/latrinchera.jpg";
  const optimizedHeroUrl = optimizeCloudinaryUrl(heroImageUrl, {
    width: 1920,
    height: 1080,
    quality: "auto:eco",
    priority: true,
  });

  // Preload crítico
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = optimizedHeroUrl;
    link.fetchPriority = "high";
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [optimizedHeroUrl]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo optimizada con Next/Image */}
      <div className="absolute inset-0">
        <Image
          src={optimizedHeroUrl}
          alt="La Trinchera México - Mural José Clemente Orozco"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      <div className="absolute inset-0">
        {/* Overlay para el blur cuando se activa la información */}
        <div
          className={`absolute inset-0 backdrop-blur-sm bg-black/50 transition-all duration-500 ${
            showInfo ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Contenido informativo */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-wide leading-tight">
                ¿En qué se inspira el nombre de La Trinchera México?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                La Trinchera México se inspira en una de las obras más icónicas
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
      <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 z-10 px-4 w-full max-w-md">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="group relative w-full md:w-auto bg-[#22d3f7] text-black font-medium px-6 md:px-8 py-3 md:py-4 text-sm md:text-base border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          {/* Capa blanca animada que entra desde la izquierda */}
          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>

          {/* Texto que pasa de blanco a turquesa */}
          <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
            {showInfo ? "CERRAR" : "CONOCE LA HISTORIA"}
          </span>
        </button>
      </div>

      {/* Bloque del pintor - esquina inferior derecha */}
      <div className="absolute bottom-20 md:bottom-8 right-4 md:right-8 z-10 max-w-[280px] md:max-w-none">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-6 border border-white/20">
          <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 tracking-wide">
            LA TRINCHERA
          </h3>
          <p className="text-sm md:text-lg text-[#22d3f7] font-medium">
            José Clemente Orozco
          </p>
          <p className="text-xs md:text-sm text-gray-300 mt-1">
            1926 • Antiguo Colegio de San Ildefonso
          </p>
        </div>
      </div>
    </section>
  );
}
