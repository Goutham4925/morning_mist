import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ChapterHead from "./ChapterHead";
import Reveal from "./Reveal";

export default function Overview() {
  return (
    <section id="overview" className="relative overflow-hidden bg-fog py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <ChapterHead
              align="left"
              time="06:30 — the slow hour"
              title={
                <>
                  Calm, connection &amp;{" "}
                  <span className="italic text-moss">conscious living</span>
                </>
              }
            />
            <Reveal delay={100}>
              <p className="mt-9 text-base font-normal leading-relaxed text-eucalyptus sm:text-lg">
                Life at Mistwood is a celebration of calm, connection and conscious
                living. Surrounded by lush greenery, open landscapes and thoughtfully
                designed spaces, the community offers a refreshing escape from the
                rush of the city.
              </p>
              <p className="mt-5 text-base font-normal leading-relaxed text-eucalyptus sm:text-lg">
                From peaceful morning walks and vibrant outdoor moments to serene
                evenings amidst nature, every experience here is crafted to bring
                comfort, wellness and togetherness into everyday life.
              </p>

              <div className="mt-11 border-l-2 border-bronze/50 pl-7">
                <p className="font-display text-2xl font-light italic text-ink">
                  Vaishnavi Residences
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-eucalyptus">
                  Where dreams meet design and luxury becomes a lifestyle. From real
                  estate and construction contracting to interiors and architecture —
                  every project nothing short of extraordinary.
                </p>
              </div>

              <a
                href="#location"
                className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-moss transition-colors hover:text-bronze"
              >
                Explore the Location
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden
                />
              </a>
            </Reveal>
          </div>

          {/* photo composition */}
          <Reveal delay={140}>
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/img/m29.jpg"
                  alt="A sunlit living room opening onto the gardens at Mistwood"
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover"
                />
              </div>
              {/* offset inset */}
              <div className="absolute -bottom-12 -left-8 hidden w-[46%] border-8 border-fog shadow-[0_35px_70px_-30px_rgba(28,43,34,0.35)] sm:block">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/img/m22.jpg"
                    alt="A couple sharing morning coffee on a terrace at sunrise"
                    fill
                    sizes="22vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* corner stamp */}
              <p className="timestamp absolute -right-3 top-6 rotate-90 text-sm text-bronze sm:-right-5">
                est. dawn, Whitefield
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
