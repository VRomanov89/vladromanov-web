import styles from './Speaking.module.css';
import Image from 'next/image';
import Link from 'next/link';

const FEATURED_YOUTUBE = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with real video
const FEATURED_SPOTIFY = "https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5"; // Replace with real podcast

const APPEARANCE_LOGOS = [
  { src: "/vercel.svg", alt: "Manufacturing Hub" },
  { src: "/next.svg", alt: "ProveIt" },
  { src: "/globe.svg", alt: "Automate" },
];

const SIGNATURE_TOPICS = [
  {
    title: "The Future of Industrial Automation",
    desc: "Explore how AI, IoT, and robotics are transforming manufacturing. I break down complex trends into actionable insights for leaders and teams ready to adapt.",
  },
  {
    title: "Digital Transformation in Manufacturing",
    desc: "What does it really mean to go digital? I share real-world strategies for successful digital adoption, from culture to technology, tailored to your organization.",
  },
  {
    title: "Building Resilient Operations",
    desc: "Learn how to future-proof your business against disruption. I cover risk management, supply chain agility, and the human side of operational excellence.",
  },
  {
    title: "Leadership in the Age of Automation",
    desc: "How can leaders inspire teams through change? I offer practical advice on leading with vision, empathy, and technical know-how in a rapidly evolving landscape.",
  },
  {
    title: "Sustainable Manufacturing Strategies",
    desc: "Discover how sustainability and profitability go hand-in-hand. I present frameworks and case studies for greener, more efficient operations.",
  },
  {
    title: "Workforce Upskilling for Industry 4.0",
    desc: "Empower your people for tomorrow's jobs. I discuss training, culture, and technology to help teams thrive in the new industrial era.",
  },
];

const HIGHLIGHTS = [
  { src: "/vercel.svg", alt: "Manufacturing Hub Podcast", caption: "Manufacturing Hub Podcast", link: "#" },
  { src: "/next.svg", alt: "ProveIt Panel", caption: "ProveIt Panel", link: "#" },
  { src: "/globe.svg", alt: "Automate 2023", caption: "Automate 2023", link: "#" },
  { src: "/file.svg", alt: "Industry 4.0 Summit", caption: "Industry 4.0 Summit", link: "#" },
];

export default function Speaking() {
  return (
    <main className={styles.speakingPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Speaking, Panels, and Media</h1>
        <p>Helping professionals understand the future of industrial automation and manufacturing strategy</p>
      </section>

      {/* Featured Media */}
      <section className={styles.featuredMedia}>
        <div className={styles.mediaEmbeds}>
          <div className={styles.videoWrapper}>
            <iframe
              src={FEATURED_YOUTUBE}
              title="Featured Keynote"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className={styles.podcastWrapper}>
            <iframe
              src={FEATURED_SPOTIFY}
              title="Featured Podcast"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className={styles.appearanceLogos}>
          {APPEARANCE_LOGOS.map((logo, i) => (
            <div key={i} className={styles.logoBox}>
              <Image src={logo.src} alt={logo.alt} width={80} height={40} />
            </div>
          ))}
        </div>
      </section>

      {/* Signature Topics */}
      <section className={styles.signatureTopics}>
        <h2>Signature Topics</h2>
        <div className={styles.topicsGrid}>
          {SIGNATURE_TOPICS.map((topic, i) => (
            <div key={i} className={styles.topicCard}>
              <h3>{topic.title}</h3>
              <p>{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Highlights */}
      <section className={styles.highlights}>
        <h2>Previous Highlights</h2>
        <div className={styles.highlightsGrid}>
          {HIGHLIGHTS.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={styles.highlightCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={item.src} alt={item.alt} width={120} height={60} />
              <span>{item.caption}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Why Book Vlad */}
      <section className={styles.whyBook}>
        <h2>Why Book Vlad?</h2>
        <p>
          As a speaker, I bring real-world experience, energy, and clarity to every event. My sessions are tailored to your audience—whether it's executives, engineers, or students—ensuring actionable takeaways and engagement. I work closely with organizers to align content with your goals, and I'm known for making complex topics accessible, inspiring, and relevant.
        </p>
      </section>

      {/* Media Kit Download & CTA */}
      <section className={styles.ctaSection}>
        <a href="/media-kit.pdf" className={styles.mediaKitBtn} download>
          Download Media Kit
        </a>
        <Link href="/contact" className={styles.inviteBtn}>
          Invite Vlad to Speak
        </Link>
      </section>
    </main>
  );
}

export const generateMetadata = () => ({
  title: "Speaking, Panels, and Media – Vlad Romanov",
  description: "Book Vlad Romanov for keynotes, panels, and media on the future of industrial automation and manufacturing strategy.",
  openGraph: {
    title: "Speaking, Panels, and Media – Vlad Romanov",
    description: "Book Vlad Romanov for keynotes, panels, and media on the future of industrial automation and manufacturing strategy.",
    url: "https://www.vladromanov.com/speaking",
    images: [
      {
        url: "/og-speaking.jpg",
        width: 1200,
        height: 630,
        alt: "Speaking, Panels, and Media – Vlad Romanov"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking, Panels, and Media – Vlad Romanov",
    description: "Book Vlad Romanov for keynotes, panels, and media on the future of industrial automation and manufacturing strategy.",
    images: ["/og-speaking.jpg"]
  }
}); 