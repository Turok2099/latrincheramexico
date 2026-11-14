import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname.toLowerCase();

  // Evitar bucles y excluir assets estáticos
  if (
    pathname === "/404" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  const wpPatterns = [
    "/wp-",
    "/wp-content",
    "/wp-json",
    "/wp-admin",
    "/category/",
    "/tag/",
  ];

  const rewriteTo404 = () => {
    const rewriteUrl = req.nextUrl.clone();
    rewriteUrl.pathname = "/404";
    rewriteUrl.search = "";

    return NextResponse.rewrite(rewriteUrl, { status: 404 });
  };

  // Bloquear URLs con ?p=xxxx
  if (url.searchParams.has("p")) {
    return rewriteTo404();
  }

  // Bloquear rutas tipo WordPress
  if (wpPatterns.some((pattern) => pathname.startsWith(pattern))) {
    return rewriteTo404();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
