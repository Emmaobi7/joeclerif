"use client";

import React, { useState } from "react";
import { ACTIVITY_AUDIT_LOGS, ActivityAuditEntry } from "@/data/intelligenceMockData";
import {
  History,
  ShieldCheck,
  Search,
  Filter,
  ArrowRight,
  Clock,
  Sparkles,
  FileText,
  AlertTriangle,
  RefreshCw,
  Key,
} from "lucide-react";

export function IntelligenceActivityWorkspace() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Query", "Export", "Sync", "Alert", "Maintenance"];

  const filteredLogs = ACTIVITY_AUDIT_LOGS.filter((entry) => {
    const matchesCat = selectedCategory === "All" || entry.category === selectedCategory;
    const matchesSearch =
      entry.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Workspace 08 &bull; Compliance &amp; Governance
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              Immutable System Audit Log &bull; NDPR Safeguards
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-light">
            Activity &amp; Audit Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
            Cryptographically timestamped trail of management queries, financial exports, automated telemetry syncs,
            and operational dispatch orders.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Audit Logging Active</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-champagne-300/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search audit trail..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-4 py-1.5 rounded-lg bg-shadow-darkest border border-champagne-200/15 text-xs text-ivory-warm placeholder:text-ivory-warm/30 focus:outline-none focus:border-amber-glow/60 w-full sm:w-60"
            />
          </div>
        </div>

        {/* Audit Log Feed */}
        <div className="space-y-3">
          {filteredLogs.map((entry) => (
            <div
              key={entry.id}
              className="p-4 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 flex flex-col md:flex-row md:items-start justify-between gap-3 text-xs hover:border-amber-glow/30 transition-all"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-amber-glow uppercase px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/20">
                    {entry.id}
                  </span>
                  <span className="text-[11px] font-mono text-champagne-300/60">
                    {entry.timestamp}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-shadow-darkest border border-champagne-200/15 text-ivory-warm/80">
                    {entry.category}
                  </span>
                </div>

                <div className="font-serif text-sm text-champagne-200 font-medium pt-0.5">
                  {entry.action}
                </div>

                <p className="text-xs text-ivory-warm/70 leading-relaxed">
                  {entry.details}
                </p>
              </div>

              <div className="flex md:flex-col items-start md:items-end justify-between md:justify-center gap-1 shrink-0 text-right font-mono text-[11px]">
                <span className="text-champagne-200 font-medium">{entry.user}</span>
                <span className="text-ivory-warm/50 text-[10px]">{entry.department}</span>
                <span
                  className={`mt-1 px-2 py-0.5 rounded-full text-[9px] ${
                    entry.severity === "success"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : entry.severity === "warning"
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {entry.severity.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
