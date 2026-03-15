export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t border-[var(--color-border)]"
      style={{ background: "var(--color-navy-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Left: Wordmark */}
          <div>
            <p className="font-display text-[1.05rem] font-medium text-white/90 tracking-[-0.01em]">
              Vladimir Romanov
            </p>
            <p className="text-[0.72rem] text-white/40 tracking-[0.06em] mt-0.5">
              Manufacturing Modernization &amp; Industrial Automation
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Joltek", url: "https://www.joltek.com" },
              { label: "SolisPLC", url: "https://www.solisplc.com" },
              { label: "Manufacturing Hub", url: "https://www.manufacturinghub.live" },
              { label: "LinkedIn", url: "https://ca.linkedin.com/in/vladromanov" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.75rem] text-white/50 hover:text-white/90 transition-colors duration-200 tracking-[0.04em]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
          <p className="text-[0.72rem] text-white/30 tracking-[0.04em]">
            &copy; {year} Vladimir Romanov
          </p>
        </div>
      </div>
    </footer>
  );
}
