import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { ConsultationForm } from "./ConsultationForm";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { faqs, processSteps, sectors, services, story, t, values } from "@/data/content";
import { localizedPath, type Locale } from "@/lib/i18n";

type PageKind = "about" | "services" | "sectors" | "process" | "partners" | "contact" | "request-consultation" | "privacy" | "terms" | "service";

export const validPagePaths = ["about", "services", "sectors", "process", "partners", "contact", "request-consultation", "privacy", "terms"];

export function getPageKind(segments: string[]): { kind: PageKind; serviceSlug?: string } | null {
  if (segments.length === 1 && validPagePaths.includes(segments[0])) return { kind: segments[0] as Exclude<PageKind, "service"> };
  if (segments.length === 2 && segments[0] === "services" && services.some((service) => service.slug === segments[1])) return { kind: "service", serviceSlug: segments[1] };
  return null;
}

const pageMeta = {
  about: {
    ar: ["من نحن", "شريك موارد بشرية يفهم طبيعة منشأتك قبل أن يقترح الحل."],
    en: ["About HLR", "An HR partner that understands your organization before recommending a solution."]
  },
  services: {
    ar: ["خدماتنا", "حلول متكاملة تغطي الاستقطاب والتوظيف والتشغيل والمتابعة."],
    en: ["Our Services", "Integrated solutions across acquisition, recruitment, workforce operations, and follow-up."]
  },
  sectors: {
    ar: ["القطاعات التي نخدمها", "خبرة مرنة تتكيف مع اختلاف بيئات العمل ومتطلبات الكفاءات."],
    en: ["Sectors We Serve", "Flexible expertise shaped around different operating environments and talent needs."]
  },
  process: {
    ar: ["آلية عملنا", "منهجية واضحة تضمن جودة الاختيار وكفاءة التنفيذ والمتابعة."],
    en: ["Our Process", "A clear method that supports selection quality, efficient delivery, and follow-up."]
  },
  partners: {
    ar: ["شركاء النجاح", "نفخر بشراكاتنا الاستراتيجية مع نخبة من الجهات التي تسهم في تحقيق رؤيتنا وتطوير أعمالنا."],
    en: ["Success Partners", "We are proud of strategic partnerships with leading organizations that support our vision and business growth."]
  },
  contact: {
    ar: ["تواصل معنا", "شاركنا احتياج منشأتك عبر نموذج واضح وآمن."],
    en: ["Contact Us", "Share your organization’s requirements through a clear, secure form."]
  },
  "request-consultation": {
    ar: ["طلب استشارة", "أرسل تفاصيل احتياجك لنحدد الحل الأنسب لمنشأتك."],
    en: ["Request a Consultation", "Tell us what you need so the right solution can be identified."]
  },
  privacy: {
    ar: ["سياسة الخصوصية", "كيف نتعامل مع البيانات التي ترسلها عبر الموقع."],
    en: ["Privacy Policy", "How data submitted through the website is handled."]
  },
  terms: {
    ar: ["الشروط والأحكام", "ضوابط استخدام موقع HLR ومحتواه."],
    en: ["Terms & Conditions", "Terms governing the use of the HLR website and its content."]
  }
} as const;

function InnerHero({ locale, title, description, parent }: { locale: Locale; title: string; description: string; parent?: string }) {
  const ar = locale === "ar";
  return (
    <section className="inner-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label={ar ? "مسار الصفحة" : "Breadcrumb"}>
          <Link href={localizedPath(locale)}>{ar ? "الرئيسية" : "Home"}</Link><span>/</span>
          {parent ? <><Link href={localizedPath(locale, "/services")}>{ar ? "الخدمات" : "Services"}</Link><span>/</span></> : null}
          <span>{title}</span>
        </nav>
        <h1>{title}</h1><p>{description}</p>
      </div>
    </section>
  );
}

export function InternalPage({ locale, kind, serviceSlug }: { locale: Locale; kind: PageKind; serviceSlug?: string }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;

  if (kind === "service" && serviceSlug) {
    const service = services.find((item) => item.slug === serviceSlug)!;
    return (
      <main id="main-content">
        <InnerHero locale={locale} parent="services" title={t(service.title, locale)} description={t(service.description, locale)} />
        <section className="section">
          <div className="container content-grid">
            <aside className="content-aside">
              <span>{ar ? "قيمة الخدمة" : "Service Value"}</span>
              <h2>{ar ? "حل عملي مبني على احتياج واضح." : "A practical solution built around a clear need."}</h2>
              <p>{ar ? "نحدد نطاق الخدمة بعد فهم طبيعة المنشأة والوظائف والقطاع، دون وعود أو مدد أو أسعار غير مؤكدة." : "Scope is defined after understanding the organization, roles, and sector—without unverified timelines, prices, or commitments."}</p>
              <Link className="button button--primary" href={localizedPath(locale, "/request-consultation")}>{ar ? "ناقش احتياجك" : "Discuss Your Needs"}<Arrow size={18} /></Link>
            </aside>
            <div className="rich-content">
              <article className="rich-card"><Icon name={service.icon} size={31} /><h3>{ar ? "المشكلات التي تعالجها" : "Problems this service addresses"}</h3><ul>{service.problems.map((item) => <li key={item.en}>{t(item, locale)}</li>)}</ul></article>
              <article className="rich-card"><h3>{ar ? "ما الذي نقدمه" : "What we provide"}</h3><ul>{service.deliverables.map((item) => <li key={item.en}>{t(item, locale)}</li>)}</ul></article>
              <article className="rich-card"><h3>{ar ? "خطوات التنفيذ" : "Delivery steps"}</h3><ul>{processSteps.slice(0, 4).map((step) => <li key={step.title.en}><strong>{t(step.title, locale)}:</strong> {t(step.description, locale)}</li>)}</ul></article>
            </div>
          </div>
        </section>
        <section className="section services-section">
          <div className="container consultation-layout">
            <div className="form-intro"><span className="eyebrow"><i />{ar ? "ابدأ الآن" : "Start now"}</span><h2>{ar ? "أرسل احتياجك مباشرة." : "Send your requirements directly."}</h2><p>{ar ? "لن يعرض النموذج نجاحًا وهميًا. يجب ربط قناة الإرسال في إعدادات الخادم قبل الإطلاق." : "The form never displays a false success. A server delivery channel must be configured before launch."}</p></div>
            <ConsultationForm locale={locale} compact />
          </div>
        </section>
      </main>
    );
  }

  if (kind === "service") return null;

  const [title, description] = pageMeta[kind][locale];
  return (
    <main id="main-content">
      <InnerHero locale={locale} title={title} description={description} />
      {kind === "about" ? <AboutContent locale={locale} /> : null}
      {kind === "services" ? <ServicesContent locale={locale} /> : null}
      {kind === "sectors" ? <SectorsContent locale={locale} /> : null}
      {kind === "process" ? <ProcessContent locale={locale} /> : null}
      {kind === "partners" ? <PartnersContent locale={locale} /> : null}
      {kind === "contact" || kind === "request-consultation" ? <FormContent locale={locale} contact={kind === "contact"} /> : null}
      {kind === "privacy" || kind === "terms" ? <LegalContent locale={locale} kind={kind} /> : null}
    </main>
  );
}

function AboutContent({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <>
    <section className="section"><div className="container content-grid"><aside className="content-aside"><span>{ar ? "قصتنا" : "Our Story"}</span><h2>{t(story[0].title, locale)}</h2><p>{t(story[0].text, locale)}</p></aside><div className="rich-content">{story.slice(1).map((item) => <article className="rich-card" key={item.key}><h3>{t(item.tab, locale)} — {t(item.title, locale)}</h3><p>{t(item.text, locale)}</p></article>)}</div></div></section>
    <section className="section services-section"><div className="container"><SectionHeading eyebrow={ar ? "قيمنا" : "Our Values"} title={ar ? "الإنسان والوضوح في قلب العمل." : "People and clarity at the heart of our work."} /><div className="cards-grid">{values.map((value) => <article className="service-list-card" key={value.title.en}><ShieldCheck /><h3>{t(value.title, locale)}</h3><p>{t(value.description, locale)}</p></article>)}</div></div></section>
  </>;
}

function ServicesContent({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  return <section className="section"><div className="container"><SectionHeading eyebrow={ar ? "ستة مسارات مترابطة" : "Six connected capabilities"} title={ar ? "اختر نقطة البداية المناسبة لاحتياجك." : "Choose the right starting point for your needs."} /><div className="cards-grid">{services.map((service) => <article className="service-list-card" key={service.slug}><Icon name={service.icon} size={30} /><h2>{t(service.title, locale)}</h2><p>{t(service.description, locale)}</p><Link href={localizedPath(locale, `/services/${service.slug}`)}>{ar ? "تفاصيل الخدمة" : "Service details"}<Arrow size={18} /></Link></article>)}</div></div></section>;
}

function SectorsContent({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <section className="section"><div className="container"><SectionHeading eyebrow={ar ? "خبرات متعددة" : "Cross-sector capabilities"} title={ar ? "حل يتكيف مع طبيعة التشغيل." : "A solution adapted to how your sector operates."} /><div className="sectors-list">{sectors.map((sector) => <article className="sector-detail" key={sector.title.en}><div className="sector-detail__image"><Image src={sector.image} alt={t(sector.title, locale)} fill sizes="160px" /></div><div className="sector-detail__content"><Icon name={sector.icon} size={24} /><h2>{t(sector.title, locale)}</h2><p>{t(sector.description, locale)}</p></div></article>)}</div></div></section>;
}

function ProcessContent({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <section className="section"><div className="container content-grid"><aside className="content-aside"><span>{ar ? "منهجية العمل" : "Working Method"}</span><h2>{ar ? "كل مرحلة لها هدف واضح." : "Every stage has a clear purpose."}</h2><p>{ar ? "لا نبدأ بتقديم المرشحين قبل فهم الاحتياج، ولا تنتهي علاقتنا عند التوظيف." : "We do not present candidates before understanding the need, and our role does not end at placement."}</p></aside><div className="rich-content">{processSteps.map((step, index) => <article className="rich-card" key={step.title.en}><span className="eyebrow"><i />{String(index + 1).padStart(2, "0")}</span><h3>{t(step.title, locale)}</h3><p>{t(step.description, locale)}</p></article>)}</div></div></section>;
}

function PartnersContent({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <section className="section partners-section">
      <div className="container">
        <SectionHeading
          eyebrow={ar ? "شراكات نبني عليها" : "Partnerships we build on"}
          title={ar ? "جهات رائدة وثقة نعتز بها." : "Leading organizations and trusted relationships."}
          text={ar ? "نعمل مع جهات وطنية وشركات رائدة في قطاعات متنوعة، ونواصل بناء شراكات تدعم جودة التنفيذ والنمو المستدام." : "We work with leading national organizations across diverse sectors and continue building partnerships that support delivery quality and sustainable growth."}
        />
        <div className="partners-showcase">
          <div className="partners-board-crop">
            <Image
              className="partners-board-image"
              src="/partners/partners-board.png"
              alt={ar ? "شعارات شركاء نجاح HLR" : "HLR success partner logos"}
              width={608}
              height={730}
              sizes="(max-width: 760px) calc(100vw - 58px), 820px"
            />
          </div>
        </div>
        <p className="partners-note">{ar ? "سابك، stc، أرامكو السعودية، وزارة الصحة، الشركة السعودية للكهرباء، الهيئة الملكية للجبيل وينبع، معادن، شركة المياه الوطنية، البريد السعودي، روشن، القدية، شركة الدرعية، الخطوط السعودية، مطار الملك خالد الدولي، ونيوم." : "SABIC, stc, Saudi Aramco, Ministry of Health, Saudi Electricity Company, Royal Commission for Jubail and Yanbu, Ma'aden, National Water Company, Saudi Post, ROSHN, Qiddiya, Diriyah Company, SAUDIA, King Khalid International Airport, and NEOM."}</p>
      </div>
    </section>
  );
}

function FormContent({ locale, contact }: { locale: Locale; contact: boolean }) {
  const ar = locale === "ar";
  return <section className="section"><div className="container consultation-layout"><div className="form-intro"><span className="eyebrow"><i />{contact ? (ar ? "تواصل مباشر" : "Direct Contact") : (ar ? "طلب استشارة" : "Consultation Request")}</span><h2>{ar ? "أخبرنا بما تحتاجه منشأتك." : "Tell us what your organization needs."}</h2><p>{ar ? "كلما كانت التفاصيل أوضح، كان فهم الاحتياج وتحديد الخدمة المناسبة أدق." : "The clearer the information, the better we can understand the need and identify the right service."}</p><ul><li><CheckCircle2 size={20} />{ar ? "بيانات اتصال حقيقية فقط" : "Only real contact details"}</li><li><CheckCircle2 size={20} />{ar ? "لا توجد وعود أو أسعار غير مؤكدة" : "No unverified promises or pricing"}</li><li><CheckCircle2 size={20} />{ar ? "حماية من الإرسال المزعج" : "Basic spam protection"}</li></ul></div><ConsultationForm locale={locale} /></div></section>;
}

function LegalContent({ locale, kind }: { locale: Locale; kind: "privacy" | "terms" }) {
  const ar = locale === "ar";
  return <section className="section"><div className="container legal-content">{kind === "privacy" ? <><h2>{ar ? "البيانات التي نجمعها" : "Data we collect"}</h2><p>{ar ? "نجمع فقط البيانات التي يرسلها المستخدم طوعًا عبر نماذج الموقع، مثل الاسم وبيانات التواصل وتفاصيل الاحتياج." : "We collect only information voluntarily submitted through website forms, such as contact details and requirement information."}</p><h2>{ar ? "استخدام البيانات" : "How data is used"}</h2><p>{ar ? "تستخدم البيانات للرد على الطلب وتقديم الاستشارة المطلوبة، ولا تُعرض للعامة عبر الموقع." : "Submitted data is used to respond to the request and provide the requested consultation. It is not displayed publicly."}</p></> : <><h2>{ar ? "استخدام الموقع" : "Website use"}</h2><p>{ar ? "محتوى الموقع تعريفي ولا يمثل عرضًا ملزمًا أو تسعيرًا أو تعهدًا بمدة تنفيذ ما لم يتم الاتفاق عليه كتابيًا." : "Website content is informational and does not constitute a binding offer, price, or delivery commitment unless agreed in writing."}</p><h2>{ar ? "حقوق المحتوى" : "Content rights"}</h2><p>{ar ? "الشعار والهوية والمحتوى الخاص بالشركة محمي، ولا يجوز نسخه أو استخدامه دون تصريح." : "The company logo, identity, and proprietary content may not be copied or used without authorization."}</p></>}</div></section>;
}
