import Link from "next/link";
import { getLatestPodcastEpisodes } from "../../../lib/podcast";
import PodcastCard from "../../../components/podcast/PodcastCard";
import styles from "../Speaking.module.css";

export default async function PodcastEpisodes() {
  const episodes = await getLatestPodcastEpisodes();

  return (
    <section className={styles.podcastSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Latest Podcast Episodes</h2>
        
        {episodes.length > 0 ? (
          <>
            <div className={styles.podcastGrid}>
              {episodes.map((episode) => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>
            <div className={styles.podcastCta}>
              <Link href="/podcast" className={styles.seeAllButton}>
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