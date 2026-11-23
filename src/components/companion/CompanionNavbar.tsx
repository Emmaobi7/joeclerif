"use client";

import React from "react";
import { ArrowLeft, Shield, Lock } from "lucide-react";

export function CompanionNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0804]/90 border-b border-champagne-200/10 backdrop-blur-xl">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-12 py-4 flex items-center justify-between gap-4">
        {/* Left Brand Identifier */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-champagne-200/15 bg-shadow-darkest text-xs font-mono text-champagne-200/70 hover:text-white hover:border-amber-glow transition-all"
            title="Return to Presentation"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Main Presentation</span>
          </a>

          <div className="flex items-baseline gap-2.5">
            <span className="font-serif text-lg tracking-[0.28em] text-champagne-200 uppercase font-light">
              Joclarif
            </span>
            <span className="text-[10px] font-mono tracking-widest text-amber-glow uppercase px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Companion
            </span>
          </div>
        </div>

        {/* Right Confidential Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-champagne-300/60 uppercase">
            <Lock className="w-3 h-3 text-amber-glow" />
            <span>Private Stakeholder Showcase</span>
          </div>
          <span className="text-[9px] font-mono tracking-widest text-amber-glow uppercase px-2.5 py-1 rounded-full border border-amber-glow/40 bg-amber-glow/10 shadow-glow">
            PRIVATE CONCEPT
          </span>
        </div>
      </div>
    </header>
  );
}
