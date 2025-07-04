import styles from "../page.module.css";

export default function CredibilityBar() {
  return (
    <section className={styles.credibilityBar} aria-label="Trusted by">
      <span className={styles.credLogo}>Kraft Heinz</span>
      <span className={styles.credLogo}>Post Holdings</span>
      <span className={styles.credLogo}>P&amp;G</span>
      <span className={styles.credLogo}>Manufacturing Hub</span>
      <span className={styles.credLogo}>ProveIt</span>
      <span className={styles.credLogo}>Automate</span>
    </section>
  );
} 