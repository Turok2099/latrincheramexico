"use client";
import Image from "next/image";
import { useEffect } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import TiposServiciosCatering from "@/components/OrganizacionDeEventos/TiposServiciosCatering";
import InspirationSection from "@/components/Home/InspirationSection";

function CateringPageClient() {
  // Usar imágenes específicas de catering-para-eventos
  const cateringImages = cloudinaryImages["catering-para-eventos"];

  // 🖼️ Imagen hero fija optimizada
  const heroImageUrl = cateringImages[0] || cloudinaryImages["catering-para-eventos"][0];
  const optimizedHeroUrl = optimizeCloudinaryUrl(heroImageUrl, {
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
    link.href = optimizedHeroUrl;
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [optimizedHeroUrl]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Imagen Fija Optimizada */}
      <section className="relative w-full h-screen">
        {/* Imagen de fondo optimizada con Next/Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={optimizedHeroUrl}
            alt="Servicio de Catering para Eventos"
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
