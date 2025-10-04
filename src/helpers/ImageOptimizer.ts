/**
 * 🚀 Optimizador de imágenes Cloudinary
 * Genera URLs optimizadas para mejor LCP y performance
 */

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: "auto:low" | "auto:eco" | "auto:good" | "auto:best" | number;
  format?: "auto" | "webp" | "avif";
  blur?: number;
  priority?: boolean;
}

/**
 * Optimiza una URL de Cloudinary para mejor rendimiento
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: ImageOptimizationOptions = {}
): string {
  if (!url.includes("cloudinary.com")) {
    return url;
  }

  const {
    width,
    height,
    quality = "auto:eco", // Calidad automática eco-friendly
    format = "auto",
    blur,
    priority = false,
  } = options;

  // Construir transformaciones
  const transformations = [];

  // Formato automático (WebP/AVIF según soporte del navegador)
  transformations.push(`f_${format}`);

  // Calidad automática con compresión optimizada
  transformations.push(`q_${quality}`);

  // Dimensiones si se especifican
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);

  // Crop para mantener aspecto
  if (width || height) transformations.push("c_fill");

  // Optimizaciones de carga y compresión
  if (!priority) {
    transformations.push("fl_progressive"); // Carga progresiva
    transformations.push("fl_lossy"); // Compresión lossy para mayor reducción
  } else {
    // Para imágenes priority (LCP), optimización más agresiva
    transformations.push("fl_progressive:steep"); // Carga progresiva más agresiva
    transformations.push("fl_lossy"); // Compresión lossy
  }

  // Blur placeholder si se especifica
  if (blur) transformations.push(`e_blur:${blur}`);

  // Insertar transformaciones en la URL
  const transformString = transformations.join(",");

  // Buscar el patrón /upload/ y agregar transformaciones
  return url.replace("/upload/", `/upload/${transformString}/`);
}

/**
 * Genera sizes responsivas optimizadas
 */
export function getResponsiveSizes(
  type: "hero" | "card" | "thumbnail" | "full"
): string {
  const sizesMap = {
    hero: "100vw",
    card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    thumbnail: "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px",
    full: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px",
  };

  return sizesMap[type];
}

/**
 * Obtiene dimensiones optimizadas según device
 */
export function getOptimizedDimensions(type: "hero" | "card" | "thumbnail") {
  const dimensionsMap = {
    hero: { width: 1920, height: 1080 },
    card: { width: 800, height: 600 },
    thumbnail: { width: 400, height: 300 },
  };

  return dimensionsMap[type];
}
