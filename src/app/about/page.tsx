"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Imagen hero optimizada
  const eventosImages = cloudinaryImages["eventos-sociales"];
  const heroImageUrl = eventosImages[0];
  const optimizedHeroUrl = optimizeCloudinaryUrl(heroImageUrl, {
    width: 1920,
    height: 800,
    quality: "auto:eco",
    priority: true,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={optimizedHeroUrl}
            alt="La Trinchera México - Sobre Nosotros"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div
            className={`text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[#22d3f7] font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Sobre Nosotros
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
              Una empresa de <span className="text-[#22d3f7]">personas</span>
              <br />
              al servicio de personas
            </h1>
            <p className="text-xl md:text-2xl text-muted">
              Más de 10 años transformando sueños en eventos inolvidables
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia - Fondo Blanco */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src="https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,fl_lossy,w_600,h_500,c_fill/v1759604869/trinchera/main-images/about-team.jpg"
                  alt="Equipo de La Trinchera México"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-surface">
                Nuestra Historia
              </h2>
              <div className="w-24 h-1 bg-[#22d3f7] mb-8"></div>
              <p className="text-ink-muted text-lg leading-relaxed mb-6">
                La Trinchera México nació de una{" "}
                <strong className="text-[#22d3f7]">pasión compartida</strong>{" "}
                por crear momentos inolvidables. Con más de{" "}
                <strong className="text-[#22d3f7]">
                  10 años de experiencia
                </strong>{" "}
                en la organización de eventos, hemos tenido el privilegio de ser
                parte de miles de historias únicas.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-6">
                Desde una boda íntima hasta un evento corporativo de gran
                escala, cada celebración es tratada con el mismo nivel de{" "}
                <strong className="text-[#22d3f7]">
                  dedicación y profesionalismo
                </strong>
                . Conocemos en profundidad nuestro negocio, lo que nos permite
                llevar tu evento a un nivel superior.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed">
                Somos más que organizadores de eventos; somos{" "}
                <strong className="text-[#22d3f7]">
                  arquitectos de experiencias
                </strong>{" "}
                que conectan a las personas a través de celebraciones
                memorables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión - Fondo Negro */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nuestra Misión y Visión
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#22d3f7]/20 hover:border-[#22d3f7]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#22d3f7] mb-4 text-center">
                Nuestra Misión
              </h3>
              <p className="text-muted text-center leading-relaxed">
                Transformar cada evento en una experiencia inolvidable,
                superando las expectativas de nuestros clientes mediante un
                servicio integral, profesional y personalizado que refleje su
                esencia única.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#22d3f7]/20 hover:border-[#22d3f7]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#22d3f7] mb-4 text-center">
                Nuestra Visión
              </h3>
              <p className="text-muted text-center leading-relaxed">
                Ser la empresa líder en organización de eventos en México,
                reconocida por nuestra innovación, excelencia en el servicio y
                nuestra capacidad para crear celebraciones que trascienden y
                permanecen en el corazón de las personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores - Fondo Blanco */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-surface">
              Nuestros Valores
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada evento que creamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Valor 1 */}
            <div className="bg-surface-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Excelencia
              </h3>
              <p className="text-ink-muted text-center">
                Buscamos la perfección en cada detalle, desde la planificación
                hasta la ejecución.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="bg-surface-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Compromiso
              </h3>
              <p className="text-ink-muted text-center">
                Tu evento es tan importante para nosotros como lo es para ti.
                Nos comprometemos al 100%.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="bg-surface-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Creatividad
              </h3>
              <p className="text-ink-muted text-center">
                Transformamos ideas en realidades únicas que superan
                expectativas.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="bg-surface-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Profesionalismo
              </h3>
              <p className="text-ink-muted text-center">
                Equipo certificado y capacitado para manejar eventos de
                cualquier magnitud.
              </p>
            </div>

            {/* Valor 5 */}
            <div className="bg-surface-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Pasión
              </h3>
              <p className="text-ink-muted text-center">
                Amamos lo que hacemos y se refleja en cada evento que creamos.
              </p>
            </div>

            {/* Valor 6 */}
            <div className="bg-surface-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#22d3f7]">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Innovación
              </h3>
              <p className="text-ink-muted text-center">
                Siempre a la vanguardia en tendencias y tecnología para eventos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos - Fondo Negro */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Por Qué Elegir{" "}
              <span className="text-[#22d3f7]">La Trinchera México</span>?
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Razón 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#22d3f7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Experiencia Comprobada
                </h3>
                <p className="text-muted">
                  Más de 10 años organizando eventos exitosos de todo tipo y
                  tamaño en Ciudad de México.
                </p>
              </div>
            </div>

            {/* Razón 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#22d3f7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Servicio Integral
                </h3>
                <p className="text-muted">
                  Todo lo que necesitas en un solo lugar: catering, decoración,
                  música, mobiliario y más.
                </p>
              </div>
            </div>

            {/* Razón 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#22d3f7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Atención Personalizada
                </h3>
                <p className="text-muted">
                  Cada cliente es único. Adaptamos nuestros servicios a tus
                  necesidades específicas.
                </p>
              </div>
            </div>

            {/* Razón 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#22d3f7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Equipo Profesional
                </h3>
                <p className="text-muted">
                  Staff certificado y capacitado para garantizar el éxito de tu
                  evento.
                </p>
              </div>
            </div>

            {/* Razón 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#22d3f7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Precios Competitivos
                </h3>
                <p className="text-muted">
                  Ofrecemos la mejor relación calidad-precio del mercado sin
                  comprometer la excelencia.
                </p>
              </div>
            </div>

            {/* Razón 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#22d3f7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Garantía de Satisfacción
                </h3>
                <p className="text-muted">
                  Tu satisfacción es nuestra prioridad. Trabajamos hasta que
                  estés 100% feliz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas - Fondo Gradiente */}
      <section className="py-20 bg-gradient-to-b from-black via-surface to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Números que Hablan por Nosotros
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#22d3f7] mb-2">
                10+
              </div>
              <div className="text-muted text-lg">Años de Experiencia</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#22d3f7] mb-2">
                +150
              </div>
              <div className="text-muted text-lg">Eventos Realizados</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#22d3f7] mb-2">
                98%
              </div>
              <div className="text-muted text-lg">Clientes Satisfechos</div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#22d3f7] mb-2">
                50+
              </div>
              <div className="text-muted text-lg">
                Profesionales en Equipo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-surface">
            ¿Listo para Crear Tu Evento Inolvidable?
          </h2>
          <p className="text-xl text-ink-muted mb-8">
            Contáctanos hoy y descubre cómo podemos hacer realidad tu visión
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#22d3f7] text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-[#1ab8d4] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contáctanos
            </a>
            <a
              href="/organizacion-de-eventos"
              className="inline-block bg-white text-[#22d3f7] font-bold px-10 py-4 rounded-full text-lg border-2 border-[#22d3f7] hover:bg-[#22d3f7] hover:text-black transition-colors duration-300"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
