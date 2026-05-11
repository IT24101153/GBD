import { useState } from "react";
import { Eyebrow } from "./Services";

export default function Contact() {
  const [sent, setSent] = useState(false);

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
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
            a line and we'll get back within one business day.
          </p>

          <dl className="mt-10 space-y-5 text-white/80">
            <Row label="Email">
              <a
                href="mailto:hello@geniusbuild.dev"
                className="hover:text-[var(--color-amber-glow)] transition-colors"
              >
                hello@geniusbuild.dev
              </a>
            </Row>
            <Row label="Phone">+1 (555) 010-4242</Row>
            <Row label="Hours">Mon–Fri · 9am – 6pm (your timezone)</Row>
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="reveal rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 md:p-9"
        >
          {sent ? (
            <div className="text-center py-16">
              <div className="mx-auto h-14 w-14 rounded-full gradient-flame flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l5 5 9-11"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display mt-5 text-2xl font-semibold">
                Got it — thanks!
              </h3>
              <p className="mt-2 text-white/65">
                We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" placeholder="Ada Lovelace" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="ada@company.com"
              />
              <Field
                label="Company"
                name="company"
                placeholder="Company name"
              />
              <SelectField
                label="Project type"
                name="type"
                options={[
                  "Web app",
                  "Mobile app",
                  "Custom software",
                  "AI / Automation",
                  "Cloud & DevOps",
                  "Design only",
                ]}
              />
              <SelectField
                className="sm:col-span-2"
                label="Estimated budget"
                name="budget"
                options={[
                  "Under $25k",
                  "$25k – $75k",
                  "$75k – $200k",
                  "$200k+",
                ]}
              />
              <div className="sm:col-span-2">
                <Label>Project details</Label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What are you building? What's the deadline? Anything we should know?"
                  className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-[var(--color-orange-core)] focus:ring-2 focus:ring-[var(--color-orange-core)]/30 outline-none px-4 py-3 placeholder:text-white/35 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-flame text-white font-semibold shadow-[0_18px_45px_-18px_rgba(255,106,26,0.9)] hover:scale-[1.01] active:scale-[0.99] transition-transform"
              >
                Send message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-mono uppercase tracking-wider text-white/55">
      {children}
    </label>
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
      <dt className="font-mono uppercase tracking-wider text-xs text-white/45 w-16">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-[var(--color-orange-core)] focus:ring-2 focus:ring-[var(--color-orange-core)]/30 outline-none px-4 py-3 placeholder:text-white/35 transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-[var(--color-orange-core)] focus:ring-2 focus:ring-[var(--color-orange-core)]/30 outline-none px-4 py-3 transition-all appearance-none"
      >
        <option value="" disabled className="bg-[var(--color-ink)]">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[var(--color-ink)]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
