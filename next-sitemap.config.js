module.exports = {
  siteUrl: "https://pranshuraj.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    includeTxtOptions: {
      includeNonIndexSitemaps: true,
    },
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", disallow: "/no-google/" },
    ],
    additionalSitemaps: ["https://pranshuraj.vercel.app/server-sitemap.xml"],
  },
};
