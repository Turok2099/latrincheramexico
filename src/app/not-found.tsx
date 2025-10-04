import Image from "next/image";
import { optimizeCloudinaryUrl } from "@/helpers/ImageOptimizer";

export default function NotFound() {
  // Imagen 404 desde Cloudinary
  const image404 = optimizeCloudinaryUrl(
    "https://res.cloudinary.com/dxbtafe9u/image/upload/trinchera/main-images/404-page.png"
  );

  return (
    <div className="bg-white flex items-center justify-center flex-1">
      {/* Imagen 404 - Ocupa el máximo espacio disponible */}
      <div className="relative w-full max-w-6xl h-[calc(100vh-250px)]">
        <Image
          src={image404}
          alt="Error 404"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 1600px"
        />
      </div>
    </div>
  );
}
