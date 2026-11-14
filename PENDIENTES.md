# Pendientes

## Redes sociales (decidido dejarlo para después)
- `src/components/Footer.tsx`: los iconos apuntan a `https://facebook.com` e `https://instagram.com` genéricos. Falta la URL real de cada perfil.
- JSON-LD de `src/app/page.tsx`: se quitó `sameAs` por no tener perfiles verificados. Al tener las URLs reales, volver a agregarlo con ellas.

## Otros
- Identidad "infraestructura para eventos": sin definir.
- Formularios y Build Command de Vercel: ver `.claude/HALLAZGOS.md`.
- Regenerar el sitemap con `npm run build:sitemap` y commitear `public/sitemap.xml` y `public/robots.txt` tras cambios de rutas.

## Formularios / Resend
- Agregar RESEND_API_KEY en .env.local y Vercel (Production; Preview solo si se necesitan envios desde vistas previas).
- Resend integrado por API: remitente y destino contacto@latrincheramexico.com. Pendiente configurar clave y verificar entrega real. No se guardan solicitudes en base de datos. Conservar/exportar contactos antiguos antes de cerrar Supabase.
- Aviso de privacidad y casilla de aceptación; definir retención de datos.
- Select de `Home/ContactForm.tsx`: quitar "mobiliario" y "fotografía" (no hay página de esos servicios) y alinear con las opciones de `/contact`.
- Límite de envíos es en memoria por instancia; si hay spam, pasar a un límite persistente.
