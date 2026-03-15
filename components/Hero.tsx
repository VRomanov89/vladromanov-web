import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "var(--color-parchment)" }}
    >
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-[55%] h-full"
          style={{
            background:
              "radial-gradient(ellipse 80% 90% at 85% 40%, rgba(27,51,82,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[50%]"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 20% 90%, rgba(160,107,37,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-16 lg:gap-20 items-center py-20 lg:py-28">

          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <p className="section-label mb-6">
              Montreal, Canada
            </p>

            {/* Name */}
            <h1
              className="font-display text-[3.4rem] sm:text-[4.5rem] lg:text-[5.2rem] xl:text-[6rem] font-light leading-[0.95] tracking-[-0.02em] text-[var(--color-ink)] mb-6"
            >
              Vladimir
              <br />
              <em className="not-italic font-medium text-[var(--color-navy)]">
                Romanov
              </em>
            </h1>

            {/* Rule */}
            <div className="w-12 h-[2px] bg-[var(--color-gold)] mb-6" />

            {/* Headline */}
            <p className="font-display text-[1.45rem] sm:text-[1.65rem] font-light italic text-[var(--color-ink-2)] leading-[1.35] mb-5 max-w-xl">
              Manufacturing Modernization, Industrial Automation, and Digital Operations
            </p>

            {/* Supporting */}
            <p
              className="text-[0.95rem] text-[var(--color-ink-3)] leading-[1.75] max-w-lg mb-10"
            >
              Electrical engineer, MBA, founder, educator, and podcast host helping manufacturers improve systems, teams, and execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-[0.82rem] font-semibold tracking-[0.07em] uppercase text-[var(--color-surface)] bg-[var(--color-navy)] hover:bg-[var(--color-navy-dark)] active:scale-[0.97] transition-all duration-200 rounded-sm shadow-card"
              >
                Work With Me
              </a>
              <a
                href="#ventures"
                className="inline-flex items-center px-6 py-3 text-[0.82rem] font-semibold tracking-[0.07em] uppercase text-[var(--color-navy)] border border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-[var(--color-surface)] active:scale-[0.97] transition-all duration-200 rounded-sm"
              >
                My Projects
              </a>
              <a
                href="https://www.manufacturinghub.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-[0.82rem] font-medium tracking-[0.04em] text-[var(--color-gold)] hover:text-[var(--color-ink-2)] transition-colors duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
                Listen to the Podcast
              </a>
            </div>

            {/* Credential strip */}
            <div className="flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-[var(--color-border)]">
              {["Electrical Engineer", "MBA", "Founder", "Podcast Host"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--color-ink-4)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-[360px] mx-auto lg:mx-0 lg:ml-auto">
              {/* Decorative frame offset */}
              <div
                className="absolute -top-4 -right-4 w-full h-full border border-[var(--color-gold)] opacity-30 rounded-sm"
                aria-hidden="true"
              />
              {/* Photo container */}
              <div className="relative rounded-sm overflow-hidden shadow-card-hover">
                <Image
                  src="/vlad.avif"
                  alt="Vladimir Romanov — Manufacturing Modernization Consultant and Educator"
                  width={460}
                  height={580}
                  className="w-full object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 80vw, 460px"
                />
                {/* Color treatment overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(27,51,82,0.35) 0%, rgba(27,51,82,0.05) 45%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-ink-4)]">Scroll</span>
        <div className="w-[1px] h-8 bg-[var(--color-ink-4)]" />
      </div>
    </section>
  );
}
