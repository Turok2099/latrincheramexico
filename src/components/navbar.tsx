"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventosOpen, setIsEventosOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Cerrar menú al presionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    }, 150);
    setHoverTimeout(timeout);
  };

  // Función de búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    
    // Mapeo de búsquedas a rutas
    const searchMap: { [key: string]: string } = {
      "catering": "/organizacion-de-eventos/servicio-de-catering-para-eventos",
      "eventos empresariales": "/organizacion-de-eventos/eventos-empresariales",
      "empresariales": "/organizacion-de-eventos/eventos-empresariales",
      "eventos sociales": "/organizacion-de-eventos/eventos-sociales",
      "sociales": "/organizacion-de-eventos/eventos-sociales",
      "bodas": "/organizacion-de-eventos/organizacion-de-bodas",
      "graduaciones": "/organizacion-de-eventos/graduaciones",
      "musica": "/organizacion-de-eventos/musica-para-eventos",
      "música": "/organizacion-de-eventos/musica-para-eventos",
      "pantallas": "/organizacion-de-eventos/pantallas-para-escenarios",
      "stands": "/organizacion-de-eventos/stands-para-eventos",
      "eventos": "/organizacion-de-eventos",
      "dark kitchen": "/darkkitchen",
      "nosotros": "/about",
      "contacto": "/contact",
      "home": "/",
    };

    // Buscar coincidencia
    for (const [key, route] of Object.entries(searchMap)) {
      if (query.includes(key) || key.includes(query)) {
        setIsOpen(false);
        setSearchQuery("");
        router.push(route);
        return;
      }
    }

    // Si no hay coincidencia, ir a página de eventos
    setIsOpen(false);
    setSearchQuery("");
    router.push("/organizacion-de-eventos");
  };

  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/organizacion-de-eventos",
      label: "Organización de Eventos",
      hasSubmenu: true,
      submenu: [
        {
          href: "/organizacion-de-eventos/eventos-sociales",
          label: "Eventos Sociales",
        },
        {
          href: "/organizacion-de-eventos/servicio-de-catering-para-eventos",
          label: "Servicio de Catering",
        },
        {
          href: "/organizacion-de-eventos/eventos-empresariales",
          label: "Eventos Empresariales",
        },
        {
          href: "/organizacion-de-eventos/organizacion-de-bodas",
          label: "Organización de Bodas",
        },
        {
          href: "/organizacion-de-eventos/pantallas-para-escenarios",
          label: "Pantallas para Escenarios",
        },
        {
          href: "/organizacion-de-eventos/stands-para-eventos",
          label: "Stands para Eventos",
        },
        {
          href: "/organizacion-de-eventos/musica-para-eventos",
          label: "Música para Eventos",
        },
        {
          href: "/organizacion-de-eventos/graduaciones",
          label: "Graduaciones",
        },
      ],
    },
    { href: "/darkkitchen", label: "Dark Kitchen" },
    { href: "/about", label: "Nosotros" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <>
      {/* Blur Overlay - Solo visible cuando menú está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-white/10">

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

          {/* Mobile Menu Button - Icono Modernizado */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-white focus:outline-none transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Desliza desde derecha */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-black/95 backdrop-blur-lg z-[45] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Links principales - Sin submenu */}
          <div className="flex-1 flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium tracking-wide uppercase transition-all duration-300 ${
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-[#22d3f7] font-semibold translate-x-2"
                    : "text-white/80 hover:text-white hover:translate-x-2"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Barra de búsqueda - En la parte inferior */}
          <div className="pb-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar servicios..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#22d3f7] transition-colors duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#22d3f7] hover:text-white transition-colors duration-300"
                aria-label="Buscar"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
            <p className="text-xs text-white/40 mt-2 text-center">
              Ej: &quot;catering&quot;, &quot;bodas&quot;, &quot;empresariales&quot;
            </p>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
