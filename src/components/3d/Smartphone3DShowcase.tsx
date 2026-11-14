"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Smartphone,
  Sparkles,
  MessageSquare,
  Compass,
  CreditCard,
  Bell,
  Calendar,
  BedDouble,
  Utensils,
  Key,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  ArrowRight,
  User,
  Phone,
  MapPin,
  Send,
  Clock,
  Shield,
  Wifi,
  Battery,
  Lock,
  Search,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { IMAGES } from "@/data/mockData";

export type AppScreenKey =
  | "home"
  | "copilot"
  | "concierge"
  | "messaging"
  | "checkin"
  | "reservations"
  | "services"
  | "notifications";

interface Smartphone3DShowcaseProps {
  initialScreen?: AppScreenKey;
  onScreenChange?: (screen: AppScreenKey) => void;
}

export function Smartphone3DShowcase({
  initialScreen = "home",
  onScreenChange,
}: Smartphone3DShowcaseProps) {
  const [currentScreen, setCurrentScreen] = useState<AppScreenKey>(initialScreen);
  const [rotation, setRotation] = useState({ x: 6, y: -8 });
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync internal state with external callback
  const handleSelectScreen = (screen: AppScreenKey) => {
    setCurrentScreen(screen);
    if (onScreenChange) onScreenChange(screen);
  };

  // Pointer movement tracking for natural 3D perspective tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Constrained subtle rotation (+/- 14 degrees)
    const rotateY = ((x - centerX) / centerX) * 14;
    const rotateX = -((y - centerY) / centerY) * 12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return to default pleasant 3D angle
    setRotation({ x: 5, y: -7 });
  };

  const resetView = () => {
    setRotation({ x: 5, y: -7 });
  };

  const screens = [
    {
      id: "home" as const,
      name: "App Home",
      tag: "Welcome & Shortcuts",
      icon: BedDouble,
      summary: "Personalized guest dashboard, keyless room access, weather, and instant facility shortcuts.",
    },
    {
      id: "copilot" as const,
      name: "AI Booking Co-Pilot",
      tag: "Conversational Booking",
      icon: Sparkles,
      summary: "Natural-language booking assistant for multi-room suites and wedding delegations.",
    },
    {
      id: "concierge" as const,
      name: "AI Concierge",
      tag: "24/7 Multilingual Support",
      icon: Compass,
      summary: "Instant local guidance in Hausa, English, and French with live duty manager handoff.",
    },
    {
      id: "messaging" as const,
      name: "Guest Messaging",
      tag: "Staff Direct Line",
      icon: MessageSquare,
      summary: "Persistent real-time chat with the front desk, butler service, and concierge staff.",
    },
    {
      id: "checkin" as const,
      name: "Digital Check-in",
      tag: "Pre-Arrival OCR",
      icon: CreditCard,
      summary: "Contactless passport and national ID capture with NDPR-compliant privacy protection.",
    },
    {
      id: "reservations" as const,
      name: "My Reservations",
      tag: "Stay & Folio Details",
      icon: Calendar,
      summary: "Upcoming stays, room allocations, flight transit directions, and consolidated folios.",
    },
    {
      id: "services" as const,
      name: "Guest Services",
      tag: "Dining & Housekeeping",
      icon: Utensils,
      summary: "On-demand in-room dining, fresh linen dispatch, and airport transit logistics.",
    },
    {
      id: "notifications" as const,
      name: "Notifications",
      tag: "Live Stay Alerts",
      icon: Bell,
      summary: "Real-time updates on room readiness, flight arrival drivers, and banquet events.",
    },
  ];

  const currentIndex = screens.findIndex((s) => s.id === currentScreen);
  const currentMeta = screens[currentIndex] || screens[0];

  const nextScreen = () => {
    const nextIdx = (currentIndex + 1) % screens.length;
    handleSelectScreen(screens[nextIdx].id);
  };

  const prevScreen = () => {
    const prevIdx = (currentIndex - 1 + screens.length) % screens.length;
    handleSelectScreen(screens[prevIdx].id);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 select-none">
      {/* 1. LEFT / EXTERNAL CONTROL CONSOLE */}
      <div className="w-full lg:w-5/12 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-shadow-darkest text-amber-glow border-hairline font-semibold">
              Screen {String(currentIndex + 1).padStart(2, "0")} / 08
            </span>
            <span className="text-xs uppercase tracking-widest text-champagne-200/70 font-mono">
              {currentMeta.tag}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
            {currentMeta.name}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-warm/75 font-light leading-relaxed">
            {currentMeta.summary}
          </p>
        </div>

        {/* 8-Screen Interactive Switcher Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          {screens.map((s, idx) => {
            const Icon = s.icon;
            const isActive = currentScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelectScreen(s.id)}
                className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all text-xs ${
                  isActive
                    ? "bg-shadow-main border border-amber-glow text-amber-glow shadow-glow font-medium"
                    : "bg-shadow-darkest/70 border-hairline text-ivory-warm/70 hover:border-amber-glow/40 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-amber-glow" : "text-champagne-200/60"}`} />
                <span className="truncate">{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Device Interaction Tools */}
        <div className="pt-4 border-t border-champagne-200/10 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={prevScreen}
              className="px-3.5 py-2 rounded-xl bg-shadow-darkest border-hairline text-ivory-warm/75 hover:text-white flex items-center gap-1.5 transition-colors"
              title="Previous Screen"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              onClick={nextScreen}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold flex items-center gap-1.5 shadow-glow hover:opacity-95 transition-opacity"
              title="Next Screen"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={resetView}
            className="px-3 py-2 rounded-xl bg-shadow-darkest border-hairline text-ivory-warm/60 hover:text-amber-glow transition-colors flex items-center gap-1.5 font-mono text-[11px]"
            title="Reset 3D device angle"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Angle</span>
          </button>
        </div>

        {/* Ambient Commercial Value Note */}
        <div className="p-4 rounded-2xl bg-amber-glow/5 border border-amber-glow/20 flex items-start gap-3 text-xs text-champagne-200">
          <Sparkles className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
          <p className="font-light">
            <strong className="font-semibold text-ivory-warm">Continuous Resident Hospitality:</strong> The mobile app stays installed on the guest&apos;s phone, turning one-time visitors into repeat direct bookers with zero third-party platform cuts.
          </p>
        </div>
      </div>

      {/* 2. RIGHT / 3D SMARTPHONE CHASSIS STAGE */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="w-full lg:w-7/12 flex flex-col items-center justify-center py-6 relative"
        style={{ perspective: 1200 }}
      >
        {/* Ambient Backlight Halo behind phone */}
        <div className="absolute w-72 h-96 rounded-full bg-radial from-amber-glow/25 via-amber-glow/5 to-transparent blur-3xl pointer-events-none" />

        {/* 3D Physical Smartphone Container */}
        <div
          className="relative transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Metallic Phone Outer Chassis */}
          <div
            className="w-[315px] sm:w-[335px] h-[670px] sm:h-[690px] rounded-[48px] p-[10px] relative shadow-[0_25px_60px_-15px_rgba(13,8,4,0.9),0_0_40px_rgba(245,184,65,0.15)] transition-all"
            style={{
              background: "linear-gradient(135deg, #5c4328 0%, #291a0e 40%, #150d07 100%)",
              border: "1.5px solid rgba(239, 224, 185, 0.35)",
            }}
          >
            {/* Outer Rim Specular Highlight */}
            <div
              className="absolute inset-0 rounded-[48px] pointer-events-none"
              style={{
                boxShadow: "inset 0 1px 2px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.8)",
              }}
            />

            {/* Side Hardware Buttons */}
            <div className="absolute -left-[13px] top-28 w-[3px] h-10 bg-[#4a3520] rounded-l border border-champagne-200/20" />
            <div className="absolute -left-[13px] top-42 w-[3px] h-12 bg-[#4a3520] rounded-l border border-champagne-200/20" />
            <div className="absolute -right-[13px] top-32 w-[3px] h-16 bg-[#4a3520] rounded-r border border-champagne-200/20" />

            {/* Inner Glass Display Bezel */}
            <div className="w-full h-full bg-[#0D0804] rounded-[40px] overflow-hidden relative flex flex-col justify-between border border-black/80">
              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center">
                <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 border border-white/10 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#151515] border border-champagne-200/20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-900/60" />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-glow/40 animate-pulse" />
                </div>
              </div>

              {/* Status Bar */}
              <div className="w-full pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-mono text-champagne-200/80 z-30 select-none">
                <span>09:41</span>
                <div className="flex items-center gap-1.5 text-champagne-200/80">
                  <Wifi className="w-3 h-3" />
                  <span className="text-[10px]">5G</span>
                  <Battery className="w-3.5 h-3.5 text-amber-glow" />
                </div>
              </div>

              {/* SCREEN CONTENT AREA (High-Fidelity Mobile App Views) */}
              <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 relative z-20 scrollbar-none text-left">
                {/* 1. APP HOME SCREEN */}
                {currentScreen === "home" && (
                  <div className="space-y-3.5 animate-fadeIn">
                    {/* Guest Greeting Header */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-amber-glow font-mono uppercase tracking-wider block">
                          Barka da zuwa &bull; Welcome
                        </span>
                        <h4 className="text-base font-serif text-ivory-warm">
                          Alhaji Ibrahim Danjuma
                        </h4>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-shadow-main border border-amber-glow/40 flex items-center justify-center text-champagne-200">
                        <User className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Digital Room Key Hero Card */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#4A3520] to-[#22160B] border border-champagne-200/25 relative overflow-hidden shadow-subtle">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] font-mono text-amber-glow uppercase tracking-widest">
                          Active Resident Folio
                        </span>
                        <Badge variant="amber">Confirmed</Badge>
                      </div>
                      <h5 className="font-serif text-lg text-ivory-warm">
                        Governor Suite 401
                      </h5>
                      <p className="text-[11px] text-ivory-warm/70 font-light mt-0.5">
                        Nov 24 – Nov 28 &bull; 4 Nights
                      </p>

                      <div className="mt-4 pt-3 border-t border-champagne-200/15 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-amber-glow font-mono">
                          <Key className="w-3.5 h-3.5 animate-pulse" />
                          <span>Tap Key at Door</span>
                        </div>
                        <span className="text-[10px] text-champagne-200/60 font-mono">NFC Ready</span>
                      </div>
                    </div>

                    {/* Quick Shortcuts Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handleSelectScreen("services")}
                        className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline flex flex-col items-center justify-center text-center hover:border-amber-glow/40 transition-colors"
                      >
                        <Utensils className="w-4 h-4 text-amber-glow mb-1" />
                        <span className="text-[10px] text-ivory-warm">Dining</span>
                      </button>
                      <button
                        onClick={() => handleSelectScreen("concierge")}
                        className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline flex flex-col items-center justify-center text-center hover:border-amber-glow/40 transition-colors"
                      >
                        <Compass className="w-4 h-4 text-amber-glow mb-1" />
                        <span className="text-[10px] text-ivory-warm">Concierge</span>
                      </button>
                      <button
                        onClick={() => handleSelectScreen("messaging")}
                        className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline flex flex-col items-center justify-center text-center hover:border-amber-glow/40 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-amber-glow mb-1" />
                        <span className="text-[10px] text-ivory-warm">Front Desk</span>
                      </button>
                    </div>

                    {/* Evening Experience Card */}
                    <div className="p-3.5 rounded-xl bg-shadow-main/60 border-hairline flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase font-mono text-amber-glow block">
                          Today&apos;s Feature
                        </span>
                        <p className="text-xs font-serif text-ivory-warm">Grand Savannah Banquet Gala</p>
                        <p className="text-[10px] text-ivory-warm/60 font-light">Seating starts at 19:00</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-champagne-200/50" />
                    </div>

                    {/* Zaria Weather & Transit */}
                    <div className="p-3 rounded-xl bg-shadow-darkest border-hairline flex items-center justify-between text-[11px] text-ivory-warm/60">
                      <span>Zaria, Kaduna &bull; 28&deg;C Clear</span>
                      <span className="text-amber-glow font-mono">Airport Shuttle: On Schedule</span>
                    </div>
                  </div>
                )}

                {/* 2. AI BOOKING CO-PILOT SCREEN */}
                {currentScreen === "copilot" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-champagne-200/10 pb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-glow" />
                        <span className="font-serif text-sm text-ivory-warm">Booking Co-Pilot</span>
                      </div>
                      <Badge variant="amber">AI Assistant</Badge>
                    </div>

                    {/* Chat Bubbles */}
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-2xl rounded-tl-none bg-shadow-main/90 border-hairline text-ivory-warm/85 font-light">
                        Hello! I can arrange individual rooms or multi-room family and wedding delegations. How may I assist your stay in Zaria?
                      </div>

                      <div className="p-2.5 rounded-2xl rounded-tr-none bg-amber-glow/15 border border-amber-glow/30 text-champagne-200 text-right font-light ml-4">
                        We need 3 Deluxe rooms for our wedding family arriving this Friday for 2 nights.
                      </div>

                      <div className="p-2.5 rounded-2xl rounded-tl-none bg-shadow-main/90 border-hairline text-ivory-warm/85 space-y-2">
                        <p className="text-[11px] text-emerald-400 font-mono">
                          &bull; 3 Deluxe Rooms Verified Available
                        </p>
                        <div className="p-2 rounded-xl bg-shadow-darkest border-hairline text-[11px] space-y-1">
                          <div className="flex justify-between text-ivory-warm font-medium">
                            <span>3x Deluxe King Wing</span>
                            <span>&#8358; 510,000</span>
                          </div>
                          <div className="flex justify-between text-ivory-warm/60 font-light">
                            <span>Fri Nov 20 &ndash; Sun Nov 22</span>
                            <span>2 Nights</span>
                          </div>
                        </div>
                        <button className="w-full py-2 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-[11px] uppercase tracking-wider">
                          Reserve with 20% Deposit
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. AI CONCIERGE SCREEN */}
                {currentScreen === "concierge" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-champagne-200/10 pb-2">
                      <div className="flex items-center gap-2">
                        <Compass className="w-4 h-4 text-amber-glow" />
                        <span className="font-serif text-sm text-ivory-warm">Joclarif Concierge</span>
                      </div>
                      <span className="text-[9px] font-mono text-amber-glow">Hausa / EN / FR</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 rounded-2xl rounded-tl-none bg-shadow-main/90 border-hairline text-ivory-warm/80 font-light">
                        Ina kwana! I am your 24/7 personal resident concierge. Ask me for dining suggestions, Zaria transit, or extra suite amenities.
                      </div>

                      <div className="p-2.5 rounded-2xl rounded-tr-none bg-amber-glow/15 border border-amber-glow/30 text-champagne-200 text-right font-light ml-4">
                        What time does dinner close at the Grand Savannah Lounge tonight?
                      </div>

                      <div className="p-2.5 rounded-2xl rounded-tl-none bg-shadow-main/90 border-hairline text-ivory-warm/80 space-y-2 font-light">
                        <p>
                          Dinner service is available until <strong>22:30</strong> tonight. The chef&apos;s special is roasted peppered lamb with saffron rice.
                        </p>
                        <div className="pt-2 border-t border-champagne-200/10 flex items-center justify-between text-[10px]">
                          <span className="text-amber-glow font-mono">Need special seating?</span>
                          <button className="px-2.5 py-1 rounded-lg bg-shadow-darkest border-hairline text-champagne-200 hover:text-white">
                            Escalate to Duty Manager
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. GUEST MESSAGING SCREEN */}
                {currentScreen === "messaging" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-champagne-200/10 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-glow/20 flex items-center justify-center text-amber-glow text-[10px] font-mono">
                          FD
                        </div>
                        <div>
                          <span className="font-serif text-xs text-ivory-warm block">Front Desk &bull; Fatima</span>
                          <span className="text-[9px] text-emerald-400 font-mono">Online</span>
                        </div>
                      </div>
                      <Phone className="w-3.5 h-3.5 text-champagne-200/60" />
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-2xl rounded-tl-none bg-shadow-main/90 border-hairline text-ivory-warm/85 font-light">
                        Good afternoon Alhaji Danjuma. Your airport driver has departed Kaduna Airport and will arrive at the hotel gates at 16:15.
                      </div>
                      <span className="text-[9px] text-ivory-warm/40 font-mono block pl-2">15:42 &bull; Delivered</span>

                      <div className="p-2.5 rounded-2xl rounded-tr-none bg-amber-glow/15 border border-amber-glow/30 text-champagne-200 text-right font-light ml-4">
                        Thank you Fatima. Please have 2 fresh towels and sparkling water placed in Suite 401.
                      </div>
                      <span className="text-[9px] text-amber-glow/60 font-mono block text-right pr-2">15:45 &bull; Read</span>

                      <div className="p-2.5 rounded-2xl rounded-tl-none bg-shadow-main/90 border-hairline text-ivory-warm/85 font-light">
                        Housekeeping has been dispatched. Your suite is fully refreshed.
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-1.5">
                      <input
                        type="text"
                        placeholder="Reply to front desk..."
                        className="flex-1 bg-shadow-main border-hairline rounded-xl px-3 py-1.5 text-[11px] text-ivory-warm focus:outline-none"
                        readOnly
                        value="Thank you very much."
                      />
                      <button className="p-2 rounded-xl bg-amber-glow text-shadow-darkest">
                        <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 5. DIGITAL CHECK-IN SCREEN */}
                {currentScreen === "checkin" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-champagne-200/10 pb-2">
                      <span className="font-serif text-sm text-ivory-warm">Express Arrival Check-in</span>
                      <Badge variant="amber">Stage 2 of 3</Badge>
                    </div>

                    <div className="p-3 rounded-2xl bg-shadow-main/90 border-hairline space-y-2.5">
                      <span className="text-[10px] font-mono text-amber-glow uppercase tracking-wider block">
                        Verified Identity
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-10 rounded-lg bg-shadow-darkest border-hairline flex items-center justify-center text-champagne-200">
                          <CreditCard className="w-5 h-5 text-amber-glow" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-ivory-warm">NIN / National Passport</p>
                          <p className="text-[10px] text-emerald-400 font-mono">OCR Match: 98.4% Confidence</p>
                        </div>
                      </div>

                      <div className="space-y-1 text-[11px] text-ivory-warm/70 pt-1 border-t border-champagne-200/10 font-light">
                        <div className="flex justify-between">
                          <span>Guest Name:</span>
                          <span className="text-champagne-200 font-mono">I. DANJUMA</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Doc No:</span>
                          <span className="text-champagne-200 font-mono">A0948****</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-shadow-darkest border-hairline text-[10px] text-ivory-warm/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-glow font-mono">
                        <Shield className="w-3 h-3" />
                        <span>NDPR Compliance Notice</span>
                      </div>
                      <p className="font-light">
                        Document scans are automatically purged after 30 days. No permanent biometric retention.
                      </p>
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs uppercase tracking-wider shadow-glow">
                      Confirm &amp; Generate Key
                    </button>
                  </div>
                )}

                {/* 6. MY RESERVATIONS SCREEN */}
                {currentScreen === "reservations" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-champagne-200/10 pb-2">
                      <span className="font-serif text-sm text-ivory-warm">Your Itinerary</span>
                      <span className="text-[10px] font-mono text-amber-glow">Ref: JOC-8841</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-shadow-main/90 border-hairline space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[9px] font-mono text-amber-glow uppercase block">
                            Upcoming Wedding Delegation
                          </span>
                          <h5 className="font-serif text-sm text-ivory-warm">Governor Suite + 4 Deluxe</h5>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-mono">
                          Confirmed
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px] text-ivory-warm/70 font-mono pt-2 border-t border-champagne-200/10">
                        <div>
                          <span className="text-ivory-warm/40 block">CHECK-IN</span>
                          <span className="text-champagne-200">Fri, 24 Nov 14:00</span>
                        </div>
                        <div>
                          <span className="text-ivory-warm/40 block">CHECK-OUT</span>
                          <span className="text-champagne-200">Tue, 28 Nov 11:00</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-champagne-200/10 text-xs">
                        <span className="text-ivory-warm/60">Folio Balance:</span>
                        <span className="font-mono text-amber-glow font-semibold">&#8358; 285,000</span>
                      </div>
                    </div>

                    <button className="w-full py-2 rounded-xl bg-shadow-darkest border-hairline text-champagne-200 hover:text-white text-xs flex items-center justify-center gap-1.5 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-amber-glow" />
                      <span>Directions from Kaduna Airport</span>
                    </button>
                  </div>
                )}

                {/* 7. GUEST SERVICES SCREEN */}
                {currentScreen === "services" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-champagne-200/10 pb-2">
                      <span className="font-serif text-sm text-ivory-warm">In-Room Guest Services</span>
                      <span className="text-[10px] font-mono text-amber-glow">Room 401</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-shadow-main/90 border-hairline flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Utensils className="w-4 h-4 text-amber-glow" />
                          <div>
                            <p className="font-medium text-ivory-warm">In-Room Dining Menu</p>
                            <p className="text-[10px] text-ivory-warm/60">Peppered Suya, Jollof &amp; Drinks</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-amber-glow font-mono">Order &rarr;</span>
                      </div>

                      <div className="p-3 rounded-xl bg-shadow-main/90 border-hairline flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <BedDouble className="w-4 h-4 text-amber-glow" />
                          <div>
                            <p className="font-medium text-ivory-warm">Housekeeping Dispatch</p>
                            <p className="text-[10px] text-ivory-warm/60">Extra Pillows, Towels, Turndown</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-amber-glow font-mono">Request &rarr;</span>
                      </div>

                      <div className="p-3 rounded-xl bg-shadow-main/90 border-hairline flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-amber-glow" />
                          <div>
                            <p className="font-medium text-ivory-warm">Late Checkout Request</p>
                            <p className="text-[10px] text-ivory-warm/60">Subject to next arrival schedule</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-amber-glow font-mono">Ask &rarr;</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. NOTIFICATIONS SCREEN */}
                {currentScreen === "notifications" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-champagne-200/10 pb-2">
                      <span className="font-serif text-sm text-ivory-warm">Notification Centre</span>
                      <span className="text-[9px] font-mono text-amber-glow bg-amber-glow/10 px-2 py-0.5 rounded border border-amber-glow/30">
                        3 New
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-glow font-semibold">
                            Suite Ready Alert
                          </span>
                          <span className="text-[9px] text-ivory-warm/40 font-mono">10m ago</span>
                        </div>
                        <p className="text-ivory-warm/80 font-light text-[11px]">
                          Governor Suite 401 has been inspected and cleared by executive housekeeping.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-champagne-200 font-semibold">
                            Banquet Event Notice
                          </span>
                          <span className="text-[9px] text-ivory-warm/40 font-mono">1h ago</span>
                        </div>
                        <p className="text-ivory-warm/80 font-light text-[11px]">
                          Wedding dinner setup begins at 18:00 in the Grand Savannah Banquet Hall.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-champagne-200 font-semibold">
                            Kaduna Transit Reminder
                          </span>
                          <span className="text-[9px] text-ivory-warm/40 font-mono">3h ago</span>
                        </div>
                        <p className="text-ivory-warm/80 font-light text-[11px]">
                          Your scheduled executive driver is confirmed for tomorrow 08:30 departure.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom App Navigation Bar */}
              <div className="w-full bg-[#120B05] border-t border-champagne-200/15 py-2.5 px-4 flex items-center justify-around z-30">
                <button
                  onClick={() => handleSelectScreen("home")}
                  className={`flex flex-col items-center gap-0.5 transition-colors ${
                    currentScreen === "home" ? "text-amber-glow" : "text-champagne-200/50 hover:text-champagne-200"
                  }`}
                >
                  <BedDouble className="w-4 h-4" />
                  <span className="text-[8px] font-mono">Home</span>
                </button>
                <button
                  onClick={() => handleSelectScreen("reservations")}
                  className={`flex flex-col items-center gap-0.5 transition-colors ${
                    currentScreen === "reservations" ? "text-amber-glow" : "text-champagne-200/50 hover:text-champagne-200"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-[8px] font-mono">Stays</span>
                </button>
                <button
                  onClick={() => handleSelectScreen("concierge")}
                  className={`flex flex-col items-center gap-0.5 transition-colors ${
                    currentScreen === "concierge" ? "text-amber-glow" : "text-champagne-200/50 hover:text-champagne-200"
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span className="text-[8px] font-mono">Concierge</span>
                </button>
                <button
                  onClick={() => handleSelectScreen("messaging")}
                  className={`flex flex-col items-center gap-0.5 transition-colors ${
                    currentScreen === "messaging" ? "text-amber-glow" : "text-champagne-200/50 hover:text-champagne-200"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-[8px] font-mono">Chat</span>
                </button>
                <button
                  onClick={() => handleSelectScreen("notifications")}
                  className={`flex flex-col items-center gap-0.5 transition-colors ${
                    currentScreen === "notifications" ? "text-amber-glow" : "text-champagne-200/50 hover:text-champagne-200"
                  }`}
                >
                  <Bell className="w-4 h-4" />
                  <span className="text-[8px] font-mono">Alerts</span>
                </button>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-full pb-1 pt-0.5 flex justify-center bg-[#120B05]">
                <div className="w-28 h-1 bg-champagne-200/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* 3D Interactive Helper Text */}
        <p className="text-[10px] font-mono text-champagne-200/50 mt-4 tracking-wider uppercase">
          &bull; Move cursor / drag to inspect 3D device perspective &bull;
        </p>
      </div>
    </div>
  );
}
