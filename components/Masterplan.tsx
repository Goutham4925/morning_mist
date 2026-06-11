"use client";

import { useState } from "react";
import ChapterHead from "./ChapterHead";
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
    <section id="masterplan" className="relative overflow-hidden bg-fog py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ChapterHead
          time="11:00 — walking the grounds"
          title={
            <>
              2.8 acres, composed
              <br />
              <span className="italic text-moss">like a garden</span>
            </>
          }
          lede="Tap any marker to walk the plan — towers, villas, forest and the social heart, all woven around open green."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[3fr_2fr]">
          {/* plan */}
          <Reveal>
            <div className="relative overflow-hidden border border-ink/10 bg-porcelain p-4 sm:p-6">
              <svg
                viewBox="0 0 860 540"
                className="h-auto w-full"
                role="group"
                aria-label="Interactive Mistwood masterplan"
              >
                <path
                  d="M70 60 Q60 50 80 45 L760 35 Q790 33 795 60 L810 440 Q812 470 785 478 L120 505 Q85 508 80 478 Z"
                  fill="rgba(51,82,63,0.07)"
                  stroke="#5f7464"
                  strokeWidth="1.5"
                  strokeDasharray="7 6"
                />

                <path
                  d="M430 490 V430 Q430 410 410 408 L180 420 Q150 420 150 390 L145 250 Q145 225 170 222 L690 195 Q715 194 716 220 L725 390 Q726 415 700 418 L450 430"
                  fill="none"
                  stroke="rgba(28,43,34,0.10)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Miyawaki forest */}
                <g fill="rgba(51,82,63,0.45)">
                  <circle cx="330" cy="330" r="58" />
                  <circle cx="385" cy="305" r="42" />
                  <circle cx="290" cy="300" r="38" />
                  <circle cx="365" cy="368" r="40" />
                  <circle cx="300" cy="365" r="30" />
                </g>
                <g fill="rgba(95,116,100,0.45)">
                  <circle cx="345" cy="320" r="26" />
                  <circle cx="310" cy="345" r="18" />
                  <circle cx="378" cy="340" r="16" />
                </g>

                {/* towers */}
                <g stroke="#1c2b22" strokeWidth="1.2">
                  <rect x="170" y="160" width="90" height="90" fill="rgba(28,43,34,0.10)" />
                  <rect x="365" y="105" width="90" height="90" fill="rgba(28,43,34,0.14)" />
                  <rect x="555" y="160" width="90" height="90" fill="rgba(28,43,34,0.10)" />
                </g>

                {/* clubhouse + pool */}
                <rect x="470" y="270" width="80" height="56" fill="rgba(154,123,79,0.25)" stroke="#9a7b4f" strokeWidth="1.2" />
                <ellipse cx="565" cy="345" rx="34" ry="18" fill="rgba(95,134,150,0.35)" stroke="#1c2b22" strokeWidth="1" />

                {/* amphitheatre */}
                <g fill="none" stroke="#1c2b22" strokeWidth="1" opacity="0.6">
                  <path d="M150 345 A45 45 0 0 1 222 345" />
                  <path d="M158 358 A36 36 0 0 1 214 358" />
                  <path d="M166 371 A27 27 0 0 1 206 371" />
                </g>

                {/* villas */}
                <g fill="rgba(28,43,34,0.08)" stroke="#1c2b22" strokeWidth="0.9">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <rect key={i} x={620 + (i % 5) * 34} y={370 + Math.floor(i / 5) * 40} width="26" height="28" />
                  ))}
                </g>

                {/* entry */}
                <path d="M415 505 L450 505 L445 478 L420 478 Z" fill="rgba(154,123,79,0.3)" stroke="#9a7b4f" strokeWidth="1.2" />

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
                      <circle className="hotspot-pulse" cx={h.x} cy={h.y} r="13" fill="rgba(154,123,79,0.4)" />
                      <circle
                        cx={h.x}
                        cy={h.y}
                        r={isActive ? 11 : 8}
                        fill={isActive ? "#9a7b4f" : "#f2f3ee"}
                        stroke={isActive ? "#9a7b4f" : "#1c2b22"}
                        strokeWidth="1.5"
                        style={{ transition: "all 0.25s" }}
                      />
                      <circle cx={h.x} cy={h.y} r="26" fill="transparent" />
                    </g>
                  );
                })}
              </svg>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.24em] text-eucalyptus/70">
                Illustrative plan — not to scale
              </p>
            </div>
          </Reveal>

          {/* detail panel */}
          <Reveal delay={120}>
            <div
              key={active.id}
              className="border border-ink/10 bg-porcelain p-9 transition-opacity duration-300 sm:p-11"
              aria-live="polite"
            >
              <p className="eyebrow text-bronze">{active.tag}</p>
              <h3 className="font-display mt-5 text-4xl font-light italic text-ink">
                {active.title}
              </h3>
              <div className="rule-bronze mt-6 w-20" />
              <p className="mt-6 text-base leading-relaxed text-eucalyptus">
                {active.text}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActive(h)}
                    className={`cursor-pointer border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-200 ${
                      active.id === h.id
                        ? "border-bronze bg-bronze/10 text-bronze"
                        : "border-ink/15 text-eucalyptus hover:border-bronze/50 hover:text-bronze"
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
