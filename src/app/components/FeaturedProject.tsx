import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className={styles.featuredProjectSection}>
      <div className={styles.featuredProjectBg}>
        <Image
          src="/images/featured-project.jpg"
          alt="Post Holdings SCADA rollout"
          fill
          className={styles.featuredProjectImage}
          style={{ objectFit: 'cover', opacity: 0.18 }}
        />
      </div>
      <div className={styles.featuredProjectContent}>
        <h2 className={styles.featuredProjectTitle}>Post Holdings: SCADA Rollout</h2>
        <p className={styles.featuredProjectSummary}>
          Led a multi-site SCADA deployment for Post Holdings, integrating real-time data, improving visibility, and driving measurable efficiency gains across operations.
        </p>
        <Link href="/engagements/post-holdings-scada" className={styles.featuredProjectCta}>
          Read Full Case Study
        </Link>
      </div>
    </section>
  );
} 