---
name: trinchera-performance
description: Diagnosticar y optimizar rendimiento de imágenes, fuentes, carga o bundle; no activar por cambios de texto o ajustes visuales rutinarios.
---
# Rendimiento

- Delimitar el problema y leer solo archivos implicados. No cargar otra guía ni auditar todo el sitio automáticamente.
- Medir antes/después con las mismas condiciones si se afirma una mejora. Elegir Lighthouse, bundle o métricas pertinentes; no ejecutar todas las herramientas por defecto.
- npm run analyze:win para bundle; Lighthouse contra build + start, no dev. Lighthouse 13.6 requiere Node >=22.19.
- Imágenes: OptimizedImage.tsx, helpers/ImageOptimizer.ts, CloudinaryMapping.ts y lib/cloudinary.ts según la tarea. next.config.ts permite res.cloudinary.com. sizes realista; prioridad solo para imagen principal; dimensiones para evitar saltos.
- Carruseles propios con React; Swiper eliminado. No reintroducirlo por una referencia histórica.
- Open Sans con next/font/google y CSS crítico en app/layout.tsx; estilos en src/styles/globals.css. optimizeCss usa critters.
- Componentes de servidor por defecto; cargar módulos pesados cuando se necesiten. No añadir memoización, paquetes ni refactorizaciones sin un beneficio pertinente.
- Sin scripts de medición de Google; no restaurarlos como parte de una optimización.
- Si hace falta una regla especializada de React, consultar vercel-react-best-practices y solo la regla pertinente, sin pedir comandos manuales; no leer su AGENTS.md completo. No usar Activity/useEffectEvent con React 19.1.
- Comprobaciones generales en CLAUDE.md. Reportar métricas reales o indicar que no se midió; no repetir builds sin cambios relevantes.
