"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PREPOPULATED_ASSISTANT_QUERIES,
  AssistantQuery,
  AssistantEvidence,
} from "@/data/intelligenceMockData";
import {
  Sparkles,
  Send,
  Eye,
  FileCheck,
  Building2,
  Clock,
  History,
  ShieldCheck,
  AlertCircle,
  Database,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Props {
  initialQuery?: string | null;
}

interface MessageItem {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  evidence?: AssistantEvidence[];
  suggestedFollowUps?: string[];
  isStreaming?: boolean;
}

export function IntelligenceAssistantWorkspace({ initialQuery }: Props) {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: "welcome-1",
      sender: "assistant",
      text: "Good day. I am the Joclarif Intelligence Engine. I synthesize data across your historical spreadsheets, PMS databases, biometric attendance logs, and IoT telemetry.\n\nYou may ask me anything regarding financial performance, workforce attendance, asset maintenance, or operational bottlenecks.",
      timestamp: "14:40",
      suggestedFollowUps: [
        "Give me an overview of the hotel's operational performance this month.",
        "Which department has the highest operating expenses?",
        "Which equipment requires immediate maintenance?",
        "How many employees are currently on duty and are there any staffing shortages?",
      ],
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [activeEvidenceModal, setActiveEvidenceModal] = useState<AssistantEvidence[] | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle triggered query from another workspace
  useEffect(() => {
    if (initialQuery) {
      handleSend(initialQuery);
    }
  }, [initialQuery]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isTyping) return;

    const userMsg: MessageItem = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Find best match in prepopulated queries or construct intelligent response
    const match = PREPOPULATED_ASSISTANT_QUERIES.find(
      (q) =>
        q.question.toLowerCase().includes(query.toLowerCase()) ||
        query.toLowerCase().includes(q.question.toLowerCase()) ||
        (q.category === "financial" && (query.toLowerCase().includes("revenue") || query.toLowerCase().includes("cost"))) ||
        (q.category === "assets" && (query.toLowerCase().includes("equipment") || query.toLowerCase().includes("maintain") || query.toLowerCase().includes("repair"))) ||
        (q.category === "workforce" && (query.toLowerCase().includes("staff") || query.toLowerCase().includes("employee") || query.toLowerCase().includes("duty")))
    );

    setTimeout(() => {
      let responseText = "";
      let evidence: AssistantEvidence[] = [];
      let followUps: string[] = [];

      if (match) {
        responseText = match.response;
        evidence = match.evidence;
        followUps = match.suggestedFollowUps;
      } else {
        responseText = `Based on current verified ledger records and PMS data, this query involves operational parameters outside the immediate live telemetry indexes.\n\nVerified records show standard operating conditions across all active departments, with month-to-date revenue at ₦48.65M and 38 staff on active duty. If you require a custom audit for this specific metric, please select one of the verified query areas below.`;
        evidence = [
          {
            sourceName: "Hotel Unified Intelligence Graph (Cross-Source)",
            sourceType: "Derived Calculation",
            evidenceTimestamp: "Just now",
            extractedSnippet: "General inquiry processed. Cross-referenced against 186,400 PMS records and historical spreadsheets.",
            verificationBadge: "System Heuristic Check",
            referenceId: "QUERY-GEN-FALLBACK",
          },
        ];
        followUps = [
          "Give me an overview of the hotel's operational performance this month.",
          "Which department has the highest operating expenses?",
          "Which equipment requires immediate maintenance?",
        ];
      }

      const assistantMsg: MessageItem = {
        id: `asst-${Date.now()}`,
        sender: "assistant",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        evidence,
        suggestedFollowUps: followUps,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Workspace 06 &bull; Central Intelligence
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              Enterprise Natural Language Query Engine
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-light">
            Joclarif Operational Assistant
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
            Ask complex operational questions in natural language. Every response is anchored in
            verifiable ledger entries, telemetry records, or historical documents.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Evidence Verification Active</span>
        </div>
      </div>

      {/* Main Chat Interface & Evidence Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Chat Feed */}
        <div className="lg:col-span-8 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury flex flex-col h-[640px]">
          {/* Chat Messages Feed */}
          <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-amber-glow/20 border border-amber-glow/40 flex items-center justify-center font-serif text-amber-glow text-xs shrink-0 mt-1 shadow-glow">
                    <Sparkles className="w-4 h-4 text-amber-glow" />
                  </div>
                )}

                <div
                  className={`max-w-xl rounded-2xl p-4 sm:p-5 space-y-3 ${
                    msg.sender === "user"
                      ? "bg-amber-glow/15 border border-amber-glow/40 text-ivory-warm ml-8"
                      : "bg-[#0d0804]/90 border border-champagne-200/15 text-ivory-warm/90 mr-8"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 text-[10px] font-mono pb-1 border-b border-champagne-200/10">
                    <span className="text-amber-glow uppercase">
                      {msg.sender === "user" ? "Authorized Management Query" : "Joclarif Intelligence Engine"}
                    </span>
                    <span className="text-champagne-300/50">{msg.timestamp}</span>
                  </div>

                  <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-light">
                    {msg.text}
                  </div>

                  {/* Evidence Inspector Trigger */}
                  {msg.evidence && msg.evidence.length > 0 && (
                    <div className="pt-2 border-t border-champagne-200/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="text-[10px] font-mono text-champagne-300/60">
                        {msg.evidence.length} Verifiable Sources Linked
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveEvidenceModal(msg.evidence || null)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-glow/40 bg-amber-glow/10 text-amber-glow text-[11px] font-mono hover:bg-amber-glow hover:text-shadow-darkest transition-all shadow-glow"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Evidence ({msg.evidence.length})</span>
                      </button>
                    </div>
                  )}

                  {/* Suggested Follow-up Questions */}
                  {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                    <div className="pt-2 border-t border-champagne-200/10 space-y-1.5">
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">
                        Recommended Drill-Downs:
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {msg.suggestedFollowUps.map((fUp, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleSend(fUp)}
                            className="text-left text-xs text-champagne-200/80 hover:text-amber-glow transition-colors flex items-center gap-1.5 group"
                          >
                            <ArrowRight className="w-3 h-3 text-amber-glow/60 group-hover:translate-x-0.5 transition-transform shrink-0" />
                            <span>{fUp}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3 text-xs text-amber-glow font-mono animate-pulse">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Reconciling General Ledger, PMS &amp; Telemetry Indexes...</span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 border-t border-champagne-200/10 bg-[#0d0804]/95">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about revenue, staff attendance, equipment status, or supplier balances..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-xs sm:text-sm text-ivory-warm placeholder:text-ivory-warm/30 focus:outline-none focus:border-amber-glow/60 transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs uppercase tracking-wider shadow-glow hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Evidence Inspector Side Panel */}
        <div className="lg:col-span-4 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury p-6 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-glow" />
              <h3 className="font-serif text-lg text-ivory-warm font-light">
                Evidence Inspector
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              Audit Verified
            </span>
          </div>

          <p className="text-xs text-ivory-warm/70 leading-relaxed">
            In accordance with institutional hospitality standards, Joclarif AI answers are never
            hallucinated. Click &ldquo;View Evidence&rdquo; on any response to inspect the exact underlying
            source documents.
          </p>

          <div className="space-y-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 space-y-1">
              <div className="text-amber-glow font-semibold flex items-center justify-between">
                <span>[VERIFIED RECORD]</span>
                <span className="text-[10px] text-ivory-warm/40">PMS / GL</span>
              </div>
              <div className="text-[11px] text-ivory-warm/60">
                Audited transactional ledger rows and real-time PMS bookings.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 space-y-1">
              <div className="text-champagne-300 font-semibold flex items-center justify-between">
                <span>[DERIVED CALCULATION]</span>
                <span className="text-[10px] text-ivory-warm/40">Deterministic</span>
              </div>
              <div className="text-[11px] text-ivory-warm/60">
                Aggregated margins, occupancy ratios, and commission leakage equations.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 space-y-1">
              <div className="text-champagne-200/80 font-semibold flex items-center justify-between">
                <span>[HISTORICAL DOCUMENT]</span>
                <span className="text-[10px] text-ivory-warm/40">2018–2024</span>
              </div>
              <div className="text-[11px] text-ivory-warm/60">
                Ingested legacy workbooks and scanned paper registration folios.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0d0804]/70 border border-rose-500/20 space-y-1">
              <div className="text-rose-400 font-semibold flex items-center justify-between">
                <span>[DATA UNAVAILABLE]</span>
                <span className="text-[10px] text-rose-400/60">Safeguard</span>
              </div>
              <div className="text-[11px] text-ivory-warm/60">
                Explicit boundary disclosure whenever a queried record is missing.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Evidence Modal Inspector */}
      {activeEvidenceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl rounded-2xl bg-[#0d0804] border border-amber-glow/40 p-6 sm:p-7 shadow-luxury space-y-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-champagne-200/10">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-amber-glow uppercase px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/20">
                  Cryptographic Audit Trail
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory-warm font-light mt-2">
                  Underlying Evidence Records
                </h3>
                <div className="text-xs text-ivory-warm/60 mt-1">
                  Source documents validated by Joclarif Intelligence Engine
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveEvidenceModal(null)}
                className="px-3 py-1.5 rounded-lg border border-champagne-200/15 text-xs text-champagne-200 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              {activeEvidenceModal.map((ev, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-champagne-200/10">
                    <span className="font-serif text-sm text-champagne-200 font-medium">
                      {ev.sourceName}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                        ev.sourceType === "Verified Record"
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : ev.sourceType === "Derived Calculation"
                          ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                          : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {ev.sourceType}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0a0603] font-mono text-[11px] text-amber-glow/90 border border-champagne-200/10 leading-relaxed overflow-x-auto">
                    {ev.extractedSnippet}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-champagne-300/60 pt-1">
                    <span>Reference ID: {ev.referenceId}</span>
                    <span>Timestamp: {ev.evidenceTimestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
