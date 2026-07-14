import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/company";
import { services } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/sectors", "/process", "/partners", "/contact", "/request-consultation", ...services.map((service) => `/services/${service.slug}`)];
  return paths.flatMap((path) => [
    { url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? .8 : 1 },
    { url: `${siteUrl}/en${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? .75 : .9 }
  ]);
}
