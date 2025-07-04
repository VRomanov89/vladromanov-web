"use client";
import styles from "./Services.module.css";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Digital Operations Assessment & Roadmap",
    short: "Comprehensive evaluation of your digital maturity and actionable roadmap for transformation.",
    details: "We analyze your current operations, identify digital gaps, and deliver a prioritized roadmap for Industry 4.0 adoption, tailored to your business goals.",
    price: "Starting at $5,000"
  },
  {
    title: "SCADA / MES Strategy & Implementation",
    short: "Expert guidance and hands-on support for SCADA and MES projects.",
    details: "From requirements to vendor selection, architecture, and deployment, we ensure your SCADA/MES systems deliver real value and integrate seamlessly.",
    price: "Custom pricing"
  },
  {
    title: "OT/IT Integration & Advisory",
    short: "Bridge the gap between operations and IT for secure, scalable solutions.",
    details: "We help you design and implement robust OT/IT architectures, cybersecurity, and data strategies for modern manufacturing.",
    price: "Hourly or project-based"
  },
  {
    title: "Fractional VP of Ops / Engineering",
    short: "Leadership-as-a-service for scaling teams and operations.",
    details: "Get executive-level expertise without the full-time cost. We drive process improvement, team development, and operational excellence.",
    price: "Retainer or part-time"
  },
  {
    title: "Training & Upskilling for Industrial Teams",
    short: "Workshops and coaching to empower your workforce.",
    details: "Customized training on digital tools, best practices, and change management to accelerate adoption and results.",
    price: "From $2,500/session"
  }
];

export default function ServicesClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Strategic Consulting for Modern Manufacturing</h1>
        <p>Unlock operational excellence and digital transformation with tailored consulting services for industrial leaders.</p>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          {services.map((service, idx) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardHeader} onClick={() => setOpen(open === idx ? null : idx)}>
                <h2>{service.title}</h2>
                <span className={styles.price}>{service.price}</span>
                <button className={styles.expandBtn} aria-label="Expand details">
                  {open === idx ? "−" : "+"}
                </button>
              </div>
              <p className={styles.short}>{service.short}</p>
              {open === idx && (
                <div className={styles.details}>
                  <p>{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.ctaSection}>
        <h3>Ready to accelerate your transformation?</h3>
        <Link href="/contact" className={styles.ctaBtn}>
          Book a Consultation
        </Link>
      </section>
    </div>
  );
} 