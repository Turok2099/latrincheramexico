"use client";

import { useState, useEffect } from "react";

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

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

  // Función para obtener todas las imágenes de una categoría
  const getAllImages = (category: string) => {
    return categoryImages[category as keyof typeof categoryImages];
  };

  const servicios = [
    {
      id: 1,
      nombre: "Eventos Sociales",
      category: "eventos-sociales",
    },
    {
      id: 2,
      nombre: "Servicio de Catering",
      category: "catering-para-eventos",
    },
    {
      id: 3,
      nombre: "Eventos Corporativos",
      category: "eventos-empresariales",
    },
    {
      id: 4,
      nombre: "Organización de Bodas",
      category: "organizacion-de-bodas",
    },
    {
      id: 5,
      nombre: "Pantallas LED",
      category: "pantallas-para-escenarios",
    },
    {
      id: 6,
      nombre: "Stands Profesionales",
      category: "stands-para-eventos",
    },
    {
      id: 7,
      nombre: "Música en Vivo",
      category: "musica-para-eventos",
    },
    {
      id: 8,
      nombre: "Graduaciones",
      category: "graduaciones",
    },
  ];

  useEffect(() => {
    // Inicializar con una imagen aleatoria del primer servicio
    setCurrentImage(getRandomImage(servicios[0].category));

    // Cambiar imagen cada 5 segundos
    const interval = setInterval(() => {
      const randomService =
        servicios[Math.floor(Math.random() * servicios.length)];
      const randomImage = getRandomImage(randomService.category);
      setCurrentImage(randomImage);
      setCurrentIndex(
        servicios.findIndex((s) => s.category === randomService.category)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-100">
      <div className="w-full">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideInFromLeft {
              from {
                opacity: 0;
                transform: translateX(-100%);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .image-transition {
              animation: fadeIn 1s ease-in-out;
            }
            .text-transition {
              animation: slideInFromLeft 1s ease-in-out;
            }
          `}</style>

          {/* Imagen actual */}
          <div
            className="absolute inset-0 bg-cover bg-center image-transition"
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          />

          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

          {/* Contenido de la tarjeta */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12">
            {/* Nombre del servicio */}
            <h3
              key={`title-${currentIndex}`}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-transition text-center"
            >
              {servicios[currentIndex].nombre}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
