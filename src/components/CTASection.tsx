import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
      {/* Decorative gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {headline}
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        {/* Benefits pills */}
        {benefits && benefits.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 px-6 py-3.5 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
