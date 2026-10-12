"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Sparkles,
  Layers,
  Activity,
  ArrowUpRight,
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

  const resetSimulation = () => {
    setTranscriptStep(0);
    setIsPlayingAudio(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-18 sm:pb-28 lg:pt-24 lg:pb-32 bg-white">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#F3F7FC_1px,transparent_1px),linear-gradient(to_bottom,#F3F7FC_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Service & Market Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F7FC] border border-[#DCE5EF] text-[#123B63] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 sm:mb-8 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#2878D0] animate-pulse" />
              <span>{siteConfig.geographicServiceStatement}</span>
            </div>

            {/* Oversized High-Impact Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#102A43] leading-[1.08] sm:leading-[1.08]">
              Websites that win customers.{" "}
              <span className="text-[#2878D0] block sm:inline">
                Agents that answer your calls.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#66758A] leading-relaxed max-w-3xl mx-auto font-normal">
              {siteConfig.heroSubheadline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#2878D0] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#2878D0]/25 hover:bg-[#123B63] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878D0]"
              >
                <span>Get a Free Website Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#DCE5EF] bg-white px-7 py-4 text-base font-semibold text-[#123B63] shadow-xs hover:bg-[#F3F7FC] hover:border-[#2878D0] transition"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Micro value-props */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#66758A] font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2878D0]" />
                Core Web Vitals Focused
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2878D0]" />
                Mobile-First & Accessible
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2878D0]" />
                Zero Lock-In
              </span>
            </div>
          </div>

          {/* Interactive Hero Visual Showcase */}
          <div className="mt-14 sm:mt-18 max-w-5xl mx-auto rounded-2xl border border-[#DCE5EF] bg-white shadow-2xl overflow-hidden">
            {/* Browser top chrome */}
            <div className="flex items-center justify-between border-b border-[#DCE5EF] bg-[#F3F7FC] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 rounded-md bg-white px-4 py-1 text-xs font-mono text-[#66758A] border border-[#DCE5EF] shadow-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>https://yourbusiness.com — 99+ Core Web Vitals</span>
              </div>
              <div className="text-xs font-bold text-[#2878D0] uppercase tracking-wider flex items-center gap-1">
                <Activity className="h-3.5 w-3.5" />
                <span>Production Preview</span>
              </div>
            </div>

            {/* High-Resolution Hero Media Composition */}
            <div className="relative group overflow-hidden bg-[#102A43]">
              <Image
                src="/images/hero-preview.jpg"
                alt="Relay high-performance website preview and AI telephony intelligence dashboard"
                width={1600}
                height={900}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              {/* Subtle glass overlay banner with live metrics */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/60 to-transparent flex flex-wrap items-center justify-between gap-4 text-white">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#2878D0]/30 text-xs font-semibold text-[#F3F7FC] border border-[#2878D0]/40">
                    <Sparkles className="h-3 w-3 text-[#2878D0]" />
                    <span>Apex Dental Clinic & Telephony Preview</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#DCE5EF]">
                    Sub-second load times · Clean intake flow · Automated calendar dispatch
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/15 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-[#DCE5EF]">Speed</p>
                    <p className="text-sm sm:text-base font-bold text-emerald-400">0.7s</p>
                  </div>
                  <div className="rounded-lg bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/15 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-[#DCE5EF]">CWV Score</p>
                    <p className="text-sm sm:text-base font-bold text-emerald-400">100/100</p>
                  </div>
                  <div className="rounded-lg bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/15 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-[#DCE5EF]">Voice Agent</p>
                    <p className="text-sm sm:text-base font-bold text-[#2878D0]">24/7 Flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW SECTION */}
      <section className="py-20 sm:py-28 bg-[#F3F7FC] border-t border-[#DCE5EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-2">
              What We Do
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Two services, one goal: never lose a customer to a slow site or a missed call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1: Website Development */}
            <div className="card-corporate overflow-hidden flex flex-col justify-between">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100 border-b border-[#DCE5EF]">
                <Image
                  src="/images/service-web-dev.jpg"
                  alt="Relay bespoke website development and design studio setup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-emerald-700 border border-emerald-200 shadow-sm backdrop-blur-xs">
                    Available Now
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center font-bold border border-[#DCE5EF]">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102A43]">
                      Website Development
                    </h3>
                  </div>

                  <p className="text-[#66758A] leading-relaxed mb-6">
                    Modern, responsive, fast websites for small and medium-sized businesses — designed to build trust and turn visitors into qualified inquiries.
                  </p>

                  <ul className="space-y-3 mb-8 text-sm text-[#1B2738]">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                      <span>Custom bespoke design — no generic WordPress themes</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                      <span>Sub-second Core Web Vitals speed optimization</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                      <span>Integrated lead capture forms wired to your email</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#DCE5EF] flex items-center justify-between">
                  <Link
                    href="/services#web-dev"
                    className="text-sm font-semibold text-[#2878D0] hover:text-[#123B63] inline-flex items-center gap-1.5 group"
                  >
                    <span>About our web work</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/audit"
                    className="text-xs font-semibold text-[#66758A] hover:text-[#102A43]"
                  >
                    Start with a free audit
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2: Inbound AI Voice Agents */}
            <div className="card-corporate overflow-hidden flex flex-col justify-between">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100 border-b border-[#DCE5EF]">
                <Image
                  src="/images/service-voice-agent.jpg"
                  alt="Relay 24/7 inbound AI voice agents telecommunications command center"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#123B63] border border-[#DCE5EF] shadow-sm backdrop-blur-xs">
                    Roadmap Service
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-[#F3F7FC] text-[#123B63] flex items-center justify-center font-bold border border-[#DCE5EF]">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102A43]">
                      Inbound AI Voice Agents
                    </h3>
                  </div>

                  <p className="text-[#66758A] leading-relaxed mb-6">
                    Inbound AI agents that answer business calls, handle routine questions, capture leads, and support appointment booking — around the clock.
                  </p>

                  <ul className="space-y-3 mb-8 text-sm text-[#1B2738]">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                      <span>24/7 call answering with natural voice responses</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                      <span>Direct calendar integration for appointment booking</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                      <span>Seamless escalation & transfer to human staff</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#DCE5EF] flex items-center justify-between">
                  <Link
                    href="/services#ai-voice-agents"
                    className="text-sm font-semibold text-[#2878D0] hover:text-[#123B63] inline-flex items-center gap-1.5 group"
                  >
                    <span>About voice agents</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact?service=voice-agents"
                    className="text-xs font-semibold text-[#66758A] hover:text-[#102A43]"
                  >
                    Inquire about roadmap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE RELAY */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-2">
              Why Relay
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Engineering discipline, applied to your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-corporate p-8">
              <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-6 border border-[#DCE5EF]">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                Speed is a feature
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                Slow pages lose customers before they read a word. Every build targets Core Web Vitals best practices, optimized images, and minimal scripts — measured, not guessed.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-6 border border-[#DCE5EF]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                Lead capture built in
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                Forms, call handling, and booking flows designed to route every inquiry somewhere useful — not into a void. Verified directly in your inbox.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-6 border border-[#DCE5EF]">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                Modern engineering
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                Clean, maintainable code your future developers will thank you for. No proprietary lock-in. You own everything we build.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-6 border border-[#DCE5EF]">
                <FileCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                Honest by default
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                We label concept work as concept work and won&apos;t publish a metric we can&apos;t stand behind. Trust is the foundation of our partnership.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-6 border border-[#DCE5EF]">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                SEO fundamentals
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                Semantic HTML, OpenGraph tags, sitemaps, structured schema, and lightning-quick performance designed for top crawlability.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center mb-6 border border-[#DCE5EF]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                Built for phase two
              </h3>
              <p className="text-sm text-[#66758A] leading-relaxed">
                Automated audits, CRM synchronizations, and inbound AI voice answering are on our roadmap — your site is architected from day one to grow into them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI VOICE AGENT INTERACTIVE CALL SIMULATOR */}
      <section className="py-20 sm:py-28 bg-[#102A43] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute -top-32 right-10 w-[500px] h-[500px] bg-[#2878D0]/15 blur-[120px] pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2878D0]/20 px-3.5 py-1.5 text-xs font-semibold text-[#F3F7FC] border border-[#2878D0]/30 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-[#2878D0]" />
                <span>Simulated Interaction Pattern</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Hear how a missed call becomes a booked appointment.
              </h2>
              <p className="text-[#DCE5EF] text-base leading-relaxed">
                This simulated transcript demonstrates the kind of inbound flow our planned voice agents handle: answering routine patient or customer inquiries, checking live availability, and confirming the booking.
              </p>
              <div className="p-5 rounded-xl bg-[#123B63]/80 border border-[#DCE5EF]/20 text-xs text-[#DCE5EF] backdrop-blur-sm">
                <p className="font-semibold text-white mb-1">
                  Transparent Disclosure:
                </p>
                This is a scripted demonstration of the interaction pattern. Voice agents are an upcoming capability and not currently operational for production telephony.
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSimulateCall}
                  disabled={isPlayingAudio}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2878D0] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2878D0]/30 hover:bg-[#123B63] disabled:opacity-60 transition"
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
                {transcriptStep > 0 && !isPlayingAudio && (
                  <button
                    type="button"
                    onClick={resetSimulation}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Simulated Live Call Card */}
            <div className="lg:col-span-6 rounded-2xl border border-white/15 bg-[#123B63]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h4 className="font-bold text-white text-base">
                    Apex Dental Clinic — Inbound Call
                  </h4>
                  <p className="text-xs text-[#DCE5EF]">
                    Automated Inbound Lead Intake Simulation
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-emerald-300">Live Agent Flow</span>
                </div>
              </div>

              {/* Transcript Bubbles */}
              <div className="space-y-4 min-h-[280px] max-h-[380px] overflow-y-auto pr-2">
                {transcript.slice(0, transcriptStep === 0 ? 2 : transcriptStep).map((item, idx) => {
                  const isAgent = item.speaker === "Agent";
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isAgent ? "items-start" : "items-end"} animate-in fade-in duration-300`}
                    >
                      <span className="text-[11px] font-mono text-[#DCE5EF] mb-1">
                        {item.speaker}
                      </span>
                      <div
                        className={`rounded-2xl px-4.5 py-3 text-sm max-w-[85%] leading-relaxed ${
                          isAgent
                            ? "bg-[#102A43] text-white rounded-tl-xs border border-white/15 shadow-sm"
                            : "bg-[#2878D0] text-white rounded-tr-xs shadow-sm"
                        }`}
                      >
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>

              {transcriptStep === 0 && (
                <p className="mt-4 text-center text-xs text-[#DCE5EF]">
                  Click &apos;Play Sample Dental Call&apos; to watch the multi-turn interaction unfold.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED WORK PREVIEW */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#DCE5EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-2">
                Featured Work
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
                Concept projects, honestly labeled.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2878D0] hover:text-[#123B63] group"
            >
              <span>View all projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {portfolioData.slice(0, 2).map((item) => {
              const projectImage =
                item.id === "apex-dental"
                  ? "/images/project-apex-dental.jpg"
                  : "/images/project-vanguard-legal.jpg";

              return (
                <div
                  key={item.id}
                  className="card-corporate overflow-hidden flex flex-col justify-between"
                >
                  {/* High quality image showcase */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 border-b border-[#DCE5EF]">
                    <Image
                      src={projectImage}
                      alt={`${item.name} website demonstration showcase`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#102A43]/85 text-white backdrop-blur-xs shadow-xs">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 text-[#123B63] border border-[#DCE5EF] shadow-xs backdrop-blur-xs">
                        {item.conceptLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#102A43] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#66758A] leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#66758A] mb-2.5">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#1B2738]">
                          {item.keyFeatures.slice(0, 3).map((feat, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-[#DCE5EF] flex items-center justify-between">
                      <Link
                        href={`/products#${item.id}`}
                        className="text-sm font-semibold text-[#2878D0] hover:text-[#123B63] inline-flex items-center gap-1 group"
                      >
                        <span>Explore case breakdown</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/audit"
                        className="text-xs font-medium text-[#66758A] hover:text-[#102A43]"
                      >
                        Request similar
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR SIMPLE 4-STEP PROCESS */}
      <section className="py-20 sm:py-28 bg-[#F3F7FC] border-t border-[#DCE5EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2878D0] mb-2">
              How We Work
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              A process built on clarity, not mystery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-corporate p-7 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#2878D0] font-mono">01</span>
                <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] border border-[#DCE5EF] flex items-center justify-center text-[#123B63]">
                  <Search className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">Discover</h3>
              <p className="text-xs sm:text-sm text-[#66758A] leading-relaxed">
                A short call to understand your business, your customers, and what the website or voice agent must actually accomplish.
              </p>
            </div>

            <div className="card-corporate p-7 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#2878D0] font-mono">02</span>
                <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] border border-[#DCE5EF] flex items-center justify-center text-[#123B63]">
                  <Layers className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">Design</h3>
              <p className="text-xs sm:text-sm text-[#66758A] leading-relaxed">
                Structure and visual direction first — you approve the layout, responsive behavior, and copy approach before engineering starts.
              </p>
            </div>

            <div className="card-corporate p-7 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#2878D0] font-mono">03</span>
                <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] border border-[#DCE5EF] flex items-center justify-center text-[#123B63]">
                  <Code2 className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">Build & Test</h3>
              <p className="text-xs sm:text-sm text-[#66758A] leading-relaxed">
                Clean, fast code tested on real mobile and desktop devices. Performance, accessibility, and form delivery verified before launch.
              </p>
            </div>

            <div className="card-corporate p-7 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#2878D0] font-mono">04</span>
                <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] border border-[#DCE5EF] flex items-center justify-center text-[#123B63]">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">Launch & Improve</h3>
              <p className="text-xs sm:text-sm text-[#66758A] leading-relaxed">
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
