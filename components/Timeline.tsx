const entries = [
  {
    company: "Procter & Gamble",
    role: "Controls & Automation Engineer",
    summary:
      "Developed and maintained control systems for high-speed manufacturing lines. Focused on PLC programming, HMI development, and driving operational reliability across production assets.",
    themes: ["Controls Engineering", "PLC/HMI", "Plant Reliability"],
    type: "corporate",
  },
  {
    company: "Kraft Heinz",
    role: "Automation & Controls Engineer",
    summary:
      "Led controls and automation initiatives across production facilities. Delivered SCADA upgrades, MES integration, and data visibility projects that improved operational decision-making on the plant floor.",
    themes: ["SCADA", "MES Integration", "Data Visibility"],
    type: "corporate",
  },
  {
    company: "Post Holdings",
    role: "Automation Lead",
    summary:
      "Drove plant modernization programs including OT infrastructure upgrades and digital operations initiatives. Led cross-functional teams to improve system reliability, traceability, and workforce technical capability.",
    themes: ["Modernization", "OT Infrastructure", "IT/OT", "Technical Leadership"],
    type: "corporate",
  },
  {
    company: "Joltek",
    role: "Founder & Principal Consultant",
    summary:
      "Founded a consulting firm to bring manufacturing modernization expertise directly to plant operators and leadership teams. Works with manufacturers on automation strategy, OT systems, digital operations, and execution capability.",
    themes: ["Consulting", "Strategy", "Execution"],
    type: "venture",
  },
  {
    company: "SolisPLC",
    role: "Founder & Educator",
    summary:
      "Built an industrial automation training platform from the ground up to address the workforce skills gap in manufacturing. Serves engineers, technicians, and industrial teams with practical, hands-on technical education.",
    themes: ["Education Platform", "PLC Training", "Workforce Development"],
    type: "venture",
  },
  {
    company: "Manufacturing Hub",
    role: "Co-Host",
    summary:
      "Co-hosts a podcast and media platform dedicated to manufacturing, automation, technology, and career development. Engages practitioners, executives, and thought leaders in substantive industry conversations.",
    themes: ["Podcast", "Industry Media", "Thought Leadership"],
    type: "venture",
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">03</span>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="font-display text-[2.8rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            Career{" "}
            <em className="font-medium italic text-[var(--color-navy)]">Timeline</em>
          </h2>
          <p className="text-[0.85rem] text-[var(--color-ink-4)] max-w-xs leading-[1.6]">
            Field-tested expertise across the largest names in manufacturing, built into two independent platforms.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 lg:left-[200px] top-0 bottom-0 w-[1px] bg-[var(--color-border)] hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {entries.map((entry, i) => (
              <div
                key={i}
                className="relative sm:grid sm:grid-cols-[200px_1fr] gap-10 pb-10"
              >
                {/* Left: Company (desktop) */}
                <div className="hidden sm:flex flex-col items-end pr-10 pt-1">
                  <span
                    className={`text-[0.75rem] font-semibold tracking-[0.08em] uppercase ${
                      entry.type === "venture"
                        ? "text-[var(--color-gold)]"
                        : "text-[var(--color-ink-4)]"
                    }`}
                  >
                    {entry.type === "venture" ? "Founder" : "Industry"}
                  </span>
                  <span className="font-display text-[1.05rem] font-medium text-[var(--color-ink-2)] text-right leading-tight mt-0.5">
                    {entry.company}
                  </span>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-[-5px] lg:left-[195px] top-2 w-[10px] h-[10px] rounded-full border-2 hidden sm:block"
                  style={{
                    borderColor:
                      entry.type === "venture"
                        ? "var(--color-gold)"
                        : "var(--color-navy)",
                    background: "var(--color-surface)",
                  }}
                  aria-hidden="true"
                />

                {/* Right: Content */}
                <div className="sm:pl-10">
                  {/* Mobile: company name */}
                  <div className="sm:hidden mb-3">
                    <span
                      className={`text-[0.7rem] font-semibold tracking-[0.1em] uppercase ${
                        entry.type === "venture"
                          ? "text-[var(--color-gold)]"
                          : "text-[var(--color-ink-4)]"
                      }`}
                    >
                      {entry.company}
                    </span>
                  </div>

                  <h3 className="font-display text-[1.4rem] font-medium text-[var(--color-ink)] leading-tight mb-2">
                    {entry.role}
                  </h3>

                  <p className="text-[0.88rem] text-[var(--color-ink-3)] leading-[1.7] mb-4">
                    {entry.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {entry.themes.map((t) => (
                      <span
                        key={t}
                        className="text-[0.67rem] font-medium tracking-[0.06em] uppercase px-2.5 py-1 rounded-sm"
                        style={{
                          background:
                            entry.type === "venture"
                              ? "var(--color-gold-pale)"
                              : "var(--color-parchment-deep)",
                          color:
                            entry.type === "venture"
                              ? "var(--color-gold)"
                              : "var(--color-ink-3)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
