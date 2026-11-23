"use client";

import React from "react";
import { Shield, UserCheck, Building2, Lock, HeartHandshake, FileCheck, CheckCircle2 } from "lucide-react";

export function CompanionTrustLayers() {
  const layers = [
    {
      title: "For Companions",
      subtitle: "Autonomy, Boundaries & Protection",
      icon: UserCheck,
      points: [
        "Full control over profile visibility (Online / Invisible toggles).",
        "Freedom to accept or decline any introduction request unconditionally.",
        "Non-negotiable personal boundaries published upfront.",
        "Confidential identity records shielded from guests and non-essential staff.",
        "Discreet safety check-ins and one-touch incident reporting.",
        "Upfront escrow guarantee ensuring guaranteed withdrawal upon completion.",
      ],
      badge: "Companion Autonomy",
    },
    {
      title: "For Guests",
      subtitle: "Verified Credentials & Protected Escrow",
      icon: Shield,
      points: [
        "100% of discoverable profiles independently verified for age (&ge;18) and legal identity.",
        "Transparent introduction terms with zero unexpected fee demands.",
        "Protected upfront payment held in escrow until independent PIN confirmation.",
        "High-caliber conversational accompaniment for cultural events and fine dining.",
        "Integrated concierge assistance and immediate resolution support.",
        "Strict NDPR-compliant privacy safeguards.",
      ],
      badge: "Guest Assurance",
    },
    {
      title: "For the Hotel",
      subtitle: "Accountable Procedures & Managed Access",
      icon: Building2,
      points: [
        "Replaces unvetted, unstructured visitors with verified registered attendees.",
        "Strict public venue policy (lobby lounge, dining room, banquet suites).",
        "Zero exposure of sensitive companion personal records to front-desk staff.",
        "Discreet duty manager escorts and standardized incident escalation protocols.",
        "Documented audit trails supporting institutional compliance and insurance.",
        "Clear operational boundary distinguishing hospitality coordination from liability.",
      ],
      badge: "Property Governance",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 border-b border-champagne-200/10 bg-[#0D0804] relative">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-amber-glow uppercase px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Governance Architecture
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              Balanced Multilateral Protection
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-champagne-100 font-light">
            Designed Around Three Layers of Trust.
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 leading-relaxed font-light">
            Every introduction is governed by safeguards that balance companion autonomy, guest confidence,
            and institutional hotel standards.
          </p>
        </div>

        {/* 3 Perspectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.title}
                className="p-7 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest backdrop-blur-md shadow-luxury space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-glow/15 border border-amber-glow/30 text-amber-glow">
                      {layer.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-amber-glow/10 border border-amber-glow/25 flex items-center justify-center text-amber-glow">
                      <Icon className="w-4 h-4 text-amber-glow" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-champagne-100 font-normal">
                      {layer.title}
                    </h3>
                    <div className="text-[11px] font-mono text-champagne-300/60 mt-0.5">
                      {layer.subtitle}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {layer.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ivory-warm/75 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-champagne-200/10 text-[10px] font-mono text-champagne-300/50">
                  Enforced via Joclarif Trust Engine &bull; IdentityPass Certified
                </div>
              </div>
            );
          })}
        </div>

        {/* Governance Disclaimer Notice */}
        <div className="p-5 rounded-2xl border border-champagne-200/15 bg-shadow-darkest/90 text-xs text-ivory-warm/70 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-champagne-200 font-medium font-serif">
              Institutional Governance Note for Stakeholders:
            </span>
            <p className="text-[11px] text-ivory-warm/60">
              Technology platforms alone do not replace comprehensive property governance. In production deployment,
              Joclarif Companion operates in conjunction with explicit visitor access policies, staff protocols,
              appropriate insurance coverage, and licensed third-party escrow settlement partners.
            </p>
          </div>
          <span className="text-[10px] font-mono text-amber-glow shrink-0 px-3 py-1.5 rounded-lg border border-amber-glow/30 bg-amber-glow/10">
            Compliance Framework
          </span>
        </div>
      </div>
    </section>
  );
}
