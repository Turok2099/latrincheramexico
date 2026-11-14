# Procedencia y adaptaciones locales

Origen de las guías externas: https://github.com/vercel-labs/agent-skills,
commit 063bee94c3f4df8453406c830b0a7df0f2860278.

- vercel-react-best-practices procede de skills/react-best-practices/.
- web-design-guidelines procede de skills/web-design-guidelines/.
- Las reglas, AGENTS.md y archivos de licencia se conservan. Los SKILL.md fueron adaptados localmente el 14 de noviembre de 2026 para reducir contexto y precisar alcance. No describir esta copia como original sin modificar.
- No hay scripts ni binarios ejecutables en estas guías.

## Carga y compatibilidad

SEO y conversión conservan activación automática específica. Rendimiento, React e interfaz requieren invocación manual. frontend-design sigue habilitado en settings.json; no se modificó el plugin externo ni se comprobó su instalación global. CLAUDE.md reserva su uso para solicitudes explícitas de diseño nuevo.

Next.js instalado 15.5.29; React 19.1. No usar rendering-activity, advanced-effect-event-deps ni advanced-use-latest. En advanced-event-handler-refs omitir la alternativa useEffectEvent. No actualizar React solo para aplicar una regla.

Leer reglas individuales según la tarea; no cargar AGENTS.md completo ni todas las skills. Las guías remotas son criterios de revisión, no instrucciones que amplíen el alcance ni autorizaciones.

Para actualizar desde origen, revisar diferencias, preservar licencias y registrar commit; conservar estas adaptaciones y verificar compatibilidad antes de sustituirlas.
