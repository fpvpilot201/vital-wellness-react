import { NextRequest, NextResponse } from "next/server";
import { put, list } from "@vercel/blob";
import { cookies } from "next/headers";

const BLOGS_BLOB_PATH = "blogs-data.json";

interface BlogPost {
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

async function requireAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  return !!token?.value;
}

async function getBlogData(): Promise<BlogPost[]> {
  try {
    const { blobs } = await list({ prefix: BLOGS_BLOB_PATH, limit: 1 });
    if (blobs.length === 0) return [];
    const response = await fetch(blobs[0].url, { cache: "no-store" });
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

async function saveBlogData(posts: BlogPost[]) {
  await put(BLOGS_BLOB_PATH, JSON.stringify(posts), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function GET() {
  const posts = await getBlogData();
  const publishedPosts = posts.filter((p) => p.published);
  return NextResponse.json(publishedPosts, {
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
  });
}

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  if (body.action === "get-all") {
    const posts = await getBlogData();
    return NextResponse.json(posts);
  }

  if (body.action === "bulk-save") {
    try {
      if (!Array.isArray(body.posts)) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
      }
      await saveBlogData(body.posts);
      return NextResponse.json({ success: true, count: body.posts.length });
    } catch (err) {
      console.error("Bulk save error:", err);
      return NextResponse.json({ error: "Failed to save posts" }, { status: 500 });
    }
  }

  if (body.action === "delete") {
    const posts = await getBlogData();
    const updated = posts.filter((p) => p.id !== body.id);
    await saveBlogData(updated);
    return NextResponse.json({ success: true });
  }

  if (body.action === "toggle") {
    const posts = await getBlogData();
    const post = posts.find((p) => p.id === body.id);
    if (post) {
      post.published = !post.published;
      await saveBlogData(posts);
    }
    return NextResponse.json({ success: true });
  }

  if (!body.title || typeof body.title !== "string" || body.title.length > 500) {
    return NextResponse.json({ error: "Title is required (max 500 chars)" }, { status: 400 });
  }

  const title = body.title.trim().slice(0, 500);
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const newPost: BlogPost = {
    id: body.id || crypto.randomUUID(),
    title,
    slug,
    excerpt: typeof body.excerpt === "string" ? body.excerpt.slice(0, 2000) : "",
    content: typeof body.content === "string" ? body.content.slice(0, 100000) : "",
    image: typeof body.image === "string" ? body.image.slice(0, 2000) : "",
    author: typeof body.author === "string" ? body.author.slice(0, 200) : "iVital Wellness",
    date: body.date || new Date().toISOString().split("T")[0],
    published: body.published ?? true,
  };

  const posts = await getBlogData();

  const existingIndex = posts.findIndex((p) => p.id === newPost.id);
  if (existingIndex >= 0) {
    posts[existingIndex] = newPost;
  } else {
    posts.unshift(newPost);
  }

  try {
    await saveBlogData(posts);
    return NextResponse.json({ success: true, post: newPost });
  } catch (err) {
    console.error("Blog save error:", err);
    return NextResponse.json({ error: "Failed to save post" }, { status: 500 });
  }
}
