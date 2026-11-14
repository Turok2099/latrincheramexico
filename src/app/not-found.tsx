import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | La Trinchera México",
  robots: { index: false, follow: false },
};

const servicios = [
  { href: "/organizacion-de-eventos/eventos-corporativos", label: "Eventos corporativos" },
  { href: "/organizacion-de-eventos/organizacion-de-bodas", label: "Bodas" },
  { href: "/organizacion-de-eventos/servicio-de-catering-para-eventos", label: "Catering" },
  { href: "/organizacion-de-eventos/stands-para-eventos", label: "Stands" },
  { href: "/organizacion-de-eventos/pantallas-para-escenarios", label: "Pantallas" },
  { href: "/organizacion-de-eventos/musica-para-eventos", label: "Música" },
];

export default function NotFound() {
  return (
    <main className="relative flex-1 flex items-center justify-center overflow-hidden bg-black px-6 pt-36 pb-24 text-white">
      {/* Marca de agua: ícono de la marca */}
      <Image
        src="/logo.png"
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
        className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 opacity-[0.07] md:right-8 md:h-[36rem] md:w-[36rem]"
      />

      <div className="relative z-10 w-full max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#22d3f7]">
          Error 404
        </p>

        <p
          aria-hidden="true"
          className="select-none text-[7rem] font-bold leading-none tracking-tight text-transparent sm:text-[10rem] md:text-[13rem]"
          style={{ WebkitTextStroke: "2px #22d3f7" }}
        >
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
          Esta página no existe
        </h1>
        <div className="my-6 h-1 w-24 bg-[#22d3f7]" />
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Es posible que el enlace haya cambiado o que la dirección esté mal
          escrita. Vuelve al inicio o elige el servicio que buscas.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="rounded-full border-2 border-[#22d3f7] bg-[#22d3f7] px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-white hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:border-[#22d3f7] hover:text-[#22d3f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3f7]"
          >
            Solicitar cotización
          </Link>
        </div>

        <nav aria-label="Servicios" className="mt-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
            Nuestros servicios
          </p>
          <ul className="flex flex-wrap gap-3">
            {servicios.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 transition-colors duration-300 hover:border-[#22d3f7] hover:text-[#22d3f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22d3f7]"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
