import styles from "../../services/Services.module.css";

const services = [
  {
    title: "Consulting & Advisory",
    summary: "Strategic consulting for manufacturers undergoing digital transformation, modernization, or performance improvement.",
    description: `
      I provide comprehensive strategic guidance to help manufacturers navigate complex digital transformation initiatives and operational challenges.
      
      <ul>
        <li>Facility assessments (automation, data, process maturity)</li>
        <li>SCADA/MES architecture planning and optimization</li>
        <li>Obsolescence audits and risk mitigation strategies</li>
        <li>IT/OT strategy and cross-functional alignment</li>
        <li>Vendor selection and technical due diligence</li>
        <li>Operational performance & manufacturing systems optimization</li>
        <li>Support with capital project scoping, justification, and execution</li>
      </ul>
    `,
    primaryCTA: { text: "Start a Project", href: "/contact" },
    secondaryCTA: { text: "View Engagements", href: "/engagements" }
  },
  {
    title: "Fractional Leadership",
    summary: "Bring me in as a part-time or project-based leader to support internal teams through critical phases.",
    description: `
      I serve as an interim or fractional leader to help organizations bridge capability gaps and accelerate critical initiatives without the overhead of full-time hires.
      
      <ul>
        <li>Interim or fractional Engineering Manager / Ops Director</li>
        <li>Leading capital projects and modernization efforts</li>
        <li>Managing controls, maintenance, or engineering teams</li>
        <li>Mentoring internal staff and accelerating capability building</li>
        <li>Bridging communication between plant floor and corporate leadership</li>
      </ul>
    `,
    primaryCTA: { text: "Discuss Leadership", href: "/contact" },
    secondaryCTA: { text: "Learn More", href: "/about" }
  },
  {
    title: "Systems Integration & Technical Projects",
    summary: "Hands-on delivery of automation and digital projects with a balance of speed, quality, and ROI.",
    description: `
      I deliver end-to-end technical solutions that modernize manufacturing operations, from initial design through commissioning and optimization.
      
      <ul>
        <li>SCADA and HMI deployment (e.g., Ignition, FactoryTalk, Wonderware)</li>
        <li>PLC and industrial network upgrades (Rockwell, Siemens, etc.)</li>
        <li>Data acquisition and historian implementation</li>
        <li>Unified Namespace and MQTT-based architectures</li>
        <li>Full-stack OT integration: from sensors to dashboards</li>
        <li>Edge computing and IIoT proof-of-concepts</li>
      </ul>
    `,
    primaryCTA: { text: "Start Technical Project", href: "/contact" },
    secondaryCTA: { text: "View Case Studies", href: "/engagements" }
  },
  {
    title: "Speaking, Content, and Education",
    summary: "I help elevate the industry through thought leadership, education, and content.",
    description: `
      I share knowledge and insights to help the manufacturing community advance their capabilities and stay current with industry trends and best practices.
      
      <ul>
        <li>Speaking engagements (conferences, panels, webinars)</li>
        <li>Guest appearances and hosting on Manufacturing Hub Podcast</li>
        <li>Custom workshops and team training (automation, IT/OT, architecture)</li>
        <li>Long-form technical writing, case studies, and deep-dives</li>
        <li>Industry storytelling to drive alignment and adoption</li>
        <li>Technical documentation and stakeholder communication</li>
      </ul>
    `,
    primaryCTA: { text: "Book Speaking", href: "/contact" },
    secondaryCTA: { text: "Listen to Podcast", href: "/speaking" }
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={service.title} className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceIcon}>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>
                  {index + 1}
                </span>
              </div>
              <div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceSummary}>{service.summary}</p>
              </div>
            </div>
            
            <div 
              className={styles.serviceDescription}
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
            
            <div className={styles.serviceCTA}>
              <a href={service.primaryCTA.href} className={styles.serviceBtn}>
                {service.primaryCTA.text}
              </a>
              <a href={service.secondaryCTA.href} className={`${styles.serviceBtn} ${styles.serviceBtnSecondary}`}>
                {service.secondaryCTA.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 