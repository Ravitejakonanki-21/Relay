import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  benefits?: string[];
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = "Find out exactly what your website could do better.",
  subheadline = "Request a free audit. A human on our team reviews your site and emails you a prioritized list of improvements — no automated score, no obligations.",
  buttonText = "Get a Free Website Audit",
  buttonHref = "/audit",
  secondaryText = "Discuss a Custom Project",
  secondaryHref = "/contact",
  benefits = [
    "Delivered directly by email",
    "Reviewed by a real engineer",
    "Zero high-pressure sales pitch",
  ],
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#102A43] via-[#123B63] to-[#102A43] py-20 sm:py-28 text-white">
      {/* Decorative ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2878D0]/20 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F3F7FC] text-xs font-semibold uppercase tracking-wider mb-6">
          <Shield className="h-3.5 w-3.5 text-[#2878D0]" />
          <span>Zero Obligation · 100% Honest Review</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {headline}
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#DCE5EF] max-w-2xl mx-auto leading-relaxed font-normal">
          {subheadline}
        </p>

        {/* Benefits pills */}
        {benefits && benefits.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#F3F7FC]">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 bg-white/5 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#2878D0] flex-shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#2878D0] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#2878D0]/30 hover:bg-white hover:text-[#123B63] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878D0]"
          >
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-4 text-base font-semibold text-white hover:bg-white/15 hover:border-white/40 transition"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
