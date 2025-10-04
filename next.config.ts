import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"], // Formatos modernos con mejor compresión
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Tamaños para dispositivos
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tamaños para iconos
    minimumCacheTTL: 31536000, // Cache de 1 año para imágenes optimizadas
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimización de transpilación moderna
  experimental: {
    optimizePackageImports: ["@heroicons/react", "swiper"],
    optimizeCss: true, // Optimización de CSS
  },
  // Configuración de JavaScript moderno
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Headers para mejorar caché y seguridad
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Compresión optimizada
  compress: true,
  // Optimización de producción
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
