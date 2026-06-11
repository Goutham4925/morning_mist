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

  const overPhoto = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        overPhoto ? "bg-transparent" : "nav-solid"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="group flex flex-col leading-none">
          <span
            className={`font-display text-2xl font-medium tracking-[0.22em] transition-colors duration-500 ${
              overPhoto ? "text-fog" : "text-ink"
            }`}
          >
            MISTWOOD
          </span>
          <span
            className={`mt-1.5 text-[9px] uppercase tracking-[0.4em] transition-colors duration-500 ${
              overPhoto ? "text-fog/70" : "text-bronze"
            }`}
          >
            Vaishnavi Residences
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-[11px] uppercase tracking-[0.26em] transition-colors duration-500 ${
                overPhoto ? "text-fog/85 hover:text-fog" : "text-ink/75 hover:text-ink"
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-1.5 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
          <a
            href="#contact"
            className={`btn-line ${
              overPhoto ? "text-fog hover:bg-fog hover:text-ink" : "btn-fill-ink"
            }`}
            style={{ padding: "0.7rem 1.6rem" }}
          >
            Enquire
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`flex h-11 w-11 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden ${
            overPhoto ? "text-fog" : "text-ink"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="nav-solid border-t border-ink/5 px-6 pb-9 pt-5 lg:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-light italic text-ink transition-colors hover:text-bronze"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-line btn-fill-ink mt-2 w-fit"
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
