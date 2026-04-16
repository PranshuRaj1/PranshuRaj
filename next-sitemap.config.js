// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Your canonical site URL
  siteUrl: "https://www.pranshuraj.info",

  // Generate a robots.txt file
  generateRobotsTxt: true,

  // (Optional) Don't include these pages in the sitemap
  exclude: [
    "/api/*", // Exclude all API routes
    "/server-sitemap.xml", // Exclude the server-sitemap from the index, as it's manually added below
    "/*.svg",
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.webp",
    // Add any other pages you want to exclude (e.g., '/admin', '/profile')
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