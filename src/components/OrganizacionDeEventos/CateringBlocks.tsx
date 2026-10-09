import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cloudinaryImages } from "@/helpers/CloudinaryMapping";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

export const SITE = "https://latrincheramexico.com";
export const CATERING_PATH = "/organizacion-de-eventos/servicio-de-catering-para-eventos";

export const cateringImages = cloudinaryImages["catering-para-eventos"];

// Modalidades con subpágina propia
export const modalidades = [
  {
    slug: "taquizas",
    titulo: "Taquizas para eventos",
    descripcion:
      "Taquizas con guisados tradicionales y carnes asadas para fiestas y eventos.",
  },
  {
    slug: "box-lunch",
    titulo: "Box lunch empresarial",
    descripcion:
      "Cajas individuales para capacitaciones, reuniones y eventos corporativos.",
  },
  {
    slug: "coffee-break",
    titulo: "Coffee break para eventos",
    descripcion:
      "Café, bebidas calientes y alimentos para reuniones y eventos de empresa.",
  },
  {
    slug: "canapes-y-bocadillos",
    titulo: "Canapés y bocadillos",
    descripcion:
      "Bocadillos de presentación elegante para cócteles, recepciones y networking.",
  },
] as const;

export type Faq = { q: string; a: string };

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription: string;
  image: string;
  imageAlt: string;
}): Metadata {
  const og = optimizeCloudinaryUrl(opts.image, { width: 1200, height: 630 });
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.ogTitle ?? opts.title,
      description: opts.ogDescription,
      url: `${SITE}${opts.path}`,
      siteName: "La Trinchera México",
      type: "website",
      locale: "es_MX",
      images: [{ url: og, width: 1200, height: 630, alt: opts.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.ogTitle ?? opts.title,
      description: opts.ogDescription,
      images: [og],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function StructuredData({
  name,
  serviceType,
  description,
  path,
  crumbs,
  faqs,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  crumbs: { name: string; path: string }[];
  faqs: Faq[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name,
        serviceType,
        url: `${SITE}${path}`,
        description,
        areaServed: [
          { "@type": "City", name: "Ciudad de México" },
          { "@type": "State", name: "Estado de México" },
        ],
        provider: {
          "@type": "Organization",
          name: "La Trinchera México",
          url: SITE,
          telephone: "+52-55-4521-0178",
          email: "contacto@latrincheramexico.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
          ...crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: c.name,
            item: `${SITE}${c.path}`,
          })),
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Divider() {
  return (
    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mb-8"></div>
  );
}

export function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/contact"
      className="inline-block bg-[#22d3f7] text-black font-bold px-8 py-3 rounded-full hover:bg-[#1ab8d4] transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

export function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
    </div>
  );
}

// Hero con imagen opcional (si no hay una fotografía pertinente, fondo liso)
export function CateringHero({
  titleTop,
  titleAccent,
  subtitle,
  cta,
  image,
  imageAlt,
}: {
  titleTop: string;
  titleAccent: string;
  subtitle: string;
  cta: string;
  image?: string;
  imageAlt?: string;
}) {
  const heroUrl = image
    ? optimizeCloudinaryUrl(image, {
        width: 1920,
        height: 1080,
        quality: "auto:eco",
        priority: true,
      })
    : null;
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {heroUrl && (
          <Image
            src={heroUrl}
            alt={imageAlt ?? ""}
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90 z-10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            {titleTop}
            <span className="block text-[#22d3f7] mt-2">{titleAccent}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed">{subtitle}</p>
          <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
          <CtaButton>{cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}

// Lista de datos para cotizar + botón
export function CotizarSection({
  heading,
  intro,
  items,
  cta,
  light = false,
}: {
  heading: string;
  intro: string;
  items: string[];
  cta: string;
  light?: boolean;
}) {
  return (
    <section className={`py-20 ${light ? "bg-surface-light" : "bg-black"}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 tracking-wide ${
            light ? "text-surface" : "text-[#22d3f7]"
          }`}
        >
          {heading}
        </h2>
        <div className="w-24 h-1 bg-[#22d3f7] mx-auto mb-8"></div>
        <p className={`${light ? "text-ink-muted" : "text-muted"} text-lg leading-relaxed mb-6`}>
          {intro}
        </p>
        <ul
          className={`${light ? "text-ink-muted" : "text-muted"} text-lg leading-relaxed mb-8 space-y-2 inline-block text-left`}
        >
          {items.map((d) => (
            <li key={d} className="flex items-center">
              <span className="w-2 h-2 bg-[#22d3f7] rounded-full mr-3 shrink-0"></span>
              {d}
            </li>
          ))}
        </ul>
        <div>
          <CtaButton>{cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  title,
  faqs,
  light = false,
}: {
  title: string;
  faqs: Faq[];
  light?: boolean;
}) {
  return (
    <section className={`py-20 ${light ? "bg-surface-light" : "bg-black"}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-10 tracking-wide text-center ${
            light ? "text-surface" : "text-white"
          }`}
        >
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className={
                light
                  ? "bg-white rounded-xl border border-black/10 p-5"
                  : "bg-surface rounded-xl border border-white/10 p-5"
              }
            >
              <summary className={`cursor-pointer font-semibold ${light ? "text-surface" : "text-white"}`}>
                {f.q}
              </summary>
              <p className={`mt-3 leading-relaxed ${light ? "text-ink-muted" : "text-muted"}`}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enlaces a otras modalidades (excluye la actual) y de regreso a Catering
export function RelacionadasSection({ current }: { current: string }) {
  const otras = modalidades.filter((m) => m.slug !== current);
  return (
    <section className="py-16 bg-surface-light">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-surface">
          Otros servicios de catering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {otras.map((m) => (
            <Link
              key={m.slug}
              href={`${CATERING_PATH}/${m.slug}`}
              className="block bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow text-left"
            >
              <h3 className="font-bold text-surface mb-2">{m.titulo}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{m.descripcion}</p>
            </Link>
          ))}
        </div>
        <Link href={CATERING_PATH} className="text-[#1ab8d4] font-semibold underline">
          ← Volver al servicio de catering para eventos
        </Link>
      </div>
    </section>
  );
}
