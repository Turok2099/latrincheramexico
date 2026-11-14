---
name: trinchera-conversion
description: Formularios de contacto, boton de WhatsApp y recorrido de solicitud de cotizacion de La Trinchera Mexico. Usar al editar o crear formularios, validacion, estados de carga/error/exito, eventos de GTM/GA4 o la integracion de envio.
---

# Conversion y cotizaciones

## Estado actual (verificar con Read antes de actuar)
- Envio real: /api/contacto valida y envia por la API de Resend con RESEND_API_KEY, solo en servidor. Destino y remitente: contacto@latrincheramexico.com; reply_to del visitante. Sin base de datos. Exito significa aceptacion del proveedor, no entrega garantizada.
- Los dos formularios muestran exito solo si la API responde `ok`; no emiten eventos de medicion.
- `src/components/WhatsAppButton.tsx`: enlace `wa.me` con +525545210178, sin eventos de medicion.
- Notificacion por correo implementada con Resend; pendiente configurar clave y comprobar entrega. Aviso de privacidad pendiente.
- Sin etiquetas ni eventos de Google. Configuracion nueva pendiente de solicitud del usuario, despues del contenido.

## Reglas
1. **Exito solo con evidencia**: mostrar confirmacion unicamente tras una respuesta 2xx del destino real. Nunca tras un `setTimeout`. Si falta configuracion (variables de entorno), la API responde 503 y el formulario muestra error; no mostrar "Mensaje Enviado": mostrar error o la alternativa de WhatsApp y reportar la limitacion.
2. **Destino existente primero**: buscar con Grep (`api`, `fetch`, `mailto`, `formspree`, `resend`, `emailjs`, `process.env`) y revisar solo los NOMBRES de variables de `.env.local`, sin imprimir valores. No proponer un servicio nuevo si ya hay uno. Si no existe, no elegir proveedor por cuenta propia: pedir al usuario (a) proveedor o destino (correo, CRM, webhook), (b) direccion que recibira las consultas, (c) variables de entorno disponibles en Vercel.
3. **Servidor**: el envio va a `src/app/api/<nombre>/route.ts` o a una Server Action que valide en servidor (la validacion del cliente no basta), limite longitud de campos, incluya honeypot o limite de tasa si es viable y lea secretos solo de `process.env` (sin prefijo `NEXT_PUBLIC_`).
4. **Validacion y accesibilidad**: `label` con `htmlFor`, `required` y `type` adecuados (`email`, `tel`), errores asociados con `aria-describedby` o `role="alert"`, boton `disabled` con texto de carga durante el envio, foco visible, resultado anunciado con `aria-live="polite"`. Conservar los estilos Tailwind existentes (`#22d3f7`, fondo negro).
5. **Estados**: reposo, enviando, exito, error (con reintento y sin perder lo escrito). No vaciar el formulario hasta confirmar exito.
6. **Analitica**: retirada por solicitud del usuario. No restaurar etiquetas ni eventos antiguos; configurar de nuevo solo cuando el usuario lo solicite.
7. **Privacidad**: no enviar datos personales a analitica ni registrarlos en consola o logs.
8. **WhatsApp**: mantener `wa.me` con mensaje prellenado, sin medicion hasta nueva solicitud.

## Verificacion
`npm run lint`, `npx tsc --noEmit` y `npm run build`. Probar el flujo solo contra un destino de prueba; no enviar formularios reales. Reportar de forma explicita si el envio no pudo probarse de extremo a extremo.
