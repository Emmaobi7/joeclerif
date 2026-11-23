"use client";

import React from "react";
import { CompanionNavbar } from "@/components/companion/CompanionNavbar";
import { CompanionSmartphonePrototype } from "@/components/companion/CompanionSmartphonePrototype";
import { CompanionHowItWorks } from "@/components/companion/CompanionHowItWorks";
import { CompanionTrustLayers } from "@/components/companion/CompanionTrustLayers";
import { CompanionPaymentLifecycle } from "@/components/companion/CompanionPaymentLifecycle";
import {
  Shield,
  UserCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  ArrowRight,
  Building2,
  FileText,
  AlertTriangle,
} from "lucide-react";

export default function CompanionPage() {
  return (
    <main className="min-h-screen bg-[#0D0804] text-[#F7F1E6] flex flex-col selection:bg-[#F5B841] selection:text-[#0D0804] overflow-x-hidden">
      {/* 1. Private Navigation */}
      <CompanionNavbar />

      {/* 2. Cinematic Hero Section */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-champagne-200/10 py-12 lg:py-20">
        {/* Ambient Top-Right God-Ray Light Beam Overlay */}
        <div className="sunbeams opacity-50" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Left Column: Brand Label, Headline, Narrative, and 3 Trust Principles */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
                  J O C L A R I F / PRIVATE EXPERIENCE
                </span>
                <span className="text-[10px] font-mono text-champagne-300/60 uppercase">
                  Zaria &bull; Executive Concept
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light text-champagne-100 tracking-tight leading-[1.04] drop-shadow-[0_12px_40px_rgba(20,12,5,0.95)]">
                A More Personal Way to Experience <br />
                <span className="italic font-extralight text-amber-glow">Hospitality.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-ivory-warm/80 font-light leading-relaxed max-w-xl">
              A thoughtfully managed companion discovery and coordination experience, designed around
              verified identities, personal choice, and greater confidence for everyone involved.
            </p>

            {/* Three Core Trust Principles */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-shadow-main/90 to-shadow-darkest border-hairline flex items-start gap-3.5 hover:border-amber-glow/30 transition-all">
                <div className="w-8 h-8 rounded-xl bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center text-amber-glow shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4 text-amber-glow" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-champagne-200 font-medium">
                    Verified Identities
                  </h4>
                  <p className="text-xs text-ivory-warm/65 leading-relaxed mt-0.5">
                    Independent age verification (&ge;18) and government-issued credential validation
                    backed by mandatory hotel approval before any profile becomes active.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-shadow-main/90 to-shadow-darkest border-hairline flex items-start gap-3.5 hover:border-amber-glow/30 transition-all">
                <div className="w-8 h-8 rounded-xl bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center text-amber-glow shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-amber-glow" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-champagne-200 font-medium">
                    Personal Choice &amp; Stated Boundaries
                  </h4>
                  <p className="text-xs text-ivory-warm/65 leading-relaxed mt-0.5">
                    Companions maintain complete autonomy over schedule availability, profile visibility,
                    and non-negotiable boundaries for public dining and cultural accompaniment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-shadow-main/90 to-shadow-darkest border-hairline flex items-start gap-3.5 hover:border-amber-glow/30 transition-all">
                <div className="w-8 h-8 rounded-xl bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center text-amber-glow shrink-0 mt-0.5">
                  <Lock className="w-4 h-4 text-amber-glow" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-champagne-200 font-medium">
                    Protected Booking Coordination
                  </h4>
                  <p className="text-xs text-ivory-warm/65 leading-relaxed mt-0.5">
                    Upfront funds secured in third-party escrow and disbursed only after independent
                    dual confirmation via authenticated one-time completion PIN.
                  </p>
                </div>
              </div>
            </div>

            {/* Stakeholder Concept Indicator */}
            <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-champagne-300/60 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-glow animate-pulse" />
              <span>Interactive Prototype On Right &bull; Switch Between Guest &amp; Companion Perspectives</span>
            </div>
          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <CompanionSmartphonePrototype />
          </div>
        </div>
      </section>

      {/* 3. Section: How It Works (01 Discover &bull; 02 Coordinate &bull; 03 Confirm) */}
      <CompanionHowItWorks />

      {/* 4. Section: Designed Around Three Layers of Trust (Companions, Guests, Hotel) */}
      <CompanionTrustLayers />

      {/* 5. Section: Upfront Escrow & Completion Architecture */}
      <CompanionPaymentLifecycle />

      {/* 6. Section: Legal, Ethical & Governance Framework */}
      <section className="w-full py-16 sm:py-20 bg-[#070402] border-t border-champagne-200/10 text-xs">
        <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 space-y-6">
          <div className="flex items-center gap-2 text-amber-glow font-mono uppercase tracking-widest text-[10px]">
            <AlertTriangle className="w-4 h-4 text-amber-glow" />
            <span>Ethical, Legal &amp; Governance Charter</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ivory-warm/70 leading-relaxed font-light">
            <div className="space-y-3">
              <h4 className="font-serif text-base text-champagne-200 font-normal">
                Strict Lawful Social Companionship Scope
              </h4>
              <p>
                Joclarif Companion is conceived exclusively as a curated platform for lawful adult social companionship,
                intellectual dialogue, fine dining accompaniment, and cultural exhibition tours (such as visiting ABU Zaria art
                collections or attending evening banquets).
              </p>
              <p>
                The platform does not operate, facilitate, or tolerate sexual-services transactions, commercial exploitation,
                human trafficking, or unlawful activities. Any attempt to solicit prohibited services results in immediate
                account termination, forfeiture of access, and referral to appropriate law enforcement authorities.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-base text-champagne-200 font-normal">
                Demonstration Prototype Disclaimer
              </h4>
              <p>
                All profiles, photographs, reviews, financial balances, and booking histories presented within this
                showcase are fictional demonstration artifacts created to illustrate product architecture. No actual identity
                documents are collected on this site, and no live financial transactions are processed.
              </p>
              <p>
                Production rollout requires engagement with licensed escrow institutions, independent third-party KYC/AML
                verification partners (e.g. IdentityPass), and formal hotel policy adoption governing visitor access and security.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-champagne-200/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] font-mono text-champagne-300/40">
            <span>&copy; 2026 Joclarif Hotel. Private Stakeholder Presentation. All Rights Reserved.</span>
            <span>Still Waters Luxury Editorial Design &bull; Zaria, Kaduna State, Nigeria</span>
          </div>
        </div>
      </section>
    </main>
  );
}
