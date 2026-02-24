import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const TOKEN_NAME = "admin_token";
const LOGIN_ATTEMPTS = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function generateToken(password: string): string {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "__ivital_admin_secret__" + Date.now());
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    hash = ((hash << 5) - hash + data[i]) | 0;
  }
  return Math.abs(hash).toString(36) + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  const attempt = LOGIN_ATTEMPTS.get(ip);
  if (attempt && attempt.count >= MAX_ATTEMPTS) {
    const timeSince = Date.now() - attempt.lastAttempt;
    if (timeSince < LOCKOUT_DURATION) {
      return NextResponse.json(
        { error: "Too many attempts. Try again later." },
        { status: 429 }
      );
    }
    LOGIN_ATTEMPTS.delete(ip);
  }

  let password: string;
  try {
    const body = await request.json();
    password = body.password;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!password || typeof password !== "string" || password.length > 200) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
  }

  if (password !== adminPassword) {
    const current = LOGIN_ATTEMPTS.get(ip) || { count: 0, lastAttempt: 0 };
    LOGIN_ATTEMPTS.set(ip, { count: current.count + 1, lastAttempt: Date.now() });
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  LOGIN_ATTEMPTS.delete(ip);

  const token = generateToken(password);
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_NAME);
  return NextResponse.json({ authenticated: !!token?.value });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_NAME);
  return NextResponse.json({ success: true });
}
