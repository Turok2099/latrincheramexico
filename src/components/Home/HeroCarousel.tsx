"use client";

import { useState, useEffect } from "react";
import { getAllImages } from "../../helpers/CloudinaryMapping";

// Usar imágenes optimizadas de Cloudinary
const allServiceImages = getAllImages();

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * allServiceImages.length);
        setCurrentIndex(randomIndex);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (allServiceImages.length === 0) {
    return (
      <div className="absolute inset-0 bg-surface flex items-center justify-center text-white">
        Cargando imágenes...
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {allServiceImages[currentIndex] && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            isTransitioning ? "scale-105 opacity-80" : "scale-100 opacity-100"
          }`}
          style={{
            backgroundImage: `url(${allServiceImages[currentIndex]})`,
          }}
        />
      )}
      {/* Oscuro donde va el texto, imagen visible en el resto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 via-45% to-black/10 md:bg-gradient-to-r md:from-black/95 md:via-black/75 md:via-45% md:to-black/5" />
    </div>
  );
}
