"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  COMPANION_PROFILES,
  CompanionProfile,
  SAMPLE_BOOKING,
  COMPANION_WALLET_MOCK,
  CompanionBookingState,
} from "@/data/companionMockData";
import {
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Lock,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  CreditCard,
  KeyRound,
  ExternalLink,
  Shield,
  HelpCircle,
  Eye,
  Check,
  X,
  FileCheck,
  Wallet,
  Building,
} from "lucide-react";

type PrototypeRole = "guest" | "companion";

type GuestScreen =
  | "discovery"
  | "profile"
  | "request"
  | "escrow"
  | "confirmed"
  | "completion"
  | "receipt";

type CompanionScreen =
  | "dashboard"
  | "requests"
  | "verification"
  | "wallet"
  | "boundaries"
  | "completion";

export function CompanionSmartphonePrototype() {
  const [role, setRole] = useState<PrototypeRole>("guest");

  // Guest State
  const [guestScreen, setGuestScreen] = useState<GuestScreen>("discovery");
  const [selectedCompanion, setSelectedCompanion] = useState<CompanionProfile>(COMPANION_PROFILES[0]);
  const [guestBooking, setGuestBooking] = useState<CompanionBookingState>(SAMPLE_BOOKING);
  const [guestConfirmedDone, setGuestConfirmedDone] = useState(false);

  // Companion State
  const [companionScreen, setCompanionScreen] = useState<CompanionScreen>("dashboard");
  const [isOnline, setIsOnline] = useState(true);
  const [incomingRequestAccepted, setIncomingRequestAccepted] = useState(true);
  const [enteredPin, setEnteredPin] = useState("");
  const [companionConfirmedDone, setCompanionConfirmedDone] = useState(false);
  const [availableFunds, setAvailableFunds] = useState("₦185,000");
  const [escrowFunds, setEscrowFunds] = useState("₦45,000");

  const handleCompanionConfirmPin = () => {
    if (enteredPin === "8492" || enteredPin.length >= 4) {
      setCompanionConfirmedDone(true);
      setEscrowFunds("₦0");
      setAvailableFunds("₦230,000"); // 185k + 45k
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Role Toggle Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-shadow-darkest border border-champagne-200/20 backdrop-blur-md mb-6 shadow-luxury">
        <button
          type="button"
          onClick={() => {
            setRole("guest");
            setGuestScreen("discovery");
          }}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
            role === "guest"
              ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
              : "text-ivory-warm/70 hover:text-white"
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Guest Experience</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setRole("companion");
            setCompanionScreen("dashboard");
          }}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
            role === "companion"
              ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
              : "text-ivory-warm/70 hover:text-white"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Companion Experience</span>
        </button>
      </div>

      {/* Realistic Titanium / Champagne Mobile Phone Chassis */}
      <div className="relative w-full max-w-[380px] sm:max-w-[400px] aspect-[9/18.8] rounded-[48px] p-3 bg-gradient-to-b from-[#4A3520] via-[#2A1D13] to-[#120B05] border-[3px] border-[#EFE0B9]/25 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(245,184,65,0.15)] ring-1 ring-amber-glow/20 select-none">
        {/* Outer Titanium Bezel Reflections */}
        <div className="absolute inset-0 rounded-[45px] pointer-events-none border border-champagne-200/15" />

        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 w-28 h-5 rounded-full bg-black border border-champagne-200/10 flex items-center justify-between px-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1b1510] border border-champagne-200/20" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/70 animate-pulse" />
        </div>

        {/* Interactive Screen Display */}
        <div className="relative w-full h-full rounded-[38px] bg-[#0D0804] text-[#F7F1E6] overflow-hidden flex flex-col font-sans border border-champagne-200/10">
          {/* Top Status Bar with Discreet Demo Label */}
          <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[10px] font-mono text-champagne-300/60 z-20 bg-[#0D0804]/90 backdrop-blur-sm">
            <span>09:41</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-amber-glow/15 border border-amber-glow/30 text-amber-glow font-bold uppercase tracking-widest">
              DEMO &bull; PRIVATE CONCEPT
            </span>
            <span>5G 100%</span>
          </div>

          {/* ================= GUEST EXPERIENCE FLOW ================= */}
          {role === "guest" && (
            <div className="flex-1 flex flex-col overflow-y-auto">
              {/* SCREEN 1: DISCOVERY FEED */}
              {guestScreen === "discovery" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-mono tracking-widest text-amber-glow uppercase">
                        Verified Introductions
                      </div>
                      <h3 className="font-serif text-lg text-champagne-100 font-light">
                        Curated Companions
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-shadow-darkest border border-champagne-200/15 text-champagne-300">
                      Zaria &bull; Oct 2026
                    </span>
                  </div>

                  {/* Profile Cards */}
                  <div className="space-y-3">
                    {COMPANION_PROFILES.map((profile) => (
                      <div
                        key={profile.id}
                        onClick={() => {
                          setSelectedCompanion(profile);
                          setGuestScreen("profile");
                        }}
                        className="rounded-2xl border border-champagne-200/15 bg-gradient-to-b from-shadow-main/90 to-shadow-darkest overflow-hidden cursor-pointer hover:border-amber-glow/40 transition-all group"
                      >
                        <div className="relative h-36 w-full overflow-hidden">
                          <Image
                            src={profile.heroImage}
                            alt={profile.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="360px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-shadow-darkest/40 to-transparent" />
                          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-shadow-darkest/85 border border-emerald-500/40 text-[9px] font-mono text-emerald-400 backdrop-blur-sm">
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                            <span>Identity Verified</span>
                          </div>
                        </div>

                        <div className="p-3.5 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-serif text-base text-champagne-200 font-medium">
                                {profile.name} ({profile.age})
                              </h4>
                              <p className="text-[11px] text-amber-glow font-mono mt-0.5">
                                {profile.headline}
                              </p>
                            </div>
                            <span className="text-xs font-mono font-bold text-champagne-100">
                              {profile.hourlyRate.split(" /")[0]}
                            </span>
                          </div>

                          <p className="text-[11px] text-ivory-warm/70 line-clamp-2 leading-relaxed">
                            {profile.bio}
                          </p>

                          <div className="pt-1.5 flex items-center justify-between border-t border-champagne-200/10 text-[10px] font-mono text-champagne-300/70">
                            <span>Rating: ★ {profile.rating}</span>
                            <span className="text-amber-glow group-hover:translate-x-1 transition-transform flex items-center gap-1">
                              View Profile &rarr;
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SCREEN 2: PROFILE DETAIL & BOUNDARIES */}
              {guestScreen === "profile" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => setGuestScreen("discovery")}
                    className="text-[11px] font-mono text-champagne-300/70 hover:text-white flex items-center gap-1"
                  >
                    &larr; Back to Curated List
                  </button>

                  <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-champagne-200/15">
                    <Image
                      src={selectedCompanion.heroImage}
                      alt={selectedCompanion.name}
                      fill
                      className="object-cover"
                      sizes="360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-shadow-darkest/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <div className="text-[9px] font-mono text-amber-glow uppercase">
                          {selectedCompanion.idProvider}
                        </div>
                        <h3 className="font-serif text-xl text-champagne-100 font-light">
                          {selectedCompanion.name} ({selectedCompanion.age})
                        </h3>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-glow bg-shadow-darkest/90 px-2 py-1 rounded border border-amber-glow/30">
                        {selectedCompanion.hourlyRate}
                      </span>
                    </div>
                  </div>

                  {/* Biography */}
                  <div className="space-y-1 text-xs">
                    <div className="text-[10px] font-mono text-champagne-300/60 uppercase">
                      Background &amp; Focus
                    </div>
                    <p className="text-ivory-warm/80 leading-relaxed text-[11px]">
                      {selectedCompanion.bio}
                    </p>
                  </div>

                  {/* Non-Negotiable Stated Boundaries (Core Trust Principle) */}
                  <div className="p-3.5 rounded-xl bg-amber-glow/5 border border-amber-glow/30 space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-amber-glow font-bold uppercase">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Personal Boundaries &amp; Terms</span>
                    </div>
                    <div className="space-y-1.5 text-[10px] text-ivory-warm/80">
                      {selectedCompanion.boundaries.map((b, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-glow font-bold">&bull;</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <button
                    type="button"
                    onClick={() => setGuestScreen("request")}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow hover:opacity-95"
                  >
                    Request Introduction
                  </button>
                </div>
              )}

              {/* SCREEN 3: REQUEST COORDINATION */}
              {guestScreen === "request" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => setGuestScreen("profile")}
                    className="text-[11px] font-mono text-champagne-300/70 hover:text-white flex items-center gap-1"
                  >
                    &larr; Back to Profile
                  </button>

                  <div>
                    <span className="text-[9px] font-mono text-amber-glow uppercase">
                      Step 1 of 3 &bull; Coordination
                    </span>
                    <h3 className="font-serif text-lg text-champagne-100 font-light">
                      Request Engagement with {selectedCompanion.name.split(" ")[0]}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Date &amp; Time</div>
                      <div className="font-serif text-sm text-champagne-200">Today &bull; 19:00 – 22:00 (3 Hours)</div>
                    </div>

                    <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Selected Public Venue</div>
                      <div className="font-serif text-sm text-champagne-200">Savannah Dining Room (Table 4)</div>
                      <div className="text-[10px] text-ivory-warm/60">Verified hotel dining room with dedicated concierge presence.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Occasion &amp; Discussion Focus</div>
                      <div className="font-serif text-sm text-champagne-200">ABU Zaria Architecture &amp; Fine Arts Retrospective</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#140c06] border border-champagne-200/10 text-[10px] text-ivory-warm/70 space-y-1">
                    <div className="text-amber-glow font-bold font-mono">Upfront Escrow Protection:</div>
                    <p>
                      Funds are held in safeguarded escrow and released only after both parties independently confirm completion via one-time PIN.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuestScreen("escrow")}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow hover:opacity-95"
                  >
                    Proceed to Escrow Deposit
                  </button>
                </div>
              )}

              {/* SCREEN 4: UPFRONT PAYMENT ESCROW */}
              {guestScreen === "escrow" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <div className="text-center py-2 space-y-1">
                    <div className="w-12 h-12 rounded-full bg-amber-glow/15 border border-amber-glow/40 mx-auto flex items-center justify-center text-amber-glow">
                      <Lock className="w-6 h-6 text-amber-glow" />
                    </div>
                    <div className="text-[9px] font-mono text-amber-glow uppercase tracking-widest pt-1">
                      Protected Escrow Facility
                    </div>
                    <h3 className="font-serif text-xl text-champagne-100 font-light">
                      Securing ₦45,000 Deposit
                    </h3>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-shadow-darkest border border-champagne-200/15 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                      <span className="text-ivory-warm/70">Engagement Fee:</span>
                      <span className="font-mono text-champagne-200 font-semibold">₦45,000</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                      <span className="text-ivory-warm/70">Escrow Provider:</span>
                      <span className="font-mono text-emerald-400">Safeguarded Holding</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ivory-warm/70">Release Condition:</span>
                      <span className="font-mono text-amber-glow">Dual Completion PIN</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-ivory-warm/65 leading-relaxed text-center px-2">
                    Payment is authorized now but withheld from the companion until engagement completion is independently confirmed.
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuestScreen("confirmed")}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow hover:opacity-95"
                  >
                    Confirm &amp; Lock Funds (Demo)
                  </button>
                </div>
              )}

              {/* SCREEN 5: CONFIRMED BOOKING & SAFETY */}
              {guestScreen === "confirmed" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-300 font-mono text-[11px]">
                      Booking Confirmed &bull; Funds in Escrow
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-shadow-darkest border border-champagne-200/15 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-base text-champagne-200 font-medium">
                        Amina Bello, M.A.
                      </span>
                      <span className="text-[10px] font-mono text-amber-glow">
                        ID: BK-CMP-904
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-ivory-warm/80 font-mono">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-glow" />
                        <span>Today &bull; 19:00 – 22:00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-amber-glow" />
                        <span>Savannah Dining Room (Table 4)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-3.5 h-3.5 text-amber-glow" />
                        <span>Duty Concierge: Ibrahim Sanusi</span>
                      </div>
                    </div>
                  </div>

                  {/* Meeting Safety Bar */}
                  <div className="p-3 rounded-xl bg-[#140c06] border border-champagne-200/15 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-amber-glow" />
                      <span className="text-ivory-warm/80">Safety Concierge Active</span>
                    </div>
                    <span className="text-amber-glow font-mono font-semibold">24/7 Hotline</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuestScreen("completion")}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow"
                  >
                    Simulate Meeting End (PIN Release)
                  </button>
                </div>
              )}

              {/* SCREEN 6: DUAL PIN COMPLETION */}
              {guestScreen === "completion" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <div className="text-center py-2 space-y-1">
                    <KeyRound className="w-8 h-8 text-amber-glow mx-auto" />
                    <div className="text-[10px] font-mono text-amber-glow uppercase tracking-wider">
                      Dual-Party Settlement Protocol
                    </div>
                    <h3 className="font-serif text-lg text-champagne-100 font-light">
                      Engagement Completion PIN
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-glow/10 border border-amber-glow/40 text-center space-y-2 shadow-glow">
                    <div className="text-[10px] font-mono text-champagne-300/80 uppercase">
                      Your One-Time Release PIN:
                    </div>
                    <div className="font-mono text-3xl text-amber-glow font-bold tracking-[0.3em]">
                      8 4 9 2
                    </div>
                    <p className="text-[10px] text-ivory-warm/70">
                      Share this PIN with Amina Bello upon successful conclusion of your engagement.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1 text-[11px]">
                    <div className="font-mono text-champagne-200 font-medium">Independent Confirmation:</div>
                    <p className="text-ivory-warm/60">
                      Both accounts must independently confirm completion. A shared PIN alone will not disburse funds if either party reports a safety or boundary breach.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setGuestConfirmedDone(true);
                      setGuestScreen("receipt");
                    }}
                    className="w-full py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs font-mono uppercase tracking-wider hover:bg-emerald-500 hover:text-shadow-darkest transition-all"
                  >
                    Confirm Completion on Guest Account
                  </button>
                </div>
              )}

              {/* SCREEN 7: RECEIPT & COMPLETION */}
              {guestScreen === "receipt" && (
                <div className="p-4 space-y-4 animate-fadeIn text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-champagne-100 font-light">
                    Engagement Completed
                  </h3>
                  <p className="text-xs text-ivory-warm/75 leading-relaxed">
                    Thank you, Prof. Kenneth Sterling. Escrow funds have been successfully cleared to Amina Bello.
                  </p>

                  <div className="p-3.5 rounded-xl bg-shadow-darkest border border-champagne-200/15 text-left text-xs font-mono space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-ivory-warm/60">Receipt Number:</span>
                      <span className="text-champagne-200 font-bold">REC-CMP-8492</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ivory-warm/60">Settled Amount:</span>
                      <span className="text-amber-glow font-bold">₦45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ivory-warm/60">Audited By:</span>
                      <span className="text-emerald-400">Joclarif Protocol</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuestScreen("discovery")}
                    className="w-full py-2.5 rounded-xl border border-champagne-200/20 text-xs font-mono text-champagne-200 hover:text-white"
                  >
                    Return to Curated Introductions
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= COMPANION EXPERIENCE FLOW ================= */}
          {role === "companion" && (
            <div className="flex-1 flex flex-col overflow-y-auto">
              {/* COMPANION SCREEN 1: DASHBOARD */}
              {companionScreen === "dashboard" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-mono tracking-widest text-amber-glow uppercase">
                        Companion Portal
                      </div>
                      <h3 className="font-serif text-lg text-champagne-100 font-light">
                        Amina Bello, M.A.
                      </h3>
                    </div>
                    {/* Online Toggle */}
                    <button
                      type="button"
                      onClick={() => setIsOnline(!isOnline)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono transition-all ${
                        isOnline
                          ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-400"
                          : "bg-shadow-darkest border border-champagne-200/20 text-ivory-warm/50"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-emerald-400 animate-pulse" : "bg-gray-400"}`} />
                      <span>{isOnline ? "Online" : "Invisible"}</span>
                    </button>
                  </div>

                  {/* Dual Balance Wallet Quick Glance */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-shadow-darkest via-shadow-main to-shadow-darkest border border-champagne-200/15 space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono text-champagne-300/60 uppercase">
                      <span>Wallet Balances</span>
                      <span className="text-amber-glow cursor-pointer" onClick={() => setCompanionScreen("wallet")}>
                        View Wallet &rarr;
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-[#0a0603] border border-champagne-200/10">
                        <div className="text-[9px] font-mono text-champagne-300/60">Protected Escrow</div>
                        <div className="font-mono text-base font-bold text-amber-glow mt-0.5">
                          {escrowFunds}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#0a0603] border border-champagne-200/10">
                        <div className="text-[9px] font-mono text-champagne-300/60">Available Payout</div>
                        <div className="font-mono text-base font-bold text-emerald-400 mt-0.5">
                          {availableFunds}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verification Status Pill */}
                  <div
                    onClick={() => setCompanionScreen("verification")}
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between cursor-pointer hover:bg-emerald-500/15 transition-all text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 font-mono text-[11px]">
                        Status: Approved &amp; Active
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  </div>

                  {/* Incoming Request Alert Card */}
                  <div
                    onClick={() => setCompanionScreen("requests")}
                    className="p-4 rounded-2xl bg-amber-glow/10 border border-amber-glow/40 space-y-2 cursor-pointer shadow-glow"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-glow font-bold uppercase flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Incoming Introduction Request</span>
                      </span>
                      <span className="text-[9px] font-mono text-champagne-300">10m ago</span>
                    </div>
                    <div className="font-serif text-sm text-champagne-100">
                      Prof. Kenneth Sterling (ABU Visiting Fellow)
                    </div>
                    <div className="text-[10px] text-ivory-warm/70">
                      Savannah Dining Room &bull; Today 19:00 &bull; ₦45,000 Escrow Secured
                    </div>
                  </div>

                  {/* Navigation Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setCompanionScreen("boundaries")}
                      className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 text-left hover:border-amber-glow/40"
                    >
                      <SlidersHorizontal className="w-4 h-4 text-amber-glow mb-1" />
                      <div className="text-champagne-200">Boundaries</div>
                      <div className="text-[9px] text-ivory-warm/50">Edit public terms</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCompanionScreen("wallet")}
                      className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 text-left hover:border-amber-glow/40"
                    >
                      <Wallet className="w-4 h-4 text-amber-glow mb-1" />
                      <div className="text-champagne-200">Bank Payout</div>
                      <div className="text-[9px] text-ivory-warm/50">Zenith Bank ****4819</div>
                    </button>
                  </div>
                </div>
              )}

              {/* COMPANION SCREEN 2: INCOMING REQUEST INSPECTOR */}
              {companionScreen === "requests" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => setCompanionScreen("dashboard")}
                    className="text-[11px] font-mono text-champagne-300/70 hover:text-white flex items-center gap-1"
                  >
                    &larr; Back to Dashboard
                  </button>

                  <div>
                    <span className="text-[9px] font-mono text-amber-glow uppercase">
                      Engagement Review
                    </span>
                    <h3 className="font-serif text-lg text-champagne-100 font-light">
                      Introduction Request
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-shadow-darkest border border-champagne-200/15 space-y-3 text-xs">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Guest Profile</div>
                      <div className="font-serif text-sm text-champagne-200 font-medium">
                        Prof. Kenneth Sterling (ABU Visiting Fellow)
                      </div>
                      <div className="text-[10px] text-emerald-400 font-mono">
                        Guest ID Verified &bull; Verified Hotel Resident
                      </div>
                    </div>

                    <div className="space-y-0.5 pt-2 border-t border-champagne-200/10">
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Requested Agenda</div>
                      <div className="text-[11px] text-ivory-warm/80 leading-relaxed">
                        &ldquo;Dinner conversation on ABU Zaria architectural history followed by a walkthrough of the Savannah art collection.&rdquo;
                      </div>
                    </div>

                    <div className="space-y-0.5 pt-2 border-t border-champagne-200/10">
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">Venue &amp; Timings</div>
                      <div className="text-[11px] text-ivory-warm/80">
                        Savannah Dining Room &bull; Today 19:00 – 22:00
                      </div>
                    </div>

                    <div className="space-y-0.5 pt-2 border-t border-champagne-200/10 flex justify-between items-center">
                      <span className="text-ivory-warm/60">Protected Escrow Amount:</span>
                      <span className="text-amber-glow font-mono font-bold text-sm">₦45,000</span>
                    </div>
                  </div>

                  {incomingRequestAccepted ? (
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono text-center">
                        Request Accepted &bull; Meeting Details Active
                      </div>
                      <button
                        type="button"
                        onClick={() => setCompanionScreen("completion")}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow"
                      >
                        Enter Completion PIN
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setCompanionScreen("dashboard")}
                        className="py-3 rounded-xl border border-champagne-200/20 text-xs font-mono text-ivory-warm/70 hover:text-white"
                      >
                        Decline
                      </button>
                      <button
                        type="button"
                        onClick={() => setIncomingRequestAccepted(true)}
                        className="py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow"
                      >
                        Accept Request
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* COMPANION SCREEN 3: VERIFICATION PORTAL */}
              {companionScreen === "verification" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => setCompanionScreen("dashboard")}
                    className="text-[11px] font-mono text-champagne-300/70 hover:text-white flex items-center gap-1"
                  >
                    &larr; Back to Dashboard
                  </button>

                  <div>
                    <span className="text-[9px] font-mono text-emerald-400 uppercase">
                      Identity &amp; Governance
                    </span>
                    <h3 className="font-serif text-lg text-champagne-100 font-light">
                      Independent KYC Verification
                    </h3>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-shadow-darkest border border-champagne-200/15 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-ivory-warm/70">Current State:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
                        Approved &amp; Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ivory-warm/70">Legal Identity / Age:</span>
                      <span className="text-champagne-200 font-mono">Age 27 Verified (&ge; 18)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ivory-warm/70">Document Verified:</span>
                      <span className="text-champagne-200 font-mono">Nigerian Passport (NIN Cross-Check)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ivory-warm/70">Verified By:</span>
                      <span className="text-emerald-400 font-mono">IdentityPass Nigeria</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ivory-warm/70">Joclarif Hotel Approval:</span>
                      <span className="text-emerald-400 font-mono">Executive Approved (14 Oct)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#140c06] border border-champagne-200/15 text-[10px] text-ivory-warm/70 leading-relaxed">
                    <strong>Institutional Safeguard:</strong> Users cannot mark their own profiles as verified. Only third-party KYC pass combined with Joclarif hotel approval permits profile discovery.
                  </div>
                </div>
              )}

              {/* COMPANION SCREEN 4: WALLET & EARNINGS */}
              {companionScreen === "wallet" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => setCompanionScreen("dashboard")}
                    className="text-[11px] font-mono text-champagne-300/70 hover:text-white flex items-center gap-1"
                  >
                    &larr; Back to Dashboard
                  </button>

                  <div>
                    <span className="text-[9px] font-mono text-amber-glow uppercase">
                      Financial Safeguard
                    </span>
                    <h3 className="font-serif text-lg text-champagne-100 font-light">
                      Protected Earnings &amp; Wallet
                    </h3>
                  </div>

                  {/* Dual Balances */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-amber-glow/10 border border-amber-glow/30 space-y-1">
                      <div className="text-[10px] font-mono text-champagne-300/80 uppercase">
                        Protected Booking Escrow Funds
                      </div>
                      <div className="font-mono text-2xl font-bold text-amber-glow">
                        {escrowFunds}
                      </div>
                      <div className="text-[10px] text-ivory-warm/60">
                        Associated with active upcoming booking. Becomes eligible upon dual PIN confirmation.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                      <div className="text-[10px] font-mono text-champagne-300/80 uppercase">
                        Available Earnings for Withdrawal
                      </div>
                      <div className="font-mono text-2xl font-bold text-emerald-400">
                        {availableFunds}
                      </div>
                      <div className="text-[10px] text-ivory-warm/60">
                        Cleared funds eligible for instant bank transfer to Zenith Bank ****4819.
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow hover:opacity-95"
                  >
                    Request Withdrawal to Bank (Demo)
                  </button>
                </div>
              )}

              {/* COMPANION SCREEN 5: SETTINGS & BOUNDARIES */}
              {companionScreen === "boundaries" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => setCompanionScreen("dashboard")}
                    className="text-[11px] font-mono text-champagne-300/70 hover:text-white flex items-center gap-1"
                  >
                    &larr; Back to Dashboard
                  </button>

                  <div>
                    <span className="text-[9px] font-mono text-amber-glow uppercase">
                      Autonomy &amp; Protection
                    </span>
                    <h3 className="font-serif text-lg text-champagne-100 font-light">
                      Boundaries &amp; Preferences
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                      <div className="font-medium text-champagne-200">Public Venue Requirement</div>
                      <div className="text-[10px] text-ivory-warm/60">Strictly hotel dining, gallery, and conference rooms.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                      <div className="font-medium text-champagne-200">Evening Curfew</div>
                      <div className="text-[10px] text-ivory-warm/60">Engagements automatically conclude by 23:00.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                      <div className="font-medium text-champagne-200">Safety Check-in Ping</div>
                      <div className="text-[10px] text-ivory-warm/60">Automated discreet SMS prompt at 60-min intervals.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* COMPANION SCREEN 6: PIN VERIFICATION & COMPLETION */}
              {companionScreen === "completion" && (
                <div className="p-4 space-y-4 animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => setCompanionScreen("dashboard")}
                    className="text-[11px] font-mono text-champagne-300/70 hover:text-white flex items-center gap-1"
                  >
                    &larr; Back to Dashboard
                  </button>

                  <div className="text-center py-2 space-y-1">
                    <KeyRound className="w-8 h-8 text-amber-glow mx-auto" />
                    <div className="text-[10px] font-mono text-amber-glow uppercase tracking-wider">
                      Verify Completion PIN
                    </div>
                    <h3 className="font-serif text-lg text-champagne-100 font-light">
                      Release Escrow Funds
                    </h3>
                  </div>

                  {!companionConfirmedDone ? (
                    <div className="space-y-3">
                      <p className="text-[11px] text-ivory-warm/75 text-center px-2">
                        Enter the 4-digit code provided by Prof. Kenneth Sterling to confirm engagement completion.
                      </p>

                      <div className="flex justify-center">
                        <input
                          type="text"
                          maxLength={4}
                          placeholder="8492"
                          value={enteredPin}
                          onChange={(e) => setEnteredPin(e.target.value)}
                          className="w-36 text-center py-2.5 rounded-xl bg-shadow-darkest border-2 border-amber-glow/60 text-amber-glow font-mono text-2xl tracking-[0.3em] focus:outline-none shadow-glow"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleCompanionConfirmPin}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-wider shadow-glow"
                      >
                        Verify PIN &amp; Settle ₦45,000
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                      <div className="font-serif text-base text-champagne-100 font-medium">
                        PIN Verified &bull; Funds Released!
                      </div>
                      <p className="text-[10px] text-ivory-warm/70">
                        ₦45,000 has moved from Protected Escrow to your Available Balance.
                      </p>
                      <button
                        type="button"
                        onClick={() => setCompanionScreen("wallet")}
                        className="mt-2 text-xs font-mono text-amber-glow underline"
                      >
                        Inspect Updated Wallet Balance &rarr;
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
