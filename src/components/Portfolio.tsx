import { Eyebrow } from "./Services";

const projects = [
  {
    tag: "FinTech",
    title: "Helix Capital Dashboard",
    desc: "A real-time analytics platform for a boutique trading desk. Sub-second updates, role-based views, and an audit trail regulators love.",
    accent: "from-[#ffb547] to-[#ff6a1a]",
    art: ArtBars,
  },
  {
    tag: "Healthcare",
    title: "Pulse Patient Portal",
    desc: "HIPAA-grade patient portal with secure messaging, appointment scheduling and lab results — built for two regional clinics.",
    accent: "from-[#ff7a2a] to-[#c12200]",
    art: ArtPulse,
  },
  {
    tag: "E-commerce",
    title: "Forge Marketplace",
    desc: "A multi-vendor commerce platform with split payouts, inventory automation, and a headless storefront on a global CDN.",
    accent: "from-[#ffa726] to-[#f04a0c]",
    art: ArtGrid,
  },
  {
    tag: "SaaS",
    title: "Loom Ops Console",
    desc: "An internal ops console for a logistics startup. Replaced 7 spreadsheets and 3 manual workflows in 9 weeks.",
    accent: "from-[#ff6a1a] to-[#8b1a00]",
    art: ArtFlow,
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="bg-[var(--color-cream)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
              Products people actually{" "}
              <span className="text-gradient-flame">use.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-orange-deep)] transition-colors"
          >
            Discuss your project
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

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => {
            const Art = p.art;
            return (
              <article
                key={p.title}
                className="reveal group relative overflow-hidden rounded-3xl border border-[var(--color-cream-deep)] bg-white hover:-translate-y-1 transition-all duration-300 hover:ring-ember"
              >
                <div
                  className={`relative h-56 md:h-64 overflow-hidden bg-gradient-to-br ${p.accent}`}
                >
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <Art />
                  </div>
                </div>
                <div className="p-7">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-ink)]/55">
                    {p.tag}
                  </span>
                  <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-ink)]/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArtBars() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <g fill="rgba(255,255,255,0.95)">
        {[20, 50, 80, 110, 140, 170, 200, 230, 260, 290].map((x, i) => {
          const h = 30 + ((i * 17) % 90);
          return (
            <rect
              key={i}
              x={x}
              y={170 - h}
              width="18"
              height={h}
              rx="3"
              opacity={0.55 + (i % 4) * 0.1}
            />
          );
        })}
      </g>
      <path
        d="M10 130 C 60 80, 120 110, 180 70 S 280 50, 310 30"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ArtPulse() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <path
        d="M0 95 L60 95 L80 60 L110 130 L140 40 L170 130 L200 95 L320 95"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="95" r="6" fill="white" />
    </svg>
  );
}
function ArtGrid() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 7 }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={20 + c * 42}
            y={20 + r * 36}
            width="34"
            height="28"
            rx="5"
            fill="white"
            opacity={0.35 + ((r + c) % 5) * 0.13}
          />
        )),
      )}
    </svg>
  );
}
function ArtFlow() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <g stroke="white" strokeWidth="2" fill="none">
        <path d="M30 90 H120 V40 H210" />
        <path d="M120 90 V140 H210" />
        <path d="M210 40 H290" />
        <path d="M210 140 H290" />
      </g>
      <g fill="white">
        {[
          [30, 90],
          [120, 90],
          [210, 40],
          [210, 140],
          [290, 40],
          [290, 140],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" />
        ))}
      </g>
    </svg>
  );
}
