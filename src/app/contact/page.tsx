"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#22d3f7] mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ¿Tienes un evento en mente? Cuéntanos todos los detalles y te
            ayudaremos a crear una experiencia inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#22d3f7] mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#22d3f7] text-xl">📞</span>
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-gray-300">+52 55 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-[#22d3f7] text-xl">📧</span>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">contacto@latrinchera.mx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-[#22d3f7] text-xl">📍</span>
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-gray-300">Ciudad de México, México</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-[#22d3f7] text-xl">🕒</span>
                  <div>
                    <h3 className="font-semibold">Horarios de Atención</h3>
                    <p className="text-gray-300">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-300">Sábados: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicios destacados */}
            <div>
              <h3 className="text-xl font-semibold text-[#22d3f7] mb-4">
                Nuestros Servicios
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Organización de Bodas</li>
                <li>• Eventos Empresariales</li>
                <li>• Graduaciones</li>
                <li>• Mobiliario para Eventos</li>
                <li>• Fotografía y Video</li>
                <li>• Catering</li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#22d3f7] mb-6">
              Solicita tu Cotización
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg">
                <p className="text-green-300">
                  ¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded-lg">
                <p className="text-red-300">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de
                  nuevo.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none transition-colors"
                    placeholder="+52 55 1234 5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Tipo de Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="boda">Boda</option>
                    <option value="empresarial">Evento Empresarial</option>
                    <option value="graduacion">Graduación</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Fecha del Evento
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Número de Invitados
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none transition-colors"
                    placeholder="Ej: 100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#22d3f7] focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos más detalles sobre tu evento..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#22d3f7] text-black py-3 px-6 rounded-lg font-semibold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
