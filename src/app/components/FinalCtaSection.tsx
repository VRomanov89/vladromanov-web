import styles from "../page.module.css";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className={styles.finalCtaSection}>
      <h2 className={styles.finalCtaText}>Ready to transform your operations?</h2>
      <Link href="/contact" className={styles.finalCtaBtn}>
        Get In Touch
      </Link>
    </section>
  );
} 