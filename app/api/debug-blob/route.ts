import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function GET() {
    try {
        const { url } = await put("test-blob.txt", "hello world", {
            access: "public",
            addRandomSuffix: false,
            allowOverwrite: true,
        });
        return NextResponse.json({ success: true, url });
    } catch (error: unknown) {
        const err = error as Error;
        return NextResponse.json({ success: false, error: err.message, stack: err.stack }, { status: 500 });
    }
}
export const dynamic = "force-dynamic";
