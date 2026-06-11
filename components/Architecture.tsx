"use client";

import { useEffect, useRef, useState } from "react";

/* maps overall progress p into 0..1 within [start, end] */
const seg = (p: number, start: number, end: number) =>
  Math.min(1, Math.max(0, (p - start) / (end - start)));

const captions = [
  {
    at: 0.0,
    title: "Drawn From the Land",
    text: "Three towers of ground plus twelve floors, placed to keep every home open to light, air and the forest below.",
  },
  {
    at: 0.45,
    title: "A Street of Villas",
    text: "Twenty row villas trace the edge of the masterplan — private, garden-facing and a short walk from the clubhouse.",
  },
  {
    at: 0.78,
    title: "Held by the Forest",
    text: "The Miyawaki forest threads between the buildings, so architecture and ecology grow as one composition.",
  },
];

export default function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        setProgress(Math.min(1, Math.max(0, -rect.top / total)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const p = reduced ? 1 : progress;
  const activeCaption =
    captions.filter((c) => p >= c.at).pop() ?? captions[0];

  const stroke = (start: number, end: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: 1 - seg(p, start, end),
  });

  return (
    <section ref={ref} id="architecture" className="relative h-[260vh] bg-forest">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="topo-lines text-mist" />
        <div className="glow-orb right-[8%] top-[15%] h-72 w-72 bg-moss/25" />

        <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 pt-28 lg:grid-cols-[2fr_3fr] lg:px-10">
          {/* narrative */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
              The Architecture
            </p>
            <h2
              key={activeCaption.title}
              className="font-display mt-5 text-3xl leading-snug text-cream transition-opacity duration-500 sm:text-5xl"
            >
              {activeCaption.title}
            </h2>
            <div className="gold-line mt-8 w-24" />
            <p
              key={activeCaption.text}
              className="mt-8 max-w-md text-base font-light leading-relaxed text-mist transition-opacity duration-500"
            >
              {activeCaption.text}
            </p>

            <div className="mt-10 hidden h-1 w-48 overflow-hidden rounded-full bg-cream/10 lg:block">
              <div
                className="h-full rounded-full bg-gold transition-[width] duration-150"
                style={{ width: `${p * 100}%` }}
              />
            </div>
            <p className="mt-3 hidden text-[10px] uppercase tracking-[0.28em] text-sage lg:block">
              Keep scrolling — the elevation draws itself
            </p>
          </div>

          {/* line-art elevation */}
          <svg
            viewBox="0 0 900 500"
            className="h-auto w-full"
            role="img"
            aria-label="Line drawing of the Mistwood elevation: three towers, row villas and the forest line"
          >
            <g
              fill="none"
              stroke="#cfdcd2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* ground */}
              <path d="M30 450 H870" pathLength={1} style={stroke(0.0, 0.12)} />

              {/* tower 1 */}
              <path
                d="M110 450 V190 H250 V450"
                pathLength={1}
                style={stroke(0.08, 0.3)}
              />
              {/* tower 2 (center, taller) */}
              <path
                d="M380 450 V150 H520 V450"
                pathLength={1}
                style={stroke(0.14, 0.36)}
              />
              {/* tower 3 */}
              <path
                d="M650 450 V190 H790 V450"
                pathLength={1}
                style={stroke(0.2, 0.42)}
              />

              {/* floor lines */}
              <path
                d="M110 230 H250 M110 270 H250 M110 310 H250 M110 350 H250 M110 390 H250 M110 430 H250"
                strokeWidth="1"
                opacity="0.55"
                pathLength={1}
                style={stroke(0.3, 0.5)}
              />
              <path
                d="M380 190 H520 M380 230 H520 M380 270 H520 M380 310 H520 M380 350 H520 M380 390 H520 M380 430 H520"
                strokeWidth="1"
                opacity="0.55"
                pathLength={1}
                style={stroke(0.34, 0.54)}
              />
              <path
                d="M650 230 H790 M650 270 H790 M650 310 H790 M650 350 H790 M650 390 H790 M650 430 H790"
                strokeWidth="1"
                opacity="0.55"
                pathLength={1}
                style={stroke(0.38, 0.58)}
              />

              {/* crown accents */}
              <path
                d="M110 190 L130 170 H230 L250 190 M380 150 L400 130 H500 L520 150 M650 190 L670 170 H770 L790 190"
                stroke="#c8a24b"
                pathLength={1}
                style={stroke(0.45, 0.62)}
              />

              {/* row villas between towers */}
              <path
                d="M270 450 V410 L300 390 L330 410 V450 M330 450 V410 L360 390 M540 450 V410 L570 390 L600 410 V450 M600 450 V410 L630 390"
                pathLength={1}
                style={stroke(0.52, 0.72)}
              />

              {/* forest canopy */}
              <path
                d="M50 450 Q70 400 95 425 Q115 385 140 420 M300 450 Q320 405 345 430 Q365 395 390 425 M560 450 Q580 405 605 430 M810 450 Q825 410 845 432 Q858 402 870 428"
                stroke="#87a894"
                pathLength={1}
                style={stroke(0.62, 0.84)}
              />

              {/* mist line */}
              <path
                d="M30 472 Q150 462 270 472 T510 472 T750 472 T870 472"
                stroke="#87a894"
                strokeWidth="1.5"
                opacity="0.6"
                pathLength={1}
                style={stroke(0.78, 1)}
              />
            </g>

            {/* tower labels fade in at the end */}
            <g
              fill="#c8a24b"
              fontSize="13"
              fontFamily="var(--font-josefin)"
              letterSpacing="3"
              textAnchor="middle"
              style={{ opacity: seg(p, 0.85, 1), transition: "opacity 0.3s" }}
            >
              <text x="180" y="175">TOWER A</text>
              <text x="450" y="135">TOWER B</text>
              <text x="720" y="175">TOWER C</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
