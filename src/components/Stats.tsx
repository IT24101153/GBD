const stats = [
  { v: "200+", l: "Projects delivered" },
  { v: "80+", l: "Happy clients" },
  { v: "12+", l: "Industries served" },
  { v: "98%", l: "On-time launches" },
];

export default function Stats() {
  return (
    <section className="relative bg-[var(--color-cream-deep)] py-16 md:py-20 border-y border-[var(--color-fog)]/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <div key={s.l} className="reveal text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl font-bold text-gradient-flame leading-none">
              {s.v}
            </div>
            <div className="mt-3 text-[var(--color-ink)]/65 font-medium">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
