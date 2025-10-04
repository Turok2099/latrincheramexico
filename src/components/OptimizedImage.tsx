import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  loading?: "lazy" | "eager";
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  quality = 85,
  sizes,
  loading = priority ? "eager" : "lazy",
}: OptimizedImageProps) {
  // Generar sizes responsivas por defecto si no se proporcionan
  const responsiveSizes =
    sizes || `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`;

  // Si la imagen ya está en Cloudinary, optimízala con transformaciones
  if (src.includes("cloudinary.com")) {
    // Agregar o actualizar transformaciones para mejor rendimiento
    let optimizedSrc = src;

    // Si la URL no tiene transformaciones, agregarlas
    if (!src.includes("/upload/f_auto") && !src.includes("/upload/q_auto")) {
      // Transformaciones optimizadas:
      // f_auto = formato automático (WebP/AVIF según navegador)
      // q_auto:eco = calidad automática con compresión eficiente
      // fl_progressive = carga progresiva
      // w_ y h_ = dimensiones específicas
      const transforms = `f_auto,q_auto:eco,fl_progressive,w_${width},h_${height},c_fill`;
      optimizedSrc = src.replace("/upload/", `/upload/${transforms}/`);
    }

    return (
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        quality={quality}
        loading={loading}
        sizes={responsiveSizes}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    );
  }

  // Si es una imagen local, convertirla a URL de Cloudinary optimizada
  const cloudinaryUrl = `https://res.cloudinary.com/${
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }/image/fetch/w_${width},h_${height},c_fill,f_auto,q_auto/${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }${src}`;

  return (
    <Image
      src={cloudinaryUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      loading={loading}
      sizes={responsiveSizes}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
}
