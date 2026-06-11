"use client";

import { useState } from "react";
import {
  Briefcase,
  Clock,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  TrainFront,
} from "lucide-react";
import ChapterHead from "./ChapterHead";
import Reveal from "./Reveal";

type Category = {
  id: string;
  label: string;
  icon: typeof Briefcase;
  color: string;
  places: { name: string; mins: number; note: string }[];
};

const categories: Category[] = [
  {
    id: "work",
    label: "Work",
    icon: Briefcase,
    color: "#9a7b4f",
    places: [
      { name: "ITPL Tech Park", mins: 20, note: "Whitefield's flagship IT hub" },
      { name: "EPIP Zone", mins: 22, note: "Export promotion industrial park" },
      { name: "Brookefield", mins: 18, note: "Offices, cafés & co-working" },
      { name: "ORR Tech Corridor", mins: 35, note: "Marathahalli–Bellandur belt" },
    ],
  },
  {
    id: "transit",
    label: "Transit",
    icon: TrainFront,
    color: "#33523f",
    places: [
      { name: "Whitefield Metro", mins: 15, note: "Purple Line — Kadugodi" },
      { name: "Whitefield Railway Stn", mins: 18, note: "Suburban rail link" },
      { name: "KR Puram Junction", mins: 30, note: "Major rail & road node" },
      { name: "Kempegowda Airport", mins: 55, note: "Via Budigere Cross" },
    ],
  },
  {
    id: "schools",
    label: "Schools",
    icon: GraduationCap,
    color: "#5f7464",
    places: [
      { name: "Deens Academy", mins: 15, note: "CBSE, Whitefield" },
      { name: "Glentree Academy", mins: 18, note: "ICSE & early years" },
      { name: "Vydehi School", mins: 20, note: "CBSE, Whitefield campus" },
      { name: "Greenwood High", mins: 25, note: "International curriculum" },
    ],
  },
  {
    id: "health",
    label: "Healthcare",
    icon: HeartPulse,
    color: "#8a6a3e",
    places: [
      { name: "Manipal Hospital", mins: 20, note: "Multi-speciality, Whitefield" },
      { name: "Vydehi Institute", mins: 20, note: "Teaching hospital & ER" },
      { name: "Cloudnine", mins: 22, note: "Maternity & childcare" },
      { name: "Sakra World", mins: 30, note: "Quaternary care, ORR" },
    ],
  },
  {
    id: "leisure",
    label: "Leisure",
    icon: ShoppingBag,
    color: "#42604d",
    places: [
      { name: "Forum Shantiniketan", mins: 18, note: "Mall, dining & cinema" },
      { name: "VR Bengaluru", mins: 22, note: "The Black Box on Whitefield Rd" },
      { name: "Phoenix Marketcity", mins: 25, note: "Bengaluru's biggest mall" },
      { name: "Decathlon Anubhava", mins: 15, note: "Sports & weekend gear" },
    ],
  },
];

const spokeEnds = [
  { x: 150, y: 90 },
  { x: 470, y: 70 },
  { x: 540, y: 230 },
  { x: 120, y: 270 },
];

export default function Connectivity() {
  const [active, setActive] = useState(0);
  const cat = categories[active];
  const maxMins = 60;

  return (
    <section id="location" className="relative overflow-hidden bg-linen py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ChapterHead
          time="08:10 — the commute, reconsidered"
          script="unhurried"
          title={
            <>
              Minutes from everything,
              <br />
              <span className="italic text-moss">miles from ordinary</span>
            </>
          }
          lede="Tucked into the green edge of Whitefield — close enough for the commute, far enough for the calm. Pick a category and watch the city unfold."
        />

        {/* category tabs */}
        <Reveal delay={100}>
          <div
            className="mt-14 flex flex-wrap justify-center gap-x-2 gap-y-3"
            role="tablist"
            aria-label="Connectivity categories"
          >
            {categories.map((c, i) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer items-center gap-2.5 border px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] transition-all duration-300 ${
                  active === i
                    ? "border-ink bg-ink text-fog"
                    : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
                }`}
              >
                <c.icon size={15} aria-hidden />
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2">
          {/* radial map */}
          <Reveal>
            <div className="relative h-full border border-ink/10 bg-porcelain p-6 sm:p-8">
              <svg
                key={cat.id}
                viewBox="0 0 660 360"
                className="h-auto w-full"
                role="img"
                aria-label={`Drive-time map from Mistwood to ${cat.label.toLowerCase()} destinations`}
              >
                {[70, 120, 170].map((r) => (
                  <circle
                    key={r}
                    cx="330"
                    cy="185"
                    r={r}
                    fill="none"
                    stroke="rgba(28,43,34,0.10)"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                  />
                ))}
                <text x="330" y="62" textAnchor="middle" fontSize="9" fill="rgba(95,116,100,0.7)" letterSpacing="2">
                  ~30 MIN
                </text>

                {cat.places.map((p, i) => {
                  const end = spokeEnds[i];
                  return (
                    <g key={p.name}>
                      <path
                        className="spoke"
                        d={`M330 185 Q ${(330 + end.x) / 2} ${(185 + end.y) / 2 - 25} ${end.x} ${end.y}`}
                        fill="none"
                        stroke={cat.color}
                        strokeWidth="1.5"
                        opacity="0.75"
                        pathLength={1}
                        style={{ animationDelay: `${i * 0.12}s` }}
                      />
                      <circle cx={end.x} cy={end.y} r="5" fill={cat.color} />
                      <circle cx={end.x} cy={end.y} r="10" fill="none" stroke={cat.color} strokeWidth="1" opacity="0.4" />
                      <text
                        x={end.x}
                        y={end.y - 18}
                        textAnchor="middle"
                        fontSize="12.5"
                        fill="#1c2b22"
                        fontFamily="var(--font-instrument)"
                      >
                        {p.name}
                      </text>
                      <text
                        x={end.x}
                        y={end.y + 28}
                        textAnchor="middle"
                        fontSize="13"
                        fill={cat.color}
                        fontFamily="var(--font-cormorant)"
                        fontStyle="italic"
                        letterSpacing="1"
                      >
                        {p.mins} min
                      </text>
                    </g>
                  );
                })}

                {/* hub */}
                <circle cx="330" cy="185" r="34" fill="rgba(154,123,79,0.10)" />
                <circle cx="330" cy="185" r="22" fill="#1c2b22" />
                <text
                  x="330"
                  y="181"
                  textAnchor="middle"
                  fontSize="8.5"
                  fill="#c2a26e"
                  letterSpacing="2"
                  fontFamily="var(--font-instrument)"
                >
                  MIST
                </text>
                <text
                  x="330"
                  y="192"
                  textAnchor="middle"
                  fontSize="8.5"
                  fill="#c2a26e"
                  letterSpacing="2"
                  fontFamily="var(--font-instrument)"
                >
                  WOOD
                </text>
              </svg>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.24em] text-eucalyptus/70">
                Indicative drive times in regular traffic — not to scale
              </p>
            </div>
          </Reveal>

          {/* destination ledger */}
          <Reveal delay={120}>
            <div key={cat.id} className="flex h-full flex-col">
              {cat.places.map((p, i) => (
                <div
                  key={p.name}
                  className="reveal reveal-visible flex flex-1 items-center gap-6 border-b border-ink/10 py-6 first:border-t"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <p className="timestamp w-20 shrink-0 text-3xl text-bronze">
                    {p.mins}
                    <span className="ml-1 text-sm text-eucalyptus">min</span>
                  </p>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xl font-normal text-ink">{p.name}</p>
                    <p className="mt-0.5 truncate text-sm text-eucalyptus">{p.note}</p>
                    <div className="mt-2.5 h-px w-full bg-ink/8">
                      <div
                        className="h-full transition-[width] duration-700 ease-out"
                        style={{
                          width: `${(p.mins / maxMins) * 100}%`,
                          background: cat.color,
                        }}
                      />
                    </div>
                  </div>
                  <Clock size={16} className="shrink-0 text-eucalyptus/50" aria-hidden />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
