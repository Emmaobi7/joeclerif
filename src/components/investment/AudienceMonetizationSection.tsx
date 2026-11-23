"use client";

import React from "react";
import {
  MONETIZATION_CHANNELS,
  AUDIENCE_GROWTH_STAGES,
} from "@/data/investmentMockData";
import {
  Megaphone,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Store,
  Sparkles,
} from "lucide-react";

export function AudienceMonetizationSection() {
  return (
    <section
      id="section-audience"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-gradient-to-b from-[#0D0804] via-[#140c06] to-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              AUDIENCE &amp; SPONSORSHIPS
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Digital Commercial Reach
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            When the audience grows, <br />
            <span className="italic font-extralight text-amber-glow">
              the opportunities grow with it.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            As Joclarif becomes the premier digital conduit for upscale hospitality and travel in
            Northern Nigeria, brand sponsorships and curated partner placements create high-margin,
            recurring revenue beyond direct room bookings.
          </p>
        </div>

        {/* 4 Monetization Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MONETIZATION_CHANNELS.map((channel, idx) => (
            <div
              key={channel.id}
              className="p-6 rounded-2xl bg-shadow-main/80 border border-champagne-200/10 hover:border-amber-glow/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-glow tracking-widest uppercase">
                    CHANNEL 0{idx + 1}
                  </span>
                  <Megaphone className="w-4 h-4 text-amber-glow/70" />
                </div>
                <h3 className="font-serif text-xl text-champagne-100 font-light">
                  {channel.name}
                </h3>
                <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-champagne-200/10">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-warm/50 block mb-1">
                    Target Commercial Partners
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {channel.targetPartners.map((partner, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 rounded bg-shadow-darkest text-[10px] font-mono text-champagne-200/75 border border-champagne-200/5"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-amber-glow/5 border border-amber-glow/20">
                  <span className="text-[9px] font-mono text-amber-glow uppercase tracking-wider block">
                    Mechanic:
                  </span>
                  <span className="text-[11px] text-ivory-warm/85 font-light">
                    {channel.commercialMechanic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Staged Advertising Growth Progression */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#140c06]/95 border border-champagne-200/15 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-glow block">
                PHASED ADVERTISING MATURITY
              </span>
              <h3 className="font-serif text-2xl text-champagne-100 font-light mt-1">
                From Flagship Trust to National Multi-City Network
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-shadow-darkest border border-champagne-200/20 text-[10px] font-mono text-champagne-200/70">
              Ethical &bull; Non-Intrusive &bull; Consent-Driven
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIENCE_GROWTH_STAGES.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-shadow-darkest/70 border border-champagne-200/10 space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-amber-glow">
                    {st.stage}
                  </span>
                  <span className="text-[10px] font-mono text-ivory-warm/50">
                    Step {i + 1} of 3
                  </span>
                </div>
                <h4 className="font-serif text-lg text-champagne-100 font-light">
                  {st.name}
                </h4>
                <p className="text-xs text-ivory-warm/75 font-light leading-relaxed">
                  {st.description}
                </p>
                <div className="pt-3 border-t border-champagne-200/10">
                  <span className="text-[10px] font-mono text-amber-glow block">
                    {st.revenuePotential}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy & Ethical Data Commitment Badge */}
          <div className="p-4 rounded-2xl bg-shadow-darkest border border-amber-glow/30 flex items-start gap-3.5">
            <Lock className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-wider text-amber-glow uppercase font-semibold">
                Absolute Privacy Protection Commitment
              </span>
              <p className="text-xs text-ivory-warm/75 font-light leading-relaxed">
                Joclarif will never sell, broker, or monetize sensitive guest identities, booking records,
                room preferences, or private behavioral telemetry. All platform advertising is strictly
                opt-in, context-relevant, and visibly labelled as an official partner recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
