"use client";

import React, { useState } from "react";
import { REVENUE_ENGINES, RevenueEngine } from "@/data/investmentMockData";
import {
  Building2,
  Car,
  HeartHandshake,
  Crown,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  Lock,
} from "lucide-react";

export function RevenueEnginesSection() {
  const [activeEngineId, setActiveEngineId] = useState<string>(REVENUE_ENGINES[0].id);

  const activeEngine =
    REVENUE_ENGINES.find((e) => e.id === activeEngineId) || REVENUE_ENGINES[0];

  const getEngineIcon = (id: string) => {
    switch (id) {
      case "core-hospitality":
        return <Building2 className="w-5 h-5 text-amber-glow" />;
      case "mobility":
        return <Car className="w-5 h-5 text-amber-glow" />;
      case "companion":
        return <HeartHandshake className="w-5 h-5 text-amber-glow" />;
      case "executive-services":
        return <Crown className="w-5 h-5 text-amber-glow" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-glow" />;
    }
  };

  return (
    <section id="section-engines" className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-[#0D0804]">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-glow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              COMMERCIAL MULTIPLIERS
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Four Revenue Engines
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            Distinct revenue engines. <br />
            <span className="italic font-extralight text-amber-glow">
              One unified commercial ecosystem.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            Rather than relying solely on room occupancy, Joclarif unlocks high-margin monetization
            across transit, events, private marketplace services, and executive dignitary retainers.
          </p>
        </div>

        {/* Engine Tabs Grid (4 Engines) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVENUE_ENGINES.map((engine) => {
            const isActive = engine.id === activeEngineId;
            return (
              <button
                key={engine.id}
                onClick={() => setActiveEngineId(engine.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
                  isActive
                    ? "bg-gradient-to-b from-[#22160b] to-[#140c06] border-amber-glow/70 shadow-[0_10px_35px_rgba(245,184,65,0.15)] ring-1 ring-amber-glow/40"
                    : "bg-shadow-main/60 hover:bg-shadow-main/90 border-champagne-200/10 hover:border-champagne-200/30"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-amber-glow/20 border border-amber-glow/50" : "bg-shadow-darkest border border-champagne-200/10"
                    }`}
                  >
                    {getEngineIcon(engine.id)}
                  </div>
                  <span className="text-[11px] font-mono text-amber-glow/80 tracking-widest font-semibold">
                    ENGINE {engine.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-champagne-100 font-light mb-1">
                  {engine.title}
                </h3>
                <p className="text-[11px] text-ivory-warm/60 font-light line-clamp-2">
                  {engine.subtitle}
                </p>

                {isActive && (
                  <div className="mt-4 pt-3 border-t border-amber-glow/20 flex items-center gap-1.5 text-[10px] font-mono text-amber-glow font-medium">
                    <span>Active Commercial Focus</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Engine Comprehensive Deep Dive Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#180f08]/95 via-[#120a05] to-[#0d0804] border border-champagne-200/15 shadow-2xl space-y-10 animate-fadeIn">
          {/* Header of Active Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-champagne-200/10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-glow px-2 py-0.5 rounded bg-amber-glow/15 border border-amber-glow/30">
                  ENGINE {activeEngine.number} OVERVIEW
                </span>
                <span className="text-xs text-ivory-warm/50 font-light">&bull;</span>
                <span className="text-xs font-serif text-champagne-200 italic">
                  {activeEngine.subtitle}
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-champagne-100 font-light">
                {activeEngine.title}
              </h3>
              <p className="text-sm sm:text-base text-ivory-warm/80 font-light leading-relaxed max-w-3xl">
                {activeEngine.overview}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-shadow-darkest/90 border border-amber-glow/30 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-glow block">
                Strategic Advantage
              </span>
              <p className="text-xs text-ivory-warm/80 font-light leading-relaxed">
                {activeEngine.competitiveAdvantage}
              </p>
            </div>
          </div>

          {/* Capabilities & Commercial Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Operational Capabilities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-glow" />
                <h4 className="text-xs font-mono uppercase tracking-[0.22em] text-champagne-200 font-semibold">
                  Ecosystem Capabilities
                </h4>
              </div>
              <div className="space-y-2.5">
                {activeEngine.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-shadow-darkest/60 border border-champagne-200/10 flex items-start gap-3 hover:border-champagne-200/25 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                    <span className="text-xs text-ivory-warm/80 font-light leading-relaxed">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Commercial Opportunities & Monetization Streams */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-glow" />
                <h4 className="text-xs font-mono uppercase tracking-[0.22em] text-champagne-200 font-semibold">
                  Commercial Opportunities
                </h4>
              </div>
              <div className="space-y-2.5">
                {activeEngine.commercialOpportunities.map((opp, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-amber-glow/5 border border-amber-glow/20 flex items-start gap-3 hover:border-amber-glow/40 transition-all"
                  >
                    <span className="w-4 h-4 rounded-full bg-amber-glow/20 text-amber-glow text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs text-champagne-100 font-light leading-relaxed">
                      {opp}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Companion Network Effects Card (if Engine 03) */}
              {activeEngine.networkEffects && (
                <div className="p-4 rounded-xl bg-[#22160b]/40 border border-champagne-200/15 space-y-2 mt-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-glow block">
                    Marketplace Scale &amp; City Network Multiplier
                  </span>
                  <ul className="space-y-1.5 text-xs text-ivory-warm/75 font-light">
                    {activeEngine.networkEffects.map((effect, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-glow" />
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Strict Governance & Compliance Disclaimer (especially for Companion and Privacy) */}
          {activeEngine.governanceNotes && (
            <div className="p-4 rounded-2xl bg-amber-glow/10 border border-amber-glow/40 flex items-start gap-3.5">
              <ShieldAlert className="w-5 h-5 text-amber-glow shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[11px] font-mono tracking-wider text-amber-glow uppercase font-semibold">
                  Regulatory Governance &amp; Ethical Guardrails
                </span>
                <p className="text-xs text-ivory-warm/85 font-light leading-relaxed">
                  {activeEngine.governanceNotes}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
