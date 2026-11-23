"use client";

import React, { useState } from "react";
import { REGIONAL_HUBS, EXPANSION_STAGES, RegionalHub } from "@/data/investmentMockData";
import {
  MapPin,
  Compass,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Building,
  Car,
  Layers,
  Network,
  CheckCircle2,
} from "lucide-react";

export function RegionalExpansionSection() {
  const [selectedHubId, setSelectedHubId] = useState<string>("zaria");

  const selectedHub =
    REGIONAL_HUBS.find((h) => h.id === selectedHubId) || REGIONAL_HUBS[0];

  return (
    <section
      id="section-expansion"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-gradient-to-b from-[#0D0804] via-[#140c06] to-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              NETWORK EXPANSION
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Staged Regional Strategy
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            Built for one property. <br />
            <span className="italic font-extralight text-amber-glow">
              Designed to reach beyond it.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            Starting with the Zaria flagship, Joclarif creates an expanding geographic corridor
            across Kaduna, Abuja, and Kano, compounding network effects as guests, corporate accounts,
            and vetted mobility fleets interconnect.
          </p>
        </div>

        {/* 4-Stage Roadmap Progress Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPANSION_STAGES.map((stage, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-shadow-main/80 border border-champagne-200/10 hover:border-amber-glow/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-amber-glow">
                  {stage.stage}
                </span>
                <span className="text-[10px] font-mono text-champagne-200/50">
                  {stage.timeline}
                </span>
              </div>
              <h3 className="font-serif text-lg text-champagne-100 font-light">
                {stage.title}
              </h3>
              <ul className="space-y-1.5 pt-2 border-t border-champagne-200/10 text-[11px] text-ivory-warm/70 font-light">
                {stage.milestones.slice(0, 3).map((m, mI) => (
                  <li key={mI} className="flex items-start gap-2">
                    <span className="text-amber-glow text-[10px]">&bull;</span>
                    <span className="line-clamp-2">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Nigeria Map & Regional Hub Inspector */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#180f08]/95 via-[#120a05] to-[#0d0804] border border-champagne-200/15 shadow-2xl space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-glow block">
                INTERACTIVE NIGERIAN NETWORK NODES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-champagne-100 font-light mt-1">
                Regional Commercial Network Simulator
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-champagne-200/60">
              <Network className="w-3.5 h-3.5 text-amber-glow" />
              <span>Select any hub to inspect local demand &amp; fleet partners</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Stylized Interactive Nigeria SVG Map (7 cols) */}
            <div className="lg:col-span-7 relative h-[440px] sm:h-[480px] rounded-2xl bg-shadow-darkest/90 border border-champagne-200/10 overflow-hidden flex items-center justify-center p-6">
              {/* Background Map Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#efe0b9_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

              {/* Stylized Nigeria Outline Vector */}
              <svg
                viewBox="0 0 800 650"
                className="w-full h-full max-h-[420px] text-champagne-200/20 fill-[#22160b]/30 stroke-current stroke-1 drop-shadow-lg"
              >
                {/* Simplified Nigeria Territorial Polygon */}
                <path d="M 120 220 L 260 120 L 400 90 L 520 80 L 640 100 L 740 220 L 710 350 L 680 430 L 610 520 L 520 580 L 450 620 L 380 600 L 290 560 L 220 540 L 140 450 L 90 340 Z" />

                {/* Connecting Corridor Arcs between Zaria, Kaduna, Abuja, Kano, Lagos */}
                <path
                  d="M 400 210 Q 380 250 380 270"
                  fill="none"
                  stroke="#f5b841"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                <path
                  d="M 380 270 Q 390 320 390 360"
                  fill="none"
                  stroke="#f5b841"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 400 210 Q 430 180 450 150"
                  fill="none"
                  stroke="#f5b841"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 390 360 Q 300 440 210 510"
                  fill="none"
                  stroke="#dda74f"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />
              </svg>

              {/* Hub Position Markers */}
              {REGIONAL_HUBS.map((hub) => {
                const isSelected = hub.id === selectedHubId;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHubId(hub.id)}
                    style={{ left: `${hub.coordinates.x}%`, top: `${hub.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all z-20 ${
                      isSelected ? "scale-125" : "hover:scale-110"
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <div className="absolute w-8 h-8 rounded-full bg-amber-glow/30 animate-ping" />
                      )}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-all ${
                          isSelected
                            ? "bg-amber-glow text-shadow-darkest border-2 border-champagne-100 ring-2 ring-amber-glow/60"
                            : hub.status === "flagship"
                            ? "bg-amber-glow/80 text-shadow-darkest border border-champagne-200"
                            : "bg-shadow-main text-champagne-200 border border-champagne-200/30 hover:border-amber-glow"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <span
                      className={`absolute top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap tracking-wider uppercase transition-colors ${
                        isSelected
                          ? "bg-amber-glow text-shadow-darkest font-bold shadow-md"
                          : "bg-shadow-darkest/90 text-champagne-200/80 border border-champagne-200/10"
                      }`}
                    >
                      {hub.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Hub Deep Dive Card (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-shadow-darkest/90 border border-champagne-200/15 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow">
                    {selectedHub.state}
                  </span>
                  <h4 className="font-serif text-2xl text-champagne-100 font-light mt-0.5">
                    {selectedHub.name}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-champagne-200/70 px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30 uppercase">
                  {selectedHub.role.split("&")[0]}
                </span>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-champagne-200/60 block">
                    Local Commercial Demand Profile:
                  </span>
                  <p className="text-xs text-ivory-warm/85 font-light leading-relaxed">
                    {selectedHub.demandProfile}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-champagne-200/60 block">
                    Fleet &amp; Service Partners:
                  </span>
                  <p className="text-xs text-ivory-warm/85 font-light leading-relaxed">
                    {selectedHub.fleetPartners}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider">
                    Projected Network Multiplier:
                  </span>
                  <span className="text-xs font-mono font-semibold text-champagne-100">
                    {selectedHub.projectedNetworkMultiplier}
                  </span>
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="pt-2 border-t border-champagne-200/10">
                <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-warm/40 block mb-2">
                  Select Another Regional Hub:
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {REGIONAL_HUBS.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setSelectedHubId(h.id)}
                      className={`px-2 py-1.5 rounded text-[10px] font-mono text-center transition-all ${
                        selectedHubId === h.id
                          ? "bg-amber-glow text-shadow-darkest font-semibold"
                          : "bg-shadow-main/60 text-champagne-200/70 hover:text-white border border-champagne-200/10"
                      }`}
                    >
                      {h.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
