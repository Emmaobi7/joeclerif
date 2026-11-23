"use client";

import React from "react";
import { Search, CalendarCheck, ShieldCheck, ArrowRight, Lock, KeyRound } from "lucide-react";

export function CompanionHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Verified Profile Exploration",
      description:
        "Guests explore verified companion profiles with authentic biographies, cultural specialties, and explicit personal boundaries. Only independently verified and hotel-approved profiles appear.",
      icon: Search,
      highlight: "100% Identity Verified",
    },
    {
      num: "02",
      title: "Coordinate",
      subtitle: "Protected Request & Escrow",
      description:
        "Select an agreed date, time slot, and public venue (hotel dining room, gallery, or conference lounge). Engagement fees are secured in a protected third-party escrow facility upfront.",
      icon: CalendarCheck,
      highlight: "Safeguarded Escrow Holding",
    },
    {
      num: "03",
      title: "Confirm",
      subtitle: "Dual Independent Settlement",
      description:
        "At the conclusion of the engagement, both guest and companion independently verify completion via an authenticated one-time PIN. Funds become eligible for withdrawal only upon mutual sign-off.",
      icon: KeyRound,
      highlight: "Dual-Party Release PIN",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 border-b border-champagne-200/10 bg-[#0A0603]/80 relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-amber-glow uppercase px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              The Protocol
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              End-to-End Operational Lifecycle
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-champagne-100 font-light">
            How Joclarif Companion Operates
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 leading-relaxed font-light">
            Designed to replace unstructured arrangements with transparent scheduling, verified identities,
            and mutual financial security.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-7 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest backdrop-blur-md shadow-luxury space-y-5 relative group hover:border-amber-glow/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-amber-glow font-light">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-center text-amber-glow group-hover:scale-110 transition-transform shadow-glow">
                    <Icon className="w-5 h-5 text-amber-glow" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-champagne-300/60 uppercase">
                    {step.subtitle}
                  </div>
                  <h3 className="font-serif text-xl text-champagne-200 font-normal">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-ivory-warm/75 leading-relaxed font-light">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-champagne-200/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-amber-glow">{step.highlight}</span>
                  <span className="text-champagne-300/40">&bull; Step {step.num}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
