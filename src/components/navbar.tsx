"use client";
import { useState, useEffect } from "react";
import Hamburguesa from "@/components/hamburguesa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isEventosOpen, setIsEventosOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsEventosOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsEventosOpen(false);
    }, 150); // Pequeño delay para evitar cierre accidental
    setHoverTimeout(timeout);
  };

  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/organizacion-de-eventos",
      label: "Organización de Eventos",
      hasSubmenu: true,
      submenu: [
        {
          href: "/organizacion-de-eventos/servicio-de-catering-para-eventos",
          label: "Servicio de Catering",
        },
        {
          href: "/organizacion-de-eventos/eventos-empresariales",
          label: "Eventos Empresariales",
        },
      ],
    },
    { href: "/darkkitchen", label: "Dark Kitchen" },
    { href: "/about", label: "Nosotros" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-[#22d3f7] font-bold text-xl tracking-wider"
            >
              LA TRINCHERA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.hasSubmenu ? (
                  <div
                    className="relative z-[55]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`relative font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/")
                          ? "text-[#22d3f7] font-semibold"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {(pathname === item.href ||
                        pathname.startsWith(item.href + "/")) && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#22d3f7]"></div>
                      )}
                    </Link>

                    {/* Submenu */}
                    {isEventosOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-lg py-2 z-[60] pointer-events-auto">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer ${
                              pathname === subItem.href
                                ? "text-[#22d3f7] font-semibold bg-white/5"
                                : "text-white/80 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
                      pathname === item.href
                        ? "text-[#22d3f7] font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#22d3f7]"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Hamburguesa
              isOpen={isOpen}
              toggleMenu={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                        ? "text-[#22d3f7] font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Mobile Submenu */}
                  {item.hasSubmenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`block text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${
                            pathname === subItem.href
                              ? "text-[#22d3f7] font-semibold"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
