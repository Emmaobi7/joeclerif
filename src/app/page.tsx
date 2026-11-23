import React from "react";
import { Navbar } from "@/components/Navbar";
import { Chapter01Vision } from "@/components/chapters/Chapter01Vision";
import { Chapter02MobileApp } from "@/components/chapters/Chapter02MobileApp";
import { Chapter02Ecosystem } from "@/components/chapters/Chapter02Ecosystem";
import { JoclarifMobilitySection } from "@/components/JoclarifMobilitySection";
import { Chapter03Demonstrations } from "@/components/chapters/Chapter03Demonstrations";
import { Chapter04Intelligence } from "@/components/chapters/Chapter04Intelligence";
import { Chapter05RoadAhead } from "@/components/chapters/Chapter05RoadAhead";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0D0804] text-[#F7F1E6] flex flex-col selection:bg-[#F5B841] selection:text-[#0D0804] overflow-x-hidden w-full">
      {/* 1. Restrained Chapter Navigation */}
      <Navbar />

      {/* 2. CHAPTER 01 — THE VISION (Dual-Platform Hero + Economics + 3D Architectural Massing Reveal) */}
      <Chapter01Vision />

      {/* 3. CHAPTER 02 — THE DEDICATED MOBILE APP COMPANION (Interactive 3D Smartphone + 8 App Screens + Web vs Mobile) */}
      <Chapter02MobileApp />

      {/* 4. CHAPTER 03 — THE CONNECTED HOSPITALITY ECOSYSTEM (Tri-Partite Touchpoints + 3D Spatial Pavilion + 7-Moment Journey) */}
      <Chapter02Ecosystem />

      {/* 5. JOCLARIF MOBILITY & CHAUFFEUR SERVICES (Whole-Journey Transit, Airport Transfers, Fleet & Partners) */}
      <JoclarifMobilitySection />

      {/* 6. CHAPTER 04 — EXPERIENCE IT (Interactive Demonstration Suite: 5 Working Demos with Executive Briefings) */}
      <Chapter03Demonstrations />

      {/* 7. CHAPTER 05 — THE INTELLIGENCE BEHIND IT (Interactive 3-Tier Architecture + Integrations + NDPR Reliability) */}
      <Chapter04Intelligence />

      {/* 8. CHAPTER 06 — THE ROAD AHEAD (Interactive 5-Phase Roadmap Progression + Executive Consultation Card) */}
      <Chapter05RoadAhead />

      {/* 9. Footer & Regulatory Disclaimers */}
      <Footer />
    </main>
  );
}
