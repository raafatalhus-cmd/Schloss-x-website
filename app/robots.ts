import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://schloss-x-website-fawn.vercel.app/sitemap.xml",
  };
}
