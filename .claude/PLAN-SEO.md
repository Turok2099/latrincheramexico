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

- [x] **Inicio:** H1 = "La Trinchera México" + línea "Organización de eventos en CDMX y Estado de México". *Reemplazado el mismo día: ver «Cambios posteriores» (hero rediseñado).*
- [x] **Inicio:** quitado `searchParams`; la página ahora es estática (○ en el build).
- [x] **Middleware:** `middleware.js` estaba en la raíz y Next no lo cargaba (el proyecto usa `src/`). Movido a `src/middleware.js`; ahora `?p=` y rutas `/wp-*`, `/category/`, `/tag/` devuelven 404 real (comprobado con curl local). Antes solo la inicio daba 404 con `?p=`.
- [x] **`/contact`:** ya tenía H1 (lo emite `Formulario principal`); no requirió cambio.
- [x] **Catering:** H1 "…PARA EVENTOS EN CDMX", mención de catering para bodas en la introducción, FAQ nueva de bodas y "Ciudad de México (antes Distrito Federal)". Solo datos ya presentes en el repositorio.
- [x] **Eventos corporativos:** revisado; ya cubre "eventos corporativos CDMX", "productora", "organizadores" y "empresas organizadoras" en título, H1 y H2. Sin cambios para no sobreoptimizar. El ranking (pos 60–69) depende más de autoridad que de texto: ver Fase 3.
- [x] **Música:** título "Música para Eventos en CDMX | La Trinchera México", descripción nueva, canonical, `url`, imagen OG, Twitter, sin `keywords`; JSON-LD Service + Breadcrumb en `layout.tsx` (sin FAQ: no hay preguntas confirmadas).
- [x] Limpieza: eliminado `src/app/head.tsx`; "Home" → "Inicio"; título por defecto de `layout.tsx` con intención de búsqueda. **No** se añadió `title.template`: duplicaría "| La Trinchera México" en páginas que ya lo incluyen.
- [x] Imagen OG (y Twitter) en `/contact` y `/about`.

## Fase 2 – Base técnica

Implementado el 2026-11-14 (lint y tsc sin errores nuevos; `build:sitemap` correcto; HTML servido localmente comprobado). Vercel ya ejecuta `build:sitemap` (confirmado por el usuario). Sin medir el efecto en Google.

- [x] Sitemap: `lastmod` real por ruta desde un mapa fijo en `next-sitemap.config.js` (actualizarlo al cambiar el contenido de cada página); sin `changefreq` ni `priority`. 15 URLs, inicio una sola vez; se retiró `additionalPaths` porque la inicio ya es estática. `aviso-privacidad` se conserva por decisión del usuario.
- [x] `robots.txt`: un solo grupo `User-agent: *` con `Allow` y `Disallow`, sin `additionalSitemaps` duplicado. La línea `Host:` la agrega next-sitemap siempre; Google la ignora, es inofensiva.
- [x] JSON-LD: `WebSite` junto a `Organization` en inicio (`@graph`), `AboutPage` en about y `ContactPage` en contact, solo con datos confirmados.
- [x] Enlaces internos: bloque `ServiciosRelacionados` (3 servicios por página, con título y descripción) en corporativos, bodas, pantallas, stands, catering y música (este desde su `layout.tsx`).
- [x] `alt` de imágenes: revisados; ya son descriptivos. No se cambiaron porque no se verificó el contenido de cada imagen.
- [x] Regenerado con `npm run build:sitemap`; revisado `git diff public/`.
- [ ] Tras publicar: reenviar/confirmar el sitemap en Search Console y comprobar que /sitemap.xml y /robots.txt publicados coinciden con los del repositorio.

## Cambios posteriores (2026-11-14, rediseño visual)

Solo lint, `tsc` y `npm run test:contacto` (sin correos reales); **falta `npm run build` y revisión visual** en `npm run dev`. Sin publicar y sin medir efecto en Google. Metadata, JSON-LD, URLs y sitemap no cambiaron.

- [x] **Navbar:** logo agrandado (móvil `h-14`, escritorio `h-19`); en Inicio no se muestra porque el logo vive en el hero.
- [x] **Hero de inicio** (`HeroSection.tsx`, `HeroCarousel.tsx`): logo con subtítulo grande y título "Creamos momentos extraordinarios." (antes "Creamos experiencias extraordinarias"; ninguna consulta de Search Console usaba "experiencias"). El H1 único contiene logo (`alt="La Trinchera México"`), título y la línea "Organización de eventos en CDMX y Estado de México", todo visible, sin texto `sr-only`; ya no hay H2 en el hero. Carrusel con la misma lógica; solo cambió el degradado.
- [x] **Pie de página** (`Footer.tsx`): fondo negro, columnas de marca, servicios y contacto. Añade enlaces internos sitewide a los seis servicios, correo, teléfono +52 55 4521 0178 y cobertura (datos confirmados). Año dinámico.
- [x] **Formulario** (rediseño visual + endurecimiento): correo de una sola dirección (sin `,;<>"()[]\`), honeypot renombrado a `controlInterno`, foco en el primer error según el orden visual. El límite global de intentos (regla del Firewall de Vercel o Turnstile) sigue pendiente, ya anotado en `PENDIENTES.md`.
- [ ] Comprobar el H1 de inicio ya publicado y que no haya contenido tapado por la barra de navegación de escritorio, ahora más alta (~100 px) en las demás páginas.
- [ ] Revisar jerarquía de encabezados en inicio: el hero ya no tiene H2.

## Fase 3 – Contenido y autoridad (requiere datos del negocio)

- [ ] Confirmar URLs reales de Facebook e Instagram; sustituir los enlaces del pie (hoy apuntan a `facebook.com` e `instagram.com` genéricos, en `Footer.tsx`) y añadir `sameAs`. Si no existen perfiles, quitar los íconos.
- [ ] Crear o reclamar el Perfil de Negocio de Google como negocio con área de servicio (sin dirección pública), cobertura CDMX y Estado de México.
- [ ] Casos o testimonios reales con permiso (cliente, tipo de evento, fotos propias). No inventar reseñas ni cifras.
- [ ] Desambiguar la marca: usar siempre "La Trinchera México" en títulos, schema y perfiles.
- [ ] Páginas por zona o tipo de evento solo si hay servicio y contenido propio reales.
- [ ] Guías o blog con preguntas reales de clientes (evaluar tras la primera medición).

## Fase 4 – Medición

- [ ] Repetir la exportación de Search Console 4 semanas después de publicar la Fase 1 y los cambios posteriores (hero, pie, formulario) y comparar con la línea base. Vigilar posición e impresiones de inicio (línea base: pos 8.03, 998 impresiones, 12 clics) por el cambio de H1 y título del hero.
- [ ] Correr Lighthouse sobre producción (Node >=22.19).
- [ ] Configurar Analytics con la cuenta nueva (ver `PENDIENTES.md`) cuando se decida; sin enviar datos de formularios.

## Riesgos y límites

- No se afirma indexación, posicionamiento ni mejora de rendimiento sin medirlos.
- Los cambios de contenido son hipótesis; se evalúan con la siguiente exportación.
- Las consultas de Azuqueca no se han investigado: no concluir que es spam hasta la Fase 0.
