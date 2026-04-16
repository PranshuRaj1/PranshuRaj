// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Your canonical site URL
  siteUrl: "https://www.pranshuraj.info",

  // Generate a robots.txt file
  generateRobotsTxt: true,

  // Don't include these in the sitemap
  exclude: [
    "/api/*",    // API routes
    "/*.svg",    // SVG assets (prevents icon.svg appearing as a page)
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.webp",
    "/*.ico",
  ],

  // Customize the robots.txt file
  robotsTxtOptions: {
    // Define crawling policies for different bots
    policies: [
      { userAgent: "*", allow: "/" },
      // Example: Disallow a specific bot from a directory
      // { userAgent: "AhrefsBot", disallow: ["/"] },
      // Example: Disallow Google from a specific directory
      // { userAgent: "Googlebot", disallow: "/private/" },
    ],

    // List all your sitemaps, especially if you have dynamic ones
    additionalSitemaps: [
      "https://www.pranshuraj.info/sitemap.xml", // Your static sitemap
    ],
  },
};