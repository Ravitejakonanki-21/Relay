export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  status: "available_now" | "roadmap";
  summary: string;
  description: string;
  features: string[];
  deliverables?: string[];
  ctaText: string;
  ctaHref: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Design & Development",
    badge: "AVAILABLE NOW",
    status: "available_now",
    summary:
      "Modern, fast, professional websites built for small and medium-sized businesses that need to win trust and convert visitors.",
    description:
      "We design and build bespoke, high-performance websites engineered for conversion. No bloated page builders or fragile plugins — just clean, accessible code that loads instantaneously and represents your business with high authority.",
    features: [
      "Custom design system — no cookie-cutter templates",
      "Responsive across mobile, tablet, and desktop",
      "Core Web Vitals-focused build with sub-second loads",
      "Contact and lead capture forms wired directly to your inbox",
      "Analytics-ready setup and SEO fundamentals included",
      "Accessible, semantic HTML (WCAG 2.1 AA compliant)",
      "Zero vendor lock-in — you own 100% of the code and assets",
    ],
    deliverables: [
      "Tailored UI/UX design mockups",
      "Custom Next.js production web app",
      "Transactional email integration",
      "Domain and SSL setup guidance",
    ],
    ctaText: "Start with a free audit",
    ctaHref: "/audit",
  },
  {
    id: "web-redesign",
    title: "Website Redesign & Performance Improvement",
    badge: "AVAILABLE NOW",
    status: "available_now",
    summary:
      "Your site has 3 seconds to make a first impression. We redesign dated websites and fix what makes them slow.",
    description:
      "If your current website feels dated, fails Core Web Vitals, or fails to convert visitors into inquiries, we evaluate every layer: messaging, information architecture, asset weight, and mobile usability.",
    features: [
      "Heuristic review of your current site and user flow",
      "Information architecture and content restructuring",
      "Image, script, and layout shift optimization",
      "Before/after performance benchmarks (Lighthouse & CWV)",
      "Mobile navigation and touch target refinement",
      "Conversion rate optimization (CRO) audit of key CTA flows",
    ],
    deliverables: [
      "Comprehensive performance & UX audit report",
      "Modernized responsive design system",
      "Asset-optimized production deployment",
      "Before & after speed benchmark report",
    ],
    ctaText: "Request a redesign quote",
    ctaHref: "/contact?service=redesign",
  },
  {
    id: "ai-voice-agents",
    title: "Inbound AI Voice Agents",
    badge: "PLANNED / AVAILABILITY UPON CONFIRMATION",
    status: "roadmap",
    summary:
      "Inbound AI agents that answer business calls, handle routine questions, capture leads, and support appointment booking — around the clock.",
    description:
      "Never miss a high-intent customer call again. Our planned inbound voice agents handle common inquiries, qualify prospective leads, and integrate into scheduling tools — with seamless escalation to human team members whenever needed.",
    features: [
      "24/7 inbound call answering with natural conversational flow",
      "Routine business FAQ resolution (hours, pricing, service areas)",
      "Lead qualification and structured caller data capture",
      "Real-time calendar availability and appointment booking",
      "Intelligent human escalation and transfer protocols",
      "Full transcript recording and instant email/SMS notifications",
    ],
    deliverables: [
      "Custom conversational workflow script",
      "Telephony routing and phone number provisioning",
      "Calendar integration (Google Calendar, Outlook)",
      "Caller CRM webhook synchronization",
    ],
    ctaText: "Join voice agent waitlist",
    ctaHref: "/contact?service=voice-agents",
  },
];

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  conceptLabel: string;
  summary: string;
  objective: string;
  approach: string;
  keyFeatures: string[];
  metrics: string[];
  tag: string;
  colorTheme: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "apex-dental",
    name: "Apex Dental Clinic",
    category: "HEALTHCARE",
    conceptLabel: "CONCEPT PROJECT",
    summary:
      "A calm, trust-first patient intake site with a frictionless appointment path designed around how nervous patients browse.",
    objective:
      "Modernize local dental practice discovery, alleviate patient anxiety, and maximize verified online booking inquiries.",
    approach:
      "Clean clinical typography, gentle sage-slate accents, immediate treatment pricing clarity, and prominent one-click appointment scheduling on mobile.",
    keyFeatures: [
      "Interactive procedure guides with clear expectations",
      "Direct online appointment request workflow",
      "Emergency same-day contact banner",
      "Mobile-optimized tap-to-call and map navigation",
    ],
    metrics: [
      "Sub-0.8s mobile page load",
      "100% Core Web Vitals score",
      "Accessible patient intake forms",
    ],
    tag: "Healthcare · Modern Intake",
    colorTheme: "from-emerald-500/10 to-teal-500/5",
  },
  {
    id: "vanguard-legal",
    name: "Vanguard Legal Group",
    category: "LEGAL & PROFESSIONAL SERVICES",
    conceptLabel: "CONCEPT PROJECT",
    summary:
      "An authoritative corporate law presence that makes requesting a confidential consultation feel like the obvious next step.",
    objective:
      "Establish deep authority in commercial litigation and corporate counsel while streamlining client intake and conflict checks.",
    approach:
      "Subdued monochromatic palette with deep navy accents, structured attorney directory, practice area breakdown, and secure consultation request forms.",
    keyFeatures: [
      "Comprehensive practice area knowledge base",
      "Structured partner and associate bio profiles",
      "Secure encrypted consultation request pipeline",
      "Corporate counsel client portal preview",
    ],
    metrics: [
      "Zero layout shift (CLS: 0.00)",
      "WCAG 2.1 AA compliant contrast",
      "Instant responsive navigation",
    ],
    tag: "Legal · Corporate Authority",
    colorTheme: "from-slate-700/10 to-indigo-900/5",
  },
  {
    id: "savory-bistro",
    name: "Savory Bistro & Bar",
    category: "HOSPITALITY",
    conceptLabel: "CONCEPT PROJECT",
    summary:
      "A sensory dining experience showcase that sells the evening before the guest even walks through the door.",
    objective:
      "Showcase seasonal farm-to-table menus, private event hosting, and direct table reservation integrations without third-party fees.",
    approach:
      "Rich editorial typography, clean visual galleries, real-time dinner menu toggles, and direct OpenTable/Resy integration touchpoints.",
    keyFeatures: [
      "Interactive seasonal food & cocktail menus",
      "Integrated reservation booking modal",
      "Private dining and event inquiry flow",
      "Direct directions and parking information guide",
    ],
    metrics: [
      "Optimized responsive imagery",
      "Instant menu category filtering",
      "Fast mobile load times",
    ],
    tag: "Hospitality · Table Reservations",
    colorTheme: "from-amber-600/10 to-orange-500/5",
  },
  {
    id: "crestline-estate",
    name: "Crestline Estate",
    category: "REAL ESTATE & HOME SERVICES",
    conceptLabel: "CONCEPT PROJECT",
    summary:
      "A bright, architectural listing showcase highlighting premier residential properties and private showings.",
    objective:
      "Elevate luxury real estate representation with expansive virtual tour layouts, neighborhood insights, and private showing requests.",
    approach:
      "Crisp architectural geometry, large-format optimized photography, interactive floorplan views, and instant VIP consultation capture.",
    keyFeatures: [
      "High-resolution architectural photo galleries",
      "Property specification breakdowns & floorplans",
      "Direct private showing scheduler",
      "Mortgage & valuation estimate request form",
    ],
    metrics: [
      "Next-gen WebP/AVIF image pipeline",
      "Silky 60fps mobile transitions",
      "Clean lead capture routing",
    ],
    tag: "Real Estate · Luxury Showcase",
    colorTheme: "from-sky-500/10 to-blue-600/5",
  },
];
