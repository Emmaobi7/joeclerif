"use client";

import React, { useState } from "react";
import { DATA_SOURCES, DataSourceRecord } from "@/data/intelligenceMockData";
import {
  Database,
  Layers,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  FileText,
  Server,
  Fingerprint,
  Zap,
  Smartphone,
  CheckCircle2,
  RefreshCw,
  GitMerge,
  Filter,
} from "lucide-react";

export function IntelligenceDataSourcesWorkspace() {
  const [selectedSourceId, setSelectedSourceId] = useState<string>("SRC-001");
  const selectedSource = DATA_SOURCES.find((s) => s.id === selectedSourceId) || DATA_SOURCES[0];

  const getSourceIcon = (type: DataSourceRecord["type"]) => {
    switch (type) {
      case "Legacy Spreadsheet":
        return FileSpreadsheet;
      case "Scanned Document":
        return FileText;
      case "PMS Database":
        return Server;
      case "Biometric Terminal":
        return Fingerprint;
      case "IoT Telemetry":
        return Zap;
      case "Modern Web & Mobile App":
        return Smartphone;
      default:
        return Database;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Workspace 07 &bull; Data Architecture
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              Multi-Source Ingestion &bull; Legacy-to-Modern Bridge
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-light">
            Data Source Intelligence &amp; Ingestion
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
            How Joclarif unifies historical Excel workbooks, paper archive OCR, and real-time IoT telemetry
            into one deterministic intelligence layer.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-amber-glow px-3 py-1.5 rounded-xl bg-amber-glow/10 border border-amber-glow/30">
          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          <span>6 Pipelines Active &amp; Synced</span>
        </div>
      </div>

      {/* Visual Data Ingestion Architecture Pipeline */}
      <div className="p-6 sm:p-7 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-champagne-200/10">
          <div>
            <h3 className="font-serif text-lg text-ivory-warm font-light">
              Autonomous Ingestion &amp; Entity Resolution Flow
            </h3>
            <p className="text-xs text-ivory-warm/60 mt-0.5">
              From raw fragmented records to verified executive intelligence
            </p>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-shadow-darkest border border-champagne-200/15 text-champagne-300">
            Self-Healing Data Pipeline
          </span>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="p-4 rounded-xl bg-[#0d0804]/80 border border-champagne-200/15 space-y-2 relative">
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-glow">
              <span>STAGE 01</span>
              <span>RAW INGESTION</span>
            </div>
            <div className="font-serif text-sm text-champagne-200 font-medium">
              Multi-Source Connectors
            </div>
            <p className="text-[11px] text-ivory-warm/60 leading-relaxed">
              Connects Excel workbooks, scanned paper folios, PMS SQL read-replicas, and Modbus IoT streams.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0d0804]/80 border border-champagne-200/15 space-y-2 relative">
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-glow">
              <span>STAGE 02</span>
              <span>NORMALIZATION</span>
            </div>
            <div className="font-serif text-sm text-champagne-200 font-medium">
              Schema Mapping &amp; OCR
            </div>
            <p className="text-[11px] text-ivory-warm/60 leading-relaxed">
              Optical character recognition and column standardizer resolving currency, dates, and names.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0d0804]/80 border border-champagne-200/15 space-y-2 relative">
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-glow">
              <span>STAGE 03</span>
              <span>RESOLUTION</span>
            </div>
            <div className="font-serif text-sm text-champagne-200 font-medium">
              Entity Resolution Graph
            </div>
            <p className="text-[11px] text-ivory-warm/60 leading-relaxed">
              Links guest profiles, room allocations, generator fuel logs, and staff shifts without duplicate folios.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-glow/10 border border-amber-glow/40 space-y-2 shadow-glow relative">
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-glow">
              <span>STAGE 04</span>
              <span>INTELLIGENCE</span>
            </div>
            <div className="font-serif text-sm text-champagne-100 font-medium">
              Joclarif Unified Core
            </div>
            <p className="text-[11px] text-ivory-warm/75 leading-relaxed">
              Deterministic answers, evidence citation, and executive P&amp;L audit available to management.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Source Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Source List (Left) */}
        <div className="lg:col-span-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury p-5 space-y-3">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase pb-2 border-b border-champagne-200/10">
            Connected Systems ({DATA_SOURCES.length})
          </div>

          <div className="space-y-2">
            {DATA_SOURCES.map((src) => {
              const Icon = getSourceIcon(src.type);
              const isSelected = selectedSourceId === src.id;

              return (
                <div
                  key={src.id}
                  onClick={() => setSelectedSourceId(src.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-amber-glow/15 border-amber-glow text-white shadow-glow"
                      : "bg-[#0d0804]/70 border-champagne-200/10 hover:border-amber-glow/40 text-ivory-warm/80"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-amber-glow" : "text-champagne-300/70"}`} />
                      <div className="font-serif text-sm text-champagne-200 font-medium">
                        {src.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-champagne-200/10 text-[10px] font-mono text-champagne-300/60">
                    <span>{src.recordCount}</span>
                    <span className="text-emerald-400">{src.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Source Detailed Inspector (Right) */}
        <div className="lg:col-span-7 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury p-6 sm:p-7 space-y-5">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-champagne-200/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-amber-glow uppercase px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/20">
                  {selectedSource.id}
                </span>
                <span className="text-xs font-mono text-champagne-300/60">
                  {selectedSource.type} &bull; {selectedSource.department}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory-warm font-light mt-2">
                {selectedSource.name}
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              {selectedSource.status}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10">
              <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Records Ingested</div>
              <div className="font-serif text-base text-champagne-200 font-medium mt-1">
                {selectedSource.recordCount}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10">
              <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Last Sync</div>
              <div className="font-serif text-base text-champagne-200 font-medium mt-1">
                {selectedSource.lastSync}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10 col-span-2 sm:col-span-1">
              <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Data Freshness</div>
              <div className="font-serif text-base text-amber-glow font-medium mt-1">
                {selectedSource.dataFreshness}
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-mono text-champagne-300/70 uppercase">
              Coverage &amp; Business Context
            </div>
            <p className="text-xs text-ivory-warm/80 leading-relaxed bg-[#0d0804]/70 p-3.5 rounded-xl border border-champagne-200/10">
              {selectedSource.coverage}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-champagne-300/70 uppercase flex items-center justify-between">
              <span>Sample Ingested Rows</span>
              <span className="text-[10px] text-ivory-warm/40">Verified Parse Schema</span>
            </div>
            <div className="space-y-2 font-mono text-[11px]">
              {selectedSource.sampleRecords.map((rec, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#0a0603] border border-champagne-200/10 text-amber-glow/85 overflow-x-auto"
                >
                  {rec}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-glow/5 border border-amber-glow/20 text-xs text-ivory-warm/75 leading-relaxed">
            <strong>Scalable Data Architecture:</strong> As Joclarif upgrades operational systems over time, new digital modules seamlessly attach to this same ingestion layer without breaking historical continuity.
          </div>
        </div>
      </div>
    </div>
  );
}
