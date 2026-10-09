---
name: trinchera-seo
description: SEO tecnico y de contenido de La Trinchera Mexico. Usar al crear o editar paginas/rutas, metadata, canonical, Open Graph, JSON-LD, sitemap, robots, respuestas 404, verificacion de Google o textos de servicios de eventos en CDMX.
---

# SEO de La Trinchera Mexico

Dominio de produccion: `https://latrincheramexico.com`. Idioma: `es` (`<html lang="es">` en `src/app/layout.tsx`).

## Antes de tocar nada
Leer el patron existente y copiarlo: `src/app/page.tsx` (metadata completa y JSON-LD, ~linea 223), `src/app/about/layout.tsx` y los `layout.tsx` de cada servicio en `src/app/organizacion-de-eventos/*/`. Las paginas con `"use client"` no pueden exportar `metadata`; por eso existen `layout.tsx` de servidor que la llevan.

## Metadatos por pagina
- Cada ruta publica necesita `title`, `description`, `alternates.canonical` (ruta relativa, p. ej. `"/about"`), `openGraph` y `twitter`.
- Comprobar con Grep (`canonical` en `src/app`) que la ruta nueva o editada los tiene. `metadataBase` esta en `src/app/layout.tsx`.
- Titulos unicos (~60 caracteres) y descripciones unicas (~155). Imagen OG: URL de Cloudinary 1200x630, como en `page.tsx`.
- Rutas internas o de prueba no deben indexarse ni entrar al sitemap: `robots: { index: false }` y `exclude` en `next-sitemap.config.js`.

## Datos estructurados
- JSON-LD solo con datos verificables: nombre, URL, telefono +52 55 4521 0178 (el que usa `WhatsAppButton`), correo contacto@latrincheramexico.com y "mas de 10 anios de experiencia" (confirmado por el usuario) y servicios reales de `src/helpers/ServicesData.ts`.
- Es un servicio digital: NO hay direccion publica, no incluir `address`. NO inventar `aggregateRating`, `review`, horarios, precios ni `priceRange`. Si el dato no esta en el repo, pedirlo al usuario.

## Contenido de servicios en CDMX
Cobertura confirmada por el usuario: solo CDMX y Estado de México, por el momento. No afirmar cobertura nacional ni de otras entidades; reflejarlo en `areaServed` (City Ciudad de México + State Estado de México).
Espanol de Mexico, natural, centrado en el servicio concreto (bodas, catering, stands, pantallas, musica, eventos empresariales). Mencionar CDMX donde sea cierto y relevante, sin repetir la frase clave de forma artificial. Sin cifras, clientes, premios ni cobertura geografica que no este respaldada en el repo o confirmada por el usuario.

## Rutas, sitemap, robots y 404
- `middleware.js` reescribe a `/404` con estado 404 las rutas tipo WordPress (`/wp-*`, `/category/`, `/tag/`, `?p=`). Si una ruta nueva coincide con esos prefijos, ajustar el middleware. Verificar con `curl -I` contra `npm run start` (estado real, no supuesto).
- El sitemap lo genera `next-sitemap.config.js` solo con `npm run build:sitemap` (`next build && next-sitemap`). `npm run build` NO lo ejecuta. `public/sitemap.xml` y `public/robots.txt` estan versionados y pueden estar desactualizados (el sitemap actual tiene lastmod de 2025-10-03). No hay `vercel.json`: confirmar el Build Command del proyecto en Vercel antes de afirmar que archivo se sirve en produccion.
- `additionalPaths` solo agrega `/` (la home es dinamica por `searchParams` y next-sitemap no la detecta). Las paginas "Proximamente" estan en `exclude`.
- Toda URL del sitemap debe responder 200; toda ruta que devuelva 404 debe quedar fuera. Tras cambiar rutas: `npm run build:sitemap` y revisar `git diff public/`.
- No mezclar reglas escritas a mano en `public/robots.txt` con el archivo generado; editar la fuente (`robotsTxtOptions`).

## Pagina modelo
`src/app/organizacion-de-eventos/eventos-corporativos/` (layout con metadata + pagina de servidor con JSON-LD Service/Breadcrumb/FAQ y enlaces internos) es el patron para desarrollar otros servicios. La URL anterior `/eventos-empresariales` redirige 308 desde `next.config.ts`.

## Stands
Servicio confirmado: diseno, fabricacion, montaje y renta de stands. La renta no tiene costo fijo: el presupuesto se elabora despues de disenar el proyecto y el stand. No afirmar fabrica propia, paquetes, plazos ni inclusiones (transporte, desmontaje, almacenamiento) sin confirmacion.

## Catering
Pagina principal + 4 subpaginas (taquizas, box-lunch, coffee-break, canapes-y-bocadillos) bajo `servicio-de-catering-para-eventos/`. Bloques compartidos y metadata (`buildMetadata`) en `components/OrganizacionDeEventos/CateringBlocks.tsx`; cada pagina declara su propia metadata (no hay layout de catering, para evitar canonicals heredados). Datos confirmados por el usuario: taquizas (guisados, carnes asadas, cuberteria y manteleria, meseros disponibles), box lunch (cajas individuales, varias opciones, entrega y montaje en sitio, entrega al personal), coffee break (cafe y bebidas calientes, alimentos, barra con barista, montaje de estacion), canapes (presentacion elegante, cocteles y networking, variedad, eventos sociales). No inventar menus, cantidades, precios ni inclusiones adicionales. "canapes para eventos" no tiene metricas en el CSV.

## Verificacion de Google
La propiedad se verifica por archivo HTML: `public/google66de2f41c6a4bac9.html` y `public/googlea4f999e7e6ca939d.html` (reales, no borrar: quitarlos puede invalidar la verificacion). No hay metaetiqueta de verificacion en `page.tsx`; no agregar una con el contenido de un archivo HTML (son metodos distintos), solo con un token de metaetiqueta emitido por Search Console.

## Entrega
Reportar paginas cambiadas, resultado de `npm run lint` y `npm run build`, y lo que no se pudo verificar (indexacion real, Search Console y Rich Results Test requieren la URL publicada).
