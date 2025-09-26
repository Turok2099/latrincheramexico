import Link from "next/link";
import HeroCarousel from "@/components/Home/HeroCarousel";

export default function HeroSection() {
  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center px-4 py-32">
      {/* Carrusel de fondo dinámico */}
      <HeroCarousel />

      {/* Contenido del Hero */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {/* Contenido principal alineado a la izquierda */}
        <div className="flex flex-col items-start justify-center text-left space-y-12">
          {/* Título principal */}
          <div className="space-y-6">
            <h1
              className="text-white font-bold tracking-wide animate-slide-in-left"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                animationDelay: "0.2s",
                animationFillMode: "both",
              }}
            >
              LA TRINCHERA MÉXICO
            </h1>
            <h2
              className="text-white font-bold tracking-wide leading-tight animate-slide-in-left"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                animationDelay: "0.4s",
                animationFillMode: "both",
              }}
            >
              CREAMOS EXPERIENCIAS
              <span
                className="block text-[#22d3f7] font-bold animate-slide-in-left"
                style={{ animationDelay: "0.6s", animationFillMode: "both" }}
              >
                EXTRAORDINARIAS
              </span>
            </h2>
          </div>

          {/* CTA Principal */}
          <div
            className="animate-slide-in-left"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <Link href="/contact">
              <button className="group relative w-fit bg-[#22d3f7] text-black font-medium px-8 py-4 text-base border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer">
                {/* Capa blanca animada que entra desde la izquierda */}
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>

                {/* Texto que pasa de blanco a turquesa */}
                <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                  SOLICITA TU COTIZACIÓN
                </span>
              </button>
            </Link>
          </div>
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
