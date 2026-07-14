"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Pause,
  Play,
  UsersRound
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  faqs,
  hero,
  labels,
  processSteps,
  sectors,
  services,
  story,
  successStrategies,
  t,
  trustPoints,
  values,
  whyItems
} from "@/data/content";
import { localizedPath, type Locale } from "@/lib/i18n";
import { Icon } from "./Icon";
import { PuzzleReveal } from "./PuzzleReveal";
import { SectionHeading } from "./SectionHeading";

export function HomePage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const copy = labels[locale];
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const [heroLine, setHeroLine] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyPlaying, setStoryPlaying] = useState(true);
  const [storyStarted, setStoryStarted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const scope = heroRef.current;
    if (!scope) return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 3.07, defaults: { ease: "power4.out" } });
      timeline
        .from(".hero-live .hero-eyebrow", { opacity: 0, y: 12, duration: 0.5 })
        .from(".hero-live .hero-title__fixed", { opacity: 0, y: 28, filter: "blur(8px)", duration: 0.72 }, "-=0.25")
        .from(".hero-live .hero-title__rotator", { opacity: 0, y: 28, filter: "blur(8px)", duration: 0.72 }, "-=0.5")
        .from(".hero-live .hero-copy", { opacity: 0, y: 18, duration: 0.6 }, "-=0.4")
        .from(".hero-live .hero-actions > *", { opacity: 0, y: 14, stagger: 0.1, duration: 0.55 }, "-=0.4")
        .from(".hero-live .hero-visual__frame", { opacity: 0, clipPath: "inset(100% 0 0 0 round 28px)", duration: 1.05 }, "-=1.1")
        .from(".hero-live .hero-float", { opacity: 0, y: 24, scale: 0.97, duration: 0.62 }, "-=0.45");
    }, scope);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || heroPaused) return;
    const timer = window.setInterval(() => setHeroLine((current) => (current + 1) % hero.lines.length), 4800);
    return () => window.clearInterval(timer);
  }, [heroPaused]);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((node) => node.classList.add("revealed"));
      return;
    }
    const pendingListeners: Array<{ section: HTMLElement; listener: EventListener }> = [];
    const revealNode = (node: HTMLElement) => node.classList.add("revealed");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const node = entry.target as HTMLElement;
          const section = node.closest<HTMLElement>("[data-puzzle-section]");
          if (section && !section.classList.contains("puzzle-section--complete")) {
            const listener: EventListener = () => revealNode(node);
            pendingListeners.push({ section, listener });
            section.addEventListener("puzzle:complete", listener, { once: true });
          } else {
            revealNode(node);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6%" });
    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      pendingListeners.forEach(({ section, listener }) => section.removeEventListener("puzzle:complete", listener));
    };
  }, []);

  useEffect(() => {
    const section = storyRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) setStoryStarted(true);
    }, { threshold: [0.55] });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!storyStarted || !storyPlaying || storyIndex >= story.length - 1) return;
    const timer = window.setTimeout(() => setStoryIndex((value) => value + 1), storyIndex === 0 ? 7000 : 6200);
    return () => window.clearTimeout(timer);
  }, [storyStarted, storyPlaying, storyIndex]);

  const chooseHeroLine = (index: number) => {
    setHeroLine(index);
    setHeroPaused(true);
    window.setTimeout(() => setHeroPaused(false), 15000);
  };

  const chooseStory = (index: number) => {
    setStoryIndex(index);
    setStoryPlaying(false);
  };

  return (
    <main id="main-content" className="home-page">
      <section className="hero" ref={heroRef} aria-labelledby="hero-title" data-puzzle-section>
        <PuzzleReveal initial />
        <div className="hero-decoration hero-decoration--one" aria-hidden="true" />
        <div className="hero-decoration hero-decoration--two" aria-hidden="true" />
        <div className="container hero-grid hero-live">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow"><i aria-hidden="true" />{t(hero.eyebrow, locale)}</span>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title__fixed">{t(hero.fixed, locale)}</span>
              <span className="hero-title__rotator" aria-hidden="true">
                <span key={heroLine} className="hero-title__line">{t(hero.lines[heroLine], locale)}</span>
              </span>
              <span className="sr-only">{hero.lines.map((line) => t(line, locale)).join(". ")}</span>
            </h1>
            <p className="hero-copy">{t(hero.paragraph, locale)}</p>
            <div className="hero-actions">
              <Link className="button button--primary" href={localizedPath(locale, "/request-consultation")}>{t(hero.primary, locale)}<Arrow size={18} /></Link>
              <Link className="button button--secondary" href={localizedPath(locale, "/services")}>{t(hero.secondary, locale)}<Arrow size={18} /></Link>
            </div>
            <div className="hero-proof" aria-label={ar ? "مزايا الخدمة" : "Service benefits"}>
              {trustPoints.slice(0, 3).map((point) => <span key={point.en}><i aria-hidden="true" />{t(point, locale)}</span>)}
            </div>
            <div className="hero-progress" aria-label={ar ? "رسائل الهيرو" : "Hero messages"}>
              {hero.lines.map((line, index) => (
                <button key={line.en} className={index === heroLine ? "active" : ""} onClick={() => chooseHeroLine(index)} aria-label={`${ar ? "عرض" : "Show"} ${t(line, locale)}`}>
                  <span style={{ animationDuration: heroPaused ? "0s" : "4.8s" }} />
                </button>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual__frame">
              <Image src="/images/hero-saudi-workforce.webp" alt={t(hero.imageAlt, locale)} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
              <div className="hero-visual__wash" />
            </div>
            <div className="hero-float">
              <span><UsersRound aria-hidden="true" /></span>
              <div><strong>{t(hero.cardTitle, locale)}</strong><small>{t(hero.cardText, locale)}</small></div>
            </div>
            <div className="hero-visual__caption">
              <small>{ar ? "حلول متكاملة" : "Integrated solutions"}</small>
              <strong>{ar ? "توريد عمالة · توظيف · متابعة" : "Supply · Place · Support"}</strong>
            </div>
            <svg className="hero-lines" aria-hidden="true" viewBox="0 0 540 610" fill="none">
              <path d="M490 36H308C241 36 213 66 213 124V163" />
              <path d="M42 546H188C248 546 274 519 274 459V430" />
              <circle cx="490" cy="36" r="5" /><circle cx="42" cy="546" r="5" />
            </svg>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label={ar ? "منهجية الخدمة" : "Service principles"}>
        <div className="container trust-strip__inner">
          <strong>{ar ? "حلول تبدأ بفهم احتياجك" : "Solutions that begin with understanding"}</strong>
          <div className="trust-path">
            {trustPoints.map((point) => <span key={point.en}><i aria-hidden="true" />{t(point, locale)}</span>)}
          </div>
        </div>
      </section>

      <section className="section why-section" data-puzzle-section>
        <PuzzleReveal />
        <div className="container">
          <SectionHeading eyebrow={copy.whyEyebrow} title={copy.whyTitle} text={copy.whyText} />
          <div className="why-grid" data-reveal>
            {whyItems.map((item, index) => (
              <article className={`why-card ${index === 2 ? "why-card--featured" : ""}`} key={item.title.en} style={{ "--index": index } as React.CSSProperties}>
                <div className="why-card__top"><span>{String(index + 1).padStart(2, "0")}</span><Icon name={item.icon} size={25} /></div>
                <h3>{t(item.title, locale)}</h3><p>{t(item.description, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section" id="services" data-puzzle-section>
        <PuzzleReveal />
        <div className="container">
          <SectionHeading eyebrow={copy.servicesEyebrow} title={copy.servicesTitle} action={<Link className="section-link" href={localizedPath(locale, "/services")}>{ar ? "جميع الخدمات" : "All services"}<Arrow size={17} /></Link>} />
          <div className="services-track" data-reveal>
            <div className="services-track__line"><span style={{ width: `${((activeService + 1) / services.length) * 100}%` }} /></div>
            {services.map((service, index) => (
              <article className={`service-card ${index === activeService ? "service-card--active" : ""}`} key={service.slug}>
                <button type="button" onClick={() => setActiveService(index)} aria-expanded={index === activeService}>
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <Icon name={service.icon} size={29} />
                  <h3>{t(service.title, locale)}</h3>
                  <p>{t(service.description, locale)}</p>
                </button>
                <Link href={localizedPath(locale, `/services/${service.slug}`)}>{copy.more}<Arrow size={17} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-section" ref={storyRef} data-puzzle-section>
        <PuzzleReveal />
        <div className="container">
          <SectionHeading
            eyebrow={copy.storyEyebrow}
            title={copy.storyTitle}
            action={<button className="story-pause" type="button" onClick={() => setStoryPlaying((value) => !value)} aria-label={copy.pause}>{storyPlaying ? <Pause size={17} /> : <Play size={17} />}</button>}
          />
          <div className="story-tabs" role="tablist" aria-label={copy.storyEyebrow}>
            {story.map((item, index) => <button type="button" role="tab" aria-selected={storyIndex === index} aria-controls="story-panel" key={item.key} onClick={() => chooseStory(index)}>{t(item.tab, locale)}</button>)}
          </div>
          <div className={`story-panel story-panel--${storyIndex}`} id="story-panel" role="tabpanel" aria-live="polite">
            <div className="story-content" key={`content-${storyIndex}`}>
              <span>{String(storyIndex + 1).padStart(2, "0")}</span>
              <h3>{t(story[storyIndex].title, locale)}</h3>
              <p>{t(story[storyIndex].text, locale)}</p>
            </div>
            <div className="story-image" key={`image-${storyIndex}`}>
              <Image src={story[storyIndex].image} alt={t(story[storyIndex].title, locale)} fill sizes="(max-width: 850px) 100vw, 48vw" />
              <div className="story-image__wash" aria-hidden="true" />
              <div className="story-image__badge">
                <span>{ar ? "منظومة HLR" : "HLR ecosystem"}</span>
                <strong>{t(story[storyIndex].tab, locale)}</strong>
              </div>
              <span className="story-image__index" aria-hidden="true">{String(storyIndex + 1).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="story-progress" aria-hidden="true"><span style={{ width: `${((storyIndex + 1) / story.length) * 100}%` }} /></div>
        </div>
      </section>

      <section className="section sectors-section" data-puzzle-section>
        <PuzzleReveal />
        <div className="container">
          <SectionHeading eyebrow={copy.sectorsEyebrow} title={copy.sectorsTitle} text={copy.sectorsText} action={<Link className="section-link" href={localizedPath(locale, "/sectors")}>{ar ? "استكشف القطاعات" : "Explore sectors"}<Arrow size={17} /></Link>} />
          <div className="sector-grid" data-reveal>
            {sectors.map((sector, index) => (
              <Link className="sector-card" href={localizedPath(locale, "/sectors")} key={sector.title.en} style={{ "--index": index } as React.CSSProperties}>
                <Image src={sector.image} alt={t(sector.title, locale)} fill sizes="(max-width: 700px) 78vw, (max-width: 1100px) 45vw, 24vw" />
                <div className="sector-card__overlay" />
                <div><Icon name={sector.icon} size={22} /><h3>{t(sector.title, locale)}</h3><Arrow size={20} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" data-puzzle-section>
        <PuzzleReveal />
        <div className="container">
          <SectionHeading light eyebrow={copy.processEyebrow} title={copy.processTitle} text={copy.processText} />
          <div className="process-timeline" data-reveal>
            {processSteps.map((step, index) => (
              <article key={step.title.en} style={{ "--index": index } as React.CSSProperties}>
                <span className="process-dot"><Icon name={step.icon} size={22} /></span>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{t(step.title, locale)}</h3>
                <p>{t(step.description, locale)}</p>
              </article>
            ))}
          </div>
          <Link className="process-link" href={localizedPath(locale, "/process")}>{ar ? "استكشف المنهجية كاملة" : "Explore the complete process"}<Arrow size={18} /></Link>
        </div>
      </section>

      <section className="section values-section" data-puzzle-section>
        <PuzzleReveal />
        <div className="container">
          <SectionHeading eyebrow={copy.valuesEyebrow} title={copy.valuesTitle} />
          <div className="values-showcase" data-reveal>
            <div className="values-brand-panel">
              <span>{ar ? "قيم تصنع الفرق" : "Values that make a difference"}</span>
              <Image src="/brand/hlr-logo.webp" alt="HLR" width={150} height={100} />
              <p>{ar ? "نحوّل مبادئنا إلى تجربة واضحة في كل مرحلة من الشراكة." : "We turn our principles into a clear experience at every stage of the partnership."}</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <article key={value.title.en}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{t(value.title, locale)}</h3>
                  <p>{t(value.description, locale)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section success-section" data-puzzle-section>
        <PuzzleReveal />
        <div className="container">
          <SectionHeading eyebrow={copy.successEyebrow} title={copy.successTitle} />
          <div className="success-grid" data-reveal>
            {successStrategies.map((item, index) => (
              <article key={item.title.en} className={index === 0 ? "success-card--large" : ""}>
                {index === 0 ? <div className="success-image"><Image src="/images/strategy-saudi-team.webp" alt={t(item.title, locale)} fill sizes="(max-width: 800px) 100vw, 54vw" /></div> : null}
                <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{t(item.title, locale)}</h3><p>{t(item.text, locale)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" data-puzzle-section>
        <PuzzleReveal />
        <div className="container faq-layout">
          <SectionHeading eyebrow={copy.faqEyebrow} title={copy.faqTitle} />
          <div className="faq-list" data-reveal>
            {faqs.map((faq, index) => (
              <article className={openFaq === index ? "open" : ""} key={faq.q.en}>
                <h3><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{t(faq.q, locale)}</span><ChevronDown size={20} /></button></h3>
                <div><p>{t(faq.a, locale)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" data-puzzle-section>
        <PuzzleReveal />
        <div className="container final-cta__inner" data-reveal>
          <div><span>{ar ? "خطوتك التالية" : "Your next step"}</span><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p><small>{copy.trust}</small></div>
          <div className="final-cta__actions">
            <Link className="button button--gold" href={localizedPath(locale, "/request-consultation")}>{copy.consultation}<Arrow size={18} /></Link>
            <Link className="button button--outline-light" href={localizedPath(locale, "/contact")}>{copy.contact}<Arrow size={18} /></Link>
          </div>
          <svg aria-hidden="true" viewBox="0 0 540 240"><path d="M-20 196C79 80 180 250 295 105C362 21 446 16 576 62" /><path d="M-14 218C99 116 204 270 322 126C392 40 466 42 586 80" /></svg>
        </div>
      </section>
    </main>
  );
}
