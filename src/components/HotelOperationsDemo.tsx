"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Bed,
  CheckCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Calendar,
  Sparkles,
  Users,
  Building,
  CreditCard,
  MessageSquare,
  Wrench,
  TrendingUp,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

type OpsTab = "kpis" | "rooms" | "housekeeping" | "events" | "payments";

export function HotelOperationsDemo() {
  const [activeOpsTab, setActiveOpsTab] = useState<OpsTab>("kpis");
  const [roomFilter, setRoomFilter] = useState<"all" | "Available" | "Occupied" | "Cleaning" | "Maintenance">("all");

  const mockRooms = [
    { number: "101", type: "Standard King", status: "Occupied", floor: 1, guest: "Dr. Danjuma" },
    { number: "102", type: "Standard King", status: "Available", floor: 1, guest: "—" },
    { number: "103", type: "Standard Twin", status: "Cleaning", floor: 1, guest: "Housekeeping Active" },
    { number: "104", type: "Standard Twin", status: "Available", floor: 1, guest: "—" },
    { number: "201", type: "Deluxe Queen", status: "Occupied", floor: 2, guest: "Alhaji Sani" },
    { number: "202", type: "Deluxe Queen", status: "Available", floor: 2, guest: "—" },
    { number: "203", type: "Deluxe Double", status: "Occupied", floor: 2, guest: "Mrs. Yusuf" },
    { number: "204", type: "Deluxe Double", status: "Maintenance", floor: 2, guest: "AC Sensor Calibration" },
    { number: "301", type: "Executive Suite", status: "Occupied", floor: 3, guest: "Engr. Coker" },
    { number: "302", type: "Executive Suite", status: "Available", floor: 3, guest: "—" },
    { number: "303", type: "Executive Suite", status: "Cleaning", floor: 3, guest: "Inspection Pending" },
    { number: "401", type: "Governor Suite", status: "Occupied", floor: 4, guest: "Chief Adewale (VIP)" },
  ];

  const filteredRooms = mockRooms.filter((r) => {
    if (roomFilter === "all") return true;
    return r.status === roomFilter;
  });

  return (
    <section id="operations" className="py-28 bg-[#170F07] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam-left absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Executive Cockpit"
          subtitle="Hotel Operations &amp; Property Management"
          title="Command Centre: Real-Time Transparency for Hotel Leadership"
          description="A unified operational dashboard connects front desk check-ins, housekeeping inspection queues, banquet schedules, and revenue ledgers into a single, intuitive control panel."
        />

        {/* Dashboard Frame Container in Still Waters */}
        <div className="rounded-3xl border-hairline bg-shadow-darkest shadow-luxury overflow-hidden">
          {/* Top Operational Bar */}
          <div className="p-5 sm:p-6 bg-shadow-main/90 border-b border-champagne-200/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-shadow-darkest border-hairline flex items-center justify-center text-amber-glow">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-serif text-ivory-warm font-normal">
                    Joclarif Operational Command Board
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-shadow-darkest text-amber-glow border-hairline">
                    LIVE PREVIEW
                  </span>
                </div>
                <p className="text-xs text-ivory-warm/60">
                  Simulated Property: Joclarif Hotel, Zaria &bull; Active Date: 25 November 2026
                </p>
              </div>
            </div>

            {/* Ops Sub-Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-shadow-darkest border-hairline text-xs">
              <button
                onClick={() => setActiveOpsTab("kpis")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeOpsTab === "kpis"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Overview &amp; KPIs
              </button>
              <button
                onClick={() => setActiveOpsTab("rooms")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeOpsTab === "rooms"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Room Grid (12 Units)
              </button>
              <button
                onClick={() => setActiveOpsTab("housekeeping")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeOpsTab === "housekeeping"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Housekeeping
              </button>
              <button
                onClick={() => setActiveOpsTab("events")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeOpsTab === "events"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Events &amp; Banquets
              </button>
              <button
                onClick={() => setActiveOpsTab("payments")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeOpsTab === "payments"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Financials
              </button>
            </div>
          </div>

          {/* TAB 1: OVERVIEW & KPIS */}
          {activeOpsTab === "kpis" && (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-shadow-main/80 border-hairline">
                  <span className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                    Occupancy Rate
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-normal text-amber-glow">84.6%</span>
                    <span className="text-[11px] text-emerald-400 font-mono">+12% vs last month</span>
                  </div>
                  <span className="text-[10px] text-ivory-warm/60 mt-2 block font-light">
                    42 of 50 Operational Rooms Booked
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-shadow-main/80 border-hairline">
                  <span className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                    Today&apos;s Arrivals &amp; Departures
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-normal text-ivory-warm">28 / 14</span>
                    <span className="text-[11px] text-champagne-200 font-mono">18 Pre-Checked In</span>
                  </div>
                  <span className="text-[10px] text-ivory-warm/60 mt-2 block font-light">
                    Average lobby queue: 1.4 minutes
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-shadow-main/80 border-hairline">
                  <span className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                    Pending Group Inquiries
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-normal text-amber-glow">3 Blocks</span>
                    <span className="text-[11px] text-amber-glow font-mono">₦ 8.4M Value</span>
                  </div>
                  <span className="text-[10px] text-ivory-warm/60 mt-2 block font-light">
                    Includes Adewale Wedding &amp; ABU Summit
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-shadow-main/80 border-hairline">
                  <span className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                    Estimated RevPAR
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-normal text-ivory-warm">₦ 64,800</span>
                    <span className="text-[11px] text-emerald-400 font-mono">Strong Group Yield</span>
                  </div>
                  <span className="text-[10px] text-ivory-warm/60 mt-2 block font-light">
                    Zero third-party commission leakage
                  </span>
                </div>
              </div>

              {/* Operations Overview Sub-panels */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Recent Guest Messages & Concierge Queue */}
                <div className="lg:col-span-7 rounded-2xl bg-shadow-main/60 border-hairline p-5 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                    <span className="text-xs font-semibold text-ivory-warm uppercase tracking-wider font-mono">
                      Live Guest Inquiries (AI &amp; Staff Stream)
                    </span>
                    <span className="text-[11px] text-amber-glow font-mono">3 Active Threads</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-shadow-darkest border-hairline flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-ivory-warm">Prof. Dubois (Room 402)</span>
                        <p className="text-ivory-warm/60 text-[11px]">French language translation active &bull; Wi-Fi &amp; Breakfast</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Auto-Answered
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-shadow-darkest border-hairline flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-ivory-warm">Chief Adewale (Suite 401)</span>
                        <p className="text-ivory-warm/60 text-[11px]">VIP Airport Transport from Abuja &bull; Escalated to FO Manager</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-glow border border-amber-glow/40">
                        Staff Assigned
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-shadow-darkest border-hairline flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-ivory-warm">Engr. Coker (Room 208)</span>
                        <p className="text-ivory-warm/60 text-[11px]">Extra slippers request &bull; Housekeeping dispatched</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Facilities & Event Snapshot */}
                <div className="lg:col-span-5 rounded-2xl bg-shadow-main/60 border-hairline p-5 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                    <span className="text-xs font-semibold text-ivory-warm uppercase tracking-wider font-mono">
                      Event Halls Status
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">Nov 25 Scheduled</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-shadow-darkest border-hairline">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-amber-glow">Grand Savannah Banquet Hall</span>
                        <span className="text-[10px] text-emerald-400">Booked</span>
                      </div>
                      <p className="text-ivory-warm/60 text-[11px]">
                        Adewale &amp; Danjuma Wedding Banquet &bull; 180 Guests Setup
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-shadow-darkest border-hairline">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-ivory-warm">Emirate Conference Suite</span>
                        <span className="text-[10px] text-ivory-warm/50">Available</span>
                      </div>
                      <p className="text-ivory-warm/60 text-[11px]">
                        Capacity: 80 delegates boardroom/theatre
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-shadow-darkest border-hairline">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-ivory-warm">Poolside Garden Pavilion</span>
                        <span className="text-[10px] text-amber-glow">Tentative Hold</span>
                      </div>
                      <p className="text-ivory-warm/60 text-[11px]">
                        Pre-wedding cocktail inquiry pending deposit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ROOM STATUS GRID */}
          {activeOpsTab === "rooms" && (
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-ivory-warm/60">Filter Status:</span>
                  {(["all", "Available", "Occupied", "Cleaning", "Maintenance"] as const).map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => setRoomFilter(status)}
                        className={`px-3 py-1 rounded-md text-[11px] transition-colors ${
                          roomFilter === status
                            ? "bg-amber-glow text-shadow-darkest font-semibold"
                            : "bg-shadow-main text-ivory-warm/70 hover:bg-shadow-light border-hairline"
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
                <span className="text-[11px] text-ivory-warm/50 font-mono">
                  Showing {filteredRooms.length} of 12 sampled rooms
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredRooms.map((room) => {
                  const statusColors = {
                    Available: "border-emerald-500/40 bg-emerald-950/20 text-emerald-400",
                    Occupied: "border-amber-glow/40 bg-amber-glow/10 text-amber-glow",
                    Cleaning: "border-champagne-200/40 bg-champagne-200/10 text-champagne-200",
                    Maintenance: "border-red-500/40 bg-red-950/20 text-red-400",
                  }[room.status];

                  return (
                    <div
                      key={room.number}
                      className="p-4 rounded-xl bg-shadow-main/80 border-hairline hover:border-amber-glow/40 transition-all text-xs"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-base font-bold text-ivory-warm">
                          Room {room.number}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${statusColors}`}>
                          {room.status}
                        </span>
                      </div>
                      <p className="text-champagne-200 font-medium">{room.type}</p>
                      <p className="text-ivory-warm/50 text-[11px] truncate mt-1">
                        Guest: {room.guest}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: HOUSEKEEPING & MAINTENANCE */}
          {activeOpsTab === "housekeeping" && (
            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-shadow-main/60 border-hairline space-y-3">
                  <h4 className="font-serif text-lg font-normal text-ivory-warm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-glow" />
                    <span>Housekeeping Dispatch Board</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-shadow-darkest border-hairline flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-ivory-warm">Room 103 (Standard Twin)</span>
                        <p className="text-ivory-warm/50 text-[11px]">Assigned to: Fatima (Floor 1) &bull; Priority: Check-in 14:00</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-glow border border-amber-glow/40 font-mono">
                        Cleaning in Progress
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-shadow-darkest border-hairline flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-ivory-warm">Suite 303 (Executive Suite)</span>
                        <p className="text-ivory-warm/50 text-[11px]">Cleaned &bull; Awaiting Supervisor Final Inspection</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-shadow-light text-champagne-200 border-hairline font-mono">
                        Supervisor Review
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-shadow-main/60 border-hairline space-y-3">
                  <h4 className="font-serif text-lg font-normal text-ivory-warm flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-amber-glow" />
                    <span>Preventative Maintenance Tickets</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-shadow-darkest border-hairline flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-ivory-warm">Room 204 — Air Conditioning</span>
                        <p className="text-ivory-warm/50 text-[11px]">Sensor thermostat recalibration &bull; Assigned to Tech Ibrahim</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-glow border border-amber-glow/40 font-mono">
                        Work in Progress
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-shadow-darkest border-hairline flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-ivory-warm">Grand Savannah Hall — AV Channel 4</span>
                        <p className="text-ivory-warm/50 text-[11px]">Wireless microphone test completed for wedding</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                        Resolved &amp; Cleared
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EVENTS & BANQUETS */}
          {activeOpsTab === "events" && (
            <div className="p-6 space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-shadow-main/60 border-hairline space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-normal text-ivory-warm">
                    Grand Savannah Banquet Hall &bull; Event Master File
                  </h4>
                  <span className="text-amber-glow font-mono">EVT-2026-904</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-shadow-darkest border-hairline">
                    <span className="text-[10px] text-ivory-warm/50 uppercase block font-mono">Event Title</span>
                    <span className="font-medium text-ivory-warm">Adewale &amp; Danjuma Wedding</span>
                  </div>
                  <div className="p-3 rounded-xl bg-shadow-darkest border-hairline">
                    <span className="text-[10px] text-ivory-warm/50 uppercase block font-mono">Date &amp; Seating</span>
                    <span className="font-medium text-ivory-warm">25 Nov 2026 &bull; 180 Guests</span>
                  </div>
                  <div className="p-3 rounded-xl bg-shadow-darkest border-hairline">
                    <span className="text-[10px] text-ivory-warm/50 uppercase block font-mono">Catering Contract</span>
                    <span className="font-medium text-amber-glow">Banquet Buffet + Mocktails</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-shadow-darkest border-hairline text-[11px] text-ivory-warm/80 font-light">
                  <strong className="text-champagne-200">Technical Rider:</strong> Dual wireless handheld microphones, 4k stage projector, ambient champagne LED uplighting, and dedicated power generator backup redundancy.
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FINANCIALS & PAYMENTS */}
          {activeOpsTab === "payments" && (
            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-shadow-main/80 border-hairline">
                  <span className="text-[10px] text-ivory-warm/50 uppercase block mb-1 font-mono">
                    Today&apos;s Direct Settlements
                  </span>
                  <span className="text-2xl font-serif font-normal text-amber-glow">₦ 1,840,000</span>
                  <span className="text-[10px] text-emerald-400 block mt-1 font-mono">Cards &amp; Instant Bank Transfers</span>
                </div>
                <div className="p-4 rounded-xl bg-shadow-main/80 border-hairline">
                  <span className="text-[10px] text-ivory-warm/50 uppercase block mb-1 font-mono">
                    Confirmed Delegation Deposits
                  </span>
                  <span className="text-2xl font-serif font-normal text-ivory-warm">₦ 3,200,000</span>
                  <span className="text-[10px] text-ivory-warm/50 block mt-1 font-mono">Held in Escrow Account</span>
                </div>
                <div className="p-4 rounded-xl bg-shadow-main/80 border-hairline">
                  <span className="text-[10px] text-ivory-warm/50 uppercase block mb-1 font-mono">
                    Commission Savings Realized
                  </span>
                  <span className="text-2xl font-serif font-normal text-emerald-400">₦ 460,000</span>
                  <span className="text-[10px] text-emerald-400/80 block mt-1 font-mono">Direct bookings vs 18% OTA fee</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline text-[11px] text-ivory-warm/60 text-center font-serif italic">
                * All financial figures are illustrative concept metrics demonstrating the proposed automated auditing workflow.
              </div>
            </div>
          )}

          {/* Footer Operational Note */}
          <div className="p-4 bg-shadow-darkest border-t border-champagne-200/10 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-warm/50 gap-2">
            <span className="italic font-serif">
              Simulated Property Management Interface &bull; Illustrative concept preview
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Multi-tenant enterprise access controls &bull; Night audit scheduled 02:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
