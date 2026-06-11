import Image from "next/image";
import { ArrowDown } from "lucide-react";

const stats = [
  { value: "2.8", label: "Acres" },
  { value: "180", label: "Apartments" },
  { value: "20", label: "Row Villas" },
  { value: "03", label: "Towers" },
  { value: "12", label: "Floors" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh flex-col overflow-hidden bg-ink">
      {/* dawn photograph */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-kenburns absolute inset-0">
          <Image
            src="/img/m21.jpg"
            alt="Golden first light breaking through a great misty tree at Mistwood"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* layered grade: vertical falloff + left column shadow where the type sits */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,31,24,0.62)_0%,rgba(20,31,24,0.22)_42%,rgba(20,31,24,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(20,31,24,0.55)_0%,rgba(20,31,24,0.15)_55%,transparent_75%)]" />
      <div className="mist-drift" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-20 pt-36 lg:px-10">
        <p className="font-script over-photo rise rise-1 text-4xl text-bronzelight sm:text-5xl">
          good morning,
        </p>

        <h1 className="font-display over-photo rise rise-2 mt-3 max-w-4xl text-balance text-5xl font-light leading-[1.04] tracking-tight text-fog sm:text-7xl lg:text-[5.6rem]">
          this is how the day begins{" "}
          <span className="italic text-bronzelight">at Mistwood</span>
        </h1>

        <p className="over-photo rise rise-3 mt-8 max-w-xl text-pretty text-base font-normal leading-relaxed text-fog/95">
          Premium apartments and row villas wrapped in a living Miyawaki forest,
          near Whitefield, Bengaluru — where the first hour belongs to birdsong,
          not traffic.
        </p>

        <div className="rise rise-4 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#overview" className="btn-line btn-fill-bronze">
            Walk Through the Day
          </a>
          <a
            href="#invest"
            className="btn-line border-fog/80 bg-ink/20 text-fog backdrop-blur-sm hover:bg-fog hover:text-ink"
          >
            Investor Model
          </a>
        </div>

        {/* day-clock stat ribbon */}
        <div className="rise rise-5 mt-16 border-t border-fog/25 pt-7">
          <div className="flex flex-wrap items-baseline gap-x-12 gap-y-6">
            <p className="timestamp over-photo text-lg text-bronzelight">
              05:48 — first light
            </p>
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <span className="font-display over-photo text-3xl font-light text-fog sm:text-4xl">
                  {stat.value}
                </span>
                <span className="over-photo text-[10px] uppercase tracking-[0.3em] text-fog/75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#overview"
        aria-label="Scroll to overview"
        className="absolute bottom-8 right-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-fog/40 bg-ink/20 text-fog backdrop-blur-sm transition-all duration-300 hover:border-bronzelight hover:text-bronzelight lg:flex"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
