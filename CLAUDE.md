# La Trinchera México

Sitio de La Trinchera México, infraestructura para eventos (identidad definida por el usuario), con servicios en CDMX (`https://latrincheramexico.com`, desplegado en Vercel). Idioma del sitio y de los textos: español de México.

Stack (versiones instaladas): Next.js 15.4.10 (App Router), React 19.1.0, TypeScript 5, Tailwind CSS 4.1, Swiper, Cloudinary, Google Tag Manager `GTM-55QXTXJ9`.

## Estructura
- `src/app/` rutas (App Router); servicios en `organizacion-de-eventos/*`, además `about`, `contact`, `404`.
- `src/components/` componentes (`Home/`, `Contact/`, `OrganizacionDeEventos/`, `navbar.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, `OptimizedImage.tsx`).
- `src/helpers/` datos y utilidades de imágenes/servicios; `src/lib/cloudinary.ts`; `src/styles/globals.css`.
- `middleware.js` (404 para URLs tipo WordPress), `next-sitemap.config.js`, `public/` (sitemap.xml, robots.txt y verificación de Google versionados).

## Comandos
- `npm run dev` · `npm run lint` · `npx tsc --noEmit` · `npm run build` · `npm run start`
- `npm run build:sitemap` = `next build && next-sitemap` (único que regenera sitemap/robots; `build` no lo hace).
- `npm run analyze:win` (bundle, Windows) · `npm run lighthouse:local` (requiere `build` + `start`).
- No hay pruebas automatizadas. No ejecutar despliegues.

## Identidad (no rediseñar sin petición expresa)
Fondo negro, cian `#22d3f7` y Open Sans (tokens en `src/styles/globals.css`). Reutilizar componentes y clases Tailwind existentes antes de crear otros; seguir el estilo del archivo que se edita.

## Next.js
- Componentes de servidor por defecto; `"use client"` solo donde haya estado, efectos o eventos, y lo más abajo posible del árbol.
- `metadata` solo en servidor: las páginas cliente usan un `layout.tsx` hermano (patrón de `about/` y de cada servicio).
- Imágenes con `next/image`/`OptimizedImage` y dominios de `next.config.ts`.

## Seguridad y datos
- `.env*` está ignorado por git: no leer valores, imprimirlos, copiarlos ni subirlos; mencionar solo nombres. Secretos solo en servidor (`process.env` sin `NEXT_PUBLIC_`).
- Datos de formularios (nombre, correo, teléfono, mensaje): no a analítica, logs ni terceros no aprobados.

## Comprobar y reportar
- Tras cambiar código: `npm run lint`, `npx tsc --noEmit` y `npm run build`; indicar cuáles se ejecutaron y su resultado real.
- Declarar lo no verificado (producción, GTM, envío real, Lighthouse) y no afirmar mejoras sin medición.
- No inventar reseñas, direcciones, precios, cifras ni datos comerciales.
- Hallazgos abiertos y acciones propuestas: `.claude/HALLAZGOS.md`.

## Skills (`.claude/skills/`)
| Tarea | Skill |
|---|---|
| Metadata, canonical, JSON-LD, sitemap, robots, 404, textos SEO | `trinchera-seo` |
| Formularios, WhatsApp, cotizaciones, eventos GTM/GA4 | `trinchera-conversion` |
| Imágenes, carruseles, JS/CSS, fuentes, terceros, Lighthouse | `trinchera-performance` |
| Calidad de React/Next (cuando se escribe o revisa código) | `vercel-react-best-practices` (omitir reglas de React 19.2+; ver `.claude/skills/ORIGEN.md`) |
| Revisión de UI/accesibilidad | `web-design-guidelines` |
| Trabajo visual nuevo | `frontend-design` (plugin), subordinada a la identidad y componentes actuales |
