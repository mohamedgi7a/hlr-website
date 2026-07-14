import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { LocaleSite } from "@/components/LocaleSite";

export const metadata: Metadata = {
  title: "HLR | Human Resources Solutions",
  description: "Integrated human resources solutions for talent acquisition, recruitment, workforce supply, HR management, consulting, and post-employment support in Saudi Arabia.",
  alternates: { canonical: "/en", languages: { ar: "/", en: "/en" } }
};

export default function EnglishHome() {
  return <LocaleSite locale="en"><HomePage locale="en" /></LocaleSite>;
}
