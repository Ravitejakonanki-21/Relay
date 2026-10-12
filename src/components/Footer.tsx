import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { Mail, Globe, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#DCE5EF] bg-[#F3F7FC] text-[#66758A]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Logo showBadge={true} />
            <p className="text-sm text-[#66758A] leading-relaxed max-w-sm">
              We design and build fast, conversion-focused websites and inbound AI voice agents for growing small and medium-sized businesses.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] hover:text-[#2878D0] transition"
              >
                <div className="h-8 w-8 rounded-lg bg-white border border-[#DCE5EF] flex items-center justify-center text-[#2878D0]">
                  <Mail className="h-4 w-4" />
                </div>
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services#web-dev"
                  className="hover:text-[#2878D0] transition flex items-center gap-1 group"
                >
                  <span>Website Development</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2878D0]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services#web-redesign"
                  className="hover:text-[#2878D0] transition flex items-center gap-1 group"
                >
                  <span>Website Redesign & Speed</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2878D0]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-voice-agents"
                  className="hover:text-[#2878D0] transition inline-flex items-center gap-2"
                >
                  <span>AI Voice Agents</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#123B63] border border-[#DCE5EF]">
                    Roadmap
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/audit"
                  className="text-[#2878D0] font-semibold hover:text-[#123B63] transition flex items-center gap-1"
                >
                  <span>Free Website Audit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="hover:text-[#2878D0] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#2878D0] transition">
                  Products & Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#2878D0] transition">
                  About Relay
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2878D0] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
              Legal & Trust
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#2878D0] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#2878D0] transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#2878D0] transition">
                  Cookie Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with geographic statement and copyright */}
        <div className="mt-14 pt-8 border-t border-[#DCE5EF] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#66758A]">
          <p>© {currentYear} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[#66758A]">
            <Globe className="h-3.5 w-3.5 text-[#2878D0]" />
            <span>{siteConfig.geographicServiceStatement}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
