"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MOBILITY_SERVICES,
  MobilityServiceCategory,
  FLEET_VEHICLES,
  FleetVehicle,
} from "@/data/mobilityMockData";
import {
  Car,
  Plane,
  Shield,
  Compass,
  Clock,
  Calendar,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building,
  KeyRound,
  RotateCcw,
  Check,
  SlidersHorizontal,
} from "lucide-react";
import { Badge } from "./ui/Badge";

export function JoclarifMobilitySection() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("airport");
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("veh-lc300");

  // Booking Form State
  const [pickupLoc, setPickupLoc] = useState("Kaduna International Airport (KAD) — Domestic Terminal");
  const [dropoffLoc, setDropoffLoc] = useState("Joclarif Hotel Zaria — Main Reception Portico");
  const [pickupDate, setPickupDate] = useState("2026-11-28");
  const [pickupTime, setPickupTime] = useState("14:30");
  const [passengers, setPassengers] = useState("2 Guests");
  const [journeyType, setJourneyType] = useState("Airport VIP Transfer");
  const [chauffeurPref, setChauffeurPref] = useState("Executive Uniformed Chauffeur");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const selectedService = MOBILITY_SERVICES.find((s) => s.id === selectedServiceId) || MOBILITY_SERVICES[0];
  const selectedVehicle = FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section
      id="chapter-mobility"
      className="relative w-full py-20 sm:py-28 bg-[#0A0603] border-b border-champagne-200/10 overflow-hidden"
    >
      {/* Background Volumetric Sunbeam Effect */}
      <div className="sunbeams opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-champagne-200/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
                JOCLARIF MOBILITY &bull; FLEET &amp; CHAUFFEUR
              </span>
              <span className="text-xs font-mono text-champagne-300/60 hidden sm:inline">
                Chapter 04 &bull; Whole-Journey Hospitality
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-champagne-100 tracking-tight leading-[1.08] drop-shadow-[0_12px_40px_rgba(20,12,5,0.95)]">
              Every journey, <br />
              <span className="italic font-extralight text-amber-glow">thoughtfully arranged.</span>
            </h2>

            <p className="text-xs sm:text-sm text-ivory-warm/80 font-light leading-relaxed">
              From airport arrivals to executive travel and special occasions, discover a more seamless
              way to move through every destination in Zaria, Kaduna, and the wider Northern region.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <span className="text-[10px] font-mono text-champagne-300/60 uppercase">
              Demonstration Fleet Prototype:
            </span>
            <span className="px-3 py-1.5 rounded-full border border-amber-glow/40 bg-amber-glow/10 text-amber-glow text-xs font-mono uppercase tracking-wider shadow-glow">
              8 Chauffeur Services Active
            </span>
          </div>
        </div>

        {/* 1. Interactive 8 Service Categories Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-widest text-champagne-300/70 uppercase">
              01 &bull; Curated Chauffeur Service Categories
            </span>
            <span className="text-[10px] font-mono text-champagne-300/50 hidden sm:inline">
              Select category to inspect route details and fleet recommendations
            </span>
          </div>

          {/* 8-Tab Service Switcher Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {MOBILITY_SERVICES.map((serv) => {
              const isSelected = selectedServiceId === serv.id;
              return (
                <button
                  key={serv.id}
                  type="button"
                  onClick={() => setSelectedServiceId(serv.id)}
                  className={`p-3 rounded-xl border text-left transition-all space-y-1.5 flex flex-col justify-between ${
                    isSelected
                      ? "bg-amber-glow/15 border-amber-glow text-white shadow-glow"
                      : "bg-shadow-darkest/75 border-champagne-200/10 text-ivory-warm/70 hover:border-amber-glow/40 hover:text-white"
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isSelected ? "text-amber-glow font-bold" : "text-champagne-300/50"}`}>
                    {serv.num}
                  </span>
                  <div className="font-serif text-xs font-medium leading-tight">
                    {serv.title}
                  </div>
                  <span className={`text-[9px] font-mono block ${isSelected ? "text-champagne-200" : "text-ivory-warm/40"}`}>
                    {serv.typicalDuration.split(" ")[0]} {serv.typicalDuration.split(" ")[1] || ""}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Service Detailed Feature Card */}
          <div className="p-6 sm:p-8 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest backdrop-blur-md shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-amber-glow uppercase px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/20">
                  Category {selectedService.num}
                </span>
                <span className="text-xs font-mono text-champagne-300/60">
                  Recommended: {selectedService.recommendedFleet}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-champagne-100 font-light">
                {selectedService.headline}
              </h3>

              <p className="text-xs sm:text-sm text-ivory-warm/75 font-light leading-relaxed max-w-2xl">
                {selectedService.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {selectedService.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 flex items-start gap-2 text-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow shrink-0 mt-0.5" />
                    <span className="text-ivory-warm/80 text-[11px] leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-[#0d0804]/80 border border-champagne-200/15 flex flex-col justify-between space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-champagne-300/60 uppercase text-[10px]">Estimated Investment</span>
                <div className="font-serif text-2xl text-amber-glow font-medium">
                  {selectedService.rateEstimate}
                </div>
                <div className="text-[11px] text-ivory-warm/50">
                  Duration: {selectedService.typicalDuration}
                </div>
              </div>

              <div className="pt-2 border-t border-champagne-200/10 text-[11px] text-ivory-warm/70">
                Consolidated billing direct to your hotel guest folio upon room checkout.
              </div>

              <a
                href="#mobility-booking-console"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-center text-xs uppercase tracking-wider shadow-glow hover:opacity-95 transition-all"
              >
                Configure This Itinerary &darr;
              </a>
            </div>
          </div>
        </div>

        {/* 2. Interactive Fleet Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-widest text-champagne-300/70 uppercase">
              02 &bull; Joclarif Fleet &amp; Partner Inventory
            </span>
            <span className="text-[10px] font-mono text-champagne-300/50 hidden sm:inline">
              Fictional demonstration fleet specifications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_VEHICLES.map((vehicle) => {
              const isSelected = selectedVehicleId === vehicle.id;
              return (
                <div
                  key={vehicle.id}
                  onClick={() => setSelectedVehicleId(vehicle.id)}
                  className={`rounded-2xl border bg-gradient-to-b from-shadow-main/90 to-shadow-darkest overflow-hidden transition-all cursor-pointer group flex flex-col justify-between ${
                    isSelected
                      ? "border-amber-glow/60 shadow-glow"
                      : "border-champagne-200/15 hover:border-amber-glow/30"
                  }`}
                >
                  <div className="relative h-44 w-full overflow-hidden bg-[#140c06]">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shadow-darkest via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full border backdrop-blur-sm ${
                          vehicle.tier === "Hotel Fleet"
                            ? "bg-amber-glow/20 border-amber-glow/50 text-amber-glow"
                            : "bg-blue-500/20 border-blue-500/40 text-blue-300"
                        }`}
                      >
                        {vehicle.tier}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-champagne-300/60 uppercase">
                        {vehicle.category}
                      </div>
                      <h4 className="font-serif text-lg text-champagne-100 font-medium mt-0.5">
                        {vehicle.name}
                      </h4>
                      <p className="text-[11px] text-ivory-warm/65 line-clamp-2 mt-1 leading-relaxed">
                        {vehicle.tagline}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[10px] font-mono text-champagne-300/70 pt-2 border-t border-champagne-200/10">
                      <div className="flex items-center justify-between">
                        <span>Capacity:</span>
                        <span className="text-champagne-200">{vehicle.passengers} Guests &bull; {vehicle.luggage} Bags</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Daily Rate:</span>
                        <span className="text-amber-glow font-bold text-xs">{vehicle.dailyRate}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`w-full py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all mt-2 ${
                        isSelected
                          ? "bg-amber-glow text-shadow-darkest font-semibold"
                          : "border border-champagne-200/20 text-champagne-200 hover:border-amber-glow"
                      }`}
                    >
                      {isSelected ? "Selected for Journey" : "Select Vehicle"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Interactive Journey Booking Demonstration Console */}
        <div id="mobility-booking-console" className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-widest text-champagne-300/70 uppercase">
              03 &bull; Interactive Journey Booking Console
            </span>
            <span className="text-[10px] font-mono text-amber-glow">
              Simulated Guest &amp; Chauffeur Dispatch Demonstration
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest backdrop-blur-md shadow-luxury">
            {!bookingConfirmed ? (
              <form onSubmit={handleBook} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
                  {/* Pickup Location */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Pickup Location</label>
                    <select
                      value={pickupLoc}
                      onChange={(e) => setPickupLoc(e.target.value)}
                      className="w-full p-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-ivory-warm focus:outline-none focus:border-amber-glow text-xs"
                    >
                      <option>Kaduna International Airport (KAD) — Domestic Terminal</option>
                      <option>Nnamdi Azikiwe International Airport Abuja (ABV) — Presidential Wing</option>
                      <option>Joclarif Hotel Zaria — Main Reception Portico</option>
                      <option>Ahmadu Bello University (ABU Zaria) — Senate Building</option>
                      <option>Zaria Railway Terminal</option>
                    </select>
                  </div>

                  {/* Destination */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Destination</label>
                    <select
                      value={dropoffLoc}
                      onChange={(e) => setDropoffLoc(e.target.value)}
                      className="w-full p-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-ivory-warm focus:outline-none focus:border-amber-glow text-xs"
                    >
                      <option>Joclarif Hotel Zaria — Main Reception Portico</option>
                      <option>Kaduna State Government House</option>
                      <option>Abuja Central Business District</option>
                      <option>Ahmadu Bello University (ABU Zaria) Main Campus</option>
                      <option>Zaria Golf Club Lounge</option>
                    </select>
                  </div>

                  {/* Journey Type */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Journey Type</label>
                    <select
                      value={journeyType}
                      onChange={(e) => setJourneyType(e.target.value)}
                      className="w-full p-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-ivory-warm focus:outline-none focus:border-amber-glow text-xs"
                    >
                      <option>Airport VIP Greeting &amp; Transfer</option>
                      <option>Full-Day Chauffeur Standby (8 Hours)</option>
                      <option>Intercity Executive Transit (Zaria ↔ Abuja)</option>
                      <option>Wedding Convoy Coordination</option>
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Pickup Date</label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full p-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-ivory-warm focus:outline-none focus:border-amber-glow text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Pickup Time</label>
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full p-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-ivory-warm focus:outline-none focus:border-amber-glow text-xs"
                    />
                  </div>

                  {/* Passengers */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Passengers</label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full p-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-ivory-warm focus:outline-none focus:border-amber-glow text-xs"
                    >
                      <option>1–2 Passengers (Executive Comfort)</option>
                      <option>3–4 Passengers (Family / Delegation)</option>
                      <option>5–12 Passengers (VIP Coach)</option>
                    </select>
                  </div>

                  {/* Chauffeur Preference */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Chauffeur &amp; Protocol Preference</label>
                    <select
                      value={chauffeurPref}
                      onChange={(e) => setChauffeurPref(e.target.value)}
                      className="w-full p-3 rounded-xl bg-shadow-darkest border border-champagne-200/20 text-ivory-warm focus:outline-none focus:border-amber-glow text-xs"
                    >
                      <option>Executive Uniformed Chauffeur (Standard)</option>
                      <option>Chauffeur + Dedicated Security Protocol Escort Handshake</option>
                      <option>Bilingual Protocol Chauffeur (English / French / Hausa)</option>
                    </select>
                  </div>

                  {/* Selected Vehicle Indicator */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-champagne-300/70 uppercase">Assigned Fleet Category</label>
                    <div className="p-3 rounded-xl bg-[#140c06] border border-amber-glow/40 text-xs text-amber-glow font-bold">
                      {selectedVehicle.name} ({selectedVehicle.tier})
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-ivory-warm/60 font-mono">
                    Estimated Transit Rate: <strong className="text-amber-glow">{selectedVehicle.dailyRate}</strong> (Zero advance payment required &bull; Folio integrated)
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs font-mono uppercase tracking-[0.2em] shadow-glow hover:opacity-95 transition-all"
                  >
                    Request Availability &rarr;
                  </button>
                </div>
              </form>
            ) : (
              /* Simulated Booking Confirmation State */
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        Dispatch Confirmed &bull; Fleet Reserved
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-champagne-100 font-light">
                        Itinerary Booked: MOB-2026-7712
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-champagne-200 bg-shadow-darkest/90 px-3 py-1.5 rounded-lg border border-champagne-200/20">
                    Billed to Hotel Room Folio
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                    <div className="text-[10px] text-champagne-300/60 uppercase">Assigned Chauffeur</div>
                    <div className="font-serif text-base text-champagne-200">Mallam Sani Bello</div>
                    <div className="text-[10px] text-emerald-400">Verified &bull; 8 Yrs Executive Record</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                    <div className="text-[10px] text-champagne-300/60 uppercase">Reserved Vehicle</div>
                    <div className="font-serif text-base text-amber-glow">{selectedVehicle.name}</div>
                    <div className="text-[10px] text-ivory-warm/60">Plate: KAN-892-AA &bull; Black</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-shadow-darkest border border-champagne-200/15 space-y-1">
                    <div className="text-[10px] text-champagne-300/60 uppercase">Flight Telemetry</div>
                    <div className="font-serif text-base text-champagne-200">Tracking Active</div>
                    <div className="text-[10px] text-emerald-400">Complimentary 60m gate buffer</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0d0804]/80 border border-champagne-200/10 text-xs text-ivory-warm/75 space-y-1 font-mono">
                  <div>Pickup: <strong>{pickupLoc}</strong></div>
                  <div>Destination: <strong>{dropoffLoc}</strong></div>
                  <div>Time: <strong>{pickupDate} at {pickupTime}</strong> &bull; {passengers}</div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-mono text-champagne-300/50">
                    Simulated Demonstration Dispatch &bull; Joclarif Hotel Operations Nerve Center
                  </span>
                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-glow hover:underline"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Booking Console</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Dual-Supply Business Model Architecture */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-widest text-champagne-300/70 uppercase">
              04 &bull; Scalable Fleet Commercial Architecture
            </span>
            <span className="text-[10px] font-mono text-champagne-300/50 hidden sm:inline">
              Dual-Supply Operational Model
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hotel Fleet Card */}
            <div className="p-7 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest backdrop-blur-md shadow-luxury space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-glow/15 border border-amber-glow/30 text-amber-glow">
                  Proprietary Assets
                </span>
                <Building className="w-5 h-5 text-amber-glow" />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-champagne-100 font-normal">
                  Joclarif Owned Hotel Fleet
                </h3>
                <div className="text-[11px] font-mono text-champagne-300/60 mt-0.5">
                  Core Airport Shuttles &amp; VIP Presidential Transit
                </div>
              </div>

              <p className="text-xs text-ivory-warm/75 leading-relaxed font-light">
                Maintained to exacting internal standards with hotel-employed chauffeurs, dedicated maintenance schedules,
                and seamless room folio billing. Guarantees 100% margin retention on high-volume airport routes.
              </p>

              <div className="space-y-2 pt-2 border-t border-champagne-200/10 text-xs text-ivory-warm/80 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Immediate portico dispatch without third-party delay</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Captures 100% of executive airport transfer fees</span>
                </div>
              </div>
            </div>

            {/* Verified Mobility Partners Card */}
            <div className="p-7 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest backdrop-blur-md shadow-luxury space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300">
                  Marketplace Network
                </span>
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-champagne-100 font-normal">
                  Verified Mobility Partners
                </h3>
                <div className="text-[11px] font-mono text-champagne-300/60 mt-0.5">
                  Independent Luxury Owners &amp; Transport Companies
                </div>
              </div>

              <p className="text-xs text-ivory-warm/75 leading-relaxed font-light">
                Allows vetted regional transport providers to list executive sedans, armored Land Cruisers, and luxury buses.
                Expands fleet capacity during ABU convocation weeks and wedding seasons with zero hotel capital expenditure.
              </p>

              <div className="space-y-2 pt-2 border-t border-champagne-200/10 text-xs text-ivory-warm/80 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow" />
                  <span>15–20% Platform Commission earned by Joclarif</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow" />
                  <span>Strict mechanical audit &amp; background check gatekeeping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
