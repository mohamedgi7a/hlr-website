"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

type PuzzlePhase = "waiting" | "fitting" | "done";

const piecePath =
  "M620 330H720C705 300 730 270 760 270C790 270 815 300 800 330H910V420C940 405 970 430 970 460C970 490 940 515 910 500V590H800C815 620 790 650 760 650C730 650 705 620 720 590H620V500C590 515 560 490 560 460C560 430 590 405 620 420Z";

const verticalPath = (x: number, direction: number) =>
  `M${x} 0V92C${x + 42 * direction} 72 ${x + 68 * direction} 105 ${x + 68 * direction} 138C${x + 68 * direction} 171 ${x + 42 * direction} 204 ${x} 184V292C${x - 42 * direction} 272 ${x - 68 * direction} 305 ${x - 68 * direction} 338C${x - 68 * direction} 371 ${x - 42 * direction} 404 ${x} 384V492C${x + 42 * direction} 472 ${x + 68 * direction} 505 ${x + 68 * direction} 538C${x + 68 * direction} 571 ${x + 42 * direction} 604 ${x} 584V692C${x - 42 * direction} 672 ${x - 68 * direction} 705 ${x - 68 * direction} 738C${x - 68 * direction} 771 ${x - 42 * direction} 804 ${x} 784V900`;

const horizontalPath = (y: number, direction: number) =>
  `M0 ${y}H142C122 ${y + 42 * direction} 155 ${y + 68 * direction} 188 ${y + 68 * direction}C221 ${y + 68 * direction} 254 ${y + 42 * direction} 234 ${y}H362C342 ${y - 42 * direction} 375 ${y - 68 * direction} 408 ${y - 68 * direction}C441 ${y - 68 * direction} 474 ${y - 42 * direction} 454 ${y}H582C562 ${y + 42 * direction} 595 ${y + 68 * direction} 628 ${y + 68 * direction}C661 ${y + 68 * direction} 694 ${y + 42 * direction} 674 ${y}H802C782 ${y - 42 * direction} 815 ${y - 68 * direction} 848 ${y - 68 * direction}C881 ${y - 68 * direction} 914 ${y - 42 * direction} 894 ${y}H1022C1002 ${y + 42 * direction} 1035 ${y + 68 * direction} 1068 ${y + 68 * direction}C1101 ${y + 68 * direction} 1134 ${y + 42 * direction} 1114 ${y}H1242C1222 ${y - 42 * direction} 1255 ${y - 68 * direction} 1288 ${y - 68 * direction}C1321 ${y - 68 * direction} 1354 ${y - 42 * direction} 1334 ${y}H1600`;

export function PuzzleReveal({ initial = false }: { initial?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const snapshotRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<PuzzlePhase>("waiting");
  const rawId = useId();
  const maskId = `puzzle-mask-${rawId.replace(/:/g, "")}`;
  const pieceGradientId = `puzzle-piece-${rawId.replace(/:/g, "")}`;

  useLayoutEffect(() => {
    const node = ref.current;
    const snapshotHost = snapshotRef.current;
    const section = node?.closest<HTMLElement>("[data-puzzle-section]");
    const source = section?.querySelector<HTMLElement>(":scope > .container");
    if (!node || !snapshotHost || !section || !source) return;

    section.classList.remove("puzzle-section--complete");
    const clone = source.cloneNode(true) as HTMLElement;
    clone.classList.add("puzzle-reveal__snapshot-content");
    clone.classList.remove("hero-live");
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll<HTMLElement>("[id]").forEach((element) => element.removeAttribute("id"));
    clone.querySelectorAll<HTMLElement>("a, button, input, select, textarea").forEach((element) => {
      element.setAttribute("tabindex", "-1");
      element.setAttribute("aria-hidden", "true");
    });
    snapshotHost.appendChild(clone);

    const positionSnapshot = () => {
      const sectionRect = section.getBoundingClientRect();
      const sourceRect = source.getBoundingClientRect();
      snapshotHost.style.left = `${sourceRect.left - sectionRect.left}px`;
      snapshotHost.style.top = `${sourceRect.top - sectionRect.top}px`;
      snapshotHost.style.width = `${sourceRect.width}px`;
      snapshotHost.style.height = `${sourceRect.height}px`;
    };

    positionSnapshot();
    window.addEventListener("resize", positionSnapshot);
    return () => {
      window.removeEventListener("resize", positionSnapshot);
      clone.remove();
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    const section = node?.closest<HTMLElement>("[data-puzzle-section]");
    if (!node || !section) return;

    const timers: number[] = [];
    let hasStarted = false;

    const finishSection = () => {
      section.classList.add("puzzle-section--complete");
      section.dispatchEvent(new CustomEvent("puzzle:complete"));
    };

    const start = (delay: number) => {
      if (hasStarted) return;
      hasStarted = true;
      timers.push(window.setTimeout(() => setPhase("fitting"), delay));
      timers.push(window.setTimeout(() => {
        setPhase("done");
        finishSection();
      }, delay + 1050));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      finishSection();
      return;
    }

    if (initial) {
      start(900);
      return () => timers.forEach(window.clearTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start(140);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8%" }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, [initial]);

  return (
    <div ref={ref} className={`puzzle-reveal puzzle-reveal--${phase}`} aria-hidden="true">
      <div ref={snapshotRef} className="puzzle-reveal__snapshot" />
      <svg className="puzzle-reveal__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id={maskId}>
            <rect width="1600" height="900" fill="white" />
            <path d={piecePath} fill="black" />
          </mask>
          <linearGradient id={pieceGradientId} x1="560" y1="270" x2="970" y2="650" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.34" />
            <stop offset="1" stopColor="#dbeceb" stopOpacity="0.26" />
          </linearGradient>
        </defs>

        <path className="puzzle-reveal__hole" d={piecePath} />
        <g mask={`url(#${maskId})`}>
          <rect className="puzzle-reveal__board" width="1600" height="900" />
          <g className="puzzle-reveal__seams">
            {[210, 430, 650, 870, 1090, 1310, 1530].map((x, index) => (
              <path key={`v-${x}`} d={verticalPath(x, index % 2 === 0 ? 1 : -1)} />
            ))}
            {[180, 380, 580, 780].map((y, index) => (
              <path key={`h-${y}`} d={horizontalPath(y, index % 2 === 0 ? 1 : -1)} />
            ))}
          </g>
        </g>

        <g className="puzzle-reveal__piece">
          <path d={piecePath} fill={`url(#${pieceGradientId})`} />
          <path className="puzzle-reveal__piece-edge" d={piecePath} />
        </g>
      </svg>
    </div>
  );
}
