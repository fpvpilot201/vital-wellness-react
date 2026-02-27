import { list } from "@vercel/blob";
import { promises as fs } from 'fs';
import path from 'path';

const BLOGS_BLOB_PATH = "blogs-data.json";

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    date: string;
    published: boolean;
}

export async function getBlogData(): Promise<BlogPost[]> {
    try {
        const { blobs } = await list({ prefix: BLOGS_BLOB_PATH, limit: 1 });
        if (blobs.length > 0) {
            const response = await fetch(blobs[0].url, { cache: "no-store" });
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0) return data;
            }
        }
    } catch (err) {
        console.error("Vercel Blob failed, falling back to local json", err);
    }

    // Fallback to local blog.json
    try {
        const filePath = path.join(process.cwd(), 'public', 'blog.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        // Map old format to new format
        interface OldBlogPost { id?: string | number; title?: string; excerpt?: string; content?: string; image?: string; author?: string; date?: string; }
        return (data.blogPosts || []).map((p: OldBlogPost) => ({
            id: p.id ? p.id.toString() : Date.now().toString(),
            title: p.title || "",
            slug: p.title ? p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : "",
            excerpt: p.excerpt || "",
            content: p.content || "",
            image: p.image || "",
            author: p.author || "iVital Wellness",
            date: p.date || "2024-01-01",
            published: true,
        }));
    } catch (e) {
        console.error("Failed to read fallback blog.json", e);
        return [];
    }
}

export async function saveBlogData(posts: BlogPost[]) {
    const { put } = await import("@vercel/blob");
    await put(BLOGS_BLOB_PATH, JSON.stringify(posts), {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false,
        allowOverwrite: true,
    });
}

export function normalizeImagePath(imagePath: string): string {
    if (!imagePath) return "/photos/oak.webp";
    if (imagePath.startsWith("http")) return imagePath;
    if (imagePath.startsWith("/")) return imagePath;
    if (imagePath.includes("/photos/")) {
        const parts = imagePath.split("/photos/");
        return `/photos/${parts[parts.length - 1]}`;
    }
    if (imagePath.startsWith("photos/")) return `/${imagePath}`;
    return `/photos/${imagePath}`;
}
