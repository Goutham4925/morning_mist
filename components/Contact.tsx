"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Home,
  Mail,
  MessageCircle,
  Phone,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

type Purpose = "home" | "investment";

const configs = ["2 BHK", "3 BHK", "Row Villa"];
const budgets = ["₹1 – 1.5 Cr", "₹1.5 – 2 Cr", "₹2 Cr+", "Guide me"];
const timelines = ["Immediately", "Within 3 months", "Exploring"];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [purpose, setPurpose] = useState<Purpose | null>(null);
  const [config, setConfig] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const toggleConfig = (c: string) =>
    setConfig((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  const canNext =
    step === 0 ? purpose !== null && config.length > 0 : step === 1 ? budget !== "" && timeline !== "" : true;

  const summary = [
    purpose === "home" ? "A home to live in" : "An investment",
    config.join(" / "),
    budget,
    timeline,
  ]
    .filter(Boolean)
    .join(" · ");

  const composeMessage = () =>
    `Hi! I'm ${name}. I'm interested in Mistwood.\n` +
    `Looking for: ${purpose === "home" ? "A home to live in" : "An investment"}\n` +
    `Configuration: ${config.join(", ")}\n` +
    `Budget: ${budget}\nTimeline: ${timeline}\nPhone: ${phone}`;

  const validate = () => {
    if (name.trim().length < 2) {
      setError("Please enter your name so we know who to call.");
      return false;
    }
    if (!/^[+\d][\d\s-]{7,15}$/.test(phone.trim())) {
      setError("Please enter a valid phone number (e.g. +91 98XXXXXX00).");
      return false;
    }
    setError("");
    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(
      `https://wa.me/919036526147?text=${encodeURIComponent(composeMessage())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:zain@tatra.one?subject=${encodeURIComponent(
      "Mistwood Enquiry — " + name
    )}&body=${encodeURIComponent(composeMessage())}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-pine py-24 sm:py-32">
      <div className="topo-lines text-mist" />
      <div className="glow-orb right-[0%] top-[10%] h-72 w-72 bg-gold/10" />
      <div className="mist-drift" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
              Begin Your Morning at Mistwood
            </p>
            <h2 className="font-display mt-5 text-3xl leading-snug text-cream sm:text-5xl">
              Tell Us What You&apos;re Looking For
            </h2>
            <div className="gold-line mt-8 w-24" />
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-mist">
              Three quick questions, and the right specialist calls you back — no
              endless forms, no spam.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href="tel:+919036526147"
                className="group flex items-center gap-5 text-mist transition-colors hover:text-gold-light"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-cream/5 transition-colors group-hover:border-gold/40">
                  <Phone size={18} aria-hidden />
                </span>
                <span className="text-base font-light tracking-wide">+91 90365 26147</span>
              </a>
              <a
                href="mailto:zain@tatra.one"
                className="group flex items-center gap-5 text-mist transition-colors hover:text-gold-light"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-cream/5 transition-colors group-hover:border-gold/40">
                  <Mail size={18} aria-hidden />
                </span>
                <span className="text-base font-light tracking-wide">zain@tatra.one</span>
              </a>
              <a
                href="https://www.tatra.one"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 text-mist transition-colors hover:text-gold-light"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-cream/5 transition-colors group-hover:border-gold/40">
                  <Globe size={18} aria-hidden />
                </span>
                <span className="text-base font-light tracking-wide">
                  www.tatra.one
                  <span className="ml-3 text-xs uppercase tracking-[0.2em] text-sage">
                    Strategic Partner
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          {/* stepper */}
          <Reveal delay={120}>
            <div className="glass rounded-3xl p-8 sm:p-10">
              {/* progress */}
              <div className="flex items-center gap-3" aria-hidden>
                {[0, 1, 2].map((s) => (
                  <div key={s} className="flex flex-1 items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                        step > s
                          ? "border-gold bg-gold text-forest"
                          : step === s
                            ? "border-gold text-gold-light"
                            : "border-cream/20 text-sage"
                      }`}
                    >
                      {step > s ? <Check size={14} /> : s + 1}
                    </span>
                    {s < 2 && (
                      <span
                        className={`h-px flex-1 transition-colors duration-300 ${
                          step > s ? "bg-gold" : "bg-cream/15"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="sr-only" aria-live="polite">
                Step {step + 1} of 3
              </p>

              {/* step 0 — intent */}
              {step === 0 && (
                <div className="mt-9">
                  <h3 className="font-display text-xl text-cream">
                    What brings you to Mistwood?
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPurpose("home")}
                      aria-pressed={purpose === "home"}
                      className={`cursor-pointer rounded-2xl border p-6 text-left transition-all duration-200 ${
                        purpose === "home"
                          ? "border-gold bg-gold/15"
                          : "border-cream/15 hover:border-gold/40"
                      }`}
                    >
                      <Home size={22} className="text-gold-light" aria-hidden />
                      <p className="mt-3 text-sm text-cream">A home to live in</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPurpose("investment")}
                      aria-pressed={purpose === "investment"}
                      className={`cursor-pointer rounded-2xl border p-6 text-left transition-all duration-200 ${
                        purpose === "investment"
                          ? "border-gold bg-gold/15"
                          : "border-cream/15 hover:border-gold/40"
                      }`}
                    >
                      <TrendingUp size={22} className="text-gold-light" aria-hidden />
                      <p className="mt-3 text-sm text-cream">An investment</p>
                    </button>
                  </div>

                  <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-sage">
                    Configuration — pick any
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {configs.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleConfig(c)}
                        aria-pressed={config.includes(c)}
                        className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-all duration-200 ${
                          config.includes(c)
                            ? "border-gold bg-gold/15 text-gold-light"
                            : "border-cream/15 text-mist hover:border-gold/40"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* step 1 — budget + timeline */}
              {step === 1 && (
                <div className="mt-9">
                  <h3 className="font-display text-xl text-cream">
                    Budget &amp; timeline
                  </h3>
                  <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.24em] text-sage">
                    Budget Range
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        aria-pressed={budget === b}
                        className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-all duration-200 ${
                          budget === b
                            ? "border-gold bg-gold/15 text-gold-light"
                            : "border-cream/15 text-mist hover:border-gold/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-sage">
                    When are you planning?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        aria-pressed={timeline === t}
                        className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-all duration-200 ${
                          timeline === t
                            ? "border-gold bg-gold/15 text-gold-light"
                            : "border-cream/15 text-mist hover:border-gold/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* step 2 — contact + handoff */}
              {step === 2 && (
                <div className="mt-9">
                  <h3 className="font-display text-xl text-cream">Almost there</h3>
                  <p className="mt-3 rounded-xl border border-cream/10 bg-forest/40 px-4 py-3 text-xs font-light leading-relaxed text-sage">
                    {summary}
                  </p>
                  <div className="mt-6 space-y-5">
                    <div>
                      <label
                        htmlFor="enq-name"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-sage"
                      >
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="enq-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-cream/15 bg-forest/40 px-5 py-4 text-base font-light text-cream placeholder:text-sage/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enq-phone"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-sage"
                      >
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        id="enq-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        placeholder="+91"
                        className="w-full rounded-xl border border-cream/15 bg-forest/40 px-5 py-4 text-base font-light text-cream placeholder:text-sage/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                    {error && (
                      <p role="alert" className="text-sm font-light text-red-300">
                        {error}
                      </p>
                    )}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={sendWhatsApp}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-forest transition-all duration-300 hover:bg-gold-light"
                      >
                        <MessageCircle size={16} aria-hidden /> WhatsApp Us
                      </button>
                      <button
                        type="button"
                        onClick={sendEmail}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-cream/20 px-6 py-4 text-sm font-light uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:border-gold hover:text-gold-light"
                      >
                        <Mail size={16} aria-hidden /> Email Instead
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* nav */}
              <div className="mt-9 flex items-center justify-between border-t border-cream/10 pt-6">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="flex cursor-pointer items-center gap-2 text-sm font-light uppercase tracking-[0.14em] text-sage transition-colors hover:text-gold-light disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowLeft size={15} aria-hidden /> Back
                </button>
                {step < 2 && (
                  <button
                    type="button"
                    onClick={() => canNext && setStep((s) => s + 1)}
                    disabled={!canNext}
                    className="flex cursor-pointer items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-forest transition-all duration-300 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue <ArrowRight size={15} aria-hidden />
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
