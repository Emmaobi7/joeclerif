"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Globe,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  CheckCircle2,
  Bell,
  MessageSquare,
  Key,
  Compass,
  Repeat,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { Smartphone3DShowcase, AppScreenKey } from "../3d/Smartphone3DShowcase";
import { IMAGES } from "@/data/mockData";

export function Chapter02MobileApp() {
  const [activeTab, setActiveTab] = useState<"phone" | "comparison" | "flow">("phone");
  const [selectedMobileScreen, setSelectedMobileScreen] = useState<AppScreenKey>("home");

  const webCapabilities = [
    { name: "Public Hotel Discovery", desc: "First impressions, architectural photo gallery, location in Zaria" },
    { name: "Real-time Direct Bookings", desc: "Transparent room rates, instant checkout without OTA cuts" },
    { name: "Grand Wedding & Group Quotes", desc: "Request 10–20 room blocks + banquet hall packages" },
    { name: "Conversational Booking Co-Pilot", desc: "Natural language inquiries for guests browsing on desktop or web" },
    { name: "Event & Banquet Floorplans", desc: "Visual capacity layouts for Grand Savannah Banquet Hall" },
    { name: "Accessible Inquiries & Contact", desc: "Direct WhatsApp link, email, phone, and location directions" },
  ];

  const mobileCapabilities = [
    { name: "Digital Room Key Access", desc: "Tap smartphone at room door via NFC / secure digital key" },
    { name: "Contactless Pre-Check-in", desc: "Scan passport or NIN prior to arrival under NDPR compliance" },
    { name: "Persistent Guest Messaging", desc: "Always-on direct chat thread with front desk and executive butler" },
    { name: "Real-time Push Notifications", desc: "Room readiness alerts, banquet schedules, and transit reminders" },
    { name: "In-Room Dining & Services", desc: "Order meals, extra linens, or late checkouts directly from bed" },
    { name: "Personalized AI Concierge", desc: "Continuous 24/7 assistance in Hausa, French, and English" },
  ];

  const journeyFlow = [
    {
      step: "01",
      channel: "Web Experience",
      title: "Discovery & Direct Booking",
      desc: "Guest finds Joclarif online, inspects 3D room suites, and completes direct reservation with instant Paystack/transfer receipt.",
      tag: "High Conversion",
    },
    {
      step: "02",
      channel: "App Install & Prep",
      title: "Mobile Pre-Arrival Check-in",
      desc: "Guest installs the lightweight Joclarif mobile app. 24 hours prior to arrival, passport details are verified with zero paperwork.",
      tag: "Frictionless Prep",
    },
    {
      step: "03",
      channel: "In-Stay Companion",
      title: "Lobby Bypass & In-Stay Services",
      desc: "Guest collects digital key in under 60 seconds. Orders dinner, chats with the concierge in Hausa, and requests housekeeping.",
      tag: "Deep Engagement",
    },
    {
      step: "04",
      channel: "Relationship Continuity",
      title: "Express Checkout & Re-booking",
      desc: "One-tap digital folio settlement. The app preserves guest preferences, ensuring 100% direct re-bookings for future visits to Zaria.",
      tag: "Zero OTA Commission",
    },
  ];

  return (
    <section id="chapter-mobile" className="py-24 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric diagonal illumination */}
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 relative z-10 space-y-12">
        {/* Header & Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-champagne-200/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="amber">Chapter 02 &bull; Dedicated Mobile App</Badge>
              <span className="text-[10px] font-mono text-champagne-200/60 uppercase tracking-widest">
                Dual-Platform Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory-warm font-normal tracking-tight">
              The Personal Guest Companion
            </h2>
            <p className="text-xs sm:text-sm text-ivory-warm/70 font-light mt-2 max-w-2xl leading-relaxed">
              While the website attracts and converts visitors, the dedicated Joclarif mobile application
              delivers a deeper, continuous, and personalized guest experience before, during, and after the stay.
            </p>
          </div>

          {/* 3 Presentation Modes Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-shadow-main border-hairline shadow-subtle text-xs self-start lg:self-end">
            <button
              onClick={() => setActiveTab("phone")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "phone"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>3D Phone Showcase</span>
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "comparison"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Web vs. Mobile</span>
            </button>
            <button
              onClick={() => setActiveTab("flow")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "flow"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Repeat className="w-3.5 h-3.5" />
              <span>Connected Guest Flow</span>
            </button>
          </div>
        </div>

        {/* MODE 1: 3D INTERACTIVE SMARTPHONE SHOWCASE */}
        {activeTab === "phone" && (
          <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main/80 to-shadow-darkest p-6 sm:p-10 shadow-luxury animate-fadeIn">
            <Smartphone3DShowcase
              initialScreen={selectedMobileScreen}
              onScreenChange={(s) => setSelectedMobileScreen(s)}
            />
          </div>
        )}

        {/* MODE 2: WEB VS. MOBILE DUAL-PLATFORM COMPARISON */}
        {activeTab === "comparison" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Visual Header Banner */}
            <div className="p-6 rounded-2xl bg-shadow-main/80 border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider block">
                  Strategic Product Positioning
                </span>
                <h4 className="text-xl font-serif text-ivory-warm font-normal">
                  Two Distinct Roles. One Synchronized Engine.
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light">
                  The website attracts and converts the public; the mobile application accompanies the guest personally throughout their journey.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shadow-darkest border-hairline text-xs text-champagne-200 font-mono shrink-0">
                <Shield className="w-3.5 h-3.5 text-amber-glow" />
                <span>Zero Double-Data Entry</span>
              </div>
            </div>

            {/* Side-by-Side Dual Platform Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: The Web Experience */}
              <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-6 sm:p-8 shadow-luxury space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-champagne-200/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-shadow-darkest border border-champagne-200/20 flex items-center justify-center text-amber-glow">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow/90 block">
                        Public Flagship
                      </span>
                      <h4 className="text-xl font-serif text-ivory-warm font-normal">
                        Joclarif Web Experience
                      </h4>
                    </div>
                  </div>
                  <Badge variant="amber">Desktop &amp; Mobile Web</Badge>
                </div>

                <p className="text-xs text-ivory-warm/75 font-light leading-relaxed">
                  The primary digital storefront engineered for discovery, high conversion, and frictionless direct booking. Requires zero download.
                </p>

                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-200/60 block">
                    Core Web Responsibilities
                  </span>
                  {webCapabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-shadow-darkest/90 border-hairline flex items-start gap-3 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-champagne-200/60 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-ivory-warm">{cap.name}</span>
                        <p className="text-[11px] text-ivory-warm/60 font-light mt-0.5">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-shadow-darkest/60 border-hairline text-[11px] text-ivory-warm/60 font-light italic">
                  * Accessible from any browser worldwide, optimized for low-bandwidth Nigerian mobile connections.
                </div>
              </div>

              {/* Right Column: The Mobile Experience */}
              <div className="rounded-3xl border border-amber-glow/40 bg-gradient-to-b from-shadow-main to-shadow-darkest p-6 sm:p-8 shadow-luxury space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-champagne-200/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-glow/15 border border-amber-glow/40 flex items-center justify-center text-amber-glow">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow block">
                        Resident Companion
                      </span>
                      <h4 className="text-xl font-serif text-ivory-warm font-normal">
                        Joclarif Mobile App
                      </h4>
                    </div>
                  </div>
                  <Badge variant="amber">iOS &bull; Android App</Badge>
                </div>

                <p className="text-xs text-ivory-warm/75 font-light leading-relaxed">
                  The personalized in-stay companion. Stays installed on the guest&apos;s phone, unlocking digital room keys, instant concierge, and push notifications.
                </p>

                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow block">
                    Advanced Mobile Capabilities
                  </span>
                  {mobileCapabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-shadow-darkest/90 border border-amber-glow/20 flex items-start gap-3 text-xs"
                    >
                      <Sparkles className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-ivory-warm">{cap.name}</span>
                        <p className="text-[11px] text-ivory-warm/60 font-light mt-0.5">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-amber-glow/10 border border-amber-glow/25 text-[11px] text-champagne-200 font-light">
                  <strong className="font-medium text-amber-glow">Key Commercial Advantage:</strong> Transforms transient visitors into permanent direct bookers without paying repeated OTA commissions.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE 3: CONNECTED GUEST RELATIONSHIP FLOW */}
        {activeTab === "flow" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {journeyFlow.map((jf, idx) => (
                <div
                  key={jf.step}
                  className="p-6 rounded-2xl bg-shadow-main/80 border-hairline hover:border-amber-glow/40 transition-all flex flex-col justify-between shadow-subtle relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-shadow-darkest text-amber-glow border-hairline font-semibold">
                        Stage {jf.step}
                      </span>
                      <span className="text-[9px] font-mono uppercase text-champagne-200/60">
                        {jf.tag}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider block">
                        {jf.channel}
                      </span>
                      <h4 className="font-serif text-lg text-ivory-warm font-normal mt-0.5">
                        {jf.title}
                      </h4>
                    </div>

                    <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                      {jf.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-champagne-200/10 mt-4 flex items-center justify-between text-[10px] text-champagne-200/50 font-mono">
                    <span>Flow Step 0{idx + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-glow" />
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Summary Stage */}
            <div className="rounded-3xl border-hairline bg-gradient-to-r from-shadow-main via-shadow-darkest to-shadow-main p-6 sm:p-10 shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-glow">
                    Continuous Ecosystem Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
                    One Customer Profile &bull; Zero Operational Friction
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-warm/75 font-light leading-relaxed">
                    When a guest enters their requirements on the website, their reservation profile is immediately recognized by the mobile app upon installation. Front desk receptionists, housekeeping staff, and banquet coordinators all operate on the exact same real-time data stream.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <button
                    onClick={() => setActiveTab("phone")}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-wider uppercase shadow-glow hover:opacity-95 transition-all"
                  >
                    <span>Launch 3D Phone Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

