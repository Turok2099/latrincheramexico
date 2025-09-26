"use client";
import React from "react";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Hamburguesa({ isOpen, toggleMenu }: Props) {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden text-white focus:outline-none transition-transform duration-300"
      aria-label="Menú móvil"
    >
      {isOpen ? (
        <span className="text-[32px]">✕</span>
      ) : (
        <span className="text-[32px]">☰</span>
      )}
    </button>
  );
}
