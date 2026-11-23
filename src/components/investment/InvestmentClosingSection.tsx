"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Building2,
  Calendar,
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  Lock,
} from "lucide-react";

export function InvestmentClosingSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [executiveName, setExecutiveName] = useState("");
  const [executivePhone, setExecutivePhone] = useState("");
  const [propertyFocus, setPropertyFocus] = useState("Flagship Property Transformation");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSubmitted(true);
  };

  return (
    <>
      <section className="relative w-full py-32 overflow-hidden border-b border-champagne-200/10 bg-gradient-to-b from-[#0D0804] via-[#1a1007] to-[#0D0804]">
        {/* Ambient Warm Golden Lighting */}
        <div className="sunbeams opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-glow/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 text-center space-y-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-glow/40 bg-amber-glow/15 text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow">
            <Sparkles className="w-3.5 h-3.5 text-amber-glow animate-pulse" />
            <span>THE STRATEGIC HORIZON</span>
          </div>

          {/* Master Closing Headline */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-champagne-100 tracking-tight leading-[1.06] drop-shadow-2xl">
              Build a hotel that earns <br />
              <span className="italic font-extralight text-amber-glow">
                beyond its rooms.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-ivory-warm/80 font-light leading-relaxed max-w-2xl mx-auto">
              The next opportunity in hospitality is not simply to provide accommodation. It is to build
              a connected business that attracts guests, coordinates services, supports its workforce,
              protects revenue, and creates commercial relationships that extend beyond a single property.
            </p>

            <p className="font-serif text-xl sm:text-2xl text-champagne-200/90 font-light italic max-w-xl mx-auto">
              Joclarif brings that opportunity into one coordinated ecosystem.
            </p>
          </div>

          {/* Final Statement Banner */}
          <div className="p-6 rounded-2xl bg-shadow-darkest/80 border border-champagne-200/15 max-w-xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-amber-glow font-semibold block">
              More visibility. More opportunities. More ways to grow.
            </span>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-amber-glow bg-amber-glow text-shadow-darkest font-semibold text-xs tracking-[0.25em] uppercase hover:bg-champagne-100 transition-all shadow-[0_10px_35px_rgba(245,184,65,0.35)]"
            >
              <span>EXPLORE THE J O C L A R I F OPPORTUNITY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/intelligence"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-champagne-200/30 bg-shadow-darkest/80 text-champagne-200 hover:text-white hover:border-amber-glow text-xs tracking-[0.22em] uppercase font-mono transition-all"
            >
              <span>View Executive Intelligence Cockpit</span>
            </Link>
          </div>

          {/* Secondary Quick Navigation Anchors */}
          <div className="pt-12 border-t border-champagne-200/10 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory-warm/60 font-light">
            <Link href="/" className="hover:text-amber-glow transition-colors">
              &larr; Return to Homepage
            </Link>
            <span>&bull;</span>
            <Link href="/#chapter-mobility" className="hover:text-amber-glow transition-colors">
              Inspect Mobility &amp; Chauffeur Fleet
            </Link>
            <span>&bull;</span>
            <Link href="/#chapter-roadmap" className="hover:text-amber-glow transition-colors">
              Review Roadmap Milestones
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Executive Consultation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-shadow-darkest/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#180f08] to-[#0d0804] border border-amber-glow/40 shadow-2xl space-y-6">
            <button
              onClick={() => {
                setModalOpen(false);
                setConsultationSubmitted(false);
              }}
              className="absolute top-6 right-6 text-champagne-200/60 hover:text-champagne-200 text-sm font-mono"
            >
              &times; Close
            </button>

            {!consultationSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-glow font-mono text-[10px] tracking-widest uppercase">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>EXECUTIVE COMMERCIAL CONSULTATION</span>
                  </div>
                  <h3 className="font-serif text-2xl text-champagne-100 font-light">
                    Schedule Discovery Session
                  </h3>
                  <p className="text-xs text-ivory-warm/70 font-light leading-relaxed">
                    Arrange a private briefing to review financial assumptions, diagnostic audits,
                    and implementation timelines for Joclarif Hotel, Zaria.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-ivory-warm/80 block mb-1 font-light">
                      Executive / Owner Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alhaji Ibrahim Danjuma"
                      value={executiveName}
                      onChange={(e) => setExecutiveName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-shadow-main border border-champagne-200/20 text-champagne-100 outline-none focus:border-amber-glow font-light"
                    />
                  </div>

                  <div>
                    <label className="text-ivory-warm/80 block mb-1 font-light">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 803 000 0000"
                      value={executivePhone}
                      onChange={(e) => setExecutivePhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-shadow-main border border-champagne-200/20 text-champagne-100 outline-none focus:border-amber-glow font-light"
                    />
                  </div>

                  <div>
                    <label className="text-ivory-warm/80 block mb-1 font-light">
                      Strategic Focus Area
                    </label>
                    <select
                      value={propertyFocus}
                      onChange={(e) => setPropertyFocus(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-shadow-main border border-champagne-200/20 text-champagne-100 outline-none focus:border-amber-glow font-light"
                    >
                      <option value="Flagship Property Transformation">
                        Flagship Property Transformation (Zaria)
                      </option>
                      <option value="Car Hire & Chauffeur Mobility Fleet">
                        Car Hire &amp; Chauffeur Mobility Fleet
                      </option>
                      <option value="Intelligence & Financial Reconciliation Audit">
                        Intelligence &amp; Financial Reconciliation Audit
                      </option>
                      <option value="Full Multi-Channel Commercial Ecosystem">
                        Full Multi-Channel Commercial Ecosystem
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-glow text-shadow-darkest font-semibold text-xs tracking-widest uppercase hover:bg-champagne-100 transition-colors shadow-glow flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Executive Briefing</span>
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-amber-glow/20 border border-amber-glow/50 flex items-center justify-center mx-auto text-amber-glow">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-champagne-100 font-light">
                  Briefing Request Registered
                </h3>
                <p className="text-xs text-ivory-warm/75 font-light leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-champagne-100">{executiveName}</strong>. Your
                  consultation request for{" "}
                  <strong className="text-amber-glow">{propertyFocus}</strong> has been logged. Our
                  commercial team will reach out via {executivePhone} to confirm your briefing session.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setConsultationSubmitted(false);
                  }}
                  className="px-6 py-2 rounded-full border border-champagne-200/30 text-champagne-200 text-xs font-mono uppercase tracking-wider hover:border-amber-glow transition-all"
                >
                  Return to Page
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
