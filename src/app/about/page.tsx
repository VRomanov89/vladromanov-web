import AboutHero from "../components/about/AboutHero";
import AboutHighlights from "../components/about/AboutHighlights";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutResumeCTA from "../components/about/AboutResumeCTA";
import AboutContactCTA from "../components/about/AboutContactCTA";
import styles from "./About.module.css";

export const generateMetadata = () => ({
  title: "About – Vlad Romanov",
  description: "About Vlad Romanov: Experience, career timeline, and leadership in manufacturing, automation, and digital transformation.",
  openGraph: {
    title: "About – Vlad Romanov",
    description: "About Vlad Romanov: Experience, career timeline, and leadership in manufacturing, automation, and digital transformation.",
    url: "https://www.vladromanov.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Vlad Romanov"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About – Vlad Romanov",
    description: "About Vlad Romanov: Experience, career timeline, and leadership in manufacturing, automation, and digital transformation.",
    images: ["/og-about.jpg"]
  }
});

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutHighlights />
      <AboutTimeline />
      <AboutResumeCTA />
      <AboutContactCTA />
    </main>
  );
} 