"use client";

import React, { useState } from "react";
import { ASSET_INVENTORY, AssetRecord } from "@/data/intelligenceMockData";
import {
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Shield,
  Search,
  Filter,
  X,
  Zap,
} from "lucide-react";

interface Props {
  onTriggerAssistantQuery: (queryText: string) => void;
}

export function IntelligenceAssetsWorkspace({ onTriggerAssistantQuery }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inspectingAsset, setInspectingAsset] = useState<AssetRecord | null>(null);

  const categories = [
    "All",
    "Power & Generation",
    "HVAC & Climate",
    "Commercial Kitchen",
    "Laundry & Housekeeping",
    "Security & IT",
  ];

  const filteredAssets = ASSET_INVENTORY.filter(
    (a) => selectedCategory === "All" || a.category === selectedCategory
  );

  const assetQueries = [
    "Which equipment requires immediate maintenance?",
    "What is our total maintenance expenditure this quarter?",
    "Which assets have been out of service longest?",
    "Show outstanding purchase orders for spare parts.",
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Workspace 04
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              Fixed Asset Register &bull; Preventative Maintenance Automation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-light">
            Equipment &amp; Asset Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
            Live lifecycle tracking across standby generators, chillers, commercial kitchen lines,
            and laundry equipment.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onTriggerAssistantQuery("Which equipment requires immediate maintenance?")}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-amber-glow/40 bg-amber-glow/10 text-amber-glow text-xs font-mono hover:bg-amber-glow hover:text-shadow-darkest transition-all shadow-glow"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Audit Asset Health</span>
        </button>
      </div>

      {/* 4 Asset Health KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Total Registered Assets
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            128 Assets
          </div>
          <div className="text-[11px] font-mono text-emerald-400 mt-1">
            121 in Active Service (94.5%)
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Full cryptographic asset barcode tagging across all facilities.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Maintenance Attention
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-amber-glow font-light mt-2">
            4 Queued
          </div>
          <div className="text-[11px] font-mono text-amber-400 mt-1">
            1 Critical / 3 Preventative
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Automated work order tickets dispatched with technician alerts.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Out of Service Equipment
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            3 Units
          </div>
          <div className="text-[11px] font-mono text-rose-400 mt-1">
            Room 208 Daikin Split AC
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Parts arrived in transit; technician replacement scheduled today.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Maintenance Spend (Q4)
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            ₦1,850,000
          </div>
          <div className="text-[11px] font-mono text-emerald-400 mt-1">
            -8.4% Below Budget
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Preventative servicing on generators preventing catastrophic downtime.
          </div>
        </div>
      </div>

      {/* Filterable Asset Inventory Table */}
      <div className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-champagne-200/10">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                    : "text-ivory-warm/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-champagne-300/60">
            Showing {filteredAssets.length} of {ASSET_INVENTORY.length} Key Assets
          </div>
        </div>

        {/* Asset Cards / List */}
        <div className="space-y-3">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              onClick={() => setInspectingAsset(asset)}
              className="p-4 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 hover:border-amber-glow/40 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-amber-glow uppercase px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/20">
                    {asset.id}
                  </span>
                  <span className="text-[11px] text-ivory-warm/50 font-mono">
                    {asset.department} &bull; Installed {asset.installedYear}
                  </span>
                </div>
                <h4 className="font-serif text-base text-champagne-200 font-light">
                  {asset.name}
                </h4>
                <div className="text-[11px] text-ivory-warm/65 line-clamp-1">
                  {asset.runtimeOrUsage} &bull; Vendor: {asset.serviceVendor}
                </div>
              </div>

              <div className="flex flex-wrap md:flex-col items-start md:items-end justify-between md:justify-center gap-2 shrink-0">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono ${
                    asset.condition === "Optimal"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : asset.condition === "Requires Inspection"
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                  }`}
                >
                  {asset.condition}
                </span>
                <span className="text-[10px] font-mono text-champagne-300/70">
                  Next Service: {asset.nextService}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Asset Detail Modal / Inspector Drawer */}
      {inspectingAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-xl rounded-2xl bg-[#0d0804] border border-amber-glow/40 p-6 sm:p-7 shadow-luxury space-y-5">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-champagne-200/10">
              <div>
                <span className="font-mono text-[10px] text-amber-glow uppercase px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/20">
                  {inspectingAsset.id}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory-warm font-light mt-2">
                  {inspectingAsset.name}
                </h3>
                <div className="text-xs text-ivory-warm/60 mt-1">
                  Department: {inspectingAsset.department} &bull; Category: {inspectingAsset.category}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setInspectingAsset(null)}
                className="p-1 rounded-lg border border-champagne-200/15 text-champagne-200 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Condition</div>
                <div className="font-serif text-sm text-champagne-200 font-medium mt-1">
                  {inspectingAsset.condition}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Installed</div>
                <div className="font-serif text-sm text-champagne-200 font-medium mt-1">
                  {inspectingAsset.installedYear} (Age: {2026 - inspectingAsset.installedYear} yrs)
                </div>
              </div>
              <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Last Service</div>
                <div className="font-serif text-sm text-champagne-200 font-medium mt-1">
                  {inspectingAsset.lastService}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Next Scheduled</div>
                <div className="font-serif text-sm text-amber-glow font-medium mt-1">
                  {inspectingAsset.nextService}
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono text-champagne-300/70 uppercase">
                Service History &amp; Diagnostics
              </div>
              <div className="p-3.5 rounded-xl bg-shadow-darkest border border-champagne-200/10 text-xs text-ivory-warm/80 leading-relaxed">
                {inspectingAsset.serviceHistory}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-champagne-300/60">
                Certified Service Partner: {inspectingAsset.serviceVendor}
              </span>
              <button
                type="button"
                onClick={() => {
                  setInspectingAsset(null);
                  onTriggerAssistantQuery(`What is the maintenance history and status of ${inspectingAsset.name}?`);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-glow text-shadow-darkest font-semibold text-xs uppercase tracking-wider shadow-glow hover:opacity-95"
              >
                <span>Ask AI Assistant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clickable Asset Queries */}
      <div className="p-6 rounded-2xl border border-amber-glow/30 bg-gradient-to-r from-shadow-darkest via-shadow-main to-shadow-darkest shadow-luxury">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-amber-glow" />
          <h4 className="font-serif text-base text-champagne-200 font-light">
            Ask Joclarif Asset Intelligence
          </h4>
        </div>
        <p className="text-xs text-ivory-warm/70 mb-4 max-w-xl">
          Click any query below to review work orders, maintenance costs, and preventative telemetry logs.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {assetQueries.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onTriggerAssistantQuery(q)}
              className="px-3.5 py-2 rounded-xl border border-champagne-200/20 bg-shadow-darkest/90 hover:border-amber-glow hover:bg-amber-glow/10 text-xs font-mono text-champagne-200/90 hover:text-white transition-all flex items-center gap-2 text-left"
            >
              <span>{q}</span>
              <ArrowRight className="w-3 h-3 text-amber-glow shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
