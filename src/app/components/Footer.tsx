import styles from "./Footer.module.css";
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vladromanov/", icon: "linkedin", external: true },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC6JpBeS_6JhUwfGF8RgLCIQ", icon: "youtube", external: true },
  { label: "FRAME Dispatch", href: "https://www.framexl.com/", icon: "mail", external: true },
  { label: "SolisPLC", href: "https://www.solisplc.com/", icon: "bolt", external: true },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "linkedin") return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48c0 1.66 1.32 2.98 2.98 2.98 1.66 0 2.98-1.32 2.98-2.98C7.96 4.82 6.64 3.5 4.98 3.5zM2.4 21.5h5.16V9.5H2.4v12zm7.6 0h5.16v-6.16c0-1.47.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25V21.5H7.6V9.5h4.96v1.64h.07c.69-1.31 2.37-2.7 4.88-2.7 5.22 0 6.18 3.44 6.18 7.91V21.5h-5.16v-6.16c0-1.47.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25V21.5z" fill="currentColor"/></svg>
  );
  if (icon === "youtube") return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.35 0 12 0 12s0 3.65.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.65 24 12 24 12s0-3.65-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/></svg>
  );
  if (icon === "mail") return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" fill="currentColor"/></svg>
  );
  if (icon === "bolt") return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/></svg>
  );
  return null;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <a href="/" className={styles.footerBrand}>Vlad Romanov</a>
          <div className={styles.footerTagline}>Consultant, engineer, and advisor helping manufacturers modernize, scale, and lead in the digital era.</div>
        </div>
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