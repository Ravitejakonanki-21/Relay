"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your name (at least 2 characters).");
      setStatus("error");
      setLoading(false);
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      setLoading(false);
      return;
    }

    if (!formData.service) {
      setErrorMessage("Please select the service you are interested in.");
      setStatus("error");
      setLoading(false);
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage("Please tell us a little bit about what you're trying to build or improve.");
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F7FC] border border-[#DCE5EF] text-[#123B63] text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#2878D0]" />
            <span>Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#102A43] leading-tight">
            What are you trying to improve or build?
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#66758A] leading-relaxed">
            Tell us about your project, goals, or current website bottlenecks. We respond with thoughtful feedback and clear pricing.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT CONTENT: TWO-COLUMN LAYOUT */}
      <section className="py-20 sm:py-28 bg-[#F3F7FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Expectations */}
            <div className="lg:col-span-5 space-y-8">
              {/* Supporting Consultation Card with Photography */}
              <div className="card-corporate overflow-hidden bg-white shadow-sm border border-[#DCE5EF]">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 border-b border-[#DCE5EF]">
                  <Image
                    src="/images/contact-consultation.jpg"
                    alt="Relay engineering consultation desk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#102A43]/90 text-white backdrop-blur-xs">
                      Direct Communication
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h2 className="text-xl font-bold text-[#102A43] tracking-tight">
                    Direct communication with engineers.
                  </h2>
                  <p className="text-sm text-[#66758A] leading-relaxed">
                    No pushy sales reps or high-pressure pitches. Every message is reviewed directly by our technical team to evaluate feasibility, timing, and realistic scope.
                  </p>
                </div>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                <div className="card-corporate p-6 bg-white flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 border border-[#DCE5EF]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#66758A]">
                      Email Us Directly
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-base font-bold text-[#123B63] hover:text-[#2878D0] transition mt-0.5 block"
                    >
                      {siteConfig.contactEmail}
                    </a>
                    <p className="text-xs text-[#66758A] mt-1">
                      Replies arrive within 24 business hours.
                    </p>
                  </div>
                </div>

                {siteConfig.phoneDisplay && siteConfig.phoneHref && (
                  <div className="card-corporate p-6 bg-white flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 border border-[#DCE5EF]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#66758A]">
                        Telephone Inquiries
                      </h3>
                      <a
                        href={siteConfig.phoneHref}
                        className="text-base font-bold text-[#123B63] hover:text-[#2878D0] transition mt-0.5 block"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      <p className="text-xs text-[#66758A] mt-1">
                        Monday – Friday, standard business hours.
                      </p>
                    </div>
                  </div>
                )}

                <div className="card-corporate p-6 bg-white flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-[#F3F7FC] text-[#2878D0] flex items-center justify-center flex-shrink-0 border border-[#DCE5EF]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#66758A]">
                      Typical Turnaround
                    </h3>
                    <p className="text-sm font-semibold text-[#102A43] mt-0.5">
                      2 to 4 weeks depending on scope
                    </p>
                    <p className="text-xs text-[#66758A] mt-1">
                      Scoped proposal and clear deliverable timeline provided upfront.
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Audit Helper Box */}
              <div className="card-corporate p-6 bg-white border border-[#DCE5EF]">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-4 w-4 text-[#2878D0]" />
                  <h3 className="text-sm font-bold text-[#102A43]">Looking for an audit instead?</h3>
                </div>
                <p className="text-xs text-[#66758A] leading-relaxed mb-4">
                  If you already have a website and want our team to review its speed, layout, and SEO before booking a project, request our free manual audit.
                </p>
                <Link
                  href="/audit"
                  className="text-xs font-semibold text-[#2878D0] hover:text-[#123B63] inline-flex items-center gap-1 group"
                >
                  <span>Request Free Website Audit</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="card-corporate bg-white p-8 sm:p-12 shadow-sm border border-[#DCE5EF]">
                {status === "success" ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="mx-auto h-16 w-16 rounded-full bg-[#F3F7FC] text-emerald-600 flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#102A43]">
                      Message Received!
                    </h2>
                    <p className="text-base text-[#66758A] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. A team member will review your project details and follow up directly via email within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#123B63] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2878D0] transition shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#102A43] tracking-tight">
                        Send Project Inquiry
                      </h2>
                      <p className="text-sm text-[#66758A] mt-1">
                        Fill out the details below and we&apos;ll get back to you promptly.
                      </p>
                    </div>

                    {/* Honeypot field for bot prevention */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="hp_field">Do not fill this</label>
                      <input
                        id="hp_field"
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
                          <p className="font-semibold">Unable to submit message</p>
                          <p className="mt-0.5 text-xs text-rose-700">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                        >
                          Name <span className="text-rose-500">*</span>
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

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                        >
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                        >
                          Company <span className="text-slate-400 lowercase font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                        />
                      </div>

                      {/* Service Needed */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                        >
                          Service Needed <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] bg-white focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition"
                        >
                          <option value="">Select a service…</option>
                          <option value="Website development">Website development</option>
                          <option value="Website redesign">Website redesign</option>
                          <option value="Inbound AI voice agents">Inbound AI voice agents</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2"
                      >
                        Project Details & Goals <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're trying to build, key timeline requirements, or existing website links..."
                        className="w-full rounded-xl border border-[#DCE5EF] px-4 py-3.5 text-sm text-[#1B2738] placeholder-slate-400 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0] transition bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#2878D0] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#2878D0]/25 hover:bg-[#123B63] disabled:opacity-60 transition cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
