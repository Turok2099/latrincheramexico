"use client";

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
  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo fija optimizada */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-black/15" />
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
