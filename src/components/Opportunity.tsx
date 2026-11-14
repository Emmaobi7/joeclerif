"use client";

import React from "react";
import Image from "next/image";
import {
  TrendingUp,
  Users,
  CalendarCheck,
  Globe2,
  Layers,
  ArrowUpRight,
  CreditCard,
  Building,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { IMAGES } from "@/data/mockData";

export function Opportunity() {
  const businessDrivers = [
    {
      icon: TrendingUp,
      title: "Direct Booking Economics",
      highlight: "Save 15–25% in Commissions",
      description:
        "By replacing reliance on external booking intermediaries with an owned, frictionless booking portal, Joclarif captures 100% of guest room revenue while building a proprietary guest database.",
    },
    {
      icon: Users,
      title: "Wedding & Large Family Delegations",
      highlight: "High-Margin Room Blocks",
      description:
        "Guests arriving for grand family weddings or ceremonies in Zaria frequently request 10 to 20 rooms plus a banquet hall. A unified group booking engine transforms a frustrating phone loop into an immediate confirmed booking.",
    },
    {
      icon: CalendarCheck,
      title: "Banquet Hall & Event Synergy",
      highlight: "Unified Event + Room Packages",
      description:
        "Seamlessly bundle event hall hire with attendee room blocks, catering packages, and audiovisual arrangements under a single master coordination folio.",
    },
    {
      icon: Globe2,
      title: "Academic & Corporate Delegations",
      highlight: "ABU Zaria & Institutional Guests",
      description:
        "Position Joclarif as the pre-eminent hospitality choice for university visiting professors, convocation guests, research fellows, and corporate visitors seeking seamless digital reservation and invoicing.",
    },
    {
      icon: CreditCard,
      title: "Nigerian Payment Adaptability",
      highlight: "Cards, USSD, Bank Transfers & FX",
      description:
        "Accept instant local payments (Cards, instant bank transfers, USSD) alongside international credit cards without payment friction or manual reconciliation headaches.",
    },
    {
      icon: Layers,
      title: "Executive Visibility for Ownership",
      highlight: "Real-Time Occupancy & Revenue",
      description:
        "Hotel leadership gains instantaneous real-time visibility into daily revenue, room status, pending deposits, and guest feedback from anywhere in the world.",
    },
  ];

  return (
    <section id="opportunity" className="py-28 bg-[#130C06] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Subtle Volumetric Glow */}
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Commercial Opportunity"
          subtitle="Strategic Business Value"
          title="Transforming Digital Presence into Tangible Hotel Revenue"
          description="A bespoke digital hospitality ecosystem does not merely modernise aesthetics—it directly expands room yield, captures multi-room family events, and protects Joclarif's operating margins."
        />

        {/* Highlight Grid with Still Waters Umber & Amber Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {businessDrivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <div
                key={driver.title}
                className="rounded-2xl p-7 bg-shadow-main/90 border-hairline hover:border-amber-glow/40 transition-all duration-500 group hover:-translate-y-1 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-shadow-darkest border-hairline flex items-center justify-center text-amber-glow group-hover:border-amber-glow/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-champagne-300/80 bg-shadow-darkest px-2.5 py-1 rounded-full border-hairline">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-ivory-warm font-normal mb-1 group-hover:text-champagne-200 transition-colors">
                    {driver.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-amber-glow tracking-wider uppercase mb-3">
                    {driver.highlight}
                  </p>
                  <p className="text-xs sm:text-sm text-ivory-warm/70 leading-relaxed font-light">
                    {driver.description}
                  </p>
                </div>

                <a
                  href="#reservations"
                  className="pt-5 mt-5 border-t border-champagne-200/10 flex items-center text-xs text-ivory-warm/50 group-hover:text-amber-glow font-medium transition-colors cursor-pointer"
                >
                  <span className="tracking-wider uppercase text-[10px]">Explore proposed workflow</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Commercial Contrast Editorial Feature */}
        <div className="rounded-3xl overflow-hidden border-hairline bg-gradient-to-br from-shadow-main to-shadow-darkest p-8 sm:p-12 shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-amber-glow font-semibold block">
                The Strategic Contrast
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal leading-tight">
                From Fragmented Phone &amp; Paper Booking to an Integrated Commercial Asset
              </h3>
              <p className="text-sm sm:text-base text-ivory-warm/75 leading-relaxed font-light">
                Today, wedding planners, corporate organizers, and visiting families rely on disjointed
                phone messages, bank deposit slips, and manual paper room allocation books.
                This proposal unifies every channel into one deterministic engine.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-shadow-darkest/90 border border-red-500/20">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-red-400/90 mb-2 font-mono">
                    Current Industry Friction
                  </p>
                  <ul className="text-xs text-ivory-warm/60 space-y-1.5 list-disc list-inside font-light">
                    <li>15–25% commission lost to external portals</li>
                    <li>Manual phone calls for multi-room group quotes</li>
                    <li>Front desk phone congestion during events</li>
                    <li>Unverified paper check-in queues in the lobby</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-shadow-darkest/90 border border-amber-glow/30">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-amber-glow mb-2 font-mono">
                    Proposed Joclarif Advantage
                  </p>
                  <ul className="text-xs text-champagne-200/90 space-y-1.5 list-disc list-inside font-light">
                    <li>100% direct revenue capture on brand website</li>
                    <li>Instant AI-assisted multi-room wedding quotations</li>
                    <li>24/7 multilingual concierge handling routine FAQs</li>
                    <li>Pre-arrival digital check-in with OCR passport read</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border-hairline shadow-subtle">
                <Image
                  src={IMAGES.lobby}
                  alt="Elegant luxury reception lounge"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="text-[10px] text-ivory-warm/70 bg-shadow-darkest/90 px-3.5 py-1.5 rounded-full border-hairline backdrop-blur-md">
                    Atmospheric Inspiration &bull; Proposed reception &amp; lounge ambiance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
