"use client";

import { useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";

const stats = [
  { value: "2.8", label: "Acres of Land" },
  { value: "180", label: "Premium Apartments" },
  { value: "20", label: "Row Villas" },
  { value: "03", label: "Towers" },
  { value: "12", label: "Floors Each" },
];

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="top" className="relative flex min-h-dvh flex-col overflow-hidden bg-forest">
      {/* cinematic video backdrop */}
      {!videoFailed && (
        <video
          className="hero-video"
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onError={() => setVideoFailed(true)}
        />
      )}
      {videoFailed && (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0c1d14_0%,#122a1d_55%,#16321f_100%)]" />
      )}

      {/* grade + atmosphere over footage */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,29,20,0.78)_0%,rgba(12,29,20,0.45)_45%,rgba(12,29,20,0.88)_100%)]" />
      <div className="absolute inset-0 bg-pine/20 mix-blend-multiply" />
      <div className="mist-layer" />
      <div className="mist-drift" />
      <div className="mist-drift mist-drift-2" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-36 text-center lg:px-10">
        <p className="mb-6 flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.32em] text-gold-light sm:text-xs">
          <MapPin size={14} className="text-gold" aria-hidden />
          Premium Apartments &amp; Villas · Near Whitefield, Bengaluru
        </p>

        <h1 className="font-display max-w-5xl text-4xl leading-[1.15] text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
          Where Mornings Rise
          <br />
          <span className="text-gradient-gold">Through the Mist</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-mist sm:text-lg">
          A sanctuary of calm wrapped in a living Miyawaki forest — thoughtfully
          crafted residences where nature, wellness and modern living breathe as one.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#towers"
            className="rounded-full bg-gold px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-forest transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(200,162,75,0.35)]"
          >
            Explore the Towers
          </a>
          <a
            href="#invest"
            className="rounded-full border border-cream/30 bg-forest/20 px-9 py-4 text-sm font-light uppercase tracking-[0.18em] text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold-light"
          >
            Investor Model
          </a>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative z-10 border-t border-cream/10">
        <div className="glass mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-7 text-center"
            >
              <span className="font-display text-3xl text-gold-light sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-[10px] font-light uppercase tracking-[0.24em] text-sage sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#overview"
        aria-label="Scroll to overview"
        className="absolute bottom-32 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-sage transition-colors hover:text-gold-light lg:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
