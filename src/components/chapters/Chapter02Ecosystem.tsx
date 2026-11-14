"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2,
  Cpu,
  Database,
  Building,
  CalendarCheck,
  ChevronRight,
  ChevronLeft,
  Compass,
} from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { SpatialPavilionViewer } from "../3d/SpatialPavilionViewer";
import { IMAGES } from "@/data/mockData";

export function Chapter02Ecosystem() {
  const [activeViewMode, setActiveViewMode] = useState<"environments" | "pavilion" | "journey">("environments");
  const [activeEnv, setActiveEnv] = useState<"web" | "mobile" | "admin">("web");
  const [selectedPillar, setSelectedPillar] = useState<string>("reservations");
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // Environments data
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

  // Connected Ecosystem Pillars
  const ecosystemPillars = [
    {
      id: "reservations",
      icon: CalendarCheck,
      name: "Unified Reservation Core",
      category: "Inventory & Rates",
      purpose: "Single source of truth for all room and banquet hall availability.",
      capabilities: [
        "Parent-child hierarchical group booking logic",
        "Atomic inventory locks preventing concurrent overbooking",
        "Dynamic multi-tier rate rules & corporate discount codes",
      ],
      benefits: "Guarantees zero double-bookings even during massive convocation rush.",
      relation: "Directly syncs web storefront and front desk room rack in under 200ms.",
    },
    {
      id: "operations",
      icon: LayoutDashboard,
      name: "Property Operations Cockpit",
      category: "Staff & Management",
      purpose: "Live operational hub for reception, housekeeping, and maintenance teams.",
      capabilities: [
        "Instant housekeeping dispatch with status tracking",
        "Guest folio consolidation across dining, rooms, and hall rental",
        "Automated daily night audit and revenue reporting",
      ],
      benefits: "Reduces turnaround time on cleaned rooms by 40% with automated inspection alerts.",
      relation: "Receives requests directly from resident mobile app and front desk terminals.",
    },
    {
      id: "guest-experience",
      icon: Globe,
      name: "Guest Digital Flagship",
      category: "Public Commerce",
      purpose: "Conversion-optimized web platform for discovering and booking Joclarif rooms.",
      capabilities: [
        "3D spatial suite & hall inspection with lighting presets",
        "Conversational AI booking co-pilot for multi-room groups",
        "Integrated local payment gateways (Paystack/Flutterwave)",
      ],
      benefits: "Recovers 15-25% margin previously surrendered to online travel agents.",
      relation: "Feeds new confirmed bookings directly into the centralized reservation engine.",
    },
    {
      id: "intelligence",
      icon: Cpu,
      name: "Multilingual Intelligence",
      category: "AI & Concierge",
      purpose: "24/7 guest assistance and intelligent request routing with live human handoff.",
      capabilities: [
        "Instant Hausa, French, and English concierge conversations",
        "Context-aware recommendations for Zaria transit and dining",
        "Seamless VIP escalation directly to reception lounge staff",
      ],
      benefits: "Delivers rapid 24/7 responsiveness without ballooning front desk staffing costs.",
      relation: "Passes authenticated guest context and verified requests to the operations desk.",
    },
    {
      id: "identity",
      icon: Shield,
      name: "NDPR Compliance & Identity",
      category: "Security & Check-in",
      purpose: "Secure guest verification and express pre-arrival registration.",
      capabilities: [
        "Client-side OCR for international passports & Nigerian IDs",
        "Strict NDPR compliance with automated 30-day document purge",
        "Fast-track digital boarding pass generation",
      ],
      benefits: "Shrinks lobby check-in duration from 8 minutes to under 60 seconds.",
      relation: "Pre-populates guest folio before arrival, speeding key card issuance.",
    },
  ];

  // 7-Moment Guest Journey
  const journeySteps = [
    {
      num: "01",
      phase: "Discovery",
      title: "Discovering Joclarif",
      subtitle: "The Digital Flagship & First Impressions",
      description:
        "The guest discovers Joclarif through an owned, lightning-fast digital storefront. Architectural photography, curated spatial tours, and real-time transparent rates replace clumsy phone inquiries.",
      image: IMAGES.hero,
      spatialTag: "Spatial Entry & Online Flagship",
      detailNote: "Reclaims direct bookings from third-party commission channels.",
    },
    {
      num: "02",
      phase: "Exploration",
      title: "Exploring Accommodation & Facilities",
      subtitle: "Spatial Room & Banquet Inspection",
      description:
        "Guests and wedding planners inspect 3D spatial room models, banquet floorplans, and suite connectivity with realistic lighting presets before committing to dates.",
      image: IMAGES.suite,
      spatialTag: "Interactive 3D Pavilion & Suite Showcase",
      detailNote: "360° perspective of Governor Suite and Grand Savannah Banquet Hall.",
    },
    {
      num: "03",
      phase: "Reservation",
      title: "Natural Language Booking",
      subtitle: "Conversational Co-Pilot & Inventory Locks",
      description:
        "Whether reserving 1 room or 15 suites for a family wedding, the guest chats with the Booking Co-Pilot, which deterministically locks real inventory with zero price hallucination.",
      image: IMAGES.executive,
      spatialTag: "Conversational Booking Co-Pilot",
      detailNote: "Assembles combined room + banquet quotations in seconds.",
    },
    {
      num: "04",
      phase: "Pre-Arrival",
      title: "Preparing for Arrival",
      subtitle: "Contactless Pre-Check-in & Verification",
      description:
        "Days prior to arrival, the guest completes digital registration on mobile. Optical character recognition extracts passport fields into the reservation under strict NDPR privacy rules.",
      image: IMAGES.concierge,
      spatialTag: "Mobile Companion & Document Capture",
      detailNote: "Eliminates physical paperwork and lobby congestion.",
    },
    {
      num: "05",
      phase: "Arrival",
      title: "Fast-Track Arrival & Key Collection",
      subtitle: "The 60-Second Check-in Experience",
      description:
        "Upon arriving in Zaria, the guest presents their digital Fast-Track boarding pass at the reception lounge. Pre-coded key cards are handed over in under one minute.",
      image: IMAGES.lobby,
      spatialTag: "Front Desk Fast-Track Dispatch",
      detailNote: "Reduces lobby queues during peak wedding check-in hours.",
    },
    {
      num: "06",
      phase: "In-Stay",
      title: "Effortless In-Stay Hospitality",
      subtitle: "Multilingual Concierge & Dining",
      description:
        "During their stay, guests request room service, schedule housekeeping, and ask questions in Hausa, English, or French via the resident mobile app, with instant front-desk handoff.",
      image: IMAGES.deluxe,
      spatialTag: "Mobile Resident App & Operations Dispatch",
      detailNote: "Requests route straight to staff duty boards with zero telephone delays.",
    },
    {
      num: "07",
      phase: "Post-Stay",
      title: "Express Checkout & Continuity",
      subtitle: "Digital Folio & Guest Relationship",
      description:
        "Guests review their unified digital folio, settle charges via digital transfer or card, and check out with a single tap. Their profile remembers preferences for their next visit.",
      image: IMAGES.suite,
      spatialTag: "Digital Folio & Relationship Retention",
      detailNote: "Builds a high-value proprietary guest database for direct re-booking.",
    },
  ];

  const currentEnv = environments[activeEnv];
  const currentPillar = ecosystemPillars.find((p) => p.id === selectedPillar) || ecosystemPillars[0];
  const currentJourney = journeySteps[activeJourneyStep];

  return (
    <section id="chapter-ecosystem" className="py-24 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric diagonal illumination */}
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 relative z-10 space-y-16">
        {/* Header & Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-champagne-200/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="amber">Chapter 02 &bull; The Ecosystem</Badge>
              <span className="text-[10px] font-mono text-champagne-200/60 uppercase tracking-widest">
                Integrated Spatial Platform
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory-warm font-normal tracking-tight">
              The Connected Hospitality Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-ivory-warm/70 font-light mt-2 max-w-2xl leading-relaxed">
              Instead of isolated silos, Joclarif connects the guest web storefront, resident mobile companion,
              and back-office operations through one unified data core.
            </p>
          </div>

          {/* 3 Presentation Modes Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-shadow-main border-hairline shadow-subtle text-xs self-start lg:self-end">
            <button
              onClick={() => setActiveViewMode("environments")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeViewMode === "environments"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>System &amp; Touchpoints</span>
            </button>
            <button
              onClick={() => setActiveViewMode("pavilion")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeViewMode === "pavilion"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>3D Spatial Pavilion</span>
            </button>
            <button
              onClick={() => setActiveViewMode("journey")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeViewMode === "journey"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>7-Moment Guest Journey</span>
            </button>
          </div>
        </div>

        {/* MODE 1: SYSTEM & TOUCHPOINTS */}
        {activeViewMode === "environments" && (
          <div className="space-y-12 animate-fadeIn">
            {/* Top: 3 Touchpoints Switcher Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { id: "web" as const, title: "Guest Web Experience", badge: "Public Flagship", icon: Globe },
                { id: "mobile" as const, title: "Guest Mobile Companion", badge: "Contactless In-Stay", icon: Smartphone },
                { id: "admin" as const, title: "Hotel Management Platform", badge: "Operations Cockpit", icon: LayoutDashboard },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeEnv === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveEnv(tab.id)}
                    className={`flex items-center gap-3.5 p-4 rounded-2xl text-left transition-all ${
                      isActive
                        ? "bg-shadow-main border border-amber-glow shadow-luxury"
                        : "bg-shadow-darkest/70 border-hairline hover:border-amber-glow/40"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-amber-glow text-shadow-darkest shadow-glow"
                          : "bg-shadow-darkest text-champagne-200 border-hairline"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-amber-glow/90 block">
                        {tab.badge}
                      </span>
                      <span className="text-sm font-serif text-ivory-warm font-normal">
                        {tab.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Environment Showcase Grid */}
            <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-6 sm:p-10 lg:p-12 shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Substantive Capabilities */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-xs text-amber-glow tracking-widest uppercase block mb-1">
                      {currentEnv.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
                      {currentEnv.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-ivory-warm/75 font-light leading-relaxed">
                    {currentEnv.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {currentEnv.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-shadow-darkest/80 border-hairline text-xs text-ivory-warm/80 font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-amber-glow/10 border border-amber-glow/20 text-xs text-champagne-200 flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-amber-glow shrink-0" />
                    <span className="font-medium">{currentEnv.metrics}</span>
                  </div>
                </div>

                {/* Right Column: Visual Environment Image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border-hairline shadow-luxury group">
                    <Image
                      src={currentEnv.image}
                      alt={currentEnv.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-transparent to-transparent" />
                    <div className="absolute bottom-4 inset-x-4">
                      <div className="p-3 rounded-xl bg-shadow-darkest/90 border-hairline backdrop-blur-md">
                        <span className="text-[10px] uppercase font-mono text-amber-glow block mb-0.5">
                          Inspiration Preview
                        </span>
                        <p className="text-xs text-ivory-warm/80 font-light">
                          {currentEnv.imageCaption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Connected Pillars Inspector */}
            <div className="rounded-3xl border-hairline bg-shadow-main/40 p-6 sm:p-10 shadow-subtle space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-champagne-200/10">
                <div>
                  <h4 className="text-xl font-serif text-ivory-warm font-normal">
                    Ecosystem Data Connectivity Hub
                  </h4>
                  <p className="text-xs text-ivory-warm/60 font-light">
                    Select any architectural pillar below to inspect its data flow across Joclarif:
                  </p>
                </div>
                <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider bg-shadow-darkest px-3 py-1 rounded border-hairline self-start">
                  Zero Data Fragmentation
                </span>
              </div>

              {/* Pillars Selector Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {ecosystemPillars.map((p) => {
                  const Icon = p.icon;
                  const isSelected = selectedPillar === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPillar(p.id)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        isSelected
                          ? "bg-shadow-darkest border border-amber-glow shadow-glow"
                          : "bg-shadow-darkest/60 border-hairline hover:border-amber-glow/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? "text-amber-glow" : "text-champagne-200/70"}`} />
                        <span className="text-[9px] font-mono text-champagne-200/50">
                          {p.category.split(" ")[0]}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-ivory-warm truncate">{p.name}</p>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Pillar Inspector Panel */}
              <div className="p-6 rounded-2xl bg-shadow-darkest/90 border-hairline grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 space-y-2 border-r border-champagne-200/10 pr-4">
                  <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider">
                    {currentPillar.category}
                  </span>
                  <h5 className="font-serif text-xl text-ivory-warm font-normal">
                    {currentPillar.name}
                  </h5>
                  <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                    {currentPillar.purpose}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-2">
                  <span className="text-[10px] uppercase font-mono text-champagne-200/60 block">
                    Key Architectural Capabilities
                  </span>
                  <ul className="text-xs text-ivory-warm/80 space-y-1.5 font-light">
                    {currentPillar.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-glow" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 space-y-3 bg-shadow-main/60 p-4 rounded-xl border-hairline text-xs">
                  <div>
                    <span className="text-[9px] uppercase font-mono text-amber-glow block mb-0.5">
                      Commercial Impact
                    </span>
                    <p className="text-ivory-warm/90 font-medium text-[11px]">{currentPillar.benefits}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-champagne-200/60 block mb-0.5">
                      Ecosystem Linkage
                    </span>
                    <p className="text-ivory-warm/60 font-light text-[11px]">{currentPillar.relation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: 3D SPATIAL PAVILION */}
        {activeViewMode === "pavilion" && (
          <div className="animate-fadeIn">
            <SpatialPavilionViewer />
          </div>
        )}

        {/* MODE 3: 7-MOMENT GUEST JOURNEY */}
        {activeViewMode === "journey" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Horizontal Timeline Step Indicators */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3">
              {journeySteps.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => setActiveJourneyStep(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs whitespace-nowrap transition-all ${
                    activeJourneyStep === idx
                      ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                      : "bg-shadow-darkest text-ivory-warm/70 border-hairline hover:border-amber-glow/40"
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-80">{step.num}</span>
                  <span>{step.phase}</span>
                </button>
              ))}
            </div>

            {/* Active Step Presentation Stage */}
            <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-6 sm:p-10 shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-shadow-darkest text-amber-glow border-hairline">
                      Stage {currentJourney.num} / 07
                    </span>
                    <span className="text-xs text-amber-glow uppercase tracking-wider font-mono">
                      {currentJourney.spatialTag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
                      {currentJourney.title}
                    </h3>
                    <p className="text-xs font-mono text-champagne-200/70 mt-1 uppercase">
                      {currentJourney.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-ivory-warm/75 font-light leading-relaxed">
                    {currentJourney.description}
                  </p>

                  <div className="p-4 rounded-xl bg-shadow-darkest border-hairline text-xs text-champagne-200 flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-amber-glow shrink-0" />
                    <span>{currentJourney.detailNote}</span>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setActiveJourneyStep((prev) => Math.max(0, prev - 1))}
                      disabled={activeJourneyStep === 0}
                      className="px-4 py-2 rounded-xl border-hairline bg-shadow-darkest text-ivory-warm/70 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed text-xs flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous Stage</span>
                    </button>
                    <button
                      onClick={() => setActiveJourneyStep((prev) => Math.min(journeySteps.length - 1, prev + 1))}
                      disabled={activeJourneyStep === journeySteps.length - 1}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>Next Stage</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden border-hairline shadow-luxury">
                    <Image
                      src={currentJourney.image}
                      alt={currentJourney.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-transparent to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 text-center">
                      <span className="text-[10px] text-ivory-warm/70 bg-shadow-darkest/90 px-3 py-1 rounded-full border-hairline backdrop-blur-md">
                        {currentJourney.spatialTag} &bull; Visual Inspiration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

