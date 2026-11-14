"use client";

import React, { useState } from "react";
import {
  FileCheck,
  Shield,
  Scan,
  CheckCircle,
  AlertCircle,
  Lock,
  ArrowRight,
  RotateCcw,
  Sparkles,
  QrCode,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";
import { MOCK_OCR_DATA } from "@/data/mockData";

export function DigitalCheckinDemo() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [reservationCode, setReservationCode] = useState("JOC-8841-A01");
  const [guestSurname, setGuestSurname] = useState("Adewale");
  const [consentGiven, setConsentGiven] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  const ocrData = MOCK_OCR_DATA;

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setCurrentStep(3);
    }, 1200);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsScanning(false);
  };

  return (
    <section id="checkin" className="py-28 bg-[#130C06] relative border-t border-champagne-200/10 overflow-hidden">
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Contactless Guest Flow"
          subtitle="Pre-Arrival Identity &amp; Self Check-in"
          title="Digital Check-in: Front Desk Queues Reduced to 60 Seconds"
          description="Arriving wedding parties and corporate guests register before setting foot in the hotel. Optical character recognition extracts passport fields into the reservation folio under strict NDPR privacy safeguards."
        />

        {/* Step Indicator Progress Bar in Still Waters */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { num: 1, title: "1. Lookup" },
              { num: 2, title: "2. Consent & Capture" },
              { num: 3, title: "3. OCR Review" },
              { num: 4, title: "4. Verified Pass" },
            ].map((step) => (
              <button
                key={step.num}
                onClick={() => setCurrentStep(step.num as any)}
                className={`pb-3 border-b-2 font-medium transition-all ${
                  currentStep >= step.num
                    ? "border-amber-glow text-amber-glow font-semibold"
                    : "border-champagne-200/10 text-ivory-warm/40"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Wizard Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border-hairline bg-shadow-main/90 p-6 sm:p-10 shadow-luxury backdrop-blur-md">
          {/* STEP 1: RESERVATION LOOKUP */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-left">
                <Badge variant="amber">Step 1 of 4</Badge>
                <h4 className="text-2xl font-serif text-ivory-warm font-normal mt-2">
                  Retrieve Your Reservation
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light mt-1">
                  Enter your confirmation reference code provided in your booking email or WhatsApp message.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                    Reservation Reference
                  </label>
                  <input
                    type="text"
                    value={reservationCode}
                    onChange={(e) => setReservationCode(e.target.value)}
                    className="w-full bg-shadow-darkest border-hairline rounded-lg p-3 text-xs text-ivory-warm font-mono focus:outline-none focus:border-amber-glow"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-ivory-warm/50 block mb-1 font-mono">
                    Guest Surname
                  </label>
                  <input
                    type="text"
                    value={guestSurname}
                    onChange={(e) => setGuestSurname(e.target.value)}
                    className="w-full bg-shadow-darkest border-hairline rounded-lg p-3 text-xs text-ivory-warm focus:outline-none focus:border-amber-glow"
                  />
                </div>
              </div>

              {/* Matched Reservation Preview */}
              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ivory-warm">
                    Governor Suite 401 &bull; 3 Nights
                  </span>
                  <span className="text-emerald-400 font-medium">Reservation Confirmed</span>
                </div>
                <p className="text-ivory-warm/60 font-light">
                  Guest: Mrs. Folashade Adewale &bull; Check-in: 25 Nov 2026, 14:00
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-glow"
                >
                  <span>Continue to Identity Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CONSENT & DOCUMENT CAPTURE */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-left">
                <Badge variant="amber">Step 2 of 4</Badge>
                <h4 className="text-2xl font-serif text-ivory-warm font-normal mt-2">
                  Identity Processing &amp; Privacy Consent
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light mt-1">
                  In compliance with Nigerian Data Protection Regulation (NDPR) and hospitality regulations.
                </p>
              </div>

              {/* Privacy Notice Box */}
              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline text-xs text-ivory-warm/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-glow font-medium">
                  <Lock className="w-4 h-4" />
                  <span>Encrypted Storage &amp; Data Retention Commitment</span>
                </div>
                <p className="text-[11px] text-ivory-warm/60 leading-relaxed font-light">
                  Your identity document is processed via end-to-end encrypted optical extraction to verify
                  reservation match and pre-fill hotel guest registration registers. Joclarif adheres to
                  strict access controls, automatic post-checkout purging, and never sells guest personal data.
                </p>
                <label className="flex items-center gap-2 pt-2 text-ivory-warm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="accent-amber-glow"
                  />
                  <span className="text-xs font-light">
                    I consent to secure automated identity extraction for this hotel reservation.
                  </span>
                </label>
              </div>

              {/* Simulated Document Upload Placeholder */}
              <div className="p-8 rounded-2xl border-2 border-dashed border-champagne-200/15 bg-shadow-darkest/70 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-shadow-main border-hairline flex items-center justify-center text-amber-glow mx-auto">
                  <Scan className="w-7 h-7" />
                </div>
                <h5 className="text-sm font-semibold text-ivory-warm">
                  Simulated Passport / NIN / Driver&apos;s License Scanner
                </h5>
                <p className="text-xs text-ivory-warm/60 max-w-md mx-auto font-light">
                  In a production release, the guest captures their document via mobile camera or file
                  upload. In this mock proposal, test the simulation below.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleStartScan}
                    disabled={!consentGiven || isScanning}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-glow text-shadow-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 disabled:opacity-40 transition-all shadow-glow"
                  >
                    {isScanning ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin text-shadow-darkest" />
                        <span>Simulating Optical Scan...</span>
                      </>
                    ) : (
                      <>
                        <Scan className="w-4 h-4" />
                        <span>Trigger Simulated Document OCR Scan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: OCR EXTRACTION REVIEW */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-left">
                <Badge variant="amber">Step 3 of 4</Badge>
                <h4 className="text-2xl font-serif text-ivory-warm font-normal mt-2">
                  Review Extracted Document Data
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light mt-1">
                  Verify the fields extracted by the optical engine before finalizing check-in.
                </p>
              </div>

              {/* Technical Disclaimer Notice */}
              <div className="p-3.5 rounded-xl bg-shadow-darkest border border-amber-glow/30 text-xs text-champagne-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed font-light">
                  <strong className="text-amber-glow">Important Technical Distinction:</strong> The OCR engine accurately extracts
                  printed text and MRZ machine-readable zones to eliminate manual typing. It does not
                  claim to physically authenticate government document genuineness, which remains a front desk
                  sight verification protocol.
                </p>
              </div>

              {/* Extracted Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] uppercase text-ivory-warm/50 block mb-0.5 font-mono">
                    Full Legal Name
                  </span>
                  <span className="font-semibold text-ivory-warm font-mono">
                    {ocrData.fullName}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] uppercase text-ivory-warm/50 block mb-0.5 font-mono">
                    Document Type &amp; Number
                  </span>
                  <span className="font-semibold text-amber-glow font-mono">
                    {ocrData.documentNumber} ({ocrData.documentType})
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] uppercase text-ivory-warm/50 block mb-0.5 font-mono">
                    Nationality &amp; Country Code
                  </span>
                  <span className="font-semibold text-ivory-warm font-mono">
                    {ocrData.nationality} ({ocrData.issuingCountry})
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-shadow-darkest border-hairline">
                  <span className="text-[10px] uppercase text-ivory-warm/50 block mb-0.5 font-mono">
                    Date of Birth / Expiry
                  </span>
                  <span className="font-semibold text-ivory-warm font-mono">
                    {ocrData.dateOfBirth} &bull; Exp: {ocrData.expiryDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-ivory-warm/60 pt-2 border-t border-champagne-200/10">
                <span className="text-emerald-400 font-medium flex items-center gap-1.5 font-mono text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Optical Confidence Score: {ocrData.confidenceScore}%
                </span>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-glow text-shadow-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-glow"
                >
                  <span>Confirm &amp; Complete Check-in</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: VERIFIED PASS & CONFIRMATION */}
          {currentStep === 4 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-1 font-mono">
                  Pre-Arrival Check-In Completed
                </span>
                <h4 className="text-2xl font-serif text-ivory-warm font-normal">
                  Welcome to Joclarif Hotel, Zaria
                </h4>
                <p className="text-xs text-ivory-warm/70 font-light mt-1 max-w-md mx-auto">
                  Your identity has been verified and synced with the Front Desk management board.
                  Present this Fast-Track pass at the lobby for immediate key card collection.
                </p>
              </div>

              {/* Digital Boarding Pass */}
              <div className="p-6 rounded-2xl bg-shadow-darkest border border-amber-glow/40 max-w-md mx-auto text-left space-y-4 shadow-luxury">
                <div className="flex items-center justify-between border-b border-champagne-200/10 pb-3">
                  <div>
                    <span className="text-[10px] text-amber-glow uppercase tracking-wider block font-mono">
                      Room Allocation
                    </span>
                    <span className="text-lg font-serif text-ivory-warm font-normal">
                      Governor Suite 401
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-ivory-warm/40 uppercase tracking-wider block font-mono">
                      Arrival Date
                    </span>
                    <span className="text-xs font-medium text-ivory-warm">25 Nov 2026</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-ivory-warm/40 block">Guest Name</span>
                    <span className="font-medium text-ivory-warm">Mrs. Folashade Adewale</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-ivory-warm/40 block">Key Status</span>
                    <span className="font-medium text-emerald-400">Pre-Coded at Desk</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-shadow-main border-hairline text-center">
                  <div className="w-24 h-24 mx-auto rounded bg-ivory-warm p-2 flex items-center justify-center text-shadow-darkest">
                    <QrCode className="w-20 h-20 text-shadow-darkest" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-glow mt-2 block">
                    FASTTRACK-PASS-8841-A01
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs text-ivory-warm/50 hover:text-amber-glow transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Check-in Simulation</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
