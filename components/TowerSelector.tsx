"use client";

import { useState } from "react";
import { Building2, Compass, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const FLOORS = 12;
const UNITS = ["A", "B", "C", "D", "E"];

const towers = [
  {
    id: 0,
    name: "Tower A",
    facing: "East · Forest View",
    note: "Sunrise balconies opening over the Miyawaki canopy.",
  },
  {
    id: 1,
    name: "Tower B",
    facing: "North · Club View",
    note: "The centrepiece — panoramic decks above the clubhouse.",
  },
  {
    id: 2,
    name: "Tower C",
    facing: "West · Sunset View",
    note: "Golden-hour terraces angled across the greens.",
  },
];

/* deterministic mock inventory — same result every render */
function unitInfo(tower: number, floor: number, unit: number) {
  const seed = tower * 131 + floor * 17 + unit * 7;
  const bhk = (seed % 5) < 2 ? "2 BHK" : "3 BHK";
  const sqft = bhk === "2 BHK" ? 1180 + (seed % 4) * 35 : 1540 + (seed % 5) * 45;
  const available = seed % 4 !== 0;
  return { bhk, sqft, available };
}

export default function TowerSelector() {
  const [tower, setTower] = useState(1);
  const [floor, setFloor] = useState(8);

  const selected = towers[tower];

  const waText = (u: string) =>
    encodeURIComponent(
      `Hi! I'm interested in Mistwood — ${selected.name}, Floor ${floor}, Unit ${u}. Could you share details?`
    );

  return (
    <section id="towers" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="topo-lines text-mist" />
      <div className="glow-orb left-[5%] top-[20%] h-80 w-80 bg-moss/25" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
            Choose Your Address
          </p>
          <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
            Three Towers. Twelve Floors. One View You&apos;ll Love.
          </h2>
          <div className="gold-line mx-auto mt-8 w-24" />
          <p className="mt-8 text-base font-light leading-relaxed text-mist">
            Select a tower, pick a floor, and see the homes waiting there.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* 3D towers */}
          <Reveal>
            <div className="tower-scene flex items-end justify-center gap-10 py-8 sm:gap-14">
              {towers.map((t) => {
                const isSel = tower === t.id;
                const height = t.id === 1 ? 300 : 252; // center tower taller
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTower(t.id)}
                    aria-pressed={isSel}
                    aria-label={`Select ${t.name}, ${t.facing}`}
                    className="group cursor-pointer outline-none"
                  >
                    <div className="tower-3d relative" style={{ height, width: 76 }}>
                      {/* side face */}
                      <div
                        className={`tower-face-side absolute left-0 top-0 h-full w-7 transition-colors duration-300 ${
                          isSel ? "bg-moss" : "bg-pine"
                        }`}
                      />
                      {/* front face: stacked floors */}
                      <div
                        className={`relative flex h-full w-full flex-col-reverse overflow-hidden rounded-t-sm border transition-all duration-300 ${
                          isSel
                            ? "border-gold/70 bg-[#1a3526] shadow-[0_30px_60px_-20px_rgba(200,162,75,0.35)]"
                            : "border-cream/15 bg-[#142b1d] group-hover:border-gold/40"
                        }`}
                      >
                        {Array.from({ length: FLOORS }).map((_, fi) => {
                          const f = fi + 1;
                          const isFloorSel = isSel && floor === f;
                          return (
                            <div
                              key={f}
                              className={`tower-floor w-full flex-1 border-t transition-colors duration-200 ${
                                isFloorSel
                                  ? "border-gold/60 bg-gold/40"
                                  : "border-cream/8"
                              }`}
                            />
                          );
                        })}
                      </div>
                      {/* crown */}
                      <div
                        className={`absolute -top-2 left-1/2 h-2 w-10 -translate-x-1/2 rounded-t-sm transition-colors duration-300 ${
                          isSel ? "bg-gold" : "bg-cream/20"
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-5 text-center text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                        isSel ? "text-gold-light" : "text-sage group-hover:text-mist"
                      }`}
                    >
                      {t.name}
                    </p>
                  </button>
                );
              })}
            </div>
            <p className="text-center text-[10px] font-light uppercase tracking-[0.22em] text-sage/60">
              Stylised representation — tap a tower to select
            </p>
          </Reveal>

          {/* control panel */}
          <Reveal delay={120}>
            <div className="glass rounded-3xl p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-cream">{selected.name}</h3>
                  <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-light">
                    <Compass size={14} aria-hidden /> {selected.facing}
                  </p>
                </div>
                <Building2 size={28} className="text-sage" aria-hidden />
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-mist">
                {selected.note}
              </p>

              {/* floor picker */}
              <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.26em] text-sage">
                Select Floor
              </p>
              <div className="mt-3 grid grid-cols-6 gap-2">
                {Array.from({ length: FLOORS }).map((_, fi) => {
                  const f = FLOORS - fi; // 12 down to 1
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFloor(f)}
                      aria-pressed={floor === f}
                      className={`cursor-pointer rounded-lg border py-2.5 text-sm transition-all duration-200 ${
                        floor === f
                          ? "border-gold bg-gold text-forest"
                          : "border-cream/15 text-mist hover:border-gold/50 hover:text-gold-light"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>

              {/* units on the floor */}
              <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.26em] text-sage">
                Homes on Floor {floor}
              </p>
              <div className="mt-3 space-y-2">
                {UNITS.map((u, ui) => {
                  const info = unitInfo(tower, floor, ui);
                  return (
                    <div
                      key={u}
                      className="flex items-center justify-between gap-3 rounded-xl border border-cream/10 bg-forest/40 px-4 py-3"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-display text-lg text-gold-light">{u}</span>
                        <div>
                          <p className="text-sm text-cream">{info.bhk}</p>
                          <p className="text-xs font-light text-sage">
                            ~{info.sqft.toLocaleString("en-IN")} sq.ft
                          </p>
                        </div>
                      </div>
                      {info.available ? (
                        <a
                          href={`https://wa.me/919036526147?text=${waText(u)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs uppercase tracking-[0.14em] text-gold-light transition-all duration-200 hover:bg-gold hover:text-forest"
                        >
                          <MessageCircle size={13} aria-hidden /> Enquire
                        </a>
                      ) : (
                        <span className="rounded-full border border-cream/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-sage/60">
                          Reserved
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-[10px] font-light leading-relaxed text-sage/60">
                Indicative inventory for illustration — please confirm live
                availability, sizes and pricing with the sales team.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
