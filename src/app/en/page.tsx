import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { LocaleSite } from "@/components/LocaleSite";

export const metadata: Metadata = {
  title: "HLR | Human Resources Solutions",
  description: "Integrated Saudi business solutions covering HR, company setup and licensing, government relations, payroll, accounting and tax, consulting, and manpower outsourcing.",
  alternates: { canonical: "/en", languages: { ar: "/", en: "/en" } }
};

export default function EnglishHome() {
  return <LocaleSite locale="en"><HomePage locale="en" /></LocaleSite>;
}
