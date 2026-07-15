import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageKind, InternalPage, validPagePaths } from "@/components/InternalPage";
import { LocaleSite } from "@/components/LocaleSite";
import { services, t } from "@/data/content";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string[] }> };

function resolveSegments(raw: string[]) {
  const locale: Locale = raw[0] === "en" ? "en" : "ar";
  return { locale, segments: locale === "en" ? raw.slice(1) : raw };
}

export function generateStaticParams() {
  const base = validPagePaths.flatMap((path) => [{ slug: [path] }, { slug: ["en", path] }]);
  const detail = services.flatMap((service) => [{ slug: ["services", service.slug] }, { slug: ["en", "services", service.slug] }]);
  return [...base, ...detail];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale, segments } = resolveSegments(slug);
  const page = getPageKind(segments);
  if (!page) return {};
  const service = page.serviceSlug ? services.find((item) => item.slug === page.serviceSlug) : null;
  const generic = {
    about: { ar: "من نحن", en: "About" }, services: { ar: "خدماتنا", en: "Services" }, sectors: { ar: "القطاعات", en: "Sectors" }, process: { ar: "آلية عملنا", en: "Our Process" }, partners: { ar: "شركاء النجاح", en: "Partners" }, contact: { ar: "تواصل معنا", en: "Contact" }, "request-consultation": { ar: "طلب استشارة", en: "Request a Consultation" }, privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" }, terms: { ar: "الشروط والأحكام", en: "Terms & Conditions" }
  } as const;
  const title = service ? t(service.title, locale) : generic[page.kind as keyof typeof generic][locale];
  const canonical = `/${locale === "en" ? "en/" : ""}${segments.join("/")}`;
  const alternate = `/${locale === "ar" ? "en/" : ""}${segments.join("/")}`;
  return { title, description: service ? t(service.description, locale) : undefined, alternates: { canonical, languages: locale === "ar" ? { ar: canonical, en: alternate } : { ar: alternate, en: canonical } } };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const { locale, segments } = resolveSegments(slug);
  const page = getPageKind(segments);
  if (!page) notFound();
  return <LocaleSite locale={locale}><InternalPage locale={locale} kind={page.kind} serviceSlug={page.serviceSlug} /></LocaleSite>;
}
