import styles from "../../about/About.module.css";
import Link from "next/link";

export default function AboutContactCTA() {
  return (
    <section className={styles.contactCtaSection}>
      <h2 className={styles.contactCtaText}>Let's connect and build something exceptional</h2>
      <Link href="/contact" className={styles.contactCtaBtn}>
        Book a Call
      </Link>
    </section>
  );
} 