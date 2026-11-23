"use client";

import React from "react";
import { InvestmentNavbar } from "@/components/investment/InvestmentNavbar";
import { InvestmentHero } from "@/components/investment/InvestmentHero";
import { RevenueEnginesSection } from "@/components/investment/RevenueEnginesSection";
import { AudienceMonetizationSection } from "@/components/investment/AudienceMonetizationSection";
import { WorkforceEfficiencySection } from "@/components/investment/WorkforceEfficiencySection";
import { BusinessProtectionSection } from "@/components/investment/BusinessProtectionSection";
import { CompetitivePositioningSection } from "@/components/investment/CompetitivePositioningSection";
import { RegionalExpansionSection } from "@/components/investment/RegionalExpansionSection";
import { CommercialRevenueMatrixSection } from "@/components/investment/CommercialRevenueMatrixSection";
import { InteractiveRoiCalculatorSection } from "@/components/investment/InteractiveRoiCalculatorSection";
import { CostOfDoingNothingSection } from "@/components/investment/CostOfDoingNothingSection";
import { GovernanceImplementationSection } from "@/components/investment/GovernanceImplementationSection";
import { InvestmentClosingSection } from "@/components/investment/InvestmentClosingSection";
import { Footer } from "@/components/Footer";

export default function InvestmentPage() {
  return (
    <main className="min-h-screen bg-[#0D0804] text-[#F7F1E6] flex flex-col selection:bg-[#F5B841] selection:text-[#0D0804] overflow-x-hidden w-full">
      {/* 1. Dedicated Executive Navbar */}
      <InvestmentNavbar />

      {/* 2. Section 01: The Opening — A Bigger Business Opportunity (3D Constellation + Golden Nodes) */}
      <InvestmentHero />

      {/* 3. Section 02: The Revenue Engines (Core Hospitality, Mobility, Companion, Executive Services) */}
      <RevenueEnginesSection />

      {/* 4. Section 03: The Growing Digital Audience — Advertising & Partnerships */}
      <AudienceMonetizationSection />

      {/* 5. Section 04: The Workforce Efficiency Opportunity (Before/After + Efficiency Calculator) */}
      <WorkforceEfficiencySection />

      {/* 6. Section 05: Joclarif Intelligence — Protecting the Business & Eliminating Leakage */}
      <BusinessProtectionSection />

      {/* 7. Section 06: Competitive Positioning — Why Joclarif Is Different */}
      <CompetitivePositioningSection />

      {/* 8. Section 07: From One Hotel to a Regional Network (Interactive Nigeria Map) */}
      <RegionalExpansionSection />

      {/* 9. Section 08: The Commercial Model — Where Joclarif Earns Matrix */}
      <CommercialRevenueMatrixSection />

      {/* 10. Section 09: Interactive Financial Model — The ROI Calculator */}
      <InteractiveRoiCalculatorSection />

      {/* 11. Section 10: The Cost of Doing Nothing (10 Inaction Risk Vectors) */}
      <CostOfDoingNothingSection />

      {/* 12. Section 11: Implementation and Commercial Governance (6 Staged Rollouts) */}
      <GovernanceImplementationSection />

      {/* 13. Section 12: The Closing & Executive Briefing CTA */}
      <InvestmentClosingSection />

      {/* 14. Standard Legal & Regulatory Footer */}
      <Footer />
    </main>
  );
}
