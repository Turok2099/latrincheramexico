# Plan de acción SEO – La Trinchera México

Creado: 14 de noviembre de 2026. Basado en lectura del código y en el reporte de Search Console (12 ago – 11 nov 2026). No hay mediciones en producción ni Lighthouse. Estado de formularios y otros pendientes: ver `PENDIENTES.md`.

Marcar `[x]` al terminar y anotar fecha. Un cambio de código se cierra con `npm run lint`, `npx tsc --noEmit` y `npm run build` (o `build:sitemap` si cambian rutas).

## Línea base (Search Console, 3 meses)

- 20 clics, 3,204 impresiones, CTR 0.62%. Escritorio: 17 de 20 clics.
- Páginas de servicio en posición ~55–70; casi ningún clic fuera de inicio (12) y `/organizacion-de-eventos` (7).
- Marca "la trinchera" / "trinchera": ~570 impresiones, 0 clics; compite con restaurantes y bares homónimos.
- Sin impresiones en 3 meses: bodas, stands, pantallas, about, aviso-privacidad, coffee-break.
- `/organizacion-de-eventos/eventos-empresariales` (redirigida 308) aún suma 374 impresiones.
- Consultas de "Azuqueca" (España) sin explicación en el repositorio.
- Oportunidad cercana (pos 11–30): "organizador/organizadora de eventos", "organizadores de eventos cdmx", "productora de eventos cdmx".
- Muestra pequeña: no se pueden sacar conclusiones de CTR. Repetir la exportación cada 4 semanas.

## Fase 0 – Diagnóstico en Search Console (usuario)

- [x] 2026-11-14: inspeccionadas bodas, stands, pantallas, about y coffee-break; usuario solicitó indexación de las cinco. Captura posterior: «Descubierta: actualmente sin indexar», último rastreo N/D. Solicitudes aceptadas, indexación aún no confirmada.
- [x] 2026-11-14: comprobado en producción: eventos-empresariales devuelve 308 hacia /organizacion-de-eventos/eventos-corporativos; destino 200.
- [x] 2026-11-14: el usuario no obtuvo resultados para site:latrincheramexico.com azuqueca. Revisados 68 ejemplos de cobertura: 66 URLs sospechosas históricas, hoy con respuesta final 404; no se ha establecido el origen concreto de las consultas de Azuqueca.
- [x] 2026-11-14: sitemap enviado/leído, estado Correcto y 14 páginas descubiertas según captura. Revisadas categorías no indexadas: 21 con 404, 7 duplicadas, 5 redirigidas, 68 rastreadas sin indexar y 5 descubiertas sin indexar. No equivale a 14 páginas indexadas.
- [ ] Build Command: captura del 2026-11-14 muestra Override activado con npm run build:sitemap. Confirmar guardado y ejecución efectiva en el próximo despliegue.
- [x] 2026-11-14: exportación original guardada en [línea base SEO](seo/2026-11-14/README.md), con los 7 CSV de rendimiento, 3 de cobertura e integridad SHA-256.

## Fase 1 – Correcciones de alto impacto (código)

Implementado el 2026-11-14 (lint y tsc sin errores nuevos; build correcto; HTML servido localmente comprobado). Sin publicar: el efecto en Google no está medido.

- [x] **Inicio:** H1 = "La Trinchera México" + línea "Organización de eventos en CDMX y Estado de México" (el diseño del hero no cambia).
- [x] **Inicio:** quitado `searchParams`; la página ahora es estática (○ en el build).
- [x] **Middleware:** `middleware.js` estaba en la raíz y Next no lo cargaba (el proyecto usa `src/`). Movido a `src/middleware.js`; ahora `?p=` y rutas `/wp-*`, `/category/`, `/tag/` devuelven 404 real (comprobado con curl local). Antes solo la inicio daba 404 con `?p=`.
- [x] **`/contact`:** ya tenía H1 (lo emite `Formulario principal`); no requirió cambio.
- [x] **Catering:** H1 "…PARA EVENTOS EN CDMX", mención de catering para bodas en la introducción, FAQ nueva de bodas y "Ciudad de México (antes Distrito Federal)". Solo datos ya presentes en el repositorio.
- [x] **Eventos corporativos:** revisado; ya cubre "eventos corporativos CDMX", "productora", "organizadores" y "empresas organizadoras" en título, H1 y H2. Sin cambios para no sobreoptimizar. El ranking (pos 60–69) depende más de autoridad que de texto: ver Fase 3.
- [x] **Música:** título "Música para Eventos en CDMX | La Trinchera México", descripción nueva, canonical, `url`, imagen OG, Twitter, sin `keywords`; JSON-LD Service + Breadcrumb en `layout.tsx` (sin FAQ: no hay preguntas confirmadas).
- [x] Limpieza: eliminado `src/app/head.tsx`; "Home" → "Inicio"; título por defecto de `layout.tsx` con intención de búsqueda. **No** se añadió `title.template`: duplicaría "| La Trinchera México" en páginas que ya lo incluyen.
- [x] Imagen OG (y Twitter) en `/contact` y `/about`.

## Fase 2 – Base técnica

- [ ] Sitemap: `lastmod` real por página; quitar `changefreq` y `priority`.
- [ ] `robots.txt`: un solo grupo `User-agent: *`, sin `Host:`; editar solo en `robotsTxtOptions`.
- [ ] JSON-LD: `WebSite` en inicio, `AboutPage` en about, `ContactPage` en contact. Sin dirección, reseñas, horarios ni precios.
- [ ] Enlaces internos entre servicios (bodas ↔ catering ↔ música ↔ pantallas ↔ stands) con texto descriptivo.
- [ ] Revisar `alt` de imágenes en galerías.
- [ ] Regenerar con `npm run build:sitemap` y revisar `git diff public/`.

## Fase 3 – Contenido y autoridad (requiere datos del negocio)

- [ ] Confirmar URLs reales de Facebook e Instagram; sustituir los enlaces del pie y añadir `sameAs`.
- [ ] Crear o reclamar el Perfil de Negocio de Google como negocio con área de servicio (sin dirección pública), cobertura CDMX y Estado de México.
- [ ] Casos o testimonios reales con permiso (cliente, tipo de evento, fotos propias). No inventar reseñas ni cifras.
- [ ] Desambiguar la marca: usar siempre "La Trinchera México" en títulos, schema y perfiles.
- [ ] Páginas por zona o tipo de evento solo si hay servicio y contenido propio reales.
- [ ] Guías o blog con preguntas reales de clientes (evaluar tras la primera medición).

## Fase 4 – Medición

- [ ] Repetir la exportación de Search Console 4 semanas después de publicar la Fase 1 y comparar con la línea base.
- [ ] Correr Lighthouse sobre producción (Node >=22.19).
- [ ] Configurar Analytics con la cuenta nueva (ver `PENDIENTES.md`) cuando se decida; sin enviar datos de formularios.

## Riesgos y límites

- No se afirma indexación, posicionamiento ni mejora de rendimiento sin medirlos.
- Los cambios de contenido son hipótesis; se evalúan con la siguiente exportación.
- Las consultas de Azuqueca no se han investigado: no concluir que es spam hasta la Fase 0.
