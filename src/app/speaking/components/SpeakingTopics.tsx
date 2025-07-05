import styles from "../Speaking.module.css";

const topics = [
  {
    title: "IT/OT Convergence in Modern Manufacturing",
    description: "How to bridge the gap between information technology and operational technology for seamless integration."
  },
  {
    title: "Architecting Scalable SCADA and MES Systems",
    description: "Designing manufacturing systems that grow with your business and adapt to changing needs."
  },
  {
    title: "Unified Namespace & Industrial Data Strategy",
    description: "Creating a single source of truth for all your manufacturing data and processes."
  },
  {
    title: "Leading Technical Teams Through Transformation",
    description: "Practical leadership strategies for guiding engineering teams through digital transformation."
  },
  {
    title: "How AI Is Changing Factory Operations",
    description: "Real-world applications of artificial intelligence in manufacturing and what's coming next."
  },
  {
    title: "From Engineer to Executive: Building Technical Leadership",
    description: "Career development strategies for technical professionals moving into leadership roles."
  }
];

export default function SpeakingTopics() {
  return (
    <section className={styles.topicsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Topics I Speak On</h2>
        <div className={styles.topicsGrid}>
          {topics.map((topic, index) => (
            <div key={index} className={styles.topicCard}>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
              <p className={styles.topicDescription}>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 