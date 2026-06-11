import Image from "next/image";
import { MapPin } from "lucide-react";
import ChapterHead from "./ChapterHead";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Bodhii Tree",
    location: "Hoskote, Bengaluru",
    type: "Premium Plotted Development",
    size: "7+ Acres",
    pattern: "/img/m37.jpg",
    text: "Well-designed villa plots in a fast-growing investment corridor, surrounded by lush landscapes and excellent connectivity to key industrial hubs.",
  },
  {
    name: "Arsh Greens",
    location: "Bagalur–Airport Road, North Bengaluru",
    type: "Premium 4BHK Villa Community",
    size: "4 Acres",
    pattern: "/img/m38.jpg",
    text: "The perfect balance of luxury, nature and urban convenience — planned villas with landscaped open spaces near business hubs and the airport.",
  },
  {
    name: "Navile Farms",
    location: "Thondebhavi, Chikkaballapur",
    type: "Farm Plot Community",
    size: "Expansive Farm Plots",
    pattern: "/img/m36.jpg",
    text: "Nature-inspired living and long-term investment growth amidst serene countryside — avenue plantations and wellness-led, sustainable living.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-linen py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ChapterHead
          align="left"
          time="meanwhile, elsewhere"
          title={
            <>
              The Vaishnavi <span className="italic text-moss">portfolio</span>
            </>
          }
          lede="Across plotted developments, villa communities and farm retreats — the same promise: long-term value, thoughtful design, peaceful community."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 110}>
              <article className="group flex h-full flex-col border border-ink/10 bg-porcelain transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-30px_rgba(28,43,34,0.35)]">
                {/* botanical pattern band */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.pattern}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/25" />
                  <p className="eyebrow absolute bottom-4 left-6 text-fog">{project.size}</p>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-3xl font-light italic text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-bronze">
                    <MapPin size={13} aria-hidden />
                    {project.location}
                  </p>
                  <p className="mt-2 text-sm font-medium text-moss">{project.type}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-eucalyptus">
                    {project.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
