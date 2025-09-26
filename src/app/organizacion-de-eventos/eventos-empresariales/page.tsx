import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos Empresariales - La Trinchera México",
  description:
    "Somos tu agencia de eventos empresariales especializada. Expertos en planeación, operación, diseño e infraestructura para eventos corporativos.",
};

export default function EventosEmpresarialesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/serviceCard/eventos-empresariales.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Contenido */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            EVENTOS
            <span className="block text-[#22d3f7] mt-2">EMPRESARIALES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Somos tu agencia de EVENTOS EMPRESARIALES especializada.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Descripción Principal */}
          <div className="text-center mb-16">
            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              Nuestro equipo de expertos se encargará de diseñar y operar todos
              los aspectos de tu proyecto. Planeación, operación, diseño e
              infraestructura para tu evento. Hacemos que lo que tu empresa
              necesite se vuelve realidad.
            </p>

            {/* Testimonio */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
              <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-4">
                «Los eventos corporativos son fundamentales para el desarrollo
                de un empresa, por eso es importante contar con una agencia de
                eventos especializada.»
              </blockquote>
              <cite className="text-[#22d3f7] font-semibold">
                Gabriela Dávalos.
              </cite>
            </div>
          </div>

          {/* Una Empresa Organizadora */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              UNA EMPRESA ORGANIZADORA DE EVENTOS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-8"></div>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Somos los profesionales que estas buscando. Expertos en el diseño
              y montaje de todo tipo de eventos.
            </p>

            {/* Tipos de Eventos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Conferencias
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">Expos</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Fiestas Empresariales
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">Congresos</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Eventos Privados
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Lanzamientos
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Filmaciones
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Catering Empresarial
                </h3>
              </div>
            </div>
          </div>

          {/* Servicios Especializados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Montaje de Estructuras */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-4 text-center tracking-wide">
                MONTAJE DE ESTRUCTURAS
              </h3>
              <p className="text-gray-400 text-center leading-relaxed mb-4">
                Diseñamos todo tipo de estructuras.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Escenarios</li>
                <li>• Pantallas Gigantes</li>
                <li>• Stands Personalizados</li>
                <li>• Escenografía</li>
                <li>• Iluminación</li>
                <li>• Sonorización</li>
              </ul>
            </div>

            {/* Diseños Personalizados */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-4 text-center tracking-wide">
                DISEÑOS PERSONALIZADOS
              </h3>
              <p className="text-gray-400 text-center leading-relaxed mb-4">
                Te mostramos como quedará tu proyecto antes del montaje final.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Plataformas para conferencias</li>
                <li>• Stands publicitarios</li>
                <li>• Escenarios audiovisuales</li>
              </ul>
            </div>

            {/* Tecnología Audiovisual */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-4 text-center tracking-wide">
                TECNOLOGÍA AUDIOVISUAL
              </h3>
              <p className="text-gray-400 text-center leading-relaxed mb-4">
                Infraestructura audiovisual de primer nivel a tu alcance.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Transmisión en vivo</li>
                <li>• Traducción en vivo</li>
                <li>• Transmisión Multiplataformas</li>
                <li>• Grabación</li>
                <li>• Sonorización</li>
                <li>• Iluminación</li>
              </ul>
            </div>
          </div>

          {/* Agencia de Eventos Sociales */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              TU AGENCIA DE EVENTOS SOCIALES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-8"></div>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Somos especialistas en la organización de eventos sociales para tu
              empresa o para tus clientes.
            </p>

            {/* Eventos Sociales */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">Congresos</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Conferencias
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Talk Business
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Celebraciones
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#22d3f7]/50 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">
                  Fiestas de fin de año
                </h3>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              ¿Listo para Impresionar a tus Clientes?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contacta con nosotros para diseñar el evento corporativo perfecto
              para tu empresa
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 font-semibold border-2 border-[#22d3f7] bg-[#22d3f7] text-black overflow-hidden rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                  SOLICITA COTIZACIÓN
                </span>
              </a>

              <a
                href="/organizacion-de-eventos"
                className="group relative px-8 py-4 font-semibold border-2 border-white/50 bg-transparent text-black overflow-hidden rounded-full cursor-pointer hover:border-[#22d3f7] transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#22d3f7] -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-400">
                  VER MÁS SERVICIOS
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
