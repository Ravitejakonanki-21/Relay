import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy draft for Relay digital services and forms.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Legal & Compliance Draft
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last updated: October 2026. This draft is subject to legal review and customization prior to production launch.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you submit an inquiry through our contact form or request a website audit through {siteConfig.companyName}, we collect the personal and business details you provide directly to us. This may include your name, business email address, company name, website domain URL, and any descriptive notes about your project.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. How We Use Submitted Information</h2>
            <p>
              Information submitted via our forms is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Conduct manual evaluation of your website for audit requests.</li>
              <li>Respond directly to your project inquiries and quote requests.</li>
              <li>Communicate regarding scheduling, deliverables, and service scopes.</li>
            </ul>
            <p>
              We do not sell, rent, or distribute your email address or business information to third-party advertisers or brokers under any circumstances.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Data Storage & Security</h2>
            <p>
              Submissions are stored securely and transmitted via encrypted TLS connections. Access is restricted to authorized engineers and team members responsible for service delivery.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Third-Party Services</h2>
            <p>
              We may utilize trusted transactional email delivery providers (such as Resend) and secure database hosting (such as Supabase or PostgreSQL) strictly to facilitate contact routing and record retention.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">5. Your Privacy Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information we hold about you. To submit a request, contact us at{" "}
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
