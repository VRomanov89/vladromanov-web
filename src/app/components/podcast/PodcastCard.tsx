import Image from 'next/image';
import { PodcastEpisode, formatDuration, formatDate } from '../../lib/rss';
import styles from './PodcastCard.module.css';

interface PodcastCardProps {
  episode: PodcastEpisode;
}

export default function PodcastCard({ episode }: PodcastCardProps) {
  return (
    <div className={styles.episodeCard}>
      <div className={styles.episodeContent}>
        <div className={styles.episodeMetaRow}>
          <span className={styles.episodeNumber}>Episode {episode.episodeNumber}</span>
          {episode.duration && (
            <span className={styles.duration}>{formatDuration(episode.duration)}</span>
          )}
        </div>
        <h3 className={styles.title}>{episode.title}</h3>
        <div className={styles.date}>{formatDate(episode.publishedAt)}</div>
        <p className={styles.description}>
          {episode.description.length > 280
            ? `${episode.description.substring(0, 280)}...`
            : episode.description}
        </p>
        <div className={styles.actions}>
          <a
            href={episode.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            View Full Episode
          </a>
        </div>
      </div>
      {episode.audioUrl && (
        <div className={styles.audioBar}>
          <audio controls preload="none" src={episode.audioUrl} style={{ width: '100%' }}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
} 