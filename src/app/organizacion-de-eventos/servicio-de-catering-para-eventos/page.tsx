"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import TiposServiciosCatering from "@/components/OrganizacionDeEventos/TiposServiciosCatering";
import InspirationSection from "@/components/Home/InspirationSection";

function CateringPageClient() {
  // Usar imágenes específicas de catering-para-eventos
  const cateringImages = cloudinaryImages["catering-para-eventos"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Carrusel automático de imágenes de catering
  useEffect(() => {
    if (cateringImages.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % cateringImages.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [cateringImages.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section con Carrusel */}
      <section className="relative w-full h-screen">
        {/* Carrusel de imágenes de catering */}
        <div className="absolute inset-0 overflow-hidden">
          {cateringImages.length > 0 && (
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                isTransitioning
                  ? "scale-105 opacity-80"
                  : "scale-100 opacity-100"
              }`}
              style={{
                backgroundImage: `url(${cateringImages[currentImageIndex]})`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
              SERVICIO DE CATERING
              <span className="block text-[#22d3f7] mt-2">PARA EVENTOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transformamos cada ocasión en una experiencia gastronómica
              inolvidable
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Bloque 1 - Fondo Negro */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                NUESTRO SERVICIO DE CATERING
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nuestro servicio de catering para eventos está diseñado para
                transformar cada ocasión en una experiencia inolvidable. Ya sea
                que busques un catering empresarial, un catering para eventos
                sociales o incluso un exclusivo catering desayunos, contamos con
                menús personalizados que se adaptan a tus necesidades. Nos
                especializamos en ofrecer comida para eventos con la más alta
                calidad, cuidando cada detalle para que tus invitados disfruten
                de un banquete memorable.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={cateringImages[0]}
                  alt="Servicio de catering para eventos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 2 - Fondo Blanco */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={cateringImages[1]}
                  alt="Banquetes para eventos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                EXPERIENCIAS ÚNICAS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                En La Trinchera México entendemos que cada celebración es única,
                por eso ofrecemos banquetes para eventos de todo tipo: desde
                elegantes recepciones hasta banquetes para fiestas más íntimas.
                Nuestro equipo de expertos en catering eventos diseña propuestas
                gastronómicas que combinan sabor, presentación y logística
                impecable. Con nuestro servicio catering, garantizamos que cada
                plato sea una experiencia sensorial que complemente la atmósfera
                de tu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3 - Fondo Negro */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                COMODIDAD Y EXCELENCIA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Si buscas comodidad y excelencia, también contamos con banquetes
                a domicilio y comida para eventos a domicilio, ideales para
                quienes desean disfrutar de un servicio profesional sin salir de
                casa o de su espacio de trabajo. Nuestro servicio de comida para
                eventos se adapta tanto a grandes celebraciones como a banquetes
                para eventos pequeños, siempre con la misma dedicación y
                calidad.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={cateringImages[2]}
                  alt="Catering a domicilio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 4 - Fondo Blanco */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={cateringImages[3]}
                  alt="Experiencia en catering"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                EXPERIENCIA COMPROBADA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Con años de experiencia en el sector, hemos perfeccionado un
                servicio de catering que combina creatividad culinaria, atención
                personalizada y logística eficiente. Ya sea un desayuno
                corporativo, una boda íntima o una fiesta social, nuestro
                compromiso es ofrecer banquetes para eventos que superen
                expectativas. Con La Trinchera México, tu evento contará con un
                servicio de catering para eventos que dejará huella en cada
                invitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Servicios */}
      <TiposServiciosCatering />

      {/* Sección de Inspiración */}
      <InspirationSection />
    </div>
  );
}

export default CateringPageClient;
