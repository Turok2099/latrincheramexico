# 🚀 Lighthouse Performance Analysis

Guía para analizar el rendimiento del sitio web con Lighthouse CLI.

## 📊 Scripts Disponibles

### 1. **Análisis de Producción**

```bash
npm run lighthouse:prod
```

- Analiza el sitio en producción: https://latrincheramexico.com
- Genera reporte HTML: `lighthouse-report-prod.html`
- Abre automáticamente en el navegador

### 2. **Análisis Local**

```bash
npm run lighthouse:local
```

- Analiza el servidor local: http://localhost:3000
- **Requisito**: El servidor debe estar corriendo (`npm run dev` o `npm start`)
- Genera reporte HTML: `lighthouse-report-local.html`

### 3. **Análisis Móvil**

```bash
npm run lighthouse:mobile
```

- Emula dispositivo móvil
- Enfocado en rendimiento
- Genera reporte HTML: `lighthouse-mobile.html`

### 4. **Análisis Desktop**

```bash
npm run lighthouse:desktop
```

- Emula dispositivo desktop
- Enfocado en rendimiento
- Genera reporte HTML: `lighthouse-desktop.html`

---

## 🎯 Métricas Principales

Lighthouse analiza:

### **Performance (Rendimiento)**

- ⚡ **First Contentful Paint (FCP)** - Primera renderización
- 🖼️ **Largest Contentful Paint (LCP)** - Elemento más grande visible
- 🎢 **Cumulative Layout Shift (CLS)** - Estabilidad visual
- ⏱️ **Total Blocking Time (TBT)** - Tiempo de bloqueo
- 🚀 **Speed Index** - Velocidad de carga visual

### **Accessibility (Accesibilidad)**

- Contraste de colores
- Etiquetas ARIA
- Navegación por teclado

### **Best Practices (Mejores Prácticas)**

- HTTPS
- Errores de consola
- APIs deprecadas
- Seguridad

### **SEO**

- Meta tags
- Crawlability
- Mobile-friendly

---

## 📈 Ejemplo de Uso Completo

```bash
# 1. Para servidor local (primero inicia el servidor)
npm run dev
# En otra terminal:
npm run lighthouse:local

# 2. Para producción
npm run lighthouse:prod

# 3. Para análisis móvil detallado
npm run lighthouse:mobile
```

---

## 🎨 Interpretación de Resultados

### Puntuación de Colores:

- 🟢 **90-100** - Excelente
- 🟡 **50-89** - Necesita mejoras
- 🔴 **0-49** - Pobre

### Objetivo del Proyecto:

- ✅ Performance: >85
- ✅ Accessibility: >90
- ✅ Best Practices: >90
- ✅ SEO: >90

---

## 🔧 Solución de Problemas

### Error: "Port already in use"

```bash
# El servidor local no está corriendo
npm run dev
```

### Error: "Cannot find module lighthouse"

```bash
# Reinstalar dependencias
npm install
```

---

## 📝 Notas

- Los reportes HTML se generan en la raíz del proyecto
- Los reportes están en `.gitignore` (no se suben a Git)
- Lighthouse requiere Chrome/Chromium instalado
- Los análisis pueden tardar 30-60 segundos

---

**Última actualización**: Enero 2025
**Lighthouse version**: v11.x
