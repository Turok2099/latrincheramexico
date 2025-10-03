/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://latrincheramexico.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: ["/auth/*", "/api/*", "/admin/*", "/_next/*"],
  additionalPaths: async (config) => {
    const baseUrl = config.siteUrl;

    // Rutas adicionales importantes
    const additionalRoutes = [
      {
        loc: `${baseUrl}/organizacion-de-eventos`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: `${baseUrl}/organizacion-de-eventos/servicio-de-catering-para-eventos`,
        changefreq: "weekly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: `${baseUrl}/darkkitchen/menu`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
    ];

    return additionalRoutes;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/auth/", "/api/", "/admin/", "/_next/"],
      },
    ],
    additionalSitemaps: ["https://latrincheramexico.com/sitemap.xml"],
  },
};
