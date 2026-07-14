import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/config/company";
import { navigation, services, sectors, t } from "@/data/content";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const address = ar ? company.addressAr : company.addressEn;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/brand/hlr-logo.webp" alt="HLR" width={184} height={123} />
          <p>{ar ? "حلول موارد بشرية مرنة تبدأ بفهم الاحتياج وتستمر حتى استقرار الخدمة." : "Flexible HR solutions that begin with understanding and continue through service stability."}</p>
          <Link className="footer-cta" href={localizedPath(locale, "/request-consultation")}>{ar ? "اطلب استشارة" : "Request a consultation"}<Arrow size={18} /></Link>
        </div>
        <div>
          <h3>{ar ? "الشركة" : "Company"}</h3>
          <ul>{navigation.slice(1).map((item) => <li key={item.href}><Link href={localizedPath(locale, item.href)}>{t(item.label, locale)}</Link></li>)}</ul>
        </div>
        <div>
          <h3>{ar ? "الخدمات" : "Services"}</h3>
          <ul>{services.map((service) => <li key={service.slug}><Link href={localizedPath(locale, `/services/${service.slug}`)}>{t(service.title, locale)}</Link></li>)}</ul>
        </div>
        <div>
          <h3>{ar ? "القطاعات" : "Sectors"}</h3>
          <ul>{sectors.slice(0, 6).map((sector) => <li key={sector.title.en}><Link href={localizedPath(locale, "/sectors")}>{t(sector.title, locale)}</Link></li>)}</ul>
        </div>
        <div>
          <h3>{ar ? "تواصل معنا" : "Contact"}</h3>
          <ul className="contact-list">
            {company.phone ? <li><Phone size={17} /><a href={`tel:${company.phone}`}>{company.phone}</a></li> : null}
            {company.email ? <li><Mail size={17} /><a href={`mailto:${company.email}`}>{company.email}</a></li> : null}
            {address ? <li><MapPin size={17} /><span>{address}</span></li> : null}
            <li><Arrow size={17} /><Link href={localizedPath(locale, "/contact")}>{ar ? "نموذج التواصل" : "Contact form"}</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{ar ? `جميع الحقوق محفوظة لشركة الحلول للموارد البشرية © ${new Date().getFullYear()}` : `© ${new Date().getFullYear()} Human Resources Solutions. All rights reserved.`}</p>
        <div><Link href={localizedPath(locale, "/privacy")}>{ar ? "سياسة الخصوصية" : "Privacy Policy"}</Link><Link href={localizedPath(locale, "/terms")}>{ar ? "الشروط والأحكام" : "Terms & Conditions"}</Link></div>
      </div>
    </footer>
  );
}
