/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://latrincheramexico.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: ["/auth/*", "/api/*", "/admin/*", "/_next/*", "/404"],
  // "/" se renderiza de forma dinámica (usa searchParams), por lo que next-sitemap no la detecta sola
  additionalPaths: async (config) => [await config.transform(config, "/")],
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
