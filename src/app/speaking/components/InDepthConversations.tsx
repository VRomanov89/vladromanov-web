import styles from "../Speaking.module.css";

const conversations = [
  {
    id: "panel-1",
    title: "Panelist – ICS Cybersecurity Summit 2024",
    host: "Industrial Cybersecurity Institute",
    description: "Leading discussions on securing critical infrastructure in an increasingly connected world.",
    videoId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: "panel-2",
    title: "Guest Expert – Manufacturing Leadership Roundtable",
    host: "Manufacturing Executive Network",
    description: "Sharing insights on digital transformation strategies for mid-market manufacturers.",
    videoId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: "panel-3",
    title: "Keynote Speaker – Industry 4.0 Conference",
    host: "Smart Manufacturing Alliance",
    description: "Presenting on the convergence of IT and OT systems in modern manufacturing.",
    videoId: "dQw4w9WgXcQ" // Placeholder
  }
];

export default function InDepthConversations() {
  return (
    <section className={styles.conversationsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>In-Depth Conversations</h2>
        <div className={styles.conversationsGrid}>
          {conversations.map((conversation, index) => (
            <div key={conversation.id} className={styles.conversationCard}>
              <div className={styles.conversationVideo}>
                <iframe
                  src={`https://www.youtube.com/embed/${conversation.videoId}`}
                  title={conversation.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.conversationIframe}
                />
              </div>
              <div className={styles.conversationContent}>
                <h3 className={styles.conversationTitle}>{conversation.title}</h3>
                <p className={styles.conversationHost}>{conversation.host}</p>
                <p className={styles.conversationDescription}>{conversation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 