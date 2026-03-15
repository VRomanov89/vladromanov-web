const articles = [
  {
    category: "Industrial Automation",
    title: "Understanding SCADA Architecture in Modern Manufacturing",
    excerpt:
      "A practical breakdown of how SCADA systems fit into today's plant floor — from data acquisition to visualization and the integration challenges that matter most.",
    readTime: "8 min read",
  },
  {
    category: "Operations",
    title: "The Business Case for IT/OT Convergence",
    excerpt:
      "Bridging information and operational technology is more than a technical project. It requires organizational alignment, risk management, and a clear-eyed view of what's at stake.",
    readTime: "6 min read",
  },
  {
    category: "Leadership",
    title: "Building Technical Teams in Manufacturing Environments",
    excerpt:
      "Lessons from years of working with controls engineers, operations teams, and plant leadership on developing the people and structures that sustain modern manufacturing.",
    readTime: "5 min read",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-parchment)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">06</span>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="font-display text-[2.8rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            Writing and{" "}
            <em className="font-medium italic text-[var(--color-navy)]">Insights</em>
          </h2>
          <p className="text-[0.85rem] text-[var(--color-ink-4)] max-w-xs leading-[1.6]">
            Perspective on manufacturing, automation, systems thinking, and technical leadership.
          </p>
        </div>

        {/* Article cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {articles.map((item, i) => (
            <article
              key={i}
              className="group flex flex-col p-7 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-navy)] hover:shadow-card-hover transition-[border-color,box-shadow] duration-200 rounded-sm"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-gold)]">
                  {item.category}
                </span>
                <span className="text-[0.68rem] text-[var(--color-ink-4)] tracking-[0.04em]">
                  {item.readTime}
                </span>
              </div>

              <h3 className="font-display text-[1.25rem] font-medium text-[var(--color-ink)] leading-[1.25] tracking-[-0.01em] mb-3 flex-1">
                {item.title}
              </h3>

              <p className="text-[0.83rem] text-[var(--color-ink-3)] leading-[1.65] mb-6">
                {item.excerpt}
              </p>

              {/* Animated underline accent */}
              <div
                className="h-[1.5px] w-0 group-hover:w-full bg-[var(--color-navy)] transition-[width] duration-300 ease-out"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Trailing note */}
        <p className="text-[0.8rem] text-[var(--color-ink-4)] text-center tracking-[0.04em]">
          More writing coming soon. Follow along on{" "}
          <a
            href="https://ca.linkedin.com/in/vladromanov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors duration-200 font-medium"
          >
            LinkedIn
          </a>{" "}
          for updates.
        </p>
      </div>
    </section>
  );
}
