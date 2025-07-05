"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/engagements", label: "Engagements" },
  { href: "/speaking", label: "Speaking", submenu: [
    { href: "/podcast", label: "Podcast" }
  ] },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only add .scrolled after client mount and scroll
  let headerClass = styles.header;
  if (isClient && scrolled) headerClass += ` ${styles.scrolled}`;

  return (
    <header className={headerClass}>
      <div className={styles.logo}><Link href="/">Vladimir Romanov</Link></div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={link.submenu ? styles.hasSubmenu : undefined}
              onMouseEnter={() => link.submenu && setSubmenuOpen(link.label)}
              onMouseLeave={() => link.submenu && setSubmenuOpen(null)}
            >
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.submenu && submenuOpen === link.label && (
                <ul className={styles.submenu}>
                  {link.submenu.map((sublink) => (
                    <li key={sublink.href}>
                      <Link
                        href={sublink.href}
                        className={
                          pathname === sublink.href
                            ? `${styles.navLink} ${styles.active}`
                            : styles.navLink
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <ul className={styles.submenuMobile}>
                    {link.submenu.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          className={
                            pathname === sublink.href
                              ? `${styles.navLink} ${styles.active}`
                              : styles.navLink
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
