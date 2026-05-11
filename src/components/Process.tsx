import { Eyebrow } from "./Services";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We map out goals, users, constraints and success metrics. No fluff — just the questions that change what we build.",
  },
  {
    n: "02",
    title: "Design",
    body: "Lightning-fast prototypes, then a polished design system. You sign off on something you can already see and feel.",
  },
  {
    n: "03",
    title: "Develop",
    body: "Modular, well-tested code in weekly cycles. You get a live preview environment from day one — never a black box.",
  },
  {
    n: "04",
    title: "Deploy",
    body: "Production launch with CI/CD, observability and a clean handover. We stick around for the next iteration too.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-[var(--color-ink)] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,26,0.7), rgba(255,106,26,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <div className="text-white/80">
            <Eyebrow>How we work</Eyebrow>
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            A process that{" "}
            <span className="text-gradient-flame">de-risks the build.</span>
          </h2>
          <p className="mt-5 text-white/65 text-lg max-w-2xl">
            Predictable cadence, transparent decisions, real software in your
            hands every week. No mystery, no surprises at launch.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-gradient-flame leading-none">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
