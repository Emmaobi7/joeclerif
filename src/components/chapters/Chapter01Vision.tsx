"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Users,
  CalendarCheck,
  Globe2,
  Layers,
  Sparkles,
  Eye,
  Building,
  CreditCard,
  ChevronDown,
  Smartphone,
  Globe,
  Compass,
  CheckCircle2,
  Key,
} from "lucide-react";
import { ArchitecturalReveal } from "../3d/ArchitecturalReveal";
import { HeroCenterpiece3D } from "../3d/HeroCenterpiece3D";
import { Badge } from "../ui/Badge";
import { IMAGES } from "@/data/mockData";

export function Chapter01Vision() {
  const [activeTab, setActiveTab] = useState<"commercial" | "architectural">("commercial");

  const businessDrivers = [
    {
      icon: TrendingUp,
      title: "Direct Booking Economics",
      highlight: "Save 15–25% in Commissions",
      description:
        "By replacing reliance on external booking intermediaries with an owned direct portal, Joclarif captures 100% of guest room revenue while building a proprietary customer database.",
    },
    {
      icon: Users,
      title: "Wedding & Large Delegations",
      highlight: "High-Margin Room Blocks",
      description:
        "Guests arriving for grand family weddings in Zaria frequently request 10 to 20 rooms plus a banquet hall. A unified group engine transforms phone loops into immediate confirmed bookings.",
    },
    {
      icon: CalendarCheck,
      title: "Banquet & Event Synergy",
      highlight: "Unified Event + Room Packages",
      description:
        "Seamlessly bundle event hall hire with attendee room blocks, catering packages, and audiovisual arrangements under a single master coordination folio.",
    },
    {
      icon: Globe2,
      title: "Academic & Corporate Delegations",
      highlight: "ABU Zaria & Institutional Guests",
      description:
        "Position Joclarif as the pre-eminent hospitality choice for university visiting professors, convocation guests, research fellows, and corporate visitors seeking seamless digital reservation and invoicing.",
    },
  ];

  return (
    <section id="chapter-vision" className="relative w-full bg-[#0D0804] overflow-hidden border-b border-champagne-200/10">
      {/* 1. HERO VIEWPORT STAGE: DUAL-PLATFORM SHOWCASE (WEB + MOBILE APP) */}
      <div
        className="relative w-full min-h-[94vh] flex flex-col justify-between overflow-hidden select-none pt-24"
        style={{
          background: `
            radial-gradient(circle at 82% 12%, rgba(245, 184, 65, 0.42) 0%, rgba(74, 53, 32, 0.25) 42%, rgba(34, 22, 11, 0.96) 85%),
            linear-gradient(125deg, #2d1d0f 0%, #4a3520 48%, #22160b 100%)
          `,
        }}
      >
        <div className="sunbeams" aria-hidden="true" />

        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center px-6 sm:px-12 lg:px-16 2xl:px-24 max-w-[1780px] mx-auto w-full py-6 lg:py-0 gap-8">
          {/* Left Column: Eyebrow, Cormorant Title, Dual Platform Badges, Narrative & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:h-[78%] space-y-6 lg:space-y-0 lg:pl-2">
            <div className="space-y-2">
              <div className="text-[10px] tracking-[0.34em] uppercase text-champagne-200/70 leading-relaxed font-mono">
                JOCLARIF &bull; BEYOND THE STAY
              </div>

              {/* Dual Visual Labels (Web + Mobile App) */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-shadow-darkest/90 border border-champagne-200/25 text-[10px] font-mono text-champagne-200">
                  <Globe className="w-3 h-3 text-amber-glow" />
                  <span>Joclarif Digital Experience &mdash; Web</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-glow/15 border border-amber-glow/40 text-[10px] font-mono text-amber-glow shadow-glow">
                  <Smartphone className="w-3 h-3 text-amber-glow" />
                  <span>Joclarif Guest Experience &mdash; Mobile App</span>
                </span>
              </div>
            </div>

            <div className="relative my-auto py-2">
              <h1
                className="font-serif font-light text-5xl sm:text-7xl xl:text-8xl leading-[0.92] tracking-[0.06em] uppercase drop-shadow-[0_12px_40px_rgba(20,12,5,0.85)]"
                style={{
                  background: "linear-gradient(135deg, #FFF6DD 0%, #EFE0B9 32%, #F5B841 68%, #A87428 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(245, 184, 65, 0.22))",
                }}
              >
                JOCLARIF
                <br />
                <span className="italic font-extralight text-champagne-100">HOTEL</span>
              </h1>

              <span
                className="absolute right-[8%] top-[38%] text-amber-glow text-xl drop-shadow-[0_0_10px_rgba(245,184,65,0.85)] animate-pulse"
                aria-hidden="true"
              >
                &#10022;
              </span>

              <svg
                className="absolute -left-4 -bottom-4 w-[105%] h-[70px] pointer-events-none"
                viewBox="0 0 500 100"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 42 C 140 105, 360 95, 485 18"
                  stroke="url(#arcGradChapter1)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="arcGradChapter1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EFE0B9" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#F5B841" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#EFE0B9" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-ivory-warm/80 font-light leading-relaxed max-w-md">
                A connected digital hospitality experience, from discovering Joclarif on the web
                to experiencing every moment through a dedicated mobile application.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#chapter-mobile"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest text-[10px] tracking-[0.24em] uppercase font-semibold shadow-glow hover:opacity-95 transition-all"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Explore Mobile App</span>
                  <span>&rarr;</span>
                </a>
                <a
                  href="#chapter-ecosystem"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-champagne-200/30 bg-shadow-main/30 backdrop-blur-md text-champagne-200 text-[10px] tracking-[0.22em] uppercase hover:border-amber-glow hover:bg-amber-glow/10 transition-all font-mono"
                >
                  <span>Web Platform</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center Column: Moving 3D Interactive Centerpiece */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-end h-full pt-6 lg:pt-0 pb-8 lg:pb-16">
            <div className="relative z-10 w-full max-w-[440px] filter drop-shadow-[-14px_18px_28px_rgba(20,12,5,0.65)]">
              <HeroCenterpiece3D />
            </div>

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

          {/* Right Column: Editorial Rail */}
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-between items-end h-[78%] text-right z-20 pr-2">
            <div className="text-[9px] tracking-[0.28em] text-champagne-200/60 uppercase leading-relaxed font-mono">
              DUAL-PLATFORM
              <br />
              HOSPITALITY SUITE
              <br />
              WEB + MOBILE APP
            </div>

            <a
              href="#chapter-mobile"
              className="w-28 h-28 p-1.5 border border-champagne-200/30 bg-shadow-main/40 backdrop-blur-md relative cursor-pointer hover:border-amber-glow transition-all group"
              title="Inspect 3D Mobile App Experience"
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-glow/90 via-[#9c6e2b] to-[#3b2816] flex flex-col items-center justify-center p-2 text-center overflow-hidden">
                <Smartphone className="w-6 h-6 text-champagne-100 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[8px] tracking-[0.2em] uppercase text-champagne-100 font-mono opacity-90 group-hover:opacity-100">
                  Mobile App
                </span>
              </div>
            </a>

            <div className="font-serif text-sm tracking-[0.24em] text-champagne-200/80">
              01 / 06
            </div>
          </div>
        </div>

        {/* Reflective Water Horizon */}
        <div className="relative w-full z-10 pointer-events-none">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[380px] h-[18px] bg-radial from-amber-glow/45 to-transparent blur-[5px]" />
          <div
            className="w-full h-[12vh] min-h-[70px] border-t border-champagne-200/20 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(245, 184, 65, 0.16) 0%, rgba(74, 53, 32, 0.55) 28%, rgba(26, 16, 8, 0.95) 100%)",
            }}
          >
            <a
              href="#vision-explorer"
              className="pointer-events-auto group flex flex-col items-center gap-1.5 text-champagne-200/50 hover:text-amber-glow transition-colors cursor-pointer"
            >
              <span className="text-[9px] tracking-[0.3em] uppercase font-mono">
                Explore Vision &amp; Economics
              </span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-glow/80" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. SPATIAL COMPRESSION: INTEGRATED VISION EXPLORER */}
      <div id="vision-explorer" className="py-20 px-6 sm:px-12 lg:px-16 2xl:px-24 max-w-[1780px] mx-auto w-full relative z-10 space-y-12">
        {/* Toggle between Commercial Rationale and Architectural Silhouette */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="amber">Vision Exploration</Badge>
              <span className="text-[10px] font-mono text-champagne-200 uppercase tracking-wider">
                Progressive Disclosure
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-ivory-warm">
              The Strategic Transformation of Joclarif
            </h2>
          </div>

          <div className="inline-flex p-1.5 rounded-2xl bg-shadow-main border-hairline shadow-subtle text-xs">
            <button
              onClick={() => setActiveTab("commercial")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "commercial"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Commercial Economics</span>
            </button>
            <button
              onClick={() => setActiveTab("architectural")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "architectural"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>3D Architectural Massing</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Commercial Drivers & Contrast */}
        {activeTab === "commercial" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Quick 4-Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessDrivers.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-shadow-main/80 border-hairline hover:border-amber-glow/40 transition-all flex flex-col justify-between shadow-subtle"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-shadow-darkest border-hairline flex items-center justify-center text-amber-glow">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-champagne-300/80 bg-shadow-darkest px-2 py-0.5 rounded border-hairline">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg text-ivory-warm font-normal mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] font-semibold text-amber-glow uppercase tracking-wider mb-2 font-mono">
                        {item.highlight}
                      </p>
                      <p className="text-xs text-ivory-warm/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strategic Contrast Card: Side-by-side comparison */}
            <div className="rounded-3xl border-hairline bg-gradient-to-br from-shadow-main to-shadow-darkest p-6 sm:p-10 shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-glow font-semibold font-mono block">
                    Strategic Business Case
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal leading-tight">
                    From Fragmented Paper &amp; Phone Bookings to an Owned Commercial Asset
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-warm/75 leading-relaxed font-light">
                    Wedding planners, corporate delegations, and visiting university families currently rely on manual bank transfer slips and telephone room holds. This dual-platform digital ecosystem unifies inventory, direct bookings, and in-stay folios into one continuous platform.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-shadow-darkest border border-red-500/20 text-xs">
                      <p className="text-[10px] uppercase font-mono font-semibold text-red-400 mb-1.5">
                        Current Friction
                      </p>
                      <ul className="text-[11px] text-ivory-warm/60 space-y-1 list-disc list-inside font-light">
                        <li>15–25% commission lost to external portals</li>
                        <li>Phone loops for 10+ room wedding quotes</li>
                        <li>Lobby queues during convocation &amp; events</li>
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-shadow-darkest border border-amber-glow/30 text-xs">
                      <p className="text-[10px] uppercase font-mono font-semibold text-amber-glow mb-1.5">
                        Proposed Joclarif Advantage
                      </p>
                      <ul className="text-[11px] text-champagne-200 space-y-1 list-disc list-inside font-light">
                        <li>100% direct revenue capture on website</li>
                        <li>Dedicated mobile companion for in-stay guests</li>
                        <li>Pre-arrival digital check-in in under 60s</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border-hairline shadow-subtle">
                    <Image
                      src={IMAGES.lobby}
                      alt="Atmospheric reception lounge"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-transparent to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 text-center">
                      <span className="text-[10px] text-ivory-warm/70 bg-shadow-darkest/90 px-3 py-1 rounded-full border-hairline backdrop-blur-md">
                        Atmospheric Inspiration &bull; Proposed Reception Lounge
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 3D Architectural Massing */}
        {activeTab === "architectural" && (
          <div className="animate-fadeIn">
            <ArchitecturalReveal />
          </div>
        )}
      </div>
    </section>
  );
}
