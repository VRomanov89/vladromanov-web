"use client";
import styles from "../../about/About.module.css";
import { timelineItems, TimelineItemProps } from "../../cv/TimelineData";
import Image from "next/image";
import { useState } from "react";

export default function AboutTimeline() {
  // Sort timelineItems: most recent on top, tie-breaker for 'Present' by earlier start year
  const sortedItems = [...timelineItems].sort((a, b) => {
    // Helper to extract years
    const parseYears = (dateStr: string) => {
      const match = dateStr.match(/(\d{4})\s*[–-]\s*(Present|\d{4})/);
      if (!match) return { start: 0, end: 0 };
      return {
        start: parseInt(match[1], 10),
        end: match[2] === 'Present' ? Infinity : parseInt(match[2], 10)
      };
    };
    const aYears = parseYears(a.date);
    const bYears = parseYears(b.date);
    // Most recent end year first
    if (aYears.end !== bYears.end) return bYears.end - aYears.end;
    // If both are 'Present', earlier start year first
    if (aYears.end === Infinity && bYears.end === Infinity) return aYears.start - bYears.start;
    // Otherwise, most recent start year first
    return bYears.start - aYears.start;
  });
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.timelineHeading}>Career Timeline</h2>
      <div className={styles.timelineGrid}>
        {sortedItems.map((item: TimelineItemProps, idx: number) => (
          <TimelineCard key={item.company + idx} {...item} />
        ))}
      </div>
    </section>
  );
}

function TimelineCard({ title, company, date, summary, details, logo }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExpanded(!expanded);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className={styles.timelineCard}>
      <div className={styles.timelineCardHeader} onClick={handleToggle}>
        {logo && (
          <Image 
            src={logo} 
            alt={`${company} logo`} 
            width={48} 
            height={48} 
            className={styles.timelineLogo} 
            style={{ objectFit: 'contain', width: 48, height: 48 }} 
          />
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
      <button 
        className={styles.timelineExpandBtn} 
        onClick={handleToggle}
        disabled={isAnimating}
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
} 