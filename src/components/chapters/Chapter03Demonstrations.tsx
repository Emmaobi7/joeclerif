"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MessageSquare,
  Users,
  Compass,
  CreditCard,
  Building,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  Shield,
  HelpCircle,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { BookingCopilotDemo } from "../BookingCopilotDemo";
import { UnifiedReservations } from "../UnifiedReservations";
import { ConciergeDemo } from "../ConciergeDemo";
import { DigitalCheckinDemo } from "../DigitalCheckinDemo";
import { HotelOperationsDemo } from "../HotelOperationsDemo";

type DemoKey = "copilot" | "group" | "concierge" | "checkin" | "operations";

export function Chapter03Demonstrations() {
  const [activeDemo, setActiveDemo] = useState<DemoKey>("copilot");

  const demos = [
    {
      id: "copilot" as const,
      num: "01",
      title: "Conversational Booking Co-Pilot",
      shortTitle: "Booking Co-Pilot",
      badge: "Revenue Engine",
      icon: MessageSquare,
      summary: "Natural language reservation assistant that understands dates, room types, and multi-room delegations without price hallucination.",
      scenario: "Try: Ask for '3 Deluxe rooms for a family arriving this Friday' or select the prompt chip.",
      roi: "Converts conversational website traffic into confirmed bookings in under 90 seconds.",
    },
    {
      id: "group" as const,
      num: "02",
      title: "3D Group Nodal & Wedding Allocator",
      shortTitle: "Group & Wedding Engine",
      badge: "High-Margin Blocks",
      icon: Users,
      summary: "Interactive 3D graph connecting master parent reservations to child rooms and banquet halls with split-billing controls.",
      scenario: "Try: Toggle Split Billing vs Consolidated Billing, filter allocated rooms, and rotate the 3D topology.",
      roi: "Captures 10–20 room wedding blocks and university convocation delegations seamlessly.",
    },
    {
      id: "concierge" as const,
      num: "03",
      title: "Multilingual AI Concierge & Handoff",
      shortTitle: "Multilingual Concierge",
      badge: "In-Stay Service",
      icon: Compass,
      summary: "24/7 guest companion responding in English, Hausa, and French, with automatic VIP escalation to front-desk staff.",
      scenario: "Try: Ask for local dining in Hausa, request room service, or trigger the live receptionist handoff.",
      roi: "Eliminates room telephone wait times while routing housekeeping requests to staff duty boards.",
    },
    {
      id: "checkin" as const,
      num: "04",
      title: "Contactless Digital Check-in & OCR",
      shortTitle: "Digital Check-in Wizard",
      badge: "Lobby Efficiency",
      icon: CreditCard,
      summary: "Pre-arrival guest registration with document OCR scanning and fast-track boarding pass generation under NDPR guidelines.",
      scenario: "Try: Step through identity verification, simulate mock passport scan, and issue a digital key card.",
      roi: "Reduces lobby desk queue time from 8 minutes down to 45 seconds per guest.",
    },
    {
      id: "operations" as const,
      num: "05",
      title: "Hotel Operations & Property Cockpit",
      shortTitle: "Operations Cockpit",
      badge: "Executive Control",
      icon: LayoutDashboard,
      summary: "Real-time room rack, automated housekeeping dispatch, folio charge reconciliation, and nightly revenue audit logs.",
      scenario: "Try: Change room status between Dirty/Inspected/Occupied, inspect guest folios, and filter rooms.",
      roi: "Provides ownership with 100% transparent occupancy and revenue oversight from anywhere in Nigeria.",
    },
  ];

  const current = demos.find((d) => d.id === activeDemo) || demos[0];
  const currentIndex = demos.findIndex((d) => d.id === activeDemo);

  const handleNextDemo = () => {
    const nextIdx = (currentIndex + 1) % demos.length;
    setActiveDemo(demos[nextIdx].id);
  };

  return (
    <section id="chapter-demos" className="py-24 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric background beam */}
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 relative z-10 space-y-12">
        {/* Chapter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-champagne-200/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="amber">Chapter 03 &bull; Experience It</Badge>
              <span className="text-[10px] font-mono text-champagne-200/60 uppercase tracking-widest">
                Interactive Demonstration Suite
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory-warm font-normal tracking-tight">
              Test the Working Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-ivory-warm/70 font-light mt-2 max-w-2xl leading-relaxed">
              Explore 5 fully interactive conceptual demonstrations showing how direct booking, multi-room group coordination,
              multilingual AI assistance, contactless check-in, and property management work together.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-shadow-main/80 border-hairline text-xs text-champagne-200 flex items-center gap-2 self-start lg:self-end">
            <Sparkles className="w-4 h-4 text-amber-glow shrink-0" />
            <span className="font-mono text-[11px]">Deterministic Mock Demonstrations &bull; Safe to Test</span>
          </div>
        </div>

        {/* 5 Demo Navigation Cards Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {demos.map((d) => {
            const Icon = d.icon;
            const isActive = activeDemo === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDemo(d.id)}
                className={`p-4 rounded-2xl text-left transition-all relative flex flex-col justify-between ${
                  isActive
                    ? "bg-shadow-main border border-amber-glow shadow-glow"
                    : "bg-shadow-darkest/70 border-hairline hover:border-amber-glow/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded transition-colors ${
                        isActive
                          ? "bg-amber-glow text-shadow-darkest font-bold"
                          : "bg-shadow-darkest text-champagne-200 border-hairline"
                      }`}
                    >
                      {d.num}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-mono text-amber-glow/90">
                      {d.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base text-ivory-warm font-normal mb-1">
                    {d.shortTitle}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-ivory-warm/60 pt-3 border-t border-champagne-200/10 mt-3 font-mono">
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-glow" : "text-champagne-200/60"}`} />
                  <span>{isActive ? "Active Sandbox" : "Click to Explore"}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Contextual Executive Briefing Pill */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-shadow-main via-shadow-darkest to-shadow-main border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow font-semibold">
                Demonstration {current.num} / 05 &bull; {current.title}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ivory-warm/85 font-light">
              {current.summary}
            </p>
            <p className="text-xs text-amber-glow/90 font-mono pt-1">
              {current.scenario}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleNextDemo}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs shadow-glow hover:opacity-95 transition-all"
            >
              <span>Next Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Active Demonstration Container */}
        <div className="rounded-3xl border-hairline bg-shadow-darkest overflow-hidden shadow-luxury">
          {activeDemo === "copilot" && <BookingCopilotDemo />}
          {activeDemo === "group" && <UnifiedReservations />}
          {activeDemo === "concierge" && <ConciergeDemo />}
          {activeDemo === "checkin" && <DigitalCheckinDemo />}
          {activeDemo === "operations" && <HotelOperationsDemo />}
        </div>
      </div>
    </section>
  );
}

