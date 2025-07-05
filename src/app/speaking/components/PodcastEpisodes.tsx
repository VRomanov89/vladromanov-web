import Link from "next/link";
import { getLatestPodcastEpisodes, formatDate, formatDuration } from "../../lib/rss";
import PodcastCard from "../../components/podcast/PodcastCard";
import styles from "../Speaking.module.css";

export default async function PodcastEpisodes() {
  console.log('PodcastEpisodes component starting...');
  const episodes = await getLatestPodcastEpisodes();
  console.log('Episodes received in component:', episodes.length, episodes);

  return (
    <section className={styles.podcastSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>🎧 Latest Episodes from Manufacturing Hub</h2>
        
        {episodes.length > 0 ? (
          <>
            <div className={styles.podcastGrid}>
              {episodes.map((episode) => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>
            <div className={styles.podcastCta}>
              <Link href="https://www.manufacturinghub.live" className={styles.seeAllButton} target="_blank" rel="noopener noreferrer">
                See All Episodes
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.noEpisodes}>
            <p>Loading latest episodes...</p>
          </div>
        )}
      </div>
    </section>
  );
} 