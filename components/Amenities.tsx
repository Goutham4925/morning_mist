import Image from "next/image";
import ChapterHead from "./ChapterHead";
import Reveal from "./Reveal";

/* grouped by the hour they're most alive — the day-clock again */
const columns = [
  {
    hour: "Mornings",
    items: [
      "Jogging & Walking Trails",
      "Yoga & Meditation Deck",
      "Swimming Pool",
      "Fitness Studio",
      "Cycling Track",
      "Miyawaki Forest",
      "Outdoor Sports Courts",
    ],
  },
  {
    hour: "Afternoons",
    items: [
      "Grand Clubhouse",
      "Co-Working Lounge",
      "Indoor Games Lounge",
      "Children's Play Area",
      "Pet Park",
      "Landscaped Gardens",
    ],
  },
  {
    hour: "Evenings",
    items: [
      "Open-Air Amphitheatre",
      "Multipurpose Hall",
      "Senior Citizen Court",
      "24×7 Security",
      "EV Charging Bays",
      "Rainwater Harvesting",
    ],
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-fog py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <ChapterHead
              align="left"
              time="all day — nineteen ways"
              title={
                <>
                  Amenities, kept by
                  <br />
                  <span className="italic text-moss">the clock</span>
                </>
              }
              lede="Nineteen curated experiences, arranged by the hour they come alive — for every age, every mood, every morning."
            />
            <Reveal delay={120}>
              <div className="relative mt-12 hidden aspect-[4/3] overflow-hidden lg:block">
                <Image
                  src="/img/m33.jpg"
                  alt="An unhurried afternoon at the plunge pool"
                  fill
                  sizes="36vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* the index */}
          <div>
            {columns.map((col, ci) => (
              <Reveal key={col.hour} delay={ci * 80}>
                <div className={ci > 0 ? "mt-12" : ""}>
                  <p className="timestamp text-xl text-bronze">{col.hour}</p>
                  <ul className="mt-4">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="group flex items-baseline justify-between gap-6 border-b border-ink/10 py-4 transition-colors duration-200 first:border-t hover:bg-porcelain"
                      >
                        <span className="font-display text-xl font-light text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                          {item}
                        </span>
                        <span
                          aria-hidden
                          className="h-px w-8 shrink-0 bg-bronze/0 transition-colors duration-300 group-hover:bg-bronze"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
