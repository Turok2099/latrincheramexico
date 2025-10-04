# 🚀 Comandos de Verificación Rápida

## Para Verificar las Optimizaciones Localmente

### 1. Compilar y ejecutar

```bash
npm run build
npm run start
```

### 2. Abrir en navegador

```
http://localhost:3000
```

### 3. Verificar en DevTools (F12)

1. Ir a pestaña **Network**
2. Filtrar por **Img**
3. Recargar página
4. Verificar que las imágenes sean **WebP** o **AVIF**
5. Confirmar que los tamaños sean mucho menores

### 4. Probar en PageSpeed Insights

```
https://pagespeed.web.dev/
```

Ingresa tu URL y compara los resultados antes/después

## Ejemplo de URL Optimizada

### Ver una imagen directamente:

```
https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto:eco,fl_progressive,fl_lossy/v1758905596/trinchera/eventos-sociales/28.png
```

Copia esta URL en el navegador y verifica:

- ✅ Formato WebP/AVIF (inspecciona con DevTools)
- ✅ Tamaño reducido (~400-600 KB vs 4+ MB original)
- ✅ Carga progresiva (la imagen aparece gradualmente)

## Comando para Git (después de probar)

```bash
# Ver cambios
git status

# Agregar archivos
git add .

# Commit
git commit -m "feat: optimización masiva de imágenes Cloudinary (reducción 80-90%)

- Implementadas transformaciones automáticas WebP/AVIF
- Configurada compresión eco-friendly (q_auto:eco)
- Agregada carga progresiva (fl_progressive, fl_lossy)
- Actualizado next.config.ts con formatos modernos
- Optimizados metadatos con imágenes comprimidas
- Mejora esperada en LCP: 4-8s → 1.5-3s
- Reducción de bandwidth: ~15 MB → ~2-4 MB

Refs: Google PageSpeed Insights recommendations"

# Push
git push origin main
```

## Monitoreo Post-Deployment

### Después de desplegar, verificar:

1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

### Métricas clave a observar:

- ✅ LCP debe bajar significativamente
- ✅ "Properly size images" debe mejorar
- ✅ "Serve images in next-gen formats" debe desaparecer
- ✅ Score de Performance debe subir a 80+

## 🎯 Resultados Esperados

| Métrica               | Antes  | Después   | Mejora     |
| --------------------- | ------ | --------- | ---------- |
| Tamaño total imágenes | ~15 MB | ~2-4 MB   | 80-87% ↓   |
| LCP                   | 4-8s   | 1.5-3s    | 50-60% ↓   |
| Performance Score     | 50-70  | 80-95     | +30-40 pts |
| Formato               | PNG    | WebP/AVIF | ✅ Moderno |

## Troubleshooting

### Si las imágenes no se optimizan:

```bash
# Limpiar cache de Next.js
rm -rf .next

# Re-compilar
npm run build
npm run start
```

### Si hay errores de Cloudinary:

Verifica las variables de entorno:

```bash
# .env.local debe tener:
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dxbtafe9u
```

### Para ver una imagen específica optimizada:

Abre DevTools → Network → selecciona imagen → Headers:

```
Content-Type: image/webp  (o image/avif)
```

## 📊 Dashboard de Monitoreo

Después del deployment, crea un documento con:

- ✅ Screenshot de PageSpeed (antes/después)
- ✅ Score de Performance (antes/después)
- ✅ LCP values (antes/después)
- ✅ Tamaño de imágenes en Network tab (antes/después)

Esto servirá como documentación del éxito de la optimización.
