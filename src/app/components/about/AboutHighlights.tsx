import styles from "../../about/About.module.css";

const highlights = [
  { title: "Podcast Host", subtitle: "Over 200 Episodes" },
  { title: "Consultant", subtitle: "Fortune 500 Clients" },
  { title: "Speaker", subtitle: "Global Keynotes" },
  { title: "Engineer", subtitle: "10+ Years in Industry" },
];

export default function AboutHighlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className={styles.highlightsGrid}>
        {highlights.map((h) => (
          <div className={styles.highlightCard} key={h.title}>
            <div className={styles.highlightTitle}>{h.title}</div>
            <div className={styles.highlightSubtitle}>{h.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 