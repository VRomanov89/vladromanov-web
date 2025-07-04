"use client";
import styles from "../page.module.css";
import { useEffect, useRef } from "react";
import ExperienceIcon from "./icons/ExperienceIcon";
import BoardroomIcon from "./icons/BoardroomIcon";
import TrustedIcon from "./icons/TrustedIcon";
import TechIcon from "./icons/TechIcon";

const values = [
  {
    icon: <ExperienceIcon className={styles.valueIcon} />,
    title: "10+ years of results",
    desc: "In operations, automation, and strategy."
  },
  {
    icon: <BoardroomIcon className={styles.valueIcon} />,
    title: "Fluent in PLCs & boardrooms",
    desc: "Bridging the gap between tech and business."
  },
  {
    icon: <TrustedIcon className={styles.valueIcon} />,
    title: "Trusted by industry leaders",
    desc: "Fortune 500s and high-growth manufacturers."
  },
  {
    icon: <TechIcon className={styles.valueIcon} />,
    title: "SCADA, MES, IT/OT, digital",
    desc: "Expertise in architecture and transformation."
  }
];

export default function WhyWorkWithVlad() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleScroll = () => {
      const top = node.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        node.classList.add(styles.visible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.whyWorkWithVladSection}>
      <div className={styles.whyWorkWithVladGrid} ref={ref}>
        {values.map(v => (
          <div className={styles.valueCard} key={v.title}>
            {v.icon}
            <h3 className={styles.valueTitle}>{v.title}</h3>
            <p className={styles.valueDesc}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 