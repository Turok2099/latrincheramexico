import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;

  // Patrones de rutas típicas de WordPress o URLs hackeadas
  const wpPatterns = [
    "/wp-",
    "/wp-content",
    "/wp-json",
    "/wp-admin",
    "/category/",
    "/tag/",
  ];

  // Bloquear URLs con parámetro ?p=xxxx (propio de WordPress)
  if (url.searchParams.has("p")) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Bloquear rutas que coincidan con patrones comunes de WordPress
  if (wpPatterns.some((pattern) => url.pathname.startsWith(pattern))) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.next();
}

