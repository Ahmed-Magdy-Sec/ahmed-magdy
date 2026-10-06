import { NextResponse } from "next/server";

const hits = new Map<string, number[]>(); // in-memory limiter; use Redis/Upstash for multi-instance deploys
const TYPES = ["Web Application Pentest", "Network Security Assessment", "Vulnerability Assessment", "Security Testing", "Other"];
const clean = (s: unknown, max: number) => String(s ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  if (clean(body.website, 50)) return NextResponse.json({ ok: true }); // honeypot

  const name = clean(body.name, 100), email = clean(body.email, 200), type = clean(body.type, 60), message = clean(body.message, 3000).replace(/\s+/g, " ");
  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email.";
  if (!TYPES.includes(type)) errors.type = "Select a project type.";
  if (message.length < 20) errors.message = "Message must be at least 20 characters.";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) { console.error("Contact email env vars not configured"); return NextResponse.json({ error: "Contact service is not configured." }, { status: 503 }); }
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: email, subject: `Portfolio inquiry: ${type}`, html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>${esc(type)}</p><p>${esc(message)}</p>` }) });
  if (!r.ok) return NextResponse.json({ error: "Could not send message." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
