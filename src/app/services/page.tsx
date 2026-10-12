import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Laptop,
  RefreshCw,
  PhoneCall,
  ShieldCheck,
  Zap,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/config/content";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services — Website Development, Redesign & AI Voice Agents",
  description:
    "Explore Relay's digital services: custom website development, website redesign & performance optimization, and planned inbound AI voice agents.",
};

const serviceImages: Record<string, string> = {
  "web-dev": "/images/service-web-dev.jpg",
  "web-redesign": "/images/service-redesign.jpg",
  "ai-voice-agents": "/images/service-voice-agent.jpg",
};

const serviceIcons: Record<string, typeof Laptop> = {
  "web-dev": Laptop,
  "web-redesign": RefreshCw,
  "ai-voice-agents": PhoneCall,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-[#DCE5EF] pt-16 pb-20 sm:pt-24 sm:pb-28 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#F3F7FC_1px,transparent_1px),linear-gradient(to_bottom,#F3F7FC_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F7FC] border border-[#DCE5EF] text-[#123B63] text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#2878D0]" />
            <span>Services & Deliverables</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102A43] leading-tight">
            Everything your business needs to answer and convert.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#66758A] leading-relaxed max-w-2xl mx-auto">
            Clear deliverables, clear scope. Services marked &quot;Available Now&quot; are what we deliver today; the roadmap section highlights upcoming AI voice automation.
          </p>

          {/* Quick Pillar Stat Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#102A43] font-medium">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F3F7FC] border border-[#DCE5EF]">
              <Zap className="h-4 w-4 text-[#2878D0]" />
              <span>Sub-second page speeds</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F3F7FC] border border-[#DCE5EF]">
              <ShieldCheck className="h-4 w-4 text-[#2878D0]" />
              <span>Zero vendor lock-in</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F3F7FC] border border-[#DCE5EF]">
              <Clock className="h-4 w-4 text-[#2878D0]" />
              <span>2 to 4 week standard delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-20 sm:py-28 bg-[#F3F7FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.id] || Laptop;
            const isRoadmap = service.status === "roadmap";
            const imgPath = serviceImages[service.id] || "/images/service-web-dev.jpg";
            const isEven = index % 2 === 1;

            return (
              <div
                id={service.id}
                key={service.id}
                className="scroll-mt-28 card-corporate overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image showcase column */}
                  <div
                    className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100 ${
                      isEven ? "lg:order-2 border-b lg:border-b-0 lg:border-l border-[#DCE5EF]" : "border-b lg:border-b-0 lg:border-r border-[#DCE5EF]"
                    }`}
                  >
                    <Image
                      src={imgPath}
                      alt={`${service.title} architectural visualization`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-5 left-5">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-xs border ${
                          isRoadmap
                            ? "bg-[#102A43]/90 text-white border-white/20"
                            : "bg-white/95 text-emerald-800 border-emerald-200"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content details column */}
                  <div
                    className={`lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center font-bold border border-[#DCE5EF]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#66758A]">
                            Service Offering
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-[#102A43] leading-relaxed font-semibold">
                        {service.summary}
                      </p>

                      <p className="text-sm sm:text-base text-[#66758A] leading-relaxed">
                        {service.description}
                      </p>

                      {/* Capabilities checklist */}
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
                          Key Capabilities Included
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1B2738]">
                              <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables tags */}
                      {service.deliverables && service.deliverables.length > 0 && (
                        <div className="pt-4 border-t border-[#DCE5EF]">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#66758A] mb-2.5">
                            Standard Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((deliv, dIdx) => (
                              <span
                                key={dIdx}
                                className="text-xs bg-[#F3F7FC] text-[#123B63] border border-[#DCE5EF] px-3 py-1 rounded-lg font-medium"
                              >
                                {deliv}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA bar */}
                    <div className="mt-8 pt-6 border-t border-[#DCE5EF] flex flex-wrap items-center justify-between gap-4">
                      <Link
                        href={service.ctaHref}
                        className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition shadow-sm ${
                          isRoadmap
                            ? "bg-[#123B63] text-white hover:bg-[#2878D0]"
                            : "bg-[#2878D0] text-white hover:bg-[#123B63] shadow-[#2878D0]/20"
                        }`}
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        href="/audit"
                        className="text-xs font-semibold text-[#66758A] hover:text-[#102A43]"
                      >
                        Need an audit first? Request review →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. COMPARISON & GUARANTEE SECTION */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#DCE5EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-2">
              The Relay Standard
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Why our engineering approach outperforms traditional agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-corporate p-8">
              <div className="h-10 w-10 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center font-bold mb-4 border border-[#DCE5EF]">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                Sub-Second Core Web Vitals
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                We write clean modern code without bloated drag-and-drop builders. Every image is compressed, scripts are deferred, and layouts never shift unexpectedly.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="h-10 w-10 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center font-bold mb-4 border border-[#DCE5EF]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                100% Code & Asset Ownership
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                You own your code repository, domains, typography licenses, and deployment pipelines. No recurring hostage fees or proprietary lock-in.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="h-10 w-10 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center font-bold mb-4 border border-[#DCE5EF]">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                Predictable Timelines
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                Most website builds complete in 2 to 4 weeks. You review wireframes and interactive prototypes before engineering starts, ensuring zero surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-[#F3F7FC] border-t border-[#DCE5EF]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-3xl font-extrabold text-[#102A43] tracking-tight">
              Straightforward answers about our services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card-corporate p-6 sm:p-8 bg-white">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-5 w-5 text-[#2878D0] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-[#102A43] mb-2">
                    How long does a typical website development project take?
                  </h3>
                  <p className="text-sm text-[#66758A] leading-relaxed">
                    Most standard small and medium business website builds take between 2 to 4 weeks from discovery kickoff to production deployment, depending on content availability and review cycles.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-corporate p-6 sm:p-8 bg-white">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-5 w-5 text-[#2878D0] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-[#102A43] mb-2">
                    Do I own 100% of the website code and design assets?
                  </h3>
                  <p className="text-sm text-[#66758A] leading-relaxed">
                    Yes. Upon project completion and final handover, you receive full ownership of your source code repository, styling, domain setup, and assets with zero proprietary platform fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-corporate p-6 sm:p-8 bg-white">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-5 w-5 text-[#2878D0] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-[#102A43] mb-2">
                    When will Inbound AI Voice Agents become available for production?
                  </h3>
                  <p className="text-sm text-[#66758A] leading-relaxed">
                    AI voice agents are currently on our active engineering roadmap. We are developing reliable telephony routing, structured intent handling, and calendar synchronization. You can join the roadmap waitlist on our contact page to receive early pilot availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <CTASection
        headline="Ready to discuss your website or upcoming automation?"
        subheadline="Reach out to get a custom scoped proposal or request a zero-obligation manual website audit."
        buttonText="Get a Free Website Audit"
        buttonHref="/audit"
      />
    </div>
  );
}
