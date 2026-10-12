"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Filter, ShieldCheck } from "lucide-react";
import { portfolioData, PortfolioItem } from "@/config/content";
import { CTASection } from "@/components/CTASection";

const projectImages: Record<string, string> = {
  "apex-dental": "/images/project-apex-dental.jpg",
  "vanguard-legal": "/images/project-vanguard-legal.jpg",
  "savory-bistro": "/images/project-savory-bistro.jpg",
  "crestline-estate": "/images/project-crestline-estate.jpg",
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "HEALTHCARE",
    "LEGAL & PROFESSIONAL SERVICES",
    "HOSPITALITY",
    "REAL ESTATE & HOME SERVICES",
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="bg-white border-b border-[#DCE5EF] pt-16 pb-20 sm:pt-24 sm:pb-28 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#F3F7FC_1px,transparent_1px),linear-gradient(to_bottom,#F3F7FC_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F7FC] border border-[#DCE5EF] text-[#123B63] text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#2878D0]" />
            <span>Demonstration Gallery & Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102A43] leading-tight">
            Original concept work. Honestly labeled.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#66758A] leading-relaxed max-w-2xl mx-auto">
            We build real demonstration architectures for realistic business categories. These are functional concept designs showcasing our performance, information hierarchy, and conversion-first thinking.
          </p>

          {/* Transparent Disclosure Banner */}
          <div className="mt-8 max-w-2xl mx-auto rounded-xl bg-[#F3F7FC] border border-[#DCE5EF] p-4 text-xs text-[#66758A] flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
            <span>All projects in this showcase are original Relay concept demonstrations designed to exhibit production UI/UX engineering standards.</span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="bg-[#F3F7FC] border-b border-[#DCE5EF] py-6 sticky top-18 z-40 backdrop-blur-md bg-[#F3F7FC]/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#66758A]">
              <Filter className="h-4 w-4 text-[#2878D0]" />
              <span>Filter By Category:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const label =
                  cat === "ALL"
                    ? "All Projects"
                    : cat === "HEALTHCARE"
                    ? "Healthcare"
                    : cat === "LEGAL & PROFESSIONAL SERVICES"
                    ? "Legal & Corporate"
                    : cat === "HOSPITALITY"
                    ? "Hospitality"
                    : "Real Estate";

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#123B63] text-white shadow-sm"
                        : "bg-white text-[#102A43] border border-[#DCE5EF] hover:border-[#2878D0] hover:text-[#2878D0]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO / PRODUCTS SHOWCASE GRID */}
      <section className="py-20 sm:py-28 bg-[#F3F7FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {filteredProjects.map((project: PortfolioItem) => {
              const imageSrc =
                projectImages[project.id] || "/images/project-apex-dental.jpg";

              return (
                <div
                  key={project.id}
                  id={project.id}
                  className="scroll-mt-32 card-corporate overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-xl transition-all"
                >
                  {/* Visual Header Image Banner */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 border-b border-[#DCE5EF]">
                    <Image
                      src={imageSrc}
                      alt={`${project.name} concept demonstration website mockup`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#102A43]/90 text-white backdrop-blur-xs shadow-xs">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 text-[#123B63] border border-[#DCE5EF] shadow-xs backdrop-blur-xs">
                        {project.conceptLabel}
                      </span>
                    </div>
                  </div>

                  {/* Project Overview Details */}
                  <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-1">
                          {project.tag}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight mb-3">
                          {project.name}
                        </h2>
                        <p className="text-sm sm:text-base text-[#66758A] leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Project Objective */}
                      <div className="rounded-xl bg-[#F3F7FC] p-4.5 border border-[#DCE5EF]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                          Project Objective
                        </h3>
                        <p className="text-xs sm:text-sm text-[#1B2738] leading-relaxed">
                          {project.objective}
                        </p>
                      </div>

                      {/* Technical & Design Approach */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#66758A] mb-1.5">
                          Design & Technical Approach
                        </h3>
                        <p className="text-xs sm:text-sm text-[#1B2738] leading-relaxed">
                          {project.approach}
                        </p>
                      </div>

                      {/* Key Features & Interaction Flow */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#66758A] mb-2.5">
                          Key Features & Interaction Flow
                        </h3>
                        <ul className="space-y-2">
                          {project.keyFeatures.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1B2738]"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0 mt-0.5" />
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
                              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-[#F3F7FC] text-[#123B63] border border-[#DCE5EF]"
                            >
                              <Sparkles className="h-3 w-3 text-[#2878D0]" />
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer CTAs */}
                    <div className="pt-6 border-t border-[#DCE5EF] flex flex-wrap items-center justify-between gap-4">
                      <Link
                        href={`/contact?service=web-dev&reference=${project.id}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#2878D0] px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#123B63] transition shadow-sm"
                      >
                        <span>Request a similar website</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/audit"
                        className="text-xs font-semibold text-[#66758A] hover:text-[#102A43]"
                      >
                        Audit your current site →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <CTASection
        headline="Have a specific business niche in mind?"
        subheadline="We design and build bespoke sites tailored to your customers' exact booking and inquiry habits."
        buttonText="Get a Free Website Audit"
        buttonHref="/audit"
      />
    </div>
  );
}
