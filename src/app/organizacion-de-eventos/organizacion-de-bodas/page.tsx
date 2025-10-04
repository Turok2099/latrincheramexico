"use client";
import Image from "next/image";
import { useEffect } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";

function OrganizacionDeBodasPage() {
  // Usar imágenes específicas de organizacion-de-bodas
  const bodasImages = cloudinaryImages["organizacion-de-bodas"];

  // 🖼️ Imagen hero fija optimizada
  const heroImageUrl =
    bodasImages[0] || cloudinaryImages["organizacion-de-bodas"][0];
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
            alt="Organización de Bodas - Wedding Planner"
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
              ORGANIZACIÓN DE
              <span className="block text-[#22d3f7] mt-2">BODAS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Hacemos realidad el día más importante de tu vida con nuestro
              servicio de wedding planner profesional
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
                TU WEDDING PLANNER IDEAL
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                En La Trinchera México te ofrecemos un servicio de{" "}
                <strong className="text-[#22d3f7]">wedding planner</strong> que
                transforma tu sueño en realidad, guiándote desde el diseño de la{" "}
                <strong className="text-[#22d3f7]">invitación de boda</strong>{" "}
                hasta las más elegantes{" "}
                <strong className="text-[#22d3f7]">decoraciones de boda</strong>
                . Ya sea que celebres un íntimo{" "}
                <strong className="text-[#22d3f7]">matrimonio civil</strong> o
                una gran fiesta, cuidamos cada detalle para que tu día sea
                único, especial y lleno de momentos inolvidables.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={bodasImages[0]}
                  alt="Wedding Planner profesional organizando bodas"
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
                  src={bodasImages[1]}
                  alt="Decoraciones para bodas elegantes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                CADA DETALLE CUENTA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Combinamos creatividad y tecnología para que tu celebración sea
                única, comenzando con una{" "}
                <strong className="text-[#22d3f7]">
                  invitación de boda digital
                </strong>{" "}
                que refleje tu estilo y anticipe la magia del evento. Nuestro
                equipo diseña{" "}
                <strong className="text-[#22d3f7]">
                  decoraciones para bodas
                </strong>{" "}
                que transforman cualquier espacio en un escenario inolvidable,
                cuidando cada detalle de las{" "}
                <strong className="text-[#22d3f7]">decoraciones de boda</strong>{" "}
                para que armonicen con tu temática y sorprendan a tus invitados
                desde la primera{" "}
                <strong className="text-[#22d3f7]">invitación para boda</strong>{" "}
                hasta el último momento de la fiesta.
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
                EXPERIENCIAS GASTRONÓMICAS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                En La Trinchera México convertimos cada celebración en un viaje
                de sabores con nuestras{" "}
                <strong className="text-[#22d3f7]">
                  experiencias gastronómicas
                </strong>{" "}
                diseñadas para sorprender y deleitar. Ofrecemos{" "}
                <strong className="text-[#22d3f7]">
                  banquetes para fiestas
                </strong>{" "}
                que combinan recetas tradicionales y propuestas innovadoras,
                cuidando la presentación y la calidad de cada platillo. Nuestras
                mesas temáticas son un espectáculo visual y culinario: desde
                estaciones de comida mexicana con antojitos típicos, hasta
                barras gourmet con opciones internacionales, postres artesanales
                y{" "}
                <strong className="text-[#22d3f7]">coctelería creativa</strong>.
                Todo se prepara y sirve con atención al detalle, para que tus
                invitados disfruten no solo de un excelente menú, sino de una
                experiencia sensorial completa que armoniza con la decoración y
                el estilo de tu evento.
              </p>
              <a
                href="/organizacion-de-eventos/servicio-de-catering-para-eventos"
                className="inline-block mt-4 bg-[#22d3f7] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#1ab8d4] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Conoce Nuestro Servicio de Catering →
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={bodasImages[2]}
                  alt="Banquetes para bodas y fiestas"
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
                  src={bodasImages[3]}
                  alt="Recuerditos de boda personalizados"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                DETALLES QUE PERDURAN
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                En La Trinchera México creemos que los{" "}
                <strong className="text-[#22d3f7]">
                  detalles que perduran
                </strong>{" "}
                son aquellos que se capturan para siempre. Por eso trabajamos
                con equipos profesionales de{" "}
                <strong className="text-[#22d3f7]">
                  filmación y fotografía
                </strong>{" "}
                que inmortalizan cada instante de tu boda, desde las miradas
                cómplices hasta los gestos espontáneos. Nuestro servicio incluye
                edición cuidadosa para realzar la belleza de cada toma, creando{" "}
                <strong className="text-[#22d3f7]">álbumes y videos</strong> que
                narran tu historia con estilo y emoción. Así, cada imagen y cada
                plano se convierten en un{" "}
                <strong className="text-[#22d3f7]">recuerdo vivo</strong> que
                podrás revivir y compartir por generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Incluidos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              SERVICIOS INCLUIDOS EN TU
              <span className="block text-[#22d3f7] mt-2">
                ORGANIZACIÓN DE BODAS
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicio completo de wedding planner para bodas inolvidables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Planificación Completa
              </h3>
              <p className="text-gray-600 text-center">
                Coordinación integral desde el primer día hasta el evento final,
                incluyendo timeline detallado y gestión de proveedores.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Diseño y Decoración
              </h3>
              <p className="text-gray-600 text-center">
                Decoraciones para bodas personalizadas, diseño floral, montaje
                de mesas y ambientación completa del venue.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Invitaciones
              </h3>
              <p className="text-gray-600 text-center">
                Diseño de invitación de boda impresa y digital, save the dates,
                menús personalizados y papelería completa.
              </p>
            </div>

            {/* Servicio 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Banquetes
              </h3>
              <p className="text-gray-600 text-center">
                Banquetes para fiestas con menús personalizados, servicio
                profesional, bar de cortesía y pastel de bodas.
              </p>
            </div>

            {/* Servicio 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">👗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Vestida de Novia
              </h3>
              <p className="text-gray-600 text-center">
                Asesoría para vestida de novia, coordinación con diseñadores,
                pruebas de vestuario y accesorios nupciales.
              </p>
            </div>

            {/* Servicio 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Recuerditos
              </h3>
              <p className="text-gray-600 text-center">
                Selección de recuerditos de boda personalizados, empaque
                especial y coordinación de entrega a invitados.
              </p>
            </div>

            {/* Servicio 7 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Bodas en la Playa
              </h3>
              <p className="text-gray-600 text-center">
                Especialistas en bodas en la playa, gestión de permisos,
                logística especial y decoración marina.
              </p>
            </div>

            {/* Servicio 8 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Aniversarios
              </h3>
              <p className="text-gray-600 text-center">
                Organización de bodas de aniversario y celebraciones de
                aniversario de boda para renovar votos.
              </p>
            </div>

            {/* Servicio 9 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Fotografía y Video
              </h3>
              <p className="text-gray-600 text-center">
                Coordinación con fotógrafos y videógrafos profesionales para
                capturar cada momento especial de tu boda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿LISTA PARA PLANEAR TU BODA PERFECTA?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Como tu wedding planner de confianza, estamos listos para hacer
            realidad tu boda soñada
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#22d3f7] text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-[#1ab8d4] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            CONTACTA A TU WEDDING PLANNER
          </a>
        </div>
      </section>

      {/* Sección de Inspiración */}
      <InspirationSection />
    </div>
  );
}

export default OrganizacionDeBodasPage;
