import { getRecentBeehiivPosts } from '../../lib/beehiiv';
import styles from './BeehiivPosts.module.css';
import Image from 'next/image';

export default async function BeehiivPosts() {
  let posts = [];
  try {
    posts = await getRecentBeehiivPosts(6);
  } catch (e) {
    // Optionally log error
    return null;
  }
  if (!posts.length) return null;

  return (
    <section>
      <h2>Latest from the Blog</h2>
      <div className={styles.beehiivGrid}>
        {posts.map(post => (
          <a
            key={post.id}
            href={post.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.cover_image_url ? (
              <img
                src={post.cover_image_url}
                alt={post.title}
                className={styles.cover}
                width={400}
                height={160}
                loading="lazy"
              />
            ) : null}
            <div className={styles.title}>{post.title}</div>
            <div className={styles.preview}>{post.preview_text}</div>
            <div className={styles.date}>{new Date(post.published_at).toLocaleDateString()}</div>
          </a>
        ))}
      </div>
    </section>
  );
} 