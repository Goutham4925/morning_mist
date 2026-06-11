import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Bodhii Tree",
    location: "Hoskote, Bengaluru",
    type: "Premium Plotted Development",
    size: "7+ Acres",
    text: "Well-designed villa plots in a fast-growing investment corridor, surrounded by lush landscapes, modern lifestyle amenities and excellent connectivity to key industrial and infrastructure hubs.",
    accent: "from-fern/40",
  },
  {
    name: "Arsh Greens",
    location: "Bagalur–Airport Road, North Bengaluru",
    type: "Premium 4BHK Villa Community",
    size: "4 Acres",
    text: "The perfect balance of luxury, nature and urban convenience — thoughtfully planned villas with landscaped open spaces and seamless access to business hubs, the airport and lifestyle destinations.",
    accent: "from-moss/50",
  },
  {
    name: "Navile Farms",
    location: "Thondebhavi, Chikkaballapur",
    type: "Farm Plot Community",
    size: "Expansive Farm Plots",
    text: "Nature-inspired living and long-term investment growth amidst serene countryside — avenue plantations, open greens and a focus on sustainable, wellness-led living.",
    accent: "from-fern/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-cream py-24 text-forest sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-fern">
            The Vaishnavi Portfolio
          </p>
          <h2 className="font-display mt-5 text-3xl leading-snug sm:text-5xl">
            Communities Crafted With Intent
          </h2>
          <div className="gold-line mt-8 w-24" />
          <p className="mt-8 text-base font-light leading-relaxed text-moss">
            Across plotted developments, villa communities and farm retreats, every
            Vaishnavi Residences project is built on the same promise — long-term
            value, thoughtful design and a peaceful community lifestyle.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 110}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-moss/15 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(18,42,29,0.4)]">
                <div
                  className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent} to-pine`}
                >
                  <div className="topo-lines text-cream" />
                  <div className="absolute bottom-5 left-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-light">
                      {project.size}
                    </p>
                    <h3 className="font-display mt-1 text-2xl text-cream">
                      {project.name}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-fern">
                    <MapPin size={14} aria-hidden />
                    {project.location}
                  </p>
                  <p className="mt-3 text-sm font-medium text-pine">{project.type}</p>
                  <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-moss">
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
