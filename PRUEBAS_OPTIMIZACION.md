# 🧪 Pruebas de Optimización de Imágenes

## Cómo Verificar las Mejoras

### 1. Compilar y Ejecutar el Proyecto

```bash
npm run build
npm run start
```

### 2. Verificar en DevTools

#### Chrome DevTools → Network Tab:

1. Abre DevTools (F12)
2. Ve a la pestaña "Network"
3. Filtra por "Img"
4. Recarga la página
5. Verifica:
   - ✅ Las imágenes deben estar en formato **WebP** o **AVIF**
   - ✅ El tamaño debe ser significativamente menor
   - ✅ Busca imágenes como `28.png` y verifica que ahora pesen ~400-800 KB en lugar de 4+ MB

### 3. Verificar URLs Transformadas

Ejemplos de URLs antes y después:

#### ❌ ANTES (sin optimizar):

```
https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905596/trinchera/eventos-sociales/28.png
```

#### ✅ DESPUÉS (optimizada):

```
https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,fl_lossy/v1758905596/trinchera/eventos-sociales/28.png
```

### 4. Prueba PageSpeed Insights

Visita: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)

1. Ingresa la URL de tu sitio
2. Haz clic en "Analizar"
3. Espera los resultados

**Métricas a observar:**

- ✅ **LCP (Largest Contentful Paint)**: Debe reducirse significativamente
- ✅ **Speed Index**: Mejora en tiempo de carga visual
- ✅ **Total Blocking Time**: Reducción por carga más rápida
- ✅ **Cumulative Layout Shift**: Debería mantenerse bajo

**En la sección "Oportunidades":**

- ✅ "Aplicar imágenes con tamaño apropiado" → debe mostrar menos oportunidades
- ✅ "Servir imágenes en formatos modernos" → debe desaparecer o reducirse drásticamente
- ✅ "Codificar imágenes de manera eficiente" → debe mejorar significativamente

### 5. Lighthouse Local

```bash
# Asegúrate de que el proyecto esté corriendo
npm run build
npm run start
```

Luego en Chrome:

1. Abre DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Selecciona:
   - ✅ Performance
   - ✅ Desktop o Mobile
4. Haz clic en "Analyze page load"

### 6. Comparación de Tamaños

#### Imagen de Ejemplo: `eventos-sociales/28.png`

| Métrica           | Antes     | Después     | Mejora      |
| ----------------- | --------- | ----------- | ----------- |
| Formato           | PNG       | WebP/AVIF   | ✅ Moderno  |
| Tamaño Original   | ~4,025 KB | -           | -           |
| Tamaño Descargado | ~4,025 KB | ~400-800 KB | 80-90%      |
| Compresión        | Ninguna   | Lossy + Eco | ✅ Óptima   |
| Carga Progresiva  | No        | Sí          | ✅ Mejor UX |

### 7. Verificar Formato en Diferentes Navegadores

#### Chrome (moderno):

- Debe servir **AVIF** (el más eficiente)
- Verificar en DevTools → Network → Type

#### Safari:

- Debe servir **WebP** (Safari 14+)
- O **PNG** optimizado en versiones antiguas

#### Firefox:

- Debe servir **AVIF** (Firefox 93+)
- O **WebP** en versiones antiguas

### 8. Inspeccionar Transformaciones Aplicadas

Abre la consola del navegador y ejecuta:

```javascript
// Ver todas las imágenes de Cloudinary en la página
document.querySelectorAll('img[src*="cloudinary"]').forEach((img) => {
  console.log("URL:", img.src);
  console.log("Tamaño natural:", img.naturalWidth, "x", img.naturalHeight);
  console.log("---");
});
```

Verifica que todas las URLs contengan:

- ✅ `f_auto` (formato automático)
- ✅ `q_auto:eco` (calidad eco)
- ✅ `fl_progressive` (carga progresiva)
- ✅ `fl_lossy` (compresión lossy)

### 9. Métricas Esperadas

#### Antes de la Optimización:

- 📊 Performance Score: ~50-70
- ⏱️ LCP: 4-8 segundos
- 📦 Tamaño total de imágenes: ~15 MB
- 🎨 Formato: PNG sin comprimir

#### Después de la Optimización:

- 📊 Performance Score: **~80-95** ✅
- ⏱️ LCP: **1.5-3 segundos** ✅
- 📦 Tamaño total de imágenes: **~2-4 MB** ✅ (80% reducción)
- 🎨 Formato: **WebP/AVIF con compresión óptima** ✅

### 10. Herramientas Adicionales

#### WebPageTest

- URL: [https://www.webpagetest.org/](https://www.webpagetest.org/)
- Prueba desde diferentes ubicaciones
- Ve filmstrip de carga de imágenes

#### GTmetrix

- URL: [https://gtmetrix.com/](https://gtmetrix.com/)
- Análisis detallado de cada imagen
- Recomendaciones específicas

## 🎯 Checklist de Verificación

- [ ] Las imágenes cargan en formato WebP/AVIF
- [ ] El tamaño de las imágenes se redujo en ~80-90%
- [ ] PageSpeed Insights muestra mejora en LCP
- [ ] No hay errores en la consola del navegador
- [ ] Las imágenes se ven con la misma calidad visual
- [ ] La carga progresiva funciona correctamente
- [ ] El score de Performance mejoró significativamente

## 📝 Notas

- **Formato AVIF**: Solo en navegadores muy modernos (Chrome 85+, Firefox 93+)
- **Formato WebP**: En la mayoría de navegadores modernos
- **Fallback PNG**: Cloudinary sirve automáticamente PNG en navegadores antiguos
- **Cache**: Primera carga puede tardar más, pero subsecuentes serán instantáneas

## 🐛 Troubleshooting

### Las imágenes no se ven optimizadas:

1. Verifica que la URL tenga las transformaciones (`f_auto`, `q_auto:eco`)
2. Limpia el cache del navegador (Ctrl+Shift+Delete)
3. Verifica que Cloudinary esté respondiendo correctamente
4. Revisa la consola para errores

### Las imágenes se ven borrosas:

1. Ajusta la calidad a `q_auto:good` en lugar de `q_auto:eco`
2. Verifica que las dimensiones sean correctas
3. Asegúrate de que el ratio de aspecto se mantenga

### PageSpeed aún muestra advertencias:

1. Verifica que TODAS las imágenes usen las transformaciones
2. Revisa que no haya imágenes inline o en CSS sin optimizar
3. Considera agregar lazy loading a más imágenes
4. Verifica que las imágenes críticas tengan `priority={true}`

## ✅ Resultado Esperado

Después de implementar todas las optimizaciones, deberías ver:

- **80-90% de reducción** en el peso de las imágenes
- **Mejora significativa en LCP** (varios segundos más rápido)
- **Score de Performance** arriba de 80-90 en PageSpeed
- **Advertencias de formato de imagen** casi eliminadas
- **Mejor experiencia de usuario** en dispositivos móviles
