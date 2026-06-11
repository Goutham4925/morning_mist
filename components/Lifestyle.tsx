"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const moments = [
  {
    time: "06:15",
    title: "The Morning Run",
    text: "The forest exhales. Trails glisten, birdsong fills the canopy, and the day begins at your own pace.",
    image: "/img/m19.jpg",
    alt: "A couple jogging up a forest trail in the early light",
  },
  {
    time: "19:00",
    title: "Reading Light",
    text: "Golden hour pours through the tall windows. Somewhere below, the amphitheatre hums. Dinner can wait.",
    image: "/img/m11.jpg",
    alt: "A man reading on a sofa as sunset fills the window",
  },
  {
    time: "Sunday",
    title: "Togetherness",
    text: "Pool mornings, clubhouse afternoons, lawn evenings under open sky — a community that gathers without trying.",
    image: "/img/m23.jpg",
    alt: "A family wrapped in a blanket together on an outdoor sofa",
  },
];

function ParallaxPanel({
  moment,
  index,
}: {
  moment: (typeof moments)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setOffset(center * -0.12);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const align = index % 2 === 0 ? "items-start text-left" : "items-end text-right";

  return (
    <div ref={ref} className="relative flex min-h-[80vh] items-center overflow-hidden bg-inkdeep">
      <div
        className="absolute inset-[-8%]"
        style={reduced ? undefined : { transform: `translateY(${offset * -0.6}px)` }}
      >
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          sizes="100vw"
          className="object-cover"
          quality={78}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,31,24,0.7)_0%,rgba(20,31,24,0.2)_50%,rgba(20,31,24,0.75)_100%)]" />

      {/* oversized italic word, parallaxed */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[17vw] font-light italic text-fog/5 lg:text-[12vw]"
        style={reduced ? undefined : { transform: `translate(-50%, calc(-50% + ${offset * 2.2}px))` }}
      >
        {moment.title}
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div
          className={`flex flex-col ${align}`}
          style={reduced ? undefined : { transform: `translateY(${offset}px)` }}
        >
          <p className="timestamp over-photo text-xl text-bronzelight">{moment.time}</p>
          <h3 className="font-display over-photo mt-3 text-balance text-5xl font-light text-fog sm:text-7xl">
            {moment.title}
          </h3>
          <div className="rule-bronze mt-7 w-24" />
          <p className="over-photo mt-7 max-w-md text-pretty text-base font-normal leading-relaxed text-fog/95 sm:text-lg">
            {moment.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Lifestyle() {
  return (
    <section id="lifestyle" aria-label="Life at Mistwood">
      {moments.map((moment, i) => (
        <ParallaxPanel key={moment.title} moment={moment} index={i} />
      ))}
    </section>
  );
}
