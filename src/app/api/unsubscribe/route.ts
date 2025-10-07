// app/api/unsubscribe/route.ts
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";
import crypto from "crypto";

const sql = neon(process.env.DATABASE_URL!);

const QuerySchema = z.object({
  email: z.string().email(),
  token: z.string().min(1),
});

// Generate token (use same logic when creating subscribe link)
function generateToken(email: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET || "your-secret-key";
  return crypto
    .createHmac("sha256", secret)
    .update(email)
    .digest("hex")
    .slice(0, 32);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = QuerySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { email, token } = parsed.data;

    // Verify token
    const validToken = generateToken(email);
    if (token !== validToken) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }

    // Remove from database
    const result = await sql`
      DELETE FROM waitlist 
      WHERE email = ${email}
      RETURNING email
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Successfully unsubscribed",
    });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json(
      { error: "Failed to unsubscribe" },
      { status: 500 }
    );
  }
}
