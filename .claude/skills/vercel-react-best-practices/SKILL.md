---
name: vercel-react-best-practices
description: Reglas específicas para problemas de renders, efectos, esperas y carga de componentes React/Next.js; no cargar para cambios de texto o estilo sin lógica.
license: MIT
metadata:
  author: vercel
  version: "1.0.0-local-trinchera"
---
# Reglas de React y Next.js

Adaptación local de la guía de Vercel; procedencia en ../ORIGEN.md.

- Trabajar solo sobre el problema solicitado. Buscar por título/nombre en rules/ y leer únicamente las reglas pertinentes.
- No leer AGENTS.md completo: recopila la misma información y es muy extenso. Tampoco cargar todos los ejemplos o reglas.
- Orientación: async-* (esperas), bundle-* (carga), server-* (servidor), client-* (cliente), rerender-* (renders), rendering-* (presentación), js-* (JavaScript).
- Proyecto: Next.js 15.5.29 y React 19.1. No aplicar rendering-activity, advanced-effect-event-deps ni advanced-use-latest; requieren Activity/useEffectEvent de React 19.2+. En advanced-event-handler-refs omitir la alternativa useEffectEvent.
- Evaluar los ejemplos según versiones y arquitectura reales. No instalar SWR, cachés ni otras dependencias solo por aparecer en una regla.
- Medir si se afirma una mejora. No añadir analítica, datos comerciales ni refactorizaciones fuera del alcance.
- Respetar comprobaciones y restricciones de CLAUDE.md; no duplicarlas ni encadenar otras skills por defecto.
