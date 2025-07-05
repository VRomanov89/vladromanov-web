import styles from "../Speaking.module.css";

const featuredVideos = [
  {
    id: "dQw4w9WgXcQ", // Placeholder - replace with real video ID
    title: "Keynote – Automate 2025: The Future of IT/OT Integration",
    context: "A comprehensive look at how IT and OT convergence is reshaping manufacturing operations and what leaders need to know to stay ahead.",
    quote: "\"The integration of IT and OT isn't just about technology—it's about creating a unified vision for operational excellence.\""
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