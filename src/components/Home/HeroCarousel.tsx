"use client";

import { useState, useEffect } from "react";

// Lista completa de imágenes reales de todas las subcarpetas de public
const allServiceImages = [
  // Eventos sociales
  "/eventos-sociales/23.png",
  "/eventos-sociales/24.png",
  "/eventos-sociales/25.png",
  "/eventos-sociales/26.png",
  "/eventos-sociales/27.png",
  "/eventos-sociales/28.png",
  "/eventos-sociales/29.png",
  "/eventos-sociales/30.png",
  "/eventos-sociales/31.png",

  // Catering para eventos
  "/catering-para-eventos/1.png",
  "/catering-para-eventos/2.png",
  "/catering-para-eventos/3.png",
  "/catering-para-eventos/4.png",
  "/catering-para-eventos/5.png",
  "/catering-para-eventos/6.png",
  "/catering-para-eventos/55.png",

  // Eventos empresariales
  "/eventos-empresariales/7.png",
  "/eventos-empresariales/8.png",
  "/eventos-empresariales/9.png",
  "/eventos-empresariales/10.jpeg",
  "/eventos-empresariales/11.jpeg",
  "/eventos-empresariales/12.jpeg",
  "/eventos-empresariales/13.jpeg",
  "/eventos-empresariales/14.jpeg",
  "/eventos-empresariales/15.jpg",
  "/eventos-empresariales/16.jpg",
  "/eventos-empresariales/17.jpg",
  "/eventos-empresariales/18.jpg",
  "/eventos-empresariales/19.jpg",
  "/eventos-empresariales/20.jpg",
  "/eventos-empresariales/21.jpg",
  "/eventos-empresariales/22.jpg",
  "/eventos-empresariales/56.png",
  "/eventos-empresariales/60.png",

  // Organización de bodas
  "/organizacion-de-bodas/40.png",
  "/organizacion-de-bodas/41.png",
  "/organizacion-de-bodas/42.png",
  "/organizacion-de-bodas/43.png",
  "/organizacion-de-bodas/44.png",
  "/organizacion-de-bodas/45.png",
  "/organizacion-de-bodas/57.png",
  "/organizacion-de-bodas/61.png",

  // Pantallas para escenarios
  "/pantallas-para-escenarios/46.jpg",
  "/pantallas-para-escenarios/47.jpg",
  "/pantallas-para-escenarios/48.jpg",
  "/pantallas-para-escenarios/49.jpg",
  "/pantallas-para-escenarios/50.jpeg",
  "/pantallas-para-escenarios/51.jpeg",
  "/pantallas-para-escenarios/52.jpeg",
  "/pantallas-para-escenarios/53.jpeg",
  "/pantallas-para-escenarios/54.jpeg",
  "/pantallas-para-escenarios/62.jpg",

  // Stands para eventos
  "/stands-para-eventos/63.jpg",
  "/stands-para-eventos/64.jpg",
  "/stands-para-eventos/65.jpg",
  "/stands-para-eventos/66.jpg",
  "/stands-para-eventos/67.jpg",
  "/stands-para-eventos/68.jpg",
  "/stands-para-eventos/69.jpeg",
  "/stands-para-eventos/70.jpeg",
  "/stands-para-eventos/71.jpeg",
  "/stands-para-eventos/72.jpeg",
  "/stands-para-eventos/73.jpeg",

  // Música para eventos
  "/musica-para-eventos/35.png",
  "/musica-para-eventos/36.png",
  "/musica-para-eventos/37.png",
  "/musica-para-eventos/38.png",
  "/musica-para-eventos/39.png",

  // Graduaciones
  "/graduaciones/32.png",
  "/graduaciones/33.png",
  "/graduaciones/34.png",
];

// Función para seleccionar imágenes aleatorias
const getRandomImages = (count = 6) => {
  const shuffled = [...allServiceImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [serviceImages, setServiceImages] = useState(getRandomImages());

  useEffect(() => {
    // Seleccionar nuevas imágenes aleatorias al montar el componente
    setServiceImages(getRandomImages());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        // Seleccionar una nueva imagen aleatoria en lugar de secuencial
        const randomIndex = Math.floor(Math.random() * allServiceImages.length);
        setCurrentIndex(randomIndex);
        setIsTransitioning(false);
      }, 500);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Imagen actual */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
          isTransitioning ? "scale-105 opacity-80" : "scale-100 opacity-100"
        }`}
        style={{
          backgroundImage: `url(${allServiceImages[currentIndex]})`,
        }}
      />

      {/* Overlay con gradiente dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90" />

      {/* Overlay adicional para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}
