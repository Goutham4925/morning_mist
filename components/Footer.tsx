export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-forest">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg tracking-[0.28em] text-cream">MISTWOOD</p>
            <p className="mt-1 text-[10px] font-light uppercase tracking-[0.3em] text-sage">
              by Vaishnavi Residences
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              ["#overview", "Overview"],
              ["#forest", "Forest"],
              ["#amenities", "Amenities"],
              ["#invest", "Invest"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-xs font-light uppercase tracking-[0.2em] text-sage transition-colors hover:text-gold-light"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="gold-line mt-10 opacity-40" />
        <p className="mt-8 text-center text-xs font-light leading-relaxed text-sage/70">
          © {new Date().getFullYear()} Vaishnavi Residences. All rights reserved.
          Strategic partner — Tatra. Visuals are artistic impressions; details, plans
          and offerings are indicative and subject to change.
        </p>
      </div>
    </footer>
  );
}
