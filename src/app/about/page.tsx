import type { Metadata } from "next";
import { ShieldCheck, Zap, Target, Compass } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — Technology Should Work as Hard as You Do",
  description:
    "Learn about Relay's mission, engineering approach, and commitment to fast, accessible websites and automated business systems.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Hero */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
            Our Philosophy
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Technology should work as hard as you do.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Small and medium-sized businesses run the real economy. Your website and customer communication channels shouldn&apos;t be an afterthought or an obstacle.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Mission
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Eliminate lost customers caused by slow websites and missed phone calls.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Most small business websites are built once on an unstable template, loaded with unneeded plugins, and left to decay. When a prospective customer finally visits on their phone, pages take 6+ seconds to load, layout elements jump around, and contact forms fail silently.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Relay was established to bring modern software engineering standards — instant page loads, accessible UI, robust form routing, and future-ready voice automation — to growing local and national businesses.
            </p>
          </div>

          {/* Pillars */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-6">
              Our Guiding Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Performance is Usability
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We treat load speed as a non-negotiable feature. We do not compromise on Core Web Vitals, responsive fluidity, or clean semantic code.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Transparent & Honest by Default
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We don&apos;t fabricate client statistics, invent artificial vanity metrics, or disguise concept mockups as verified enterprises. Trust is our core product.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Complete Ownership
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You own 100% of your source code, domain, content, and design assets. No hostage fees, no proprietary closed ecosystems, and zero vendor lock-in.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Engineered for Expansion
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every website we architect is designed to integrate seamlessly into next-generation systems: automated audits, CRM webhooks, and AI voice call answering.
                </p>
              </div>
            </div>
          </div>

          {/* Long Term Direction */}
          <div className="pt-8 border-t border-slate-100 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Long-Term Vision: AI & Intelligent Automation
            </h2>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Bridging the gap between the web and the telephone.
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              For most service businesses, 40% to 60% of high-intent customer transactions still occur over the telephone. Yet after-hours calls, busy signals, and distracted staff lead to missed appointments every week.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Our long-term roadmap focuses on pairing high-converting web applications with reliable inbound AI voice agents that pick up on the first ring, capture customer intent, and book appointments directly into your business calendar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to build a website that works harder?"
        subheadline="Talk directly with our team or start with a thorough manual review of your existing website."
        buttonText="Get a Free Website Audit"
        buttonHref="/audit"
      />
    </div>
  );
}
