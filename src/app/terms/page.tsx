import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service draft for Relay digital agency engagements.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Legal & Compliance Draft
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last updated: October 2026. This draft is provided for review and must be verified by legal counsel prior to formal business execution.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of {siteConfig.companyName} (&quot;Relay&quot;), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the site or submitting requests.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Service Descriptions & Scopes</h2>
            <p>
              {siteConfig.companyName} provides web design, website development, website performance optimization, and related consulting services. All custom client engagements are governed by separate, mutually signed Statements of Work (SOW) or written proposals specifying exact deliverables, project milestones, pricing, and timelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Free Website Audits</h2>
            <p>
              Our free website audit is an informational, non-binding assessment provided as a courtesy to prospective business clients. The audit does not constitute a warranty or guarantee of specific search engine rankings, visitor conversions, or business revenues.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Intellectual Property & Ownership</h2>
            <p>
              Upon receipt of final payment for completed client engagements, clients retain full ownership of the bespoke website source code, visual designs, and copy created specifically for their business, subject to third-party open-source licenses where applicable.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">5. Contact Information</h2>
            <p>
              For legal inquiries regarding these terms, please email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">
                {siteConfig.contactEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
