const channels = [
  {
    label: "Manufacturing Hub Podcast",
    description:
      "Co-hosted conversations with practitioners, executives, and technology leaders covering manufacturing, automation, digital transformation, and career development.",
    url: "https://www.manufacturinghub.live",
    linkLabel: "manufacturinghub.live",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    label: "Manufacturing Hub YouTube",
    description:
      "Video conversations from the Manufacturing Hub platform. Industry insight in a format built for how manufacturing professionals actually consume content.",
    url: "https://www.youtube.com/@manufacturinghubpodcast",
    linkLabel: "@manufacturinghubpodcast",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Personal YouTube",
    description:
      "Technical content on industrial automation, modern manufacturing systems, and practical topics for engineers and operators in the field.",
    url: "https://www.youtube.com/channel/UC6JpBeS_6JhUwfGF8RgLCIQ",
    linkLabel: "YouTube Channel",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Media() {
  return (
    <section
      id="media"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">05</span>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="font-display text-[2.8rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            Media and{" "}
            <em className="font-medium italic text-[var(--color-navy)]">Insights</em>
          </h2>
          <p className="text-[0.85rem] text-[var(--color-ink-4)] max-w-xs leading-[1.6]">
            Conversations and content advancing the manufacturing and automation conversation.
          </p>
        </div>

        {/* Large feature card: Manufacturing Hub */}
        <div className="mb-6 p-8 lg:p-10 bg-[var(--color-navy)] rounded-sm shadow-card-hover">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold-mid)] animate-pulse" />
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-gold-mid)]">
                  Featured
                </span>
              </div>
              <h3 className="font-display text-[2rem] lg:text-[2.4rem] font-light text-white leading-tight tracking-[-0.01em] mb-3">
                Manufacturing Hub
              </h3>
              <p className="text-[0.92rem] text-white/70 leading-[1.7] mb-6 max-w-lg">
                Co-hosted podcast and media platform dedicated to manufacturing, automation, technology, and leadership. Conversations with practitioners, executives, and technology leaders across the industry.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.manufacturinghub.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.07em] uppercase bg-white text-[var(--color-navy)] hover:bg-[var(--color-gold-pale)] active:scale-[0.97] transition-all duration-200 rounded-sm"
                >
                  Visit Site
                </a>
                <a
                  href="https://www.youtube.com/@manufacturinghubpodcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.07em] uppercase border border-white/30 text-white hover:border-white/60 active:scale-[0.97] transition-all duration-200 rounded-sm"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
            {/* Visual accent */}
            <div className="hidden lg:block">
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Channel cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {channels.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 bg-[var(--color-parchment)] border border-[var(--color-border)] hover:border-[var(--color-navy)] hover:shadow-card-hover active:scale-[0.99] transition-all duration-200 rounded-sm"
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 text-[var(--color-navy)] group-hover:bg-[var(--color-navy)] group-hover:text-white transition-all duration-200"
                style={{ background: "var(--color-surface)" }}
              >
                {c.icon}
              </div>
              <h4 className="font-display text-[1.1rem] font-medium text-[var(--color-ink)] leading-tight mb-2">
                {c.label}
              </h4>
              <p className="text-[0.83rem] text-[var(--color-ink-3)] leading-[1.65] flex-1 mb-4">
                {c.description}
              </p>
              <span className="text-[0.75rem] font-medium text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors duration-200 truncate">
                {c.linkLabel} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
