"use client";

import React, { useState } from "react";
import {
  Server,
  Database,
  Shield,
  Smartphone,
  Globe,
  LayoutDashboard,
  ArrowDown,
  ArrowRight,
  Lock,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Zap,
} from "lucide-react";
import { Badge } from "../ui/Badge";

export function Chapter04Intelligence() {
  const [activeTab, setActiveTab] = useState<"tiers" | "integrations" | "security">("tiers");
  const [selectedTier, setSelectedTier] = useState<number>(1);
  const [selectedModule, setSelectedModule] = useState<string>("Reservation Engine");

  const coreModules = [
    {
      name: "Reservation Engine",
      tier: "Tier 2",
      role: "Core Availability & Inventory Locks",
      desc: "Parent-child group bookings, atomic inventory locking preventing concurrent overbooking.",
      relation: "Directly controls room availability across Web Storefront and Desk Terminals.",
    },
    {
      name: "Room Inventory",
      tier: "Tier 2",
      role: "Real-time Rack Status",
      desc: "Synchronizes clean/dirty/inspected state in sub-200ms across all terminals.",
      relation: "Feeds housekeeping dispatch and front-desk check-in locks.",
    },
    {
      name: "Event & Hall Engine",
      tier: "Tier 2",
      role: "Banquet & Function Planning",
      desc: "Banquet floorplans, stage seating arrangements, and multi-day catering contracts.",
      relation: "Bundles hall hire with attendee room blocks under single master folio.",
    },
    {
      name: "Guest Profiles & Folio",
      tier: "Tier 2",
      role: "Unified Stays & Ledger",
      desc: "Persistent guest preferences, dining tabs, room charges, and split billing histories.",
      relation: "Accessed by resident mobile app and front-desk checkout cashiers.",
    },
    {
      name: "Payment & Reconciliation",
      tier: "Tier 2",
      role: "Direct Revenue Capture",
      desc: "Direct card processing, Paystack/Flutterwave webhooks, USSD, and instant digital receipts.",
      relation: "Reconciles online deposits directly into Joclarif bank accounts.",
    },
    {
      name: "Messaging & Notifications",
      tier: "Tier 2",
      role: "Multi-Channel Communications",
      desc: "WhatsApp arrival notices, SMS booking confirmations, and push alerts.",
      relation: "Keeps guests informed without manual front-desk telephone calls.",
    },
    {
      name: "AI Orchestration Service",
      tier: "Tier 2",
      role: "Deterministic Intelligence",
      desc: "Natural language query parsing, deterministic quotation builder, and multilingual translation.",
      relation: "Powers the Booking Co-Pilot and In-Stay Concierge without price hallucination.",
    },
    {
      name: "Identity & OCR Processing",
      tier: "Tier 2",
      role: "NDPR Compliant Document Capture",
      desc: "Client-side image processing extracting passport and national ID data with zero retention.",
      relation: "Pre-populates check-in cards 24 hours prior to arrival.",
    },
    {
      name: "Reporting & Night Audit",
      tier: "Tier 2",
      role: "Commercial Governance",
      desc: "Automated midnight room revenue rollover, RevPAR tracking, and audit trail logs.",
      relation: "Exports daily summary reports directly to hotel ownership.",
    },
  ];

  const externalIntegrations = [
    {
      name: "Payment Gateways",
      provider: "Paystack / Flutterwave / Interswitch",
      category: "Finance",
      role: "Direct card processing, bank transfers, USSD and instant settlement in NGN and USD.",
      status: "Proposed Discovery",
    },
    {
      name: "WhatsApp Business API",
      provider: "Meta Cloud API / Termii",
      category: "Guest Comms",
      role: "Automated booking confirmations, digital check-in links, and arrival reminders.",
      status: "Proposed Discovery",
    },
    {
      name: "Transactional SMS & Email",
      provider: "Termii / SendGrid",
      category: "Alerts",
      role: "Instant SMS delivery for low-bandwidth zones and branded HTML booking confirmations.",
      status: "Proposed Discovery",
    },
    {
      name: "Push Notifications",
      provider: "Apple APNs / Google FCM",
      category: "Mobile",
      role: "Room readiness alerts, in-stay dining updates, and flight delay concierge check-ins.",
      status: "Proposed Discovery",
    },
    {
      name: "Maps & Airport Transit",
      provider: "Google Maps Platform",
      category: "Logistics",
      role: "Transit route mapping from Kaduna International Airport and Zaria rail station.",
      status: "Proposed Discovery",
    },
    {
      name: "AI Language Translation",
      provider: "Claude / GPT Enterprise Multilingual",
      category: "Intelligence",
      role: "High-fidelity conversational translation across Hausa, French, and English.",
      status: "Proposed Discovery",
    },
  ];

  const currentMod = coreModules.find((m) => m.name === selectedModule) || coreModules[0];

  return (
    <section id="chapter-intelligence" className="py-24 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 relative z-10 space-y-12">
        {/* Chapter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-champagne-200/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="amber">Chapter 04 &bull; The Intelligence</Badge>
              <span className="text-[10px] font-mono text-champagne-200/60 uppercase tracking-widest">
                Enterprise System Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory-warm font-normal tracking-tight">
              Designed for Reliability, Scale and Privacy
            </h2>
            <p className="text-xs sm:text-sm text-ivory-warm/70 font-light mt-2 max-w-2xl leading-relaxed">
              A layered, modular software architecture that guarantees zero overbooking, keeps guest identity data private,
              and operates reliably under Nigerian infrastructure conditions.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-shadow-main border-hairline shadow-subtle text-xs self-start lg:self-end">
            <button
              onClick={() => setActiveTab("tiers")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "tiers"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3-Tier Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "integrations"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>External Integrations</span>
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === "security"
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "text-ivory-warm/70 hover:text-white"
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>NDPR &amp; Reliability</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 3-TIER ARCHITECTURE WITH COMPONENT INSPECTOR */}
        {activeTab === "tiers" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Architectural Overview Tiers */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: 3 Tiers Visual Stack */}
              <div className="lg:col-span-7 space-y-4">
                {/* TIER 1 */}
                <div
                  onClick={() => setSelectedTier(1)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedTier === 1
                      ? "border-amber-glow bg-shadow-main shadow-luxury"
                      : "border-hairline bg-shadow-darkest/80 hover:border-amber-glow/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-amber-glow/15 text-amber-glow flex items-center justify-center font-mono text-xs font-bold border border-amber-glow/30">
                        01
                      </span>
                      <h4 className="font-serif text-lg text-ivory-warm font-normal">
                        Tier 1: Presentation Touchpoints
                      </h4>
                    </div>
                    <Badge variant="amber">User Interfaces</Badge>
                  </div>
                  <p className="text-xs text-ivory-warm/70 font-light mb-4">
                    Fast, responsive client interfaces designed for web, mobile devices, and reception desks.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-amber-glow shrink-0" />
                      <span className="text-ivory-warm text-[11px]">Guest Web Storefront</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5 text-amber-glow shrink-0" />
                      <span className="text-ivory-warm text-[11px]">Resident Mobile App</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-2">
                      <LayoutDashboard className="w-3.5 h-3.5 text-amber-glow shrink-0" />
                      <span className="text-ivory-warm text-[11px]">Staff Ops Cockpit</span>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center text-amber-glow py-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-amber-glow/80">
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                    <span>Secure Encrypted REST &amp; WebSocket APIs</span>
                  </div>
                </div>

                {/* TIER 2 */}
                <div
                  onClick={() => setSelectedTier(2)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedTier === 2
                      ? "border-amber-glow bg-shadow-main shadow-luxury"
                      : "border-hairline bg-shadow-darkest/80 hover:border-amber-glow/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-amber-glow/15 text-amber-glow flex items-center justify-center font-mono text-xs font-bold border border-amber-glow/30">
                        02
                      </span>
                      <h4 className="font-serif text-lg text-ivory-warm font-normal">
                        Tier 2: Unified Hospitality Engine &amp; Business Modules
                      </h4>
                    </div>
                    <Badge variant="amber">Core Logic</Badge>
                  </div>
                  <p className="text-xs text-ivory-warm/70 font-light mb-4">
                    High-concurrency backend services orchestrating inventory locks, billing splits, and conversational AI.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {coreModules.slice(0, 6).map((mod) => (
                      <button
                        key={mod.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedModule(mod.name);
                          setSelectedTier(2);
                        }}
                        className={`p-2 rounded-xl text-left text-[11px] transition-all border ${
                          selectedModule === mod.name
                            ? "bg-shadow-darkest border-amber-glow text-amber-glow font-medium"
                            : "bg-shadow-darkest/60 border-hairline text-ivory-warm/75 hover:text-white"
                        }`}
                      >
                        <span className="truncate block">{mod.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center text-amber-glow py-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-amber-glow/80">
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                    <span>ACID Transactions &bull; AES-256 Encrypted Persistence</span>
                  </div>
                </div>

                {/* TIER 3 */}
                <div
                  onClick={() => setSelectedTier(3)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedTier === 3
                      ? "border-amber-glow bg-shadow-main shadow-luxury"
                      : "border-hairline bg-shadow-darkest/80 hover:border-amber-glow/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-amber-glow/15 text-amber-glow flex items-center justify-center font-mono text-xs font-bold border border-amber-glow/30">
                        03
                      </span>
                      <h4 className="font-serif text-lg text-ivory-warm font-normal">
                        Tier 3: Enterprise Database &amp; Cloud Storage
                      </h4>
                    </div>
                    <Badge variant="amber">Persistence</Badge>
                  </div>
                  <p className="text-xs text-ivory-warm/70 font-light mb-4">
                    Relational PostgreSQL database with continuous automated backups, row-level locks, and encrypted vault storage.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-amber-glow shrink-0" />
                      <span className="text-ivory-warm text-[11px]">PostgreSQL with Row-level Locks</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-amber-glow shrink-0" />
                      <span className="text-ivory-warm text-[11px]">Encrypted Document Vault (NDPR)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Deep-Dive Inspector */}
              <div className="lg:col-span-5 sticky top-28 space-y-6">
                <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-6 sm:p-8 shadow-luxury space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider">
                        Component Inspector
                      </span>
                      <span className="text-[10px] font-mono text-champagne-200/50 bg-shadow-darkest px-2 py-0.5 rounded border-hairline">
                        {currentMod.tier}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-ivory-warm font-normal">
                      {currentMod.name}
                    </h3>
                    <p className="text-xs font-mono text-amber-glow/90 mt-0.5">
                      {currentMod.role}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-shadow-darkest/90 border-hairline space-y-2 text-xs">
                    <span className="text-[10px] uppercase font-mono text-champagne-200/60 block">
                      Responsibility &amp; Operational Logic
                    </span>
                    <p className="text-ivory-warm/80 font-light leading-relaxed">
                      {currentMod.desc}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-shadow-darkest/90 border-hairline space-y-2 text-xs">
                    <span className="text-[10px] uppercase font-mono text-champagne-200/60 block">
                      Architectural Linkage
                    </span>
                    <p className="text-ivory-warm/80 font-light leading-relaxed">
                      {currentMod.relation}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-mono text-champagne-200/60 block mb-2">
                      Inspect Other Core Modules:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {coreModules.map((m) => (
                        <button
                          key={m.name}
                          onClick={() => {
                            setSelectedModule(m.name);
                            setSelectedTier(2);
                          }}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all border ${
                            selectedModule === m.name
                              ? "bg-amber-glow text-shadow-darkest font-semibold border-amber-glow"
                              : "bg-shadow-darkest text-ivory-warm/70 border-hairline hover:text-white"
                          }`}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROPOSED EXTERNAL INTEGRATIONS */}
        {activeTab === "integrations" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-shadow-main/80 border-hairline text-xs text-ivory-warm/75 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-glow shrink-0" />
                <span>
                  All external technology integrations are proposed subject to formal discovery, provider SLA verification, and commercial sign-off.
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider bg-shadow-darkest px-3 py-1 rounded border-hairline shrink-0">
                Nigerian &amp; Global Standards
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {externalIntegrations.map((ext) => (
                <div
                  key={ext.name}
                  className="p-5 rounded-2xl bg-shadow-main/60 border-hairline hover:border-amber-glow/40 transition-all flex flex-col justify-between shadow-subtle"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
                        {ext.category}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-amber-glow bg-amber-glow/10 px-2 py-0.5 rounded border border-amber-glow/30 font-mono">
                        {ext.status}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg text-ivory-warm font-normal mb-1">
                      {ext.name}
                    </h4>
                    <p className="text-xs text-amber-glow/90 font-mono mb-2">
                      {ext.provider}
                    </p>
                    <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                      {ext.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: NDPR & REGIONAL INFRASTRUCTURE RELIABILITY */}
        {activeTab === "security" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-shadow-main/70 border-hairline space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center text-amber-glow">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-ivory-warm font-normal">
                  NDPR Compliance &amp; Privacy
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                  Guest passports and national ID documents captured during digital check-in are processed client-side with OCR. Identity files are automatically purged after 30 days in strict accordance with the Nigeria Data Protection Regulation (NDPR).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-shadow-main/70 border-hairline space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center text-amber-glow">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-ivory-warm font-normal">
                  Network Resilience in Zaria
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                  Front-desk check-in terminals maintain an offline-tolerant local cache. If regional internet connectivity drops momentarily, key issuance and room rack lookups continue uninterrupted, syncing back immediately upon reconnection.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-shadow-main/70 border-hairline space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center text-amber-glow">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-ivory-warm font-normal">
                  100% Code &amp; Data Ownership
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                  Unlike proprietary third-party hotel platforms that charge forever and hold hotel records hostage, Joclarif owns all source code, databases, customer contacts, and operational records with zero recurring commission extractors.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Standalone Intelligence Command Centre Invitation Banner */}
        <div className="mt-12 p-8 rounded-2xl border border-amber-glow/40 bg-gradient-to-r from-shadow-darkest via-[#1c120a] to-shadow-darkest shadow-luxury flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/15 border border-amber-glow/30">
                Standalone Executive Platform
              </span>
              <span className="text-xs font-mono text-champagne-300/60">
                Interactive 3D Topology &bull; 8 Workspaces
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light">
              Enter Joclarif Hotel Intelligence Command Centre
            </h3>
            <p className="text-xs sm:text-sm text-ivory-warm/75 leading-relaxed">
              Explore the dedicated operations platform with real-time 3D architectural cutaways, multi-source ingestion
              of legacy spreadsheets and IoT sensors, and verifiable natural language AI audits.
            </p>
          </div>

          <a
            href="/intelligence"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-[0.24em] uppercase shadow-glow hover:opacity-95 hover:scale-[1.02] transition-all shrink-0"
          >
            <span>EXPLORE J O C L A R I F INTELLIGENCE</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

