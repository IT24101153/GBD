const services = [
  {
    n: "01",
    title: "Web Development",
    desc: "Marketing sites, dashboards, and complex SaaS products built with React, Next.js, and modern frameworks.",
    tags: ["React", "Next.js", "Node"],
    icon: IconWeb,
  },
  {
    n: "02",
    title: "Mobile Apps",
    desc: "Native iOS & Android plus cross-platform builds with React Native and Flutter — beautifully crafted, app-store ready.",
    tags: ["iOS", "Android", "React Native"],
    icon: IconMobile,
  },
  {
    n: "03",
    title: "Custom Software",
    desc: "Internal tools, ERPs, automations and bespoke business platforms tailored to how your team actually works.",
    tags: ["TypeScript", "Python", "Go"],
    icon: IconCode,
  },
  {
    n: "04",
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure on AWS, GCP and Azure with CI/CD, observability, and cost-aware architectures.",
    tags: ["AWS", "Docker", "K8s"],
    icon: IconCloud,
  },
  {
    n: "05",
    title: "AI & Automation",
    desc: "Smart assistants, RAG systems, and ML-powered features that quietly do the work behind the scenes.",
    tags: ["LLMs", "RAG", "Agents"],
    icon: IconAI,
  },
  {
    n: "06",
    title: "UI / UX Design",
    desc: "Design systems and pixel-perfect interfaces that feel obvious to use and unmistakably on-brand.",
    tags: ["Figma", "Design Systems"],
    icon: IconDesign,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[var(--color-cream)] py-24 md:py-32"
    >
      <div className="absolute inset-0 grid-bg-light opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="reveal">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
              One team. Every layer of your{" "}
              <span className="text-gradient-flame">product stack.</span>
            </h2>
          </div>
          <p className="reveal text-base md:text-lg text-[var(--color-ink)]/65 max-w-md">
            Whatever you're building, we cover it end to end — design,
            engineering, infrastructure, and the unsexy bits in between.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.n}
                className="reveal group relative overflow-hidden rounded-2xl bg-white border border-[var(--color-cream-deep)] p-7 transition-all duration-300 hover:-translate-y-1 hover:ring-ember"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl gradient-flame text-white flex items-center justify-center shadow-[0_12px_30px_-12px_rgba(255,106,26,0.7)]">
                    <Icon />
                  </div>
                  <span className="font-mono text-xs text-[var(--color-ink)]/40">
                    {s.n}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[var(--color-ink)]/65 leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-full bg-[var(--color-cream-deep)] text-[var(--color-ink)]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[var(--color-orange-core)]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-ink)]/5 border border-[var(--color-ink)]/10 text-xs font-mono uppercase tracking-wider text-[var(--color-ink)]/70">
      <span className="h-1.5 w-1.5 rounded-full gradient-flame" />
      {children}
    </div>
  );
}

function stroke() {
  return {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function IconWeb() {
  const p = stroke();
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 6.5h.01M9.5 6.5h.01" />
    </svg>
  );
}
function IconMobile() {
  const p = stroke();
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10 5.5h4M11 18.5h2" />
    </svg>
  );
}
function IconCode() {
  const p = stroke();
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  );
}
function IconCloud() {
  const p = stroke();
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
      <path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5 4.5 4.5 0 0 1 17.5 18H7z" />
    </svg>
  );
}
function IconAI() {
  const p = stroke();
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}
function IconDesign() {
  const p = stroke();
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
      <path d="M4 17l8-13 8 13H4z" />
      <path d="M9 17l3-5 3 5" />
    </svg>
  );
}
