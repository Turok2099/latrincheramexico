// Mapeo automático de imágenes de Cloudinary
// Generado automáticamente por upload script

/**
 * Optimiza una URL de Cloudinary con transformaciones de rendimiento
 * Convierte a WebP/AVIF y aplica compresión inteligente
 */
function optimizeCloudinaryUrl(url: string): string {
  if (!url.includes("cloudinary.com")) return url;

  // Transformaciones para mejor rendimiento:
  // f_auto = formato automático (WebP/AVIF según soporte del navegador)
  // q_auto:eco = calidad automática con compresión ecológica
  // fl_progressive = carga progresiva
  // fl_lossy = compresión lossy para mayor reducción
  const transformations = "f_auto,q_auto:eco,fl_progressive,fl_lossy";

  return url.replace("/upload/", `/upload/${transformations}/`);
}

export const cloudinaryImages = {
  "catering-para-eventos": [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905520/trinchera/catering-para-eventos/1.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905524/trinchera/catering-para-eventos/2.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905528/trinchera/catering-para-eventos/3.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905531/trinchera/catering-para-eventos/4.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905535/trinchera/catering-para-eventos/5.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905537/trinchera/catering-para-eventos/55.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905541/trinchera/catering-para-eventos/6.png",
  ],
  "eventos-empresariales": [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905542/trinchera/eventos-empresariales/10.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905543/trinchera/eventos-empresariales/11.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905544/trinchera/eventos-empresariales/12.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905546/trinchera/eventos-empresariales/13.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905547/trinchera/eventos-empresariales/14.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905550/trinchera/eventos-empresariales/15.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905551/trinchera/eventos-empresariales/16.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905552/trinchera/eventos-empresariales/17.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905553/trinchera/eventos-empresariales/18.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905554/trinchera/eventos-empresariales/19.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905556/trinchera/eventos-empresariales/20.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905557/trinchera/eventos-empresariales/21.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905559/trinchera/eventos-empresariales/22.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905560/trinchera/eventos-empresariales/56.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905562/trinchera/eventos-empresariales/60.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905565/trinchera/eventos-empresariales/7.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905569/trinchera/eventos-empresariales/8.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905573/trinchera/eventos-empresariales/9.png",
  ],
  "eventos-sociales": [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905577/trinchera/eventos-sociales/23.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905581/trinchera/eventos-sociales/24.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905585/trinchera/eventos-sociales/25.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905588/trinchera/eventos-sociales/26.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905592/trinchera/eventos-sociales/27.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905596/trinchera/eventos-sociales/28.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905601/trinchera/eventos-sociales/29.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905604/trinchera/eventos-sociales/30.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905609/trinchera/eventos-sociales/31.png",
  ],
  graduaciones: [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905614/trinchera/graduaciones/32.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905617/trinchera/graduaciones/33.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905621/trinchera/graduaciones/34.png",
  ],
  "musica-para-eventos": [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905625/trinchera/musica-para-eventos/35.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905629/trinchera/musica-para-eventos/36.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905633/trinchera/musica-para-eventos/37.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1759545585/trinchera/musica-para-eventos/mariachi.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905636/trinchera/musica-para-eventos/38.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905639/trinchera/musica-para-eventos/39.png",
  ],
  "organizacion-de-bodas": [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905642/trinchera/organizacion-de-bodas/40.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905646/trinchera/organizacion-de-bodas/41.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905651/trinchera/organizacion-de-bodas/42.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905655/trinchera/organizacion-de-bodas/43.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905659/trinchera/organizacion-de-bodas/44.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905662/trinchera/organizacion-de-bodas/45.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905665/trinchera/organizacion-de-bodas/57.png",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905668/trinchera/organizacion-de-bodas/61.png",
  ],
  "pantallas-para-escenarios": [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905669/trinchera/pantallas-para-escenarios/46.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905670/trinchera/pantallas-para-escenarios/47.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905671/trinchera/pantallas-para-escenarios/48.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905672/trinchera/pantallas-para-escenarios/49.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905674/trinchera/pantallas-para-escenarios/50.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905675/trinchera/pantallas-para-escenarios/51.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905676/trinchera/pantallas-para-escenarios/52.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905677/trinchera/pantallas-para-escenarios/53.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905678/trinchera/pantallas-para-escenarios/54.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905679/trinchera/pantallas-para-escenarios/62.jpg",
  ],
  "stands-para-eventos": [
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905681/trinchera/stands-para-eventos/63.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905682/trinchera/stands-para-eventos/64.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905683/trinchera/stands-para-eventos/65.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905685/trinchera/stands-para-eventos/66.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905686/trinchera/stands-para-eventos/67.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905687/trinchera/stands-para-eventos/68.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905688/trinchera/stands-para-eventos/69.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905689/trinchera/stands-para-eventos/70.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905691/trinchera/stands-para-eventos/71.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905692/trinchera/stands-para-eventos/72.jpg",
    "https://res.cloudinary.com/dxbtafe9u/image/upload/v1758905693/trinchera/stands-para-eventos/73.jpg",
  ],
};

export const getRandomImage = (
  category: keyof typeof cloudinaryImages
): string => {
  const images = cloudinaryImages[category];
  if (!images || images.length === 0) return "";
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return optimizeCloudinaryUrl(randomImage);
};

export const getAllImages = (): string[] => {
  return Object.values(cloudinaryImages)
    .flat()
    .map((url) => optimizeCloudinaryUrl(url));
};

export const getImagesByCategory = (
  category: keyof typeof cloudinaryImages
): string[] => {
  const images = cloudinaryImages[category];
  if (!images || images.length === 0) return [];
  return images.map((url) => optimizeCloudinaryUrl(url));
};
