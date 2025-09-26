"use client";

import { useState, useEffect } from "react";
import { getAllImages } from "../../helpers/CloudinaryMapping";

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

  // Usar imágenes optimizadas de Cloudinary
  const allImages = getAllImages();

  // Servicios disponibles
  const servicios = [
    { nombre: "Eventos Sociales" },
    { nombre: "Catering para Eventos" },
    { nombre: "Eventos Empresariales" },
    { nombre: "Organización de Bodas" },
    { nombre: "Pantallas para Escenarios" },
    { nombre: "Stands para Eventos" },
    { nombre: "Música para Eventos" },
    { nombre: "Graduaciones" },
  ];

  // Función para obtener una imagen aleatoria
  const getRandomImage = (): string => {
    if (allImages.length === 0) return "";
    return allImages[Math.floor(Math.random() * allImages.length)];
  };

  // Inicializar con una imagen aleatoria
  useEffect(() => {
    setCurrentImage(getRandomImage());
  }, []);

  // Cambiar imagen y servicio cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicios.length);
      setCurrentImage(getRandomImage());
    }, 4000);

    return () => clearInterval(interval);
  }, [servicios.length]);

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
          <div
            className="absolute inset-0 bg-cover bg-center image-transition"
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          />
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