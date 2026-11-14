"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Badge } from "./ui/Badge";

export function ClosingSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "Alhaji / Mrs. Executive",
    role: "Hotel Ownership / General Management",
    phone: "+234 800 000 0000",
    email: "management@joclarif.example",
    interest: "Direct Booking Engine & Multi-Room Delegations",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="closing" className="py-28 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric Radial Glow */}
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-8 sm:p-12 lg:p-16 shadow-luxury overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Commercial Persuasion & Executive Vision */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Badge variant="amber">Executive Invitation</Badge>

              <h2 className="text-3xl sm:text-5xl font-serif text-ivory-warm font-normal tracking-tight leading-[1.1]">
                Let&apos;s shape the next chapter of Joclarif hospitality.
              </h2>

              <p className="text-base sm:text-lg text-ivory-warm/75 font-light leading-relaxed">
                A proposed digital foundation designed to bring guests, reservations,
                and hotel operations together.
              </p>

              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-ivory-warm/80">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                  <span className="font-light">
                    <strong className="text-champagne-200 font-medium">Protect Your Operating Margins:</strong> Reclaim high-value direct bookings
                    without paying steep commissions to online travel agencies.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                  <span className="font-light">
                    <strong className="text-champagne-200 font-medium">Capture Northern Regional Prestige:</strong> Become the benchmark for modern,
                    frictionless hospitality in Zaria and Kaduna State.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                  <span className="font-light">
                    <strong className="text-champagne-200 font-medium">Total Operational Transparency:</strong> Real-time room rack, housekeeping
                    dispatch, and nightly revenue oversight from anywhere.
                  </span>
                </div>
              </div>

              {/* Next Steps Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-champagne-200/10">
                <div className="p-3.5 rounded-xl bg-shadow-darkest/80 border-hairline">
                  <span className="text-[10px] uppercase font-mono text-amber-glow block mb-0.5">
                    Step 1
                  </span>
                  <p className="text-xs font-semibold text-ivory-warm">Executive Demo</p>
                  <p className="text-[11px] text-ivory-warm/50 mt-0.5 font-light">Walkthrough with hotel owners</p>
                </div>
                <div className="p-3.5 rounded-xl bg-shadow-darkest/80 border-hairline">
                  <span className="text-[10px] uppercase font-mono text-amber-glow block mb-0.5">
                    Step 2
                  </span>
                  <p className="text-xs font-semibold text-ivory-warm">Technical Audit</p>
                  <p className="text-[11px] text-ivory-warm/50 mt-0.5 font-light">On-site property discovery</p>
                </div>
                <div className="p-3.5 rounded-xl bg-shadow-darkest/80 border-hairline">
                  <span className="text-[10px] uppercase font-mono text-amber-glow block mb-0.5">
                    Step 3
                  </span>
                  <p className="text-xs font-semibold text-ivory-warm">Phase 1 Delivery</p>
                  <p className="text-[11px] text-ivory-warm/50 mt-0.5 font-light">Live direct booking launch</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Executive Dialogue Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border-hairline bg-shadow-darkest/95 p-6 sm:p-8 shadow-luxury backdrop-blur-md">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-champagne-200/10 pb-3">
                      <h3 className="font-serif text-xl font-normal text-ivory-warm">
                        Schedule an Executive Consultation
                      </h3>
                      <p className="text-xs text-ivory-warm/50 mt-0.5 font-light">
                        Private demonstration for Joclarif leadership.
                      </p>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                        Executive Name &amp; Title
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-shadow-main border-hairline rounded-lg p-2.5 text-xs text-ivory-warm focus:outline-none focus:border-amber-glow"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full bg-shadow-main border-hairline rounded-lg p-2.5 text-xs text-ivory-warm font-mono focus:outline-none focus:border-amber-glow"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full bg-shadow-main border-hairline rounded-lg p-2.5 text-xs text-ivory-warm focus:outline-none focus:border-amber-glow"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                        Primary Strategic Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-shadow-main border-hairline rounded-lg p-2.5 text-xs text-ivory-warm focus:outline-none focus:border-amber-glow"
                      >
                        <option>Direct Booking Engine &amp; Commission Savings</option>
                        <option>Wedding &amp; Large Delegation Group Allocations</option>
                        <option>AI Multilingual Concierge &amp; WhatsApp Integration</option>
                        <option>Digital Check-in &amp; Fast-Track Key Collection</option>
                        <option>Complete Hotel Operations &amp; Property Management</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-glow transition-all"
                      >
                        <span>Request Leadership Presentation</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[10px] text-ivory-warm/40 text-center italic font-serif">
                      Confidential concept proposal. No obligation or financial commitment.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif text-2xl text-ivory-warm font-normal">
                      Consultation Request Logged
                    </h4>
                    <p className="text-xs text-ivory-warm/75 max-w-xs mx-auto leading-relaxed font-light">
                      Thank you. We have registered your request for an executive demonstration and discovery
                      session regarding <strong>{formData.interest}</strong>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-amber-glow hover:underline pt-2 inline-block font-mono"
                    >
                      Reset Form
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
