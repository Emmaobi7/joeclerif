"use client";

import React, { useState } from "react";
import { PROTECTION_AREAS, ProtectionArea } from "@/data/investmentMockData";
import {
  ShieldCheck,
  Search,
  FileCheck,
  AlertTriangle,
  Receipt,
  FileSpreadsheet,
  CheckCircle2,
  Lock,
  ArrowRight,
  Database,
  Eye,
} from "lucide-react";

export function BusinessProtectionSection() {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(PROTECTION_AREAS[0].id);

  const selectedArea =
    PROTECTION_AREAS.find((a) => a.id === selectedAreaId) || PROTECTION_AREAS[0];

  const getEvidenceBadge = (type: ProtectionArea["evidenceType"]) => {
    switch (type) {
      case "verified-ledger":
        return {
          label: "VERIFIED LEDGER ENTRY",
          color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        };
      case "document-ocr":
        return {
          label: "SCANNED VENDOR INVOICE",
          color: "text-amber-glow border-amber-glow/30 bg-amber-glow/10",
        };
      case "real-time-sensor":
        return {
          label: "BIOMETRIC / SENSOR TELEMETRY",
          color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
        };
      default:
        return {
          label: "SIMULATED FINANCIAL PROJECTION",
          color: "text-champagne-200/80 border-champagne-200/20 bg-shadow-darkest",
        };
    }
  };

  return (
    <section
      id="section-protection"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-gradient-to-b from-[#0D0804] via-[#140c06] to-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              AUDIT &amp; GOVERNANCE
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Operational Protection
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            The business should know <br />
            <span className="italic font-extralight text-amber-glow">
              where its money goes.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            Revenue leakage, inventory shrinkage, unmonitored overtime, and emergency repair premiums
            silently erode hotel profits. Joclarif provides a unified management layer with traceable,
            evidence-backed oversight across all operations.
          </p>
        </div>

        {/* 5 Leak Vectors Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 5 Protection Area Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ivory-warm/50 block mb-1">
              Select Audit Vector to Inspect
            </span>
            {PROTECTION_AREAS.map((area, idx) => {
              const isSelected = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border flex items-center justify-between ${
                    isSelected
                      ? "bg-gradient-to-r from-[#22160b] to-[#180f08] border-amber-glow/60 shadow-lg text-champagne-100"
                      : "bg-shadow-main/50 hover:bg-shadow-main/80 border-champagne-200/10 text-champagne-200/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-amber-glow font-semibold">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-serif text-base font-normal text-champagne-100">
                        {area.title}
                      </h4>
                      <p className="text-[11px] text-ivory-warm/60 line-clamp-1 font-light">
                        {area.illustrativeImpact}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-amber-glow translate-x-1" : "text-ivory-warm/30"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Forensic Audit Inspector Viewport (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#180f08]/95 via-[#120a05] to-[#0d0804] border border-champagne-200/15 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-champagne-200/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow">
                  FORENSIC AUDIT VIEW
                </span>
                <h3 className="font-serif text-2xl text-champagne-100 font-light mt-0.5">
                  {selectedArea.title}
                </h3>
              </div>
              <span
                className={`text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                  getEvidenceBadge(selectedArea.evidenceType).color
                }`}
              >
                {getEvidenceBadge(selectedArea.evidenceType).label}
              </span>
            </div>

            {/* Risk vs Remedy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-shadow-darkest/90 border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                    Unmonitored Vulnerability
                  </span>
                </div>
                <p className="text-xs text-ivory-warm/80 font-light leading-relaxed">
                  {selectedArea.riskDescription}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-glow/10 border border-amber-glow/30 space-y-2">
                <div className="flex items-center gap-2 text-amber-glow">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                    Joclarif Systematic Remedy
                  </span>
                </div>
                <p className="text-xs text-champagne-100 font-light leading-relaxed">
                  {selectedArea.intelligenceRemedy}
                </p>
              </div>
            </div>

            {/* Illustrative Financial Recovery */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#22160b]/70 to-[#140c06] border border-champagne-200/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-champagne-200/60 block">
                  Illustrative Financial Impact:
                </span>
                <span className="text-sm sm:text-base font-serif text-amber-glow font-medium">
                  {selectedArea.illustrativeImpact}
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-shadow-darkest text-[10px] font-mono text-champagne-200/70 border border-champagne-200/10 shrink-0">
                Continuous Automated Check
              </div>
            </div>

            {/* Traceable Evidence Architecture Principle */}
            <div className="pt-4 border-t border-champagne-200/10 space-y-2 text-[11px] text-ivory-warm/65 font-light leading-relaxed">
              <div className="flex items-center gap-2 text-amber-glow font-mono text-[10px]">
                <Database className="w-3.5 h-3.5" />
                <span>TRACEABLE EVIDENCE PRINCIPLE (NO BLACK-BOX HALLUCINATIONS)</span>
              </div>
              <p>
                Every financial figure reported by Joclarif Intelligence cites verifiable source
                documents—electronic door lock logs, POS transactions, bank settlement batches, and
                biometric timestamps—so leadership can audit every naira with forensic certainty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
