const cols = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Mobile Apps",
      "Custom Software",
      "Cloud & DevOps",
      "AI & Automation",
      "UI / UX Design",
    ],
  },
  {
    title: "Company",
    links: ["About", "Process", "Selected work", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Case studies", "Blog", "Tech stack", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                <img src="/logo.PNG" alt="" className="h-8 w-8 object-contain" />
              </span>
              <span className="font-display font-semibold text-lg">
                Genius Build
                <span className="text-[var(--color-orange-core)]">.</span>
              </span>
            </div>
            <p className="mt-5 text-white/60 max-w-sm leading-relaxed">
              We design and engineer modern software for ambitious teams.
              Built carefully, shipped quickly, kept simple.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { l: "X", h: "https://x.com" },
                { l: "in", h: "https://linkedin.com" },
                { l: "gh", h: "https://github.com" },
                { l: "dr", h: "https://dribbble.com" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono hover:bg-[var(--color-orange-core)] hover:border-[var(--color-orange-core)] transition-colors"
                  aria-label={s.l}
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono uppercase tracking-wider text-xs text-white/45">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/75 hover:text-[var(--color-amber-glow)] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Genius Build Developers. All rights reserved.</div>
          <div className="font-mono">
            Built with care · Made for teams that ship
          </div>
        </div>
      </div>
    </footer>
  );
}
