import Image from "next/image";
import Reveal from "./Reveal";

type Shot = { id: string; caption: string; alt: string; tall?: boolean };

const rowA: Shot[] = [
  {
    id: "1441974231531-c6227db76b6e",
    caption: "Morning trails",
    alt: "Sunlit walking path through a green forest",
  },
  {
    id: "1518495973542-4542c06a5843",
    caption: "Under the old canopy",
    alt: "Sunlight bursting through the branches of a grand old tree",
  },
  {
    id: "1473448912268-2022ce9509d8",
    caption: "Still waters",
    alt: "A calm forest lake ringed by tall pines",
  },
  {
    id: "1500382017468-9049fed747ef",
    caption: "Golden hour",
    alt: "Sun setting over an open golden field",
  },
  {
    id: "1506744038136-46273834b3fb",
    caption: "Mist over the valley",
    alt: "Misty river valley at dawn",
  },
  {
    id: "1476231682828-37e571bc172f",
    caption: "The green commute",
    alt: "Aerial view of a road curving through dense forest",
  },
];

const rowB: Shot[] = [
  {
    id: "1544367567-0f2fcb009e0b",
    caption: "Sunset yoga",
    alt: "Silhouette of a person doing yoga at sunset",
  },
  {
    id: "1476480862126-209bfaa8edc8",
    caption: "The daily run",
    alt: "Runner's shoes climbing stone steps",
  },
  {
    id: "1571902943202-507ec2618e8f",
    caption: "Train, then unwind",
    alt: "A modern fitness studio with city views",
  },
  {
    id: "1495474472287-4d71bcdd2085",
    caption: "Club café mornings",
    alt: "Three friends raising coffee cups together",
  },
  {
    id: "1511895426328-dc8714191300",
    caption: "Everyone, together",
    alt: "A family holding hands on the shore at sunset",
  },
  {
    id: "1469474968028-56623f02e42e",
    caption: "Evenings that glow",
    alt: "Golden light over misty green mountains",
  },
];

const src = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;

function Row({ shots, reverse }: { shots: Shot[]; reverse?: boolean }) {
  // duplicate list so the -50% translate loops seamlessly
  const loop = [...shots, ...shots];
  return (
    <div className="marquee-row overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {loop.map((shot, i) => (
          <figure
            key={`${shot.id}-${i}`}
            className="group relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-96"
            aria-hidden={i >= shots.length}
          >
            <Image
              src={src(shot.id)}
              alt={i < shots.length ? shot.alt : ""}
              fill
              sizes="384px"
              quality={70}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-5 text-sm font-light tracking-wide text-cream">
              <span className="mr-2 inline-block h-px w-5 bg-gold align-middle" aria-hidden />
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="glimpses"
      className="relative overflow-hidden bg-forest py-24 sm:py-32"
      aria-label="Glimpses of life at Mistwood"
    >
      <div className="glow-orb left-[15%] top-[10%] h-72 w-72 bg-moss/20" />

      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
          Glimpses
        </p>
        <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
          The Life We&apos;re Planting
        </h2>
        <div className="gold-line mx-auto mt-8 w-24" />
        <p className="mt-8 text-base font-light leading-relaxed text-mist">
          Moods, mornings and moments — the textures of everyday life that Mistwood
          is designed around.
        </p>
      </Reveal>

      <div className="mt-14 space-y-5">
        <Row shots={rowA} />
        <Row shots={rowB} reverse />
      </div>

      <p className="mt-8 text-center text-[10px] font-light uppercase tracking-[0.22em] text-sage/60">
        Representative imagery — moods and moments, not project photography
      </p>
    </section>
  );
}
