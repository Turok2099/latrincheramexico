---
name: trinchera-conversion
description: Cambios al formulario compartido, validación, envío por Resend y contacto por WhatsApp de La Trinchera México.
---
# Formularios y contacto

- Un solo formulario: src/components/Contact/Formulario.tsx. Home/ContactForm.tsx y Contact/HeroContactForm.tsx son envolturas; no duplicar campos ni lógica.
- Catálogo, límites y validación: src/lib/contacto.ts. Cliente: src/lib/enviarContacto.ts. Servidor: src/app/api/contacto/route.ts. Leer solo lo que afecte al cambio.
- Resend por fetch, RESEND_API_KEY solo en servidor. Remitente/destino: contacto@latrincheramexico.com; reply_to del visitante. Sin Supabase, Neon ni almacenamiento local de datos personales.
- Conservar errores por campo, datos tras fallo, límites sin recortes, bloqueo de doble envío, foco visible, labels, autocompletado y anuncio de estados.
- Fecha e invitados opcionales; validar fechas reales no pasadas y cantidades enteras positivas. Servicio y autorización de privacidad obligatorios; validar de nuevo en servidor.
- Éxito solo tras aceptación de Resend; no equivale a entrega. No prometer respuesta en 24 h. Mantener enlace a WhatsApp en errores.
- Idempotencia: mismo contenido e intento reutilizan la clave; cambiar datos o recargar crea otro intento. No generar una clave nueva en cada reintento idéntico. Resend deduplica durante 24 h.
- Protección: origen, JSON de hasta 16 KiB, honeypot, límite por IP/instancia con memoria acotada. No afirmar que es un límite global ni agregar servicios externos sin necesidad.
- /aviso-privacidad es información del flujo real; aviso integral pendiente de datos del responsable. No inventar domicilio, retención ni procedimientos legales.
- WhatsApp usa wa.me/+525545210178. No reinstalar eventos de Google ni enviar datos personales a analítica o logs.
- Verificación según CLAUDE.md y npm run test:contacto. Simular el proveedor; no enviar correos reales durante pruebas. Distinguir pruebas locales de entrega comprobada en producción; estado en la sección pertinente de PENDIENTES.md.
