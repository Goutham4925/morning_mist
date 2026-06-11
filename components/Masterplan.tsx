"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Hotspot = {
  id: string;
  x: number;
  y: number;
  title: string;
  tag: string;
  text: string;
};

const hotspots: Hotspot[] = [
  {
    id: "towerA",
    x: 215,
    y: 205,
    title: "Tower A",
    tag: "G+12 · 60 Homes",
    text: "East-facing tower with forest-view balconies and twin high-speed lifts.",
  },
  {
    id: "towerB",
    x: 410,
    y: 150,
    title: "Tower B",
    tag: "G+12 · 60 Homes",
    text: "The centrepiece tower, rising over the clubhouse with panoramic decks.",
  },
  {
    id: "towerC",
    x: 600,
    y: 205,
    title: "Tower C",
    tag: "G+12 · 60 Homes",
    text: "West tower, angled for sunset views across the Miyawaki canopy.",
  },
  {
    id: "villas",
    x: 705,
    y: 395,
    title: "Row Villas",
    tag: "20 Garden Homes",
    text: "A quiet villa street with private gardens edging the southern greens.",
  },
  {
    id: "forest",
    x: 350,
    y: 335,
    title: "Miyawaki Forest",
    tag: "The Living Heart",
    text: "Dense native forest cooling the entire masterplan and filtering the air.",
  },
  {
    id: "club",
    x: 510,
    y: 300,
    title: "Clubhouse",
    tag: "Wellness & Social",
    text: "Pool, fitness studio, co-working lounge and indoor games under one roof.",
  },
  {
    id: "amphi",
    x: 185,
    y: 360,
    title: "Amphitheatre",
    tag: "Open-Air Evenings",
    text: "Terraced lawn steps for screenings, music and community festivals.",
  },
  {
    id: "entry",
    x: 430,
    y: 475,
    title: "Grand Entry",
    tag: "Arrival Court",
    text: "Tree-lined arrival boulevard with security lodge and visitor parking.",
  },
];

export default function Masterplan() {
  const [active, setActive] = useState<Hotspot>(hotspots[4]);

  return (
    <section id="masterplan" className="relative overflow-hidden bg-pine py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_30%_0%,rgba(62,115,85,0.22),transparent_70%)]" />
      <div className="mist-layer" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
            Explore the Masterplan
          </p>
          <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
            2.8 Acres, Composed Like a Garden
          </h2>
          <div className="gold-line mx-auto mt-8 w-24" />
          <p className="mt-8 text-base font-light leading-relaxed text-mist">
            Tap any marker to walk the plan — towers, villas, forest and the social
            heart, all woven around open green.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
          {/* plan */}
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl p-4 sm:p-6">
              <svg
                viewBox="0 0 860 540"
                className="h-auto w-full"
                role="group"
                aria-label="Interactive Mistwood masterplan"
              >
                {/* site boundary */}
                <path
                  d="M70 60 Q60 50 80 45 L760 35 Q790 33 795 60 L810 440 Q812 470 785 478 L120 505 Q85 508 80 478 Z"
                  fill="rgba(62,115,85,0.12)"
                  stroke="#87a894"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />

                {/* internal road loop */}
                <path
                  d="M430 490 V430 Q430 410 410 408 L180 420 Q150 420 150 390 L145 250 Q145 225 170 222 L690 195 Q715 194 716 220 L725 390 Q726 415 700 418 L450 430"
                  fill="none"
                  stroke="rgba(246,244,236,0.25)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Miyawaki forest blob */}
                <g fill="rgba(62,115,85,0.55)">
                  <circle cx="330" cy="330" r="58" />
                  <circle cx="385" cy="305" r="42" />
                  <circle cx="290" cy="300" r="38" />
                  <circle cx="365" cy="368" r="40" />
                  <circle cx="300" cy="365" r="30" />
                </g>
                <g fill="rgba(135,168,148,0.5)">
                  <circle cx="345" cy="320" r="26" />
                  <circle cx="310" cy="345" r="18" />
                  <circle cx="378" cy="340" r="16" />
                </g>

                {/* towers */}
                <g stroke="#cfdcd2" strokeWidth="1.5">
                  <rect x="170" y="160" width="90" height="90" rx="6" fill="rgba(207,220,210,0.16)" />
                  <rect x="365" y="105" width="90" height="90" rx="6" fill="rgba(207,220,210,0.20)" />
                  <rect x="555" y="160" width="90" height="90" rx="6" fill="rgba(207,220,210,0.16)" />
                </g>

                {/* clubhouse + pool */}
                <rect x="470" y="270" width="80" height="56" rx="8" fill="rgba(200,162,75,0.30)" stroke="#c8a24b" strokeWidth="1.5" />
                <ellipse cx="565" cy="345" rx="34" ry="18" fill="rgba(120,180,200,0.45)" stroke="#cfdcd2" strokeWidth="1.5" />

                {/* amphitheatre arcs */}
                <g fill="none" stroke="#cfdcd2" strokeWidth="1.5" opacity="0.8">
                  <path d="M150 345 A45 45 0 0 1 222 345" />
                  <path d="M158 358 A36 36 0 0 1 214 358" />
                  <path d="M166 371 A27 27 0 0 1 206 371" />
                </g>

                {/* row villas */}
                <g fill="rgba(207,220,210,0.16)" stroke="#cfdcd2" strokeWidth="1.2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <rect key={i} x={620 + (i % 5) * 34} y={370 + Math.floor(i / 5) * 40} width="26" height="28" rx="4" />
                  ))}
                </g>

                {/* entry */}
                <path d="M415 505 L450 505 L445 478 L420 478 Z" fill="rgba(200,162,75,0.35)" stroke="#c8a24b" strokeWidth="1.5" />

                {/* hotspots */}
                {hotspots.map((h) => {
                  const isActive = active.id === h.id;
                  return (
                    <g
                      key={h.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${h.title} — ${h.tag}`}
                      aria-pressed={isActive}
                      onClick={() => setActive(h)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActive(h);
                        }
                      }}
                      style={{ cursor: "pointer", outline: "none" }}
                    >
                      <circle className="hotspot-pulse" cx={h.x} cy={h.y} r="13" fill="rgba(200,162,75,0.45)" />
                      <circle
                        cx={h.x}
                        cy={h.y}
                        r={isActive ? 11 : 8}
                        fill={isActive ? "#c8a24b" : "#0c1d14"}
                        stroke="#e3c684"
                        strokeWidth="2"
                        style={{ transition: "all 0.25s" }}
                      />
                      {/* generous invisible hit area */}
                      <circle cx={h.x} cy={h.y} r="26" fill="transparent" />
                    </g>
                  );
                })}
              </svg>
              <p className="mt-3 text-center text-[10px] font-light uppercase tracking-[0.22em] text-sage/70">
                Illustrative plan — not to scale
              </p>
            </div>
          </Reveal>

          {/* detail panel */}
          <Reveal delay={120}>
            <div
              key={active.id}
              className="glass rounded-3xl p-8 transition-opacity duration-300 sm:p-10"
              aria-live="polite"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
                {active.tag}
              </p>
              <h3 className="font-display mt-4 text-3xl text-cream">{active.title}</h3>
              <div className="gold-line mt-6 w-16" />
              <p className="mt-6 text-base font-light leading-relaxed text-mist">
                {active.text}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActive(h)}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-light uppercase tracking-[0.14em] transition-all duration-200 ${
                      active.id === h.id
                        ? "border-gold bg-gold/15 text-gold-light"
                        : "border-cream/15 text-sage hover:border-gold/40 hover:text-gold-light"
                    }`}
                  >
                    {h.title}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
