"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dual-Platform Presentation Chapters per design/prompt4.txt
  const navLinks = [
    { num: "01", label: "Vision", href: "#chapter-vision" },
    { num: "02", label: "Mobile App", href: "#chapter-mobile" },
    { num: "03", label: "Ecosystem", href: "#chapter-ecosystem" },
    { num: "04", label: "Experience", href: "#chapter-demos" },
    { num: "05", label: "Intelligence", href: "#chapter-intelligence" },
    { num: "06", label: "Roadmap", href: "#chapter-roadmap" },
  ];

  return (
    <>
      {/* Minimalist luxury navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0d0804]/90 backdrop-blur-md border-b border-champagne-200/10 py-4 sm:py-5"
            : "bg-transparent border-b border-champagne-200/10 py-5 sm:py-6"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 2xl:px-24 flex items-center justify-between">
          {/* Minimalist Brand Mark */}
          <a href="#chapter-vision" className="flex items-center gap-3 group text-decoration-none">
            <svg
              width="22"
              height="16"
              viewBox="0 0 24 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-amber-glow group-hover:text-champagne-200 transition-colors"
            >
              <path d="M2 12C6 12 8 6 12 6C16 6 18 12 22 12" />
              <path d="M5 15C8 15 10 11 12 11C14 11 16 15 19 15" opacity="0.55" />
            </svg>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg tracking-[0.32em] text-champagne-200 uppercase font-light">
                Joclarif
              </span>
              <span className="text-[9px] tracking-[0.25em] text-ivory-warm/40 uppercase hidden sm:inline font-mono">
                Zaria
              </span>
            </div>
          </a>

          {/* Curated, Widely Spaced Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-champagne-200/65 hover:text-champagne-200 font-light transition-colors"
              >
                <span className="text-[9px] font-mono text-amber-glow/60 group-hover:text-amber-glow transition-colors">
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Sleek, Restrained CTA Pill & Direct Platform Links (Intelligence & Companion) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/intelligence"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-amber-glow/60 bg-amber-glow/15 backdrop-blur-md text-[10px] tracking-[0.22em] uppercase text-amber-glow hover:bg-amber-glow hover:text-shadow-darkest font-semibold shadow-glow transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-glow animate-pulse" />
              <span>Intelligence</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="/companion"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-champagne-200/35 bg-[#22160b]/40 backdrop-blur-md text-[10px] tracking-[0.22em] uppercase text-champagne-200 hover:border-amber-glow hover:bg-amber-glow/15 hover:text-amber-glow font-medium transition-all"
            >
              <span>Companion</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="#chapter-roadmap"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-champagne-200/20 bg-shadow-darkest/60 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-champagne-200/80 hover:border-amber-glow hover:text-white transition-all"
            >
              <span>Executive Brief</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden">
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

        {/* Quiet Mobile Overlay Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d0804]/98 border-b border-champagne-200/10 px-8 py-8 animate-fadeIn backdrop-blur-xl">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-champagne-200/80 hover:text-amber-glow transition-colors py-1 font-light"
                >
                  <span className="font-serif text-sm">{link.label}</span>
                  <span className="text-[10px] font-mono text-amber-glow/70">Chapter {link.num}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-champagne-200/10 space-y-2.5">
                <a
                  href="/intelligence"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-glow/60 bg-amber-glow/15 text-amber-glow font-semibold text-xs tracking-[0.2em] uppercase shadow-glow"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-glow animate-pulse" />
                  <span>EXPLORE J O C L A R I F INTELLIGENCE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/companion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-champagne-200/35 bg-[#22160b]/50 text-champagne-200 font-semibold text-xs tracking-[0.2em] uppercase hover:border-amber-glow hover:text-amber-glow transition-all"
                >
                  <span>J O C L A R I F COMPANION</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#chapter-roadmap"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-[0.2em] uppercase"
                >
                  <span>Executive Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
