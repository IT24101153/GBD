import { Eyebrow } from "./Services";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[var(--color-ink)] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[360px] w-[800px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,26,0.6), rgba(255,106,26,0) 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 max-w-2xl">
        <div className="reveal">
          <div className="text-white/80">
            <Eyebrow>Let's talk</Eyebrow>
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Tell us about your
            <br />
            <span className="text-gradient-flame">next move.</span>
          </h2>
          <p className="mt-5 text-white/65 text-lg max-w-md leading-relaxed">
            New build, rescue mission, or just a smart second opinion — drop us
            a line and we'll get back to you.
          </p>

          <dl className="mt-10 space-y-5 text-white/80">
            <Row label="Email">
              <a
                href="mailto:lelumjay@gmail.com"
                className="hover:text-[var(--color-amber-glow)] transition-colors"
              >
                lelumjay@gmail.com
              </a>
            </Row>
            <Row label="WhatsApp">
              <a
                href="https://wa.me/94710110016"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-amber-glow)] transition-colors"
              >
                +94710110016
              </a>
            </Row>
            <Row label="LinkedIn">
              <a
                href="https://linkedin.com/company/genius-build"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-amber-glow)] transition-colors"
              >
                linkedin.com/company/genius-build
              </a>
            </Row>
            <Row label="Hours">Available 24 / 7</Row>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-6">
      <dt className="font-mono uppercase tracking-wider text-xs text-white/45 w-20 shrink-0">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
