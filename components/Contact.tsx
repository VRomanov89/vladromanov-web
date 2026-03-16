const reasons = [
  "Consulting inquiries",
  "Speaking opportunities",
  "Podcast appearances",
  "Training partnerships",
  "General professional contact",
];

const links = [
  {
    label: "LinkedIn",
    sublabel: "Connect professionally",
    url: "https://ca.linkedin.com/in/vladromanov",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Joltek",
    sublabel: "Manufacturing consulting",
    url: "https://www.joltek.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: "SolisPLC",
    sublabel: "Automation training platform",
    url: "https://www.solisplc.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Manufacturing Hub",
    sublabel: "Podcast and media",
    url: "https://www.manufacturinghub.live",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-parchment)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">07</span>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-display text-[2.8rem] lg:text-[3.6rem] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] mb-6"
            >
              Let&apos;s{" "}
              <em className="font-medium italic text-[var(--color-navy)]">
                Connect
              </em>
            </h2>
            <p className="text-[0.95rem] text-[var(--color-ink-3)] leading-[1.75] mb-8 max-w-md">
              Whether you&apos;re looking for consulting support, a training partnership, a speaking engagement, or a conversation about manufacturing and automation, the right path starts here.
            </p>

            {/* Reasons */}
            <div className="space-y-0 mb-10">
              <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-ink-4)] mb-4">
                Reasons to reach out
              </p>
              {reasons.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-3 py-3 border-b border-[var(--color-border-light)]"
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
                  <span className="text-[0.9rem] text-[var(--color-ink-2)]">{r}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href="https://ca.linkedin.com/in/vladromanov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 text-[0.82rem] font-semibold tracking-[0.07em] uppercase text-[var(--color-surface)] bg-[var(--color-navy)] hover:bg-[var(--color-navy-dark)] active:scale-[0.97] transition-all duration-200 rounded-sm shadow-card"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Right: Link cards */}
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-ink-4)] mb-6">
              Platforms and profiles
            </p>
            <div className="space-y-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-navy)] hover:shadow-card-hover active:scale-[0.99] transition-all duration-200 rounded-sm"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 text-[var(--color-navy)] group-hover:bg-[var(--color-navy)] group-hover:text-white transition-all duration-200"
                    style={{ background: "var(--color-parchment-deep)" }}
                  >
                    {l.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.9rem] font-medium text-[var(--color-ink)]">
                      {l.label}
                    </p>
                    <p className="text-[0.78rem] text-[var(--color-ink-4)]">
                      {l.sublabel}
                    </p>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-[var(--color-ink-4)] group-hover:text-[var(--color-navy)] flex-shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    aria-hidden="true"
                  >
                    <path d="M1 13L13 1M13 1H5M13 1v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
