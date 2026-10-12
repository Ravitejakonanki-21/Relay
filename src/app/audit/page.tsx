"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Mail,
  Zap,
  Smartphone,
  Search,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

export default function AuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    websiteUrl: "",
    email: "",
    focus: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    // Quick client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      setLoading(false);
      return;
    }

    if (!formData.businessName.trim() || formData.businessName.trim().length < 2) {
      setErrorMessage("Please enter your business name.");
      setStatus("error");
      setLoading(false);
      return;
    }

    if (!formData.websiteUrl.trim()) {
      setErrorMessage("Please enter your website URL.");
      setStatus("error");
      setLoading(false);
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid business email.");
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit audit request.");
      }

      setStatus("success");
      setFormData({
        name: "",
        businessName: "",
        websiteUrl: "",
        email: "",
        focus: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
            <span>Free Website Audit</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102A43] leading-tight">
            Know exactly what your website is costing you.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#66758A] leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and website. A human engineer on our team reviews it manually and emails you a prioritized list of improvements.
          </p>
        </div>
      </section>

      {/* 2. MAIN AUDIT CONTENT */}
      <section className="py-20 sm:py-28 bg-[#F3F7FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="card-corporate bg-white p-8 sm:p-12 shadow-sm border border-[#DCE5EF]">
                {status === "success" ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="mx-auto h-16 w-16 rounded-full bg-[#F3F7FC] text-emerald-600 flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#102A43]">
                      Audit Request Received!
                    </h2>
                    <p className="text-base text-[#66758A] max-w-md mx-auto leading-relaxed">
                      Thank you. An engineer on our team will inspect your website across mobile performance, conversion hierarchy, and Core Web Vitals, and email your breakdown within 2 business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#123B63] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2878D0] transition shadow-sm"
                    >
                      Submit Another Audit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#102A43] tracking-tight">
                        Request Manual Review
                      </h2>
                      <p className="text-sm text-[#66758A] mt-1">
                        Zero obligation · 100% human engineer analysis
                      </p>
                    </div>

                    {/* Honeypot field */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="audit_hp">Do not fill this</label>
                      <input
                        id="audit_hp"
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {status === "error" && (
                      <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 flex items-start gap-3 text-rose-800 text-sm">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-rose-600" />
                        <div>
                          <p className="font-semibold">Unable to request audit</p>
                          <p className="mt-0.5 text-xs text-rose-700">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                      >
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Acme Dental"
                        className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                      />
                    </div>

                    {/* Website URL */}
                    <div>
                      <label
                        htmlFor="websiteUrl"
                        className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                      >
                        Website URL <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="websiteUrl"
                        name="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        placeholder="yourbusiness.com"
                        className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                      />
                    </div>

                    {/* Business Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                      >
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@yourbusiness.com"
                        className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                      />
                    </div>

                    {/* What should we focus on? */}
                    <div>
                      <label
                        htmlFor="focus"
                        className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                      >
                        What should we focus on? <span className="text-slate-400 lowercase font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="focus"
                        name="focus"
                        rows={4}
                        value={formData.focus}
                        onChange={handleChange}
                        placeholder="e.g. Our site feels slow on phones and we get few inquiries from it."
                        className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#2878D0] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#2878D0]/25 hover:bg-[#123B63] disabled:opacity-60 transition cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Submitting request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request My Free Audit</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-[#66758A]">
                      Your details are used only to prepare and deliver your audit. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Checklist & Delivery Expectations Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* What We Check */}
              <div className="card-corporate bg-white p-8 border border-[#DCE5EF]">
                <h2 className="text-lg font-bold text-[#102A43] tracking-tight mb-6">
                  What we check
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#DCE5EF]">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#102A43]">
                        Speed & Core Web Vitals signals
                      </h3>
                      <p className="text-xs text-[#66758A] mt-0.5">
                        LCP, CLS layout shifts, asset weight, and mobile throttle benchmarks.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#DCE5EF]">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#102A43]">
                        Mobile & responsive behavior
                      </h3>
                      <p className="text-xs text-[#66758A] mt-0.5">
                        Touch targets, readable font scaling, and smooth small-screen layout.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#DCE5EF]">
                      <Search className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#102A43]">
                        SEO fundamentals
                      </h3>
                      <p className="text-xs text-[#66758A] mt-0.5">
                        Title tags, meta descriptions, semantic headings, and search indexability.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#DCE5EF]">
                      <MousePointerClick className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#102A43]">
                        UX & conversion path review
                      </h3>
                      <p className="text-xs text-[#66758A] mt-0.5">
                        Clarity of calls-to-action, form friction, and customer trust signals.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#DCE5EF]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#102A43]">
                        AI-readiness for future voice agents
                      </h3>
                      <p className="text-xs text-[#66758A] mt-0.5">
                        Clarity of business hours, booking paths, and FAQ answers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* How Audits are Delivered */}
              <div className="card-corporate bg-white p-8 border border-[#DCE5EF]">
                <h2 className="text-lg font-bold text-[#102A43] tracking-tight mb-3">
                  How audits are delivered
                </h2>
                <p className="text-sm text-[#66758A] leading-relaxed">
                  Audits are reviewed by a person, not an automated generic script. We don&apos;t generate fake automated scores and we won&apos;t pretend a machine reviewed your site.
                </p>
                <p className="text-sm text-[#66758A] leading-relaxed mt-3">
                  Your request is sent to our engineering team, manually reviewed, and a prioritized action report comes straight back to your business email inbox.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#102A43] bg-[#F3F7FC] px-4 py-2.5 rounded-lg border border-[#DCE5EF]">
                  <Mail className="h-4 w-4 text-[#2878D0]" />
                  <span>Delivered by email — no account creation needed.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
