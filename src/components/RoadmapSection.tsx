"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Layers,
  TrendingUp,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { ROADMAP_PHASES } from "@/data/mockData";

export function RoadmapSection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const phases = ROADMAP_PHASES;
  const current = phases[activePhaseIndex];

  return (
    <section id="roadmap" className="py-28 bg-[#1E1309] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Phased Rollout Strategy"
          subtitle="Strategic Capability Progression"
          title="A Structured 5-Phase Journey to Digital Excellence"
          description="A mature enterprise software deployment prioritises revenue-generating direct booking foundations first, progressively adding AI concierge capabilities and mobile self-service."
        />

        {/* Phase Selector Horizontal Pills in Still Waters */}
        <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-12">
          {phases.map((p, idx) => (
            <button
              key={p.phase}
              onClick={() => setActivePhaseIndex(idx)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                activePhaseIndex === idx
                  ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
                  : "bg-shadow-darkest text-ivory-warm/70 border-hairline hover:border-amber-glow/40"
              }`}
            >
              <span className="font-mono text-[11px] opacity-80">{p.phase}</span>
              <span>{p.title.split("&")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="rounded-3xl border-hairline bg-shadow-darkest p-6 sm:p-10 lg:p-12 shadow-luxury">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-champagne-200/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-shadow-main text-amber-glow border-hairline font-semibold">
                  {current.phase}
                </span>
                <span className="text-xs text-ivory-warm/50 tracking-wider uppercase font-medium">
                  {current.duration}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
                {current.title}
              </h3>
            </div>

            <div className="p-3.5 rounded-xl bg-shadow-main/80 border-hairline text-xs text-champagne-200 max-w-sm font-light">
              <span className="text-[10px] uppercase font-semibold text-ivory-warm/50 block mb-0.5 font-mono">
                Strategic Focus:
              </span>
              <span>{current.summary}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Deliverables List */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-200 flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4 text-amber-glow" />
                <span>Scope &amp; Core Deliverables</span>
              </h4>

              <div className="space-y-2.5">
                {current.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-shadow-main/60 border-hairline flex items-start gap-3 text-xs sm:text-sm text-ivory-warm/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Business Value Return */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-shadow-main/40 border-hairline">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-center text-amber-glow">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-serif text-ivory-warm font-normal">
                  Business &amp; Operational Return
                </h4>
                <p className="text-xs sm:text-sm text-ivory-warm/75 leading-relaxed font-light">
                  {current.businessValue}
                </p>
              </div>

              <div className="pt-6 border-t border-champagne-200/10 text-[11px] text-ivory-warm/50 italic font-serif">
                * Note: Phased rollout allows Joclarif to begin generating direct booking revenue in Phase 1 while subsequent phases are integrated smoothly without operational downtime.
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-ivory-warm/50 font-light font-serif">
          Implementation velocity is structured collaboratively during the Discovery Phase based on Joclarif&apos;s operational rhythm and staff training availability.
        </div>
      </div>
    </section>
  );
}
