"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cloudinaryImages, getRandomImage } from "../../helpers/CloudinaryMapping";

export default function InspirationSection() {
  const [currentImages, setCurrentImages] = useState<Record<string, string>>(
    {}
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Usar imágenes optimizadas de Cloudinary
  const categoryImages = cloudinaryImages;

  // Función para obtener una imagen aleatoria de una categoría
  const getRandomImageFromCategory = (category: string): string => {
    return getRandomImage(category as keyof typeof cloudinaryImages);
  };

  // Inicializar imágenes aleatorias para cada categoría
  useEffect(() => {
    const initialImages: Record<string, string> = {};
    Object.keys(categoryImages).forEach((category) => {
      initialImages[category] = getRandomImageFromCategory(category);
    });
    setCurrentImages(initialImages);
  }, [categoryImages]);

  // Cambiar imágenes periódicamente
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const newImages: Record<string, string> = {};
        Object.keys(categoryImages).forEach((category) => {
          newImages[category] = getRandomImageFromCategory(category);
        });
        setCurrentImages(newImages);
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [categoryImages]);

  const inspirationCategories = [
    {
      category: "eventos-sociales",
      title: "Eventos Sociales",
      link: "/organizacion-de-eventos",
    },
    {
      category: "catering-para-eventos",
      title: "Catering para Eventos",
      link: "/organizacion-de-eventos/servicio-de-catering-para-eventos",
    },
    {
      category: "eventos-empresariales",
      title: "Eventos Empresariales",
      link: "/organizacion-de-eventos/eventos-empresariales",
    },
    {
      category: "organizacion-de-bodas",
      title: "Organización de Bodas",
      link: "/organizacion-de-eventos",
    },
    {
      category: "pantallas-para-escenarios",
      title: "Pantallas para Escenarios",
      link: "/organizacion-de-eventos",
    },
    {
      category: "stands-para-eventos",
      title: "Stands para Eventos",
      link: "/organizacion-de-eventos",
    },
    {
      category: "musica-para-eventos",
      title: "Música para Eventos",
      link: "/organizacion-de-eventos",
    },
    {
      category: "graduaciones",
      title: "Graduaciones",
      link: "/organizacion-de-eventos",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
            Inspírate
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestras creaciones y deja que la inspiración te guíe hacia
            el evento perfecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inspirationCategories.map((category) => (
            <Link
              key={category.category}
              href={category.link}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`w-full h-full bg-cover bg-center group-hover:scale-110 transition-all duration-700 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                  style={{
                    backgroundImage: `url(${currentImages[category.category]})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-[#22d3f7] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}