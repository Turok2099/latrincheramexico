"use client";
import { useEffect } from 'react';
import { optimizeCloudinaryUrl } from '@/helpers/ImageOptimizer';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  highlightText?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  highlightText,
}: HeroSectionProps) {
  // Optimizar imagen para LCP
  const optimizedImage = optimizeCloudinaryUrl(backgroundImage, {
    width: 1920,
    height: 1080,
    quality: 'auto:eco',
    priority: true
  });

  // Preload crítico para LCP
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = optimizedImage;
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [optimizedImage]);

  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo fija optimizada con Next/Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={optimizedImage}
          alt={title}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90 z-10" />
        <div className="absolute inset-0 bg-black/15 z-10" />
      </div>

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide text-white">
            {title}
            {highlightText && (
              <span className="block text-[#22d3f7] mt-2">{highlightText}</span>
            )}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
