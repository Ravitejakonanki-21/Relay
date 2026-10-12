import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.companyName} — Websites & AI Voice Agents for Growing Businesses`,
    template: `%s — ${siteConfig.companyName}`,
  },
  description: siteConfig.heroSubheadline,
  keywords: [
    "Website Development",
    "Website Redesign",
    "AI Voice Agents",
    "Small Business Websites",
    "High Performance Web Design",
    "Free Website Audit",
  ],
  authors: [{ name: siteConfig.companyName }],
  creator: siteConfig.companyName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.websiteUrl,
    title: `${siteConfig.companyName} — Websites & AI Voice Agents`,
    description: siteConfig.heroSubheadline,
    siteName: siteConfig.companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} — Websites & AI Voice Agents`,
    description: siteConfig.heroSubheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "PrbNbPZMcr_sfjcAUiGa43M0EXNpspNeAmhHVGaH2AM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="flex min-h-full flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
