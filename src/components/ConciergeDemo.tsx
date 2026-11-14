"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Globe,
  Languages,
  Sparkles,
  PhoneForwarded,
  Wifi,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

type ScenarioType = "multilingual" | "escalation" | "routine";

interface DemoMessage {
  sender: "guest" | "ai" | "staff";
  text?: string;
  original?: string;
  translation?: string | null;
  language?: string;
  englishVersion?: string;
  badge?: string;
  time: string;
}

interface ScenarioData {
  id: ScenarioType;
  title: string;
  subtitle: string;
  guestProfile: string;
  description: string;
  guestMessages: DemoMessage[];
  escalationStatus: string;
}

export function ConciergeDemo() {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>("multilingual");
  const [viewPerspective, setViewPerspective] = useState<"guest" | "staff">("staff");

  const scenarios: Record<ScenarioType, ScenarioData> = {
    multilingual: {
      id: "multilingual",
      title: "French Guest Translation",
      subtitle: "International Visiting Scholar Scenario",
      guestProfile: "Prof. Jean-Luc Dubois &bull; Room 402 &bull; Visiting ABU Zaria",
      description:
        "A French-speaking visiting researcher sends a message in French asking about breakfast hours and quiet study facilities. The AI instantly translates it into English on the hotel staff terminal, and translates staff replies back into French.",
      guestMessages: [
        {
          sender: "guest",
          original: "Bonjour, à quelle heure le petit-déjeuner est-il servi demain matin ? Y a-t-il un salon calme pour travailler avec une bonne connexion ?",
          translation: "Hello, what time is breakfast served tomorrow morning? Is there a quiet lounge to work in with good connection?",
          language: "French (Français)",
          time: "21:14",
        },
        {
          sender: "ai",
          text: "Bonjour Professeur Dubois. Le petit-déjeuner buffet est servi au Restaurant Oasis de 06h30 à 10h00. Le Salon Exécutif au 2ème étage est climatisé, très calme et dispose d'une connexion Wi-Fi haut débit dédiée.",
          englishVersion: "Hello Professor Dubois. Breakfast buffet is served at Oasis Restaurant from 06:30 to 10:00. The Executive Lounge on the 2nd floor is air-conditioned, very quiet, and has dedicated high-speed Wi-Fi.",
          badge: "AI Multilingual Concierge",
          time: "21:14",
        },
      ],
      escalationStatus: "Resolved Automatically (Language Auto-Translate)",
    },
    escalation: {
      id: "escalation",
      title: "Airport Transit Escalation",
      subtitle: "High-Touch VIP Handoff Scenario",
      guestProfile: "Chief & Mrs. O. Adewale &bull; Governor Suite 401 &bull; Wedding Host",
      description:
        "The guest requires coordinated private transit from Nnamdi Azikiwe International Airport Abuja directly to Joclarif Zaria for high-profile elderly relatives. Because this involves customized vehicle routing and security dispatch, the AI automatically transfers the conversation to the Human Duty Manager.",
      guestMessages: [
        {
          sender: "guest",
          original: "Good evening, my elderly parents are landing at Abuja Airport at 16:30 on Friday. We need an executive SUV with a trusted driver and police escort escorting them to Joclarif Zaria. Can this be arranged?",
          translation: null,
          language: "English",
          time: "19:40",
        },
        {
          sender: "ai",
          text: "Good evening Chief Adewale. For private inter-state VIP transportation involving security escort from Abuja, I am connecting you directly with Mallam Yakubu, our Senior Front Office & Transport Manager.",
          badge: "AI Triaged & Handed Off",
          time: "19:41",
        },
        {
          sender: "staff",
          text: "Good evening Chief Adewale, this is Yakubu (Front Office Manager). I have received your request. We have our vetted Toyota Prado and driver stationed for airport pickups, and we routinely coordinate escort logistics for executive guests. I will call you directly at 0803-459-2810 within 10 minutes with the vehicle details and tariff.",
          badge: "Human Duty Manager (Mallam Yakubu)",
          time: "19:43",
        },
      ],
      escalationStatus: "Escalated to Front Office Manager (Active)",
    },
    routine: {
      id: "routine",
      title: "Routine In-Stay Services",
      subtitle: "Instant FAQ Resolution",
      guestProfile: "Engr. Tunde Coker &bull; Room 208",
      description:
        "Instant, deterministic answers for Wi-Fi codes, iron/ironing board delivery, laundry pickup schedules, and power generation inquiries without keeping front desk staff on long telephone calls.",
      guestMessages: [
        {
          sender: "guest",
          original: "Hello, what is the Wi-Fi network and password for Room 208? Also, can I get an extra pair of slippers?",
          translation: null,
          language: "English",
          time: "07:15",
        },
        {
          sender: "ai",
          text: "Good morning Engr. Coker. The high-speed network is 'Joclarif_Guest_HighSpeed'. Your login credential is your Room Number (208) and your Surname (Coker). I have also dispatched a housekeeping ticket to Room 208 for 2 pairs of complimentary slippers.",
          badge: "AI Instant Resolution",
          time: "07:15",
        },
      ],
      escalationStatus: "Resolved (Housekeeping Ticket Dispatched)",
    },
  };

  const current = scenarios[activeScenario];

  return (
    <section id="concierge" className="py-28 bg-[#170F07] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam-left absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Interactive Demonstration"
          subtitle="AI Concierge &amp; Human Handoff"
          title="24/7 Intelligent Service with Seamless Human Escalation"
          description="Technology handles routine inquiries and instant cross-border language translation, while high-value logistics and sensitive hospitality requests are gracefully handed over to Joclarif's duty managers."
        />

        {/* Perspective and Scenario Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveScenario("multilingual")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeScenario === "multilingual"
                  ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                  : "bg-shadow-darkest text-ivory-warm/70 border-hairline hover:border-amber-glow/30"
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>1. French Guest Auto-Translate</span>
            </button>
            <button
              onClick={() => setActiveScenario("escalation")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeScenario === "escalation"
                  ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                  : "bg-shadow-darkest text-ivory-warm/70 border-hairline hover:border-amber-glow/30"
              }`}
            >
              <PhoneForwarded className="w-3.5 h-3.5" />
              <span>2. Airport Transport Escalation</span>
            </button>
            <button
              onClick={() => setActiveScenario("routine")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeScenario === "routine"
                  ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                  : "bg-shadow-darkest text-ivory-warm/70 border-hairline hover:border-amber-glow/30"
              }`}
            >
              <Wifi className="w-3.5 h-3.5" />
              <span>3. Wi-Fi &amp; Routine Housekeeping</span>
            </button>
          </div>

          {/* Perspective View Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-shadow-darkest border-hairline text-xs">
            <button
              onClick={() => setViewPerspective("staff")}
              className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                viewPerspective === "staff"
                  ? "bg-shadow-main text-amber-glow font-semibold border-hairline"
                  : "text-ivory-warm/60 hover:text-white"
              }`}
            >
              Front Desk Staff Terminal
            </button>
            <button
              onClick={() => setViewPerspective("guest")}
              className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                viewPerspective === "guest"
                  ? "bg-shadow-main text-amber-glow font-semibold border-hairline"
                  : "text-ivory-warm/60 hover:text-white"
              }`}
            >
              Guest Mobile View
            </button>
          </div>
        </div>

        {/* Main Conversation Simulation Canvas */}
        <div className="rounded-3xl border-hairline bg-shadow-darkest shadow-luxury overflow-hidden">
          {/* Header Bar */}
          <div className="p-5 sm:p-6 bg-shadow-main/90 border-b border-champagne-200/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="amber">{current.subtitle}</Badge>
                <span className="text-[11px] text-ivory-warm/50 font-mono">
                  {viewPerspective === "staff" ? "Staff Oversight Active" : "Guest Mobile View"}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif text-ivory-warm font-normal">
                {current.title}
              </h4>
              <p className="text-xs text-champagne-200/80 font-light mt-0.5">
                Active Guest: {current.guestProfile}
              </p>
            </div>

            <div className="text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
              <span className="text-[10px] uppercase tracking-wider text-ivory-warm/50 font-mono">
                Resolution State
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium inline-flex items-center gap-1.5 ${
                  current.id === "escalation"
                    ? "bg-amber-glow/10 text-amber-glow border border-amber-glow/30"
                    : "bg-emerald-950/80 text-emerald-300 border border-emerald-600/40"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {current.escalationStatus}
              </span>
            </div>
          </div>

          {/* Scenario Context Banner */}
          <div className="p-4 bg-shadow-main/40 border-b border-champagne-200/10 text-xs text-ivory-warm/70 leading-relaxed font-light">
            <strong className="text-champagne-200 font-medium">Operational Context:</strong> {current.description}
          </div>

          {/* Conversation Stream */}
          <div className="p-6 sm:p-8 space-y-6 bg-shadow-darkest/95">
            {current.guestMessages.map((msg, index) => {
              const isGuest = msg.sender === "guest";
              const isAi = msg.sender === "ai";
              const isStaff = msg.sender === "staff";

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isGuest ? "items-start" : "items-end"}`}
                >
                  <div className="flex items-center gap-2 mb-1.5 px-1">
                    <span className="text-[11px] font-semibold text-ivory-warm/75">
                      {isGuest
                        ? "Guest"
                        : isAi
                        ? "Joclarif AI Concierge"
                        : "Duty Manager (Human Staff)"}
                    </span>
                    <span className="text-[10px] text-ivory-warm/40 font-mono">{msg.time}</span>
                    {msg.badge && (
                      <span
                        className={`text-[9px] px-2 py-0.2 rounded font-semibold uppercase ${
                          isAi
                            ? "bg-amber-glow/15 text-amber-glow border border-amber-glow/30"
                            : "bg-champagne-200/15 text-champagne-200 border border-champagne-200/30"
                        }`}
                      >
                        {msg.badge}
                      </span>
                    )}
                  </div>

                  <div
                    className={`max-w-2xl rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                      isGuest
                        ? "bg-shadow-main border-hairline text-ivory-warm"
                        : isAi
                        ? "bg-shadow-main/90 border-hairline text-ivory-warm"
                        : "bg-shadow-main/95 border border-amber-glow/40 text-ivory-warm"
                    }`}
                  >
                    {/* Multilingual Side-by-Side Translation Box */}
                    {isGuest && msg.language && msg.language.includes("French") && viewPerspective === "staff" ? (
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-shadow-darkest border-hairline">
                          <span className="text-[10px] font-semibold text-amber-glow uppercase tracking-wider block mb-1 font-mono">
                            Incoming Original French ({msg.language})
                          </span>
                          <p className="italic font-serif text-ivory-warm/80">&ldquo;{msg.original}&rdquo;</p>
                        </div>
                        <div className="p-3 rounded-lg bg-amber-glow/10 border border-amber-glow/30">
                          <span className="text-[10px] font-semibold text-champagne-200 uppercase tracking-wider block mb-1 flex items-center gap-1 font-mono">
                            <Sparkles className="w-3 h-3 text-amber-glow" />
                            Live English Translation (For Hotel Staff)
                          </span>
                          <p className="text-ivory-warm font-medium">{msg.translation}</p>
                        </div>
                      </div>
                    ) : (
                      <p>{msg.original || msg.text}</p>
                    )}

                    {/* Staff View translation of AI's French response */}
                    {isAi && msg.englishVersion && viewPerspective === "staff" && (
                      <div className="mt-3 pt-2.5 border-t border-champagne-200/10 text-xs text-champagne-200/80">
                        <span className="text-[10px] uppercase font-semibold text-ivory-warm/40 block mb-0.5 font-mono">
                          Staff Translation Preview:
                        </span>
                        <span>{msg.englishVersion}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Operational Controls */}
          <div className="p-4 bg-shadow-main/80 border-t border-champagne-200/10 flex flex-wrap items-center justify-between text-xs text-ivory-warm/50 gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-glow" />
              <span>Full audit log and conversation transcript archived in guest stay folio</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-champagne-300">
              <span>Channel: WhatsApp / Guest Web Companion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
