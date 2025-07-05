import { getLatestPodcastEpisodes } from "../lib/rss";
import PodcastCard from "../components/podcast/PodcastCard";
import styles from "./Podcast.module.css";

export default async function PodcastPage() {
  const episodes = await getLatestPodcastEpisodes(64);

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Manufacturing Hub Podcast</h1>
          <p className={styles.heroSubtitle}>
            Conversations with leaders across the manufacturing ecosystem. 
            Over 200 episodes covering automation, IT/OT, and operations.
          </p>
        </div>
      </section>

      <section className={styles.episodesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>All Episodes</h2>
          
          {episodes.length > 0 ? (
            <div className={styles.episodesGrid}>
              {episodes.map((episode) => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>
          ) : (
            <div className={styles.noEpisodes}>
              <p>Loading episodes...</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export const generateMetadata = () => ({
  title: "Manufacturing Hub Podcast – Vlad Romanov",
  description: "Over 200 episodes on automation, IT/OT, and manufacturing leadership. Listen to conversations with industry leaders and experts.",
  openGraph: {
    title: "Manufacturing Hub Podcast – Vlad Romanov",
    description: "Over 200 episodes on automation, IT/OT, and manufacturing leadership.",
    url: "https://www.vladromanov.com/podcast",
    images: [
      {
        url: "/og-podcast.jpg",
        width: 1200,
        height: 630,
        alt: "Manufacturing Hub Podcast"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Hub Podcast – Vlad Romanov",
    description: "Over 200 episodes on automation, IT/OT, and manufacturing leadership.",
    images: ["/og-podcast.jpg"]
  }
}); 