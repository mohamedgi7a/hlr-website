import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(120),
  jobTitle: z.string().trim().max(100).optional(),
  phone: z.string().trim().regex(/^(?:\+?966|0)?5\d{8}$/),
  email: z.email(),
  service: z.string().min(1).max(100),
  sector: z.string().min(1).max(100),
  headcount: z.string().max(20).optional(),
  message: z.string().trim().min(10).max(3000),
  privacy: z.literal(true),
  website: z.string().max(0).optional(),
  locale: z.enum(["ar", "en"])
});

const requests = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const windowStart = now - 60_000;
  const recent = (requests.get(key) || []).filter((time) => time > windowStart);
  if (recent.length >= 4) return true;
  recent.push(now);
  requests.set(key, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(key)) {
    return NextResponse.json({ message: "عدد المحاولات كبير. حاول بعد دقيقة." }, { status: 429 });
  }

  const raw = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ message: "بيانات النموذج غير مكتملة أو غير صحيحة." }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const endpoint = process.env.HLR_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json({ message: parsed.data.locale === "ar" ? "قناة استقبال الطلبات غير مهيأة بعد. أضف HLR_FORM_ENDPOINT في إعدادات الخادم." : "The form delivery channel is not configured. Add HLR_FORM_ENDPOINT to the server environment." }, { status: 503 });
  }

  try {
    const forwarded = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `HLR consultation — ${parsed.data.company}`,
        ...parsed.data,
        website: undefined,
        submittedAt: new Date().toISOString()
      }),
      signal: AbortSignal.timeout(12_000)
    });
    if (!forwarded.ok) throw new Error(`Endpoint responded with ${forwarded.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: parsed.data.locale === "ar" ? "تعذر إرسال الطلب الآن. حاول مرة أخرى لاحقًا." : "The request could not be delivered. Please try again later." }, { status: 502 });
  }
}
