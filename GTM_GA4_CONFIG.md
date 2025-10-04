# 🎯 Configuración Rápida: GTM + GA4 - La Trinchera México

## ✅ IDs de tu Proyecto

- **GTM ID**: `GTM-55QXTXJ9` ✅ Ya configurado en el código
- **GA4 ID**: `G-K9R5B0D8QR` 🔧 Por configurar en GTM

---

## 📋 Pasos de Configuración (15 minutos)

### Paso 1: Configurar GA4 en GTM

1. Ve a [Google Tag Manager](https://tagmanager.google.com)
2. Selecciona tu contenedor **GTM-55QXTXJ9**

### Paso 2: Crear Etiqueta de GA4 (Page View)

**En GTM:**

1. Click en **Etiquetas** → **Nueva**
2. Nombre de la etiqueta: `GA4 - Page View`
3. Click en **Configuración de etiqueta**
4. Selecciona: **Google Analytics: Evento de GA4**
5. En **ID de medición**: `G-K9R5B0D8QR`
6. En **Nombre del evento**: `page_view`
7. Click en **Activación**
8. Selecciona: **All Pages**
9. Click en **Guardar**

### Paso 3: Crear Etiqueta para WhatsApp

**En GTM:**

1. Click en **Etiquetas** → **Nueva**
2. Nombre de la etiqueta: `GA4 - Click WhatsApp`
3. Click en **Configuración de etiqueta**
4. Selecciona: **Google Analytics: Evento de GA4**
5. En **ID de medición**: `G-K9R5B0D8QR`
6. En **Nombre del evento**: `click_whatsapp`
7. Click en **Activación** → **Elegir activador**
8. Click en el icono **+** (arriba a la derecha)
9. Nombre del activador: `Custom Event - click_whatsapp`
10. Tipo de activador: **Evento personalizado**
11. Nombre del evento: `click_whatsapp`
12. Click en **Guardar**
13. Click en **Guardar** (la etiqueta)

### Paso 4: Crear Etiqueta para Formulario

**En GTM:**

1. Click en **Etiquetas** → **Nueva**
2. Nombre de la etiqueta: `GA4 - Form Submission`
3. Click en **Configuración de etiqueta**
4. Selecciona: **Google Analytics: Evento de GA4**
5. En **ID de medición**: `G-K9R5B0D8QR`
6. En **Nombre del evento**: `form_submission`
7. Click en **Activación** → **Elegir activador**
8. Click en el icono **+** (arriba a la derecha)
9. Nombre del activador: `Custom Event - form_submission`
10. Tipo de activador: **Evento personalizado**
11. Nombre del evento: `form_submission`
12. Click en **Guardar**
13. Click en **Guardar** (la etiqueta)

### Paso 5: Publicar Cambios en GTM

1. Click en **Enviar** (arriba a la derecha)
2. Nombre de la versión: `Configuración inicial GA4`
3. Descripción: `Page views, WhatsApp y Formulario`
4. Click en **Publicar**

---

## 🧪 Verificar que Funciona

### Opción 1: Modo Vista Previa de GTM

1. En GTM, click en **Vista previa**
2. Ingresa tu URL: `https://latrincheramexico.com`
3. Se abrirá una nueva ventana con Tag Assistant
4. Navega por tu sitio:
   - Deberías ver que se dispara `GA4 - Page View`
   - Haz clic en WhatsApp → Debería disparar `GA4 - Click WhatsApp`
   - Envía el formulario → Debería disparar `GA4 - Form Submission`

### Opción 2: Google Analytics (Tiempo Real)

1. Ve a [Google Analytics](https://analytics.google.com)
2. Selecciona tu propiedad **G-K9R5B0D8QR**
3. Ve a **Informes** → **Tiempo real**
4. Abre tu sitio en otra pestaña
5. Deberías ver:
   - Usuarios activos
   - Páginas vistas
   - Eventos en tiempo real

### Opción 3: Consola del Navegador

```javascript
// Abre la consola (F12)
window.dataLayer

// Deberías ver algo como:
[
  {gtm.start: 1234567890, event: 'gtm.js'},
  {event: 'click_whatsapp', button_name: 'WhatsApp Flotante', ...},
  ...
]
```

---

## 📊 Eventos que se Trackean

### 1. 🟢 Page View (Automático)

- **Se dispara**: Cada vez que se carga una página
- **Datos**: URL, título de página, timestamp

### 2. 💬 Click en WhatsApp

- **Se dispara**: Al hacer clic en el botón flotante de WhatsApp
- **Datos**:
  - `button_name`: "WhatsApp Flotante"
  - `button_location`: "floating_button"
  - `phone_number`: +525545210178
  - `page_path`: Ruta actual
  - `page_url`: URL completa

### 3. 📝 Envío de Formulario

- **Se dispara**: Al enviar el formulario de contacto
- **Datos**:
  - `form_name`: "Formulario de Contacto Home"
  - `form_type`: Tipo de evento seleccionado
  - `event_date`: Fecha del evento
  - `number_of_guests`: Número de invitados
  - `page_path`: Ruta actual
  - `page_url`: URL completa

---

## 📈 Ver Reportes en GA4

### Tiempo Real (Inmediato)

1. **Google Analytics** → Tu propiedad
2. **Informes** → **Tiempo real**
3. Verás usuarios activos y eventos en vivo

### Reportes Históricos (24-48 horas)

1. **Google Analytics** → Tu propiedad
2. **Informes** → **Engagement** → **Eventos**
3. Busca tus eventos:
   - `click_whatsapp`
   - `form_submission`
   - `page_view`

### Crear Informe Personalizado

1. **Explorar** → **Crear informe**
2. Arrastra métricas:
   - Usuarios
   - Sesiones
   - Eventos
3. Arrastra dimensiones:
   - Nombre del evento
   - Página
   - Fecha

---

## 🎯 Resumen de Configuración

```
✅ Código actualizado con GTM-55QXTXJ9
⏳ Pendiente: Configurar 3 etiquetas en GTM:
   1. GA4 - Page View (All Pages)
   2. GA4 - Click WhatsApp (click_whatsapp)
   3. GA4 - Form Submission (form_submission)
⏳ Pendiente: Publicar cambios en GTM
⏳ Pendiente: Verificar en GA4 Tiempo Real
```

---

## 🚨 Troubleshooting

### No veo eventos en GA4

- ✅ Verifica que publicaste los cambios en GTM (no solo guardaste)
- ✅ Espera 5-10 minutos después de publicar
- ✅ Verifica en **Tiempo Real**, no en reportes históricos
- ✅ Asegúrate de que el sitio esté desplegado con el código actualizado

### GTM no se carga

- ✅ Revisa la consola del navegador (F12) por errores
- ✅ Verifica que el ID `GTM-55QXTXJ9` sea correcto
- ✅ Limpia caché del navegador (Ctrl + Shift + R)

### Eventos se disparan pero no llegan a GA4

- ✅ Verifica el ID de GA4: `G-K9R5B0D8QR`
- ✅ Confirma que las etiquetas estén **publicadas** en GTM
- ✅ Usa el modo Vista Previa de GTM para debug

---

## 📞 Contacto

**¿Necesitas ayuda?**

- Email: contacto@latrincheramexico.com
- WhatsApp: +52 55 4521 0178

---

**Última actualización**: Configuración inicial con GTM-55QXTXJ9 y GA4 G-K9R5B0D8QR
