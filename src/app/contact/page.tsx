export const generateMetadata = () => ({
  title: "Contact Vlad Romanov – Industrial Automation Consultant",
  description: "Get in touch with Vlad Romanov for consulting, speaking, or media inquiries in manufacturing and automation.",
  openGraph: {
    title: "Contact Vlad Romanov – Industrial Automation Consultant",
    description: "Get in touch with Vlad Romanov for consulting, speaking, or media inquiries in manufacturing and automation.",
    url: "https://www.vladromanov.com/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Vlad Romanov"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vlad Romanov – Industrial Automation Consultant",
    description: "Get in touch with Vlad Romanov for consulting, speaking, or media inquiries in manufacturing and automation.",
    images: ["/og-contact.jpg"]
  }
});

export default function Contact() {
  return (
    <main>
      <h1>Contact Page</h1>
    </main>
  );
} 