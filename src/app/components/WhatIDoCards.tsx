import styles from "../page.module.css";
import ConsultingIcon from "./icons/ConsultingIcon";
import SpeakingIcon from "./icons/SpeakingIcon";
import LeadershipIcon from "./icons/LeadershipIcon";
import TrainingIcon from "./icons/TrainingIcon";

const cards = [
  {
    icon: <ConsultingIcon className={styles.cardIcon} />,
    title: "Strategic Consulting",
    desc: "Modernizing operations, digital transformation, and manufacturing strategy."
  },
  {
    icon: <SpeakingIcon className={styles.cardIcon} />,
    title: "Speaking & Media",
    desc: "Keynotes, panels, and media appearances on industry leadership."
  },
  {
    icon: <LeadershipIcon className={styles.cardIcon} />,
    title: "Fractional Leadership",
    desc: "Executive-level guidance for scaling teams and initiatives."
  },
  {
    icon: <TrainingIcon className={styles.cardIcon} />,
    title: "Technical Training & Content",
    desc: "Workshops, courses, and resources for upskilling industrial teams."
  }
];

export default function WhatIDoCards() {
  return (
    <section className={styles.whatIDoSection}>
      <div className={styles.whatIDoGrid}>
        {cards.map(card => (
          <div className={styles.whatIDoCard} key={card.title}>
            {card.icon}
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 