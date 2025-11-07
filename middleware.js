import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname.toLowerCase();

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
    return new NextResponse("Not found", {
      status: 404,
      headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" },
    });
  }

  // Bloquear rutas que coincidan con patrones comunes de WordPress
  if (wpPatterns.some((pattern) => pathname.startsWith(pattern))) {
    return new NextResponse("Not found", {
      status: 404,
      headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
