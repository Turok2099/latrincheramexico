import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/Home/HeroCarousel";

export default function HeroSection() {
  return (
    <div className="relative w-screen min-h-screen flex items-center px-4 pt-28 pb-24 md:py-32">
      {/* Carrusel de fondo dinámico */}
      <HeroCarousel />

      {/* Contenido del Hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start text-left max-w-xl md:max-w-2xl">
          {/* h1 único: logo (alt = marca), título y frase con ciudades, todo visible */}
          <h1 className="flex flex-col items-start">
            <Image
              src="/logo-trinchera.png"
              alt="La Trinchera México"
              width={800}
              height={328}
              priority
              sizes="(min-width: 768px) 420px, 288px"
              className="w-72 md:w-[26rem] h-auto animate-slide-in-left"
              style={{ animationFillMode: "both" }}
            />
            <span className="sr-only">. </span>

            {/* Línea de acento */}
            <span
              className="mt-8 md:mt-10 block h-0.5 w-14 bg-[#22d3f7] animate-slide-in-left"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              aria-hidden="true"
            />

            {/* Título principal */}
            <span
              className="mt-6 md:mt-8 block text-white font-bold leading-[1.1] tracking-tight animate-slide-in-left"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)",
                animationDelay: "0.4s",
                animationFillMode: "both",
              }}
            >
              Creamos momentos
              <span className="block text-[#22d3f7]">extraordinarios.</span>
            </span>
            <span className="sr-only"> </span>

            <span
              className="mt-5 block max-w-md text-base font-normal leading-normal tracking-normal text-white/90 md:text-xl animate-slide-in-left"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              Organización de eventos en CDMX y Estado de México.
            </span>
          </h1>

          {/* CTA Principal */}
          <div
            className="mt-8 animate-slide-in-left"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <Link href="/contact">
              <button className="group relative w-fit bg-[#22d3f7] text-black font-semibold px-8 py-4 text-base md:text-lg border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer">
                {/* Capa blanca animada que entra desde la izquierda */}
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>

                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#000000] transition-colors duration-400">
                  Solicita tu cotización
                  <span aria-hidden="true">→</span>
                </span>
              </button>
            </Link>
          </div>

          <p
            className="mt-6 text-sm md:text-base text-white/90 animate-slide-in-left"
            style={{ animationDelay: "1s", animationFillMode: "both" }}
          >
            Planeación · Producción · Montaje
          </p>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center animate-bounce">
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
