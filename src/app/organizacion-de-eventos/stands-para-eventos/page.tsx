"use client";
import Image from "next/image";
import { useEffect } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";

function StandsParaEventosPage() {
  // Usar imágenes específicas de stands-para-eventos
  const standsImages = cloudinaryImages["stands-para-eventos"];

  // 🖼️ Imagen hero fija optimizada
  const heroImageUrl =
    standsImages[0] || cloudinaryImages["stands-para-eventos"][0];
  const optimizedHeroUrl = optimizeCloudinaryUrl(heroImageUrl, {
    width: 1920,
    height: 1080,
    quality: "auto:eco",
    priority: true,
  });

  // Preload crítico para LCP
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = optimizedHeroUrl;
    link.fetchPriority = "high";
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
            alt="Stands para Eventos y Ferias"
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
              STANDS PARA
              <span className="block text-[#22d3f7] mt-2">EVENTOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Diseño, fabricación y montaje de stands creativos que destacan tu
              marca
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Bloque 1 - Fondo Negro - Diseño y Fabricación */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                DISEÑO Y FABRICACIÓN DE STANDS PROFESIONALES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                En La Trinchera México somos expertos{" "}
                <strong className="text-[#22d3f7]">
                  fabricantes de stands
                </strong>{" "}
                que transforman espacios en experiencias memorables. Nuestro
                servicio integral incluye{" "}
                <strong className="text-[#22d3f7]">diseño de stands</strong>,{" "}
                <strong className="text-[#22d3f7]">fabricacion de stand</strong>{" "}
                personalizada y{" "}
                <strong className="text-[#22d3f7]">montaje de stands</strong>{" "}
                profesional. Desde el primer boceto hasta la instalación final,
                creamos{" "}
                <strong className="text-[#22d3f7]">stands creativos</strong> que
                capturan la esencia de tu marca y atraen la atención de tu
                público objetivo en ferias, expos y eventos corporativos.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={standsImages[0]}
                  alt="Diseño de stands para eventos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 2 - Fondo Blanco - Stands para Ferias y Expos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={standsImages[1]}
                  alt="Stands para ferias y exposiciones"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                💼 STANDS PARA FERIAS Y EXPOSICIONES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ofrecemos{" "}
                <strong className="text-[#22d3f7]">
                  renta de stands para expo
                </strong>{" "}
                y venta de{" "}
                <strong className="text-[#22d3f7]">stands para ferias</strong>{" "}
                de todos los tamaños. Nuestros{" "}
                <strong className="text-[#22d3f7]">stands para expos</strong>{" "}
                están diseñados para maximizar la visibilidad de tu marca en{" "}
                <strong className="text-[#22d3f7]">
                  stand para ferias y exposiciones
                </strong>
                . Ya sea que necesites un{" "}
                <strong className="text-[#22d3f7]">stand de feria</strong>{" "}
                compacto o un imponente{" "}
                <strong className="text-[#22d3f7]">stand de exposición</strong>,
                contamos con soluciones adaptadas a tu presupuesto y
                necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3 - Fondo Negro - Stands Portátiles y Versátiles */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                🎯 STANDS PORTÁTILES Y VERSÁTILES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Si buscas movilidad y practicidad, nuestros{" "}
                <strong className="text-[#22d3f7]">
                  stand portatiles para ferias
                </strong>{" "}
                y{" "}
                <strong className="text-[#22d3f7]">
                  stands portatiles para ferias
                </strong>{" "}
                son la solución ideal. Cada{" "}
                <strong className="text-[#22d3f7]">
                  stand publicitario portatil
                </strong>{" "}
                se instala en minutos y se transporta fácilmente. Disponemos de{" "}
                <strong className="text-[#22d3f7]">stand de exhibición</strong>{" "}
                en diferentes materiales y acabados, garantizando que tu{" "}
                <strong className="text-[#22d3f7]">
                  stand para exposiciones
                </strong>{" "}
                luzca profesional y moderno en cualquier ubicación.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={standsImages[2]}
                  alt="Stands portátiles para ferias"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 4 - Fondo Blanco - Materiales y Personalización */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={standsImages[3]}
                  alt="Diseño personalizado de stands"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                MATERIALES Y DISEÑO PERSONALIZADO
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Trabajamos con materiales de primera calidad para{" "}
                <strong className="text-[#22d3f7]">diseñar un stand</strong> que
                refleje tu identidad corporativa. Desde{" "}
                <strong className="text-[#22d3f7]">
                  stand de madera para ferias
                </strong>{" "}
                con acabados elegantes, hasta{" "}
                <strong className="text-[#22d3f7]">
                  stand de carton para exposicion
                </strong>{" "}
                con diseños ecológicos e innovadores, cada proyecto es único.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nuestro equipo te asesora para{" "}
                <strong className="text-[#22d3f7]">diseñar stand</strong> que se
                adapte a tu presupuesto sin sacrificar calidad ni impacto
                visual. Te ayudamos a elegir el mejor{" "}
                <strong className="text-[#22d3f7]">stand exposicion</strong>{" "}
                para destacar entre la competencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tipos de Stands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              TIPOS DE
              <span className="block text-[#22d3f7] mt-2">
                STANDS PARA EVENTOS
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones personalizadas para cada tipo de evento y presupuesto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tipo 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Stands Modulares
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Estructuras versátiles y reutilizables, ideales para{" "}
                <strong>stands para eventos</strong> recurrentes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Montaje rápido</li>
                <li>✓ Personalizable</li>
                <li>✓ Económico</li>
              </ul>
            </div>

            {/* Tipo 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Stands Personalizados
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Diseño único adaptado a tu marca. Perfecto para{" "}
                <strong>stand de expo</strong> premium.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Diseño exclusivo</li>
                <li>✓ Máximo impacto</li>
                <li>✓ Iluminación LED</li>
              </ul>
            </div>

            {/* Tipo 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Stands Portátiles
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Ligeros y fáciles de transportar. Ideal como{" "}
                <strong>stand publicitario portatil</strong>.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Fácil transporte</li>
                <li>✓ Instalación simple</li>
                <li>✓ Bajo costo</li>
              </ul>
            </div>

            {/* Tipo 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Stands Ecológicos
              </h3>
              <p className="text-gray-600 text-center mb-4">
                <strong>Stand de carton para exposicion</strong> y materiales
                sustentables.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Materiales reciclables</li>
                <li>✓ Eco-friendly</li>
                <li>✓ Innovador</li>
              </ul>
            </div>

            {/* Tipo 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🪵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Stands de Madera
              </h3>
              <p className="text-gray-600 text-center mb-4">
                <strong>Stand de madera para ferias</strong> con acabados
                elegantes y naturales.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Aspecto premium</li>
                <li>✓ Duradero</li>
                <li>✓ Versátil</li>
              </ul>
            </div>

            {/* Tipo 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Stands Interactivos
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Con pantallas digitales y tecnología para{" "}
                <strong>stands para eventos</strong> modernos.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Pantallas LED</li>
                <li>✓ Tecnología táctil</li>
                <li>✓ Experiencias digitales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              NUESTROS SERVICIOS DE
              <span className="block text-[#22d3f7] mt-2">
                STANDS PARA EVENTOS
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Diseño Personalizado
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Creamos <strong>diseño de stands</strong> únicos adaptados a tu
                marca
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Fabricación
              </h3>
              <p className="text-gray-300 text-center text-sm">
                <strong>Fabricantes de stands</strong> con materiales de calidad
                premium
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Montaje Profesional
              </h3>
              <p className="text-gray-300 text-center text-sm">
                <strong>Montaje de stands</strong> rápido y seguro en el lugar
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Renta de Stands
              </h3>
              <p className="text-gray-300 text-center text-sm">
                <strong>Renta de stands para expo</strong> con opciones
                flexibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿LISTO PARA DESTACAR EN TU PRÓXIMA FERIA O EXPO?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Diseñamos y fabricamos el <strong>stand para feria</strong> perfecto
            para tu marca
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#22d3f7] text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-[#1ab8d4] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            SOLICITA UNA COTIZACIÓN
          </a>
        </div>
      </section>

      {/* Sección de Inspiración */}
      <InspirationSection />
    </div>
  );
}

export default StandsParaEventosPage;
