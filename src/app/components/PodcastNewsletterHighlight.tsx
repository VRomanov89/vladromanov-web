import styles from "../page.module.css";

export default function PodcastNewsletterHighlight() {
  return (
    <section className={styles.podcastNewsletterSection}>
      <div className={styles.podcastNewsletterGrid}>
        <div className={styles.podcastBlock}>
          <h3 className={styles.podcastTitle}>Manufacturing Hub Podcast</h3>
          <div className={styles.podcastEmbed}>
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
        </div>
        <div className={styles.newsletterBlock}>
          <h3 className={styles.newsletterTitle}>FRAME Dispatch</h3>
          <p className={styles.newsletterDesc}>
            Join FRAME – Weekly insights on industrial excellence
          </p>
          <a
            href="https://www.framexl.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subscribeCta}
          >
            Learn More & Subscribe
          </a>
        </div>
      </div>
    </section>
  );
} 