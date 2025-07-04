import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg} />
      <div className={styles.heroContent}>
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/vlad-hero.jpg"
            alt="Vlad Romanov profile"
            width={320}
            height={320}
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroHeadline}>
            Helping manufacturing teams modernize operations and align strategy
          </h1>
          <p className={styles.heroSubheadline}>
            Over a decade of results across the factory floor and boardroom
          </p>
          <div className={styles.heroCtas}>
            <Link href="/services" className={styles.primaryCta}>
              Work With Me
            </Link>
            <Link href="/engagements" className={styles.secondaryCta}>
              Explore Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 