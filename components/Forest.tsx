import Image from "next/image";
import { Leaf, Sprout, ThermometerSun, Wind } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: Sprout,
    title: "Rapid Native Growth",
    text: "Dense native species grow up to 10x faster, forming a self-sustaining ecosystem.",
  },
  {
    icon: Wind,
    title: "Oxygen-Rich Air",
    text: "A living air purifier at your doorstep, enriching every breath you take.",
  },
  {
    icon: ThermometerSun,
    title: "Natural Cooling",
    text: "The forest canopy naturally cools its surroundings through every season.",
  },
  {
    icon: Leaf,
    title: "Thriving Biodiversity",
    text: "Birdsong, butterflies and vibrant greenery woven into everyday life.",
  },
];

export default function Forest() {
  return (
    <section id="forest" className="relative overflow-hidden bg-pine py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(62,115,85,0.25),transparent_70%)]" />
      <div className="mist-layer" />
      <div className="mist-drift" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* photo */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=75"
                  alt="Sunlight streaming through the canopy of a grand old tree"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/70 via-transparent to-pine/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-lg text-cream">
                    “A forest is planted in years. Felt in seconds.”
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-gold-light">
                    The Miyawaki Method
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
              The Heart of Mistwood
            </p>
            <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
              The Miyawaki Forest
            </h2>
            <div className="gold-line mt-8 w-24" />
            <p className="mt-8 text-base font-light leading-relaxed text-mist sm:text-lg">
              Inspired by the renowned Japanese afforestation technique developed by
              Dr.&nbsp;Akira Miyawaki, this dense native forest is a lush green sanctuary
              at the centre of the community — a rich ecosystem that enhances
              biodiversity, improves air quality and naturally cools its surroundings.
            </p>
            <p className="mt-5 text-base font-light leading-relaxed text-mist sm:text-lg">
              More than a green space, it is a peaceful retreat where the sounds of
              nature and fresh, oxygen-rich air create a truly refreshing way to live.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 90}>
              <div className="glass group h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <benefit.icon size={22} className="text-gold-light" aria-hidden />
                </div>
                <p className="font-display mt-6 text-lg text-cream">{benefit.title}</p>
                <p className="mt-3 text-sm font-light leading-relaxed text-sage">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
