"use client";
import { useEffect, useState } from "react";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import Formulario from "./Formulario";

export default function HeroContactForm() {
  const imagenes = cloudinaryImages["eventos-empresariales"] ?? [];
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    if (imagenes.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const intervalo = setInterval(() => setIndice(actual => (actual + 1) % imagenes.length), 4000);
    return () => clearInterval(intervalo);
  }, [imagenes.length]);
  return <section className="relative w-full min-h-screen py-20 bg-black">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {imagenes.length > 0 && <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imagenes[indice]})` }} />}
      <div className="absolute inset-0 bg-black/85" />
    </div>
    {/* data-nosnippet: que Google use la meta descripción y no el texto del formulario */}
    <div className="relative z-10" data-nosnippet><Formulario origen="/contact" principal /></div>
  </section>;
}
