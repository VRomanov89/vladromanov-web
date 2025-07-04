import styles from "../../about/About.module.css";

export default function AboutResumeCTA() {
  return (
    <div className={styles.resumeCtaWrap}>
      <a href="/resume.pdf" className={styles.resumeCtaBtn} download>
        Download Resume (PDF)
      </a>
    </div>
  );
} 