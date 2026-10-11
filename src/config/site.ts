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
    primary: string; // Dark Navy #0B132B / #0F172A
    primaryLight: string; // Slate #1E293B
    accent: string; // Electric / Vibrant Blue #2563EB
    accentHover: string; // #1D4ED8
    accentSoft: string; // #EFF6FF
    background: string; // #FFFFFF
    backgroundMuted: string; // #F8FAFC
    borderSubtle: string; // #E2E8F0
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
  contactEmail: "hello@relaydigital.co",
  phoneDisplay: "(800) 555-0199",
  phoneHref: "tel:+18005550199",
  websiteUrl: "https://relaydigital.co",
  logo: {
    text: "Relay",
  },
  colors: {
    primary: "#0A1128",
    primaryLight: "#1E293B",
    accent: "#2563EB",
    accentHover: "#1D4ED8",
    accentSoft: "#EFF6FF",
    background: "#FFFFFF",
    backgroundMuted: "#F8FAFC",
    borderSubtle: "#E2E8F0",
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
