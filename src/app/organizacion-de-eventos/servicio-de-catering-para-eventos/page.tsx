"use client";
import { useState } from "react";

export default function CateringPageClient() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      name: "Catering",
      title: "Catering Gourmet",
      description:
        "Platillos del más alto nivel para tu evento, diseñados por nuestros chefs y personalizados para ti. Ofrecemos una experiencia culinaria excepcional que elevará tu evento al siguiente nivel.",
      features: [
        "Menús personalizados",
        "Chefs especializados",
        "Ingredientes premium",
        "Presentación elegante",
      ],
    },
    {
      name: "Taquizas",
      title: "Taquizas de Guisados",
      description:
        "Sencillos, rápidos y sabrosos; las taquizas de guisados son un platillo muy querido por todos los mexicanos por su toque tradicional. Te ofrecemos un buffet con una selección de los guisados clásicos que no pueden faltar en toda ocasión.",
      features: [
        "Guisados tradicionales",
        "Buffet completo",
        "Equipo profesional",
        "Sabor auténtico",
      ],
    },
    {
      name: "Parrilladas",
      title: "Parrilladas Especializadas",
      description:
        "Carnes asadas a la perfección con técnicas tradicionales y modernas. Nuestras parrilladas incluyen una variedad de cortes premium y acompañamientos que harán de tu evento una experiencia memorable.",
      features: [
        "Cortes premium",
        "Técnicas especializadas",
        "Acompañamientos",
        "Servicio completo",
      ],
    },
    {
      name: "Canapés",
      title: "Canapés Elegantes",
      description:
        "Pequeños bocados sofisticados perfectos para eventos de alto nivel. Nuestros canapés combinan sabores únicos con presentaciones artísticas que impresionarán a tus invitados.",
      features: [
        "Presentación artística",
        "Sabores únicos",
        "Ingredientes frescos",
        "Variedad gourmet",
      ],
    },
    {
      name: "Banquetes",
      title: "Banquetes en Tiempos",
      description:
        "Servicio de banquetes completos con tiempos perfectamente coordinados. Desde el aperitivo hasta el postre, cada momento está cuidadosamente planificado para ofrecer una experiencia gastronómica completa.",
      features: [
        "Coordinación perfecta",
        "Múltiples tiempos",
        "Servicio profesional",
        "Experiencia completa",
      ],
    },
    {
      name: "Buffete",
      title: "Buffete Variado",
      description:
        "Amplia selección de platillos en formato buffet que permite a tus invitados elegir según sus preferencias. Perfecto para eventos grandes donde la variedad y la abundancia son clave.",
      features: [
        "Amplia variedad",
        "Autoservicio",
        "Abundancia garantizada",
        "Para eventos grandes",
      ],
    },
    {
      name: "Brunch",
      title: "Brunch Especializado",
      description:
        "La combinación perfecta entre desayuno y almuerzo para eventos matutinos. Nuestro brunch incluye opciones dulces y saladas que satisfacen todos los gustos y horarios.",
      features: [
        "Opción dulce y salada",
        "Horario matutino",
        "Variedad completa",
        "Perfecto para eventos tempranos",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/iconosservicios/catering.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Contenido */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            SERVICIO DE CATERING
            <span className="block text-[#22d3f7] mt-2">PARA EVENTOS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            ¿BUSCAS UN SERVICIO DE CATERING PARA EVENTOS?
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
              Necesitas un servicio profesional para tu evento. Descubre el
              mejor servicio de catering a tu domicilio. Nuestros Chefs ponen a
              tu alcance banquetes de alto nivel para que tu evento luzca
              maravilloso.
            </p>
          </div>

          {/* Servicios Interactivos */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
                NUESTROS SERVICIOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-8"></div>
            </div>

            {/* Card Principal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-8 min-h-[400px] flex flex-col justify-center">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                  {services[activeService].title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-6"></div>
              </div>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                {services[activeService].description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {services[activeService].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
                  >
                    <p className="text-white font-medium text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lista Horizontal */}
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
                    activeService === index
                      ? "bg-[#22d3f7] text-black border-2 border-[#22d3f7]"
                      : "bg-white/10 text-white/80 border-2 border-white/20 hover:border-[#22d3f7]/50 hover:text-white"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action Principal */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              COTIZA TU EVENTO
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-8"></div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 font-semibold border-2 border-[#22d3f7] bg-[#22d3f7] text-black overflow-hidden rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                  CONTACTO
                </span>
              </a>
            </div>
          </div>

          {/* Guía de Selección */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-wide">
              ¿Cómo escoger el mejor servicio de Catering para eventos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-8"></div>

            <p className="text-gray-400 text-lg mb-8 text-center leading-relaxed">
              Hacer una contratación adecuada es vital para que tu evento quede
              perfecto. Por lo anterior te damos las siguientes recomendaciones
              que te ayudarán a tomar la mejor decisión al contratar un servicio
              de catering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Identifica tu tipo de evento
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Un servicio de catering puede hacer que tu evento sea un
                    éxito total. Para que lo anterior sea posible debes conocer
                    el tipo de alimentos que combinarían perfecto con tu evento.
                    Por ejemplo, una boda de noche será diferente que una boda
                    de día, un servicio para empresas puede ser tanto ejecutivo
                    como casual. Es decir, necesitas comprender que es lo que
                    quieres en tu evento.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Conoce a tu Público
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    ¿Vas a organizar una reunión familiar? ¿va a ser una
                    presentación con clientes de tu empresa? Necesitas entender
                    que tipo de comunidad es la que le vas a recibir para
                    consentir a todos los paladares de tu evento. Finalmente, ya
                    sea un evento casual o de alto nivel, debes de garantizar
                    que tu comida tenga un gran sabor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información de Costos */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              ¿Cuánto cuesta un servicio de catering para eventos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-8"></div>

            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              Esta claro que un servicio de catering va a cambiar según el tipo
              de alimentos y servicio. Los servicios especializados para eventos
              de alto nivel (como los que tenemos en La Trinchera México) suelen
              ser más costosos que aquellos un poco más casuales como fiestas
              privadas, taquizas o tardeadas.
            </p>

            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
              Por lo anterior te vamos a dar a conocer algunos rangos de costos
              de alimentos por evento para que te des una idea de lo que podrías
              invertir en tu servicio:
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
