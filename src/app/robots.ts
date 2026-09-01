import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pranshuraj.vercel.app/sitemap.xml",
    host: "https://pranshuraj.vercel.app",
  };
}
