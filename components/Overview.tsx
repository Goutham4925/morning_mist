import Image from "next/image";
import { ArrowRight, Trees } from "lucide-react";
import Reveal from "./Reveal";

export default function Overview() {
  return (
    <section id="overview" className="relative overflow-hidden bg-cream py-24 text-forest sm:py-32">
      <div className="topo-lines text-moss" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-fern">
              Life at Mistwood
            </p>
            <h2 className="font-display mt-5 text-3xl leading-snug sm:text-5xl">
              Calm, Connection &amp; Conscious Living
            </h2>
            <div className="gold-line mt-8 w-24" />
            <p className="mt-8 text-base font-light leading-relaxed text-moss sm:text-lg">
              Life at Mistwood is a celebration of calm, connection and conscious
              living. Surrounded by lush greenery, open landscapes and thoughtfully
              designed spaces, the community offers a refreshing escape from the rush
              of the city.
            </p>
            <p className="mt-5 text-base font-light leading-relaxed text-moss sm:text-lg">
              From peaceful morning walks and vibrant outdoor moments to serene
              evenings amidst nature, every experience here is crafted to bring
              comfort, wellness and togetherness into everyday life.
            </p>

            <div className="mt-10 rounded-2xl border border-moss/15 bg-fog/70 p-7">
              <p className="font-display text-lg text-pine">Vaishnavi Residences</p>
              <p className="mt-3 text-sm font-light leading-relaxed text-moss">
                Where dreams meet design and luxury becomes a lifestyle. From real
                estate and construction contracting to interiors and architecture,
                our multifaceted expertise ensures every project we undertake is
                nothing short of extraordinary.
              </p>
            </div>

            <a
              href="#location"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-fern transition-colors hover:text-gold"
            >
              Explore the Location
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </Reveal>

          {/* photo collage */}
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(18,42,29,0.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=75"
                  alt="A calm forest lake surrounded by tall evergreen trees"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/40 via-transparent to-transparent" />
              </div>

              {/* offset secondary image */}
              <div className="absolute -bottom-10 -left-6 hidden w-2/5 overflow-hidden rounded-2xl border-4 border-cream shadow-[0_30px_60px_-25px_rgba(18,42,29,0.5)] sm:block">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=600&q=75"
                    alt="Aerial view of a road winding through dense green forest"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* floating stat chip */}
              <div className="absolute -right-4 top-8 flex items-center gap-3 rounded-2xl border border-moss/15 bg-white/90 px-5 py-4 shadow-[0_20px_50px_-20px_rgba(18,42,29,0.4)] backdrop-blur-sm sm:-right-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-fern/10">
                  <Trees size={20} className="text-fern" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl leading-none text-pine">2.8 Acres</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-moss">
                    of green calm
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
