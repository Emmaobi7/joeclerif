"use client";

import React, { useState } from "react";
import {
  UserRole,
  WorkspaceId,
  ROLES,
  OPERATIONAL_ZONES,
  OperationalZone,
  FINANCIAL_METRICS,
} from "@/data/intelligenceMockData";
import { IntelligenceNavbar } from "./IntelligenceNavbar";
import { Intelligence3DHotelModel } from "./Intelligence3DHotelModel";
import { IntelligenceFinancialWorkspace } from "./IntelligenceFinancialWorkspace";
import { IntelligencePeopleWorkspace } from "./IntelligencePeopleWorkspace";
import { IntelligenceAssetsWorkspace } from "./IntelligenceAssetsWorkspace";
import { IntelligenceOperationsWorkspace } from "./IntelligenceOperationsWorkspace";
import { IntelligenceAssistantWorkspace } from "./IntelligenceAssistantWorkspace";
import { IntelligenceDataSourcesWorkspace } from "./IntelligenceDataSourcesWorkspace";
import { IntelligenceActivityWorkspace } from "./IntelligenceActivityWorkspace";
import {
  DollarSign,
  TrendingUp,
  Users,
  Wrench,
  Activity,
  Sparkles,
  Database,
  Shield,
  Layers,
  ArrowRight,
  AlertCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

export function IntelligenceCommandCentre() {
  const [activeRole, setActiveRole] = useState<UserRole>("owner");
  const [activeWorkspace, setActiveWorkspace] = useState<WorkspaceId>("overview");
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>("lobby_atrium");
  const [activeAssistantQuery, setActiveAssistantQuery] = useState<string | null>(null);

  const handleSelectZone = (zone: OperationalZone) => {
    setSelectedZoneId(zone.id);
  };

  const handleTriggerAssistantQuery = (queryText: string) => {
    setActiveAssistantQuery(queryText);
    setActiveWorkspace("assistant");
  };

  const currentRoleConfig = ROLES[activeRole];

  return (
    <div className="min-h-screen bg-[#0D0804] text-[#F7F1E6] flex flex-col selection:bg-[#F5B841] selection:text-[#0D0804]">
      {/* 1. Dedicated Intelligence Top Navigation */}
      <IntelligenceNavbar
        activeWorkspace={activeWorkspace}
        onSelectWorkspace={setActiveWorkspace}
        activeRole={activeRole}
        onChangeRole={(newRole) => {
          setActiveRole(newRole);
          // If current workspace is not allowed in new role, return to overview
          if (!ROLES[newRole].allowedWorkspaces.includes(activeWorkspace)) {
            setActiveWorkspace("overview");
          }
        }}
      />

      {/* 2. Role Simulation Status Banner */}
      <div className="w-full bg-[#140c06] border-b border-champagne-200/10 px-4 sm:px-8 lg:px-12 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-amber-glow" />
          <span className="text-ivory-warm/80">
            Active Security Clearance: <strong className="text-champagne-200">{currentRoleConfig.title}</strong> &bull;{" "}
            <span className="text-amber-glow">{currentRoleConfig.accessLevel}</span>
          </span>
        </div>
        <div className="text-[11px] font-mono text-champagne-300/60">
          Simulated Demonstration Data &bull; Zaria, Kaduna State &bull; {currentRoleConfig.badge}
        </div>
      </div>

      {/* 3. Main Workspace Container */}
      <main className="flex-1 w-full max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 py-8 space-y-8">
        {/* WORKSPACE 01: OVERVIEW (The Hotel Command Centre + 3D Model) */}
        {activeWorkspace === "overview" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Executive Welcome & Pulse */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
                    Workspace 01 &bull; Executive Command
                  </span>
                  <span className="text-xs font-mono text-champagne-300/60">
                    Live Operational State &bull; All 8 Hotel Departments
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif text-ivory-warm font-light">
                  Hotel Operations Command Centre
                </h1>
                <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
                  Comprehensive real-time snapshot synthesizing financial health, guest room occupancy,
                  housekeeping queues, and standby generator telemetry.
                </p>
              </div>

              {/* Fast Action Quick Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleTriggerAssistantQuery("Give me an overview of the hotel's operational performance this month.")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-wider uppercase shadow-glow hover:opacity-95 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Overview</span>
                </button>
              </div>
            </div>

            {/* 8 Executive Quick-Look KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Revenue (MTD)</div>
                <div className="font-serif text-base sm:text-lg text-amber-glow font-medium mt-1">₦48.65M</div>
                <div className="text-[9px] font-mono text-emerald-400 mt-0.5">+14.8% YoY</div>
              </div>

              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">OpEx (MTD)</div>
                <div className="font-serif text-base sm:text-lg text-champagne-200 font-medium mt-1">₦29.42M</div>
                <div className="text-[9px] font-mono text-emerald-400 mt-0.5">-3.2% vs Budget</div>
              </div>

              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Net Profit (NOI)</div>
                <div className="font-serif text-base sm:text-lg text-emerald-400 font-medium mt-1">₦19.23M</div>
                <div className="text-[9px] font-mono text-champagne-300/80 mt-0.5">39.5% Margin</div>
              </div>

              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Occupancy</div>
                <div className="font-serif text-base sm:text-lg text-champagne-100 font-medium mt-1">75.8%</div>
                <div className="text-[9px] font-mono text-emerald-400 mt-0.5">91 / 120 Rooms</div>
              </div>

              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Active Guests</div>
                <div className="font-serif text-base sm:text-lg text-champagne-200 font-medium mt-1">142 In-House</div>
                <div className="text-[9px] font-mono text-champagne-300/80 mt-0.5">24 Arrivals Today</div>
              </div>

              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Duty Staff</div>
                <div className="font-serif text-base sm:text-lg text-champagne-200 font-medium mt-1">38 Active</div>
                <div className="text-[9px] font-mono text-emerald-400 mt-0.5">94.2% Attendance</div>
              </div>

              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Maintenance</div>
                <div className="font-serif text-base sm:text-lg text-amber-glow font-medium mt-1">3 Issues</div>
                <div className="text-[9px] font-mono text-amber-400 mt-0.5">Room 208 Split AC</div>
              </div>

              <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Pending Suppliers</div>
                <div className="font-serif text-base sm:text-lg text-champagne-200 font-medium mt-1">5 Batches</div>
                <div className="text-[9px] font-mono text-champagne-300/80 mt-0.5">₦4.85M Total Due</div>
              </div>
            </div>

            {/* Signature Central Feature: Interactive 3D Architectural Hotel Cutaway */}
            <Intelligence3DHotelModel
              selectedZoneId={selectedZoneId}
              onSelectZone={handleSelectZone}
              onNavigateWorkspace={setActiveWorkspace}
            />

            {/* Quick Workspace Switcher Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div
                onClick={() => setActiveWorkspace("financials")}
                className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury hover:border-amber-glow/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-amber-glow" />
                    <h3 className="font-serif text-lg text-champagne-200 font-light">Financial Intelligence</h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-glow group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-ivory-warm/70 mt-3 leading-relaxed">
                  Analyze departmental profit margins, 2026 monthly trajectories, expense distribution,
                  and vendor payment liabilities.
                </p>
              </div>

              <div
                onClick={() => setActiveWorkspace("people")}
                className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury hover:border-amber-glow/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-glow" />
                    <h3 className="font-serif text-lg text-champagne-200 font-light">Workforce Intelligence</h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-glow group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-ivory-warm/70 mt-3 leading-relaxed">
                  Review live biometric attendance from hardware terminals, duty shifts, and confidential
                  departmental payroll allocations.
                </p>
              </div>

              <div
                onClick={() => setActiveWorkspace("datasources")}
                className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury hover:border-amber-glow/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-amber-glow" />
                    <h3 className="font-serif text-lg text-champagne-200 font-light">Data Ingestion Architecture</h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-glow group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-ivory-warm/70 mt-3 leading-relaxed">
                  Inspect how legacy spreadsheets from 2018–2024, paper OCR folios, and real-time IoT Modbus
                  telemetry merge into one intelligence layer.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* WORKSPACE 02: FINANCIALS */}
        {activeWorkspace === "financials" && (
          <IntelligenceFinancialWorkspace onTriggerAssistantQuery={handleTriggerAssistantQuery} />
        )}

        {/* WORKSPACE 03: PEOPLE / HR */}
        {activeWorkspace === "people" && (
          <IntelligencePeopleWorkspace onTriggerAssistantQuery={handleTriggerAssistantQuery} />
        )}

        {/* WORKSPACE 04: ASSETS & MAINTENANCE */}
        {activeWorkspace === "assets" && (
          <IntelligenceAssetsWorkspace onTriggerAssistantQuery={handleTriggerAssistantQuery} />
        )}

        {/* WORKSPACE 05: HOTEL OPERATIONS */}
        {activeWorkspace === "operations" && (
          <IntelligenceOperationsWorkspace onTriggerAssistantQuery={handleTriggerAssistantQuery} />
        )}

        {/* WORKSPACE 06: INTELLIGENCE ASSISTANT */}
        {activeWorkspace === "assistant" && (
          <IntelligenceAssistantWorkspace initialQuery={activeAssistantQuery} />
        )}

        {/* WORKSPACE 07: DATA SOURCES & INGESTION */}
        {activeWorkspace === "datasources" && <IntelligenceDataSourcesWorkspace />}

        {/* WORKSPACE 08: ACTIVITY & AUDIT */}
        {activeWorkspace === "activity" && <IntelligenceActivityWorkspace />}
      </main>
    </div>
  );
}
