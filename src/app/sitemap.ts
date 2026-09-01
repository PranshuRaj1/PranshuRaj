import type { MetadataRoute } from "next";
import projectDetails from "@/data/projectDetails";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pranshuraj.vercel.app";

  return [
    { url: base, lastModified: new Date() },
    ...projectDetails.map(({ slug }) => ({
      url: base + "/projects/" + slug,
      lastModified: new Date(),
    })),
  ];
}
