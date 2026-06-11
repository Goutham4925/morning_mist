"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#location", label: "Location" },
  { href: "#masterplan", label: "Masterplan" },
  { href: "#towers", label: "Towers" },
  { href: "#lifestyle", label: "Lifestyle" },
  { href: "#invest", label: "Invest" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-[0.28em] text-cream transition-colors group-hover:text-gold-light sm:text-2xl">
            MISTWOOD
          </span>
          <span className="mt-1 text-[10px] font-light uppercase tracking-[0.34em] text-sage">
            by Vaishnavi Residences
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light uppercase tracking-[0.18em] text-mist transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold/60 px-6 py-2.5 text-sm uppercase tracking-[0.18em] text-gold-light transition-all duration-300 hover:bg-gold hover:text-forest"
          >
            Enquire
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-cream lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong border-t border-cream/5 px-6 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-mist transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-full border border-gold/60 px-6 py-2.5 text-sm uppercase tracking-[0.18em] text-gold-light"
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
