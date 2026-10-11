import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 bg-slate-50/70 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Logo />
            <p className="text-sm text-slate-500 leading-relaxed">
              We build fast, professional websites and inbound AI voice agents for small and medium-sized businesses.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition"
              >
                <Mail className="h-4 w-4 text-blue-600" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#web-dev"
                  className="hover:text-blue-600 transition"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#web-redesign"
                  className="hover:text-blue-600 transition"
                >
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-voice-agents"
                  className="hover:text-blue-600 transition inline-flex items-center gap-1.5"
                >
                  <span>AI Voice Agents</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-slate-200/60 text-slate-600">
                    Roadmap
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/audit"
                  className="hover:text-blue-600 transition text-blue-600 font-medium"
                >
                  Free Website Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-blue-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-600 transition">
                  Cookie Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with geographic statement and copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span>{siteConfig.geographicServiceStatement}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
