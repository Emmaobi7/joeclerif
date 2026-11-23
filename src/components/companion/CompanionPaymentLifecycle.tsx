"use client";

import React, { useState } from "react";
import { Lock, KeyRound, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle, Wallet } from "lucide-react";

export function CompanionPaymentLifecycle() {
  const [activeStep, setActiveStep] = useState(3);

  const lifecycleStages = [
    {
      num: 1,
      title: "Request Dispatched",
      actor: "Guest Account",
      summary: "Guest selects verified companion, public hotel venue, and agenda.",
      status: "Inquiry Sent",
    },
    {
      num: 2,
      title: "Companion Review",
      actor: "Companion Autonomy",
      summary: "Companion reviews guest profile, venue, and stated boundaries, then accepts.",
      status: "Terms Approved",
    },
    {
      num: 3,
      title: "Upfront Escrow Lock",
      actor: "Safeguarded Holding",
      summary: "Guest deposits fee into protected third-party escrow. Funds are locked but not paid out.",
      status: "₦45,000 Protected",
    },
    {
      num: 4,
      title: "Engagement at Venue",
      actor: "Hotel Public Setting",
      summary: "Social introduction occurs at Savannah Dining Room with concierge escort presence.",
      status: "Session Active",
    },
    {
      num: 5,
      title: "Dual PIN Settlement",
      actor: "Dual Independent Auth",
      summary: "Guest provides one-time PIN (e.g. 8492); both accounts confirm completion independently.",
      status: "Mutual Sign-off",
    },
    {
      num: 6,
      title: "Eligible for Withdrawal",
      actor: "Companion Wallet",
      summary: "Escrow clears to Available Balance. Companion initiates instant transfer to bank.",
      status: "Cleared Payout",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 border-b border-champagne-200/10 bg-[#0A0603] relative">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-champagne-200/10">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-amber-glow uppercase px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
                Financial Safeguard
              </span>
              <span className="text-xs font-mono text-champagne-300/60">
                Independent Escrow &amp; Dual PIN Protocol
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-champagne-100 font-light">
              Upfront Escrow &amp; Completion Architecture
            </h2>
            <p className="text-xs sm:text-sm text-ivory-warm/70 leading-relaxed font-light">
              Payment is secured upfront to prevent non-payment disputes, yet withheld from the companion
              until both parties independently confirm the engagement was completed respectfully.
            </p>
          </div>

          {/* Dual Balance Pill Rack */}
          <div className="flex items-center gap-3 p-2 rounded-2xl bg-shadow-darkest border border-champagne-200/15 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-amber-glow/10 border border-amber-glow/30">
              <div className="text-[9px] font-mono text-champagne-300/70 uppercase">Protected Escrow</div>
              <div className="text-base font-serif text-amber-glow font-bold">₦45,000 Held</div>
            </div>
            <ArrowRight className="w-4 h-4 text-champagne-300/40" />
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-[9px] font-mono text-champagne-300/70 uppercase">Cleared Balance</div>
              <div className="text-base font-serif text-emerald-400 font-bold">₦185,000 Available</div>
            </div>
          </div>
        </div>

        {/* 6 Stage Interactive Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {lifecycleStages.map((stage) => {
            const isSelected = activeStep === stage.num;
            return (
              <div
                key={stage.num}
                onClick={() => setActiveStep(stage.num)}
                className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2.5 ${
                  isSelected
                    ? "bg-amber-glow/15 border-amber-glow shadow-glow text-white"
                    : "bg-shadow-darkest/80 border-champagne-200/10 text-ivory-warm/75 hover:border-amber-glow/30"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? "text-amber-glow font-bold" : "text-champagne-300/60"}>
                    STAGE 0{stage.num}
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[9px] ${
                      isSelected
                        ? "bg-amber-glow text-shadow-darkest font-bold"
                        : "bg-[#0d0804] text-champagne-300/60"
                    }`}
                  >
                    {stage.actor.split(" ")[0]}
                  </span>
                </div>

                <div className="font-serif text-sm font-medium text-champagne-100">
                  {stage.title}
                </div>

                <p className="text-[11px] text-ivory-warm/65 leading-relaxed line-clamp-3">
                  {stage.summary}
                </p>

                <div className="pt-1.5 border-t border-champagne-200/10 text-[10px] font-mono text-amber-glow font-medium">
                  {stage.status}
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety First Invariant Box */}
        <div className="p-5 rounded-2xl border border-amber-glow/30 bg-gradient-to-r from-shadow-darkest via-shadow-main to-shadow-darkest flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-glow shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="font-serif text-sm text-champagne-200 font-medium">
                The Inviolable Safety Invariant:
              </div>
              <p className="text-ivory-warm/75 text-[11px] leading-relaxed max-w-3xl">
                Reporting an unsafe situation or boundary violation <strong>never requires someone to complete an engagement</strong> or surrender their safety. If a concern is raised by either party, the escrow immediately enters a review hold, alerting hotel management without automatic payout.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-amber-glow uppercase shrink-0 px-3 py-1.5 rounded-lg border border-amber-glow/40 bg-amber-glow/10">
            Zero-Compromise Protocol
          </span>
        </div>
      </div>
    </section>
  );
}
