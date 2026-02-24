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
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message, stack: error.stack }, { status: 500 });
    }
}
export const dynamic = "force-dynamic";
