/** @type {import('next-sitemap').IConfig} */

// Fecha de la última modificación real del contenido de cada ruta (YYYY-MM-DD).
// Actualizar solo cuando cambie el contenido de esa página; no se usa la fecha del build.
const BASE = "/organizacion-de-eventos";
const CATERING = `${BASE}/servicio-de-catering-para-eventos`;
const LASTMOD = {
  "/": "2026-11-14",
  "/about": "2026-11-14",
  "/contact": "2026-11-14",
  "/aviso-privacidad": "2026-11-14",
  [BASE]: "2026-10-08",
  [`${BASE}/eventos-corporativos`]: "2026-11-14",
  [`${BASE}/organizacion-de-bodas`]: "2026-11-14",
  [`${BASE}/pantallas-para-escenarios`]: "2026-11-14",
  [`${BASE}/stands-para-eventos`]: "2026-11-14",
  [`${BASE}/musica-para-eventos`]: "2026-11-14",
  [CATERING]: "2026-11-14",
  [`${CATERING}/taquizas`]: "2026-10-08",
  [`${CATERING}/box-lunch`]: "2026-10-08",
  [`${CATERING}/coffee-break`]: "2026-10-08",
  [`${CATERING}/canapes-y-bocadillos`]: "2026-10-08",
};

module.exports = {
  siteUrl: "https://latrincheramexico.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: ["/auth/*", "/api/*", "/admin/*", "/_next/*", "/404"],
  // Google ignora changefreq y priority: se omiten. lastmod viene del mapa de arriba.
  transform: async (config, path) => ({
    loc: path,
    lastmod: LASTMOD[path],
    alternateRefs: config.alternateRefs ?? [],
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/auth/", "/api/", "/admin/", "/_next/"],
      },
    ],
  },
};
