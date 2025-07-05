import styles from "../about/About.module.css";
import ConsultingIcon from "./icons/ConsultingIcon";
import SpeakingIcon from "./icons/SpeakingIcon";
import LeadershipIcon from "./icons/LeadershipIcon";
import TrainingIcon from "./icons/TrainingIcon";

const cards = [
  {
    icon: <ConsultingIcon className={styles.highlightIcon} />,
    title: "Strategic Consulting",
    subtitle: "Modernizing operations, digital transformation, and manufacturing strategy."
  },
  {
    icon: <SpeakingIcon className={styles.highlightIcon} />,
    title: "Speaking & Media",
    subtitle: "Keynotes, panels, and media appearances on industry leadership."
  },
  {
    icon: <LeadershipIcon className={styles.highlightIcon} />,
    title: "Fractional Leadership",
    subtitle: "Executive-level guidance for scaling teams and initiatives."
  },
  {
    icon: <TrainingIcon className={styles.highlightIcon} />,
    title: "Technical Training & Content",
    subtitle: "Workshops, courses, and resources for upskilling industrial teams."
  }
];

export default function WhatIDoCards() {
  return (
    <section className={styles.highlightsSection}>
      <div className={styles.highlightsGrid}>
        {cards.map((card, index) => (
          <div
            className={styles.highlightCard}
            key={card.title}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {card.icon}
            <div className={styles.highlightTitle}>{card.title}</div>
            <div className={styles.highlightSubtitle}>{card.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 