"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DCE5EF] bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition focus:outline-none"
          aria-label="Relay Home"
        >
          <Logo showBadge={true} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/products" && pathname === "/portfolio");

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#102A43] ${
                  isActive
                    ? "text-[#2878D0] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2878D0] after:rounded-full"
                    : "text-[#66758A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Audit CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/audit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#123B63] px-4.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2878D0] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878D0]"
          >
            <ShieldCheck className="h-4 w-4 text-[#F3F7FC]" />
            <span>Free Website Audit</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#102A43] hover:bg-[#F3F7FC] border border-[#DCE5EF] focus:outline-none focus:ring-2 focus:ring-[#2878D0]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DCE5EF] bg-white px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/products" && pathname === "/portfolio");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                    isActive
                      ? "bg-[#F3F7FC] text-[#2878D0] font-semibold"
                      : "text-[#1B2738] hover:bg-[#F3F7FC] hover:text-[#102A43]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#DCE5EF]">
            <Link
              href="/audit"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2878D0] px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#123B63] transition"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Get Free Website Audit</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
