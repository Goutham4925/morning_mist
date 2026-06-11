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
} from "lucide-react";
import Reveal from "./Reveal";

const amenities = [
  { icon: Landmark, label: "Grand Clubhouse" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Dumbbell, label: "Fitness Studio" },
  { icon: Flower2, label: "Yoga & Meditation Deck" },
  { icon: Trees, label: "Miyawaki Forest" },
  { icon: Footprints, label: "Jogging & Walking Trails" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: Theater, label: "Open-Air Amphitheatre" },
  { icon: Gamepad2, label: "Indoor Games Lounge" },
  { icon: PartyPopper, label: "Multipurpose Hall" },
  { icon: Sparkles, label: "Senior Citizen Court" },
  { icon: Dog, label: "Pet Park" },
  { icon: Activity, label: "Outdoor Sports Courts" },
  { icon: Bike, label: "Cycling Track" },
  { icon: Briefcase, label: "Co-Working Lounge" },
  { icon: LeafyGreen, label: "Landscaped Gardens" },
  { icon: ShieldCheck, label: "24×7 Security" },
  { icon: Zap, label: "EV Charging Bays" },
  { icon: CloudRain, label: "Rainwater Harvesting" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="topo-lines text-mist" />
      <div className="glow-orb left-[-5%] top-[30%] h-80 w-80 bg-moss/25" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
            19 Curated Experiences
          </p>
          <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
            Amenities Woven Into Nature
          </h2>
          <div className="gold-line mx-auto mt-8 w-24" />
          <p className="mt-8 text-base font-light leading-relaxed text-mist">
            Every amenity at Mistwood is designed to bring comfort, wellness and
            togetherness into everyday life — for every age, every mood, every morning.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((amenity, i) => (
            <Reveal key={amenity.label} delay={(i % 4) * 70}>
              <div className="glass group flex h-full items-center gap-4 rounded-xl px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40">
                <amenity.icon
                  size={20}
                  className="shrink-0 text-sage transition-colors duration-300 group-hover:text-gold-light"
                  aria-hidden
                />
                <span className="text-sm font-light leading-snug text-mist">
                  {amenity.label}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={210}>
            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-gold/30 px-5 py-5">
              <span className="text-center text-sm font-light italic text-gold-light">
                ...and more to discover
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
