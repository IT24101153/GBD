const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "Swift",
  "Kotlin",
  "Flutter",
  "PostgreSQL",
  "AWS",
  "GCP",
  "Azure",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Stripe",
  "OpenAI",
  "Figma",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="bg-[var(--color-ink)] border-t border-white/5 py-6 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap will-change-transform">
        {row.map((it, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white/15 hover:text-white/85 transition-colors"
          >
            {it}
            <span className="mx-8 text-[var(--color-orange-core)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
