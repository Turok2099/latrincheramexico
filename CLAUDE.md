# La Trinchera México

Sitio de infraestructura para eventos: https://latrincheramexico.com. Español de México; cobertura confirmada: CDMX y Estado de México. Identidad: negro, cian #22d3f7 y Open Sans. No rediseñar ni inventar datos comerciales.

## Arquitectura y límites
- Next.js 15 (instalado 15.5.29), React 19.1, TypeScript 5, Tailwind 4, Cloudinary; consultar package.json/lock si importan versiones exactas.
- App Router en src/app; servidor por defecto. Metadata en servidor; reutilizar componentes y estilos existentes.
- Formulario único: src/components/Contact/Formulario.tsx; catálogo y validación: src/lib/contacto.ts; API: src/app/api/contacto/route.ts. Resend envía a contacto@latrincheramexico.com. Sin base de datos.
- Conservar public/google66de2f41c6a4bac9.html. Sin analítica ni eventos de Google: no restaurarlos sin solicitud.
- No leer, imprimir ni versionar valores de .env*. Secretos solo en servidor; nunca registrar datos de formularios.
- No publicar, enviar correos reales ni modificar servicios externos sin autorización para esa acción.

## Trabajo y comprobación
- Leer solo los archivos pertinentes; buscar antes de abrir archivos grandes. No cargar todo el repositorio, el historial ni todas las skills para una tarea.
- Estado del trabajo: consultar únicamente la sección pertinente de PENDIENTES.md. No importarlo completo en estas instrucciones.
- Código: npm run lint y npx tsc --noEmit; npm run test:contacto si cambia el flujo del formulario; npm run build al terminar un conjunto de cambios funcionales. No repetir checks ya correctos sin cambios relevantes.
- Rutas: npm run build:sitemap sustituye a build y regenera sitemap/robots. Solo documentación: comprobar diff, rutas e instrucciones; no compilar.
- Rendimiento: npm run analyze:win o Lighthouse solo si corresponde a la tarea. Lighthouse 13.6 requiere Node >=22.19.
- Responder brevemente: cambios, comprobaciones y limitaciones reales. No afirmar entrega de correo, indexación, despliegue o mejora de rendimiento sin comprobarlos.

## Skills
- Automáticas y específicas: trinchera-seo (contenido/SEO), trinchera-conversion (formularios/WhatsApp/Resend).
- Solo por petición explícita: /trinchera-performance, /vercel-react-best-practices, /web-design-guidelines. No encadenarlas para cambios rutinarios.
- frontend-design: reservar para solicitudes explícitas de diseño visual nuevo; respetar la identidad actual. El plugin está habilitado en settings.json; no se verificó su instalación global.
- React 19.1: no usar Activity ni useEffectEvent. En la guía externa leer solo reglas relevantes, nunca AGENTS.md completo.
