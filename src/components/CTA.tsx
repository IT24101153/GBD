export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-flame text-white p-10 md:p-16 lg:p-20">
          <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
          <div
            className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.45), rgba(255,255,255,0) 60%)",
            }}
          />

          <div className="relative max-w-3xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Ready to build something
              <br />
              genuinely good?
            </h2>
            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-xl">
              Tell us what you're working on. We'll come back within one
              business day with honest thoughts and a clear next step.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--color-ink)] text-white font-semibold hover:bg-[var(--color-ink-soft)] transition-colors"
              >
                Start your project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@geniusbuild.dev"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 backdrop-blur text-white font-semibold border border-white/25 hover:bg-white/25 transition-colors"
              >
                hello@geniusbuild.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
