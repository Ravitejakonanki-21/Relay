import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Laptop, RefreshCw, PhoneCall } from "lucide-react";
import { servicesData } from "@/config/content";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services — Website Development, Redesign & AI Voice Agents",
  description:
    "Explore Relay's digital services: custom website development, website redesign & performance optimization, and planned inbound AI voice agents.",
};

const serviceIcons: Record<string, typeof Laptop> = {
  "web-dev": Laptop,
  "web-redesign": RefreshCw,
  "ai-voice-agents": PhoneCall,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
            Services & Deliverables
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Everything your business needs to answer and convert.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Clear deliverables, clear scope. Services marked &quot;Available Now&quot; are what we deliver today; the roadmap section highlights upcoming AI voice automation.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.id] || Laptop;
            const isRoadmap = service.status === "roadmap";

            return (
              <div
                id={service.id}
                key={service.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 lg:p-16 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                          isRoadmap
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border-emerald-200"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                      {service.summary}
                    </p>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-4">
                      <Link
                        href={service.ctaHref}
                        className={`inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition shadow-sm ${
                          isRoadmap
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20"
                        }`}
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Features & Deliverables */}
                  <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                        What&apos;s Included & Capabilities
                      </h3>
                      <ul className="space-y-3.5">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 leading-relaxed font-normal">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.deliverables && service.deliverables.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-slate-200/80">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Standard Deliverables
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((deliv, dIdx) => (
                            <span
                              key={dIdx}
                              className="text-xs bg-white text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium"
                            >
                              {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to discuss your website or upcoming automation?"
        subheadline="Reach out to get a custom scoped proposal or request a zero-obligation manual website audit."
        buttonText="Get a Free Website Audit"
        buttonHref="/audit"
      />
    </div>
  );
}
