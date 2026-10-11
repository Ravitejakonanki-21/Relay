import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Information regarding cookie usage and privacy on Relay.",
};

export default function CookiesPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Privacy & Technical Disclosure
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Cookie Notice
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last updated: October 2026.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">What Cookies Do We Use?</h2>
            <p>
              {siteConfig.companyName} believes in privacy by design and lightweight engineering. We do not use third-party tracking cookies, invasive advertising beacons, or cross-site tracking scripts on this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Strictly Necessary Technical Storage</h2>
            <p>
              Our application may utilize local session storage strictly to manage security tokens, protect form submission flows against automated bot attacks, and maintain basic interface responsiveness. These technical cookies do not track you across other websites.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Managing Cookies</h2>
            <p>
              You can adjust your web browser settings to block or delete cookies at any time. Because we do not rely on tracking cookies, disabling cookies will not impact your ability to explore our services, inspect demonstration projects, or request website audits.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Questions?</h2>
            <p>
              If you have any questions about our cookie policies, feel free to contact us at{" "}
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
