import Image from "next/image";
import { Leaf, Sprout, ThermometerSun, Wind } from "lucide-react";
import ChapterHead from "./ChapterHead";
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
    <section id="forest" className="relative overflow-hidden bg-inkdeep py-28 sm:py-36">
      <div className="mist-drift" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* statement photo */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/img/m17.jpg"
                  alt="A great tree leaning over a still forest pond at Mistwood"
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inkdeep/80 via-transparent to-inkdeep/10" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="font-display text-2xl font-light italic leading-snug text-fog">
                    “A forest is planted in years.
                    <br />
                    Felt in seconds.”
                  </p>
                  <p className="eyebrow mt-3 text-bronzelight">The Miyawaki Method</p>
                </div>
              </div>
              {/* inset: meditation */}
              <div className="absolute -right-5 -top-8 hidden w-[36%] border-8 border-inkdeep sm:block">
                <div className="relative aspect-square">
                  <Image
                    src="/img/m3.jpg"
                    alt="Quiet meditation in the sunlit morning forest"
                    fill
                    sizes="18vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div className="order-1 lg:order-2">
            <ChapterHead
              dark
              align="left"
              time="18:00 — beneath the canopy"
              script="breathe"
              title={
                <>
                  The Miyawaki
                  <br />
                  <span className="italic text-bronzelight">forest</span>
                </>
              }
            />
            <Reveal delay={100}>
              <p className="mt-9 text-base font-normal leading-relaxed text-sagemist/85 sm:text-lg">
                Inspired by the renowned Japanese afforestation technique developed by
                Dr.&nbsp;Akira Miyawaki, this dense native forest is a lush green
                sanctuary at the centre of the community — a rich ecosystem that
                enhances biodiversity, improves air quality and naturally cools its
                surroundings.
              </p>
              <p className="mt-5 text-base font-normal leading-relaxed text-sagemist/85 sm:text-lg">
                More than a green space, it is a peaceful retreat where the sounds of
                nature and fresh, oxygen-rich air create a truly refreshing way to live.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-px border border-fog/10 bg-fog/10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 90}>
              <div className="group h-full bg-inkdeep p-9 transition-colors duration-300 hover:bg-ink">
                <benefit.icon
                  size={22}
                  className="text-bronzelight"
                  aria-hidden
                  strokeWidth={1.5}
                />
                <p className="font-display mt-6 text-xl font-normal text-fog">
                  {benefit.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-sagemist/70">
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
