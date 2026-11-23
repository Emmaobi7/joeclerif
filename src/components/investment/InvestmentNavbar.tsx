"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Menu, X, Shield, BarChart3, TrendingUp } from "lucide-react";

export function InvestmentNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSections = [
    { label: "Revenue Engines", href: "#section-engines" },
    { label: "Audience & Ads", href: "#section-audience" },
    { label: "Workforce", href: "#section-workforce" },
    { label: "Protection", href: "#section-protection" },
    { label: "Positioning", href: "#section-positioning" },
    { label: "Expansion", href: "#section-expansion" },
    { label: "Commercial Model", href: "#section-model" },
    { label: "ROI Simulator", href: "#section-calculator" },
    { label: "Governance", href: "#section-governance" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0d0804]/95 backdrop-blur-md border-b border-champagne-200/15 py-3.5 sm:py-4 shadow-2xl"
            : "bg-transparent border-b border-champagne-200/10 py-5 sm:py-6"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 2xl:px-24 flex items-center justify-between">
          {/* Brand & Breadcrumb back to Main Microsite */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-champagne-200/20 bg-shadow-darkest/70 hover:border-amber-glow/60 text-champagne-200/75 hover:text-amber-glow transition-all text-xs tracking-wider font-mono"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Back to Proposal</span>
            </Link>

            <div className="flex items-baseline gap-2 pl-2 border-l border-champagne-200/15">
              <span className="font-serif text-lg tracking-[0.25em] text-champagne-100 uppercase font-light">
                Joclarif
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-amber-glow uppercase font-semibold">
                Commercial Case
              </span>
            </div>
          </div>

          {/* Desktop Nav Anchors */}
          <nav className="hidden xl:flex items-center gap-6">
            {navSections.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.22em] text-champagne-200/65 hover:text-amber-glow font-light transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direct Portals & Action Pills */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#section-calculator"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-glow/60 bg-amber-glow/15 backdrop-blur-md text-[10px] tracking-[0.22em] uppercase text-amber-glow hover:bg-amber-glow hover:text-shadow-darkest font-semibold shadow-glow transition-all"
            >
              <TrendingUp className="w-3 h-3" />
              <span>Interactive ROI</span>
            </a>

            <Link
              href="/intelligence"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-champagne-200/20 bg-shadow-darkest/60 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-champagne-200/70 hover:border-amber-glow hover:text-white transition-all font-mono"
            >
              <span>Intelligence</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-champagne-200/80 hover:text-champagne-200 p-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0d0804]/98 border-b border-champagne-200/10 px-8 py-8 animate-fadeIn backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              {navSections.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-champagne-200/80 hover:text-amber-glow transition-colors py-1.5 font-light"
                >
                  <span className="font-serif text-sm">{item.label}</span>
                  <span className="text-[10px] font-mono text-amber-glow/70">&rarr;</span>
                </a>
              ))}
              <div className="pt-4 border-t border-champagne-200/10 space-y-2.5">
                <a
                  href="#section-calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-glow/60 bg-amber-glow/20 text-amber-glow font-semibold text-xs tracking-[0.2em] uppercase shadow-glow"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Launch ROI Calculator</span>
                </a>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-champagne-200/30 text-champagne-200 text-xs tracking-[0.2em] uppercase font-mono"
                >
                  <span>Return to Proposal</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
