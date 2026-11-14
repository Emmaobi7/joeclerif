"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Sparkles, Eye, Compass } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { IMAGES } from "@/data/mockData";

export function GuestJourneySpatial() {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      num: "01",
      phase: "Discovery",
      title: "Discovering Joclarif",
      subtitle: "The Digital Flagship & First Impressions",
      description:
        "The guest discovers Joclarif through an owned, lightning-fast digital storefront. Architectural photography, curated spatial tours, and real-time transparent rates replace clumsy phone inquiries.",
      image: IMAGES.hero,
      spatialTag: "Spatial Entry & Online Flagship",
      detailNote: "Reclaims direct bookings from third-party commission channels.",
    },
    {
      num: "02",
      phase: "Exploration",
      title: "Exploring Accommodation & Facilities",
      subtitle: "Spatial Room & Banquet Inspection",
      description:
        "Guests and wedding planners inspect 3D spatial room models, banquet floorplans, and suite connectivity with realistic lighting presets before committing to dates.",
      image: IMAGES.suite,
      spatialTag: "Interactive 3D Pavilion & Suite Showcase",
      detailNote: "360° perspective of Governor Suite and Grand Savannah Banquet Hall.",
    },
    {
      num: "03",
      phase: "Reservation",
      title: "Natural Language Booking",
      subtitle: "Conversational Co-Pilot & Inventory Locks",
      description:
        "Whether reserving 1 room or 15 suites for a family wedding, the guest chats with the Booking Co-Pilot, which deterministically locks real inventory with zero price hallucination.",
      image: IMAGES.executive,
      spatialTag: "Conversational Booking Co-Pilot",
      detailNote: "Assembles combined room + banquet quotations in seconds.",
    },
    {
      num: "04",
      phase: "Pre-Arrival",
      title: "Preparing for Arrival",
      subtitle: "Contactless Pre-Check-in & Verification",
      description:
        "Days prior to arrival, the guest completes digital registration on mobile. Optical character recognition extracts passport fields into the reservation under strict NDPR privacy rules.",
      image: IMAGES.concierge,
      spatialTag: "Mobile Companion & Document Capture",
      detailNote: "Eliminates physical paperwork and lobby congestion.",
    },
    {
      num: "05",
      phase: "Arrival",
      title: "Fast-Track Arrival & Key Collection",
      subtitle: "The 60-Second Check-in Experience",
      description:
        "Upon arriving in Zaria, the guest presents their digital Fast-Track boarding pass at the reception lounge. Pre-coded key cards are handed over in under one minute.",
      image: IMAGES.lobby,
      spatialTag: "Front Desk Fast-Track Dispatch",
      detailNote: "Reduces lobby queues during peak wedding check-in hours.",
    },
    {
      num: "06",
      phase: "In-Stay",
      title: "Enjoying the Stay",
      subtitle: "Effortless In-Room Services & Dining",
      description:
        "Room service dining, laundry requests, extra amenities, and banquet schedule coordination are dispatched directly through the guest's mobile web companion.",
      image: IMAGES.dining,
      spatialTag: "Integrated Operations & Service Dispatch",
      detailNote: "Staff receive instant tickets on mobile housekeeping boards.",
    },
    {
      num: "07",
      phase: "Concierge",
      title: "24/7 Multilingual Concierge",
      subtitle: "Instant Translation & VIP Human Escalation",
      description:
        "Regional and diaspora guests receive answers in their native language (French, English, Hausa). High-touch VIP transport or airport escorts are smoothly handed off to the Duty Manager.",
      image: IMAGES.banquetHall,
      spatialTag: "AI Concierge & Live Human Escalation",
      detailNote: "Ensures no guest request goes unanswered.",
    },
  ];

  const current = journeySteps[activeStep];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % journeySteps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  return (
    <section id="journey" className="py-28 bg-[#130C06] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric background glow */}
      <div className="volumetric-beam absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        <SectionHeader
          badge="Signature Experience B"
          subtitle="Spatial Storytelling"
          title="The Connected Guest Journey"
          description="Experience seven seamless spatial moments—from initial discovery and 3D suite exploration to fast-track arrival and 24/7 multilingual concierge care."
        />

        {/* Spatial Milestone Scrubber Strip */}
        <div className="relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {journeySteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                  activeStep === idx
                    ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                    : "bg-shadow-main/80 text-ivory-warm/60 border-hairline hover:border-amber-glow/40"
                }`}
              >
                <span>{step.num}</span>
                <span className="font-sans font-normal">{step.phase}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Spatial Stage Card */}
        <div className="rounded-3xl border-hairline bg-gradient-to-br from-shadow-main via-shadow-darkest to-[#0d0804] p-6 sm:p-10 lg:p-14 shadow-luxury relative overflow-hidden backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Spatial Narrative & Editorial Typography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl sm:text-4xl text-amber-glow font-light">
                  {current.num}
                </span>
                <div className="h-6 w-[1px] bg-champagne-200/20" />
                <span className="text-[10px] tracking-[0.28em] uppercase text-champagne-200 font-mono">
                  {current.phase} Phase
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-4xl text-ivory-warm font-normal leading-tight">
                  {current.title}
                </h3>
                <p className="text-xs text-amber-glow/90 font-mono uppercase tracking-wider">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-shadow-darkest border-hairline space-y-1.5 text-xs text-ivory-warm/80">
                <div className="flex items-center gap-2 text-amber-glow font-mono text-[10px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-glow" />
                  <span>{current.spatialTag}</span>
                </div>
                <p className="text-[11px] text-ivory-warm/60 font-light">
                  {current.detailNote}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 pt-4 border-t border-champagne-200/10">
                <button
                  onClick={prevStep}
                  className="p-3 rounded-full border-hairline bg-shadow-darkest text-ivory-warm/70 hover:text-amber-glow hover:border-amber-glow/50 transition-colors"
                  aria-label="Previous journey moment"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-champagne-200/70">
                  {current.num} / 07
                </span>
                <button
                  onClick={nextStep}
                  className="p-3 rounded-full border-hairline bg-shadow-darkest text-ivory-warm/70 hover:text-amber-glow hover:border-amber-glow/50 transition-colors"
                  aria-label="Next journey moment"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-ivory-warm/40 font-mono tracking-wider ml-auto uppercase hidden sm:inline">
                  Step {activeStep + 1} of 7
                </span>
              </div>
            </div>

            {/* Right Column: Layered Architectural Vignette Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-hairline bg-shadow-darkest shadow-subtle group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-shadow-darkest/20 to-transparent" />
                </div>

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-shadow-darkest/90 border-hairline backdrop-blur-md flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-champagne-200">
                    {current.spatialTag}
                  </span>
                  <span className="text-[10px] text-amber-glow font-mono">
                    Milestone {current.num}
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

