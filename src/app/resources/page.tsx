import styles from './Resources.module.css';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import BeehiivPosts from './BeehiivPosts';

// Sample blog posts data (replace with dynamic import from /data/posts in future)
const posts = [
  {
    slug: 'future-of-automation',
    title: 'The Future of Automation',
    excerpt: 'How AI and robotics are reshaping manufacturing. Key trends, challenges, and opportunities for leaders.',
    date: '2024-05-01',
    tags: ['AI', 'Robotics', 'Manufacturing'],
    thumbnail: '/globe.svg',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation in Industry',
    excerpt: 'A practical guide to digital adoption for engineers and operators. Lessons learned from the field.',
    date: '2024-04-15',
    tags: ['Digital', 'Strategy'],
    thumbnail: '/vercel.svg',
  },
  {
    slug: 'leadership-automation',
    title: 'Leadership in the Age of Automation',
    excerpt: 'How to lead teams through change and inspire innovation in a rapidly evolving landscape.',
    date: '2024-03-28',
    tags: ['Leadership', 'Change'],
    thumbnail: '/next.svg',
  },
];

// Sample podcast episodes data
const podcasts = [
  {
    title: 'Manufacturing Hub Podcast: AI in Operations',
    summary: 'Discussing the real-world impact of AI on manufacturing with industry leaders.',
    embed: 'https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5',
    link: '#',
  },
  {
    title: 'ProveIt Panel: Digital Transformation',
    summary: 'Panel discussion on digital transformation strategies and pitfalls.',
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    link: '#',
  },
  {
    title: 'Automate 2023: The Future of Work',
    summary: 'Exploring workforce upskilling and automation trends at Automate 2023.',
    embed: 'https://open.spotify.com/embed/episode/1B2m2VZbZ1l5yQ2K7v7r7r',
    link: '#',
  },
];

export default function Resources() {
  return (
    <main className={styles.resourcesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Insights, Episodes, and Tools</h1>
        <p>Helping engineers, operators, and decision-makers grow</p>
      </section>

      {/* Beehiiv Blog Posts */}
      <BeehiivPosts />

      {/* Featured Resource */}
      <section className={styles.featuredResource}>
        <div className={styles.featuredContent}>
          <Image src={posts[0].thumbnail} alt={posts[0].title} width={80} height={80} />
          <div>
            <h2>{posts[0].title}</h2>
            <p>{posts[0].excerpt}</p>
            <Link href={`/resources/${posts[0].slug}`} className={styles.featuredLink}>
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={styles.blogSection}>
        <h2>Blog Posts</h2>
        <div className={styles.postsGrid}>
          {posts.map((post, i) => (
            <Link href={`/resources/${post.slug}`} key={post.slug} className={styles.postCard}>
              <Image src={post.thumbnail} alt={post.title} width={60} height={60} />
              <div className={styles.postContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className={styles.tags}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Podcast Section */}
      <section className={styles.podcastSection}>
        <h2>Podcast Episodes</h2>
        <div className={styles.podcastGrid}>
          {podcasts.map((ep, i) => (
            <div key={i} className={styles.podcastCard}>
              <div className={styles.podcastPlayer}>
                {ep.embed.includes('spotify') ? (
                  <iframe
                    src={ep.embed}
                    title={ep.title}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    src={ep.embed}
                    title={ep.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              <div className={styles.podcastInfo}>
                <h3>{ep.title}</h3>
                <p>{ep.summary}</p>
                <a href={ep.link} className={styles.podcastLink} target="_blank" rel="noopener noreferrer">
                  Listen to Full Episode
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className={styles.ctaSection}>
        <Link href="/contact" className={styles.ctaBtn}>
          Want to grow with me? Let's connect.
        </Link>
      </section>
    </main>
  );
}

export const generateMetadata = () => ({
  title: "Resources – Insights, Episodes, and Tools | Vlad Romanov",
  description: "Blog posts, podcast episodes, and newsletter for engineers, operators, and decision-makers in manufacturing.",
  openGraph: {
    title: "Resources – Insights, Episodes, and Tools | Vlad Romanov",
    description: "Blog posts, podcast episodes, and newsletter for engineers, operators, and decision-makers in manufacturing.",
    url: "https://www.vladromanov.com/resources",
    images: [
      {
        url: "/og-resources.jpg",
        width: 1200,
        height: 630,
        alt: "Resources – Vlad Romanov"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources – Insights, Episodes, and Tools | Vlad Romanov",
    description: "Blog posts, podcast episodes, and newsletter for engineers, operators, and decision-makers in manufacturing.",
    images: ["/og-resources.jpg"]
  }
}); 