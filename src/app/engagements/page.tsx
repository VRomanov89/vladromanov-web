import { getAllEngagements, EngagementMeta } from "../../../lib/engagements";
import styles from "./EngagementsGrid.module.css";
import Image from "next/image";
import Link from "next/link";

export default function EngagementsPage() {
  const engagements = getAllEngagements();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Real Projects. Measurable Results.</h1>
      <div className={styles.grid}>
        {engagements.map((e: EngagementMeta) => (
          <Link key={e.slug} href={`/engagements/${e.slug}`} className={styles.card}>
            <div className={styles.thumbWrap}>
              <Image src={e.image} alt={e.title + " image"} width={320} height={180} className={styles.thumb} />
            </div>
            <div className={styles.cardContent}>
              <h2>{e.title}</h2>
              <div className={styles.industry}>{e.industry}</div>
              <p className={styles.summary}>{e.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const generateMetadata = () => ({
  title: "Case Studies & Engagements – Vlad Romanov",
  description: "Explore real-world case studies and client engagements in industrial automation, SCADA/MES, and digital transformation.",
  openGraph: {
    title: "Case Studies & Engagements – Vlad Romanov",
    description: "Explore real-world case studies and client engagements in industrial automation, SCADA/MES, and digital transformation.",
    url: "https://www.vladromanov.com/engagements",
    images: [
      {
        url: "/og-engagements.jpg",
        width: 1200,
        height: 630,
        alt: "Case Studies & Engagements – Vlad Romanov"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Engagements – Vlad Romanov",
    description: "Explore real-world case studies and client engagements in industrial automation, SCADA/MES, and digital transformation.",
    images: ["/og-engagements.jpg"]
  }
}); 