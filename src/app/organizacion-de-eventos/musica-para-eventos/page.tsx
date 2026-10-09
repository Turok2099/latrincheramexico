"use client";
import Image from "next/image";
import { useEffect } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";
import InspirationSection from "@/components/Home/InspirationSection";

function MusicaParaEventosPage() {
  // Usar imágenes específicas de musica-para-eventos
  const musicaImages = cloudinaryImages["musica-para-eventos"];

  // 🖼️ Imagen hero fija optimizada (39.png)
  const heroImageUrl =
    musicaImages[5] || cloudinaryImages["musica-para-eventos"][5];
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
            alt="Música para Eventos - DJ y Grupos Musicales"
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
              MÚSICA PARA
              <span className="block text-[#22d3f7] mt-2">EVENTOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed">
              DJ para fiestas, grupos musicales y mariachis para crear la
              atmósfera perfecta
            </p>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Bloque 1 - Fondo Negro - DJ para Fiestas */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={musicaImages[1]}
                  alt="DJ para fiestas y eventos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                🎧 TU DJ PARA FIESTAS IDEAL
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-muted text-lg leading-relaxed">
                En La Trinchera México contamos con el{" "}
                <strong className="text-[#22d3f7]">DJ para fiestas</strong>{" "}
                ideal para animar cualquier celebración, desde un íntimo{" "}
                <strong className="text-[#22d3f7]">
                  DJ para fiestas en casa
                </strong>{" "}
                hasta un espectacular{" "}
                <strong className="text-[#22d3f7]">DJ para eventos</strong>{" "}
                corporativos. Nuestros{" "}
                <strong className="text-[#22d3f7]">DJs para bodas</strong> crean
                la atmósfera perfecta con mezclas personalizadas y un{" "}
                <strong className="text-[#22d3f7]">
                  sonido DJ para fiestas
                </strong>{" "}
                de alta calidad, asegurando que cada momento esté acompañado de
                la música que hará vibrar a tus invitados y convertir tu evento
                en una experiencia inolvidable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 2 - Fondo Blanco - Música para Eventos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                🎵 MÚSICA PARA EVENTOS QUE INSPIRA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-ink-muted text-lg leading-relaxed">
                En La Trinchera México ofrecemos{" "}
                <strong className="text-[#22d3f7]">música para eventos</strong>{" "}
                que se adapta a cualquier ocasión, desde celebraciones íntimas
                hasta grandes producciones. Contamos con{" "}
                <strong className="text-[#22d3f7]">
                  grupos musicales para eventos
                </strong>{" "}
                y{" "}
                <strong className="text-[#22d3f7]">
                  bandas musicales para eventos
                </strong>{" "}
                que interpretan repertorios variados, asegurando que cada
                momento tenga la atmósfera perfecta. Nuestro objetivo es que la{" "}
                <strong className="text-[#22d3f7]">musica fiesta</strong> sea el
                hilo conductor que acompañe y realce la experiencia de tus
                invitados.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={musicaImages[0]}
                  alt="Grupos musicales para eventos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3 - Fondo Negro - Música para Bodas */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                💍 MÚSICA ESPECIAL PARA BODAS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-muted text-lg leading-relaxed">
                Sabemos que la música es el corazón de una celebración, por eso
                ponemos a tu disposición{" "}
                <strong className="text-[#22d3f7]">músicos para bodas</strong> y{" "}
                <strong className="text-[#22d3f7]">
                  grupos musicales para bodas
                </strong>{" "}
                que crean el ambiente ideal para tu ceremonia y recepción. Desde
                la{" "}
                <strong className="text-[#22d3f7]">música para la boda</strong>{" "}
                más romántica hasta ritmos que animen la pista de baile,
                cuidamos cada detalle para que tu día sea inolvidable. Incluso
                podemos incluir un{" "}
                <strong className="text-[#22d3f7]">mariachi boda</strong> para
                dar un toque tradicional y emotivo a tu celebración.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={musicaImages[2]}
                  alt="Música para bodas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 4 - Fondo Blanco - Mariachis y Fiestas Temáticas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={musicaImages[3]}
                  alt="Mariachis para serenata y cumpleaños"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                🎺 ALEGRÍA CON MARIACHIS Y FIESTAS TEMÁTICAS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-ink-muted text-lg leading-relaxed mb-6">
                Si buscas un toque auténtico y festivo, ofrecemos{" "}
                <strong className="text-[#22d3f7]">
                  contratacion de mariachis
                </strong>{" "}
                para todo tipo de eventos. Ya sea una{" "}
                <strong className="text-[#22d3f7]">
                  mariachis para serenata
                </strong>
                , un{" "}
                <strong className="text-[#22d3f7]">
                  mariachis para cumpleaños
                </strong>{" "}
                o{" "}
                <strong className="text-[#22d3f7]">
                  musica de mariachi para cumpleaños
                </strong>
                , nuestros músicos llevan alegría y emoción a cada presentación.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed">
                También contamos con opciones para{" "}
                <strong className="text-[#22d3f7]">música para bautizo</strong>,{" "}
                <strong className="text-[#22d3f7]">
                  música para fiesta de adultos
                </strong>{" "}
                y{" "}
                <strong className="text-[#22d3f7]">
                  música para fiestas infantiles
                </strong>
                , adaptando el repertorio y la energía a la temática y el
                público de tu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Musicales */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-surface">
              SERVICIOS DE
              <span className="block text-[#22d3f7] mt-2">
                MÚSICA Y ENTRETENIMIENTO
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Entretenimiento musical profesional para todo tipo de eventos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 - DJ */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎧</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                DJ Profesional
              </h3>
              <p className="text-ink-muted text-center mb-4">
                <strong>DJ para fiestas</strong> y eventos con equipos de alta
                calidad
              </p>
              <ul className="text-sm text-ink-muted space-y-2">
                <li>✓ Mezclas personalizadas</li>
                <li>✓ Sistema de sonido profesional</li>
                <li>✓ Iluminación LED</li>
                <li>✓ Todos los géneros musicales</li>
              </ul>
            </div>

            {/* Servicio 2 - Grupos Musicales */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎸</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Grupos Musicales
              </h3>
              <p className="text-ink-muted text-center mb-4">
                <strong>Grupos musicales para eventos</strong> y fiestas en vivo
              </p>
              <ul className="text-sm text-ink-muted space-y-2">
                <li>✓ Bandas versátiles</li>
                <li>✓ Repertorio variado</li>
                <li>✓ Músicos profesionales</li>
                <li>✓ Sonido envolvente</li>
              </ul>
            </div>

            {/* Servicio 3 - Mariachis */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎺</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Mariachis
              </h3>
              <p className="text-ink-muted text-center mb-4">
                <strong>Mariachis para serenata</strong>, bodas y cumpleaños
              </p>
              <ul className="text-sm text-ink-muted space-y-2">
                <li>✓ Mariachis profesionales</li>
                <li>✓ Repertorio tradicional</li>
                <li>✓ Canciones personalizadas</li>
                <li>✓ Trajes típicos</li>
              </ul>
            </div>

            {/* Servicio 4 - Música para Bodas */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💍</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Música para Bodas
              </h3>
              <p className="text-ink-muted text-center mb-4">
                <strong>Músicos para bodas</strong> que crean momentos
                inolvidables
              </p>
              <ul className="text-sm text-ink-muted space-y-2">
                <li>✓ Ceremonia religiosa/civil</li>
                <li>✓ Cóctel y recepción</li>
                <li>✓ Primera bailada</li>
                <li>✓ Fiesta hasta la madrugada</li>
              </ul>
            </div>

            {/* Servicio 5 - Música Infantil */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎈</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Música Infantil
              </h3>
              <p className="text-ink-muted text-center mb-4">
                <strong>Música para fiestas infantiles</strong> y cumpleaños
              </p>
              <ul className="text-sm text-ink-muted space-y-2">
                <li>✓ Canciones para niños</li>
                <li>✓ Animación interactiva</li>
                <li>✓ Karaoke infantil</li>
                <li>✓ Juegos musicales</li>
              </ul>
            </div>

            {/* Servicio 6 - Eventos Corporativos */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#22d3f7] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-surface mb-4 text-center">
                Eventos Corporativos
              </h3>
              <p className="text-ink-muted text-center mb-4">
                <strong>DJ para eventos</strong> corporativos y fiestas de
                empresa
              </p>
              <ul className="text-sm text-ink-muted space-y-2">
                <li>✓ Música ambiental</li>
                <li>✓ DJ para networking</li>
                <li>✓ Sonido profesional</li>
                <li>✓ Entretenimiento elegante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              MÚSICA PARA TODO TIPO DE
              <span className="block text-[#22d3f7] mt-2">CELEBRACIONES</span>
            </h2>
            <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                Bodas
              </h3>
              <p className="text-muted text-center text-sm">
                <strong>Música para una boda</strong> perfecta
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                Cumpleaños
              </h3>
              <p className="text-muted text-center text-sm">
                <strong>Musicas para cumpleaños</strong> inolvidables
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                Bautizos
              </h3>
              <p className="text-muted text-center text-sm">
                <strong>Música para bautizo</strong> especial
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                XV Años
              </h3>
              <p className="text-muted text-center text-sm">
                DJ y <strong>grupos musicales para fiestas</strong>
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                Aniversarios
              </h3>
              <p className="text-muted text-center text-sm">
                <strong>Musica para fiestas</strong> especiales
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                Fiestas Infantiles
              </h3>
              <p className="text-muted text-center text-sm">
                <strong>Música para fiesta infantil</strong> divertida
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                Eventos Corporativos
              </h3>
              <p className="text-muted text-center text-sm">
                <strong>DJ para eventos</strong> empresariales
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-[#22d3f7]/30 hover:border-[#22d3f7] transition-colors duration-300">
              <h3 className="text-lg font-bold text-[#22d3f7] mb-2 text-center">
                Fiestas en Casa
              </h3>
              <p className="text-muted text-center text-sm">
                <strong>DJ para fiestas en casa</strong> íntimas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-surface">
            ¿LISTO PARA LLENAR TU EVENTO DE MÚSICA Y ALEGRÍA?
          </h2>
          <p className="text-xl text-ink-muted mb-8">
            Contrata nuestro <strong>DJ para fiestas</strong>,{" "}
            <strong>grupos musicales</strong> o{" "}
            <strong>mariachis para serenata</strong>
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

export default MusicaParaEventosPage;
