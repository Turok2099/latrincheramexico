"use client";
import Image from "next/image";
import { useEffect } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";

function PantallasParaEscenariosPage() {
  // Usar imágenes específicas de pantallas-para-escenarios
  const pantallasImages = cloudinaryImages["pantallas-para-escenarios"];

  // 🖼️ Imagen hero fija optimizada
  const heroImageUrl =
    pantallasImages[0] || cloudinaryImages["pantallas-para-escenarios"][0];
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
            alt="Pantallas LED Gigantes para Escenarios"
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
              PANTALLAS PARA
              <span className="block text-[#22d3f7] mt-2">ESCENARIOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Tecnología audiovisual de vanguardia con pantallas LED gigantes
              para eventos inolvidables
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Bloque 1 - Fondo Negro - Impacto Visual */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                IMPACTO VISUAL CON PANTALLAS GIGANTES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                En La Trinchera México elevamos la experiencia de cada
                celebración con{" "}
                <strong className="text-[#22d3f7]">pantallas gigantes</strong>{" "}
                que garantizan visibilidad perfecta desde cualquier punto del
                lugar. Nuestras{" "}
                <strong className="text-[#22d3f7]">
                  pantallas para eventos
                </strong>{" "}
                ofrecen una calidad de imagen excepcional, ideal para proyectar
                videos, presentaciones y momentos especiales en tiempo real. Con
                tecnología de última generación, logramos que cada invitado viva
                la emoción como si estuviera en primera fila.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={pantallasImages[0]}
                  alt="Pantallas gigantes para eventos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 2 - Fondo Blanco - Pantallas LED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={pantallasImages[1]}
                  alt="Pantallas LED gigantes para escenarios"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                💡 PANTALLAS LED GIGANTES PARA ESCENARIOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Si buscas un toque moderno y espectacular, nuestras{" "}
                <strong className="text-[#22d3f7]">
                  pantallas LED gigantes
                </strong>{" "}
                y{" "}
                <strong className="text-[#22d3f7]">
                  pantallas LED para eventos
                </strong>{" "}
                son la solución perfecta. Diseñadas para adaptarse a cualquier
                montaje, desde una{" "}
                <strong className="text-[#22d3f7]">
                  pantalla LED para escenario
                </strong>{" "}
                hasta{" "}
                <strong className="text-[#22d3f7]">
                  pantallas de LED gigantes
                </strong>{" "}
                para áreas abiertas, ofrecen colores vibrantes y alta definición
                que realzan la ambientación y el contenido visual de tu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3 - Fondo Negro - Versatilidad */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                🎯 VERSATILIDAD EN PANTALLAS PARA ESCENARIOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                En bodas, conciertos o conferencias, nuestras{" "}
                <strong className="text-[#22d3f7]">
                  pantallas gigantes para eventos
                </strong>{" "}
                y{" "}
                <strong className="text-[#22d3f7]">
                  pantallas para escenarios
                </strong>{" "}
                se integran de forma armoniosa con la decoración y el diseño del
                lugar. Ya sea para transmitir la ceremonia, mostrar mensajes
                personalizados o proyectar material audiovisual, garantizamos
                una instalación segura y un funcionamiento impecable que
                potencia la experiencia de todos los asistentes.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={pantallasImages[2]}
                  alt="Pantallas para escenarios en eventos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 4 - Fondo Blanco - Tecnología */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={pantallasImages[3]}
                  alt="Tecnología LED de alta definición"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                TECNOLOGÍA DE VANGUARDIA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nuestras{" "}
                <strong className="text-[#22d3f7]">
                  pantallas LED para eventos
                </strong>{" "}
                cuentan con tecnología de última generación que garantiza una
                experiencia visual impactante. Con resolución 4K, alta tasa de
                refresco y brillantez ajustable, nos adaptamos a cualquier
                condición de iluminación, ya sea en interiores o exteriores.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Desde{" "}
                <strong className="text-[#22d3f7]">pantallas gigantes</strong>{" "}
                para conciertos masivos hasta{" "}
                <strong className="text-[#22d3f7]">
                  pantallas para escenarios
                </strong>{" "}
                íntimos, ofrecemos soluciones personalizadas con soporte técnico
                profesional durante todo tu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              CARACTERÍSTICAS DE NUESTRAS
              <span className="block text-[#22d3f7] mt-2">
                PANTALLAS LED GIGANTES
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología audiovisual profesional para eventos de cualquier
              escala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Característica 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📺</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Alta Definición
              </h3>
              <p className="text-gray-600 text-center">
                Pantallas LED con resolución 4K y colores vibrantes para una
                calidad de imagen excepcional.
              </p>
            </div>

            {/* Característica 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Instalación Profesional
              </h3>
              <p className="text-gray-600 text-center">
                Montaje seguro y configuración técnica completa por nuestro
                equipo especializado.
              </p>
            </div>

            {/* Característica 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Tamaños Personalizados
              </h3>
              <p className="text-gray-600 text-center">
                Desde pantallas para escenarios pequeños hasta pantallas
                gigantes modulares.
              </p>
            </div>

            {/* Característica 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Interior y Exterior
              </h3>
              <p className="text-gray-600 text-center">
                Pantallas LED adaptables con brillantez ajustable para cualquier
                condición de luz.
              </p>
            </div>

            {/* Característica 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Transmisión en Vivo
              </h3>
              <p className="text-gray-600 text-center">
                Proyección en tiempo real de ceremonias, presentaciones y videos
                con sincronización perfecta.
              </p>
            </div>

            {/* Característica 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Soporte Técnico
              </h3>
              <p className="text-gray-600 text-center">
                Personal técnico especializado durante todo tu evento para
                garantizar funcionamiento perfecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              PANTALLAS PARA TODO TIPO DE
              <span className="block text-[#22d3f7] mt-2">EVENTOS</span>
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Bodas
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Transmisión de ceremonias y videos emotivos
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Conciertos
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Pantallas gigantes para máxima visibilidad
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Corporativos
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Presentaciones y conferencias profesionales
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#22d3f7] mb-3 text-center">
                Festivales
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Instalaciones modulares para grandes espacios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿LISTO PARA IMPACTAR CON TECNOLOGÍA LED?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Renta nuestras pantallas LED gigantes y pantallas para escenarios
            para tu próximo evento
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

export default PantallasParaEscenariosPage;
