import InspirationSection from "../../components/Home/InspirationSection";
import HeroCarousel from "../../components/Home/HeroCarousel";
import TiposEventos from "../../components/OrganizacionDeEventos/TiposEventos";
import ContactForm from "../../components/Home/ContactForm";

export default function OrganizacionEventosClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section con Carrusel */}
      <section className="relative w-full h-screen">
        <HeroCarousel />

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
              ORGANIZACIÓN DE EVENTOS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Servicios completos para crear experiencias extraordinarias
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* InspirationSection */}
      <InspirationSection />

      {/* Tipos de Eventos */}
      <TiposEventos />

      {/* Formulario de contacto */}
      <ContactForm />
    </div>
  );
}
