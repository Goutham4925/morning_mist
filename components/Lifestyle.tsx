"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const moments = [
  {
    time: "05:48 AM",
    title: "Mist Mornings",
    text: "The forest exhales. Walking trails glisten, birdsong fills the canopy, and the day begins at your own pace.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=75",
    alt: "Sunlit walking path through a dense green forest",
  },
  {
    time: "06:30 PM",
    title: "Forest Evenings",
    text: "Golden light through the Miyawaki canopy. The amphitheatre hums, children race the cycling track, dinner can wait.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=75",
    alt: "Golden evening light falling over misty green hills",
  },
  {
    time: "Weekends",
    title: "Togetherness",
    text: "Pool mornings, clubhouse afternoons, lawn evenings under open sky — a community that gathers without trying.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1920&q=75",
    alt: "A large family holding hands at sunset",
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
    <div ref={ref} className="relative flex min-h-[78vh] items-center overflow-hidden bg-forest">
      {/* photo backdrop, slow parallax drift */}
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
          quality={75}
        />
      </div>
      {/* cinematic grade */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,29,20,0.82)_0%,rgba(12,29,20,0.35)_50%,rgba(12,29,20,0.85)_100%)]" />
      <div className="absolute inset-0 bg-pine/30 mix-blend-multiply" />
      <div className="mist-drift" />

      {/* oversized backdrop word, parallaxed */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[18vw] text-cream/5 lg:text-[14vw]"
        style={reduced ? undefined : { transform: `translate(-50%, calc(-50% + ${offset * 2.2}px))` }}
      >
        {moment.title}
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div
          className={`flex flex-col ${align}`}
          style={reduced ? undefined : { transform: `translateY(${offset}px)` }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold-light">
            {moment.time}
          </p>
          <h3 className="font-display mt-4 text-4xl text-cream drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-6xl">
            {moment.title}
          </h3>
          <div className="gold-line mt-7 w-20" />
          <p className="mt-7 max-w-md text-base font-light leading-relaxed text-mist sm:text-lg">
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
