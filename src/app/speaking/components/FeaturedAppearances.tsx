import styles from "../Speaking.module.css";

const featuredVideos = [
  {
    id: "x1IsXGHg2p4", // SPS 2023 Panel
    title: "Panel Discussion – SPS 2023: Bridging the IT/OT Divide in Modern Manufacturing",
    context: "At SPS 2023, I joined Reiner Brehm (CEO, Siemens Industrial Networks), Efrossini Tsouchnika (SVP, Siemens Digital Industries), and Gerhard Kreß (Director, SAP) for a strategic panel discussion on how manufacturers can align IT and OT to drive transformation. We tackled cultural divides, architectural decisions, and the realities of change inside complex industrial organizations.",
    quote: "\"We're not short on technology. We're short on clarity, ownership, and the ability to drive real change inside the plant.\""
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder - replace with real video ID
    title: "Panel Discussion – Digital Transformation in Manufacturing",
    context: "Exploring real-world strategies for successful digital adoption, from culture change to technology implementation.",
    quote: "\"Digital transformation starts with people, not just platforms.\""
  }
];

export default function FeaturedAppearances() {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Notable Speaking Highlights</h2>
        <div className={styles.videosGrid}>
          {featuredVideos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
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