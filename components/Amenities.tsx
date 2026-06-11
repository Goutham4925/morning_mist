"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Activity,
  Baby,
  Bike,
  Briefcase,
  CloudRain,
  Dog,
  Dumbbell,
  Flower2,
  Footprints,
  Gamepad2,
  Landmark,
  LeafyGreen,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Theater,
  Trees,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Period = {
  id: string;
  time: string;
  label: string;
  blurb: string;
  image: string;
  alt: string;
  items: { icon: LucideIcon; name: string }[];
};

const periods: Period[] = [
  {
    id: "mornings",
    time: "06:00",
    label: "Mornings",
    blurb: "The forest hour — trails, laps and sun salutations before the city wakes.",
    image: "/img/m19.jpg",
    alt: "A couple jogging up a forest trail in early light",
    items: [
      { icon: Footprints, name: "Jogging & Walking Trails" },
      { icon: Flower2, name: "Yoga & Meditation Deck" },
      { icon: Waves, name: "Swimming Pool" },
      { icon: Dumbbell, name: "Fitness Studio" },
      { icon: Bike, name: "Cycling Track" },
      { icon: Trees, name: "Miyawaki Forest" },
      { icon: Activity, name: "Outdoor Sports Courts" },
    ],
  },
  {
    id: "afternoons",
    time: "13:00",
    label: "Afternoons",
    blurb: "The social hour — work, play and long lunches under the clubhouse roof.",
    image: "/img/m33.jpg",
    alt: "An unhurried afternoon at the plunge pool",
    items: [
      { icon: Landmark, name: "Grand Clubhouse" },
      { icon: Briefcase, name: "Co-Working Lounge" },
      { icon: Gamepad2, name: "Indoor Games Lounge" },
      { icon: Baby, name: "Children's Play Area" },
      { icon: Dog, name: "Pet Park" },
      { icon: LeafyGreen, name: "Landscaped Gardens" },
    ],
  },
  {
    id: "evenings",
    time: "18:30",
    label: "Evenings",
    blurb: "The golden hour — open-air gatherings, quiet corners and a community that never feels crowded.",
    image: "/img/m25.jpg",
    alt: "A couple unwinding in warm evening light",
    items: [
      { icon: Theater, name: "Open-Air Amphitheatre" },
      { icon: PartyPopper, name: "Multipurpose Hall" },
      { icon: Sparkles, name: "Senior Citizen Court" },
      { icon: ShieldCheck, name: "24×7 Security" },
      { icon: Zap, name: "EV Charging Bays" },
      { icon: CloudRain, name: "Rainwater Harvesting" },
    ],
  },
];

export default function Amenities() {
  const [active, setActive] = useState(0);
  const period = periods[active];

  return (
    <section id="amenities" className="relative overflow-hidden bg-fog py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* head + period dial */}
          <div>
            <Reveal>
              <p className="timestamp flex items-baseline gap-3 text-lg text-bronze">
                <span aria-hidden className="inline-block h-px w-10 self-center bg-current opacity-60" />
                all day — nineteen ways
              </p>
              <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-6xl">
                Amenities, kept by{" "}
                <span className="italic text-moss">the clock</span>
              </h2>
              <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-eucalyptus">
                Nineteen curated experiences, arranged by the hour they come alive.
                Choose a time of day.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10" role="tablist" aria-label="Time of day">
                {periods.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={active === i}
                    onClick={() => setActive(i)}
                    className={`group flex w-full cursor-pointer items-baseline gap-5 border-b px-1 py-5 text-left transition-all duration-300 first:border-t ${
                      active === i
                        ? "border-bronze/60 bg-porcelain"
                        : "border-ink/10 hover:bg-porcelain/60"
                    }`}
                  >
                    <span
                      className={`timestamp w-14 shrink-0 text-lg transition-colors duration-300 ${
                        active === i ? "text-bronze" : "text-eucalyptus/60"
                      }`}
                    >
                      {p.time}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`font-display block text-2xl font-light transition-colors duration-300 sm:text-3xl ${
                          active === i ? "italic text-ink" : "text-ink/60 group-hover:text-ink"
                        }`}
                      >
                        {p.label}
                      </span>
                      <span
                        className={`mt-1 block text-xs leading-relaxed text-eucalyptus transition-opacity duration-300 ${
                          active === i ? "opacity-100" : "opacity-0 max-lg:hidden"
                        }`}
                      >
                        {p.blurb}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`ml-auto h-px w-8 shrink-0 self-center transition-colors duration-300 ${
                        active === i ? "bg-bronze" : "bg-transparent"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* photo + tiles, swap per period */}
          <Reveal delay={140}>
            <div key={period.id}>
              <div className="reveal reveal-visible relative aspect-[16/7] overflow-hidden">
                <Image
                  src={period.image}
                  alt={period.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <p className="timestamp over-photo absolute bottom-4 left-6 text-xl text-fog">
                  {period.time} — {period.label.toLowerCase()}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3">
                {period.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="reveal reveal-visible group flex min-h-[6.5rem] flex-col justify-between bg-porcelain p-5 transition-colors duration-300 hover:bg-fog"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <item.icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-bronze transition-transform duration-300 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                    <p className="mt-4 text-sm leading-snug text-ink">{item.name}</p>
                  </div>
                ))}
                {/* filler cell keeps the grid rhythm when count isn't a multiple of 3 */}
                {period.items.length % 3 !== 0 &&
                  Array.from({ length: 3 - (period.items.length % 3) }).map((_, i) => (
                    <div
                      key={`pad-${i}`}
                      aria-hidden
                      className="hidden min-h-[6.5rem] bg-porcelain/50 sm:block"
                    />
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
