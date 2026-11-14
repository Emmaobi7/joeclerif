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
  Lock,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function ArchitectureSection() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const coreModules = [
    { name: "Reservation Engine", desc: "Parent-child group bookings & availability logic" },
    { name: "Room Inventory", desc: "Real-time room rack status across web & desk" },
    { name: "Event & Hall Engine", desc: "Banquet floorplans, seating & catering contracts" },
    { name: "Guest Profiles & Folio", desc: "Unified stay history, preferences & billing" },
    { name: "Payment & Reconciliation", desc: "Direct card, USSD, transfers & receipting" },
    { name: "Messaging & Notifications", desc: "WhatsApp, SMS, email & arrival alerts" },
    { name: "AI Orchestration Service", desc: "Deterministic booking assistant & translation" },
    { name: "Identity & OCR Processing", desc: "NDPR-compliant document data extraction" },
    { name: "Reporting & Night Audit", desc: "Daily revenue, RevPAR, and audit logs" },
  ];

  const externalIntegrations = [
    { name: "Payment Gateways", provider: "Paystack / Flutterwave / Interswitch", status: "Proposed Discovery" },
    { name: "WhatsApp Business API", provider: "Meta Cloud API / Termii", status: "Proposed Discovery" },
    { name: "Transactional SMS & Email", provider: "Termii / SendGrid", status: "Proposed Discovery" },
    { name: "Push Notifications", provider: "Apple APNs / Google FCM", status: "Proposed Discovery" },
    { name: "Maps & Airport Transit", provider: "Google Maps Platform", status: "Proposed Discovery" },
    { name: "AI Language Translation", provider: "Claude / GPT Enterprise Multilingual", status: "Proposed Discovery" },
  ];

  return (
    <section id="architecture" className="py-28 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Enterprise Grade Architecture"
          subtitle="Technically Credible &bull; Built to Scale"
          title="Designed for Reliability, Performance and Privacy"
          description="A layered, modular software architecture that keeps guest data secure, guarantees zero double-bookings, and operates reliably under Nigerian infrastructure conditions."
        />

        {/* Commercial Architecture Rationale Banner */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-shadow-main/90 border-hairline text-xs sm:text-sm text-ivory-warm/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-subtle">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-center text-amber-glow shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-ivory-warm">
                Independent Ownership &bull; Zero Vendor Lock-In
              </p>
              <p className="text-xs text-ivory-warm/60 font-light">
                Joclarif retains complete ownership of its code, customer database, and operational records.
                No recurring third-party booking commissions.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-shadow-darkest border-hairline text-xs text-amber-glow font-mono shrink-0">
            <span>Uptime Target: 99.9%</span>
          </div>
        </div>

        {/* 3-Tier Layered Architecture Diagram in Still Waters */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* TIER 1: FRONTEND TOUCHPOINTS */}
          <div
            onClick={() => setSelectedTier(1)}
            className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer ${
              selectedTier === 1
                ? "border-amber-glow bg-shadow-main shadow-luxury"
                : "border-hairline bg-shadow-main/70 hover:border-amber-glow/40"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-glow/15 text-amber-glow flex items-center justify-center font-mono text-xs font-bold border border-amber-glow/30">
                  01
                </span>
                <h4 className="text-xl sm:text-2xl font-serif text-ivory-warm font-normal">
                  Tier 1: Guest &amp; Staff Touchpoints
                </h4>
              </div>
              <Badge variant="amber">User Interfaces</Badge>
            </div>

            <p className="text-xs text-ivory-warm/60 mb-6 font-light">
              Unified presentation layer delivering fast, responsive experiences across devices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-3">
                <Globe className="w-5 h-5 text-amber-glow shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-ivory-warm block">
                    Guest Web Application
                  </span>
                  <span className="text-[11px] text-ivory-warm/50 font-mono">Next.js &bull; Editorial Showcase</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-amber-glow shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-ivory-warm block">
                    Guest Mobile Companion
                  </span>
                  <span className="text-[11px] text-ivory-warm/50 font-mono">Self Check-in &bull; Digital Key</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-3">
                <LayoutDashboard className="w-5 h-5 text-amber-glow shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-ivory-warm block">
                    Hotel Staff &amp; Ops Cockpit
                  </span>
                  <span className="text-[11px] text-ivory-warm/50 font-mono">Reception &bull; Housekeeping &bull; Admin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-amber-glow">
            <div className="flex flex-col items-center gap-1">
              <ArrowDown className="w-5 h-5 animate-bounce" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow/80">
                Secure Encrypted REST &amp; WebSocket APIs
              </span>
            </div>
          </div>

          {/* TIER 2: SHARED CORE APPLICATION SERVICES */}
          <div
            onClick={() => setSelectedTier(2)}
            className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer ${
              selectedTier === 2
                ? "border-amber-glow bg-shadow-main shadow-luxury"
                : "border-hairline bg-shadow-main/80 hover:border-amber-glow/50"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-glow/15 text-amber-glow flex items-center justify-center font-mono text-xs font-bold border border-amber-glow/30">
                  02
                </span>
                <h4 className="text-xl sm:text-2xl font-serif text-ivory-warm font-normal">
                  Tier 2: Unified Hospitality Engine &amp; Business Modules
                </h4>
              </div>
              <Badge variant="amber">Core Logic</Badge>
            </div>

            <p className="text-xs text-ivory-warm/60 mb-6 font-light">
              High-concurrency backend services orchestrating inventory locks, billing splits, and conversational AI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {coreModules.map((mod) => (
                <div
                  key={mod.name}
                  className="p-3.5 rounded-xl bg-shadow-darkest border-hairline hover:border-amber-glow/40 transition-colors"
                >
                  <p className="text-xs font-semibold text-champagne-200">{mod.name}</p>
                  <p className="text-[11px] text-ivory-warm/60 mt-0.5 font-light">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-amber-glow">
            <div className="flex flex-col items-center gap-1">
              <ArrowDown className="w-5 h-5 animate-bounce" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow/80">
                ACID Transactions &bull; AES-256 Storage
              </span>
            </div>
          </div>

          {/* TIER 3: DATA & INFRASTRUCTURE LAYER */}
          <div
            onClick={() => setSelectedTier(3)}
            className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer ${
              selectedTier === 3
                ? "border-amber-glow bg-shadow-main shadow-luxury"
                : "border-hairline bg-shadow-main/70 hover:border-amber-glow/40"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-glow/15 text-amber-glow flex items-center justify-center font-mono text-xs font-bold border border-amber-glow/30">
                  03
                </span>
                <h4 className="text-xl sm:text-2xl font-serif text-ivory-warm font-normal">
                  Tier 3: Enterprise Database &amp; Secure Cloud Storage
                </h4>
              </div>
              <Badge variant="amber">Persistence</Badge>
            </div>

            <p className="text-xs text-ivory-warm/60 mb-6 font-light">
              Relational PostgreSQL database with automated continuous backups, multi-AZ failover, and encrypted blob storage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-3">
                <Database className="w-5 h-5 text-amber-glow shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-ivory-warm block">
                    PostgreSQL Relational Database
                  </span>
                  <span className="text-[11px] text-ivory-warm/50 font-mono">
                    Row-level locks &bull; Strict transactional consistency
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline flex items-center gap-3">
                <Lock className="w-5 h-5 text-amber-glow shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-ivory-warm block">
                    Encrypted Document Vault
                  </span>
                  <span className="text-[11px] text-ivory-warm/50 font-mono">
                    NDPR Compliant &bull; Automated 30-day identity purge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proposed External Integrations Shelf */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-shadow-main/60 border-hairline">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-ivory-warm">
                Proposed Third-Party Integrations
              </h4>
              <p className="text-xs text-ivory-warm/60 font-light mt-0.5">
                Carefully selected external technology partners subject to technical discovery and contract sign-off.
              </p>
            </div>
            <span className="text-[11px] font-mono text-amber-glow bg-shadow-darkest px-3 py-1 rounded border-hairline">
              Nigerian &amp; Global Standards
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {externalIntegrations.map((ext) => (
              <div
                key={ext.name}
                className="p-3.5 rounded-xl bg-shadow-darkest border-hairline flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-semibold text-ivory-warm block">{ext.name}</span>
                  <span className="text-[11px] text-ivory-warm/50 font-light">{ext.provider}</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-amber-glow bg-amber-glow/10 px-2 py-0.5 rounded border border-amber-glow/30 font-mono">
                  {ext.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-champagne-200/10 text-center">
            <p className="text-[11px] text-ivory-warm/50 italic font-serif">
              * Note: These are proposed integrations subject to formal discovery, provider API SLA verification, and commercial agreement with Joclarif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
