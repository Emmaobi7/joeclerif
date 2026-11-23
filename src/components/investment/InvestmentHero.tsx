"use client";

import React, { useState } from "react";
import { EcosystemConstellation3D } from "./EcosystemConstellation3D";
import { ECOSYSTEM_NODES, EcosystemNode } from "@/data/investmentMockData";
import { Sparkles, ArrowRight, ShieldCheck, Layers, TrendingUp, Compass } from "lucide-react";

export function InvestmentHero() {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode>(ECOSYSTEM_NODES[0]);

  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 overflow-hidden border-b border-champagne-200/10 flex flex-col justify-center">
      {/* Cinematic Golden God-Ray Background Effect */}
      <div className="sunbeams opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-radial-gradient from-amber-glow/15 via-[#4a3520]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-12">
        {/* Top Header Block: Eyebrow + Master Headline */}
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-amber-glow/40 bg-amber-glow/10 text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-glow animate-pulse" />
            <span>THE BUSINESS CASE &bull; EXECUTIVE ROI &amp; COMMERCIAL STRATEGY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-light text-champagne-100 tracking-tight leading-[1.04] drop-shadow-[0_12px_40px_rgba(20,12,5,0.95)]">
            More than a hotel. <br />
            <span className="italic font-extralight text-amber-glow">
              An expanding hospitality business.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ivory-warm/85 font-light leading-relaxed max-w-3xl">
            Joclarif is designed to connect hospitality, guest experiences, commercial services,
            intelligent operations, and new digital revenue opportunities into one coordinated
            ecosystem.
          </p>

          <p className="text-sm sm:text-base text-champagne-200/75 font-light leading-relaxed max-w-3xl border-l-2 border-amber-glow/50 pl-4 py-1 italic">
            &ldquo;The opportunity is not simply to fill more rooms. It is to create more value
            from every guest relationship, every service offered, every operational decision, and
            every new market the brand enters.&rdquo;
          </p>
        </div>

        {/* 3D Visualization Grid: Monolith & Constellation + Nodal Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 3D Viewport (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            <EcosystemConstellation3D
              activeNodeId={selectedNode.id}
              onSelectNode={(node) => setSelectedNode(node)}
            />
            <div className="flex flex-wrap items-center justify-between text-[11px] text-ivory-warm/60 px-2 font-light">
              <span className="font-mono text-[10px] text-amber-glow">
                Fig 1.1 &bull; Kinetic Hospitality Monolith &amp; Multi-Channel Revenue Constellation
              </span>
              <span>Rotate &amp; inspect nodal links in real-time</span>
            </div>
          </div>

          {/* Right Nodal Inspector & Commercial Synergy Panel (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#180f08]/90 via-[#120a05]/95 to-[#0d0804] border border-champagne-200/15 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-champagne-200/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-glow animate-pulse" />
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-champagne-200">
                    Ecosystem Synergy Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-glow px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
                  {selectedNode.category}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-champagne-100 font-light">
                  {selectedNode.name}
                </h3>
                <p className="text-xs text-ivory-warm/80 font-light leading-relaxed mt-2">
                  {selectedNode.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-shadow-darkest/80 border border-champagne-200/10 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-glow/90 block">
                    Commercial Synergy
                  </span>
                  <p className="text-xs text-ivory-warm/85 font-light leading-relaxed">
                    {selectedNode.commercialSynergy}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-glow/10 border border-amber-glow/30 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-glow font-semibold block">
                    Revenue Contribution Impact
                  </span>
                  <p className="text-xs text-champagne-100 font-medium leading-relaxed">
                    {selectedNode.revenueImpact}
                  </p>
                </div>
              </div>

              {/* Quick Node Selector Pills */}
              <div className="space-y-2 pt-2 border-t border-champagne-200/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ivory-warm/50 block">
                  Select Ecosystem Node (9 Channels)
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {ECOSYSTEM_NODES.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`px-2 py-1.5 rounded-lg text-[9px] font-mono tracking-tight text-left transition-all truncate ${
                        selectedNode.id === node.id
                          ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                          : "bg-shadow-main/80 text-champagne-200/70 hover:text-white border border-champagne-200/10"
                      }`}
                    >
                      {node.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Strict Governance Notice */}
            <div className="p-4 rounded-2xl bg-[#140c06]/60 border border-champagne-200/10 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
              <p className="text-[11px] text-ivory-warm/65 font-light leading-relaxed">
                <strong className="text-champagne-200 font-medium">Commercial Presentation Rule:</strong>{" "}
                All financial models and revenue figures shown are illustrative scenarios. Initial
                project investments and implementation agreements are established separately during
                executive consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
