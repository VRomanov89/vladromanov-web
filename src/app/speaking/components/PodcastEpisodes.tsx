import styles from "../Speaking.module.css";

const podcastEpisodes = [
  {
    id: "episode-1",
    title: "The Future of SCADA Systems",
    guest: "with Industry Expert Sarah Chen",
    description: "Exploring how modern SCADA systems are evolving beyond traditional monitoring to become intelligent decision-making platforms.",
    thumbnail: "/podcast-thumbnails/episode-1.jpg",
    duration: "45 min"
  },
  {
    id: "episode-2", 
    title: "Building Resilient Manufacturing Operations",
    guest: "with Operations Director Mike Rodriguez",
    description: "Real-world strategies for creating manufacturing operations that can adapt and thrive in an uncertain world.",
    thumbnail: "/podcast-thumbnails/episode-2.jpg",
    duration: "52 min"
  },
  {
    id: "episode-3",
    title: "AI in Industrial Automation",
    guest: "with AI Specialist Dr. Emily Watson",
    description: "How artificial intelligence is transforming factory operations and what leaders need to know about implementation.",
    thumbnail: "/podcast-thumbnails/episode-3.jpg",
    duration: "48 min"
  }
];

export default function PodcastEpisodes() {
  return (
    <section className={styles.podcastSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Latest Podcast Episodes</h2>
        <div className={styles.podcastGrid}>
          {podcastEpisodes.map((episode, index) => (
            <div key={episode.id} className={styles.podcastCard}>
              <div className={styles.podcastThumbnail}>
                <div className={styles.playButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className={styles.podcastContent}>
                <h3 className={styles.podcastTitle}>{episode.title}</h3>
                <p className={styles.podcastGuest}>{episode.guest}</p>
                <p className={styles.podcastDescription}>{episode.description}</p>
                <span className={styles.podcastDuration}>{episode.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.podcastCta}>
          <a href="/podcast" className={styles.seeAllButton}>
            See All Episodes
          </a>
        </div>
      </div>
    </section>
  );
} 