import styles from "../page.module.css";

const cards = [
  {
    icon: "💼",
    title: "Consulting",
    desc: "Strategy, digital transformation, and hands-on improvement for manufacturers."
  },
  {
    icon: "🎤",
    title: "Speaking",
    desc: "Keynotes, panels, and workshops on modern manufacturing and leadership."
  },
  {
    icon: "🧑‍💼",
    title: "Fractional Roles",
    desc: "Executive-level leadership for ops, engineering, and digital initiatives."
  },
  {
    icon: "📚",
    title: "Content & Education",
    desc: "Podcasts, articles, and resources to upskill your team and community."
  }
];

export default function WhatIDoSection() {
  return (
    <section className={styles.whatIDoSection}>
      <h2 className={styles.sectionTitle}>What I Do</h2>
      <div className={styles.whatIDoGrid}>
        {cards.map(card => (
          <div className={styles.whatIDoCard} key={card.title}>
            <span className={styles.cardIcon} aria-hidden>{card.icon}</span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 