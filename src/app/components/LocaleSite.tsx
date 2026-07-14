import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { Footer } from "./Footer";
import { FloatingWhatsapp } from "./FloatingWhatsapp";
import { Header } from "./Header";

export function LocaleSite({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <div className="locale-root" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Header locale={locale} />
      {children}
      <FloatingWhatsapp locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
