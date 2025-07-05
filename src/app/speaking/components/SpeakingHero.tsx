import Link from "next/link";
import styles from "../Speaking.module.css";

export default function SpeakingHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Conversations That Move Manufacturing Forward
        </h1>
        <p className={styles.heroSubtitle}>
          From the plant floor to the boardroom, I speak on automation, digital transformation, leadership, and the future of industrial operations.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/contact" className={styles.primaryCta}>
            Invite Me to Speak
          </Link>
          <Link href="/media-kit.pdf" className={styles.secondaryCta} download>
            Download Media Kit
          </Link>
        </div>
      </div>
    </section>
  );
} 