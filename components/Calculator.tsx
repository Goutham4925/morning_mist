"use client";

import { useEffect, useRef, useState } from "react";
import { Calculator as CalcIcon, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const BUYBACK = { 18: 14500, 24: 15500 } as const;

function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      fromRef.current = target;
      return;
    }
    const from = fromRef.current;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (target - from) * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

const inrShort = (n: number) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
  return inr(n);
};

export default function Calculator() {
  const [pricePerSqft, setPricePerSqft] = useState(12000);
  const [area, setArea] = useState(1450);
  const [months, setMonths] = useState<18 | 24>(24);

  const unitValue = pricePerSqft * area;
  const paidNow = unitValue * 0.75;
  const buybackValue = BUYBACK[months] * area;
  const gain = buybackValue - unitValue;
  const roi = (gain / paidNow) * 100;
  const annualized = roi / (months / 12);

  const animPaid = useCountUp(paidNow);
  const animBuyback = useCountUp(buybackValue);
  const animGain = useCountUp(gain);
  const animRoi = useCountUp(roi);
  const animAnnual = useCountUp(annualized);

  const barMax = Math.max(paidNow, buybackValue);

  return (
    <section id="calculator" className="relative overflow-hidden bg-inkdeep py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
          {/* inputs */}
          <Reveal>
            <div className="h-full border border-fog/15 bg-ink p-9 sm:p-11">
              <div className="flex items-center gap-3">
                <CalcIcon size={19} className="text-bronzelight" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display text-2xl font-light italic text-fog">
                  Model your entry
                </h3>
              </div>

              <div className="mt-10">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="price" className="eyebrow text-sagemist/70">
                    Purchase Price / sq.ft
                  </label>
                  <span className="timestamp text-xl text-bronzelight">{inr(pricePerSqft)}</span>
                </div>
                <input
                  id="price"
                  type="range"
                  min={10000}
                  max={14000}
                  step={100}
                  value={pricePerSqft}
                  onChange={(e) => setPricePerSqft(Number(e.target.value))}
                  className="mt-4 w-full cursor-pointer accent-[#c2a26e]"
                />
                <div className="mt-1 flex justify-between text-[10px] uppercase tracking-widest text-sagemist/50">
                  <span>₹10,000</span>
                  <span>₹14,000</span>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="area" className="eyebrow text-sagemist/70">
                    Unit Area
                  </label>
                  <span className="timestamp text-xl text-bronzelight">
                    {area.toLocaleString("en-IN")} sq.ft
                  </span>
                </div>
                <input
                  id="area"
                  type="range"
                  min={1100}
                  max={2200}
                  step={10}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="mt-4 w-full cursor-pointer accent-[#c2a26e]"
                />
                <div className="mt-1 flex justify-between text-[10px] uppercase tracking-widest text-sagemist/50">
                  <span>1,100</span>
                  <span>2,200</span>
                </div>
              </div>

              <div className="mt-10">
                <p className="eyebrow text-sagemist/70">Buyback Horizon</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {([18, 24] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMonths(m)}
                      aria-pressed={months === m}
                      className={`cursor-pointer border px-4 py-4 text-center transition-all duration-200 ${
                        months === m
                          ? "border-bronzelight bg-bronze/15 text-bronzelight"
                          : "border-fog/15 text-sagemist hover:border-bronzelight/40"
                      }`}
                    >
                      <span className="font-display block text-2xl font-light italic">{m} mo</span>
                      <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-sagemist/60">
                        @ {inr(BUYBACK[m])}/sq.ft
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* outputs */}
          <Reveal delay={120}>
            <div className="h-full border border-fog/15 bg-ink p-9 sm:p-11">
              <div className="flex items-center gap-3">
                <TrendingUp size={19} className="text-bronzelight" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display text-2xl font-light italic text-fog">
                  Projected outcome
                </h3>
              </div>

              <div className="mt-10 grid gap-px border border-fog/10 bg-fog/10 sm:grid-cols-3">
                <div className="bg-ink p-6">
                  <p className="eyebrow text-[9px] text-sagemist/60">You Pay Now (75%)</p>
                  <p className="font-display mt-3 text-3xl font-light tabular-nums text-fog">
                    {inrShort(animPaid)}
                  </p>
                </div>
                <div className="bg-bronze/10 p-6">
                  <p className="eyebrow text-[9px] text-bronzelight">Buyback Value</p>
                  <p className="font-display mt-3 text-3xl font-light tabular-nums text-bronzelight">
                    {inrShort(animBuyback)}
                  </p>
                </div>
                <div className="bg-ink p-6">
                  <p className="eyebrow text-[9px] text-sagemist/60">Gross Gain</p>
                  <p
                    className={`font-display mt-3 text-3xl font-light ${
                      gain >= 0 ? "text-fog" : "text-red-300"
                    }`}
                  >
                    {gain >= 0 ? "+" : "−"}
                    {inrShort(Math.abs(animGain))}
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-sagemist/70">
                    <span>Capital In (75%)</span>
                    <span>{inrShort(paidNow)}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden bg-fog/8">
                    <div
                      className="h-full bg-eucalyptus transition-[width] duration-700 ease-out"
                      style={{ width: `${(paidNow / barMax) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-bronzelight">
                    <span>Buyback at {months} months</span>
                    <span>{inrShort(buybackValue)}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden bg-fog/8">
                    <div
                      className="h-full bg-bronzelight transition-[width] duration-700 ease-out"
                      style={{ width: `${(buybackValue / barMax) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-5 border-t border-fog/10 pt-8">
                <div>
                  <p className="eyebrow text-[9px] text-sagemist/60">Return on Capital</p>
                  <p className="timestamp mt-1 text-4xl tabular-nums text-bronzelight">
                    {animRoi.toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-[9px] text-sagemist/60">Annualised</p>
                  <p className="timestamp mt-1 text-4xl tabular-nums text-fog">
                    {animAnnual.toFixed(1)}%
                  </p>
                </div>
                <a href="#contact" className="btn-line btn-fill-bronze ml-auto">
                  Get Exact Pricing
                </a>
              </div>

              <p className="mt-7 text-[10px] leading-relaxed text-sagemist/50">
                Illustration only, based on the published buyback rates of ₹14,500
                (18&nbsp;months) and ₹15,500 (24&nbsp;months) per sq.ft. Purchase price
                shown is an adjustable assumption, not an offer. Excludes additional
                charges, stamp duty and registration. Please verify all terms with
                the sales team.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
