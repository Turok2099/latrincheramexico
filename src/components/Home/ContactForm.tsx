"use client";

import { useState } from "react";

// Declarar tipo para dataLayer de GTM
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function ContactForm() {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 📊 Track evento de envío de formulario en GTM/GA4
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "form_submission",
        form_name: "Formulario de Contacto Home",
        form_type: formData.tipoEvento || "No especificado",
        event_date: formData.fechaEvento || "No especificado",
        number_of_guests: formData.numeroInvitados || "No especificado",
        page_path: window.location.pathname,
        page_url: window.location.href,
      });
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Resetear formulario después de 3 segundos
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

  if (isSubmitted) {
    return (
      <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-[#22d3f7]/20">
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
            <p className="text-gray-400 text-lg">
              Gracias por contactarnos. Nos pondremos en contacto contigo en las
              próximas 24 horas.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Cuéntanos tu Proyecto
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para
            crear el evento de tus sueños
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primera fila */}
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Segunda fila */}
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
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
                <div className="relative">
                  <select
                    id="tipoEvento"
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-10 bg-gray-800 border-none rounded-lg text-white focus:outline-none transition-all duration-300"
                    style={{
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="" className="bg-gray-800 text-white">
                      Selecciona el tipo de evento
                    </option>
                    <option value="catering" className="bg-gray-800 text-white">
                      Servicio de Catering para Eventos
                    </option>
                    <option
                      value="empresariales"
                      className="bg-gray-800 text-white"
                    >
                      Eventos Empresariales
                    </option>
                    <option value="bodas" className="bg-gray-800 text-white">
                      Organización de Bodas
                    </option>
                    <option
                      value="graduaciones"
                      className="bg-gray-800 text-white"
                    >
                      Graduaciones
                    </option>
                    <option
                      value="mobiliario"
                      className="bg-gray-800 text-white"
                    >
                      Mobiliario para Eventos
                    </option>
                    <option
                      value="fotografia"
                      className="bg-gray-800 text-white"
                    >
                      Fotografía y Video Profesional
                    </option>
                    <option
                      value="pantallas"
                      className="bg-gray-800 text-white"
                    >
                      Pantallas LED
                    </option>
                    <option value="otro" className="bg-gray-800 text-white">
                      Otro
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tercera fila */}
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300"
                  placeholder="Ej: 150"
                />
              </div>
            </div>

            {/* Mensaje */}
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#22d3f7] focus:outline-none focus:ring-2 focus:ring-[#22d3f7]/20 transition-all duration-300 resize-none"
                placeholder="Describe tu visión, ubicación, presupuesto aproximado y cualquier detalle especial que tengas en mente..."
              />
            </div>

            {/* Botón de envío */}
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
                    {/* Capa blanca animada que entra desde la izquierda */}
                    <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>

                    {/* Texto que pasa de blanco a turquesa */}
                    <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-400">
                      ENVIAR SOLICITUD
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
