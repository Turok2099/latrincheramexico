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

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
          isTransitioning ? "scale-105 opacity-80" : "scale-100 opacity-100"
        }`}
        style={{
          backgroundImage: `url(${allServiceImages[currentIndex]})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90" />
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}