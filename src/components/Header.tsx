"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation, t } from "@/data/content";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const isArabic = locale === "ar";
  const otherPath = isArabic
    ? pathname === "/" ? "/en" : `/en${pathname}`
    : pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [locale, isArabic]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>('a,button,[tabindex]:not([tabindex="-1"])');
    focusables?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && focusables?.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => {
    const expected = localizedPath(locale, href);
    if (href === "/") return pathname === expected;
    return pathname === expected || pathname.startsWith(`${expected}/`);
  };

  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <a className="skip-link" href="#main-content">{isArabic ? "انتقل إلى المحتوى" : "Skip to content"}</a>
      <div className="container header-inner">
        <Link href={localizedPath(locale)} className="brand" aria-label={isArabic ? "HLR الرئيسية" : "HLR home"}>
          <Image src="/brand/hlr-logo.webp" alt="HLR" width={132} height={88} priority />
        </Link>
        <nav className="desktop-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
          {navigation.map((item) => (
            <Link className={isActive(item.href) ? "active" : ""} key={item.href} href={localizedPath(locale, item.href)}>
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="language-link" href={otherPath} hrefLang={isArabic ? "en" : "ar"}>
            {isArabic ? "EN" : "ع"}
          </Link>
          <Link className="button button--primary header-cta" href={localizedPath(locale, "/request-consultation")}>
            {isArabic ? "اطلب استشارة" : "Request Consultation"}<Arrow size={17} aria-hidden="true" />
          </Link>
          <button className="menu-trigger" type="button" onClick={() => setOpen(true)} aria-label={isArabic ? "فتح القائمة" : "Open menu"} aria-expanded={open}>
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__backdrop" onClick={() => setOpen(false)} />
        <div className="mobile-menu__panel" ref={panelRef} role="dialog" aria-modal="true" aria-label={isArabic ? "قائمة الموقع" : "Site menu"} inert={!open ? true : undefined}>
          <div className="mobile-menu__top">
            <Image src="/brand/hlr-logo.webp" alt="HLR" width={122} height={82} />
            <button type="button" onClick={() => setOpen(false)} aria-label={isArabic ? "إغلاق القائمة" : "Close menu"}><X /></button>
          </div>
          <nav>
            {navigation.map((item, index) => (
              <Link style={{ "--menu-index": index } as React.CSSProperties} className={isActive(item.href) ? "active" : ""} onClick={() => setOpen(false)} key={item.href} href={localizedPath(locale, item.href)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{t(item.label, locale)}
              </Link>
            ))}
          </nav>
          <Link className="button button--primary mobile-consultation" onClick={() => setOpen(false)} href={localizedPath(locale, "/request-consultation")}>
            {isArabic ? "اطلب استشارة" : "Request a Consultation"}<Arrow size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
