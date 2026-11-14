# Hallazgos confirmados (revisión de código, 2026-10-08)

Cada punto fue verificado leyendo los archivos citados. Los cambios de aplicación NO están hechos; son propuestas pendientes.

| # | Hallazgo (confirmado) | Evidencia | Acción propuesta |
|---|---|---|---|
| 1 | Formularios conectados a Resend, sin Supabase. Pendiente configurar RESEND_API_KEY y comprobar entrega real. | | |
| 2 | Medicion retirada por solicitud del usuario. Formularios y WhatsApp conservan su funcionamiento sin eventos de Google. | | |
| 3 | ~~Código de verificación de ejemplo en la página principal.~~ **Resuelto**: se quitó el marcador de `page.tsx`; la propiedad está verificada por archivo HTML (`public/google66de2f41c6a4bac9.html`). | | |
| 4 | `build` y `build:sitemap` difieren. | `package.json`: `build` = `next build`; `build:sitemap` = `next build && next-sitemap`. `public/sitemap.xml` está versionado (lastmod 2025-10-03) y repite 3 URLs por `additionalPaths`. No hay `vercel.json`. | Confirmar el Build Command real en Vercel. Opciones: `postbuild` con `next-sitemap`, o regenerar y commitear. Deduplicar `additionalPaths`. |
| 5 | ~~Ruta interna `propuesta-colores`.~~ **Resuelto**: eliminada. | | |

## No verificado
Build Command configurado en Vercel, configuración del contenedor GTM/GA4, indexación en Search Console, medidas de Lighthouse.
