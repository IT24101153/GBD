import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Why us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(15,15,16,0.78)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden bg-[var(--color-ink)] ring-1 ring-white/10">
            <img
              src="/logo.PNG"
              alt="Genius Build Developers"
              className="h-7 w-7 object-contain"
            />
          </span>
          <span
            className="font-display font-semibold tracking-tight text-[15px] md:text-base text-white"
          >
            Genius Build
            <span className="text-[var(--color-orange-core)]">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-white/75 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-flame text-white text-sm font-semibold shadow-[0_10px_30px_-12px_rgba(255,106,26,0.7)] hover:scale-[1.02] active:scale-[0.99] transition-transform"
          >
            Start a project
            <ArrowRight />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[var(--color-ink)]">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full gradient-flame text-white font-semibold"
            >
              Start a project <ArrowRight />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
