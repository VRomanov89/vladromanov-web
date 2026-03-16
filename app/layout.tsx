import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vladimir Romanov | Manufacturing Modernization & Industrial Automation",
  description:
    "Vladimir Romanov is an electrical engineer, MBA, founder, educator, and podcast host focused on manufacturing modernization, industrial automation, and digital operations. Founder of Joltek and SolisPLC, co-host of Manufacturing Hub.",
  keywords: [
    "Vladimir Romanov",
    "manufacturing modernization",
    "industrial automation",
    "SCADA",
    "MES",
    "OT systems",
    "manufacturing consultant",
    "Joltek",
    "SolisPLC",
    "Manufacturing Hub",
    "PLC training",
    "digital operations",
    "controls engineering",
  ],
  authors: [{ name: "Vladimir Romanov" }],
  creator: "Vladimir Romanov",
  metadataBase: new URL("https://www.vladromanov.com"),
  alternates: {
    canonical: "https://www.vladromanov.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.vladromanov.com",
    siteName: "Vladimir Romanov",
    title: "Vladimir Romanov | Manufacturing Modernization & Industrial Automation",
    description:
      "Electrical engineer, MBA, founder, and podcast host helping manufacturers improve systems, teams, and execution.",
    images: [
      {
        url: "/vlad.avif",
        width: 1200,
        height: 630,
        alt: "Vladimir Romanov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vladimir Romanov | Manufacturing Modernization & Industrial Automation",
    description:
      "Electrical engineer, MBA, founder, and podcast host helping manufacturers improve systems, teams, and execution.",
    images: ["/vlad.avif"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vladimir Romanov",
  url: "https://www.vladromanov.com",
  image: "https://www.vladromanov.com/vlad.avif",
  jobTitle: "Manufacturing Modernization Consultant, Founder, and Educator",
  description:
    "Electrical engineer, MBA, founder of Joltek and SolisPLC, and co-host of the Manufacturing Hub podcast.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  sameAs: [
    "https://ca.linkedin.com/in/vladromanov",
    "https://www.joltek.com",
    "https://www.solisplc.com",
    "https://www.manufacturinghub.live",
    "https://www.youtube.com/channel/UC6JpBeS_6JhUwfGF8RgLCIQ",
  ],
  knowsAbout: [
    "Manufacturing Modernization",
    "Industrial Automation",
    "SCADA Systems",
    "MES",
    "IT/OT Integration",
    "PLC Programming",
    "Controls Engineering",
    "Digital Operations",
    "Workforce Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
