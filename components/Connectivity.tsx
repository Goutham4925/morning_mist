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
    color: "#e3c684",
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
    color: "#87a894",
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
    color: "#9fc3a9",
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
    color: "#d8b56a",
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
    color: "#cfdcd2",
    places: [
      { name: "Forum Shantiniketan", mins: 18, note: "Mall, dining & cinema" },
      { name: "VR Bengaluru", mins: 22, note: "The Black Box on Whitefield Rd" },
      { name: "Phoenix Marketcity", mins: 25, note: "Bengaluru's biggest mall" },
      { name: "Decathlon Anubhava", mins: 15, note: "Sports & weekend gear" },
    ],
  },
];

/* fixed spoke endpoints around the hub (SVG coords) */
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
    <section id="location" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="topo-lines text-mist" />
      <div className="glow-orb right-[10%] top-[10%] h-80 w-80 bg-fern/20" />
      <div className="mist-drift" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
            Location &amp; Connectivity
          </p>
          <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
            Minutes From Everything.
            <br />
            <span className="text-gradient-gold">Miles From Ordinary.</span>
          </h2>
          <div className="gold-line mx-auto mt-8 w-24" />
          <p className="mt-8 text-base font-light leading-relaxed text-mist">
            Tucked into the green edge of Whitefield — close enough for the commute,
            far enough for the calm. Pick a category and watch the city unfold
            around you.
          </p>
        </Reveal>

        {/* category tabs */}
        <Reveal delay={100}>
          <div
            className="mt-12 flex flex-wrap justify-center gap-3"
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
                className={`flex cursor-pointer items-center gap-2.5 rounded-full border px-6 py-3 text-sm uppercase tracking-[0.14em] transition-all duration-300 ${
                  active === i
                    ? "border-gold bg-gold/15 text-gold-light shadow-[0_0_30px_rgba(200,162,75,0.15)]"
                    : "border-cream/15 text-sage hover:border-gold/40 hover:text-mist"
                }`}
              >
                <c.icon size={16} aria-hidden />
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          {/* radial map */}
          <Reveal>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
              <svg
                key={cat.id} /* remount to replay spoke animation */
                viewBox="0 0 660 360"
                className="h-auto w-full"
                role="img"
                aria-label={`Drive-time map from Mistwood to ${cat.label.toLowerCase()} destinations`}
              >
                {/* range rings */}
                {[70, 120, 170].map((r) => (
                  <circle
                    key={r}
                    cx="330"
                    cy="185"
                    r={r}
                    fill="none"
                    stroke="rgba(207,220,210,0.10)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                ))}
                <text x="330" y="62" textAnchor="middle" fontSize="9" fill="rgba(135,168,148,0.6)" letterSpacing="2">
                  ~30 MIN
                </text>

                {/* spokes */}
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
                        opacity="0.7"
                        pathLength={1}
                        style={{ animationDelay: `${i * 0.12}s` }}
                      />
                      <circle cx={end.x} cy={end.y} r="5" fill={cat.color} />
                      <circle cx={end.x} cy={end.y} r="10" fill="none" stroke={cat.color} strokeWidth="1" opacity="0.4" />
                      <text
                        x={end.x}
                        y={end.y - 18}
                        textAnchor="middle"
                        fontSize="12"
                        fill="#f6f4ec"
                        fontFamily="var(--font-josefin)"
                      >
                        {p.name}
                      </text>
                      <text
                        x={end.x}
                        y={end.y + 26}
                        textAnchor="middle"
                        fontSize="11"
                        fill={cat.color}
                        fontFamily="var(--font-josefin)"
                        letterSpacing="1"
                      >
                        {p.mins} min
                      </text>
                    </g>
                  );
                })}

                {/* hub */}
                <circle cx="330" cy="185" r="34" fill="rgba(200,162,75,0.12)" />
                <circle cx="330" cy="185" r="22" fill="#0c1d14" stroke="#c8a24b" strokeWidth="2" />
                <text
                  x="330"
                  y="181"
                  textAnchor="middle"
                  fontSize="9"
                  fill="#e3c684"
                  letterSpacing="2"
                  fontFamily="var(--font-cinzel)"
                >
                  MIST
                </text>
                <text
                  x="330"
                  y="193"
                  textAnchor="middle"
                  fontSize="9"
                  fill="#e3c684"
                  letterSpacing="2"
                  fontFamily="var(--font-cinzel)"
                >
                  WOOD
                </text>
              </svg>
              <p className="mt-2 text-center text-[10px] font-light uppercase tracking-[0.22em] text-sage/60">
                Indicative drive times in regular traffic — not to scale
              </p>
            </div>
          </Reveal>

          {/* destination list */}
          <Reveal delay={120}>
            <div key={cat.id} className="flex h-full flex-col gap-3">
              {cat.places.map((p, i) => (
                <div
                  key={p.name}
                  className="glass reveal reveal-visible flex flex-1 items-center gap-5 rounded-2xl px-6 py-5 transition-all duration-300 hover:border-gold/40"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: `${cat.color}55`, background: `${cat.color}14` }}
                  >
                    <Clock size={18} style={{ color: cat.color }} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base text-cream">{p.name}</p>
                    <p className="mt-0.5 truncate text-xs font-light text-sage">{p.note}</p>
                    {/* drive-time bar */}
                    <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-cream/8">
                      <div
                        className="h-full rounded-full transition-[width] duration-700 ease-out"
                        style={{
                          width: `${(p.mins / maxMins) * 100}%`,
                          background: cat.color,
                        }}
                      />
                    </div>
                  </div>
                  <p className="font-display shrink-0 text-2xl text-gold-light">
                    {p.mins}
                    <span className="ml-1 text-xs font-light tracking-widest text-sage">MIN</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
