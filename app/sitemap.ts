import type { MetadataRoute } from "next";
import { getBlogData } from "./lib/blog";
import { SITE_URL } from "./lib/site";
import { disorders } from "./treatments/data";

interface BlogPost {
    id: string;
    slug?: string;
    date?: string;
    published?: boolean;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date().toISOString();

    const routes = [
        { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
        { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/contact-us", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/residential-treatment", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/residential-treatment/30-day-program", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/residential-treatment/60-day-program", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/residential-treatment/90-day-program", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/detox/drug-detox-santa-clarita", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/detox/alcohol-detox-santa-clarita", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/residential-treatment/drug-rehabilitation-santa-clarita", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/residential-treatment/alcohol-rehabilitation-santa-clarita", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/detox/prescription-drug-detox", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/residential-treatment/prescription-drug-rehabilitation", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/treatments", priority: 0.8, changeFrequency: "monthly" as const },
        ...disorders.map((d) => ({
            path: `/treatments/${d.slug}`,
            priority: 0.8,
            changeFrequency: "monthly" as const,
        })),
        { path: "/detox/treatment-methods", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/detox/supplemental-treatments", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/insurance-verification", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/admissions", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/about/facility", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
        { path: "/booking", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    ];

    const staticRoutes = routes.map((route) => ({
        url: `${SITE_URL}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const posts = await getBlogData();
        blogRoutes = posts
            .filter((post: BlogPost) => post.published !== false)
            .map((post: BlogPost) => {
                const slug = post.slug || post.id;
                if (!slug) return null;
                const parsedDate = post.date ? new Date(post.date) : null;
                const lastModified =
                    parsedDate && !Number.isNaN(parsedDate.getTime())
                        ? parsedDate.toISOString()
                        : now;

                return {
                    url: `${SITE_URL}/blog/${slug}`,
                    lastModified,
                    changeFrequency: "weekly" as const,
                    priority: 0.6,
                };
            })
            .filter(Boolean) as MetadataRoute.Sitemap;
    } catch {
        blogRoutes = [];
    }

    return [...staticRoutes, ...blogRoutes];
}
