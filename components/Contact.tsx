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
    step === 0
      ? purpose !== null && config.length > 0
      : step === 1
        ? budget !== "" && timeline !== ""
        : true;

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

  const inputCls =
    "w-full border border-ink/15 bg-porcelain px-5 py-4 text-base text-ink placeholder:text-eucalyptus/50 focus:border-bronze focus:outline-none focus:ring-1 focus:ring-bronze/40";

  const chip = (selected: boolean) =>
    `cursor-pointer border px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-all duration-200 ${
      selected
        ? "border-bronze bg-bronze/10 text-bronze"
        : "border-ink/15 text-eucalyptus hover:border-bronze/50 hover:text-bronze"
    }`;

  return (
    <section id="contact" className="relative overflow-hidden bg-fog py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="timestamp text-lg text-bronze">22:00 — lamplight</p>
            <p className="font-script mt-5 text-5xl text-bronze/80 sm:text-6xl" aria-hidden>
              begin,
            </p>
            <h2 className="font-display mt-3 text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-6xl">
              tell us what you&apos;re
              <br />
              <span className="italic text-moss">looking for</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-eucalyptus">
              Three quick questions, and the right specialist calls you back — no
              endless forms, no spam.
            </p>

            <div className="mt-12 space-y-1">
              {[
                { icon: Phone, label: "+91 90365 26147", href: "tel:+919036526147", note: "" },
                { icon: Mail, label: "zain@tatra.one", href: "mailto:zain@tatra.one", note: "" },
                {
                  icon: Globe,
                  label: "www.tatra.one",
                  href: "https://www.tatra.one",
                  note: "Strategic Partner",
                },
              ].map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 border-b border-ink/10 py-5 text-ink transition-colors first:border-t hover:text-bronze"
                >
                  <row.icon size={17} className="text-bronze" strokeWidth={1.5} aria-hidden />
                  <span className="font-display text-xl font-light">{row.label}</span>
                  {row.note && (
                    <span className="ml-auto text-[10px] uppercase tracking-[0.24em] text-eucalyptus">
                      {row.note}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </Reveal>

          {/* stepper */}
          <Reveal delay={120}>
            <div className="border border-ink/10 bg-porcelain p-9 sm:p-11">
              {/* progress */}
              <div className="flex items-center gap-3" aria-hidden>
                {[0, 1, 2].map((s) => (
                  <div key={s} className="flex flex-1 items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border text-xs transition-all duration-300 ${
                        step > s
                          ? "border-bronze bg-bronze text-fog"
                          : step === s
                            ? "border-bronze text-bronze"
                            : "border-ink/20 text-eucalyptus"
                      }`}
                    >
                      {step > s ? <Check size={14} /> : s + 1}
                    </span>
                    {s < 2 && (
                      <span
                        className={`h-px flex-1 transition-colors duration-300 ${
                          step > s ? "bg-bronze" : "bg-ink/15"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="sr-only" aria-live="polite">
                Step {step + 1} of 3
              </p>

              {step === 0 && (
                <div className="mt-10">
                  <h3 className="font-display text-2xl font-light italic text-ink">
                    What brings you to Mistwood?
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPurpose("home")}
                      aria-pressed={purpose === "home"}
                      className={`cursor-pointer border p-6 text-left transition-all duration-200 ${
                        purpose === "home"
                          ? "border-bronze bg-bronze/10"
                          : "border-ink/15 hover:border-bronze/50"
                      }`}
                    >
                      <Home size={21} className="text-bronze" strokeWidth={1.5} aria-hidden />
                      <p className="mt-3 text-sm text-ink">A home to live in</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPurpose("investment")}
                      aria-pressed={purpose === "investment"}
                      className={`cursor-pointer border p-6 text-left transition-all duration-200 ${
                        purpose === "investment"
                          ? "border-bronze bg-bronze/10"
                          : "border-ink/15 hover:border-bronze/50"
                      }`}
                    >
                      <TrendingUp size={21} className="text-bronze" strokeWidth={1.5} aria-hidden />
                      <p className="mt-3 text-sm text-ink">An investment</p>
                    </button>
                  </div>

                  <p className="eyebrow mt-9 text-eucalyptus">Configuration — pick any</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {configs.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleConfig(c)}
                        aria-pressed={config.includes(c)}
                        className={chip(config.includes(c))}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="mt-10">
                  <h3 className="font-display text-2xl font-light italic text-ink">
                    Budget &amp; timeline
                  </h3>
                  <p className="eyebrow mt-7 text-eucalyptus">Budget Range</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        aria-pressed={budget === b}
                        className={chip(budget === b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <p className="eyebrow mt-9 text-eucalyptus">When are you planning?</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        aria-pressed={timeline === t}
                        className={chip(timeline === t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="mt-10">
                  <h3 className="font-display text-2xl font-light italic text-ink">
                    Almost there
                  </h3>
                  <p className="mt-4 border border-ink/10 bg-fog px-4 py-3 text-xs leading-relaxed text-eucalyptus">
                    {summary}
                  </p>
                  <div className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="enq-name" className="eyebrow mb-2 block text-eucalyptus">
                        Full Name <span className="text-bronze">*</span>
                      </label>
                      <input
                        id="enq-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        placeholder="Your name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="enq-phone" className="eyebrow mb-2 block text-eucalyptus">
                        Phone Number <span className="text-bronze">*</span>
                      </label>
                      <input
                        id="enq-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        placeholder="+91"
                        className={inputCls}
                      />
                    </div>
                    {error && (
                      <p role="alert" className="text-sm text-red-700">
                        {error}
                      </p>
                    )}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={sendWhatsApp}
                        className="btn-line btn-fill-ink justify-center"
                      >
                        <MessageCircle size={15} aria-hidden /> WhatsApp Us
                      </button>
                      <button
                        type="button"
                        onClick={sendEmail}
                        className="btn-line justify-center text-ink hover:bg-ink hover:text-fog"
                      >
                        <Mail size={15} aria-hidden /> Email Instead
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* nav */}
              <div className="mt-10 flex items-center justify-between border-t border-ink/10 pt-7">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="flex cursor-pointer items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-eucalyptus transition-colors hover:text-bronze disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowLeft size={14} aria-hidden /> Back
                </button>
                {step < 2 && (
                  <button
                    type="button"
                    onClick={() => canNext && setStep((s) => s + 1)}
                    disabled={!canNext}
                    className="btn-line btn-fill-bronze disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue <ArrowRight size={14} aria-hidden />
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
