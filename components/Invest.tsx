import { BadgeCheck, HandCoins, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: HandCoins,
    step: "01",
    title: "Early Investor Entry",
    text: "Buy a unit of your choice and pay 75% upfront. The balance is paid on possession along with additional charges and stamp duty / registration charges.",
  },
  {
    icon: TrendingUp,
    step: "02",
    title: "Post-Launch Resale",
    text: "Resell at your convenience and at your marketing price post launch — ride the appreciation of one of Bengaluru's fastest-growing corridors.",
  },
  {
    icon: BadgeCheck,
    step: "03",
    title: "Guaranteed Buyback",
    text: "A structured exit, secured from day one. Unit buyback at ₹14,500 after 18 months, or ₹15,500 after 24 months.",
  },
];

export default function Invest() {
  return (
    <section id="invest" className="relative overflow-hidden bg-pine py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_80%_10%,rgba(200,162,75,0.10),transparent_70%)]" />
      <div className="mist-layer" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
            Investor Sales Model
          </p>
          <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
            Invest Early. Exit On Your Terms.
          </h2>
          <div className="gold-line mx-auto mt-8 w-24" />
          <p className="mt-8 text-base font-light leading-relaxed text-mist">
            A transparent, investor-first structure designed for both wealth creation
            and peace of mind — with a guaranteed exit built in.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-9 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <span className="font-display absolute -right-3 -top-6 text-8xl text-cream/5 transition-colors duration-300 group-hover:text-gold/10">
                  {item.step}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <item.icon size={22} className="text-gold-light" aria-hidden />
                </div>
                <h3 className="font-display mt-6 text-xl text-cream">{item.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-sage">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent p-9 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
                  Guaranteed Buyback
                </p>
                <p className="font-display mt-4 text-2xl leading-snug text-cream sm:text-3xl">
                  ₹14,500 <span className="text-base font-light text-sage">after 18 months</span>
                  <span className="mx-4 text-gold/50">·</span>
                  ₹15,500 <span className="text-base font-light text-sage">after 24 months</span>
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-full bg-gold px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-forest transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(200,162,75,0.35)]"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
