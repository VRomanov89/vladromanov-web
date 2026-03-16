const entries = [
  {
    company: "DnA Ventures",
    role: "Senior Industry Advisor",
    period: "Apr 2025 – Present",
    summary:
      "Providing senior advisory expertise in manufacturing, industrial automation, and operational strategy to support industry-facing initiatives.",
    themes: ["Advisory", "Industry Leadership"],
    type: "venture",
  },
  {
    company: "Joltek",
    role: "Director, Digital Transformation & Industrial Automation Consulting",
    period: "Sep 2024 – Present",
    summary:
      "Leading consulting and execution support for manufacturers navigating modernization, automation strategy, IT/OT convergence, and operational excellence. Working with engineering leaders and plant executives to build scalable transformation programs.",
    themes: ["Consulting", "IT/OT Strategy", "Digital Transformation"],
    type: "venture",
  },
  {
    company: "Manufacturing Hub",
    role: "Co-Host",
    period: "Dec 2020 – Present",
    summary:
      "Co-hosting one of the few manufacturing-oriented live podcasts alongside Dave Griffith. Conversations with practitioners, executives, and technology leaders covering manufacturing, automation, digital transformation, and career development.",
    themes: ["Podcast", "Industry Media", "Thought Leadership"],
    type: "venture",
  },
  {
    company: "SolisPLC",
    role: "Founder",
    period: "Apr 2017 – Present",
    summary:
      "Built an industrial automation training platform from the ground up. Published over 50 hours of video content, 100+ technical blog posts, and 4 Udemy courses with over 11,200 students. Trusted by manufacturers including Kroger, General Mills, and Danone.",
    themes: ["Education Platform", "PLC Training", "Workforce Development"],
    type: "venture",
  },
  {
    company: "Kraft Heinz / Post Holdings",
    role: "Senior Control Systems Engineer",
    period: "Apr 2017 – Oct 2025",
    summary:
      "Led modernization, reliability, and automation programs across multiple manufacturing plants over eight years. Managed a new plant construction and commissioning project valued over USD 4MM for Post Holdings. Earlier role as Maintenance Supervisor with direct oversight of 26 mechanics and technicians.",
    themes: ["Controls Engineering", "Plant Modernization", "Systems Integration", "Cross-Functional Leadership"],
    type: "corporate",
  },
  {
    company: "Procter & Gamble",
    role: "Electrical Engineer | Band 1 Manager",
    period: "Apr 2014 – Jun 2016",
    summary:
      "Led procurement, deployment, and validation of two manufacturing lines valued over USD 10MM — recognized as the fastest installation on site. Developed a control system algorithm for PocketPearl packaging and drove R&D efforts resulting in a 20% increase in production speed.",
    themes: ["Controls Engineering", "PLC/HMI", "New Line Deployment"],
    type: "corporate",
  },
  {
    company: "Mitsubishi Electric",
    role: "Electrical Field Engineer",
    period: "Oct 2013 – Apr 2014",
    summary:
      "Field engineering role within the Elevator and Escalator Department. Troubleshot technical issues through electrical and mechanical prints, developed construction packages for modern elevator installations, and supervised field technicians on site.",
    themes: ["Field Engineering", "Electrical Systems", "Construction"],
    type: "corporate",
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
            Field-tested expertise across major manufacturers, built into three independent platforms.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 lg:left-[220px] top-0 bottom-0 w-[1px] bg-[var(--color-border)] hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {entries.map((entry, i) => (
              <div
                key={i}
                className="relative sm:grid sm:grid-cols-[220px_1fr] gap-10 pb-12"
              >
                {/* Left: Company + period (desktop) */}
                <div className="hidden sm:flex flex-col items-end pr-10 pt-1">
                  <span
                    className={`text-[0.67rem] font-semibold tracking-[0.1em] uppercase mb-1 ${
                      entry.type === "venture"
                        ? "text-[var(--color-gold)]"
                        : "text-[var(--color-ink-4)]"
                    }`}
                  >
                    {entry.type === "venture" ? "Venture" : "Industry"}
                  </span>
                  <span className="font-display text-[1.05rem] font-medium text-[var(--color-ink-2)] text-right leading-tight">
                    {entry.company}
                  </span>
                  <span className="text-[0.72rem] text-[var(--color-ink-4)] text-right mt-1.5 leading-tight">
                    {entry.period}
                  </span>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-[-5px] lg:left-[215px] top-2 w-[10px] h-[10px] rounded-full border-2 hidden sm:block"
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
                  {/* Mobile: company + period */}
                  <div className="sm:hidden mb-3">
                    <span
                      className={`text-[0.7rem] font-semibold tracking-[0.1em] uppercase block mb-0.5 ${
                        entry.type === "venture"
                          ? "text-[var(--color-gold)]"
                          : "text-[var(--color-ink-4)]"
                      }`}
                    >
                      {entry.company}
                    </span>
                    <span className="text-[0.72rem] text-[var(--color-ink-4)]">
                      {entry.period}
                    </span>
                  </div>

                  <h3 className="font-display text-[1.35rem] font-medium text-[var(--color-ink)] leading-tight mb-2">
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
