import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/content";

const desc = "Ahmed Magdy is a cybersecurity student and junior penetration tester focused on Web Application, Network, and Mobile Penetration Testing and Vulnerability Assessment.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Ahmed Magdy | Cybersecurity Student & Junior Penetration Tester", template: "%s | Ahmed Magdy" },
  description: desc,
  keywords: ["Ahmed Magdy", "web penetration tester", "network penetration tester", "cybersecurity", "bug bounty", "web application security", "API security"],
  openGraph: { title: "Ahmed Magdy | Cybersecurity Student & Junior Penetration Tester", description: desc, type: "website", url: site.url, siteName: "Ahmed Magdy" },
  twitter: { card: "summary", title: "Ahmed Magdy | Cybersecurity Student & Junior Penetration Tester", description: desc },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#050505", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.title, url: site.url, email: site.email,
    address: { "@type": "PostalAddress", addressLocality: "Alexandria", addressCountry: "EG" },
    alumniOf: "Alexandria University", knowsAbout: ["Web application security", "Penetration testing", "API security", "Network security"],
    sameAs: [site.linkedin, site.github, site.hackerone].filter(Boolean) };
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-red focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
