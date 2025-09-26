"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function InspirationSection() {
  const [currentImages, setCurrentImages] = useState<Record<string, string>>(
    {}
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Definir las imágenes para cada categoría basándose en las carpetas reales
  const categoryImages = {
    "eventos-sociales": [
      "/eventos-sociales/23.png",
      "/eventos-sociales/24.png",
      "/eventos-sociales/25.png",
      "/eventos-sociales/26.png",
      "/eventos-sociales/27.png",
      "/eventos-sociales/28.png",
      "/eventos-sociales/29.png",
      "/eventos-sociales/30.png",
      "/eventos-sociales/31.png",
    ],
    "catering-para-eventos": [
      "/catering-para-eventos/1.png",
      "/catering-para-eventos/2.png",
      "/catering-para-eventos/3.png",
      "/catering-para-eventos/4.png",
      "/catering-para-eventos/5.png",
      "/catering-para-eventos/6.png",
      "/catering-para-eventos/55.png",
    ],
    "eventos-empresariales": [
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
    ],
    "organizacion-de-bodas": [
      "/organizacion-de-bodas/40.png",
      "/organizacion-de-bodas/41.png",
      "/organizacion-de-bodas/42.png",
      "/organizacion-de-bodas/43.png",
      "/organizacion-de-bodas/44.png",
      "/organizacion-de-bodas/45.png",
      "/organizacion-de-bodas/57.png",
      "/organizacion-de-bodas/61.png",
    ],
    "pantallas-para-escenarios": [
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
    ],
    "stands-para-eventos": [
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
    ],
    "musica-para-eventos": [
      "/musica-para-eventos/35.png",
      "/musica-para-eventos/36.png",
      "/musica-para-eventos/37.png",
      "/musica-para-eventos/38.png",
      "/musica-para-eventos/39.png",
    ],
    graduaciones: [
      "/graduaciones/32.png",
      "/graduaciones/33.png",
      "/graduaciones/34.png",
    ],
  };

  // Función para obtener una imagen aleatoria de una categoría
  const getRandomImage = (category: string) => {
    const images = categoryImages[category as keyof typeof categoryImages];
    return images[Math.floor(Math.random() * images.length)];
  };

  // Inicializar imágenes aleatorias para cada categoría
  useEffect(() => {
    const initialImages: Record<string, string> = {};
    Object.keys(categoryImages).forEach((category) => {
      initialImages[category] = getRandomImage(category);
    });
    setCurrentImages(initialImages);

    // Cambiar imágenes cada 8 segundos con transición suave
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImages((prev) => {
          const newImages: Record<string, string> = {};
          Object.keys(categoryImages).forEach((category) => {
            newImages[category] = getRandomImage(category);
          });
          return newImages;
        });

        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const inspirationCategories = [
    {
      id: 1,
      title: "Eventos Sociales",
      category: "eventos-sociales",
      link: "/organizacion-de-eventos",
    },
    {
      id: 2,
      title: "Servicio de Catering",
      category: "catering-para-eventos",
      link: "/organizacion-de-eventos/servicio-de-catering-para-eventos",
    },
    {
      id: 3,
      title: "Eventos Corporativos",
      category: "eventos-empresariales",
      link: "/organizacion-de-eventos/eventos-empresariales",
    },
    {
      id: 4,
      title: "Organización de Bodas",
      category: "organizacion-de-bodas",
      link: "/organizacion-de-eventos",
    },
    {
      id: 5,
      title: "Pantallas LED",
      category: "pantallas-para-escenarios",
      link: "/organizacion-de-eventos",
    },
    {
      id: 6,
      title: "Stands Profesionales",
      category: "stands-para-eventos",
      link: "/organizacion-de-eventos",
    },
    {
      id: 7,
      title: "Música en Vivo",
      category: "musica-para-eventos",
      link: "/organizacion-de-eventos",
    },
    {
      id: 8,
      title: "Graduaciones",
      category: "graduaciones",
      link: "/organizacion-de-eventos",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-wide">
            Inspírate
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre las posibilidades infinitas para tu próximo evento
          </p>
        </div>

        {/* Grid de categorías de inspiración */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {inspirationCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
            >
              {/* Imagen de fondo dinámica */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`w-full h-full bg-cover bg-center group-hover:scale-110 transition-all duration-700 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                  style={{
                    backgroundImage: `url(${currentImages[category.category]})`,
                  }}
                />
                {/* Overlay gradiente más oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
              </div>

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-[#22d3f7] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center  rounded-2xl p-12 ">
          <h3 className="text-2xl font-bold text-black mb-4 tracking-wide">
            ¿Listo para Crear tu Evento Perfecto?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para hacer realidad tu visión.
            Desde la planificación hasta la ejecución, cuidamos cada detalle.
          </p>
          <Link href="/contact">
            <button className="group relative w-fit bg-[#22d3f7] text-black font-medium px-8 py-4 text-base border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer hover:scale-105 transition-transform duration-300">
              {/* Capa blanca animada que entra desde la izquierda */}
              <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>

              {/* Texto que pasa de blanco a turquesa */}
              <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                COMENZAR MI PROYECTO
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
