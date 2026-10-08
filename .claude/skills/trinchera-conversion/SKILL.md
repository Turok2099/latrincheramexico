---
name: trinchera-conversion
description: Formularios de contacto, boton de WhatsApp y recorrido de solicitud de cotizacion de La Trinchera Mexico. Usar al editar o crear formularios, validacion, estados de carga/error/exito, eventos de GTM/GA4 o la integracion de envio.
---

# Conversion y cotizaciones

## Estado actual (verificar con Read antes de actuar)
- `src/components/Home/ContactForm.tsx`: `handleSubmit` espera un `setTimeout` de 2 s, empuja `form_submission` a `window.dataLayer` y muestra "Mensaje Enviado". No hay `fetch`, ruta `/api` ni servicio: el envio es simulado.
- `src/components/Contact/HeroContactForm.tsx` (pagina `/contact`): mismo patron simulado, sin evento de analitica.
- `src/components/WhatsAppButton.tsx`: enlace `wa.me` con +525545210178 y evento `click_whatsapp`. Es un clic, no una consulta entregada.
- GTM `GTM-55QXTXJ9` se carga en `src/app/layout.tsx`. No existe `src/app/api/`.
- Documentos de apoyo: `GTM_SETUP.md`, `GTM_GA4_CONFIG.md` (pueden describir eventos ya configurados en el contenedor; leerlos antes de renombrar eventos).

## Reglas
1. **Exito solo con evidencia**: mostrar confirmacion unicamente tras una respuesta 2xx del destino real. Nunca tras un `setTimeout`. Si no hay destino configurado, no mostrar "Mensaje Enviado": mostrar error o la alternativa de WhatsApp y reportar la limitacion.
2. **Destino existente primero**: buscar con Grep (`api`, `fetch`, `mailto`, `formspree`, `resend`, `emailjs`, `process.env`) y revisar solo los NOMBRES de variables de `.env.local`, sin imprimir valores. No proponer un servicio nuevo si ya hay uno. Si no existe, no elegir proveedor por cuenta propia: pedir al usuario (a) proveedor o destino (correo, CRM, webhook), (b) direccion que recibira las consultas, (c) variables de entorno disponibles en Vercel.
3. **Servidor**: el envio va a `src/app/api/<nombre>/route.ts` o a una Server Action que valide en servidor (la validacion del cliente no basta), limite longitud de campos, incluya honeypot o limite de tasa si es viable y lea secretos solo de `process.env` (sin prefijo `NEXT_PUBLIC_`).
4. **Validacion y accesibilidad**: `label` con `htmlFor`, `required` y `type` adecuados (`email`, `tel`), errores asociados con `aria-describedby` o `role="alert"`, boton `disabled` con texto de carga durante el envio, foco visible, resultado anunciado con `aria-live="polite"`. Conservar los estilos Tailwind existentes (`#22d3f7`, fondo negro).
5. **Estados**: reposo, enviando, exito, error (con reintento y sin perder lo escrito). No vaciar el formulario hasta confirmar exito.
6. **Analitica (GTM/GA4)**: distinguir
   - intento de envio: p. ej. `form_submit_attempt`, al enviar;
   - consulta entregada: `form_submission` o `generate_lead`, SOLO tras la respuesta correcta del servidor.
   Revisar `GTM_GA4_CONFIG.md` y el contenedor real antes de renombrar. Mover el momento del evento cambia las conversiones: avisar al usuario.
7. **Privacidad**: nada de nombre, correo, telefono ni texto del mensaje en `dataLayer` (ni en parametros ni en URL). `ContactForm` envia hoy tipo de evento, fecha y numero de invitados (no personales); `WhatsAppButton` envia el telefono del negocio (dato publico). No registrar datos del formulario con `console.log` ni en logs de servidor.
8. **WhatsApp**: mantener `wa.me` con mensaje prellenado; si se agregan botones, reutilizar `WhatsAppButton` o su logica y el mismo evento.

## Verificacion
`npm run lint`, `npx tsc --noEmit` y `npm run build`. Probar el flujo solo contra un destino de prueba; no enviar formularios reales. Reportar de forma explicita si el envio no pudo probarse de extremo a extremo.
