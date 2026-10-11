import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { portfolioData } from "@/config/content";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio — Original Concept Work, Honestly Labeled",
  description:
    "Inspect demonstration website concepts built by Relay across healthcare, legal, hospitality, and real estate niches.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
            Demonstration Gallery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Original concept work. Honestly labeled.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We build real demonstration architectures for realistic business categories. These are functional concept designs showcasing our performance, information hierarchy, and conversion-first thinking.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {portfolioData.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Visual Header Banner */}
                <div className={`p-8 sm:p-10 bg-gradient-to-br ${project.colorTheme} border-b border-slate-100`}>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-blue-800 border border-blue-200/80 shadow-xs">
                      {project.conceptLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {project.name}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                {/* Details Body */}
                <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Project Objective
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {project.objective}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Design & Technical Approach
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Key Features & Interaction Flow
                      </h3>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metric Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, mIdx) => (
                          <span
                            key={mIdx}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700"
                          >
                            <Sparkles className="h-3 w-3 text-blue-600" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <Link
                      href={`/contact?service=web-dev&reference=${project.id}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-blue-700 transition shadow-sm"
                    >
                      <span>Request a similar website</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/audit"
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Audit your current site
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Have a specific business niche in mind?"
        subheadline="We design and build bespoke sites tailored to your customers' exact booking and inquiry habits."
        buttonText="Get a Free Website Audit"
        buttonHref="/audit"
      />
    </div>
  );
}
