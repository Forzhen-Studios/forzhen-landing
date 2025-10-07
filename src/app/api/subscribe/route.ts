// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/email-template";

const Body = z.object({
  name: z.string().min(2),
  email: z.email(),
  company: z.string().max(0).optional(), // honeypot
});

const sql = neon(process.env.DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = Body.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.message },
        { status: 400 }
      );
    }

    // Honeypot: pretend success to avoid signaling bots
    if (parsed.data.company && parsed.data.company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id serial PRIMARY KEY,
        email text UNIQUE NOT NULL,
        name text,
        subscribed_at timestamptz NOT NULL DEFAULT now(),
        source text,
        consent_at timestamptz
      )
    `;

    await sql`
      INSERT INTO waitlist (email, name, source, consent_at)
      VALUES (${parsed.data.email}, ${parsed.data.name},
              ${"notify-dialog"}, now())
      ON CONFLICT (email) DO NOTHING
    `;

    // Optional: send immediate confirmation (don't fail request if it errors)
    try {
      const result = await resend.emails.send({
        from: "Forzhen Studios <updates@forzhenstudios.com>",
        to: parsed.data.email,
        subject: "You’re on the list 🎉",
        react: EmailTemplate({
          firstName: parsed.data.name,
          subscriberEmail: parsed.data.email,
        }),
      });
      console.log("Resend result:", result);

      if (result.error) {
        console.error("Resend returned error:", result.error);
      }
    } catch (e) {
      console.error("Resend send error", e);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
