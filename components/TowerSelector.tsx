"use client";

import { useState } from "react";
import { Building2, Compass, MessageCircle } from "lucide-react";
import ChapterHead from "./ChapterHead";
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
    <section id="towers" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="mist-drift" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ChapterHead
          dark
          time="16:30 — golden hour"
          title={
            <>
              Three towers. Twelve floors.
              <br />
              <span className="italic text-bronzelight">one view you&apos;ll love</span>
            </>
          }
          lede="Select a tower, pick a floor, and see the homes waiting there."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* 3D towers */}
          <Reveal>
            <div className="tower-scene flex items-end justify-center gap-10 py-8 sm:gap-14">
              {towers.map((t) => {
                const isSel = tower === t.id;
                const height = t.id === 1 ? 300 : 252;
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
                      <div
                        className={`tower-face-side absolute left-0 top-0 h-full w-7 transition-colors duration-300 ${
                          isSel ? "bg-moss" : "bg-inkdeep"
                        }`}
                      />
                      <div
                        className={`relative flex h-full w-full flex-col-reverse overflow-hidden border transition-all duration-300 ${
                          isSel
                            ? "border-bronzelight/70 bg-[#243a2c] shadow-[0_30px_60px_-20px_rgba(194,162,110,0.3)]"
                            : "border-fog/15 bg-[#1a2a20] group-hover:border-bronzelight/40"
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
                                  ? "border-bronzelight/60 bg-bronze/50"
                                  : "border-fog/8"
                              }`}
                            />
                          );
                        })}
                      </div>
                      <div
                        className={`absolute -top-2 left-1/2 h-2 w-10 -translate-x-1/2 transition-colors duration-300 ${
                          isSel ? "bg-bronzelight" : "bg-fog/20"
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-5 text-center text-[10px] uppercase tracking-[0.26em] transition-colors duration-300 ${
                        isSel ? "text-bronzelight" : "text-sagemist/60 group-hover:text-sagemist"
                      }`}
                    >
                      {t.name}
                    </p>
                  </button>
                );
              })}
            </div>
            <p className="text-center text-[10px] uppercase tracking-[0.24em] text-sagemist/50">
              Stylised representation — tap a tower to select
            </p>
          </Reveal>

          {/* control panel */}
          <Reveal delay={120}>
            <div className="border border-fog/15 bg-inkdeep/60 p-9 sm:p-11">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-light italic text-fog">
                    {selected.name}
                  </h3>
                  <p className="mt-2.5 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-bronzelight">
                    <Compass size={13} aria-hidden /> {selected.facing}
                  </p>
                </div>
                <Building2 size={26} className="text-sagemist/50" aria-hidden />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-sagemist/85">{selected.note}</p>

              <p className="eyebrow mt-9 text-sagemist/70">Select Floor</p>
              <div className="mt-3 grid grid-cols-6 gap-1.5">
                {Array.from({ length: FLOORS }).map((_, fi) => {
                  const f = FLOORS - fi;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFloor(f)}
                      aria-pressed={floor === f}
                      className={`cursor-pointer border py-2.5 text-sm transition-all duration-200 ${
                        floor === f
                          ? "border-bronzelight bg-bronzelight text-ink"
                          : "border-fog/15 text-sagemist hover:border-bronzelight/50 hover:text-bronzelight"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>

              <p className="eyebrow mt-9 text-sagemist/70">Homes on Floor {floor}</p>
              <div className="mt-3">
                {UNITS.map((u, ui) => {
                  const info = unitInfo(tower, floor, ui);
                  return (
                    <div
                      key={u}
                      className="flex items-center justify-between gap-3 border-b border-fog/10 py-3.5 first:border-t"
                    >
                      <div className="flex items-center gap-5">
                        <span className="font-display text-xl italic text-bronzelight">{u}</span>
                        <div>
                          <p className="text-sm text-fog">{info.bhk}</p>
                          <p className="text-xs text-sagemist/60">
                            ~{info.sqft.toLocaleString("en-IN")} sq.ft
                          </p>
                        </div>
                      </div>
                      {info.available ? (
                        <a
                          href={`https://wa.me/919036526147?text=${waText(u)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border border-bronzelight/50 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-bronzelight transition-all duration-200 hover:bg-bronzelight hover:text-ink"
                        >
                          <MessageCircle size={12} aria-hidden /> Enquire
                        </a>
                      ) : (
                        <span className="border border-fog/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-sagemist/40">
                          Reserved
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-[10px] leading-relaxed text-sagemist/50">
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
