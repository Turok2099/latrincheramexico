"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import ProcesoOrganizacion from "@/components/EventosEmpresariales/ProcesoOrganizacion";
import InspirationSection from "@/components/Home/InspirationSection";

export default function EventosEmpresarialesPage() {
  const eventosEmpresarialesImages = cloudinaryImages["eventos-empresariales"];
  const cateringImages = cloudinaryImages["catering-para-eventos"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Carrusel automático de imágenes
  useEffect(() => {
    if (eventosEmpresarialesImages.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % eventosEmpresarialesImages.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [eventosEmpresarialesImages.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section con Carrusel */}
      <section className="relative w-full h-screen">
        {/* Carrusel de imágenes */}
        <div className="absolute inset-0 overflow-hidden">
          {eventosEmpresarialesImages.length > 0 && (
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                isTransitioning
                  ? "scale-105 opacity-80"
                  : "scale-100 opacity-100"
              }`}
              style={{
                backgroundImage: `url(${eventosEmpresarialesImages[currentImageIndex]})`,
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
              EVENTOS
              <span className="block text-[#22d3f7] mt-2">EMPRESARIALES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Tu agencia de eventos empresariales especializada
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
                EXPERTOS EN EVENTOS CORPORATIVOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Somos tu agencia de eventos empresariales especializada. Nuestro
                equipo de expertos se encargará de diseñar y operar todos los
                aspectos de tu proyecto. Planeación, operación, diseño e
                infraestructura para tu evento. Hacemos que lo que tu empresa
                necesite se vuelva realidad.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={eventosEmpresarialesImages[0]}
                  alt="Eventos corporativos"
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
                  src={eventosEmpresarialesImages[1]}
                  alt="Montaje de estructuras"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                MONTAJE DE ESTRUCTURAS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Diseñamos todo tipo de estructuras para tu evento empresarial.
                Desde escenarios hasta pantallas gigantes, stands personalizados
                y escenografía completa.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Escenarios profesionales
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Pantallas Gigantes LED
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Stands Personalizados
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Iluminación y Sonorización
                </li>
              </ul>
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
                TECNOLOGÍA AUDIOVISUAL
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Infraestructura audiovisual de primer nivel a tu alcance.
                Contamos con lo último en tecnología para transmisión en vivo,
                traducción simultánea y producción multiplataforma.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Transmisión en vivo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Traducción simultánea
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Transmisión Multiplataformas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3"></span>
                  Grabación profesional
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src={eventosEmpresarialesImages[2]}
                  alt="Tecnología audiovisual"
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
                  src={cateringImages[0]}
                  alt="Catering empresarial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-[#22d3f7]">
                TODO TIPO DE EVENTOS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Somos especialistas en la organización de conferencias, expos,
                fiestas empresariales, congresos, lanzamientos y mucho más. Cada
                proyecto es único y lo tratamos con la dedicación que merece.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
                  <p className="text-gray-700 font-medium text-sm">
                    Conferencias
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
                  <p className="text-gray-700 font-medium text-sm">Expos</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
                  <p className="text-gray-700 font-medium text-sm">
                    Fiestas Corporativas
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
                  <p className="text-gray-700 font-medium text-sm">Congresos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Organización */}
      <ProcesoOrganizacion />

      {/* Sección de Inspiración */}
      <InspirationSection />
    </div>
  );
}
