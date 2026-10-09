---
name: trinchera-performance
description: Rendimiento web de La Trinchera Mexico. Usar al tocar imagenes de Cloudinary o next/image, carruseles (Swiper), componentes cliente, CSS, fuentes, GTM/scripts de terceros, o al medir Lighthouse y bundle.
---

# Rendimiento

Complementa a `vercel-react-best-practices` (reglas generales; ver exclusiones en `.claude/skills/ORIGEN.md`). Esta skill fija lo especifico del proyecto.

## Mapa
- Imagenes: `src/components/OptimizedImage.tsx`, `src/helpers/ImageOptimizer.ts` (`optimizeCloudinaryUrl`), `src/helpers/CloudinaryMapping.ts`, `MainImagesMapping.ts`, `src/lib/cloudinary.ts`. `next.config.ts` permite solo `res.cloudinary.com`, formatos avif/webp y `deviceSizes`/`imageSizes` propios.
- Carruseles: Swiper en `src/components/Home/HeroCarousel.tsx` y similares.
- Fuente: Open Sans con `next/font/google` en `src/app/layout.tsx`. CSS critico en linea ahi (`critical.css` ya no existe); `experimental.optimizeCss` (critters) esta activo.
- Terceros: GTM con `<Script>` en `layout.tsx`.
- Los documentos de optimizacion previos (imagenes, CSS, Lighthouse) ya no estan en el repo: medir de nuevo antes de asumir que algo ya se optimizo.

## Reglas
1. **Medir primero**: linea base con `npm run build && npm run start` y luego `npm run lighthouse:local` (no contra `dev`); para bundle, `npm run analyze`. Repetir con las mismas condiciones tras el cambio. Sin comparacion, no afirmar mejora: decir "no medido".
2. **Imagenes**: `next/image` con `sizes` realista; `priority` solo para la imagen principal visible (LCP), no para varias; ancho/alto o `fill` para evitar CLS; transformaciones de Cloudinary (`f_auto`, `q_auto`) mediante `optimizeCloudinaryUrl`, no URLs ad hoc. Un hostname nuevo exige actualizar `remotePatterns`. No apilar doble optimizacion (Cloudinary y Next) sin medir.
3. **Carruseles**: `next/dynamic` si estan bajo el pliegue; prioridad solo en la primera diapositiva; importar solo los modulos de Swiper que se usan.
4. **Cliente y servidor**: `"use client"` lo mas abajo posible del arbol; no volver cliente una pagina entera por un boton. Pasar a componentes cliente solo datos serializables minimos.
5. **CSS y JS**: Tailwind 4 desde `src/styles/globals.css`; no sumar librerias de UI o animacion sin comparar `npm run analyze`.
6. **Fuentes y terceros**: no agregar fuentes ni scripts sin medirlos. No cambiar la estrategia de GTM ni quitar los `preconnect`/`dns-prefetch` actuales sin evidencia.
7. **Sin optimizaciones especulativas**: `useMemo`/`memo` y similares solo si una medicion los respalda.
8. De `vercel-react-best-practices`, aplicar solo reglas compatibles con Next 15.4.10 y React 19.1.

## Verificacion
`npm run lint` y `npm run build` (revisar tamanos por ruta en la salida). Reportar cifras antes/despues o declarar que no hubo medicion (Lighthouse necesita Chrome y el servidor en marcha).
