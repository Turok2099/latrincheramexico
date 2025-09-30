"use client";

import { useState, useEffect } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";

export default function HeroContactForm() {
  const eventosEmpresarialesImages = cloudinaryImages["eventos-empresariales"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fechaEvento: "",
    numeroInvitados: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoEvento: "",
        fechaEvento: "",
        numeroInvitados: "",
        mensaje: "",
      });
    }, 3000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 overflow-hidden">
        {eventosEmpresarialesImages.length > 0 && (
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              isTransitioning ? "scale-105 opacity-80" : "scale-100 opacity-100"
            }`}
            style={{
              backgroundImage: `url(${eventosEmpresarialesImages[currentImageIndex]})`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {isSubmitted ? (
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
              <div className="w-20 h-20 bg-[#22d3f7] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                ¡Mensaje Enviado!
              </h3>
              <p className="text-gray-300 text-lg">
                Gracias por contactarnos. Nos pondremos en contacto contigo en
                las próximas 24 horas.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
                Cuéntanos tu Proyecto
              </h1>
              <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo para
                crear el evento de tus sueños
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-white font-medium mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-white font-medium mb-2"
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tipoEvento"
                      className="block text-white font-medium mb-2"
                    >
                      Tipo de Evento *
                    </label>
                    <select
                      id="tipoEvento"
                      name="tipoEvento"
                      value={formData.tipoEvento}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/80 border border-white/30 rounded-lg text-white focus:outline-none focus:border-[#22d3f7] focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                    >
                      <option value="">Selecciona el tipo de evento</option>
                      <option value="eventos-sociales">Eventos Sociales</option>
                      <option value="catering-para-eventos">
                        Catering para Eventos
                      </option>
                      <option value="eventos-empresariales">
                        Eventos Empresariales
                      </option>
                      <option value="organizacion-de-bodas">
                        Organización de Bodas
                      </option>
                      <option value="pantallas-para-escenarios">
                        Pantallas para Escenarios
                      </option>
                      <option value="stands-para-eventos">
                        Stands para Eventos
                      </option>
                      <option value="musica-para-eventos">
                        Música para Eventos
                      </option>
                      <option value="graduaciones">Graduaciones</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fechaEvento"
                      className="block text-white font-medium mb-2"
                    >
                      Fecha del Evento *
                    </label>
                    <input
                      type="date"
                      id="fechaEvento"
                      name="fechaEvento"
                      value={formData.fechaEvento}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="numeroInvitados"
                      className="block text-white font-medium mb-2"
                    >
                      Número de Invitados *
                    </label>
                    <input
                      type="number"
                      id="numeroInvitados"
                      name="numeroInvitados"
                      value={formData.numeroInvitados}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                      placeholder="Ej: 150"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-white font-medium mb-2"
                  >
                    Cuéntanos más sobre tu evento *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300 resize-none"
                    placeholder="Describe tu visión, ubicación, presupuesto aproximado y cualquier detalle especial que tengas en mente..."
                  />
                </div>
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-fit bg-[#22d3f7] text-black font-medium px-8 py-4 text-base border-2 border-[#22d3f7] overflow-hidden rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Enviando...</span>
                      </span>
                    ) : (
                      <>
                        <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                        <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                          ENVIAR SOLICITUD
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
