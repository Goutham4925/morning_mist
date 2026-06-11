import Image from "next/image";
import ChapterHead from "./ChapterHead";

type Shot = { src: string; caption: string; alt: string };

const rowA: Shot[] = [
  { src: "/img/m30.jpg", caption: "The garden lounge", alt: "An open-air lounge wrapped in tropical planting" },
  { src: "/img/m31.jpg", caption: "Steam & stillness", alt: "Steam rising over a quiet courtyard spa pool" },
  { src: "/img/m33.jpg", caption: "Pool afternoons", alt: "A couple resting their feet in the plunge pool" },
  { src: "/img/m1.jpg", caption: "Live well, daily", alt: "Morning yoga on the timber pool deck" },
  { src: "/img/m20.jpg", caption: "The avenue ride", alt: "A cyclist gliding down a tree-lined park avenue" },
  { src: "/img/m34.jpg", caption: "A bench, a book", alt: "Reading on a garden bench among dense foliage" },
];

const rowB: Shot[] = [
  { src: "/img/m26.jpg", caption: "Sunday kitchens", alt: "A family cooking together in a warm modern kitchen" },
  { src: "/img/m18.jpg", caption: "The garden desk", alt: "A rattan work desk set in lush greenery" },
  { src: "/img/m2.jpg", caption: "Morning practice", alt: "Yoga among broad tropical leaves" },
  { src: "/img/m32.jpg", caption: "The forest bath", alt: "A bathtub looking out into the trees" },
  { src: "/img/m27.jpg", caption: "Slow breakfasts", alt: "Morning light across a warm timber kitchen" },
  { src: "/img/m16.jpg", caption: "Quiet corners", alt: "Curled up with a blanket by the tall window" },
];

function Row({ shots, reverse }: { shots: Shot[]; reverse?: boolean }) {
  const loop = [...shots, ...shots];
  return (
    <div className="marquee-row overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {loop.map((shot, i) => (
          <figure
            key={`${shot.src}-${i}`}
            className="group relative h-60 w-80 shrink-0 overflow-hidden sm:h-72 sm:w-[26rem]"
            aria-hidden={i >= shots.length}
          >
            <Image
              src={shot.src}
              alt={i < shots.length ? shot.alt : ""}
              fill
              sizes="416px"
              quality={72}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inkdeep/85 via-transparent to-transparent" />
            <figcaption className="font-display over-photo absolute bottom-4 left-5 text-lg font-light italic text-fog">
              <span className="mr-3 inline-block h-px w-6 bg-bronzelight align-middle" aria-hidden />
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
      className="relative overflow-hidden bg-ink py-28 sm:py-36"
      aria-label="Glimpses of life at Mistwood"
    >
      <div className="mx-auto px-6">
        <ChapterHead
          dark
          time="20:00 — the album"
          script="glimpses"
          title={
            <>
              The life we&apos;re <span className="italic text-bronzelight">planting</span>
            </>
          }
          lede="Moods, mornings and moments — the textures of everyday life that Mistwood is designed around."
        />
      </div>

      <div className="mt-16 space-y-5">
        <Row shots={rowA} />
        <Row shots={rowB} reverse />
      </div>

      <p className="mt-9 text-center text-[10px] uppercase tracking-[0.24em] text-sagemist/50">
        Representative imagery — moods and moments, not project photography
      </p>
    </section>
  );
}
