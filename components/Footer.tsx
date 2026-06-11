export default function Footer() {
  return (
    <footer className="relative bg-inkdeep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="font-script text-center text-4xl text-bronzelight/70" aria-hidden>
          goodnight,
        </p>
        <p className="font-display mt-3 text-center text-3xl font-light tracking-[0.22em] text-fog">
          MISTWOOD
        </p>
        <p className="mt-2 text-center text-[9px] uppercase tracking-[0.4em] text-sagemist/60">
          Vaishnavi Residences
        </p>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            ["#overview", "Overview"],
            ["#location", "Location"],
            ["#masterplan", "Masterplan"],
            ["#towers", "Towers"],
            ["#invest", "Invest"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[10px] uppercase tracking-[0.26em] text-sagemist/60 transition-colors hover:text-bronzelight"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="rule-bronze-center mt-12 opacity-40" />
        <p className="mt-8 text-center text-[10px] leading-relaxed text-sagemist/50">
          © {new Date().getFullYear()} Vaishnavi Residences. All rights reserved.
          Strategic partner — Tatra. Visuals are artistic impressions; details, plans
          and offerings are indicative and subject to change.
        </p>
      </div>
    </footer>
  );
}
