import IsoCube from "./IsoCube";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] text-white pt-28 md:pt-40 pb-20 md:pb-28"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,26,0.75), rgba(255,106,26,0) 65%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(193,34,0,0.65), rgba(193,34,0,0) 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur text-xs font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange-core)] animate-pulse" />
            Now booking Q3 builds · Limited slots
          </div>

          <h1 className="font-display mt-6 text-[44px] sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            Software, shipped
            <br />
            with{" "}
            <span className="relative inline-block">
              <span className="text-gradient-flame">genius</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M3 8 C 80 2, 170 14, 297 5"
                  stroke="url(#u1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="u1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#ffb547" />
                    <stop offset="0.55" stopColor="#ff6a1a" />
                    <stop offset="1" stopColor="#c12200" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            We design and build modern web platforms, mobile apps, and custom
            software for ambitious companies. From a clean idea on a whiteboard
            to a polished product in the wild — engineered end to end.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-flame text-white font-semibold shadow-[0_18px_45px_-18px_rgba(255,106,26,0.9)] hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              Start your project
              <Arrow />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] text-white font-semibold hover:bg-white/[0.07] transition-colors"
            >
              See our work
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/55 text-sm">
            <div>
              <div className="font-display text-2xl text-white font-semibold">
                200+
              </div>
              Projects delivered
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <div className="font-display text-2xl text-white font-semibold">
                12+
              </div>
              Industries served
            </div>
            <div className="h-10 w-px bg-white/15 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-2xl text-white font-semibold">
                4.9/5
              </div>
              Client rating
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative reveal flex items-center justify-center">
          <div className="absolute inset-0 -z-10 grid-bg opacity-30 pointer-events-none" />
          <div className="animate-float drop-shadow-[0_40px_60px_rgba(255,106,26,0.35)]">
            <IsoCube size={320} />
          </div>

          {/* Floating chips */}
          <Chip
            className="absolute -top-2 left-2"
            label="React · Next.js"
          />
          <Chip
            className="absolute top-16 right-0"
            label="iOS · Android"
            tone="amber"
          />
          <Chip
            className="absolute bottom-8 left-4"
            label="AWS · GCP"
            tone="red"
          />
          <Chip
            className="absolute bottom-2 right-6"
            label="AI · ML"
          />
        </div>
      </div>
    </section>
  );
}

function Chip({
  label,
  className = "",
  tone = "orange",
}: {
  label: string;
  className?: string;
  tone?: "orange" | "amber" | "red";
}) {
  const toneMap = {
    orange: "from-[#ff7a2a] to-[#f04a0c]",
    amber: "from-[#ffd17a] to-[#ffa726]",
    red: "from-[#e63a14] to-[#8b1a00]",
  } as const;
  return (
    <span
      className={`backdrop-blur-md bg-white/[0.06] border border-white/10 text-white/90 text-xs font-mono px-3 py-1.5 rounded-full shadow-lg ${className}`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br ${toneMap[tone]} mr-2`}
      />
      {label}
    </span>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
