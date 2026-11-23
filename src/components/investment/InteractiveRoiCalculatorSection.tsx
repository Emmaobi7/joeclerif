"use client";

import React, { useState, useMemo } from "react";
import {
  FINANCIAL_SCENARIOS,
  FinancialScenario,
  formatNaira,
} from "@/data/investmentMockData";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  PieChart,
  ShieldAlert,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Sliders,
  CheckCircle2,
  Lock,
} from "lucide-react";

export function InteractiveRoiCalculatorSection() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("expected");
  const [includeCompanion, setIncludeCompanion] = useState<boolean>(false);

  // Initial Investment input - explicitly empty by default!
  const [initialInvestmentInput, setInitialInvestmentInput] = useState<string>("");

  // Editable financial inputs initialized from Expected scenario
  const baseScenario = FINANCIAL_SCENARIOS[activeScenarioId] || FINANCIAL_SCENARIOS.expected;

  const [annualBookingRevenue, setAnnualBookingRevenue] = useState<number>(
    baseScenario.annualBookingRevenue
  );
  const [directChannelImprovementPct, setDirectChannelImprovementPct] = useState<number>(
    baseScenario.directChannelImprovementPct
  );
  const [avoidedOtaCommissionRatePct, setAvoidedOtaCommissionRatePct] = useState<number>(
    baseScenario.avoidedOtaCommissionRatePct
  );
  const [additionalMonthlyEvents, setAdditionalMonthlyEvents] = useState<number>(
    baseScenario.additionalMonthlyEvents
  );
  const [profitPerEvent, setProfitPerEvent] = useState<number>(baseScenario.profitPerEvent);

  // Car Hire
  const [monthlyCarHireBookings, setMonthlyCarHireBookings] = useState<number>(
    baseScenario.monthlyCarHireBookings
  );
  const [avgCarHireValue, setAvgCarHireValue] = useState<number>(baseScenario.avgCarHireValue);
  const [hotelFleetSharePct, setHotelFleetSharePct] = useState<number>(
    baseScenario.hotelFleetSharePct
  );
  const [hotelFleetMarginPct, setHotelFleetMarginPct] = useState<number>(
    baseScenario.hotelFleetMarginPct
  );
  const [partnerCommissionPct, setPartnerCommissionPct] = useState<number>(
    baseScenario.partnerCommissionPct
  );

  // Companion (Optional)
  const [companionMonthlyBookings, setCompanionMonthlyBookings] = useState<number>(
    baseScenario.companionMonthlyBookings
  );
  const [companionAvgBookingValue, setCompanionAvgBookingValue] = useState<number>(
    baseScenario.companionAvgBookingValue
  );
  const [companionCommissionRatePct, setCompanionCommissionRatePct] = useState<number>(
    baseScenario.companionCommissionRatePct
  );
  const [companionMonthlyMemberships, setCompanionMonthlyMemberships] = useState<number>(
    baseScenario.companionMonthlyMemberships
  );
  const [companionMembershipFee, setCompanionMembershipFee] = useState<number>(
    baseScenario.companionMembershipFee
  );

  // Advertising & Partnerships
  const [monthlySponsoredCampaigns, setMonthlySponsoredCampaigns] = useState<number>(
    baseScenario.monthlySponsoredCampaigns
  );
  const [avgSponsorshipFee, setAvgSponsorshipFee] = useState<number>(
    baseScenario.avgSponsorshipFee
  );
  const [monthlyFeaturedPartners, setMonthlyFeaturedPartners] = useState<number>(
    baseScenario.monthlyFeaturedPartners
  );
  const [featuredPartnerFee, setFeaturedPartnerFee] = useState<number>(
    baseScenario.featuredPartnerFee
  );
  const [monthlyPartnerReferrals, setMonthlyPartnerReferrals] = useState<number>(
    baseScenario.monthlyPartnerReferrals
  );

  // Corporate & Executive
  const [monthlyCorporateBookings, setMonthlyCorporateBookings] = useState<number>(
    baseScenario.monthlyCorporateBookings
  );
  const [profitPerCorporateBooking, setProfitPerCorporateBooking] = useState<number>(
    baseScenario.profitPerCorporateBooking
  );

  // Operational Cash Savings
  const [monthlyOvertimeReduction, setMonthlyOvertimeReduction] = useState<number>(
    baseScenario.monthlyOvertimeReduction
  );
  const [monthlyTempLabourReduction, setMonthlyTempLabourReduction] = useState<number>(
    baseScenario.monthlyTempLabourReduction
  );
  const [monthlyInventoryLossReduction, setMonthlyInventoryLossReduction] = useState<number>(
    baseScenario.monthlyInventoryLossReduction
  );
  const [monthlyMaintenanceSavings, setMonthlyMaintenanceSavings] = useState<number>(
    baseScenario.monthlyMaintenanceSavings
  );
  const [
    monthlyPaymentReconciliationImprovement,
    setMonthlyPaymentReconciliationImprovement,
  ] = useState<number>(baseScenario.monthlyPaymentReconciliationImprovement);

  // Productive Capacity (Not counted as cash savings)
  const [monthlyAdminHoursRecovered, setMonthlyAdminHoursRecovered] = useState<number>(
    baseScenario.monthlyAdminHoursRecovered
  );

  // Recurring Operating Costs
  const [monthlySoftwareInfraCost, setMonthlySoftwareInfraCost] = useState<number>(
    baseScenario.monthlySoftwareInfraCost
  );
  const [monthlySupportMaintenanceCost, setMonthlySupportMaintenanceCost] = useState<number>(
    baseScenario.monthlySupportMaintenanceCost
  );
  const [monthlyCustomerAcquisitionExpense, setMonthlyCustomerAcquisitionExpense] = useState<number>(
    baseScenario.monthlyCustomerAcquisitionExpense
  );
  const [monthlyPlatformAdminExpense, setMonthlyPlatformAdminExpense] = useState<number>(
    baseScenario.monthlyPlatformAdminExpense
  );

  // Preset scenario selector handler
  const handleSelectScenario = (scenarioKey: string) => {
    setActiveScenarioId(scenarioKey);
    const sc = FINANCIAL_SCENARIOS[scenarioKey];
    if (!sc) return;

    setAnnualBookingRevenue(sc.annualBookingRevenue);
    setDirectChannelImprovementPct(sc.directChannelImprovementPct);
    setAvoidedOtaCommissionRatePct(sc.avoidedOtaCommissionRatePct);
    setAdditionalMonthlyEvents(sc.additionalMonthlyEvents);
    setProfitPerEvent(sc.profitPerEvent);
    setMonthlyCarHireBookings(sc.monthlyCarHireBookings);
    setAvgCarHireValue(sc.avgCarHireValue);
    setHotelFleetSharePct(sc.hotelFleetSharePct);
    setHotelFleetMarginPct(sc.hotelFleetMarginPct);
    setPartnerCommissionPct(sc.partnerCommissionPct);
    setCompanionMonthlyBookings(sc.companionMonthlyBookings);
    setCompanionAvgBookingValue(sc.companionAvgBookingValue);
    setCompanionCommissionRatePct(sc.companionCommissionRatePct);
    setCompanionMonthlyMemberships(sc.companionMonthlyMemberships);
    setCompanionMembershipFee(sc.companionMembershipFee);
    setMonthlySponsoredCampaigns(sc.monthlySponsoredCampaigns);
    setAvgSponsorshipFee(sc.avgSponsorshipFee);
    setMonthlyFeaturedPartners(sc.monthlyFeaturedPartners);
    setFeaturedPartnerFee(sc.featuredPartnerFee);
    setMonthlyPartnerReferrals(sc.monthlyPartnerReferrals);
    setMonthlyCorporateBookings(sc.monthlyCorporateBookings);
    setProfitPerCorporateBooking(sc.profitPerCorporateBooking);
    setMonthlyOvertimeReduction(sc.monthlyOvertimeReduction);
    setMonthlyTempLabourReduction(sc.monthlyTempLabourReduction);
    setMonthlyInventoryLossReduction(sc.monthlyInventoryLossReduction);
    setMonthlyMaintenanceSavings(sc.monthlyMaintenanceSavings);
    setMonthlyPaymentReconciliationImprovement(sc.monthlyPaymentReconciliationImprovement);
    setMonthlyAdminHoursRecovered(sc.monthlyAdminHoursRecovered);
    setMonthlySoftwareInfraCost(sc.monthlySoftwareInfraCost);
    setMonthlySupportMaintenanceCost(sc.monthlySupportMaintenanceCost);
    setMonthlyCustomerAcquisitionExpense(sc.monthlyCustomerAcquisitionExpense);
    setMonthlyPlatformAdminExpense(sc.monthlyPlatformAdminExpense);
  };

  // Calculations
  const calculations = useMemo(() => {
    // 1. Revenue
    const monthlyAvoidedOtaCommission =
      (annualBookingRevenue / 12) *
      (directChannelImprovementPct / 100) *
      (avoidedOtaCommissionRatePct / 100);

    const monthlyEventProfit = additionalMonthlyEvents * profitPerEvent;

    const carHireFleetPortion =
      monthlyCarHireBookings *
      (hotelFleetSharePct / 100) *
      avgCarHireValue *
      (hotelFleetMarginPct / 100);

    const carHirePartnerPortion =
      monthlyCarHireBookings *
      ((100 - hotelFleetSharePct) / 100) *
      avgCarHireValue *
      (partnerCommissionPct / 100);

    const monthlyCarHireContribution = carHireFleetPortion + carHirePartnerPortion;

    let monthlyCompanionContribution = 0;
    if (includeCompanion) {
      const companionBookingCommission =
        companionMonthlyBookings *
        companionAvgBookingValue *
        (companionCommissionRatePct / 100);
      const companionMemberships =
        companionMonthlyMemberships * companionMembershipFee;
      monthlyCompanionContribution = companionBookingCommission + companionMemberships;
    }

    const monthlyAdvertisingContribution =
      monthlySponsoredCampaigns * avgSponsorshipFee +
      monthlyFeaturedPartners * featuredPartnerFee +
      monthlyPartnerReferrals;

    const monthlyCorporateContribution =
      monthlyCorporateBookings * profitPerCorporateBooking;

    const totalMonthlyRevenue =
      monthlyAvoidedOtaCommission +
      monthlyEventProfit +
      monthlyCarHireContribution +
      monthlyCompanionContribution +
      monthlyAdvertisingContribution +
      monthlyCorporateContribution;

    const totalAnnualRevenue = totalMonthlyRevenue * 12;

    // 2. Cash Savings
    const totalMonthlyCashSavings =
      monthlyOvertimeReduction +
      monthlyTempLabourReduction +
      monthlyInventoryLossReduction +
      monthlyMaintenanceSavings +
      monthlyPaymentReconciliationImprovement;

    const totalAnnualCashSavings = totalMonthlyCashSavings * 12;

    // 3. Recurring Operating Costs
    const totalMonthlyRecurringCosts =
      monthlySoftwareInfraCost +
      monthlySupportMaintenanceCost +
      monthlyCustomerAcquisitionExpense +
      monthlyPlatformAdminExpense;

    const totalAnnualRecurringCosts = totalMonthlyRecurringCosts * 12;

    // 4. Net Operating Benefit
    const monthlyNetOperatingBenefit =
      totalMonthlyRevenue + totalMonthlyCashSavings - totalMonthlyRecurringCosts;

    const annualNetOperatingBenefit = monthlyNetOperatingBenefit * 12;

    // 5. Initial Investment & Payback / ROI
    const initialInvestment = parseFloat(initialInvestmentInput) || 0;

    let paybackMonthsText = "Awaiting discussion input";
    let firstYearRoiPctText = "—";
    let firstYearNetBenefit = annualNetOperatingBenefit;
    let threeYearCumulativeBenefit = annualNetOperatingBenefit * 3;

    if (initialInvestment > 0) {
      if (monthlyNetOperatingBenefit > 0) {
        const months = initialInvestment / monthlyNetOperatingBenefit;
        paybackMonthsText = months.toFixed(1) + " months";
      } else {
        paybackMonthsText = "N/A (Net Negative)";
      }
      firstYearNetBenefit = annualNetOperatingBenefit - initialInvestment;
      const roi = ((firstYearNetBenefit / initialInvestment) * 100).toFixed(0);
      firstYearRoiPctText = roi + "%";
      threeYearCumulativeBenefit = annualNetOperatingBenefit * 3 - initialInvestment;
    }

    return {
      monthlyAvoidedOtaCommission,
      monthlyEventProfit,
      monthlyCarHireContribution,
      monthlyCompanionContribution,
      monthlyAdvertisingContribution,
      monthlyCorporateContribution,
      totalMonthlyRevenue,
      totalAnnualRevenue,
      totalMonthlyCashSavings,
      totalAnnualCashSavings,
      totalMonthlyRecurringCosts,
      totalAnnualRecurringCosts,
      monthlyNetOperatingBenefit,
      annualNetOperatingBenefit,
      initialInvestment,
      paybackMonthsText,
      firstYearRoiPctText,
      firstYearNetBenefit,
      threeYearCumulativeBenefit,
    };
  }, [
    annualBookingRevenue,
    directChannelImprovementPct,
    avoidedOtaCommissionRatePct,
    additionalMonthlyEvents,
    profitPerEvent,
    monthlyCarHireBookings,
    avgCarHireValue,
    hotelFleetSharePct,
    hotelFleetMarginPct,
    partnerCommissionPct,
    includeCompanion,
    companionMonthlyBookings,
    companionAvgBookingValue,
    companionCommissionRatePct,
    companionMonthlyMemberships,
    companionMembershipFee,
    monthlySponsoredCampaigns,
    avgSponsorshipFee,
    monthlyFeaturedPartners,
    featuredPartnerFee,
    monthlyPartnerReferrals,
    monthlyCorporateBookings,
    profitPerCorporateBooking,
    monthlyOvertimeReduction,
    monthlyTempLabourReduction,
    monthlyInventoryLossReduction,
    monthlyMaintenanceSavings,
    monthlyPaymentReconciliationImprovement,
    monthlySoftwareInfraCost,
    monthlySupportMaintenanceCost,
    monthlyCustomerAcquisitionExpense,
    monthlyPlatformAdminExpense,
    initialInvestmentInput,
  ]);

  return (
    <section
      id="section-calculator"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              DYNAMIC FINANCIAL ENGINE
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Financial Return Simulator
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            What could this ecosystem <br />
            <span className="italic font-extralight text-amber-glow">return?</span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            Test custom commercial assumptions across core hospitality, car hire, events, sponsorships,
            and operational leakage elimination. All financial assumptions are fully editable and
            clearly identified as illustrative models.
          </p>
        </div>

        {/* Scenario Selectors & Companion Optional Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 rounded-2xl bg-shadow-main/80 border border-champagne-200/15">
          {/* Preset Scenario Selector */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-warm/50 block">
              Load Base Illustrative Scenario:
            </span>
            <div className="flex flex-wrap gap-2">
              {Object.keys(FINANCIAL_SCENARIOS).map((key) => {
                const sc = FINANCIAL_SCENARIOS[key];
                const isSelected = activeScenarioId === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectScenario(key)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all border ${
                      isSelected
                        ? "bg-amber-glow text-shadow-darkest border-amber-glow font-semibold shadow-glow"
                        : "bg-shadow-darkest text-champagne-200/70 border-champagne-200/15 hover:border-champagne-200/40"
                    }`}
                  >
                    {sc.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Companion Governance Toggle (DEFAULT OFF) */}
          <div className="p-4 rounded-xl bg-shadow-darkest border border-champagne-200/15 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-glow" />
                <span className="text-xs font-mono uppercase tracking-wider text-champagne-200 font-medium">
                  Model Private Companion Marketplace
                </span>
              </div>
              <p className="text-[10px] text-ivory-warm/50 font-light max-w-xs">
                Excluded from default base ROI until legal and management approval.
              </p>
            </div>
            <button
              onClick={() => setIncludeCompanion(!includeCompanion)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                includeCompanion ? "bg-amber-glow" : "bg-champagne-200/20"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-shadow-darkest transition-transform ${
                  includeCompanion ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Master Calculator Grid: Inputs (7 cols) + Outputs (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Editable Assumption Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Core Hospitality Inputs */}
            <div className="p-6 rounded-2xl bg-shadow-darkest/90 border border-champagne-200/10 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-glow font-semibold">
                  01 &bull; Core Hospitality &amp; Banquets
                </span>
                <span className="text-[10px] font-mono text-ivory-warm/40">Direct Yield</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Annual Eligible Booking Revenue (₦)
                  </label>
                  <input
                    type="number"
                    value={annualBookingRevenue}
                    onChange={(e) => setAnnualBookingRevenue(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Direct Channel Shift Improvement (%)
                  </label>
                  <input
                    type="number"
                    value={directChannelImprovementPct}
                    onChange={(e) => setDirectChannelImprovementPct(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Avoided Third-Party OTA Commission (%)
                  </label>
                  <input
                    type="number"
                    value={avoidedOtaCommissionRatePct}
                    onChange={(e) => setAvoidedOtaCommissionRatePct(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Additional Monthly Events / Banquets
                  </label>
                  <input
                    type="number"
                    value={additionalMonthlyEvents}
                    onChange={(e) => setAdditionalMonthlyEvents(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. Car Hire & Mobility Inputs */}
            <div className="p-6 rounded-2xl bg-shadow-darkest/90 border border-champagne-200/10 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-glow font-semibold">
                  02 &bull; Car Hire &amp; Chauffeur Mobility
                </span>
                <span className="text-[10px] font-mono text-ivory-warm/40">Transit Yield</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="text-ivory-warm/70 block mb-1">Monthly Completed Trips</label>
                  <input
                    type="number"
                    value={monthlyCarHireBookings}
                    onChange={(e) => setMonthlyCarHireBookings(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">Avg Transaction Value (₦)</label>
                  <input
                    type="number"
                    value={avgCarHireValue}
                    onChange={(e) => setAvgCarHireValue(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">Hotel-Owned Fleet Share (%)</label>
                  <input
                    type="number"
                    value={hotelFleetSharePct}
                    onChange={(e) => setHotelFleetSharePct(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 3. Companion Inputs (Shown if toggled) */}
            {includeCompanion && (
              <div className="p-6 rounded-2xl bg-amber-glow/5 border border-amber-glow/30 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-amber-glow/20">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-glow font-semibold">
                    03 &bull; Joclarif Companion (Optional Scenario Model)
                  </span>
                  <span className="text-[10px] font-mono text-amber-glow/70">
                    Subject to Governance
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="text-ivory-warm/70 block mb-1">Monthly Completed Bookings</label>
                    <input
                      type="number"
                      value={companionMonthlyBookings}
                      onChange={(e) => setCompanionMonthlyBookings(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-ivory-warm/70 block mb-1">Avg Lawful Booking Value (₦)</label>
                    <input
                      type="number"
                      value={companionAvgBookingValue}
                      onChange={(e) => setCompanionAvgBookingValue(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-ivory-warm/70 block mb-1">Platform Commission (%)</label>
                    <input
                      type="number"
                      value={companionCommissionRatePct}
                      onChange={(e) => setCompanionCommissionRatePct(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 4. Cash Savings from Operational Audit */}
            <div className="p-6 rounded-2xl bg-shadow-darkest/90 border border-champagne-200/10 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  04 &bull; Verifiable Operational Cash Savings
                </span>
                <span className="text-[10px] font-mono text-emerald-400/70">Expense Cuts</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Monthly Overtime &amp; Temp Agency Savings (₦)
                  </label>
                  <input
                    type="number"
                    value={monthlyOvertimeReduction}
                    onChange={(e) => setMonthlyOvertimeReduction(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Monthly Inventory Loss / Shrinkage Reduction (₦)
                  </label>
                  <input
                    type="number"
                    value={monthlyInventoryLossReduction}
                    onChange={(e) => setMonthlyInventoryLossReduction(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Monthly Maintenance &amp; Equipment Protection (₦)
                  </label>
                  <input
                    type="number"
                    value={monthlyMaintenanceSavings}
                    onChange={(e) => setMonthlyMaintenanceSavings(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Payment Reconciliation Leakage Recovery (₦)
                  </label>
                  <input
                    type="number"
                    value={monthlyPaymentReconciliationImprovement}
                    onChange={(e) =>
                      setMonthlyPaymentReconciliationImprovement(Number(e.target.value))
                    }
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 5. Project Investment & Operating Costs Inputs */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#22160b]/80 to-[#140c06] border border-amber-glow/40 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-glow font-bold">
                  05 &bull; Proposed Investment &amp; Monthly Operating Costs
                </span>
                <span className="text-[10px] font-mono text-amber-glow/70">Editable Parameters</span>
              </div>

              {/* CRITICAL: BLANK INITIAL INVESTMENT INPUT */}
              <div className="p-4 rounded-xl bg-shadow-darkest border border-amber-glow/60 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-amber-glow font-semibold">
                    Initial Project Investment (₦)
                  </label>
                  <span className="text-[10px] font-mono text-champagne-200/50">
                    Enter during commercial discussion
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="Enter proposed investment during discussion (₦)"
                  value={initialInvestmentInput}
                  onChange={(e) => setInitialInvestmentInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-shadow-main border border-amber-glow/50 text-amber-glow font-mono text-sm focus:ring-1 focus:ring-amber-glow outline-none placeholder:text-ivory-warm/30"
                />
                <p className="text-[10px] text-ivory-warm/50 font-light">
                  Strict Presentation Rule: No suggested or preset investment amount is displayed.
                  The presenter enters this figure live during executive commercial alignment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Monthly Cloud &amp; Infrastructure (₦)
                  </label>
                  <input
                    type="number"
                    value={monthlySoftwareInfraCost}
                    onChange={(e) => setMonthlySoftwareInfraCost(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
                <div>
                  <label className="text-ivory-warm/70 block mb-1">
                    Monthly Support &amp; Maintenance (₦)
                  </label>
                  <input
                    type="number"
                    value={monthlySupportMaintenanceCost}
                    onChange={(e) => setMonthlySupportMaintenanceCost(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-shadow-main border border-champagne-200/20 text-champagne-100 font-mono text-xs focus:border-amber-glow outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Commercial Returns & Visual Trajectory (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#180f08]/98 via-[#120a05] to-[#0d0804] border border-amber-glow/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-champagne-200/10">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow">
                  CALCULATED EXECUTIVE SUMMARY
                </span>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  REAL-TIME DYNAMIC
                </span>
              </div>

              {/* Master Benefit KPI */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-ivory-warm/60">
                  Annual Net Operating Benefit:
                </span>
                <div className="font-serif text-3xl sm:text-4xl text-amber-glow font-light">
                  {formatNaira(calculations.annualNetOperatingBenefit)}
                </div>
                <span className="text-xs text-ivory-warm/50 font-light block">
                  ({formatNaira(calculations.monthlyNetOperatingBenefit)} / month net operating gain)
                </span>
              </div>

              {/* Payback & First-Year ROI Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15 space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-warm/50 block">
                    Investment Payback:
                  </span>
                  <span className="text-sm sm:text-base font-serif text-champagne-100 font-medium block">
                    {calculations.paybackMonthsText}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-shadow-darkest/90 border border-champagne-200/15 space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-warm/50 block">
                    First-Year ROI:
                  </span>
                  <span className="text-sm sm:text-base font-serif text-amber-glow font-medium block">
                    {calculations.firstYearRoiPctText}
                  </span>
                </div>
              </div>

              {/* 3-Year Cumulative Benefit */}
              <div className="p-4 rounded-xl bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-champagne-200">
                  3-Year Cumulative Cash Benefit:
                </span>
                <span className="text-base sm:text-lg font-serif text-amber-glow font-bold">
                  {formatNaira(calculations.threeYearCumulativeBenefit)}
                </span>
              </div>

              {/* Detailed Breakdown Rows */}
              <div className="space-y-2.5 pt-4 border-t border-champagne-200/10 text-xs">
                <div className="flex justify-between text-ivory-warm/75">
                  <span>Gross Monthly Revenue Contribution:</span>
                  <span className="font-mono text-champagne-100">
                    +{formatNaira(calculations.totalMonthlyRevenue)}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Gross Monthly Verifiable Cash Savings:</span>
                  <span className="font-mono">
                    +{formatNaira(calculations.totalMonthlyCashSavings)}
                  </span>
                </div>
                <div className="flex justify-between text-rose-400/90">
                  <span>Monthly Recurring Operating Costs:</span>
                  <span className="font-mono">
                    -{formatNaira(calculations.totalMonthlyRecurringCosts)}
                  </span>
                </div>
              </div>

              {/* Visual Breakdown Proportions */}
              <div className="space-y-2 pt-4 border-t border-champagne-200/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-warm/50 block">
                  Monthly Contribution Composition
                </span>
                <div className="w-full h-3 rounded-full bg-shadow-darkest overflow-hidden flex">
                  <div
                    style={{
                      width: `${
                        (calculations.totalMonthlyRevenue /
                          (calculations.totalMonthlyRevenue +
                            calculations.totalMonthlyCashSavings || 1)) *
                        100
                      }%`,
                    }}
                    className="bg-amber-glow h-full"
                    title="Revenue Contribution"
                  />
                  <div
                    style={{
                      width: `${
                        (calculations.totalMonthlyCashSavings /
                          (calculations.totalMonthlyRevenue +
                            calculations.totalMonthlyCashSavings || 1)) *
                        100
                      }%`,
                    }}
                    className="bg-emerald-500 h-full"
                    title="Cash Savings"
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-ivory-warm/60">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-glow inline-block" />
                    Revenue Channels
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    Operational Savings
                  </span>
                </div>
              </div>
            </div>

            {/* Methodology & Assumptions Footer Note */}
            <div className="p-4 rounded-xl bg-shadow-darkest border border-champagne-200/10 text-[11px] text-ivory-warm/60 font-light leading-relaxed space-y-1">
              <span className="text-amber-glow font-mono text-[10px] uppercase tracking-wider block">
                Financial Modeling Principles:
              </span>
              <p>
                1. Only contribution profit is modelled, not raw transaction volume. <br />
                2. Overtime/temp reductions represent measurable expense savings; productive staff
                capacity is reported separately. <br />
                3. Zero price or revenue double-counting across hotel folios and partner bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
