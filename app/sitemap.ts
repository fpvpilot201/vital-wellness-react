import type { MetadataRoute } from "next";

const BASE_URL = "https://ivital-wellness-react.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/programs", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/drug-detox", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/medical-alcohol-detox", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/drug-rehab", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/alcohol-rehab", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/prescription-drug-detox", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/prescription-rehab", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/what-we-treat", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/treatment-methods", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/supplemental-treatments", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insurance-verification", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/admissions-information", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/facility", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/booking", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
