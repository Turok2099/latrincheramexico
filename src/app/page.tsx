import HeroSection from "@/components/Home/HeroSection";
import Galeria from "@/components/Home/Galeria";
import StatsSection from "@/components/Home/StatsSection";
import InspirationSection from "@/components/Home/InspirationSection";
import ServiciosDestacados from "@/components/Home/ServiciosDestacados";
import SobreNosotros from "@/components/Home/SobreNosotros";
import ContactForm from "@/components/Home/ContactForm";
import LaTrinchera from "@/components/Home/LaTrinchera";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      {/* Sección de estadísticas */}
      <StatsSection />

      {/* Sección de inspiración */}
      <InspirationSection />

      {/* Sección de servicios debajo del Hero */}
      <Galeria />

      {/* Sección de servicios destacados */}
      <ServiciosDestacados />

      {/* Sección Sobre Nosotros */}
      <SobreNosotros />

      {/* Formulario de contacto */}
      <ContactForm />

      {/* Sección La Trinchera */}
      <LaTrinchera />
    </div>
  );
}
