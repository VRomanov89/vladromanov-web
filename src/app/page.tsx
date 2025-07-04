import HeroSection from "./components/HeroSection";
import ScrollingLogoBar from "./components/ScrollingLogoBar";
import WhatIDoCards from "./components/WhatIDoCards";
import FeaturedProject from "./components/FeaturedProject";
import WhyWorkWithVlad from "./components/WhyWorkWithVlad";
import PodcastNewsletterHighlight from "./components/PodcastNewsletterHighlight";
import FinalCtaSection from "./components/FinalCtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollingLogoBar />
      <WhatIDoCards />
      <FeaturedProject />
      <WhyWorkWithVlad />
      <PodcastNewsletterHighlight />
      <FinalCtaSection />
    </main>
  );
}

export const generateMetadata = () => ({
  title: "Vlad Romanov – Industrial Automation & Manufacturing Consultant",
  description: "Consulting, speaking, and resources for digital transformation, SCADA/MES, and manufacturing strategy.",
  openGraph: {
    title: "Vlad Romanov – Industrial Automation & Manufacturing Consultant",
    description: "Consulting, speaking, and resources for digital transformation, SCADA/MES, and manufacturing strategy.",
    url: "https://www.vladromanov.com/",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Vlad Romanov – Industrial Automation & Manufacturing Consultant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vlad Romanov – Industrial Automation & Manufacturing Consultant",
    description: "Consulting, speaking, and resources for digital transformation, SCADA/MES, and manufacturing strategy.",
    images: ["/og-home.jpg"]
  }
});
