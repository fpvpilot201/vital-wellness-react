import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

const MAX_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/heic", "application/pdf"];
const UPLOADS = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 100);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const entry = UPLOADS.get(ip);
  if (entry) {
    if (Date.now() - entry.windowStart > RATE_WINDOW) {
      UPLOADS.set(ip, { count: 1, windowStart: Date.now() });
    } else if (entry.count >= RATE_LIMIT) {
      return NextResponse.json({ error: "Too many uploads. Try again later." }, { status: 429 });
    } else {
      entry.count++;
    }
  } else {
    UPLOADS.set(ip, { count: 1, windowStart: Date.now() });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const safeName = sanitizeFilename(file.name);
    const blob = await put(`insurance-cards/${Date.now()}-${safeName}`, file, {
      access: "public",
      contentType: file.type,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Insurance card upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
