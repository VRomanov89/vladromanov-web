"use client";
import styles from "../../about/About.module.css";
import { timelineItems, TimelineItemProps } from "../../cv/TimelineData";
import Image from "next/image";
import { useState } from "react";

export default function AboutTimeline() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.timelineHeading}>Career Timeline</h2>
      <div className={styles.timelineGrid}>
        {timelineItems.map((item: TimelineItemProps, idx: number) => (
          <TimelineCard key={item.company + idx} {...item} />
        ))}
      </div>
    </section>
  );
}

function TimelineCard({ title, company, date, summary, details, logo }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.timelineCard}>
      <div className={styles.timelineCardHeader} onClick={() => setExpanded((e) => !e)}>
        {logo && (
          <Image src={logo} alt={`${company} logo`} width={48} height={48} className={styles.timelineLogo} style={{ objectFit: 'contain', width: 48, height: 48 }} />
        )}
        <div className={styles.timelineCardMeta}>
          <div className={styles.timelineCardTitle}>{title}</div>
          <div className={styles.timelineCardCompany}>{company}</div>
          <div className={styles.timelineCardDate}>{date}</div>
        </div>
      </div>
      <div className={styles.timelineCardSummary}>{summary}</div>
      {expanded && (
        <div className={styles.timelineCardDetails}>
          <pre className={styles.timelineCardPre}>{details}</pre>
        </div>
      )}
      <button className={styles.timelineExpandBtn} onClick={() => setExpanded((e) => !e)}>
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
} 