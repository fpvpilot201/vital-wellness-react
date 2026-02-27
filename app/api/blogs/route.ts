import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getBlogData, saveBlogData, type BlogPost } from "../../lib/blog";

export { getBlogData, normalizeImagePath } from "../../lib/blog";

async function requireAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  return !!token?.value;
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
    if (!Array.isArray(body.posts)) {
      return NextResponse.json({ error: "Invalid posts data" }, { status: 400 });
    }
    await saveBlogData(body.posts);
    return NextResponse.json({ success: true, count: body.posts.length });
  }

  if (body.action === "delete") {
    let posts = await getBlogData();
    posts = posts.filter((p) => p.id !== body.id);
    await saveBlogData(posts);
    return NextResponse.json({ success: true });
  }

  if (body.action === "toggle") {
    const posts = await getBlogData();
    const post = posts.find((p) => p.id === body.id);
    if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
    post.published = !post.published;
    await saveBlogData(posts);
    return NextResponse.json({ success: true, published: post.published });
  }

  const { id, title, slug, excerpt, content, image, author, date, published } = body;
  if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

  const finalSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const newPost: BlogPost = {
    id: id || Date.now().toString(),
    title,
    slug: finalSlug,
    excerpt,
    content: content || "",
    image: image || "",
    author: author || "iVital Wellness",
    date: date || new Date().toISOString().split("T")[0],
    published: published !== undefined ? published : true,
  };

  const posts = await getBlogData();
  if (id) {
    const idx = posts.findIndex((p) => p.id === id);
    if (idx >= 0) {
      posts[idx] = newPost;
    } else {
      posts.push(newPost);
    }
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
