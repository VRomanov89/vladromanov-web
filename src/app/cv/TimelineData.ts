export interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  summary: string;
  details: string;
  logo?: string; // optional path to logo
}

export const timelineItems: TimelineItemProps[] = [
  {
    title: "Engineering Manager / Consultant",
    company: "Post Holdings",
    date: "2018 – 2022",
    summary: "Led automation modernization, capital project delivery, and technical leadership across multiple Post Holdings manufacturing sites. Provided engineering management and consulting for SCADA, PLC, and OT infrastructure upgrades, line optimization, and plant reliability initiatives.",
    details: `- Managed multi-site automation and controls modernization projects (SCADA, PLC, OT)
- Delivered capital projects from concept through commissioning, including line upgrades and new installations
- Led obsolescence assessments, risk mitigation, and reliability improvement programs
- Provided technical leadership and training to plant teams on automation troubleshooting and best practices
- Collaborated with production, quality, and IT/OT teams to drive operational excellence and digital transformation
- Platforms used: Rockwell ControlLogix, Siemens S7, FactoryTalk, Ignition, and related systems`,
    logo: "/logos/post.webp",
  },
  {
    title: "Founder / Consultant",
    company: "Joltek",
    date: "2020 – Present",
    summary: "Consulting across food, med device, and CPG",
    details: `- Facility audits and modernization strategies  
- Automation, SCADA/MES integration, and team training  
- Clients include Post Holdings, Kraft Heinz, others`,
    logo: "/logos/joltek.png",
  },
  {
    title: "Maintenance Manager, Engineering Manager, Consultant",
    company: "Kraft Heinz Company",
    date: "2017 – Present",
    summary: "Progressive leadership and consulting roles in food manufacturing, automation, and plant reliability across multiple Kraft Heinz facilities.",
    details: `
**Maintenance Manager (2017 – 2018)**
Served as Maintenance Manager in a 24/7 food manufacturing facility. Led a team of mechanics and controls technicians to ensure equipment uptime, preventive maintenance compliance, and continuous improvement of plant reliability programs. Collaborated with production and quality teams to support KPIs, safety initiatives, and rapid response troubleshooting. Managed external contractors and executed small to mid-scale upgrade projects.

**Engineering Consultant / Engineering Manager (2018 – Present)**
After the facility's closure, transitioned into a consulting role supporting multiple Kraft Heinz plants. Led automation modernization and capital project delivery across SCADA, PLC, and OT infrastructure. Managed multi-site obsolescence assessments, line upgrades, and commissioning efforts. Acted as engineering leader at several facilities during transitions. Platforms used include Rockwell ControlLogix, Siemens S7, FactoryTalk, and Ignition.

Company: Kraft Heinz Company (https://www.kraftheinzcompany.com/)`,
    logo: "/logos/kraft.png",
  },
  {
    title: "PC&IS Engineer / Band 1 Manager",
    company: "Procter & Gamble",
    date: "2014 – 2018",
    summary: `Served as a PC&IS Engineer at one of P&G's largest high-speed production sites, responsible for control system design, full-line installations, and technical leadership in a 24/7 manufacturing environment. Supported strategic automation initiatives across capital projects, new product development, and systems optimization.`,
    details: `- Led a 20% line speedup through control logic optimization and PLC enhancements
- Directed the full installation of two high-speed manufacturing lines from concept to production
- Participated in global R&D efforts for the launch of Tampax Pocket Pearl, integrating pilot and commercial-scale equipment
- Implemented standardization in preventative maintenance and fault diagnostics for PLC and instrumentation systems
- Worked extensively with Rockwell ControlLogix, FactoryTalk, Ethernet/IP, servo drives, and DCS/SCADA environments
- Provided training and technical coaching to internal teams on automation troubleshooting and system upgrades\n\nLocation: Auburn, Maine\nDivision: Tampax (Feminine Care Manufacturing)\nCompany: Procter & Gamble (https://www.pgcareers.com/)`,
    logo: "/logos/pg.png",
  },
  {
    title: "Bachelors in Engineering - Electrical Engineering",
    company: "Concordia University",
    date: "2009 – 2013",
    summary: "Graduated with Distinction (B.Eng, Electrical Engineering). Specialized in power and renewable energy systems. Vice President of IEEE Concordia.",
    details: `- Specialized in power systems, control theory, and renewable energy technologies
- Served as Vice President of IEEE Concordia, organizing student workshops and industry events
- Gained foundational experience in circuit design, PLCs, and embedded systems
- Graduated with distinction while actively contributing to student leadership\n\nGPA: 3.52\nGraduation Standing: With Distinction\nDegree: Bachelor of Engineering (B.Eng), Electrical Engineering\nSpecialization: Power and Renewable Energy Systems\nLeadership: Vice President of IEEE Concordia Student Branch\nInstitution: Concordia University (https://www.concordia.ca/)`,
    logo: "/logos/concordia.png",
  },
  {
    title: "MBA | Masters in Business Administration - Finance and Business Strategy",
    company: "McGill University",
    date: "2019 – 2021",
    summary: "MBA with specialization in Finance and Business Strategy. Graduated with 3.7 GPA.",
    details: `Completed a rigorous MBA at McGill University with a focus on finance and strategic leadership. Coursework covered advanced topics including corporate finance, global capital markets, mergers and acquisitions, investment strategy, innovation, and organizational transformation. Developed practical expertise in data analytics, financial modeling, and value creation while exploring business fundamentals from both managerial and shareholder perspectives. Strengthened negotiation skills, cross-functional decision-making, and the ability to lead in globally diverse environments.\n\nGPA: 3.7\nDegree: Master of Business Administration (MBA)\nSpecialization: Finance and Business Strategy\nInstitution: McGill University (https://www.mcgill.ca/)`,
    logo: "/logos/mcgill.png",
  },
  {
    title: "Host, Manufacturing Hub Podcast",
    company: "Manufacturing Hub",
    date: "2021 – Present",
    summary: "Over 200 episodes on automation & leadership",
    details: `- Interviews with SCADA/MES, ERP, and robotics leaders  
- Educational resource for engineers, consultants, execs  
- 10K+ followers on LinkedIn & YouTube`,
    logo: "/logos/mfghub.png",
  },
  {
    title: "Writer, FRAME Dispatch Newsletter",
    company: "FRAME",
    date: "2024 – Present",
    summary: "Weekly insights on operational excellence",
    details: `- Bilingual newsletter with practical strategies  
- Covers factory assessments, architecture, data, AI  
- Aimed at engineers, plant managers, consultants`,
    logo: "/logos/frame.png",
  }
]; 