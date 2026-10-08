# Hallazgos confirmados (revisión de código, 2026-10-08)

Cada punto fue verificado leyendo los archivos citados. Los cambios de aplicación NO están hechos; son propuestas pendientes.

| # | Hallazgo (confirmado) | Evidencia | Acción propuesta |
|---|---|---|---|
| 1 | Los formularios simulan el envío y muestran éxito. | `src/components/Home/ContactForm.tsx` (`setTimeout` de 2000 ms); `src/components/Contact/HeroContactForm.tsx` (igual). No existe `src/app/api/` ni `fetch`. | Crear una ruta API/Server Action con validación en servidor y mostrar éxito solo con respuesta 2xx. **Falta decidir (dato del usuario):** proveedor o destino (correo/SMTP, Resend, CRM, webhook…), dirección que recibe las consultas y las variables de entorno disponibles en Vercel. Mientras tanto, el sitio muestra "Mensaje Enviado" sin entregar nada. |
| 2 | `form_submission` se emite tras la simulación, es decir, sin entrega real. | `ContactForm.tsx`: `dataLayer.push` posterior al `setTimeout`. `HeroContactForm.tsx` no emite evento. | Emitir `form_submission` solo tras éxito real; opcional `form_submit_attempt` al intentar. Revisar `GTM_GA4_CONFIG.md` y el contenedor antes: el cambio altera lo que cuentan las conversiones. |
| 3 | Código de verificación de Google de ejemplo en la página principal. | `src/app/page.tsx` `verification.google = "google-site-verification-code-here"`. Existe además `public/google66de2f41c6a4bac9.html` (verificación por archivo, real). | Quitar la clave o poner un token de metaetiqueta emitido por Search Console. No copiar el contenido del archivo HTML. |
| 4 | `build` y `build:sitemap` difieren. | `package.json`: `build` = `next build`; `build:sitemap` = `next build && next-sitemap`. `public/sitemap.xml` está versionado (lastmod 2025-10-03) y repite 3 URLs por `additionalPaths`. No hay `vercel.json`. | Confirmar el Build Command real en Vercel. Opciones: `postbuild` con `next-sitemap`, o regenerar y commitear. Deduplicar `additionalPaths`. |
| 5 | Ruta interna sin seguimiento. | `git status`: `src/app/propuesta-colores/` sin versionar. | Marcar `noindex` o no publicar. |

## No verificado
Build Command configurado en Vercel, configuración del contenedor GTM/GA4, indexación en Search Console, medidas de Lighthouse.
