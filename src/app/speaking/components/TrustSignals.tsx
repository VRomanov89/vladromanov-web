import Image from "next/image";
import styles from "../Speaking.module.css";

const trustLogos = [
  { src: "/logos/manufacturinghub.png", alt: "Manufacturing Hub" },
  { src: "/logos/solisplc.png", alt: "SolisPLC" },
  { src: "/logos/kerno.png", alt: "Kerno" },
  { src: "/logos/joltek.png", alt: "Joltek" },
  { src: "/logos/kraft.png", alt: "Kraft Heinz" },
  { src: "/logos/post.png", alt: "Post Holdings" },
  { src: "/logos/pg.png", alt: "Procter & Gamble" },
  { src: "/logos/mcgill.png", alt: "McGill University" },
  { src: "/logos/concordia.png", alt: "Concordia University" }
];

const testimonials = [
  {
    quote: "\"Vlad brings a rare combination of technical depth and executive perspective that resonates with audiences at every level.\"",
    author: "Sarah Chen",
    role: "Conference Director, Automate 2024"
  },
  {
    quote: "\"His ability to translate complex technical concepts into actionable business insights makes him a standout speaker.\"",
    author: "Mike Rodriguez",
    role: "Operations Director, Manufacturing Hub"
  }
];

export default function TrustSignals() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Trusted by Teams Across the Industry</h2>
        
        <div className={styles.logosGrid}>
          {trustLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.trustLogo}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          ))}
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <blockquote className={styles.testimonialQuote}>
                {testimonial.quote}
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 