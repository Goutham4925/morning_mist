import { BadgeCheck, HandCoins, TrendingUp } from "lucide-react";
import ChapterHead from "./ChapterHead";
import Reveal from "./Reveal";

const steps = [
  {
    icon: HandCoins,
    step: "I",
    title: "Early Investor Entry",
    text: "Buy a unit of your choice and pay 75% upfront. The balance is paid on possession along with additional charges and stamp duty / registration charges.",
  },
  {
    icon: TrendingUp,
    step: "II",
    title: "Post-Launch Resale",
    text: "Resell at your convenience and at your marketing price post launch — ride the appreciation of one of Bengaluru's fastest-growing corridors.",
  },
  {
    icon: BadgeCheck,
    step: "III",
    title: "Guaranteed Buyback",
    text: "A structured exit, secured from day one. Unit buyback at ₹14,500 after 18 months, or ₹15,500 after 24 months.",
  },
];

export default function Invest() {
  return (
    <section id="invest" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="mist-drift" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ChapterHead
          dark
          time="21:00 — the numbers, after dinner"
          title={
            <>
              Invest early.
              <br />
              <span className="italic text-bronzelight">Exit on your terms.</span>
            </>
          }
          lede="A transparent, investor-first structure designed for both wealth creation and peace of mind — with a guaranteed exit built in."
        />

        <div className="mt-16 grid gap-px border border-fog/10 bg-fog/10 lg:grid-cols-3">
          {steps.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <div className="group relative h-full overflow-hidden bg-ink p-10 transition-colors duration-300 hover:bg-inkdeep">
                <span className="font-display absolute -right-2 -top-7 text-[7rem] font-light italic text-fog/4 transition-colors duration-300 group-hover:text-bronzelight/8">
                  {item.step}
                </span>
                <item.icon size={24} className="text-bronzelight" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display mt-7 text-2xl font-normal text-fog">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-sagemist/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 border border-bronzelight/30 bg-bronze/8 p-10 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
              <div>
                <p className="eyebrow text-bronzelight">Guaranteed Buyback</p>
                <p className="font-display mt-5 text-3xl font-light leading-snug text-fog sm:text-4xl">
                  ₹14,500{" "}
                  <span className="text-lg italic text-sagemist/70">after 18 months</span>
                  <span className="mx-5 text-bronzelight/50">·</span>
                  ₹15,500{" "}
                  <span className="text-lg italic text-sagemist/70">after 24 months</span>
                </p>
              </div>
              <a href="#contact" className="btn-line btn-fill-bronze shrink-0">
                Talk to Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
