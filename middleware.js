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

  // Bloquear URLs con ?p=xxxx
  if (url.searchParams.has("p")) {
    const notFoundUrl = new URL("/404", req.url); // <-- importante
    return NextResponse.rewrite(notFoundUrl, { status: 404 });
  }

  // Bloquear rutas tipo WordPress
  if (wpPatterns.some((pattern) => pathname.startsWith(pattern))) {
    const notFoundUrl = new URL("/404", req.url); // <-- importante
    return NextResponse.rewrite(notFoundUrl, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
