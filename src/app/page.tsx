"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Laptop,
  Zap,
  ShieldCheck,
  Search,
  Code2,
  FileCheck,
  Play,
  RotateCcw,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { portfolioData } from "@/config/content";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [transcriptStep, setTranscriptStep] = useState(0);

  const transcript = [
    {
      speaker: "Agent",
      text: "Thank you for calling Apex Dental Clinic! How may I help you today?",
    },
    {
      speaker: "Caller",
      text: "Hi, I broke a tooth this morning and I'm looking for emergency availability.",
    },
    {
      speaker: "Agent",
      text: "I'm sorry to hear that! We have an emergency opening today at 2:30 PM with Dr. Harris. Would that work for you?",
    },
    {
      speaker: "Caller",
      text: "Yes, 2:30 PM works perfectly. Can you book that for David Miller?",
    },
    {
      speaker: "Agent",
      text: "Done, David! You're booked for 2:30 PM today. A confirmation SMS with directions was just sent to your phone. See you soon!",
    },
  ];

  const handleSimulateCall = () => {
    setIsPlayingAudio(true);
    setTranscriptStep(1);
    let current = 1;
    const interval = setInterval(() => {
      current++;
      if (current <= transcript.length) {
        setTranscriptStep(current);
      } else {
        clearInterval(interval);
        setIsPlayingAudio(false);
      }
    }, 1800);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 bg-gradient-to-b from-slate-50/50 via-white to-white">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Service & Market Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 sm:mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{siteConfig.geographicServiceStatement}</span>
            </div>

            {/* Oversized High-Impact Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] sm:leading-[1.08]">
              Websites that win customers.{" "}
              <span className="text-blue-600 block sm:inline">
                Agents that answer your calls.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
              {siteConfig.heroSubheadline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>Get a Free Website Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Micro value-props */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Core Web Vitals Focused
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Mobile-First & Accessible
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Zero Lock-In
              </span>
            </div>
          </div>

          {/* Interactive Hero Visual / Modern Browser Showcase Mockup */}
          <div className="mt-14 sm:mt-18 max-w-5xl mx-auto rounded-2xl border border-slate-200/80 bg-white shadow-2xl overflow-hidden">
            {/* Browser top chrome */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 rounded-md bg-white px-4 py-1 text-xs font-mono text-slate-500 border border-slate-200/60 shadow-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>https://yourbusiness.com — 99+ Core Web Vitals</span>
              </div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Production Preview
              </div>
            </div>

            {/* Browser Content Simulated View */}
            <div className="p-6 sm:p-10 bg-slate-900 text-white grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded bg-blue-500/20 px-2.5 py-1 text-xs font-semibold text-blue-300 border border-blue-400/30">
                  HEALTHCARE PRACTICE LIVE PREVIEW
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  Apex Dental Clinic — Modern Patient Intake System
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Clean appointment scheduler, emergency tooth pain intake flow, and automated instant calendar dispatch.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="rounded-lg bg-slate-800/80 p-3 border border-slate-700">
                    <p className="text-xs text-slate-400">Page Speed</p>
                    <p className="text-xl font-bold text-emerald-400">0.7s</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/80 p-3 border border-slate-700">
                    <p className="text-xs text-slate-400">CWV Score</p>
                    <p className="text-xl font-bold text-emerald-400">100 / 100</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/80 p-3 border border-slate-700">
                    <p className="text-xs text-slate-400">Mobile Layout</p>
                    <p className="text-xl font-bold text-blue-400">Fluid</p>
                  </div>
                </div>
              </div>

              {/* Inbound Voice Agent Mini Panel */}
              <div className="md:col-span-5 rounded-xl border border-slate-700 bg-slate-800/90 p-5 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-slate-200">
                      Inbound Voice Agent
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Simulation
                  </span>
                </div>
                <div className="mt-3 text-xs text-slate-300 space-y-2">
                  <p className="italic text-slate-400">
                    &quot;Good afternoon! I have an emergency appointment opening today at 2:30 PM...&quot;
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-400">Status: Answering Call</span>
                    <span className="text-[11px] font-mono text-emerald-400">00:24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW SECTION */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              What We Do
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Two services, one goal: never lose a customer to a slow site or a missed call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1: Website Development */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Available Now
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Website Development
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Modern, responsive, fast websites for small and medium-sized businesses — designed to build trust and turn visitors into qualified inquiries.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>Custom bespoke design — no generic WordPress themes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>Sub-second Core Web Vitals speed optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>Integrated lead capture forms wired to your email</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services#web-dev"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 group"
                >
                  <span>About our web work</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/audit"
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Start with a free audit
                </Link>
              </div>
            </div>

            {/* Service 2: Inbound AI Voice Agents */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    Roadmap Service
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Inbound AI Voice Agents
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Inbound AI agents that answer business calls, handle routine questions, capture leads, and support appointment booking — around the clock.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                    <span>24/7 call answering with natural voice responses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                    <span>Direct calendar integration for appointment booking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                    <span>Seamless escalation & transfer to human staff</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services#ai-voice-agents"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 group"
                >
                  <span>About voice agents</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact?service=voice-agents"
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Inquire about roadmap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE RELAY */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Why Relay
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering discipline, applied to your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-slate-200/80 p-8 hover:border-blue-200 transition bg-white shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Speed is a feature
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Slow pages lose customers before they read a word. Every build targets Core Web Vitals best practices, optimized images, and minimal scripts — measured, not guessed.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 p-8 hover:border-blue-200 transition bg-white shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Lead capture built in
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Forms, call handling, and booking flows designed to route every inquiry somewhere useful — not into a void. Verified directly in your inbox.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 p-8 hover:border-blue-200 transition bg-white shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Modern engineering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clean, maintainable code your future developers will thank you for. No proprietary lock-in. You own everything we build.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 p-8 hover:border-blue-200 transition bg-white shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <FileCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Honest by default
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We label concept work as concept work and won&apos;t publish a metric we can&apos;t stand behind. Trust is the foundation of our partnership.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 p-8 hover:border-blue-200 transition bg-white shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                SEO fundamentals
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Semantic HTML, OpenGraph tags, sitemaps, structured schema, and lightning-quick performance designed for top crawlability.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 p-8 hover:border-blue-200 transition bg-white shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Built for phase two
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automated audits, CRM synchronizations, and inbound AI voice answering are on our roadmap — your site is architected from day one to grow into them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI VOICE AGENT INTERACTIVE CALL SIMULATOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-400/30 uppercase tracking-wider">
                Simulated Interaction Pattern
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Hear how a missed call becomes a booked appointment.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                This simulated transcript demonstrates the kind of inbound flow our planned voice agents handle: answering routine patient or customer inquiries, checking live availability, and confirming the booking.
              </p>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-400">
                <p className="font-semibold text-slate-200 mb-1">
                  Transparent Disclosure:
                </p>
                This is a scripted demonstration of the interaction pattern. Voice agents are an upcoming capability and not currently operational for production telephony.
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleSimulateCall}
                  disabled={isPlayingAudio}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500 disabled:opacity-60 transition"
                >
                  {isPlayingAudio ? (
                    <>
                      <RotateCcw className="h-4 w-4 animate-spin" />
                      <span>Playing Call Simulation...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 fill-white" />
                      <span>Play Sample Dental Call</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Simulated Live Call Card */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h4 className="font-bold text-slate-100">
                    Apex Dental Clinic — Inbound Call
                  </h4>
                  <p className="text-xs text-slate-400">
                    Automated Inbound Lead Intake Simulation
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono text-emerald-400">Live Agent</span>
                </div>
              </div>

              {/* Transcript Bubbles */}
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                {transcript.slice(0, transcriptStep === 0 ? 2 : transcriptStep).map((item, idx) => {
                  const isAgent = item.speaker === "Agent";
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isAgent ? "items-start" : "items-end"} animate-in fade-in duration-300`}
                    >
                      <span className="text-[11px] font-mono text-slate-400 mb-1">
                        {item.speaker}
                      </span>
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm max-w-[85%] leading-relaxed ${
                          isAgent
                            ? "bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700"
                            : "bg-blue-600 text-white rounded-tr-sm"
                        }`}
                      >
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>

              {transcriptStep === 0 && (
                <p className="mt-4 text-center text-xs text-slate-500">
                  Click &apos;Play Sample Dental Call&apos; to watch the multi-turn interaction.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED WORK PREVIEW */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Featured Work
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Concept projects, honestly labeled.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
            >
              <span>View all projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-blue-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className={`p-8 bg-gradient-to-br ${item.colorTheme} border-b border-slate-100`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-blue-700 border border-blue-200/70">
                      {item.conceptLabel}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {item.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/portfolio"
                      className="text-sm font-semibold text-blue-600 group-hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore case breakdown</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/audit"
                      className="text-xs font-medium text-slate-500 hover:text-slate-800"
                    >
                      Request similar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR SIMPLE 4-STEP PROCESS */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              How We Work
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A process built on clarity, not mystery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs">
              <span className="text-2xl font-black text-blue-600 font-mono">01</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Discover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A short call to understand your business, your customers, and what the website or voice agent must actually accomplish.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs">
              <span className="text-2xl font-black text-blue-600 font-mono">02</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structure and visual direction first — you approve the layout, responsive behavior, and copy approach before engineering starts.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs">
              <span className="text-2xl font-black text-blue-600 font-mono">03</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Build & Test</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, fast code tested on real mobile and desktop devices. Performance, accessibility, and form delivery verified before launch.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs">
              <span className="text-2xl font-black text-blue-600 font-mono">04</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Launch & Improve</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deploy to high-availability hosting, verify production analytics, and monitor performance. Your business owns 100% of the build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <CTASection />
    </div>
  );
}
