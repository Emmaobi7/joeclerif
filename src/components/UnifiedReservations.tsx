"use client";

import React, { useState } from "react";
import {
  Users,
  Building,
  Calendar,
  CreditCard,
  ChevronDown,
  ChevronUp,
  BedDouble,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";
import { GroupNodalVisualizer } from "./3d/GroupNodalVisualizer";
import { MOCK_GROUP_RESERVATION } from "@/data/mockData";

export function UnifiedReservations() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [billingMode, setBillingMode] = useState<"consolidated" | "split">("split");
  const [filterStatus, setFilterStatus] = useState<"all" | "Allocated" | "Pending Details">("all");

  const reservation = MOCK_GROUP_RESERVATION;

  const filteredAllocations = reservation.allocations.filter((alc) => {
    if (filterStatus === "all") return true;
    return alc.status === filterStatus;
  });

  return (
    <section id="reservations" className="py-28 bg-[#1E1309] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric lighting overlay */}
      <div className="volumetric-beam-left absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionHeader
          badge="Parent &amp; Delegation Engine"
          subtitle="Multi-Tier Booking Architecture"
          title="From Chaotic Spreadsheets to Unified Group Reservations"
          description="A wedding coordinator or university conference committee can manage 15 individual rooms and a banquet hall under a single master reservation—without losing individual guest preferences or split-billing flexibility."
        />

        {/* 3D Parent-Child Nodal Topology Canvas */}
        <GroupNodalVisualizer />

        {/* Interactive Master Reservation Dashboard Card */}
        <div className="rounded-3xl border-hairline bg-shadow-darkest overflow-hidden shadow-luxury">
          {/* Header Bar */}
          <div className="p-6 sm:p-8 bg-shadow-main/90 border-b border-champagne-200/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-shadow-darkest text-amber-glow border-hairline">
                  {reservation.id}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60">
                  {reservation.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
                {reservation.title}
              </h3>
              <p className="text-xs text-ivory-warm/60 mt-1">
                Coordinated by {reservation.coordinator.name} &bull; {reservation.coordinator.city} &bull; {reservation.coordinator.phone}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-3 text-left">
              <div className="px-4 py-2.5 rounded-xl bg-shadow-darkest border-hairline">
                <p className="text-[10px] uppercase text-ivory-warm/50 tracking-wider">Event &amp; Dates</p>
                <p className="text-xs font-semibold text-champagne-200">{reservation.eventDate}</p>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-shadow-darkest border-hairline">
                <p className="text-[10px] uppercase text-ivory-warm/50 tracking-wider">Total Rooms</p>
                <p className="text-xs font-semibold text-champagne-200">15 Rooms Allocated</p>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-shadow-darkest border-hairline">
                <p className="text-[10px] uppercase text-ivory-warm/50 tracking-wider">Facility Reserved</p>
                <p className="text-xs font-semibold text-champagne-200">{reservation.hallName}</p>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-shadow-darkest border border-amber-glow/40">
                <p className="text-[10px] uppercase text-amber-glow tracking-wider">Estimated Master</p>
                <p className="text-sm font-bold text-amber-glow">{reservation.totalEstimatedAmount}</p>
              </div>
            </div>
          </div>

          {/* Interactive Controls & Filters */}
          <div className="p-4 bg-shadow-main/50 border-b border-champagne-200/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-ivory-warm/60 font-medium">Billing Structure:</span>
              <button
                onClick={() => setBillingMode("split")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  billingMode === "split"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "bg-shadow-darkest text-ivory-warm/80 hover:bg-shadow-light border-hairline"
                }`}
              >
                Split (Hall to Master / Rooms to Guests)
              </button>
              <button
                onClick={() => setBillingMode("consolidated")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  billingMode === "consolidated"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "bg-shadow-darkest text-ivory-warm/80 hover:bg-shadow-light border-hairline"
                }`}
              >
                Consolidated Master Folio
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-ivory-warm/60 font-medium">Filter Allocations:</span>
              {(["all", "Allocated", "Pending Details"] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-2.5 py-1 rounded text-[11px] capitalize transition-colors ${
                    filterStatus === status
                      ? "bg-amber-glow/15 text-amber-glow font-semibold border border-amber-glow/30"
                      : "text-ivory-warm/60 hover:text-ivory-warm"
                  }`}
                >
                  {status}
                </button>
              ))}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-shadow-darkest hover:bg-shadow-light text-ivory-warm border-hairline font-medium"
              >
                <span>{isExpanded ? "Collapse 15 Rooms" : "Expand 15 Rooms"}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Expandable 15-Room Allocations Table */}
          {isExpanded && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-ivory-warm/80">
                <thead className="bg-shadow-darkest text-ivory-warm/50 uppercase text-[10px] tracking-wider border-b border-champagne-200/10">
                  <tr>
                    <th className="py-3 px-4 font-mono">Allocation ID</th>
                    <th className="py-3 px-4">Guest / Delegation Role</th>
                    <th className="py-3 px-4">Room Category</th>
                    <th className="py-3 px-4">Assigned Room</th>
                    <th className="py-3 px-4">Stay &amp; Guests</th>
                    <th className="py-3 px-4">Special Notes / VIP Care</th>
                    <th className="py-3 px-4 text-right">Estimated Rate</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-champagne-200/10">
                  {filteredAllocations.map((alc) => (
                    <tr
                      key={alc.id}
                      className="hover:bg-shadow-main/60 transition-colors group"
                    >
                      <td className="py-3.5 px-4 font-mono text-amber-glow font-medium">
                        {alc.id}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-ivory-warm">
                        {alc.guestName}
                      </td>
                      <td className="py-3.5 px-4 text-champagne-200">{alc.roomType}</td>
                      <td className="py-3.5 px-4 font-mono text-amber-glow">
                        {alc.roomNumber}
                      </td>
                      <td className="py-3.5 px-4 text-ivory-warm/60 font-light">
                        {alc.nights} nights &bull; {alc.occupancy}
                      </td>
                      <td className="py-3.5 px-4 text-ivory-warm/60 italic max-w-xs truncate font-light">
                        {alc.dietaryOrNotes || "Standard VIP welcome"}
                      </td>
                      <td className="py-3.5 px-4 text-right font-medium text-ivory-warm">
                        {alc.estimatedRate}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold ${
                            alc.status === "Allocated"
                              ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/60"
                              : "bg-amber-950/80 text-amber-glow border border-amber-glow/40"
                          }`}
                        >
                          {alc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer Summary Notice */}
          <div className="p-4 bg-shadow-darkest border-t border-champagne-200/10 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-warm/50 gap-3">
            <span className="italic font-serif">
              * Rates and availability shown are illustrative demonstration figures for prototype testing.
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Room block active &bull; Inventory tentatively held for 72 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
