const palette = [
  { name: "Fondo base", hex: "#000000", usage: "fondo principal" },
  { name: "Texto principal", hex: "#EDEDED", usage: "titulares y cuerpo" },
  { name: "Acento principal", hex: "#22D3F7", usage: "botones y resaltados" },
  { name: "Acento refinado", hex: "#2DD4BF", usage: "versión más premium" },
  { name: "Superficie 1", hex: "#111111", usage: "cards y paneles" },
  { name: "Superficie 2", hex: "#1F2937", usage: "secciones secundarias" },
  { name: "Texto suave", hex: "#D1D5DB", usage: "subtítulos" },
  { name: "Fondo claro", hex: "#F3F4F6", usage: "tarjetas claras" },
];

function ColorSwatch({
  name,
  hex,
  usage,
}: {
  name: string;
  hex: string;
  usage: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
      <div className="h-28 w-full" style={{ backgroundColor: hex }} />
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-white">{name}</p>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#D1D5DB]">
            {hex}
          </span>
        </div>
        <p className="text-sm text-[#D1D5DB]">{usage}</p>
      </div>
    </div>
  );
}

export default function PropuestaColoresPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-[#F5F5F5]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,247,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-20">
          <div className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-[#22D3F7]">
            <span className="h-px w-10 bg-[#22D3F7]" />
            Propuesta visual
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D1D5DB]">
                Ajuste de identidad
              </p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
                Más premium, más elegante y más cómodo para el usuario.
              </h1>
            </div>

            <div className="rounded-3xl border border-[#22D3F7]/20 bg-[#111111]/80 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#D1D5DB]">
                Paleta recomendada
              </p>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-[#22D3F7] shadow-[0_0_25px_rgba(34,211,247,0.45)]" />
                <div className="h-16 w-16 rounded-2xl bg-[#2DD4BF] shadow-[0_0_25px_rgba(45,212,191,0.35)]" />
                <div className="h-16 w-16 rounded-2xl bg-[#F3F4F6]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#D1D5DB]">
              Paleta base
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Colores y su uso recomendado
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {palette.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-[#0B0F14] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[#22D3F7]">
              Hero
            </p>
            <h3 className="mt-4 text-3xl font-bold text-white">
              Sitio con tono más moderno y premium.
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-[#D1D5DB]">
              La propuesta mantiene la energía del cian original, pero introduce suavidad visual para evitar que la página se sienta demasiado fría o saturada.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#22D3F7] px-6 py-3 text-sm font-bold text-black transition hover:brightness-110">
                Solicitar presupuesto
              </button>
              <button className="rounded-full border border-[#2DD4BF] bg-[#2DD4BF]/10 px-6 py-3 text-sm font-bold text-[#BFFAF2] transition hover:bg-[#2DD4BF]/20">
                Ver más
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[#D1D5DB]">
              Tarjetas
            </p>
            <div className="mt-6 space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#1B1F24] p-4 transition hover:border-[#22D3F7]/40 hover:bg-[#111827]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-[#22D3F7]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9BE8FF]">
                      Evento
                    </span>
                    <span className="text-sm text-[#D1D5DB]">0{item}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Organización de eventos corporativos
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[#D1D5DB]">
                    Diseño elegante con mensajes claros, estructura visual ordenada y acentos estratégicos.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="rounded-[28px] border border-[#2DD4BF]/20 bg-[linear-gradient(135deg,#111827_0%,#0B0F14_100%)] p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#D1D5DB]">Ajuste</p>
              <h3 className="mt-3 text-xl font-bold text-white">Mantener identidad</h3>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#D1D5DB]">
                El cian original se mantiene para no perder la personalidad del sitio y seguir la marca visual existente.
              </p>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#D1D5DB]">
                Se incorpora un tono más suave para equilibrar la intensidad y mejorar la legibilidad general.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
