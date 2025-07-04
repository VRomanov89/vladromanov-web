import styles from "../page.module.css";
import Link from "next/link";

export default function PodcastNewsletterSection() {
  return (
    <section className={styles.podcastNewsletterSection}>
      <h2 className={styles.sectionTitle}>Podcast & Newsletter</h2>
      <div className={styles.podcastNewsletterGrid}>
        <div className={styles.podcastBlock}>
          <h3 className={styles.podcastTitle}>Manufacturing Hub Podcast</h3>
          <div className={styles.podcastEmbed}>
            {/* Replace with actual embed as needed */}
            <iframe
              width="100%"
              height="120"
              src="https://open.spotify.com/embed/episode/2Q0QwQwQwQwQwQwQwQwQwQ"
              title="Manufacturing Hub Podcast Episode"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <Link href="https://www.manufacturinghub.live/" target="_blank" className={styles.listenCta}>
            Listen Now
          </Link>
        </div>
        <div className={styles.newsletterBlock}>
          <h3 className={styles.newsletterTitle}>FRAME Dispatch</h3>
          <p className={styles.newsletterDesc}>
            Monthly insights on digital transformation, leadership, and manufacturing innovation—straight to your inbox.
          </p>
          <Link href="/newsletter" className={styles.subscribeCta}>
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  );
} 