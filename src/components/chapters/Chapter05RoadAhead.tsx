"use client";

import React, { useState } from "react";
import {
  Layers,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Building,
  Users,
  ChevronRight,
  Shield,
  Send,
  CheckCircle,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { ROADMAP_PHASES } from "@/data/mockData";

export function Chapter05RoadAhead() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "Alhaji / Mrs. Executive",
    role: "Hotel Ownership / General Management",
    phone: "+234 800 000 0000",
    email: "management@joclarif.example",
    interest: "Direct Booking Engine & Multi-Room Delegations",
  });

  const phases = ROADMAP_PHASES;
  const current = phases[activePhaseIndex];

  // Dependencies & building blocks data
  const phaseContext = [
    {
      introduces: "Direct booking engine, branded web flagship, card/USSD payment gateway.",
      enables: "Direct revenue capture, elimination of OTA commissions, guest customer database.",
      buildsOn: "Physical property rooms, existing brand prestige in Zaria.",
    },
    {
      introduces: "Parent-child group reservation engine, event hall floorplans, split folios.",
      enables: "Instant multi-room quotes for grand weddings & university convocations.",
      buildsOn: "Phase 1 Direct Booking Engine & room inventory database.",
    },
    {
      introduces: "Conversational Booking Co-Pilot, 24/7 Hausa/French/English concierge.",
      enables: "Automated instant responses to inquiries without telephone wait times.",
      buildsOn: "Phase 1 & 2 real-time availability and group booking rules.",
    },
    {
      introduces: "Resident mobile web app, contactless OCR pre-check-in, digital room keys.",
      enables: "Under 60-second lobby check-in and direct in-stay dining ordering.",
      buildsOn: "Phase 3 Concierge Engine and verified guest identity records.",
    },
    {
      introduces: "Property operations cockpit, automated housekeeping dispatch, nightly audit.",
      enables: "Zero operational revenue leakage and complete ownership oversight from anywhere.",
      buildsOn: "All prior phases into one unified property management nervous system.",
    },
  ];

  const currentCtx = phaseContext[activePhaseIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="chapter-roadmap" className="py-24 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 relative z-10 space-y-16">
        {/* Chapter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-champagne-200/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="amber">Chapter 05 &bull; The Road Ahead</Badge>
              <span className="text-[10px] font-mono text-champagne-200/60 uppercase tracking-widest">
                Strategic Phased Progression
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory-warm font-normal tracking-tight">
              A Structured Journey to Digital Excellence
            </h2>
            <p className="text-xs sm:text-sm text-ivory-warm/70 font-light mt-2 max-w-2xl leading-relaxed">
              A mature enterprise deployment prioritizes high-margin direct revenue foundations first,
              progressively activating group reservation logic, conversational intelligence, and contactless check-in.
            </p>
          </div>

          <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider bg-shadow-main px-3.5 py-1.5 rounded-xl border-hairline self-start lg:self-end">
            5 Strategic Phases &bull; Predictable Milestones
          </span>
        </div>

        {/* 1. INTERACTIVE 5-PHASE PROGRESSION TIMELINE */}
        <div className="space-y-6">
          {/* Phase Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {phases.map((p, idx) => (
              <button
                key={p.phase}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all relative flex flex-col justify-between ${
                  activePhaseIndex === idx
                    ? "bg-shadow-main border border-amber-glow shadow-glow"
                    : "bg-shadow-darkest/70 border-hairline hover:border-amber-glow/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded ${
                        activePhaseIndex === idx
                          ? "bg-amber-glow text-shadow-darkest font-bold"
                          : "bg-shadow-darkest text-champagne-200 border-hairline"
                      }`}
                    >
                      {p.phase}
                    </span>
                    <span className="text-[9px] font-mono text-champagne-200/50">
                      Step 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-serif text-xs sm:text-sm text-ivory-warm font-normal leading-snug">
                    {p.title.split("&")[0]}
                  </h4>
                </div>

                <div className="text-[10px] text-amber-glow/80 font-mono pt-2 border-t border-champagne-200/10 mt-2">
                  {p.duration.split(" ")[0]} Track
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Deep-Dive Card */}
          <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-6 sm:p-10 shadow-luxury space-y-8">
            {/* Top row: Title + Strategic Focus */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-champagne-200/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-shadow-darkest text-amber-glow border-hairline font-semibold">
                    {current.phase}
                  </span>
                  <span className="text-xs text-ivory-warm/60 uppercase tracking-wider font-mono">
                    {current.duration}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
                  {current.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-shadow-darkest/90 border-hairline text-xs text-champagne-200 max-w-md font-light">
                <span className="text-[10px] uppercase font-semibold text-amber-glow block mb-1 font-mono">
                  Strategic Scope &amp; Focus:
                </span>
                <p className="text-ivory-warm/80 leading-relaxed">{current.summary}</p>
              </div>
            </div>

            {/* Middle row: Deliverables + Commercial ROI */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Deliverables */}
              <div className="lg:col-span-7 space-y-3.5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-200 flex items-center gap-2 font-mono">
                  <Layers className="w-4 h-4 text-amber-glow" />
                  <span>Introduced Capabilities &amp; Deliverables</span>
                </h4>

                <div className="space-y-2">
                  {current.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-shadow-darkest/80 border-hairline flex items-start gap-3 text-xs text-ivory-warm/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Value + Progression Context */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-shadow-darkest/90 border-hairline space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center text-amber-glow">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-base text-ivory-warm">
                      Expected Commercial Value
                    </span>
                  </div>
                  <p className="text-xs text-ivory-warm/75 font-light leading-relaxed">
                    {current.businessValue}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-shadow-darkest/60 border-hairline space-y-2 text-xs">
                  <span className="text-[10px] uppercase font-mono text-champagne-200/60 block">
                    Architectural Progression
                  </span>
                  <div className="space-y-1.5 text-[11px] text-ivory-warm/70">
                    <p>
                      <strong className="text-amber-glow font-medium">Builds on:</strong> {currentCtx.buildsOn}
                    </p>
                    <p>
                      <strong className="text-champagne-200 font-medium">Enables next:</strong> {currentCtx.enables}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. EXECUTIVE CLOSING & CONSULTATION INVITATION */}
        <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-8 sm:p-12 lg:p-14 shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Commercial Persuasion & Executive Vision */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Badge variant="amber">Executive Invitation</Badge>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory-warm font-normal tracking-tight leading-[1.1]">
                Let&apos;s shape the next chapter of Joclarif hospitality.
              </h3>

              <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
                A purpose-built digital foundation designed to bring guests, direct room reservations,
                and property operations together in Zaria.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-ivory-warm/80">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                  <span className="font-light">
                    <strong className="text-champagne-200 font-medium">Protect Your Operating Margins:</strong> Reclaim high-value direct bookings
                    without paying steep commissions to online travel agencies.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                  <span className="font-light">
                    <strong className="text-champagne-200 font-medium">Capture Northern Regional Prestige:</strong> Become the benchmark for modern,
                    frictionless hospitality in Zaria and Kaduna State.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                  <span className="font-light">
                    <strong className="text-champagne-200 font-medium">Total Operational Transparency:</strong> Real-time room rack, housekeeping
                    dispatch, and nightly revenue oversight from anywhere.
                  </span>
                </div>
              </div>

              {/* Next Steps 3-Pillar Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-champagne-200/10">
                <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border-hairline">
                  <span className="text-[10px] uppercase font-mono text-amber-glow block mb-0.5">
                    Step 1
                  </span>
                  <p className="text-xs font-semibold text-ivory-warm">Executive Demo</p>
                  <p className="text-[11px] text-ivory-warm/50 mt-0.5 font-light">Walkthrough with hotel owners</p>
                </div>
                <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border-hairline">
                  <span className="text-[10px] uppercase font-mono text-amber-glow block mb-0.5">
                    Step 2
                  </span>
                  <p className="text-xs font-semibold text-ivory-warm">Technical Audit</p>
                  <p className="text-[11px] text-ivory-warm/50 mt-0.5 font-light">On-site property discovery</p>
                </div>
                <div className="p-3.5 rounded-xl bg-shadow-darkest/90 border-hairline">
                  <span className="text-[10px] uppercase font-mono text-amber-glow block mb-0.5">
                    Step 3
                  </span>
                  <p className="text-xs font-semibold text-ivory-warm">Phase 1 Delivery</p>
                  <p className="text-[11px] text-ivory-warm/50 mt-0.5 font-light">Live direct booking launch</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Request Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border-hairline bg-shadow-darkest/95 p-6 sm:p-8 shadow-luxury backdrop-blur-md">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-champagne-200/10 pb-3">
                      <span className="text-[10px] uppercase tracking-widest text-amber-glow font-mono font-semibold block">
                        Schedule Discovery
                      </span>
                      <h4 className="text-lg font-serif text-ivory-warm font-normal">
                        Request Executive Consultation
                      </h4>
                    </div>

                    <div>
                      <label className="block text-[11px] text-ivory-warm/60 uppercase font-mono mb-1">
                        Executive Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-shadow-main border-hairline rounded-xl px-3.5 py-2.5 text-xs text-ivory-warm focus:border-amber-glow focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-ivory-warm/60 uppercase font-mono mb-1">
                        Title / Ownership Role
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-shadow-main border-hairline rounded-xl px-3.5 py-2.5 text-xs text-ivory-warm focus:border-amber-glow focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-ivory-warm/60 uppercase font-mono mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-shadow-main border-hairline rounded-xl px-3.5 py-2.5 text-xs text-ivory-warm focus:border-amber-glow focus:outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-ivory-warm/60 uppercase font-mono mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-shadow-main border-hairline rounded-xl px-3.5 py-2.5 text-xs text-ivory-warm focus:border-amber-glow focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-ivory-warm/60 uppercase font-mono mb-1">
                        Primary Strategic Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-shadow-main border-hairline rounded-xl px-3.5 py-2.5 text-xs text-ivory-warm focus:border-amber-glow focus:outline-none"
                      >
                        <option>Direct Booking Engine &amp; Multi-Room Delegations</option>
                        <option>Full 5-Phase Hospitality Transformation</option>
                        <option>AI Concierge &amp; Multilingual Resident App</option>
                        <option>Hotel Operations &amp; Property Management Cockpit</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow hover:opacity-95 transition-all mt-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Consultation Request</span>
                    </button>

                    <p className="text-[10px] text-ivory-warm/40 text-center font-light pt-1">
                      Deterministic demonstration mock. No actual external transmission.
                    </p>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-ivory-warm font-normal">
                        Consultation Request Recorded
                      </h4>
                      <p className="text-xs text-ivory-warm/70 font-light mt-1">
                        Thank you, {formData.name}. In a production deployment, the technical lead would reach out via {formData.phone} to coordinate the executive discovery session in Zaria.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-amber-glow underline font-mono hover:text-white"
                    >
                      Reset Form
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

