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
- Comprobar con Grep (`canonical` en `src/app`) que la ruta nueva o editada los tiene. Al momento de escribir esta skill no se hallo metadata propia en `contact/`, `darkkitchen/`, `eventos-sociales/` ni `graduaciones/`: confirmar antes de afirmar que faltan (pueden heredar o estar en la pagina).
- Titulos unicos (~60 caracteres) y descripciones unicas (~155). Imagen OG: URL de Cloudinary 1200x630, como en `page.tsx`.
- Rutas internas (p. ej. `src/app/propuesta-colores/`, sin seguimiento en git) no deben indexarse ni entrar al sitemap: `robots: { index: false }`.

## Datos estructurados
- JSON-LD solo con datos verificables: nombre, URL, telefono +52 55 4521 0178 (el que usa `WhatsAppButton`) y servicios reales de `src/helpers/ServicesData.ts`.
- NO inventar `aggregateRating`, `review`, direccion postal, horarios, precios ni `priceRange`. Si el dato no esta en el repo, pedirlo al usuario.

## Contenido de servicios en CDMX
Espanol de Mexico, natural, centrado en el servicio concreto (bodas, catering, stands, pantallas, musica, eventos empresariales, graduaciones). Mencionar CDMX donde sea cierto y relevante, sin repetir la frase clave de forma artificial. Sin cifras, clientes, premios ni cobertura geografica que no este respaldada en el repo o confirmada por el usuario.

## Rutas, sitemap, robots y 404
- `middleware.js` reescribe a `/404` con estado 404 las rutas tipo WordPress (`/wp-*`, `/category/`, `/tag/`, `?p=`). Si una ruta nueva coincide con esos prefijos, ajustar el middleware. Verificar con `curl -I` contra `npm run start` (estado real, no supuesto).
- El sitemap lo genera `next-sitemap.config.js` solo con `npm run build:sitemap` (`next build && next-sitemap`). `npm run build` NO lo ejecuta. `public/sitemap.xml` y `public/robots.txt` estan versionados y pueden estar desactualizados (el sitemap actual tiene lastmod de 2025-10-03). No hay `vercel.json`: confirmar el Build Command del proyecto en Vercel antes de afirmar que archivo se sirve en produccion.
- `additionalPaths` en `next-sitemap.config.js` repite rutas que el sitemap ya detecta (aparecen duplicadas en `public/sitemap.xml`): deduplicar si se edita.
- Toda URL del sitemap debe responder 200; toda ruta que devuelva 404 debe quedar fuera. Tras cambiar rutas: `npm run build:sitemap` y revisar `git diff public/`.
- No mezclar reglas escritas a mano en `public/robots.txt` con el archivo generado; editar la fuente (`robotsTxtOptions`).

## Verificacion de Google
- `public/google66de2f41c6a4bac9.html` es un archivo de verificacion real (metodo archivo HTML).
- `src/app/page.tsx` (`metadata.verification.google`) contiene `"google-site-verification-code-here"`: valor de ejemplo. NO sustituirlo por el contenido del archivo HTML; son metodos de verificacion distintos. Proponer eliminar la clave `verification`, o rellenarla solo con un token de metaetiqueta entregado por Search Console.

## Entrega
Reportar paginas cambiadas, resultado de `npm run lint` y `npm run build`, y lo que no se pudo verificar (indexacion real, Search Console y Rich Results Test requieren la URL publicada).
