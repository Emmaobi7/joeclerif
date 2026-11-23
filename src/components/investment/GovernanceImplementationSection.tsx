"use client";

import React from "react";
import { IMPLEMENTATION_PHASES, ImplementationPhase } from "@/data/investmentMockData";
import { ShieldCheck, Calendar, CheckCircle2, ArrowRight, Layers, FileText } from "lucide-react";

export function GovernanceImplementationSection() {
  const getCategoryBadge = (cat: ImplementationPhase["governanceCategory"]) => {
    switch (cat) {
      case "Proposed Production":
        return {
          label: "PROPOSED PRODUCTION",
          style: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        };
      case "Regulatory Review":
        return {
          label: "REGULATORY & GOVERNANCE REVIEW",
          style: "bg-amber-glow/15 text-amber-glow border-amber-glow/40",
        };
      case "Third-Party Contract":
        return {
          label: "THIRD-PARTY CONTRACT REQUIRED",
          style: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
        };
      default:
        return {
          label: "DEMONSTRATION CONCEPT",
          style: "bg-champagne-200/15 text-champagne-200 border-champagne-200/30",
        };
    }
  };

  return (
    <section
      id="section-governance"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              PHASED ROLLOUT
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Implementation &amp; Commercial Governance
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            Controlled implementation. <br />
            <span className="italic font-extralight text-amber-glow">
              Measured commercial stages.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            The ecosystem is deployed in controlled, value-accretive stages rather than an overwhelming
            all-at-once overhaul. Each stage delivers standalone ROI and operational certainty before
            expanding into wider marketplace channels.
          </p>
        </div>

        {/* 6 Implementation Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPLEMENTATION_PHASES.map((stage) => {
            const badge = getCategoryBadge(stage.governanceCategory);
            return (
              <div
                key={stage.phase}
                className="p-6 rounded-2xl bg-gradient-to-b from-shadow-main/90 to-shadow-darkest border border-champagne-200/10 hover:border-amber-glow/40 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
                    <span className="text-xs font-mono font-semibold text-amber-glow">
                      STAGE 0{stage.phase}
                    </span>
                    <span className="text-[10px] font-mono text-ivory-warm/50 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {stage.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-champagne-100 font-normal">
                      {stage.title}
                    </h3>
                    <span className="text-[11px] font-mono text-champagne-200/60 block mt-0.5">
                      Focus: {stage.focus}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-warm/40 block">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-ivory-warm/75 font-light">
                      {stage.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-champagne-200/10">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full border text-[9px] font-mono tracking-wider uppercase font-semibold ${badge.style}`}
                  >
                    {badge.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Classification Governance Callout */}
        <div className="p-6 rounded-2xl bg-shadow-darkest border border-champagne-200/15 space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-amber-glow font-mono text-xs uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Strict Proposal Disclosure &amp; Governance Standard</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ivory-warm/75 font-light leading-relaxed">
            <p>
              &bull; <strong>No Fake Partnerships Claimed:</strong> Third-party integrations
              (payment gateways, chauffeur syndicates, corporate accounts) are formally contracted
              under bilateral agreements during implementation stages.
            </p>
            <p>
              &bull; <strong>Regulatory Due Diligence:</strong> Ancillary marketplace modules,
              including the private Companion service, require explicit legal and compliance sign-off
              before public or private activation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
