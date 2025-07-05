import styles from "../Speaking.module.css";

const featuredVideos = [
  {
    id: "x1IsXGHg2p4", // SPS 2023 Panel
    title: "Panel Discussion – SPS 2023: Bridging the IT/OT Divide in Modern Manufacturing",
    context: "At SPS 2023, I joined Reiner Brehm (CEO, Siemens Industrial Networks), Efrossini Tsouchnika (SVP, Siemens Digital Industries), and Gerhard Kreß (Director, SAP) for a strategic panel discussion on how manufacturers can align IT and OT to drive transformation. We tackled cultural divides, architectural decisions, and the realities of change inside complex industrial organizations.",
    quote: "\"We're not short on technology. We're short on clarity, ownership, and the ability to drive real change inside the plant.\""
  },
  {
    id: "5Y7JDNB2Igs", // Sepasoft 2024 Presentation & Interview
    title: "Presentation & Interview – Sepasoft: Building Future-Ready Manufacturing Systems",
    context: "In this on-stage presentation and interview hosted by Sepasoft, I shared practical insights from years of consulting across Fortune 500 manufacturing environments. We discussed how to design resilient architectures, drive data adoption on the plant floor, and navigate the real-world gaps between SCADA, MES, and ERP systems. The conversation covered cultural friction, technical debt, and what makes a successful digital transformation effort stick.",
    quote: "\"You can't implement MES from a boardroom. You need to understand what's really happening on the plant floor.\""
  }
];

export default function FeaturedAppearances() {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Notable Speaking Highlights</h2>
        <div
          className={
            featuredVideos.length === 1
              ? styles.singleHighlightWrapper
              : styles.videosGrid
          }
        >
          {featuredVideos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
              <div className={styles.responsiveVideoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              </div>
              <div className={styles.videoContent}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoContext}>{video.context}</p>
                <blockquote className={styles.videoQuote}>{video.quote}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 