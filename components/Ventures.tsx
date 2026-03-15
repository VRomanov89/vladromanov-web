const ventures = [
  {
    number: "01",
    name: "Joltek",
    url: "https://www.joltek.com",
    tagline: "Manufacturing Consulting",
    description:
      "Consulting and execution support for manufacturers navigating modernization, industrial automation, digital operations, technical leadership, and workforce development.",
    themes: [
      "Manufacturing consulting",
      "Industrial automation strategy",
      "OT systems and modernization",
      "Technical leadership",
      "Plant floor transformation",
      "Capability building",
    ],
    accentColor: "var(--color-navy)",
  },
  {
    number: "02",
    name: "SolisPLC",
    url: "https://www.solisplc.com",
    tagline: "Industrial Automation Training",
    description:
      "Industrial automation training platform built for engineers, technicians, and manufacturing professionals who need practical, hands-on technical education that works in the real world.",
    themes: [
      "PLC programming",
      "HMI and SCADA",
      "Industrial networking",
      "Robotics",
      "Workforce development",
      "Technical upskilling",
    ],
    accentColor: "var(--color-gold)",
  },
  {
    number: "03",
    name: "Manufacturing Hub",
    url: "https://www.manufacturinghub.live",
    tagline: "Podcast and Industry Media",
    description:
      "Podcast and media platform covering manufacturing, automation, technology, leadership, and career development through conversations with practitioners, executives, and technology leaders.",
    themes: [
      "Industry podcast",
      "Digital transformation",
      "Manufacturing technology",
      "Career development",
      "Thought leadership",
      "Expert interviews",
    ],
    accentColor: "var(--color-navy-mid)",
  },
];

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-parchment)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">02</span>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="font-display text-[2.8rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            Core{" "}
            <em className="font-medium italic text-[var(--color-navy)]">Ventures</em>
          </h2>
          <p className="text-[0.85rem] text-[var(--color-ink-4)] max-w-xs leading-[1.6]">
            Three platforms. One direction. Supporting manufacturing through consulting, education, and media.
          </p>
        </div>

        {/* Venture Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ventures.map((v) => (
            <a
              key={v.name}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-8 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-transparent rounded-sm shadow-card hover:shadow-card-hover transition-all duration-300 active:scale-[0.99]"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: v.accentColor }}
                aria-hidden="true"
              />

              {/* Number */}
              <span
                className="font-display text-[3rem] font-light leading-none mb-4 opacity-15"
                style={{ color: v.accentColor }}
              >
                {v.number}
              </span>

              {/* Name + tagline */}
              <div className="mb-4">
                <h3
                  className="font-display text-[1.8rem] font-medium leading-none tracking-[-0.01em] mb-1"
                  style={{ color: v.accentColor }}
                >
                  {v.name}
                </h3>
                <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[var(--color-ink-4)]">
                  {v.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-[0.88rem] text-[var(--color-ink-3)] leading-[1.7] mb-6 flex-1">
                {v.description}
              </p>

              {/* Themes */}
              <div className="flex flex-wrap gap-2 mb-6">
                {v.themes.map((t) => (
                  <span
                    key={t}
                    className="text-[0.68rem] font-medium tracking-[0.06em] uppercase px-2.5 py-1 bg-[var(--color-parchment-deep)] text-[var(--color-ink-3)] rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-ink-4)] group-hover:text-[var(--color-navy)] transition-colors duration-200">
                <span>Visit Site</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path
                    d="M1 11L11 1M11 1H4M11 1v7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
