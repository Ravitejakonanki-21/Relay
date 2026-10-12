export interface BrandConfig {
  companyName: string;
  legalName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  contactEmail: string;
  phoneDisplay?: string;
  phoneHref?: string;
  websiteUrl: string;
  logo: {
    text: string;
    badgeText?: string;
  };
  colors: {
    primary: string; // Primary corporate navy #123B63
    accent: string; // Primary accent blue #2878D0
    heading: string; // Deep navy for strong headings #102A43
    backgroundSoft: string; // Soft blue backgrounds #F3F7FC
    background: string; // Pure white #FFFFFF
    textPrimary: string; // Primary text #1B2738
    textSecondary: string; // Secondary text #66758A
    border: string; // Borders #DCE5EF
    gradient: string; // linear-gradient(135deg, #123B63, #2878D0)
  };
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  targetMarket: string;
  geographicServiceStatement: string;
  serviceAvailability: {
    websiteDevelopment: {
      status: "available_now";
      badge: "AVAILABLE NOW";
      label: "Website Design & Development";
    };
    websiteRedesign: {
      status: "available_now";
      badge: "AVAILABLE NOW";
      label: "Website Redesign & Performance Improvement";
    };
    voiceAgents: {
      status: "roadmap";
      badge: "COMING SOON / ROADMAP";
      label: "Inbound AI Voice Agents";
    };
  };
}

export const siteConfig: BrandConfig = {
  companyName: "Relay",
  legalName: "Relay Digital Services LLC",
  tagline: "Websites that win customers. Technology that works harder.",
  heroHeadline: "Websites that win customers. Agents that answer your calls.",
  heroSubheadline:
    "Relay designs fast, professional websites for small and medium-sized businesses — and inbound AI voice agents that answer every call, capture every lead, and book appointments while you work.",
  contactEmail: "relaystudio.team@gmail.com",
  phoneDisplay: "(800) 555-0199",
  phoneHref: "tel:+18005550199",
  websiteUrl: "https://relaydigital.co",
  logo: {
    text: "Relay",
  },
  colors: {
    primary: "#123B63", // Primary corporate navy
    accent: "#2878D0", // Primary accent blue
    heading: "#102A43", // Deep navy for strong headings
    backgroundSoft: "#F3F7FC", // Soft blue backgrounds
    background: "#FFFFFF", // Pure white
    textPrimary: "#1B2738", // Primary text
    textSecondary: "#66758A", // Secondary text
    border: "#DCE5EF", // Borders
    gradient: "linear-gradient(135deg, #123B63, #2878D0)",
  },
  socialLinks: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  targetMarket: "Small and medium-sized businesses all over the world",
  geographicServiceStatement:
    "Serving businesses all over the world",
  serviceAvailability: {
    websiteDevelopment: {
      status: "available_now",
      badge: "AVAILABLE NOW",
      label: "Website Design & Development",
    },
    websiteRedesign: {
      status: "available_now",
      badge: "AVAILABLE NOW",
      label: "Website Redesign & Performance Improvement",
    },
    voiceAgents: {
      status: "roadmap",
      badge: "COMING SOON / ROADMAP",
      label: "Inbound AI Voice Agents",
    },
  },
};
