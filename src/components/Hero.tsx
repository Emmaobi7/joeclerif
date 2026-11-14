"use client";

import React from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { HeroCenterpiece3D } from "./3d/HeroCenterpiece3D";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#22160B] select-none pt-24"
      style={{
        background: `
          radial-gradient(circle at 82% 12%, rgba(245, 184, 65, 0.42) 0%, rgba(74, 53, 32, 0.25) 42%, rgba(34, 22, 11, 0.96) 85%),
          linear-gradient(125deg, #2d1d0f 0%, #4a3520 48%, #22160b 100%)
        `,
      }}
    >
      {/* Volumetric Breathing Sunbeams from Inspo */}
      <div className="sunbeams" aria-hidden="true" />

      {/* Main Editorial 3-Column Stage (Full Bleed Luxury Proportions) */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center px-6 sm:px-12 lg:px-16 2xl:px-24 max-w-[1780px] mx-auto w-full py-6 lg:py-0">
        {/* Left Column: Eyebrow, Cormorant Title, Orbital Arc, CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between lg:h-[72%] space-y-8 lg:space-y-0 lg:pl-2">
          {/* Eyebrow */}
          <div className="text-[10px] tracking-[0.34em] uppercase text-champagne-200/65 leading-relaxed font-mono">
            A SANCTUARY OF FORM &amp; HOSPITALITY
            <br />
            <span className="text-amber-glow/90">ZARIA, NIGERIA &bull; 2026 EDITION</span>
          </div>

          {/* Headline Wrap with Sparkle & Orbital Arc */}
          <div className="relative my-auto py-4 overflow-visible">
            <h1 className="font-serif font-light text-5xl sm:text-7xl xl:text-8xl leading-[0.92] tracking-[0.06em] text-champagne-200 uppercase drop-shadow-[0_12px_40px_rgba(34,22,11,0.65)]">
              JOCLARIF
              <br />
              <span className="italic font-extralight text-champagne-100">HOTEL</span>
            </h1>

            {/* Glowing Star Accent */}
            <span
              className="absolute right-[8%] top-[38%] text-amber-glow text-xl drop-shadow-[0_0_10px_rgba(245,184,65,0.85)] animate-pulse"
              aria-hidden="true"
            >
              &#10022;
            </span>

            {/* Orbital Arc SVG */}
            <svg
              className="absolute -left-4 -bottom-5 w-[105%] h-[80px] pointer-events-none"
              viewBox="0 0 500 100"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 42 C 140 105, 360 95, 485 18"
                stroke="url(#arcGradJoclarif)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="arcGradJoclarif" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EFE0B9" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#F5B841" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#EFE0B9" stopOpacity="0.15" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Subtitle statement & CTA Pill */}
          <div className="space-y-6">
            <p className="text-xs sm:text-sm text-ivory-warm/75 font-light leading-relaxed max-w-md">
              A connected hospitality experience bringing reservations, guest services,
              and hotel operations into one intelligent digital ecosystem.
            </p>

            <div>
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-3.5 px-7 py-3.5 rounded-full border border-champagne-200/35 bg-shadow-main/30 backdrop-blur-md text-champagne-200 text-[10px] tracking-[0.28em] uppercase hover:border-amber-glow hover:bg-amber-glow/15 hover:shadow-glow transition-all"
              >
                <span>Explore Ecosystem</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Center Column: Moving 3D Interactive Architectural Centerpiece & Water Reflection */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-end h-full pt-6 lg:pt-0 pb-8 lg:pb-16">
          {/* Interactive 3D Architectural Pavilion Canvas */}
          <div className="relative z-10 w-full max-w-[420px] filter drop-shadow-[-14px_18px_28px_rgba(20,12,5,0.65)]">
            <HeroCenterpiece3D />
          </div>

          {/* Water Surface Reflection Effect below 3D object */}
          <div
            className="absolute -bottom-8 w-full max-w-[360px] h-24 pointer-events-none opacity-35 blur-[3px] z-0 flex items-center justify-center"
            style={{
              transform: "scaleY(-0.6) skewX(-4deg)",
              maskImage: "linear-gradient(to top, rgba(0,0,0,0.85), transparent 85%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.85), transparent 85%)",
            }}
          >
            <div className="w-48 h-16 rounded-full bg-amber-glow/40 blur-xl" />
          </div>
        </div>

        {/* Right Editorial Rail */}
        <div className="hidden lg:flex lg:col-span-2 flex-col justify-between items-end h-[72%] text-right z-20 pr-2">
          <div className="text-[9px] tracking-[0.28em] text-champagne-200/60 uppercase leading-relaxed font-mono">
            DIGITAL FOUNDATION
            <br />
            HOSPITALITY ARCHITECTURE
            <br />
            SERIES 2026
          </div>

          <a
            href="#pavilion"
            className="w-28 h-28 p-1.5 border border-champagne-200/30 bg-shadow-main/40 backdrop-blur-md relative cursor-pointer hover:border-amber-glow transition-all group"
            title="Inspect 3D Spatial Pavilion"
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-glow/90 via-[#9c6e2b] to-[#3b2816] flex flex-col items-center justify-center p-2 text-center overflow-hidden">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <polygon points="10,85 50,15 90,85" fill="#EFE0B9" opacity="0.85" />
                <polygon points="50,15 90,85 52,65" fill="#5E3A10" opacity="0.7" />
              </svg>
              <span className="text-[8px] tracking-[0.2em] uppercase text-champagne-100 font-mono mt-1 opacity-90 group-hover:opacity-100">
                3D Pavilion
              </span>
            </div>
          </a>

          <div className="font-serif text-sm tracking-[0.24em] text-champagne-200/80">
            01 / 05
          </div>
        </div>
      </div>

      {/* Reflective Water Horizon & Shimmer Plane */}
      <div className="relative w-full z-10 pointer-events-none">
        {/* Shimmer light bar */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[380px] h-[18px] bg-radial from-amber-glow/45 to-transparent blur-[5px]" />

        {/* Water surface line */}
        <div
          className="w-full h-[14vh] min-h-[90px] border-t border-champagne-200/20 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(245, 184, 65, 0.16) 0%, rgba(74, 53, 32, 0.55) 28%, rgba(26, 16, 8, 0.95) 100%)",
          }}
        >
          <a
            href="#opportunity"
            className="pointer-events-auto group flex flex-col items-center gap-1.5 text-champagne-200/50 hover:text-amber-glow transition-colors cursor-pointer"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase font-mono">
              Begin Journey
            </span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-glow/80" />
          </a>
        </div>
      </div>
    </section>
  );
}
