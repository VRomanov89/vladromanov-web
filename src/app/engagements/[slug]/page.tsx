import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import styles from "./Engagement.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Engagement {
  title: string;
  slug: string;
  client: string;
  industry: string;
  image: string;
  summary: string;
  challenge: string[];
  approach: string[];
  outcomes: string[];
  tools: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
  whyVlad: string;
  cta: string;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "data/engagements");
  const files = fs.readdirSync(dir);
  return files.map((file) => ({ slug: file.replace(/\.json$/, "") }));
}

async function getEngagement(slug: string): Promise<Engagement | null> {
  const filePath = path.join(process.cwd(), "data/engagements", `${slug}.json`);
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

interface Props {
  params: { slug: string };
}

export default async function EngagementPage({ params }: Props) {
  const engagement = await getEngagement(params.slug);
  if (!engagement) return notFound();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoWrap}>
            <Image src={engagement.image} alt={engagement.client + " image"} width={80} height={80} className={styles.logo} />
          </div>
          <div>
            <h1>{engagement.title}</h1>
            <div className={styles.industry}>{engagement.industry}</div>
            <p className={styles.summary}>{engagement.summary}</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Challenge</h2>
        <ul className={styles.bulletList}>
          {engagement.challenge.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Approach</h2>
        <ul className={styles.bulletList}>
          {engagement.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Outcomes</h2>
        <ul className={styles.bulletList}>
          {engagement.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Why Vlad?</h2>
        <p>{engagement.whyVlad}</p>
      </section>
      <section className={styles.section}>
        <h2>Tools Used</h2>
        <div className={styles.toolsTags}>
          {engagement.tools.map((tool) => (
            <span key={tool} className={styles.toolTag}>{tool}</span>
          ))}
        </div>
      </section>
      {engagement.testimonial && (
        <section className={styles.testimonialSection}>
          <blockquote className={styles.testimonial}>
            “{engagement.testimonial.quote}”
            <footer>
              — {engagement.testimonial.author}
            </footer>
          </blockquote>
        </section>
      )}
      <section className={styles.ctaSection}>
        <h3>{engagement.cta}</h3>
        <Link href="/contact" className={styles.ctaBtn}>
          Contact Vlad
        </Link>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const engagement = await getEngagement(params.slug);
  if (!engagement) return { title: "Engagement Not Found – Vlad Romanov" };
  return {
    title: `${engagement.title} – Case Study | Vlad Romanov`,
    description: engagement.summary,
    openGraph: {
      title: `${engagement.title} – Case Study | Vlad Romanov`,
      description: engagement.summary,
      url: `https://www.vladromanov.com/engagements/${engagement.slug}`,
      images: [
        {
          url: engagement.image || "/og-engagements.jpg",
          width: 1200,
          height: 630,
          alt: `${engagement.title} – Case Study | Vlad Romanov`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${engagement.title} – Case Study | Vlad Romanov`,
      description: engagement.summary,
      images: [engagement.image || "/og-engagements.jpg"]
    }
  };
} 