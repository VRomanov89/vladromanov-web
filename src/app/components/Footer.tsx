import styles from "../../styles/Footer.module.css";
import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Engagements", href: "/engagements" },
  { label: "Speaking", href: "/speaking" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const connectLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vladromanov/", external: true },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC6JpBeS_6JhUwfGF8RgLCIQ", external: true },
  { label: "FRAME Dispatch", href: "https://www.framexl.com/", external: true },
  { label: "SolisPLC", href: "https://www.solisplc.com/", external: true },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Explore</h4>
          <nav aria-label="Footer navigation">
            <ul className={styles.footerList}>
              {exploreLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Connect</h4>
          <nav aria-label="Footer social and resources">
            <ul className={styles.footerList}>
              {connectLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.copyright}>
        © 2025 Vlad Romanov. All rights reserved.
      </div>
    </footer>
  );
} 