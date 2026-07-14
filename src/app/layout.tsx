import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource/alexandria/400.css";
import "@fontsource/alexandria/500.css";
import "@fontsource/alexandria/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@/styles/globals.css";
import { siteUrl } from "@/config/company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "HLR | حلول الموارد البشرية للمنشآت", template: "%s | HLR" },
  description: "حلول متكاملة في استقطاب المواهب، التوظيف والتعاقد، تأجير وتوريد الكفاءات، إدارة الموارد البشرية والاستشارات في المملكة العربية السعودية.",
  icons: { icon: "/brand/favicon.png" },
  openGraph: { type: "website", siteName: "HLR", images: [{ url: "/brand/og-image.jpg", width: 1200, height: 630, alt: "HLR Human Resources Solutions" }] },
  twitter: { card: "summary_large_image" }
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "HLR Human Resources Solutions",
  alternateName: "شركة الحلول للموارد البشرية",
  url: siteUrl,
  logo: `${siteUrl}/brand/hlr-logo.webp`,
  slogan: "Empower People. Support Business.",
  areaServed: "SA"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} /></body></html>;
}
