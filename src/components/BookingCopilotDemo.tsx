"use client";

import React, { useState } from "react";
import {
  Send,
  Sparkles,
  Edit3,
  Bot,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function BookingCopilotDemo() {
  const defaultPrompt =
    "I need 15 rooms for my family coming from Lagos for a wedding, plus a hall for November 25th.";

  const [inputMessage, setInputMessage] = useState(defaultPrompt);
  const [isProcessing, setIsProcessing] = useState(false);

  // Editable parsed parameters
  const [roomsCount, setRoomsCount] = useState(15);
  const [targetDate, setTargetDate] = useState("2026-11-25");
  const [guestCapacity, setGuestCapacity] = useState("180 Guests");
  const [nights, setNights] = useState(3);
  const [selectedHall, setSelectedHall] = useState("Grand Savannah Banquet Hall");

  const [chatLog, setChatLog] = useState<Array<{ sender: "user" | "copilot"; text: string; time: string }>>([
    {
      sender: "user",
      text: "I need 15 rooms for my family coming from Lagos for a wedding, plus a hall for November 25th.",
      time: "14:02",
    },
    {
      sender: "copilot",
      text: "Welcome to Joclarif. I have parsed your wedding group request: 15 rooms plus a banquet facility for November 25th. To lock down the exact inventory, could you confirm the expected banquet hall attendee count, and whether you prefer contiguous family wings or individual suites?",
      time: "14:02",
    },
  ]);

  const handleSimulate = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    setIsProcessing(true);

    const userEntry = {
      sender: "user" as const,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatLog((prev) => [...prev, userEntry]);
    setInputMessage("");

    setTimeout(() => {
      let reply = "";
      if (text.toLowerCase().includes("capacity") || text.includes("180") || text.includes("200")) {
        reply =
          "Confirmed: Grand Savannah Banquet Hall accommodates up to 220 guests comfortably in banquet round-table style. I have matched this with a 15-room block across the Executive and Deluxe wings. Below is the deterministic rate quotation assembled directly from our availability engine.";
      } else if (text.toLowerCase().includes("budget") || text.toLowerCase().includes("discount")) {
        reply =
          "For delegations reserving 10+ rooms alongside a banquet facility, Joclarif applies preferred group delegation terms. The quotation below reflects combined accommodation and venue packages.";
      } else {
        reply =
          "Thank you. I have cross-referenced your parameters with the central reservation engine. All 15 requested rooms and the Grand Savannah Banquet Hall have tentative availability for your dates.";
      }

      setChatLog((prev) => [
        ...prev,
        {
          sender: "copilot",
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsProcessing(false);
    }, 900);
  };

  const handleReset = () => {
    setInputMessage(defaultPrompt);
    setRoomsCount(15);
    setTargetDate("2026-11-25");
    setGuestCapacity("180 Guests");
    setNights(3);
    setChatLog([
      {
        sender: "user",
        text: defaultPrompt,
        time: "14:02",
      },
      {
        sender: "copilot",
        text: "Welcome to Joclarif. I have parsed your wedding group request: 15 rooms plus a banquet facility for November 25th. To lock down the exact inventory, could you confirm the expected banquet hall attendee count, and whether you prefer contiguous family wings or individual suites?",
        time: "14:02",
      },
    ]);
  };

  return (
    <section id="copilot" className="py-28 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Interactive Prototype"
          subtitle="Conversational Booking Co-Pilot"
          title="Natural Language Inquiries into Deterministic Room Blocks"
          description="A wedding planner should not have to fill 40 separate form fields. The AI Co-Pilot interprets intent, queries real inventory rules, and assembles structured parent-child quotations with zero hallucinations."
        />

        {/* Core Architecture Principle Notice */}
        <div className="mb-12 p-4 rounded-xl bg-shadow-main/90 border-hairline text-xs text-ivory-warm/80 flex items-start sm:items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-glow shrink-0" />
          <p>
            <strong className="text-champagne-200 font-semibold">Strict Engineering Boundary:</strong>{" "}
            The AI model interprets natural language intent and coordinates backend queries.
            <span className="text-amber-glow font-medium"> It never fabricates prices, room inventory, or payment status.</span>{" "}
            All rates and room counts are verified against the deterministic reservation engine.
          </p>
        </div>

        {/* Interactive Co-Pilot Split Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chat Interface */}
          <div className="lg:col-span-6 rounded-2xl border-hairline bg-shadow-main/80 shadow-luxury flex flex-col h-[580px] overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 bg-shadow-darkest border-b border-champagne-200/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-center text-amber-glow">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-ivory-warm">
                    Joclarif Booking Co-Pilot
                  </h4>
                  <p className="text-[10px] text-amber-glow flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-glow animate-pulse" />
                    Simulated Active Session
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="text-[11px] text-ivory-warm/50 hover:text-amber-glow flex items-center gap-1 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Demo</span>
              </button>
            </div>

            {/* Chat Message Scrollable Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              {chatLog.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "copilot" && (
                    <div className="w-6 h-6 rounded bg-amber-glow/20 border border-amber-glow/40 flex items-center justify-center text-amber-glow text-[10px] shrink-0 font-mono">
                      AI
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-xl p-3.5 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-amber-glow text-shadow-darkest font-semibold"
                        : "bg-shadow-darkest border-hairline text-ivory-warm/90"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`block text-[9px] mt-1 text-right font-mono ${
                        msg.sender === "user" ? "text-shadow-darkest/70" : "text-ivory-warm/40"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-6 h-6 rounded bg-shadow-light flex items-center justify-center text-ivory-warm/70 text-[10px] shrink-0">
                      You
                    </div>
                  )}
                </div>
              ))}

              {isProcessing && (
                <div className="flex items-center gap-2 text-ivory-warm/60 text-xs">
                  <div className="w-6 h-6 rounded bg-amber-glow/20 flex items-center justify-center text-amber-glow animate-spin">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="italic font-serif">Parsing intent &amp; checking room inventory rules...</span>
                </div>
              )}
            </div>

            {/* Suggested Quick Prompts */}
            <div className="px-4 py-2 bg-shadow-darkest/70 border-t border-champagne-200/10 flex items-center gap-2 overflow-x-auto text-[11px]">
              <span className="text-ivory-warm/40 text-[10px] uppercase tracking-wider shrink-0 font-mono">
                Quick Prompts:
              </span>
              <button
                onClick={() =>
                  handleSimulate("The wedding hall will have around 180 guests in banquet seating.")
                }
                className="px-2.5 py-1 rounded bg-shadow-main hover:bg-shadow-light text-champagne-200 border-hairline whitespace-nowrap transition-colors"
              >
                &ldquo;180 guests banquet seating&rdquo;
              </button>
              <button
                onClick={() =>
                  handleSimulate("Are there corporate discount terms for 15 rooms over 3 nights?")
                }
                className="px-2.5 py-1 rounded bg-shadow-main hover:bg-shadow-light text-champagne-200 border-hairline whitespace-nowrap transition-colors"
              >
                &ldquo;Group discount policy&rdquo;
              </button>
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 bg-shadow-darkest border-t border-champagne-200/10 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSimulate()}
                placeholder="Type or test a wedding/group booking request..."
                className="flex-1 bg-shadow-main border-hairline rounded-lg px-3.5 py-2 text-xs text-ivory-warm placeholder-ivory-warm/40 focus:outline-none focus:border-amber-glow"
              />
              <button
                onClick={() => handleSimulate()}
                disabled={isProcessing || !inputMessage.trim()}
                className="p-2.5 rounded-lg bg-amber-glow text-shadow-darkest hover:brightness-110 disabled:opacity-40 transition-all font-semibold"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Structured Extraction & Editable Booking Quotation */}
          <div className="lg:col-span-6 space-y-4">
            {/* Structured Parsing Card */}
            <div className="p-5 rounded-2xl bg-shadow-main/80 border-hairline shadow-subtle">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-glow font-mono">
                  Real-Time Entity Extraction Engine
                </span>
                <span className="text-[10px] text-amber-glow bg-shadow-darkest px-2.5 py-0.5 rounded border-hairline font-mono">
                  Confidence: 99.2%
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs mb-3">
                <div className="p-2.5 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] text-ivory-warm/50 block font-mono">Rooms Target</span>
                  <span className="font-semibold text-amber-glow text-sm">
                    {roomsCount} Rooms
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] text-ivory-warm/50 block font-mono">Occasion</span>
                  <span className="font-semibold text-ivory-warm text-sm">Wedding</span>
                </div>
                <div className="p-2.5 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] text-ivory-warm/50 block font-mono">Target Date</span>
                  <span className="font-semibold text-ivory-warm text-sm">25 Nov 2026</span>
                </div>
                <div className="p-2.5 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] text-ivory-warm/50 block font-mono">Facility</span>
                  <span className="font-semibold text-amber-glow text-sm">Banquet Hall</span>
                </div>
              </div>

              <div className="text-[11px] text-ivory-warm/60 flex items-center justify-between border-t border-champagne-200/10 pt-2 font-light">
                <span>Origin: Lagos, Nigeria (Flight arrivals via Abuja / Kaduna)</span>
                <span className="text-amber-glow font-mono text-[10px]">Payload: JSON Valid</span>
              </div>
            </div>

            {/* Editable Reservation Configuration Controls */}
            <div className="p-5 rounded-2xl bg-shadow-darkest border-hairline shadow-subtle">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-amber-glow" />
                  <h4 className="font-serif text-lg font-normal text-ivory-warm">
                    Interactive Quotation Builder
                  </h4>
                </div>
                <span className="text-[10px] text-ivory-warm/50 font-mono">
                  Live Parameters
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <label className="text-[11px] text-ivory-warm/60 block mb-1.5 font-light">
                    Adjust Room Count ({roomsCount} Rooms)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(Number(e.target.value))}
                    className="w-full accent-amber-glow cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-ivory-warm/40 mt-1 font-mono">
                    <span>5 Rooms</span>
                    <span className="text-amber-glow font-bold">{roomsCount}</span>
                    <span>30 Rooms</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-ivory-warm/60 block mb-1.5 font-light">
                    Duration of Stay ({nights} Nights)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="w-full accent-amber-glow cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-ivory-warm/40 mt-1 font-mono">
                    <span>1 Night</span>
                    <span className="text-amber-glow font-bold">{nights} Nights</span>
                    <span>7 Nights</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-ivory-warm/60 block mb-1 font-light">
                    Banquet Facility Selection
                  </label>
                  <select
                    value={selectedHall}
                    onChange={(e) => setSelectedHall(e.target.value)}
                    className="w-full bg-shadow-main border-hairline rounded-lg p-2 text-xs text-ivory-warm focus:outline-none focus:border-amber-glow"
                  >
                    <option>Grand Savannah Banquet Hall (Up to 220)</option>
                    <option>Emirate Conference Suite (Up to 90)</option>
                    <option>Poolside Garden Pavilion (Up to 150)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-ivory-warm/60 block mb-1 font-light">
                    Attendee Capacity Target
                  </label>
                  <select
                    value={guestCapacity}
                    onChange={(e) => setGuestCapacity(e.target.value)}
                    className="w-full bg-shadow-main border-hairline rounded-lg p-2 text-xs text-ivory-warm focus:outline-none focus:border-amber-glow"
                  >
                    <option>120 Guests</option>
                    <option>180 Guests</option>
                    <option>220 Guests (Max Banquet)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Assembled Package Preview */}
              <div className="p-4 rounded-xl bg-shadow-main/90 border-hairline text-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                  <span className="text-ivory-warm/75 font-light">
                    {roomsCount} Rooms &times; {nights} Nights (Estimated Average)
                  </span>
                  <span className="font-mono text-ivory-warm">
                    ₦ {(roomsCount * nights * 72000).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                  <span className="text-ivory-warm/75 font-light">{selectedHall} Hire &times; 1 Day</span>
                  <span className="font-mono text-ivory-warm">₦ 850,000</span>
                </div>
                <div className="flex items-center justify-between pt-1 text-sm font-normal text-amber-glow">
                  <span>Combined Illustrative Master Total:</span>
                  <span className="font-mono text-base font-bold">
                    ₦ {(roomsCount * nights * 72000 + 850000).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-3 text-[10px] text-ivory-warm/50 italic text-center font-serif">
                * Illustrative estimation. The co-pilot issues formal contracts only after hotel management review.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
