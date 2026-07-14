import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { LocaleSite } from "@/components/LocaleSite";

export const metadata: Metadata = {
  title: "HLR | حلول الموارد البشرية للمنشآت",
  description: "حلول متكاملة في استقطاب المواهب، التوظيف والتعاقد، تأجير وتوريد الكفاءات، إدارة الموارد البشرية والاستشارات في المملكة العربية السعودية.",
  alternates: { canonical: "/", languages: { ar: "/", en: "/en" } }
};

export default function ArabicHome() {
  return <LocaleSite locale="ar"><HomePage locale="ar" /></LocaleSite>;
}
