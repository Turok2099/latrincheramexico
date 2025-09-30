"use client";

import { useState, useEffect, useCallback } from "react";
import {
  cloudinaryImages,
  getRandomImage,
} from "../../helpers/CloudinaryMapping";

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

  // Servicios disponibles con sus categorías de Cloudinary
  const servicios = [
    { nombre: "Eventos Sociales", categoria: "eventos-sociales" },
    { nombre: "Catering para Eventos", categoria: "catering-para-eventos" },
    { nombre: "Eventos Empresariales", categoria: "eventos-empresariales" },
    { nombre: "Organización de Bodas", categoria: "organizacion-de-bodas" },
    {
      nombre: "Pantallas para Escenarios",
      categoria: "pantallas-para-escenarios",
    },
    { nombre: "Stands para Eventos", categoria: "stands-para-eventos" },
    { nombre: "Música para Eventos", categoria: "musica-para-eventos" },
    { nombre: "Graduaciones", categoria: "graduaciones" },
  ];

  // Función para obtener una imagen aleatoria de una categoría específica
  const getImageFromCategory = useCallback(
    (categoria: keyof typeof cloudinaryImages): string => {
      return getRandomImage(categoria);
    },
    []
  );

  // Inicializar con la primera imagen de la primera categoría
  useEffect(() => {
    const image = getImageFromCategory(
      servicios[0].categoria as keyof typeof cloudinaryImages
    );
    if (image) {
      setCurrentImage(image);
    }
  }, [getImageFromCategory]);

  // Cambiar imagen y servicio cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % servicios.length;
      setCurrentIndex(nextIndex);
      const image = getImageFromCategory(
        servicios[nextIndex].categoria as keyof typeof cloudinaryImages
      );
      if (image) {
        setCurrentImage(image);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, getImageFromCategory, servicios]);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
            Galería
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Una muestra de nuestros trabajos más destacados
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          {currentImage && (
            <div
              className="absolute inset-0 bg-cover bg-center image-transition"
              style={{
                backgroundImage: `url(${currentImage})`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12">
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
