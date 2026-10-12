import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Target,
  Compass,
  CheckCircle2,
  PhoneCall,
  Laptop,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — Technology Should Work as Hard as You Do",
  description:
    "Learn about Relay's mission, engineering approach, and commitment to fast, accessible websites and automated business systems.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION WITH IMAGE & TEXT SPLIT */}
      <section className="bg-white border-b border-[#DCE5EF] pt-16 pb-20 sm:pt-24 sm:pb-28 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#F3F7FC_1px,transparent_1px),linear-gradient(to_bottom,#F3F7FC_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Mission & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F7FC] border border-[#DCE5EF] text-[#123B63] text-xs font-semibold uppercase tracking-wider shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#2878D0]" />
                <span>Our Philosophy & Approach</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102A43] leading-tight">
                Technology should work as hard as you do.
              </h1>

              <p className="text-lg sm:text-xl text-[#66758A] leading-relaxed font-normal">
                Small and medium-sized businesses run the real economy. Your website and customer communication channels shouldn&apos;t be an afterthought or an obstacle.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#102A43] font-medium">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F3F7FC] border border-[#DCE5EF]">
                  <CheckCircle2 className="h-4 w-4 text-[#2878D0]" />
                  Engineering Discipline
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F3F7FC] border border-[#DCE5EF]">
                  <CheckCircle2 className="h-4 w-4 text-[#2878D0]" />
                  Zero Lock-In
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F3F7FC] border border-[#DCE5EF]">
                  <CheckCircle2 className="h-4 w-4 text-[#2878D0]" />
                  Honest Disclosure
                </span>
              </div>
            </div>

            {/* Right Column: High-Res Studio Image */}
            <div className="lg:col-span-5 relative">
              <div className="card-corporate overflow-hidden shadow-xl border border-[#DCE5EF] relative h-80 sm:h-96 lg:h-[420px] w-full">
                <Image
                  src="/images/about-studio.jpg"
                  alt="Relay software engineering and digital design studio collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2878D0]">
                      Relay Engineering Culture
                    </p>
                    <p className="text-sm font-semibold text-[#F3F7FC]">
                      Disciplined software architecture applied to modern digital presences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE MISSION NARRATIVE */}
      <section className="py-20 sm:py-28 bg-[#F3F7FC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="card-corporate p-8 sm:p-12 bg-white space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0]">
              Our Mission
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight leading-snug">
              Eliminate lost customers caused by slow websites and missed phone calls.
            </p>
            <p className="text-base sm:text-lg text-[#66758A] leading-relaxed">
              Most small business websites are built once on an unstable template, loaded with unneeded plugins, and left to decay. When a prospective customer finally visits on their phone, pages take 6+ seconds to load, layout elements jump around, and contact forms fail silently.
            </p>
            <p className="text-base sm:text-lg text-[#66758A] leading-relaxed">
              Relay was established to bring modern software engineering standards — instant page loads, accessible UI, robust form routing, and future-ready voice automation — to growing local and national businesses.
            </p>
          </div>

          {/* 3. GUIDING PRINCIPLES */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-2">
                Our Foundation
              </h2>
              <p className="text-3xl font-extrabold text-[#102A43] tracking-tight">
                Our Guiding Principles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-corporate p-8 bg-white">
                <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-5 border border-[#DCE5EF]">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-2">
                  Performance is Usability
                </h3>
                <p className="text-sm text-[#66758A] leading-relaxed">
                  We treat load speed as a non-negotiable feature. We do not compromise on Core Web Vitals, responsive fluidity, or clean semantic code.
                </p>
              </div>

              <div className="card-corporate p-8 bg-white">
                <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-5 border border-[#DCE5EF]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-2">
                  Transparent & Honest by Default
                </h3>
                <p className="text-sm text-[#66758A] leading-relaxed">
                  We don&apos;t fabricate client statistics, invent artificial vanity metrics, or disguise concept mockups as verified enterprises. Trust is our core product.
                </p>
              </div>

              <div className="card-corporate p-8 bg-white">
                <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-5 border border-[#DCE5EF]">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-2">
                  Complete Ownership
                </h3>
                <p className="text-sm text-[#66758A] leading-relaxed">
                  You own 100% of your source code, domain, content, and design assets. No hostage fees, no proprietary closed ecosystems, and zero vendor lock-in.
                </p>
              </div>

              <div className="card-corporate p-8 bg-white">
                <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-5 border border-[#DCE5EF]">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-2">
                  Engineered for Expansion
                </h3>
                <p className="text-sm text-[#66758A] leading-relaxed">
                  Every website we architect is designed to integrate seamlessly into next-generation systems: automated audits, CRM webhooks, and AI voice call answering.
                </p>
              </div>
            </div>
          </div>

          {/* 4. LONG-TERM DIRECTION & VISION */}
          <div className="card-corporate p-8 sm:p-12 bg-white space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center border border-[#DCE5EF]">
                <PhoneCall className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2878D0]">
                Long-Term Vision: AI & Intelligent Automation
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
              Bridging the gap between the web and the telephone.
            </h3>

            <p className="text-base sm:text-lg text-[#66758A] leading-relaxed">
              For most service businesses, 40% to 60% of high-intent customer transactions still occur over the telephone. Yet after-hours calls, busy signals, and distracted staff lead to missed appointments every week.
            </p>

            <p className="text-base sm:text-lg text-[#66758A] leading-relaxed">
              Our long-term roadmap focuses on pairing high-converting web applications with reliable inbound AI voice agents that pick up on the first ring, capture customer intent, and book appointments directly into your business calendar.
            </p>

            <div className="pt-4 border-t border-[#DCE5EF] flex items-center justify-between">
              <Link
                href="/services#ai-voice-agents"
                className="text-sm font-semibold text-[#2878D0] hover:text-[#123B63] inline-flex items-center gap-1.5 group"
              >
                <span>Read our voice agent roadmap</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="text-xs font-semibold text-[#66758A] hover:text-[#102A43]"
              >
                Join roadmap waitlist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <CTASection
        headline="Ready to build a website that works harder?"
        subheadline="Talk directly with our team or start with a thorough manual review of your existing website."
        buttonText="Get a Free Website Audit"
        buttonHref="/audit"
      />
    </div>
  );
}
