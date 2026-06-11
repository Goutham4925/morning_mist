"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const quickAsks = [
  "Book a site visit",
  "Send me the cost sheet",
  "Explain the investor model",
  "What's the buyback guarantee?",
];

const WA = "https://wa.me/919036526147";

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  const link = (msg: string) =>
    `${WA}?text=${encodeURIComponent(`Hi! ${msg} — Mistwood`)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[19rem] overflow-hidden border border-ink/10 bg-porcelain shadow-[0_30px_70px_-20px_rgba(28,43,34,0.45)]">
          <div className="flex items-center gap-3 border-b border-ink/10 bg-ink px-5 py-4">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15">
              <MessageCircle size={18} className="text-[#25D366]" aria-hidden />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-[#25D366]" />
            </span>
            <div>
              <p className="font-display text-base font-light italic text-fog">
                Mistwood Concierge
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-sagemist/70">
                Typically replies in minutes
              </p>
            </div>
          </div>
          <div className="px-5 py-5">
            <p className="text-sm leading-relaxed text-eucalyptus">
              Good morning! How can we help you today?
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {quickAsks.map((q) => (
                <a
                  key={q}
                  href={link(q)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink/15 px-4 py-3 text-sm text-ink transition-all duration-200 hover:border-[#25D366]/60 hover:bg-[#25D366]/8"
                >
                  {q}
                </a>
              ))}
            </div>
            <a
              href={link("I'd like to chat about Mistwood")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3.5 text-sm font-medium text-[#0b3d22] transition-all duration-200 hover:brightness-110"
            >
              <MessageCircle size={16} aria-hidden /> Start a Chat
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close WhatsApp concierge" : "Open WhatsApp concierge"}
        aria-expanded={open}
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-[#0b3d22] shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:brightness-110"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
