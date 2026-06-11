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
      {/* grade: legible without killing the dawn */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,31,24,0.55)_0%,rgba(20,31,24,0.1)_40%,rgba(20,31,24,0.78)_100%)]" />
      <div className="mist-drift" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-20 pt-36 lg:px-10">
        <p className="font-script text-4xl text-bronzelight sm:text-5xl">
          good morning,
        </p>

        <h1 className="font-display mt-3 max-w-4xl text-5xl font-light leading-[1.04] tracking-tight text-fog sm:text-7xl lg:text-[5.6rem]">
          this is how the day
          <br />
          begins <span className="italic text-bronzelight">at Mistwood</span>
        </h1>

        <p className="mt-8 max-w-xl text-base font-normal leading-relaxed text-fog/85">
          Premium apartments and row villas wrapped in a living Miyawaki forest,
          near Whitefield, Bengaluru — where the first hour belongs to birdsong,
          not traffic.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#overview" className="btn-line btn-fill-bronze">
            Walk Through the Day
          </a>
          <a
            href="#invest"
            className="btn-line text-fog hover:bg-fog hover:text-ink"
          >
            Investor Model
          </a>
        </div>

        {/* day-clock stat ribbon */}
        <div className="mt-16 border-t border-fog/20 pt-7">
          <div className="flex flex-wrap items-baseline gap-x-12 gap-y-6">
            <p className="timestamp text-lg text-bronzelight">05:48 — first light</p>
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <span className="font-display text-3xl font-light text-fog sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-fog/60">
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
        className="absolute bottom-8 right-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-fog/30 text-fog/80 transition-all duration-300 hover:border-bronzelight hover:text-bronzelight lg:flex"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
