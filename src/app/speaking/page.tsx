import SpeakingHero from "./components/SpeakingHero";
import FeaturedAppearances from "./components/FeaturedAppearances";
import PodcastEpisodes from "./components/PodcastEpisodes";
import InDepthConversations from "./components/InDepthConversations";
import SpeakingTopics from "./components/SpeakingTopics";
import TrustSignals from "./components/TrustSignals";

export default function SpeakingPage() {
  return (
    <main>
      <SpeakingHero />
      <FeaturedAppearances />
      <PodcastEpisodes />
      <InDepthConversations />
      <SpeakingTopics />
      <TrustSignals />
    </main>
  );
}

export const generateMetadata = () => ({
  title: "Speaking – Vlad Romanov | Manufacturing & Automation Thought Leader",
  description: "Keynotes, panels, and media appearances on automation, digital transformation, and manufacturing leadership. Invite me to speak at your event.",
  openGraph: {
    title: "Speaking – Vlad Romanov | Manufacturing & Automation Thought Leader",
    description: "Keynotes, panels, and media appearances on automation, digital transformation, and manufacturing leadership.",
    url: "https://www.vladromanov.com/speaking",
    images: [
      {
        url: "/og-speaking.jpg",
        width: 1200,
        height: 630,
        alt: "Vlad Romanov Speaking"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking – Vlad Romanov | Manufacturing & Automation Thought Leader",
    description: "Keynotes, panels, and media appearances on automation, digital transformation, and manufacturing leadership.",
    images: ["/og-speaking.jpg"]
  }
}); 