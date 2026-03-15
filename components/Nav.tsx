"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Media", href: "#media" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur border-b border-[var(--color-border)]" : ""
      }`}
      style={{ borderBottomColor: scrolled ? "var(--color-border)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link
          href="#"
          className="font-display text-[1.15rem] font-medium tracking-[-0.01em] text-[var(--color-ink)] hover:text-[var(--color-navy)] transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Vladimir Romanov
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.8rem] font-medium tracking-[0.06em] uppercase text-[var(--color-ink-3)] hover:text-[var(--color-navy)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-surface)] bg-[var(--color-navy)] hover:bg-[var(--color-navy-dark)] active:scale-[0.97] transition-all duration-200 rounded-sm"
          >
            Work With Me
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-5 bg-[var(--color-ink-2)] transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-[var(--color-ink-2)] transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-[var(--color-ink-2)] transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden nav-blur border-b border-[var(--color-border)] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-[var(--color-ink-3)] hover:text-[var(--color-navy)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 px-4 py-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-center text-[var(--color-surface)] bg-[var(--color-navy)] rounded-sm"
          >
            Work With Me
          </a>
        </nav>
      </div>
    </header>
  );
}
