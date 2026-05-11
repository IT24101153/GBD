import { Eyebrow } from "./Services";

const reasons = [
  {
    title: "Senior team, no juniors hidden behind slides",
    body: "Every engineer on your project has shipped real production software. You always know who's writing your code.",
    icon: IconShield,
  },
  {
    title: "Fixed weekly cadence",
    body: "Demo every Friday. Decisions every Monday. You're never wondering what's happening or what comes next.",
    icon: IconClock,
  },
  {
    title: "We obsess over the details",
    body: "Pixel-perfect UI, 60fps interactions, fast loads. The small things compound — and we count on that.",
    icon: IconSpark,
  },
  {
    title: "Built to be handed over",
    body: "Clean code, real docs, sensible infra. You're never locked into us — but most clients stick around anyway.",
    icon: IconKey,
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-[var(--color-cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="reveal lg:sticky lg:top-28">
          <Eyebrow>Why teams pick us</Eyebrow>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Boutique by choice.{" "}
            <span className="text-gradient-flame">Serious by default.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink)]/65 max-w-md">
            We deliberately keep the team small so every project gets the
            senior, hands-on attention it needs to ship well.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-ink)] text-white font-semibold hover:bg-[var(--color-ink-soft)] transition-colors"
          >
            Book a 30-min intro call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <ul className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <li
                key={r.title}
                className="reveal rounded-2xl bg-white border border-[var(--color-cream-deep)] p-7 hover:-translate-y-1 hover:ring-ember transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--color-ink)] text-[var(--color-amber-glow)] flex items-center justify-center">
                  <Icon />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2 text-[var(--color-ink)]/65 text-[15px] leading-relaxed">
                  {r.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const sp = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...sp}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...sp}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...sp}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}
function IconKey() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...sp}>
      <circle cx="8" cy="12" r="3.5" />
      <path d="M11.5 12H21M17 12v3M20 12v2" />
    </svg>
  );
}
