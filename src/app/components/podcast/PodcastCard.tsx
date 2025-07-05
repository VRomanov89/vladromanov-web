import Image from 'next/image';
import { PodcastEpisode, formatDuration, formatDate } from '../../lib/rss';
import styles from './PodcastCard.module.css';

interface PodcastCardProps {
  episode: PodcastEpisode;
}

export default function PodcastCard({ episode }: PodcastCardProps) {
  return (
    <div className={styles.podcastCard}>
      <div className={styles.coverArt}>
        {episode.coverArt ? (
          <Image
            src={episode.coverArt}
            alt={`Cover art for ${episode.title}`}
            width={300}
            height={300}
            className={styles.coverImage}
          />
        ) : (
          <div className={styles.placeholderCover}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/>
            </svg>
          </div>
        )}
        <div className={styles.playOverlay}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.episodeNumber}>Episode {episode.episodeNumber}</span>
          <span className={styles.duration}>{formatDuration(episode.duration)}</span>
        </div>
        
        <h3 className={styles.title}>{episode.title}</h3>
        
        {episode.guest && (
          <p className={styles.guest}>with {episode.guest}</p>
        )}
        
        <p className={styles.description}>
          {episode.description.length > 150 
            ? `${episode.description.substring(0, 150)}...` 
            : episode.description
          }
        </p>
        
        <div className={styles.date}>{formatDate(episode.publishedAt)}</div>
        
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
      
      {episode.embedHtml && (
        <div 
          className={styles.embedPlayer}
          dangerouslySetInnerHTML={{ __html: episode.embedHtml }}
        />
      )}
    </div>
  );
} 