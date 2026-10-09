import Image from "next/image";
import Link from "next/link";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

const BASE = "/organizacion-de-eventos";

export const serviciosEventos = [
  {
    href: `${BASE}/eventos-corporativos`,
    titulo: "Eventos corporativos",
    descripcion:
      "Organización y producción de eventos corporativos y empresariales: conferencias, expos, congresos y lanzamientos.",
    categoria: "eventos-empresariales",
  },
  {
    href: `${BASE}/organizacion-de-bodas`,
    titulo: "Organización de bodas",
    descripcion:
      "Planeamos tu boda de principio a fin: ambientación, música, banquete y atención personalizada.",
    categoria: "organizacion-de-bodas",
  },
  {
    href: `${BASE}/servicio-de-catering-para-eventos`,
    titulo: "Catering para eventos",
    descripcion:
      "Taquizas, parrilladas, menú gourmet y servicio de meseros para tu evento.",
    categoria: "catering-para-eventos",
  },
  {
    href: `${BASE}/stands-para-eventos`,
    titulo: "Stands para eventos",
    descripcion:
      "Diseño, fabricación, montaje y renta de stands para eventos, ferias y exposiciones.",
    categoria: "stands-para-eventos",
  },
  {
    href: `${BASE}/pantallas-para-escenarios`,
    titulo: "Pantallas para escenarios",
    descripcion:
      "Pantallas LED para escenarios y eventos, con tecnología audiovisual profesional.",
    categoria: "pantallas-para-escenarios",
  },
  {
    href: `${BASE}/musica-para-eventos`,
    titulo: "Música para eventos",
    descripcion: "DJ y grupos musicales para bodas, fiestas y eventos.",
    categoria: "musica-para-eventos",
  },
] as const;

export default function ServiciosGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviciosEventos.map((s) => {
        const src = optimizeCloudinaryUrl(
          cloudinaryImages[s.categoria as keyof typeof cloudinaryImages][0],
          { width: 800, height: 520 }
        );
        return (
          <Link
            key={s.href}
            href={s.href}
            className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={src}
                alt={`${s.titulo} - La Trinchera México`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-surface mb-2">{s.titulo}</h3>
              <p className="text-ink-muted leading-relaxed mb-4">{s.descripcion}</p>
              <span className="text-[#1ab8d4] font-semibold">Ver servicio →</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
