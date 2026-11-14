---
name: trinchera-seo
description: Contenido de servicios, metadata, JSON-LD, enlaces internos, sitemap y robots de La Trinchera México.
---
# SEO y contenido

- Aplicar la identidad y los límites de CLAUDE.md. No cargar otras skills por defecto.
- Leer la página afectada y, si falta un patrón, un solo ejemplo pertinente: eventos-corporativos/layout.tsx y page.tsx, o CateringBlocks.tsx para catering. No recorrer todos los layouts.
- Metadata de servidor: title y description únicos, canonical relativo sobre https://latrincheramexico.com, Open Graph y Twitter según el patrón existente. Longitudes orientativas, no límites rígidos.
- JSON-LD solo con datos confirmados. Teléfono +52 55 4521 0178; correo contacto@latrincheramexico.com; más de 10 años de experiencia. No inventar dirección pública, horarios, precios, reseñas ni calificaciones.
- Cobertura: CDMX y Estado de México. Contenido natural centrado en cada servicio; no repetir palabras clave artificialmente.
- Solo al trabajar stands o catering, leer [datos confirmados de servicios](references/servicios.md). No asumir que ServicesData.ts es un catálogo actualizado de todos los servicios.
- Conservar public/google66de2f41c6a4bac9.html, verificación nueva confirmada por el usuario. No añadir tokens antiguos ni confundir verificación HTML con metaetiqueta.
- sitemap/robots: fuente next-sitemap.config.js; build normal no los regenera. Tras modificar rutas, ejecutar npm run build:sitemap y revisar public/. No editar robots a mano ni asumir el Build Command de Vercel.
- Rutas internas: noindex y exclusión del sitemap. Mantener la redirección de eventos-empresariales a eventos-corporativos. Si se tocan respuestas 404, revisar middleware.js y verificar el estado HTTP real.
- Comprobaciones generales en CLAUDE.md. No afirmar indexación o resultados de Google sin verificar el sitio publicado.
