"use client";
import HeroSection from "@/components/HeroSection";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import InspirationSection from "@/components/Home/InspirationSection";

export default function StandsParaEventosPage() {
  const heroImage = cloudinaryImages["stands-para-eventos"][0];

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection
        title="STANDS PARA"
        highlightText="EVENTOS"
        subtitle="Diseños personalizados que destacan tu marca"
        backgroundImage={heroImage}
      />

      {/* Contenido en construcción */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#22d3f7]">
            PRÓXIMAMENTE
          </h2>
          <p className="text-xl text-gray-300">
            Estamos preparando contenido increíble para esta sección.
          </p>
        </div>
      </section>

      <InspirationSection />
    </div>
  );
}
