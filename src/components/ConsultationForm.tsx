"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sectors, services, t } from "@/data/content";
import type { Locale } from "@/lib/i18n";

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(120),
  jobTitle: z.string().trim().max(100).optional(),
  phone: z.string().trim().regex(/^(?:\+?966|0)?5\d{8}$/),
  email: z.email(),
  service: z.string().min(1),
  sector: z.string().min(1),
  headcount: z.string().max(20).optional(),
  message: z.string().trim().min(10).max(3000),
  privacy: z.literal(true),
  website: z.string().max(0).optional()
});

type FormValues = z.infer<typeof schema>;

export function ConsultationForm({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { privacy: false as true, website: "" }
  });

  const errorText = ar ? "تحقق من هذا الحقل." : "Please check this field.";

  const onSubmit = async (data: FormValues) => {
    setStatus(null);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || (ar ? "تعذر إرسال الطلب الآن." : "The request could not be sent."));
      }
      setStatus({ type: "success", message: ar ? "تم إرسال طلبك بنجاح. سيتواصل معك الفريق عبر بياناتك المسجلة." : "Your request was sent successfully. The team will contact you using the details provided." });
      reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : (ar ? "حدث خطأ غير متوقع." : "An unexpected error occurred.") });
    }
  };

  return (
    <form className={`consultation-form ${compact ? "consultation-form--compact" : ""}`} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">{ar ? "الاسم الكامل" : "Full name"}</label>
          <input id="fullName" autoComplete="name" {...register("fullName")} aria-invalid={Boolean(errors.fullName)} />
          {errors.fullName ? <span className="field-error">{errorText}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="company">{ar ? "اسم الشركة أو المنشأة" : "Company or organization"}</label>
          <input id="company" autoComplete="organization" {...register("company")} aria-invalid={Boolean(errors.company)} />
          {errors.company ? <span className="field-error">{errorText}</span> : null}
        </div>
        {!compact ? <div className="field">
          <label htmlFor="jobTitle">{ar ? "المسمى الوظيفي" : "Job title"} <span>({ar ? "اختياري" : "optional"})</span></label>
          <input id="jobTitle" autoComplete="organization-title" {...register("jobTitle")} />
        </div> : null}
        <div className="field">
          <label htmlFor="phone">{ar ? "رقم الجوال" : "Mobile number"}</label>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05XXXXXXXX" {...register("phone")} aria-invalid={Boolean(errors.phone)} />
          {errors.phone ? <span className="field-error">{ar ? "أدخل رقم جوال سعوديًا صحيحًا." : "Enter a valid Saudi mobile number."}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="email">{ar ? "البريد الإلكتروني" : "Email address"}</label>
          <input id="email" type="email" inputMode="email" autoComplete="email" {...register("email")} aria-invalid={Boolean(errors.email)} />
          {errors.email ? <span className="field-error">{ar ? "أدخل بريدًا إلكترونيًا صحيحًا." : "Enter a valid email address."}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="service">{ar ? "الخدمة المطلوبة" : "Required service"}</label>
          <select id="service" defaultValue="" {...register("service")} aria-invalid={Boolean(errors.service)}>
            <option value="" disabled>{ar ? "اختر الخدمة" : "Select a service"}</option>
            {services.map((service) => <option key={service.slug} value={service.slug}>{t(service.title, locale)}</option>)}
            <option value="unsure">{ar ? "غير متأكد وأحتاج إلى استشارة" : "Not sure — I need advice"}</option>
          </select>
          {errors.service ? <span className="field-error">{errorText}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="sector">{ar ? "القطاع" : "Sector"}</label>
          <select id="sector" defaultValue="" {...register("sector")} aria-invalid={Boolean(errors.sector)}>
            <option value="" disabled>{ar ? "اختر القطاع" : "Select a sector"}</option>
            {sectors.map((sector) => <option key={sector.title.en} value={sector.title.en}>{t(sector.title, locale)}</option>)}
            <option value="other">{ar ? "قطاع آخر" : "Other"}</option>
          </select>
          {errors.sector ? <span className="field-error">{errorText}</span> : null}
        </div>
        {!compact ? <div className="field">
          <label htmlFor="headcount">{ar ? "العدد التقريبي للكفاءات" : "Approximate headcount"} <span>({ar ? "اختياري" : "optional"})</span></label>
          <input id="headcount" inputMode="numeric" {...register("headcount")} />
        </div> : null}
        <div className="field field--full">
          <label htmlFor="message">{ar ? "تفاصيل الاحتياج" : "Requirement details"}</label>
          <textarea id="message" {...register("message")} aria-invalid={Boolean(errors.message)} />
          {errors.message ? <span className="field-error">{ar ? "اكتب تفاصيل أوضح، بما لا يقل عن 10 أحرف." : "Add at least 10 characters of detail."}</span> : null}
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>
        <label className="privacy-check">
          <input type="checkbox" {...register("privacy")} />
          <span>{ar ? "أوافق على استخدام بياناتي للتواصل معي بخصوص هذا الطلب وفق سياسة الخصوصية." : "I agree to the use of my details to contact me about this request under the privacy policy."}</span>
        </label>
        {errors.privacy ? <span className="field-error field--full">{ar ? "الموافقة مطلوبة لإرسال النموذج." : "Consent is required to submit the form."}</span> : null}
        {status ? <div role="status" className={`form-status form-status--${status.type}`}>{status.message}</div> : null}
        <button className="button button--primary form-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <LoaderCircle className="spin" size={18} /> : null}
          {isSubmitting ? (ar ? "جارٍ الإرسال" : "Sending") : (ar ? "إرسال الطلب" : "Submit Request")}
          {!isSubmitting ? <Arrow size={18} /> : null}
        </button>
      </div>
    </form>
  );
}
