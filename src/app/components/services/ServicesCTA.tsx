import styles from "../../services/Services.module.css";

export default function ServicesCTA() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Have a challenge you need help solving?</h2>
      <p className={styles.ctaDescription}>
        Let's discuss how I can help you modernize operations, deploy systems, and build lasting capability in your organization.
      </p>
      <a href="/contact" className={styles.ctaButton}>
        Get In Touch
      </a>
    </section>
  );
} 