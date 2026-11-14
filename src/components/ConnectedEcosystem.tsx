"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";
import { SpatialPavilionViewer } from "./3d/SpatialPavilionViewer";
import { IMAGES } from "@/data/mockData";

export function ConnectedEcosystem() {
  const [activeTab, setActiveTab] = useState<"web" | "mobile" | "admin">("web");

  const environments = {
    web: {
      id: "web",
      title: "Guest Web Experience",
      badge: "Desktop & Mobile Web",
      subtitle: "The High-Conversion Public Flagship",
      description:
        "An editorial, lightning-fast digital storefront showcasing Joclarif's rooms, halls, dining, and conference facilities. Engineered for high conversion across individual travelers, wedding groups, and academic delegates.",
      image: IMAGES.suite,
      imageCaption: "Proposed room showcase & discovery interface",
      features: [
        "Curated room & suite showcase with real-time rate transparency",
        "Interactive event & banquet hall reservation portal",
        "Natural language Conversational Booking Co-Pilot",
        "Secure payment processing via Paystack/Flutterwave & international cards",
        "Corporate & academic delegation group booking requests",
        "Multilingual guest discovery in English, French, and regional languages",
      ],
      metrics: "Replaces third-party OTA commissions with 100% owned direct reservations",
    },
    mobile: {
      id: "mobile",
      title: "Guest Mobile Companion",
      badge: "Contactless In-Stay App",
      subtitle: "Effortless In-Stay Hospitality",
      description:
        "A lightweight, installable web/native mobile companion that guides guests through their entire stay—from pre-arrival check-in and document capture to room service ordering and instant concierge messaging.",
      image: IMAGES.concierge,
      imageCaption: "Mobile concierge & guest service interface",
      features: [
        "Pre-arrival digital check-in with OCR passport/identity scan",
        "Digital room key readiness notifications and arrival concierge",
        "In-stay dining & housekeeping requests delivered directly to staff boards",
        "Real-time multilingual chat with front desk and AI concierge",
        "Consolidated group room lists and event schedules for wedding guests",
        "Instant digital folio review and express checkout",
      ],
      metrics: "Reduces front desk lobby check-in waiting times to under 60 seconds",
    },
    admin: {
      id: "admin",
      title: "Hotel Management Platform",
      badge: "Executive & Staff Cockpit",
      subtitle: "Unified Central Operations",
      description:
        "The central nerve centre for Joclarif management, receptionists, housekeeping supervisors, and banquet coordinators. Real-time inventory synchronization ensures zero overbooking across all channels.",
      image: IMAGES.deluxe,
      imageCaption: "Proposed front desk & room inventory control board",
      features: [
        "Live room rack and multi-tier occupancy calendar",
        "Parent group reservation coordinator with room block allocation",
        "Automated housekeeping dispatch (dirty, cleaning, inspected, released)",
        "Banquet hall calendar and catering package contracts",
        "Financial reporting, daily night audit, and payment reconciliation",
        "Granular staff role-based permissions with immutable audit logs",
      ],
      metrics: "Gives hotel ownership complete revenue transparency from any location",
    },
  };

  const current = environments[activeTab];

  return (
    <section id="ecosystem" className="py-28 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric diagonal illumination */}
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Part 1: Tri-Partite Environments Showcase */}
        <div>
          <SectionHeader
            badge="Tri-Partite Ecosystem"
            subtitle="Unified System Architecture"
            title="Three Environments. One Intelligent Digital Platform."
            description="A truly modern hospitality ecosystem connects the guest on their sofa, the guest in the lobby, and the hotel manager in the back office through a single synchronized data engine."
          />

          {/* Environment Switcher Tabs */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex p-1.5 rounded-2xl bg-shadow-main border-hairline shadow-subtle">
              <button
                onClick={() => setActiveTab("web")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "web"
                    ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                    : "text-ivory-warm/70 hover:text-white"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Guest Web Experience</span>
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "mobile"
                    ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                    : "text-ivory-warm/70 hover:text-white"
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Guest Mobile App</span>
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "admin"
                    ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                    : "text-ivory-warm/70 hover:text-white"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Hotel Management</span>
              </button>
            </div>
          </div>

          {/* Active Environment Showcase */}
          <div className="rounded-3xl border-hairline bg-gradient-to-br from-shadow-main to-shadow-darkest p-6 sm:p-10 lg:p-12 shadow-luxury backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Details & Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="amber">{current.badge}</Badge>
                  <span className="text-[11px] text-amber-glow font-semibold uppercase tracking-[0.2em]">
                    {current.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif text-ivory-warm font-normal">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-ivory-warm/75 leading-relaxed font-light">
                  {current.description}
                </p>

                <div className="pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-200 mb-3">
                    Key Proposed Capabilities
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory-warm/80 font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-shadow-darkest/90 border border-amber-glow/20 text-xs text-champagne-200 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-amber-glow shrink-0" />
                  <span>
                    <strong className="text-amber-glow">Strategic Impact:</strong> {current.metrics}
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-hairline bg-shadow-darkest shadow-subtle">
                  <div className="relative h-72 sm:h-88 w-full">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-shadow-darkest/30 to-transparent" />
                  </div>
                  <div className="p-4 bg-shadow-darkest/95 border-t border-champagne-200/10 text-center">
                    <span className="text-[11px] text-ivory-warm/60 italic font-serif">
                      {current.imageCaption} &bull; Illustrative concept preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Real-Time Data Sync Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-shadow-main/80 border-hairline text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-center text-amber-glow shrink-0">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <p className="text-sm font-serif font-normal text-ivory-warm">
                  Continuous Real-Time Data Synchronization
                </p>
                <p className="text-xs text-ivory-warm/60 font-light">
                  A booking on the guest web immediately blocks inventory in the hotel management system
                  and notifies housekeeping on mobile.
                </p>
              </div>
            </div>
            <a
              href="#pavilion"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-glow hover:text-champagne-200 uppercase tracking-wider shrink-0 transition-colors"
            >
              <span>Explore 3D Spatial Pavilion</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Part 2: Dedicated 3D Spatial Pavilion Section */}
        <div id="pavilion" className="pt-6">
          <SectionHeader
            badge="Selected 3D Spatial Experience"
            subtitle="Architectural &amp; Facility Exploration"
            title="Immersive Spatial Exploration for Future Guests"
            description="Demonstrating how guests and event planners can inspect suites, banquet seating configurations, and lighting moods in real time before finalizing reservations."
          />
          <SpatialPavilionViewer />
        </div>
      </div>
    </section>
  );
}
