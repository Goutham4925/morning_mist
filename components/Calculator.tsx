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
  "₹" +
  Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

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
    <section id="calculator" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="topo-lines text-mist" />
      <div className="glow-orb right-[10%] top-[25%] h-72 w-72 bg-gold/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
            Run the Numbers
          </p>
          <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
            Your Investment, Visualised
          </h2>
          <div className="gold-line mx-auto mt-8 w-24" />
          <p className="mt-8 text-base font-light leading-relaxed text-mist">
            Slide to model your entry — and see what the guaranteed buyback returns
            at 18 or 24 months.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_3fr]">
          {/* inputs */}
          <Reveal>
            <div className="glass h-full rounded-3xl p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <CalcIcon size={20} className="text-gold-light" aria-hidden />
                <h3 className="font-display text-xl text-cream">Model Your Entry</h3>
              </div>

              <div className="mt-9">
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor="price"
                    className="text-[11px] font-medium uppercase tracking-[0.24em] text-sage"
                  >
                    Purchase Price / sq.ft
                  </label>
                  <span className="font-display text-lg text-gold-light">
                    {inr(pricePerSqft)}
                  </span>
                </div>
                <input
                  id="price"
                  type="range"
                  min={10000}
                  max={14000}
                  step={100}
                  value={pricePerSqft}
                  onChange={(e) => setPricePerSqft(Number(e.target.value))}
                  className="mt-4 w-full cursor-pointer accent-[#c8a24b]"
                />
                <div className="mt-1 flex justify-between text-[10px] uppercase tracking-widest text-sage/60">
                  <span>₹10,000</span>
                  <span>₹14,000</span>
                </div>
              </div>

              <div className="mt-9">
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor="area"
                    className="text-[11px] font-medium uppercase tracking-[0.24em] text-sage"
                  >
                    Unit Area
                  </label>
                  <span className="font-display text-lg text-gold-light">
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
                  className="mt-4 w-full cursor-pointer accent-[#c8a24b]"
                />
                <div className="mt-1 flex justify-between text-[10px] uppercase tracking-widest text-sage/60">
                  <span>1,100</span>
                  <span>2,200</span>
                </div>
              </div>

              <div className="mt-9">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-sage">
                  Buyback Horizon
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {([18, 24] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMonths(m)}
                      aria-pressed={months === m}
                      className={`cursor-pointer rounded-xl border px-4 py-4 text-center transition-all duration-200 ${
                        months === m
                          ? "border-gold bg-gold/15 text-gold-light"
                          : "border-cream/15 text-mist hover:border-gold/40"
                      }`}
                    >
                      <span className="font-display block text-xl">{m} mo</span>
                      <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-sage">
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
            <div className="glass h-full rounded-3xl p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <TrendingUp size={20} className="text-gold-light" aria-hidden />
                <h3 className="font-display text-xl text-cream">Projected Outcome</h3>
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-cream/10 bg-forest/40 p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
                    You Pay Now (75%)
                  </p>
                  <p className="font-display mt-3 text-2xl text-cream">
                    {inrShort(animPaid)}
                  </p>
                </div>
                <div className="rounded-2xl border border-gold/30 bg-gold/8 p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light">
                    Buyback Value
                  </p>
                  <p className="font-display mt-3 text-2xl text-gold-light">
                    {inrShort(animBuyback)}
                  </p>
                </div>
                <div className="rounded-2xl border border-cream/10 bg-forest/40 p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
                    Gross Gain
                  </p>
                  <p
                    className={`font-display mt-3 text-2xl ${
                      gain >= 0 ? "text-cream" : "text-red-300"
                    }`}
                  >
                    {gain >= 0 ? "+" : "−"}
                    {inrShort(Math.abs(animGain))}
                  </p>
                </div>
              </div>

              {/* comparison bars */}
              <div className="mt-9 space-y-5">
                <div>
                  <div className="flex justify-between text-[11px] uppercase tracking-[0.18em] text-sage">
                    <span>Capital In (75%)</span>
                    <span>{inrShort(paidNow)}</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-cream/8">
                    <div
                      className="h-full rounded-full bg-sage/70 transition-[width] duration-700 ease-out"
                      style={{ width: `${(paidNow / barMax) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] uppercase tracking-[0.18em] text-gold-light">
                    <span>Buyback at {months} months</span>
                    <span>{inrShort(buybackValue)}</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-cream/8">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-[width] duration-700 ease-out"
                      style={{ width: `${(buybackValue / barMax) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/10 pt-7">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
                    Return on Capital
                  </p>
                  <p className="font-display mt-1 text-3xl text-gold-light">
                    {animRoi.toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
                    Annualised
                  </p>
                  <p className="font-display mt-1 text-3xl text-cream">
                    {animAnnual.toFixed(1)}%
                  </p>
                </div>
                <a
                  href="#contact"
                  className="ml-auto rounded-full bg-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-forest transition-all duration-300 hover:bg-gold-light"
                >
                  Get Exact Pricing
                </a>
              </div>

              <p className="mt-6 text-[10px] font-light leading-relaxed text-sage/60">
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
