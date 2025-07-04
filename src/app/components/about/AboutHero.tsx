import styles from "../../about/About.module.css";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageWrap}>
        <Image
          src="/images/vlad-hero.jpg"
          alt="Vlad Romanov profile"
          width={180}
          height={180}
          className={styles.heroImage}
          priority
        />
      </div>
      <div className={styles.heroTextBlock}>
        <h1 className={styles.heroName}>Vlad Romanov</h1>
        <h2 className={styles.heroHeadline}>Modernizing Manufacturing & Operations</h2>
        <p className={styles.heroSummary}>
          10+ years of hands-on results in automation, digital transformation, and leadership. Trusted by Fortune 500s and high-growth innovators.
        </p>
      </div>
    </section>
  );
} 