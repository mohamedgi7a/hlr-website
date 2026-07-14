# HLR Corporate Website

موقع مؤسسي ثنائي اللغة لشركة HLR — الحلول للموارد البشرية، مبني باستخدام Next.js وTypeScript.

الخط العربي المستخدم: Alexandria، وهو البديل المفتوح الأقرب بصريًا لخط Shamel Sans One الظاهر في المرجع. الخط الإنجليزي: Inter.

## التشغيل الأسهل على Windows

فك الضغط ثم اضغط مرتين على ملف `START-HLR.bat`. سيقوم بتثبيت المتطلبات في أول تشغيل ويفتح الموقع تلقائيًا.

## التشغيل

```bash
npm install
npm run dev -- -H 127.0.0.1
```

ثم افتح `http://127.0.0.1:3000`.

## البناء الإنتاجي

```bash
npm run typecheck
npm run build
npm run start -- -H 127.0.0.1
```

## الإعداد قبل النشر

انسخ `.env.example` إلى `.env.local` ثم أضف:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
HLR_FORM_ENDPOINT=https://your-secure-form-endpoint.example
```

- `NEXT_PUBLIC_SITE_URL`: الدومين الحقيقي للموقع، ويستخدم في canonical وsitemap وOpen Graph.
- `HLR_FORM_ENDPOINT`: رابط استقبال POST آمن للنموذج. لا تضع secret داخل الواجهة.

## بيانات الشركة

تُعدّل بيانات الهاتف والواتساب والبريد والعنوان وروابط التواصل من:

`src/config/company.ts`

العناصر الفارغة لا تظهر في الواجهة. زر واتساب لا يظهر قبل إضافة رقم صحيح.

## المحتوى والصور

- المحتوى العربي والإنجليزي والخدمات والقطاعات والقيم موجود في `src/data/content.ts`.
- الشعار الرسمي موجود في `public/brand/hlr-logo.webp` ولم تتم إعادة رسمه أو تغيير ألوانه.
- صور القطاعات قابلة للاستبدال من المسارات الموجودة في بيانات القطاعات.
- لا توجد شعارات عملاء أو أرقام أو بيانات اتصال مختلقة.

## نموذج الاستشارة

النموذج يتحقق من المدخلات، يدعم رقم الجوال السعودي، ويحتوي على honeypot وrate limiting أساسي داخل مسار API. إذا لم يكن `HLR_FORM_ENDPOINT` موجودًا، يعرض النموذج خطأ إعداد صريحًا ولا يعرض نجاحًا وهميًا.

## أهم المسارات

- `/` و`/en`
- `/about` و`/en/about`
- `/services` وصفحات الخدمات الست
- `/sectors`
- `/process`
- `/partners`
- `/contact`
- `/request-consultation`

## التحقق المنفذ

- TypeScript: ناجح.
- Production build: ناجح.
- 28 مسارًا عربيًا وإنجليزيًا: HTTP 200.
- اختبار النموذج دون endpoint: HTTP 503 برسالة إعداد واضحة، كما هو مقصود.
