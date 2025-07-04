import fs from "fs";
import path from "path";

export interface EngagementMeta {
  slug: string;
  title: string;
  image: string;
  summary: string;
  industry: string;
}

export interface Engagement extends EngagementMeta {
  client: string;
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

const DATA_DIR = path.join(process.cwd(), "data/engagements");

export function getAllEngagements(): EngagementMeta[] {
  const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
  return files.map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), "utf-8"));
    return {
      slug: data.slug,
      title: data.title,
      image: data.image,
      summary: data.summary,
      industry: data.industry,
    };
  });
}

export function getEngagementBySlug(slug: string): Engagement | null {
  const filePath = path.join(DATA_DIR, `${slug}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return data;
  } catch {
    return null;
  }
} 