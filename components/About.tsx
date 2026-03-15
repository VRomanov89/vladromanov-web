const snapshot = [
  { label: "Discipline", value: "Electrical Engineer" },
  { label: "Business", value: "MBA" },
  { label: "Venture", value: "Founder, Joltek" },
  { label: "Venture", value: "Founder, SolisPLC" },
  { label: "Media", value: "Co-Host, Manufacturing Hub" },
  { label: "Location", value: "Montreal, Canada" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">

          {/* Left: About text */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="section-label">01</span>
              <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
            </div>

            <h2
              className="font-display text-[2.8rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] mb-8"
            >
              Engineer, Operator,
              <br />
              <em className="font-medium italic text-[var(--color-navy)]">Founder.</em>
            </h2>

            <div className="space-y-5 text-[0.95rem] text-[var(--color-ink-3)] leading-[1.75]">
              <p>
                Vladimir Romanov is an electrical engineer with an MBA who has spent his career at the intersection of technical execution and business strategy in manufacturing. His work spans plant operations, controls engineering, SCADA, MES, IT/OT integration, and modernization, with hands-on experience across some of the largest consumer goods manufacturers in the world.
              </p>
              <p>
                Through Joltek, SolisPLC, and Manufacturing Hub, he extends that expertise into consulting, technical education, and industry media, helping manufacturers build reliable, modern, and connected operations while developing the people who run them.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-[0.82rem] font-semibold tracking-[0.07em] uppercase text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors duration-200"
            >
              Get In Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: Snapshot */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="section-label">Snapshot</span>
              <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
            </div>

            <div className="space-y-0">
              {snapshot.map((item, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between py-4 border-b border-[var(--color-border-light)] group"
                >
                  <span className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--color-ink-4)] min-w-[100px]">
                    {item.label}
                  </span>
                  <span className="text-[0.95rem] font-medium text-[var(--color-ink-2)] text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* LinkedIn */}
            <div className="mt-8">
              <a
                href="https://ca.linkedin.com/in/vladromanov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 border border-[var(--color-border)] hover:border-[var(--color-navy)] hover:bg-[var(--color-navy)] group transition-all duration-200 rounded-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-navy)] group-hover:text-white transition-colors duration-200" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-[0.8rem] font-medium text-[var(--color-ink-2)] group-hover:text-white transition-colors duration-200 tracking-[0.04em]">
                  Connect on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
