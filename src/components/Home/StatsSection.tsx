"use client";

import { useEffect, useState } from "react";
import {
  UsersIcon,
  ClockIcon,
  HeartIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("stats-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    {
      number: "+150",
      label: "Eventos Realizados",
      icon: UsersIcon,
    },
    {
      number: "10+",
      label: "Años de Experiencia",
      icon: ClockIcon,
    },
    {
      number: "98%",
      label: "Satisfacción del Cliente",
      icon: HeartIcon,
    },
    {
      number: "24/7",
      label: "Atención al Cliente",
      icon: PhoneIcon,
    },
  ];

  return (
    <section id="stats-section" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 mb-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
            Números que Hablan
          </h2>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            La experiencia y confianza de nuestros clientes respaldan nuestro
            trabajo
          </p>
        </div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`bg-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icono */}
                <div className="flex justify-center mb-6">
                  <IconComponent className="w-12 h-12 text-[#22d3f7]" />
                </div>

                {/* Número destacado */}
                <div className="text-center mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-center text-lg font-medium text-[#22d3f7]">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
