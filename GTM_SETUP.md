# 📊 Configuración de Google Tag Manager (GTM) + GA4

## ✅ Implementación Completada

Se ha implementado Google Tag Manager en tu proyecto Next.js 15 con App Router.

### Archivos Modificados:

1. ✅ `src/app/layout.tsx` - GTM instalado globalmente
2. ✅ `src/components/WhatsAppButton.tsx` - Tracking de clics en WhatsApp
3. ✅ `src/components/Home/ContactForm.tsx` - Tracking de envíos de formulario

---

## 🚀 Pasos para Activar GTM

### 1. Crear Cuenta de Google Tag Manager

1. Ve a [Google Tag Manager](https://tagmanager.google.com/)
2. Crea una cuenta nueva (si no tienes)
3. Crea un contenedor:
   - **Nombre del contenedor**: La Trinchera México
   - **Tipo**: Web
4. Obtendrás un **ID de GTM** como: `GTM-XXXXXXX`

### 2. Reemplazar el ID en tu Proyecto

Busca y reemplaza `GTM-XXXXXXX` por tu ID real en estos archivos:

**Archivo: `src/app/layout.tsx`**

```typescript
// Línea ~75
src="https://www.googletagmanager.com/ns.html?id=GTM-TU-ID-AQUI"

// Línea ~97
})(window,document,'script','dataLayer','GTM-TU-ID-AQUI');
```

### 3. Configurar Google Analytics 4 (GA4)

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad GA4:
   - **Nombre**: La Trinchera México
   - **URL del sitio**: `https://latrincheramexico.com`
   - **Sector**: Servicios de eventos
3. Obtendrás un **ID de medición** como: `G-XXXXXXXXXX`

### 4. Conectar GA4 con GTM

**En Google Tag Manager:**

1. Ve a **Etiquetas** → **Nueva**
2. Configuración de etiqueta:
   - Tipo: **Google Analytics: Evento de GA4**
   - ID de medición: `G-XXXXXXXXXX`
   - Nombre del evento: `page_view`
3. Activador: **All Pages**
4. Guarda y **Publica**

---

## 📈 Eventos Configurados

### 1. 🟢 Clic en WhatsApp

**Nombre del evento:** `click_whatsapp`

**Parámetros:**

- `button_name`: "WhatsApp Flotante"
- `button_location`: "floating_button"
- `phone_number`: Número de teléfono
- `page_path`: Ruta de la página
- `page_url`: URL completa

**Configuración en GTM:**

1. Etiquetas → Nueva
2. Tipo: **Google Analytics: Evento de GA4**
3. ID de medición: `G-XXXXXXXXXX`
4. Nombre del evento: `click_whatsapp`
5. Activador: **Evento personalizado** → `click_whatsapp`

### 2. 📝 Envío de Formulario

**Nombre del evento:** `form_submission`

**Parámetros:**

- `form_name`: "Formulario de Contacto Home"
- `form_type`: Tipo de evento seleccionado
- `event_date`: Fecha del evento
- `number_of_guests`: Número de invitados
- `page_path`: Ruta de la página
- `page_url`: URL completa

**Configuración en GTM:**

1. Etiquetas → Nueva
2. Tipo: **Google Analytics: Evento de GA4**
3. ID de medición: `G-XXXXXXXXXX`
4. Nombre del evento: `form_submission`
5. Activador: **Evento personalizado** → `form_submission`

---

## 🧪 Verificar la Instalación

### Método 1: Modo Vista Previa de GTM

1. En GTM, haz clic en **Vista previa**
2. Ingresa tu URL: `https://latrincheramexico.com`
3. Navega por el sitio y verifica que se disparan los eventos

### Método 2: Google Tag Assistant

1. Instala [Tag Assistant Companion](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
2. Abre tu sitio
3. Verifica que GTM y GA4 estén activos

### Método 3: Consola del Navegador

```javascript
// En la consola del navegador
window.dataLayer;
// Debe mostrar un array con eventos
```

---

## 📊 Ver Resultados en GA4

1. Ve a **Google Analytics** → Tu propiedad
2. **Informes** → **Tiempo real**
3. Haz clic en el botón de WhatsApp
4. Verás el evento `click_whatsapp` en tiempo real

Para ver datos históricos:

- **Informes** → **Eventos**
- Busca `click_whatsapp` y `form_submission`

---

## 🎯 Eventos Adicionales Recomendados

### Para Agregar en el Futuro:

1. **Scroll depth** - Cuánto scroll hace el usuario
2. **Clic en servicios** - Qué servicios interesan más
3. **Clic en galería** - Qué imágenes se ven
4. **Tiempo en página** - Engagement
5. **Clic en links externos** - Redes sociales

---

## 🔧 Troubleshooting

### GTM no carga

- Verifica que el ID sea correcto (GTM-XXXXXXX)
- Revisa la consola del navegador por errores
- Confirma que GTM esté publicado (no solo guardado)

### Eventos no se registran

- Verifica que `window.dataLayer` exista en consola
- Confirma que los activadores en GTM estén bien configurados
- Usa el modo Vista Previa de GTM para debug

### GA4 no muestra datos

- Espera 24-48 horas para datos históricos
- Usa "Tiempo real" para pruebas inmediatas
- Verifica que la etiqueta de GA4 esté publicada en GTM

---

## 📝 Checklist de Implementación

- [ ] Crear cuenta de Google Tag Manager
- [ ] Obtener ID de GTM
- [ ] Reemplazar `GTM-XXXXXXX` en el código
- [ ] Crear propiedad de GA4
- [ ] Obtener ID de medición GA4
- [ ] Configurar etiqueta de GA4 en GTM
- [ ] Configurar evento `click_whatsapp`
- [ ] Configurar evento `form_submission`
- [ ] Publicar cambios en GTM
- [ ] Verificar con Vista Previa de GTM
- [ ] Verificar eventos en GA4 Tiempo Real
- [ ] Deploy del sitio con cambios

---

## 🎓 Recursos Útiles

- [GTM Documentation](https://support.google.com/tagmanager)
- [GA4 Documentation](https://support.google.com/analytics)
- [GTM + Next.js Guide](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [dataLayer Reference](https://developers.google.com/tag-platform/tag-manager/datalayer)

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo.
