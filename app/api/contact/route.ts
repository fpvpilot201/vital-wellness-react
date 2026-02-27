import { NextRequest, NextResponse } from "next/server";

const SUBMISSIONS = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_FIELD_LENGTH = 5000;
const MAX_BODY_SIZE = 50000; // ~50KB

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function sanitizeField(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.slice(0, MAX_FIELD_LENGTH).trim();
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  const entry = SUBMISSIONS.get(ip);
  if (entry) {
    if (Date.now() - entry.windowStart > RATE_WINDOW) {
      SUBMISSIONS.set(ip, { count: 1, windowStart: Date.now() });
    } else if (entry.count >= RATE_LIMIT) {
      return NextResponse.json({ error: "Too many submissions. Try again later." }, { status: 429 });
    } else {
      entry.count++;
    }
  } else {
    SUBMISSIONS.set(ip, { count: 1, windowStart: Date.now() });
  }

  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_SIZE) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const body = JSON.parse(raw);
    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const sanitized: Record<string, string> = {};
    for (const [key, value] of Object.entries(body)) {
      sanitized[sanitizeField(key)] = sanitizeField(value);
    }

    // Server-side Bot Validation (Honeypot)
    if (sanitized.website_url) {
      console.warn(`[BOT PROTECTION] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({ error: "Bot detected. Access denied." }, { status: 403 });
    }

    const isInsurance = body.form_type === 'insurance';
    const rawWebhookPath = isInsurance
      ? process.env.INSURANCE_SHEET_WEBHOOK_URL
      : process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!rawWebhookPath) {
      console.error(`Webhook URL not configured for ${isInsurance ? 'Insurance' : 'Contact'} form`);
      return NextResponse.json({ success: true });
    }

    await fetch(rawWebhookPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...sanitized,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
