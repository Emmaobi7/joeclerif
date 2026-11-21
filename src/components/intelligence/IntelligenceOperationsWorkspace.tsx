"use client";

import React, { useState } from "react";
import {
  Activity,
  BedDouble,
  Sparkles,
  ArrowRight,
  PackageCheck,
  AlertCircle,
  Clock,
  CheckCircle2,
  BellRing,
  ShoppingBag,
} from "lucide-react";

interface Props {
  onTriggerAssistantQuery: (queryText: string) => void;
}

export function IntelligenceOperationsWorkspace({ onTriggerAssistantQuery }: Props) {
  const [activeTab, setActiveTab] = useState<"rooms" | "housekeeping" | "procurement">("rooms");

  const opsQueries = [
    "Give me an overview of the hotel's operational performance this month.",
    "Which equipment requires immediate maintenance?",
    "Show housekeeping room cleaning turnaround times.",
    "List all low-stock items in the kitchen and laundry.",
  ];

  const lowStockItems = [
    { item: "Commercial Cooking LPG Cylinders (50kg)", current: "3 Cylinders (18%)", reorderThreshold: "10 Cylinders", status: "Delivery Confirmed Tomorrow 09:00", supplier: "Kaduna Gas Logistics" },
    { item: "Industrial Liquid Laundry Detergent (20L)", current: "2 Drums (12%)", reorderThreshold: "8 Drums", status: "PO #4418 Pending Sign-off", supplier: "Zaria Clean Chemical Works" },
    { item: "Premium Nigerian Arabica Coffee Beans (Bulk)", current: "4 kg (20%)", reorderThreshold: "15 kg", status: "PO #4421 Approved", supplier: "Savannah Wholesale Agritech" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Workspace 05
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              Live Operations &bull; Room Turnaround, Housekeeping &amp; Supply Chain
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-light">
            Hotel Operations Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
            Real-time synchronization across guest check-ins, housekeeping turnover queues, and
            procurement stock alerts.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onTriggerAssistantQuery("Give me an overview of the hotel's operational performance this month.")}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-amber-glow/40 bg-amber-glow/10 text-amber-glow text-xs font-mono hover:bg-amber-glow hover:text-shadow-darkest transition-all shadow-glow"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Audit Operations Pulse</span>
        </button>
      </div>

      {/* 4 Operations Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Live Occupancy
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            91 / 120 (75.8%)
          </div>
          <div className="text-[11px] font-mono text-emerald-400 mt-1">
            142 In-House Guests
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Peak occupancy supported by ABU Zaria conference and state delegations.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Housekeeping State
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            58 Cleaned
          </div>
          <div className="text-[11px] font-mono text-amber-glow mt-1">
            12 In-Queue &bull; 4 Inspecting
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            On track to achieve 100% clean status ahead of 16:00 arrival rush.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Service Response Velocity
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            8.4 mins Avg
          </div>
          <div className="text-[11px] font-mono text-emerald-400 mt-1">
            Target &lt; 15 mins
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Luggage, room service and housekeeping dispatched via digital runner.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Procurement Health
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            91.4% Stocked
          </div>
          <div className="text-[11px] font-mono text-amber-400 mt-1">
            3 Low-Stock Alerts
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            LPG cooking gas and laundry detergent flagged for replenishment.
          </div>
        </div>
      </div>

      {/* Operations Sub-View Switcher */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-shadow-darkest border border-champagne-200/10 w-fit">
        <button
          type="button"
          onClick={() => setActiveTab("rooms")}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeTab === "rooms"
              ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
              : "text-ivory-warm/70 hover:text-white"
          }`}
        >
          Guest Rooms &amp; Reception
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("housekeeping")}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeTab === "housekeeping"
              ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
              : "text-ivory-warm/70 hover:text-white"
          }`}
        >
          Housekeeping Turnaround
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("procurement")}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeTab === "procurement"
              ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
              : "text-ivory-warm/70 hover:text-white"
          }`}
        >
          Procurement &amp; Low Stock
        </button>
      </div>

      {/* Sub-view Content */}
      {activeTab === "rooms" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
          <div className="lg:col-span-8 p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-4">
            <h3 className="font-serif text-lg text-ivory-warm font-light">
              Today&apos;s Arrival &amp; Departure Trajectory
            </h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Expected Arrivals</div>
                <div className="text-2xl font-serif text-champagne-200 font-light mt-1">24 Rooms</div>
                <div className="text-[10px] font-mono text-emerald-400 mt-1">16 Already Checked-in</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Expected Departures</div>
                <div className="text-2xl font-serif text-champagne-200 font-light mt-1">18 Rooms</div>
                <div className="text-[10px] font-mono text-champagne-300/80 mt-1">15 Successfully Checked-out</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10">
                <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Stay-Overs</div>
                <div className="text-2xl font-serif text-amber-glow font-light mt-1">75 Rooms</div>
                <div className="text-[10px] font-mono text-ivory-warm/60 mt-1">Average Length: 2.8 Days</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0804]/60 border border-champagne-200/10 text-xs text-ivory-warm/75 space-y-2">
              <div className="font-medium text-champagne-200">Active Front Desk Priority Notice:</div>
              <p>
                ABU Zaria Conference delegation airport shuttle scheduled to depart Kaduna International
                Airport at 16:30 with 8 expected delegates. Fast-track digital registration QR passes generated.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-4">
            <h3 className="font-serif text-lg text-ivory-warm font-light">
              Room Category Distribution
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                <span className="text-ivory-warm/80">Executive Deluxe (West Wing)</span>
                <span className="font-mono text-amber-glow">39 / 48 (81.2%)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                <span className="text-ivory-warm/80">Superior Rooms (East Wing)</span>
                <span className="font-mono text-amber-glow">42 / 60 (70.0%)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                <span className="text-ivory-warm/80">Diplomatic Suites</span>
                <span className="font-mono text-amber-glow">9 / 11 (81.8%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ivory-warm/80">Governor Suite 401</span>
                <span className="font-mono text-emerald-400 font-semibold">1 / 1 (Occupied)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "housekeeping" && (
        <div className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
            <div>
              <h3 className="font-serif text-lg text-ivory-warm font-light">
                Housekeeping Turnaround Progress
              </h3>
              <p className="text-xs text-ivory-warm/60 mt-0.5">
                Target 100% room clearance by 16:00 &bull; 14 Room Attendants on active duty
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              78.4% Completed
            </span>
          </div>

          <div className="w-full h-3 rounded-full bg-shadow-darkest overflow-hidden border border-champagne-200/10 flex">
            <div style={{ width: "78.4%" }} className="bg-emerald-500 h-full" title="58 Cleaned" />
            <div style={{ width: "16.2%" }} className="bg-amber-500 h-full" title="12 In Progress" />
            <div style={{ width: "5.4%" }} className="bg-blue-500 h-full" title="4 Inspecting" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono pt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-ivory-warm/80">58 Cleaned &amp; Ready for Release</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-ivory-warm/80">12 Cleaning in Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-ivory-warm/80">4 Awaiting Supervisor Sign-off</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "procurement" && (
        <div className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
            <div>
              <h3 className="font-serif text-lg text-ivory-warm font-light">
                Critical Low-Stock Alerts
              </h3>
              <p className="text-xs text-ivory-warm/60 mt-0.5">
                Automated re-order triggers flagged by kitchen and housekeeping inventory systems
              </p>
            </div>
            <span className="text-xs font-mono text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              3 Items Require Action
            </span>
          </div>

          <div className="space-y-3">
            {lowStockItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="font-serif text-sm text-champagne-200 font-medium">
                    {item.item}
                  </div>
                  <div className="text-[11px] text-ivory-warm/60">
                    Vendor: {item.supplier}
                  </div>
                </div>

                <div className="flex items-center gap-4 font-mono text-[11px]">
                  <div>
                    <span className="text-ivory-warm/40">Current: </span>
                    <span className="text-amber-glow font-bold">{item.current}</span>
                  </div>
                  <div className="hidden sm:inline">
                    <span className="text-ivory-warm/40">Threshold: </span>
                    <span className="text-champagne-300">{item.reorderThreshold}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-glow/15 border border-amber-glow/30 text-amber-glow">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clickable Operations Queries */}
      <div className="p-6 rounded-2xl border border-amber-glow/30 bg-gradient-to-r from-shadow-darkest via-shadow-main to-shadow-darkest shadow-luxury">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-amber-glow" />
          <h4 className="font-serif text-base text-champagne-200 font-light">
            Ask Joclarif Operations Intelligence
          </h4>
        </div>
        <p className="text-xs text-ivory-warm/70 mb-4 max-w-xl">
          Click any query below to audit turnaround velocity, stock reserves, or guest service metrics.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {opsQueries.map((q, idx) => (
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
