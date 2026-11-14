# Pendientes de La Trinchera México

Actualizado: 14 de noviembre de 2026.

Este archivo distingue lo implementado en el proyecto de lo comprobado en producción. Una compilación correcta o la aceptación de Resend no confirman por sí solas la entrega en el buzón.

## Prioridad: publicar y comprobar los formularios

- [x] Dominio `latrincheramexico.com` verificado en Resend, con envío habilitado y recepción desactivada (captura del usuario).
- [x] Variable secreta `RESEND_API_KEY` agregada en Vercel, según confirmó el usuario. No se ha inspeccionado su valor.
- [x] Integración por API de Resend: remitente y destinatario `contacto@latrincheramexico.com`; las respuestas se dirigen al correo del visitante.
- [x] Retirada la integración y la dependencia de Supabase del código de los formularios. No se añadió Neon ni otra base de datos.
- [ ] Confirmar y subir los últimos cambios del formulario compartido y publicar esa versión en Vercel. Al actualizar este documento todavía hay cambios locales pendientes.
- [ ] Confirmar que el despliegue Production / Current corresponde al commit nuevo y tiene disponible `RESEND_API_KEY`.
- [ ] Probar un envío desde inicio y otro desde `/contact` en el sitio publicado. Comprobar aceptación/entrega en Resend y recepción en Hostinger, incluida la carpeta de spam.
- [ ] Confirmar que `/api/contacto` publicado ya no realiza peticiones a Supabase. La última prueba de producción compartida mostró un 500 y una petición a Supabase; después se detectó un commit local pendiente de push. La entrega posterior aún no está confirmada.
- [ ] Si se necesitan pruebas locales, configurar `RESEND_API_KEY` en `.env.local` y reiniciar el servidor. No está confirmada esa configuración local; no compartir ni versionar la clave.
- [ ] Tras verificar la versión nueva, retirar las variables antiguas `SUPABASE_SECRET_KEY` y `NEXT_PUBLIC_SUPABASE_URL` de este proyecto de Vercel y de la configuración local, si siguen presentes.
- [ ] Antes de cerrar o eliminar el proyecto remoto de Supabase, conservar/exportar cualquier solicitud anterior que se necesite. No se ha eliminado la base remota ni comprobado su contenido.

## Formularios: implementado y verificado localmente

- [x] Un solo componente `src/components/Contact/Formulario.tsx`, reutilizado desde inicio y contacto; las envolturas conservan la presentación de cada página.
- [x] Catálogo compartido en `src/lib/contacto.ts`: catering, corporativos, bodas, pantallas, stands, música y orientación/otro. Se retiraron las opciones desalineadas de mobiliario y fotografía del formulario de inicio.
- [x] Validación compartida entre cliente y servidor; errores por campo; límites de texto sin recortes silenciosos; contador de caracteres del mensaje.
- [x] Fecha e invitados opcionales; validación de fechas reales no pasadas y cantidades enteras positivas cuando se proporcionan.
- [x] Autocompletado, identificadores únicos, foco visible, anuncio de estados y foco en el resultado. Se mantienen los datos tras un error y se bloquean envíos simultáneos.
- [x] Confirmación sin prometer respuesta en 24 horas; enlace a WhatsApp junto al error y opción de enviar otra solicitud.
- [x] Reintentos con clave de idempotencia de Resend para el mismo contenido durante la vida del componente. Recargar la página crea un intento nuevo; no se guardan datos personales en el navegador.
- [x] Protección complementaria: origen de la petición, formato JSON, máximo de 16 KiB, campo trampa y límite de cinco intentos por IP en diez minutos por instancia; memoria acotada.
- [x] Pruebas simuladas de validación, errores, destino, privacidad, límites y reintentos (`npm run test:contacto`), sin correos reales.
- [x] Comprobación del HTML servido localmente en inicio, contacto y privacidad, y rechazo de peticiones con origen externo. No equivale a una revisión visual completa en distintos dispositivos.
- [ ] Revisar visualmente el formulario publicado en móvil y escritorio y comprobar navegación con teclado y autocompletado.
- [ ] Si el tráfico o el abuso lo requiere, configurar un límite global en el Firewall de Vercel. El límite actual es por instancia; no hay CAPTCHA ni servicio distribuido configurados.

## Privacidad

- [x] Página informativa `/aviso-privacidad` con el flujo real de solicitudes y correo de contacto.
- [x] Enlace desde el formulario y casilla de autorización obligatoria, validada también en servidor.
- [ ] Completar el aviso integral con identidad y domicilio del responsable, procedimientos y política de conservación confirmados por el negocio. La página actual es informativa y no se ha validado como aviso legal integral.

## Google, Search Console y medición

- [x] Conservar `public/google66de2f41c6a4bac9.html`: archivo nuevo; verificación de Search Console completada según el usuario.
- [x] Retirados el contenedor antiguo `GTM-55QXTXJ9`, su script, iframe y conexión anticipada.
- [x] Retirados los eventos de medición de formularios y WhatsApp y las declaraciones de `dataLayer` del código del sitio.
- [x] Se conserva Open Sans mediante `next/font/google`: es parte del diseño, no una etiqueta de analítica.
- [ ] Comprobar permisos, propietarios, tokens antiguos y asociaciones en Search Console, DNS, Tag Manager y Analytics si se necesita desvincular por completo la cuenta anterior. Limpiar el código no elimina accesos externos.
- [ ] Después del trabajo de contenido, configurar Analytics y, si se decide usarlo, Tag Manager con la cuenta nueva. Definir y comprobar la medición de clics y solicitudes; no restaurar los identificadores antiguos.

## Dependencias y comprobaciones

- [x] Eliminados Swiper y su referencia en `next.config.ts` por no utilizarse; retirada la vulnerabilidad crítica asociada.
- [x] Corregidos los avisos de PostCSS y Minimatch mediante excepciones específicas en `package.json`; alineadas las herramientas de TypeScript/ESLint con Next.js.
- [x] Lighthouse actualizado a 13.6.0; se comprobó que inicia. Requiere Node.js >=22.19 (comprobado con Node 24.22.1).
- [x] Última auditoría realizada durante esta sesión: cero vulnerabilidades reportadas. Repetir la auditoría cuando cambien las dependencias; no es una garantía permanente.
- [x] Revisión de código, tipos y compilación correctas después de unificar el formulario. `npm run build:sitemap` también completado.
- [ ] Resolver las dos advertencias existentes de dependencias de `useEffect` en `src/components/Home/Galeria.tsx`.
- [ ] Planificar la migración del comando de lint: `next lint` está deprecado; actualmente funciona con Next.js 15.
- [ ] Revisar las excepciones de PostCSS y Minimatch cuando los paquetes superiores incorporen las versiones corregidas. No ejecutar `npm audit fix --force` sin revisar compatibilidad.
- [ ] Medir rendimiento y accesibilidad en producción. No se ha ejecutado una auditoría visual de Lighthouse tras estos cambios.

## Contenido y SEO

- [ ] Continuar con la revisión de contenido: inicio, servicios, títulos, descripciones, enlaces internos y llamadas a la acción, respetando la identidad de infraestructura para eventos y la cobertura confirmada de CDMX y Estado de México.
- [x] Sitemap regenerado localmente después de agregar `/aviso-privacidad`.
- [ ] Confirmar el Build Command real de Vercel: `npm run build` no regenera sitemap/robots; `npm run build:sitemap` sí. Mantener los archivos generados al publicar cambios de rutas.
- [ ] Comprobar en producción las URLs del sitemap y su procesamiento/indexación en Search Console. La verificación de propiedad no confirma indexación.
- [x] Sincronizados CLAUDE.md, .claude/HALLAZGOS.md y skills con el estado actual. Guías extensas de rendimiento, React e interfaz configuradas para invocación manual; detalle comercial de SEO separado en una referencia.

## Redes sociales (pospuestas por decisión del usuario)

- [ ] Sustituir los enlaces genéricos de Facebook e Instagram en `src/components/Footer.tsx` cuando se confirmen las URLs reales.
- [ ] Añadir `sameAs` al JSON-LD de `src/app/page.tsx` únicamente cuando se disponga de perfiles confirmados.
