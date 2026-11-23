"use client";

import React from "react";
import { INACTION_RISKS } from "@/data/investmentMockData";
import { AlertOctagon, TrendingDown, Clock, ShieldX, HelpCircle, ArrowRight } from "lucide-react";

export function CostOfDoingNothingSection() {
  return (
    <section className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-gradient-to-b from-[#0D0804] via-[#140c06] to-[#0D0804]">
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-rose-400 px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/30">
              OPPORTUNITY COST ANALYSIS
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              The Cost of Inaction
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            Growth without visibility <br />
            <span className="italic font-extralight text-amber-glow">
              creates unnecessary complexity.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            The fundamental commercial question is not solely what technology costs. It is what a
            hospitality business continues to forfeit in lost direct margins, administrative drag,
            unbilled services, and surrendered mobility revenue when operations remain fragmented.
          </p>
        </div>

        {/* 10 Inaction Risk Vectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INACTION_RISKS.map((risk, idx) => (
            <div
              key={risk.id}
              className="p-6 rounded-2xl bg-shadow-main/80 border border-champagne-200/10 hover:border-rose-500/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                  <span className="text-[10px] font-mono text-rose-400 font-semibold uppercase">
                    RISK VECTOR 0{idx + 1}
                  </span>
                  <AlertOctagon className="w-4 h-4 text-rose-400/80" />
                </div>
                <h3 className="font-serif text-lg text-champagne-100 font-normal">
                  {risk.title}
                </h3>
                <p className="text-xs text-ivory-warm/75 font-light leading-relaxed">
                  {risk.consequence}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-champagne-200/10">
                <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-[9px] font-mono text-rose-300 uppercase tracking-wider block">
                    Estimated Annual Opportunity Cost:
                  </span>
                  <span className="text-xs font-mono font-medium text-rose-200">
                    {risk.annualOpportunityCostEstimate}
                  </span>
                </div>
                <p className="text-[11px] text-ivory-warm/50 font-light italic">
                  Operational friction: {risk.operationalFriction}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery Advisory Framing */}
        <div className="p-6 rounded-2xl bg-shadow-darkest border border-champagne-200/15 flex items-start gap-3.5 text-xs text-ivory-warm/75 font-light leading-relaxed max-w-4xl">
          <HelpCircle className="w-5 h-5 text-amber-glow shrink-0 mt-0.5" />
          <p>
            <strong className="text-champagne-200 font-medium">Validation During Discovery:</strong> Joclarif
            does not assert that every one of these losses is actively occurring within your property.
            Rather, these represent structural industry vulnerabilities that our diagnostic phase
            quantifies and systematically resolves.
          </p>
        </div>
      </div>
    </section>
  );
}
