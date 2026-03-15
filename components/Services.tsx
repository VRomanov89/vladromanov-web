const services = [
  {
    number: "01",
    title: "Consulting and Advisory",
    description:
      "Support for manufacturers navigating modernization, technical strategy, operational risk, and execution. From assessing current state to guiding complex transformations, this work is rooted in plant-floor reality.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Industrial Automation and Modernization",
    description:
      "Controls architecture, system upgrades, PLC and HMI development, and plant floor technology transformation. Combining engineering depth with an operator's understanding of what reliability actually requires.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "SCADA, MES, and Data Systems",
    description:
      "Design, integration, and optimization of operational visibility systems. Connecting plant-floor data to business systems, reducing information gaps, and enabling decisions grounded in real operational data.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Training and Technical Education",
    description:
      "Practical programs and content built to close the skills gap in industrial automation. Delivered through SolisPLC and tailored engagements designed to upskill teams with knowledge they can apply immediately.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Podcasting, Writing, and Industry Media",
    description:
      "Public-facing thought leadership through Manufacturing Hub, personal technical content, articles, and industry commentary. An ongoing commitment to advancing the conversation in manufacturing and automation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-parchment)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">04</span>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="font-display text-[2.8rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            What I{" "}
            <em className="font-medium italic text-[var(--color-navy)]">Do</em>
          </h2>
          <p className="text-[0.85rem] text-[var(--color-ink-4)] max-w-xs leading-[1.6]">
            Five areas where experience, strategy, and execution converge.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-[var(--color-surface)] p-8 group ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-5 text-[var(--color-navy)] transition-colors duration-200 group-hover:bg-[var(--color-navy)] group-hover:text-white"
                style={{ background: "var(--color-parchment-deep)" }}
              >
                {s.icon}
              </div>

              {/* Number + title */}
              <div className="mb-3">
                <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] block mb-1">
                  {s.number}
                </span>
                <h3 className="font-display text-[1.3rem] font-medium leading-tight text-[var(--color-ink)]">
                  {s.title}
                </h3>
              </div>

              <p className="text-[0.88rem] text-[var(--color-ink-3)] leading-[1.7]">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[0.9rem] text-[var(--color-ink-3)]">
            Looking for consulting support, a training partnership, or a speaking opportunity?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-[0.82rem] font-semibold tracking-[0.07em] uppercase text-[var(--color-surface)] bg-[var(--color-navy)] hover:bg-[var(--color-navy-dark)] active:scale-[0.97] transition-all duration-200 rounded-sm shadow-card whitespace-nowrap"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
