"use client";

import React, { useState } from "react";
import { COMPETITIVE_DIMENSIONS, ComparisonDimension } from "@/data/investmentMockData";
import { Check, Minus, Sparkles, Shield, ArrowRight, Layers, HelpCircle } from "lucide-react";

export function CompetitivePositioningSection() {
  const [selectedDimension, setSelectedDimension] = useState<ComparisonDimension>(
    COMPETITIVE_DIMENSIONS[0]
  );

  const renderBadge = (status: "none" | "partial" | "full") => {
    switch (status) {
      case "full":
        return (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-glow/20 text-amber-glow border border-amber-glow/40">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          </span>
        );
      case "partial":
        return (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-champagne-200/10 text-champagne-200/60 border border-champagne-200/15">
            <Minus className="w-3 h-3" />
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-shadow-darkest text-ivory-warm/20">
            &times;
          </span>
        );
    }
  };

  return (
    <section
      id="section-positioning"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              STRATEGIC DIFFERENTIATION
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Connected Architecture vs Disjointed Point Solutions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            Not another hotel website. <br />
            <span className="italic font-extralight text-amber-glow">
              A connected hospitality ecosystem.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            Hotels traditionally purchase five or six disconnected software tools: a static website,
            an OTA listing, a legacy PMS, an ad-hoc WhatsApp chauffeur list, and separate accounting
            spreadsheets. Joclarif integrates these into one coordinated commercial engine.
          </p>
        </div>

        {/* Interactive Comparison Matrix */}
        <div className="rounded-3xl bg-[#140c06]/95 border border-champagne-200/15 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[960px]">
              <thead>
                <tr className="border-b border-champagne-200/15 bg-shadow-darkest/90 text-[10px] font-mono uppercase tracking-wider text-ivory-warm/60">
                  <th className="p-4 sm:p-5 font-semibold text-champagne-200">
                    Capability Dimension
                  </th>
                  <th className="p-4 sm:p-5 text-center">Static Website</th>
                  <th className="p-4 sm:p-5 text-center">OTAs (Booking)</th>
                  <th className="p-4 sm:p-5 text-center">Legacy PMS</th>
                  <th className="p-4 sm:p-5 text-center">Concierge App</th>
                  <th className="p-4 sm:p-5 text-center">Transport App</th>
                  <th className="p-4 sm:p-5 text-center">General AI</th>
                  <th className="p-4 sm:p-5 text-center bg-amber-glow/15 text-amber-glow font-bold border-l border-amber-glow/30">
                    Joclarif Ecosystem
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-champagne-200/10 text-xs text-ivory-warm/80 font-light">
                {COMPETITIVE_DIMENSIONS.map((item, idx) => {
                  const isSelected = selectedDimension.dimension === item.dimension;
                  return (
                    <tr
                      key={idx}
                      onClick={() => setSelectedDimension(item)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-[#22160b]/60"
                          : "hover:bg-shadow-main/40"
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-medium text-champagne-100 flex items-center justify-between">
                        <span>{item.dimension}</span>
                        {isSelected && (
                          <span className="text-[9px] font-mono text-amber-glow ml-2 uppercase hidden sm:inline">
                            &bull; Selected
                          </span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">{renderBadge(item.traditionalWeb)}</td>
                      <td className="p-4 sm:p-5 text-center">{renderBadge(item.otaPlatforms)}</td>
                      <td className="p-4 sm:p-5 text-center">{renderBadge(item.conventionalPms)}</td>
                      <td className="p-4 sm:p-5 text-center">{renderBadge(item.standaloneConcierge)}</td>
                      <td className="p-4 sm:p-5 text-center">{renderBadge(item.transportMarketplace)}</td>
                      <td className="p-4 sm:p-5 text-center">{renderBadge(item.generalAi)}</td>
                      <td className="p-4 sm:p-5 text-center bg-amber-glow/10 border-l border-amber-glow/20">
                        {renderBadge(item.joclarifEcosystem)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Selected Dimension Deep Dive Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#180f08] via-[#120a05] to-[#0d0804] border-t border-champagne-200/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow block">
                JOCLARIF ADVANTAGE &bull; {selectedDimension.dimension}
              </span>
              <p className="text-xs sm:text-sm text-ivory-warm/90 font-light leading-relaxed">
                {selectedDimension.joclarifNote}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-ivory-warm/50 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-glow" />
              <span>Full Integration Power</span>
            </div>
          </div>
        </div>

        {/* Strategic Framing Note */}
        <div className="p-5 rounded-2xl bg-shadow-darkest border border-champagne-200/10 flex items-start gap-3 text-xs text-ivory-warm/70 font-light leading-relaxed">
          <HelpCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
          <p>
            <strong className="text-champagne-200 font-medium">Strategic Positioning:</strong> Joclarif
            does not claim that no individual competitor has ever created a car hire booking or a room
            reservation form. The decisive commercial advantage lies in the <em>unbroken connection</em>:
            the room booking informs the airport pickup, which informs the front-desk room key, which
            informs housekeeping priority, and reconciles into a single verified folio in executive
            intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
