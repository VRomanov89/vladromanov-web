import styles from "../page.module.css";
import Link from "next/link";

export default function FeaturedEngagement() {
  return (
    <section className={styles.featuredEngagement}>
      <h2 className={styles.sectionTitle}>Featured Engagement</h2>
      <div className={styles.featuredContent}>
        <div className={styles.featuredText}>
          <h3 className={styles.featuredTitle}>Post Holdings: SCADA Rollout</h3>
          <p className={styles.featuredSummary}>
            Led a multi-site SCADA deployment for Post Holdings, integrating real-time data, improving visibility, and driving measurable efficiency gains across operations.
          </p>
          <Link href="/engagements/post-holdings-scada" className={styles.featuredCta}>
            Read Full Case Study
          </Link>
        </div>
      </div>
    </section>
  );
} 