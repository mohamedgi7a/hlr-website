"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/config/company";
import type { Locale } from "@/lib/i18n";

export function FloatingWhatsapp({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!company.whatsapp) return;
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.72);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!company.whatsapp) return null;
  const text = locale === "ar" ? "مرحبًا، أرغب في معرفة المزيد عن حلول HLR للموارد البشرية." : "Hello, I would like to learn more about HLR human resources solutions.";
  const number = company.whatsapp.replace(/\D/g, "");
  return (
    <a className={`floating-whatsapp ${visible ? "floating-whatsapp--visible" : ""}`} href={`https://wa.me/${number}?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer" aria-label={locale === "ar" ? "تواصل عبر واتساب" : "Contact us on WhatsApp"}>
      <MessageCircle aria-hidden="true" />
      <span>{locale === "ar" ? "تواصل عبر واتساب" : "WhatsApp"}</span>
    </a>
  );
}
