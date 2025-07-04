export interface Engagement {
  slug: string;
  title: string;
  client: string;
  logo: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  whyVlad: string;
  tools: string[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  thumbnail: string;
}

export const engagements: Engagement[] = [
  {
    slug: "post-holdings-scada-rollout",
    title: "Plant-wide SCADA Rollout for Post Holdings",
    client: "Post Holdings",
    logo: "/logos/post.png",
    industry: "Food & Beverage Manufacturing",
    summary: "Enabled real-time visibility and digital transformation across multiple plants with a modern SCADA system.",
    challenge: "Post Holdings needed to modernize legacy control systems and gain real-time data visibility across their operations, but faced integration and change management hurdles.",
    approach: "Led a cross-functional team to assess current systems, design a scalable SCADA architecture, select vendors, and manage phased implementation. Provided training and change management support.",
    outcome: "Achieved 30% faster issue resolution, improved OEE, and empowered operations with actionable data. The project set a new digital standard for the organization.",
    whyVlad: "My experience with large-scale SCADA/MES projects and ability to bridge OT/IT made me the ideal partner for this transformation.",
    tools: ["Ignition SCADA", "Siemens PLCs", "Kepware", "SQL Server", "Power BI", "Azure"],
    testimonial: {
      quote: "Vlad's leadership and technical expertise were critical to our digital transformation. He delivered results and brought our team along every step.",
      author: "Director of Operations, Post Holdings"
    },
    thumbnail: "/engagements/post-scada-thumb.jpg"
  }
]; 