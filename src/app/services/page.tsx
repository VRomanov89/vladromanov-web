import ServicesClient from "./ServicesClient";

export const generateMetadata = () => ({
  title: "Consulting Services – Vlad Romanov",
  description: "Strategic consulting for SCADA, MES, digital transformation, and operational excellence in manufacturing.",
  openGraph: {
    title: "Consulting Services – Vlad Romanov",
    description: "Strategic consulting for SCADA, MES, digital transformation, and operational excellence in manufacturing.",
    url: "https://www.vladromanov.com/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Consulting Services – Vlad Romanov"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting Services – Vlad Romanov",
    description: "Strategic consulting for SCADA, MES, digital transformation, and operational excellence in manufacturing.",
    images: ["/og-services.jpg"]
  }
});

export default function ServicesPage() {
  return <ServicesClient />;
} 