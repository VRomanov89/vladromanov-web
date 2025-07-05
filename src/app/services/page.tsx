import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";
import styles from "./Services.module.css";

export const generateMetadata = () => ({
  title: "Services – Vlad Romanov",
  description: "Strategic consulting, fractional leadership, systems integration, and thought leadership for manufacturers undergoing digital transformation.",
  openGraph: {
    title: "Services – Vlad Romanov",
    description: "Strategic consulting, fractional leadership, systems integration, and thought leadership for manufacturers undergoing digital transformation.",
    url: "https://www.vladromanov.com/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Vlad Romanov Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Services – Vlad Romanov",
    description: "Strategic consulting, fractional leadership, systems integration, and thought leadership for manufacturers undergoing digital transformation.",
    images: ["/og-services.jpg"]
  }
});

export default function ServicesPage() {
  return (
    <main className={styles.servicesPage}>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  );
} 