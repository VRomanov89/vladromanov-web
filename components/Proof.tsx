const corporate = [
  {
    name: "Procter & Gamble",
    context:
      "Electrical engineering and controls work on high-speed manufacturing lines, including new line deployments valued over USD 10MM and a 20% production speed improvement through R&D.",
  },
  {
    name: "Kraft Heinz / Post Holdings",
    context:
      "Eight years leading control systems modernization, reliability programs, and a USD 4MM plant construction and commissioning project across multiple manufacturing facilities.",
  },
  {
    name: "Mitsubishi Electric",
    context:
      "Electrical field engineering within the Elevator and Escalator Department, including construction packages, field troubleshooting, and technician supervision.",
  },
];

const ventures = [
  {
    name: "Joltek",
    role: "Founder",
    description: "Manufacturing consulting and execution support.",
    url: "https://www.joltek.com",
  },
  {
    name: "SolisPLC",
    role: "Founder",
    description: "Industrial automation training platform.",
    url: "https://www.solisplc.com",
  },
  {
    name: "Manufacturing Hub",
    role: "Co-Host",
    description: "Industry podcast and media platform.",
    url: "https://www.manufacturinghub.live",
  },
];

export default function Proof() {
  return (
    <section
      id="proof"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">06</span>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
        </div>

        <div className="mb-16">
          <h2
            className="font-display text-[2.8rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] mb-4"
          >
            Credibility{" "}
            <em className="font-medium italic text-[var(--color-navy)]">Built in the Field</em>
          </h2>
          <p className="text-[0.95rem] text-[var(--color-ink-3)] leading-[1.75] max-w-xl">
            Career experience earned inside some of the world's largest manufacturing organizations, combined with three industry platforms built from the ground up.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Corporate background */}
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-ink-4)] mb-6">
              Corporate Experience
            </p>
            <div className="space-y-0">
              {corporate.map((co, i) => (
                <div
                  key={i}
                  className="py-6 border-b border-[var(--color-border-light)] first:border-t first:border-[var(--color-border-light)]"
                >
                  <p className="font-display text-[1.15rem] font-medium text-[var(--color-ink)] tracking-[-0.01em] mb-1.5">
                    {co.name}
                  </p>
                  <p className="text-[0.83rem] text-[var(--color-ink-3)] leading-[1.65]">
                    {co.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Ventures built */}
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-ink-4)] mb-6">
              Ventures Founded
            </p>
            <div className="space-y-4">
              {ventures.map((v, i) => (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-5 bg-[var(--color-parchment)] border border-[var(--color-border)] hover:border-[var(--color-navy)] hover:shadow-card-hover active:scale-[0.99] transition-[border-color,box-shadow,transform] duration-200 rounded-sm"
                >
                  {/* Role badge */}
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="inline-block px-2 py-0.5 text-[0.62rem] font-semibold tracking-[0.1em] uppercase text-[var(--color-navy)] bg-[var(--color-gold-pale)] rounded-sm">
                      {v.role}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[1.1rem] font-medium text-[var(--color-ink)] leading-tight mb-1 group-hover:text-[var(--color-navy)] transition-colors duration-200">
                      {v.name}
                    </p>
                    <p className="text-[0.8rem] text-[var(--color-ink-4)]">
                      {v.description}
                    </p>
                  </div>

                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="flex-shrink-0 mt-1 text-[var(--color-ink-4)] group-hover:text-[var(--color-navy)] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200"
                    aria-hidden="true"
                  >
                    <path d="M1 13L13 1M13 1H5M13 1v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Educator / Media note */}
            <div
              className="mt-6 p-5 border-l-2 border-[var(--color-gold)]"
              style={{ background: "var(--color-gold-pale)" }}
            >
              <p className="text-[0.82rem] text-[var(--color-ink-2)] leading-[1.7]">
                Public educator in industrial automation and a trusted voice in modern manufacturing through media, podcasting, and technical content.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
