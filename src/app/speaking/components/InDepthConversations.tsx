import Image from "next/image";
import Link from "next/link";
import { getLatestYouTubeVideos, formatDuration, formatViewCount, formatDate } from "../../lib/youtube";
import styles from "../../components/speaking/LiveEpisodes.module.css";

export default async function InDepthConversations() {
  console.log('InDepthConversations component starting...');
  const videos = await getLatestYouTubeVideos();
  console.log('Videos received in component:', videos.length, videos);

  return (
    <section className={styles.liveEpisodesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>In-Depth Conversations</h2>
        
        {videos.length > 0 ? (
          <>
            <div className={styles.videosGrid}>
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            <div className={styles.ctaSection}>
              <Link href="https://www.youtube.com/@ManufacturingHub" className={styles.seeAllButton} target="_blank" rel="noopener noreferrer">
                View All Episodes
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.noVideos}>
            <p>No videos found. Debug: {JSON.stringify(videos)}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: any }) {
  const truncatedDescription = video.description.length > 120 
    ? video.description.substring(0, 120) + '...' 
    : video.description;

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoThumbnail}>
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={320}
          height={180}
          className={styles.thumbnail}
        />
        <div className={styles.playButton}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        {video.duration && (
          <div className={styles.duration}>
            {formatDuration(video.duration)}
          </div>
        )}
      </div>
      
      <div className={styles.videoContent}>
        <h3 className={styles.videoTitle}>
          <Link href={video.url} target="_blank" rel="noopener noreferrer">
            {video.title}
          </Link>
        </h3>
        
        <div className={styles.videoMeta}>
          <span className={styles.publishedDate}>{formatDate(video.publishedAt)}</span>
          {video.viewCount && (
            <span className={styles.viewCount}>{formatViewCount(video.viewCount)}</span>
          )}
        </div>
        
        {truncatedDescription && (
          <p className={styles.videoDescription}>{truncatedDescription}</p>
        )}
      </div>
    </div>
  );
} 