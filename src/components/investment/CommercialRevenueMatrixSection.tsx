"use client";

import React, { useState } from "react";
import { COMMERCIAL_STREAMS, CommercialStream } from "@/data/investmentMockData";
import { DollarSign, Shield, ArrowRight, Layers, PieChart, Sparkles } from "lucide-react";

export function CommercialRevenueMatrixSection() {
  const [filterAttribution, setFilterAttribution] = useState<string>("all");

  const filteredStreams =
    filterAttribution === "all"
      ? COMMERCIAL_STREAMS
      : COMMERCIAL_STREAMS.filter((s) => s.ownershipAttribution === filterAttribution);

  const getAttributionBadge = (attr: CommercialStream["ownershipAttribution"]) => {
    switch (attr) {
      case "Hotel Direct":
        return {
          label: "100% HOTEL DIRECT",
          style: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        };
      case "Shared Commission":
        return {
          label: "SHARED / COMMISSION",
          style: "bg-amber-glow/15 text-amber-glow border-amber-glow/40",
        };
      case "Platform Operator":
        return {
          label: "PLATFORM OPERATOR",
          style: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
        };
    }
  };

  return (
    <section
      id="section-model"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              REVENUE SHARING &amp; OWNERSHIP
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Commercial Model Matrix
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            Where value is created. <br />
            <span className="italic font-extralight text-amber-glow">
              How the ecosystem earns.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            A transparent architectural matrix clarifying who pays, what value they receive, whether
            revenue is recurring or transactional, and how commercial ownership is contractually
            attributed between the hotel and platform.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-warm/50 mr-2">
            Filter by Ownership:
          </span>
          {[
            { id: "all", label: "All 10 Revenue Streams" },
            { id: "Hotel Direct", label: "Hotel Direct (100% Yield)" },
            { id: "Shared Commission", label: "Shared Commission Models" },
            { id: "Platform Operator", label: "Platform Operator Streams" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterAttribution(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all border ${
                filterAttribution === tab.id
                  ? "bg-amber-glow text-shadow-darkest border-amber-glow font-semibold shadow-glow"
                  : "bg-shadow-main/80 text-champagne-200/70 border-champagne-200/10 hover:border-champagne-200/30 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Commercial Streams Table / Grid */}
        <div className="rounded-3xl bg-[#140c06]/95 border border-champagne-200/15 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1020px]">
              <thead>
                <tr className="border-b border-champagne-200/15 bg-shadow-darkest/90 text-[10px] font-mono uppercase tracking-wider text-ivory-warm/60">
                  <th className="p-4 sm:p-5 font-semibold text-champagne-200">Revenue Stream</th>
                  <th className="p-4 sm:p-5">Proposed Model</th>
                  <th className="p-4 sm:p-5">Who Pays</th>
                  <th className="p-4 sm:p-5">Value Received</th>
                  <th className="p-4 sm:p-5">How Joclarif Earns</th>
                  <th className="p-4 sm:p-5 text-center">Type</th>
                  <th className="p-4 sm:p-5 text-center">Ownership Attribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-champagne-200/10 text-xs text-ivory-warm/80 font-light">
                {filteredStreams.map((s, idx) => {
                  const badge = getAttributionBadge(s.ownershipAttribution);
                  return (
                    <tr key={idx} className="hover:bg-shadow-main/40 transition-colors">
                      <td className="p-4 sm:p-5 font-serif text-sm font-medium text-champagne-100 whitespace-nowrap">
                        {s.stream}
                      </td>
                      <td className="p-4 sm:p-5 text-ivory-warm/75">{s.proposedModel}</td>
                      <td className="p-4 sm:p-5 text-champagne-200/90 font-mono text-[11px]">
                        {s.whoPays}
                      </td>
                      <td className="p-4 sm:p-5 text-ivory-warm/70 max-w-xs">{s.valueReceived}</td>
                      <td className="p-4 sm:p-5 text-amber-glow font-medium text-[11px]">
                        {s.howJoclarifEarns}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-mono text-[10px] whitespace-nowrap">
                        {s.modelType}
                      </td>
                      <td className="p-4 sm:p-5 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full border text-[9px] font-mono tracking-wider uppercase font-semibold ${badge.style}`}
                        >
                          {badge.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ownership Clarification Disclaimer */}
        <div className="p-5 rounded-2xl bg-shadow-darkest border border-champagne-200/10 flex items-start gap-3 text-xs text-ivory-warm/70 font-light leading-relaxed">
          <Shield className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
          <p>
            <strong className="text-champagne-200 font-medium">Contractual Alignment:</strong> Not all
            revenue streams automatically accrue directly to the hotel, nor does Joclarif retain room
            income. Hotel accommodation and banquets remain 100% hotel direct yield. Partner services,
            mobility dispatches, and private marketplace commissions are subject to explicit contractual
            commission agreements signed prior to activation.
          </p>
        </div>
      </div>
    </section>
  );
}
