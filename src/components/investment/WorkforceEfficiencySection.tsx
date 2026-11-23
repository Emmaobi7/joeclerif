"use client";

import React, { useState } from "react";
import { DEPARTMENT_WORKFLOWS, formatNaira } from "@/data/investmentMockData";
import {
  Users,
  Clock,
  ArrowRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Layers,
  HeartHandshake,
} from "lucide-react";

export function WorkforceEfficiencySection() {
  // Calculator interactive state
  const [staffCount, setStaffCount] = useState<number>(18);
  const [monthlyCostPerStaff, setMonthlyCostPerStaff] = useState<number>(180000);
  const [weeklyAdminHours, setWeeklyAdminHours] = useState<number>(14);
  const [automationPct, setAutomationPct] = useState<number>(60);
  const [redeployPct, setRedeployPct] = useState<number>(75);
  const [monthlyOvertimeSavings, setMonthlyOvertimeSavings] = useState<number>(450000);

  // Derived financial and capacity calculations
  const totalWeeklyAdminHoursAllStaff = staffCount * weeklyAdminHours;
  const totalMonthlyAdminHours = totalWeeklyAdminHoursAllStaff * 4.33;
  const monthlyHoursRecovered = totalMonthlyAdminHours * (automationPct / 100);
  const fteCapacityReleased = monthlyHoursRecovered / 160;

  const hourlyWageEquivalent = monthlyCostPerStaff / 160;
  const annualCapacityValueReleased = monthlyHoursRecovered * hourlyWageEquivalent * 12;
  const annualCashSavings = monthlyOvertimeSavings * 12;

  return (
    <section
      id="section-workforce"
      className="relative w-full py-24 border-b border-champagne-200/10 overflow-hidden bg-[#0D0804]"
    >
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-24 space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-glow px-2.5 py-1 rounded bg-amber-glow/10 border border-amber-glow/30">
              OPERATIONAL EXCELLENCE
            </span>
            <span className="text-[10px] font-mono text-champagne-200/60 uppercase">
              Workforce Capacity &amp; Efficiency
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-champagne-100 tracking-tight leading-[1.08]">
            Less repetitive work. <br />
            <span className="italic font-extralight text-amber-glow">
              More productive operations.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed">
            Joclarif does not merely add technology to existing paper workflows. It automates
            monotonous coordination, eliminates spreadsheet reconciliation, and frees staff to
            deliver higher-touch hospitality that drives guest loyalty and revenue.
          </p>
        </div>

        {/* Operational Before & After Grid Across 6 Departments */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-champagne-200 font-semibold">
              Departmental Operational Modernization
            </span>
            <span className="text-[10px] font-mono text-ivory-warm/50">
              6 Core Operational Units
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENT_WORKFLOWS.map((dept) => (
              <div
                key={dept.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-shadow-main/90 to-shadow-darkest border border-champagne-200/10 hover:border-amber-glow/30 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
                    <h3 className="font-serif text-lg text-champagne-100 font-normal">
                      {dept.department}
                    </h3>
                    <span className="text-[10px] font-mono text-amber-glow px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/20">
                      +{dept.hoursRecoveredPerWeek}h/wk recovered
                    </span>
                  </div>

                  {/* Before vs After */}
                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-rose-400/80 block">
                        Conventional Disconnected Process:
                      </span>
                      <ul className="space-y-1 text-[11px] text-ivory-warm/65 font-light list-disc list-inside">
                        {dept.beforeProcesses.map((p, pI) => (
                          <li key={pI} className="line-clamp-2">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-champagne-200/5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-amber-glow block">
                        Joclarif Connected Standard:
                      </span>
                      <ul className="space-y-1 text-[11px] text-champagne-100/90 font-light list-disc list-inside">
                        {dept.afterProcesses.map((p, pI) => (
                          <li key={pI} className="line-clamp-2">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-shadow-darkest border border-champagne-200/10 text-[11px] text-ivory-warm/75 font-light italic">
                  &ldquo;{dept.redeploymentBenefit}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Workforce Efficiency Calculator */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#180f08]/95 via-[#120a05] to-[#0d0804] border border-champagne-200/15 shadow-2xl space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-glow" />
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-glow">
                  INTERACTIVE SIMULATOR
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-champagne-100 font-light mt-1">
                Workforce Capacity &amp; Expense Impact Calculator
              </h3>
            </div>
            <span className="text-xs text-ivory-warm/60 font-light max-w-sm">
              Adjust your operational staffing assumptions to model capacity released versus actual
              cash savings.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Sliders & Fields (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Staff Count */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-ivory-warm/80 font-light">
                    Staff in Admin &amp; Operational Roles
                  </span>
                  <span className="font-mono text-amber-glow font-semibold">
                    {staffCount} personnel
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={staffCount}
                  onChange={(e) => setStaffCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#22160b] rounded-lg appearance-none cursor-pointer accent-amber-glow"
                />
              </div>

              {/* Monthly Salary per Staff */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-ivory-warm/80 font-light">
                    Average Monthly Cost per Employee
                  </span>
                  <span className="font-mono text-amber-glow font-semibold">
                    {formatNaira(monthlyCostPerStaff)}
                  </span>
                </div>
                <input
                  type="range"
                  min="80000"
                  max="450000"
                  step="10000"
                  value={monthlyCostPerStaff}
                  onChange={(e) => setMonthlyCostPerStaff(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#22160b] rounded-lg appearance-none cursor-pointer accent-amber-glow"
                />
              </div>

              {/* Weekly Repetitive Admin Hours */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-ivory-warm/80 font-light">
                    Repetitive Admin Hours per Person / Week
                  </span>
                  <span className="font-mono text-amber-glow font-semibold">
                    {weeklyAdminHours} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="28"
                  step="1"
                  value={weeklyAdminHours}
                  onChange={(e) => setWeeklyAdminHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#22160b] rounded-lg appearance-none cursor-pointer accent-amber-glow"
                />
              </div>

              {/* % Automatable */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-ivory-warm/80 font-light">
                    Estimated Automation / Streamlining Potential
                  </span>
                  <span className="font-mono text-amber-glow font-semibold">
                    {automationPct}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="85"
                  step="5"
                  value={automationPct}
                  onChange={(e) => setAutomationPct(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#22160b] rounded-lg appearance-none cursor-pointer accent-amber-glow"
                />
              </div>

              {/* Direct Overtime Reduction (Cash) */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-ivory-warm/80 font-light">
                    Monthly Reduction in Overtime &amp; Temp Agency Fees (Direct Cash)
                  </span>
                  <span className="font-mono text-amber-glow font-semibold">
                    {formatNaira(monthlyOvertimeSavings)} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1500000"
                  step="50000"
                  value={monthlyOvertimeSavings}
                  onChange={(e) => setMonthlyOvertimeSavings(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#22160b] rounded-lg appearance-none cursor-pointer accent-amber-glow"
                />
              </div>
            </div>

            {/* Calculated Results Split: Capacity Released vs Cash Savings (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              {/* Outcome 1: Productive Capacity Released */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#22160b]/90 to-[#140c06] border border-champagne-200/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-amber-glow">
                    OUTCOME 01: CAPACITY RELEASED
                  </span>
                  <span className="text-[10px] font-mono text-ivory-warm/50">
                    Hospitality Uplift
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light">
                      {Math.round(monthlyHoursRecovered)} hrs
                    </span>
                    <span className="block text-[11px] text-ivory-warm/60 font-light">
                      Admin Hours Recovered / Mo
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif text-amber-glow font-light">
                      {fteCapacityReleased.toFixed(1)} FTEs
                    </span>
                    <span className="block text-[11px] text-ivory-warm/60 font-light">
                      Equivalent Staff Capacity Freed
                    </span>
                  </div>
                </div>

                <p className="text-xs text-ivory-warm/75 font-light leading-relaxed pt-2 border-t border-champagne-200/10">
                  Staff spend less time on repetitive data entry and more time welcoming guests,
                  coordinating banquet VIPs, and driving on-property F&amp;B spend.
                </p>
              </div>

              {/* Outcome 2: Measurable Cash Savings */}
              <div className="p-6 rounded-2xl bg-amber-glow/10 border border-amber-glow/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-amber-glow font-semibold">
                    OUTCOME 02: CASH SAVINGS
                  </span>
                  <span className="text-[10px] font-mono text-amber-glow/80">
                    Measurable Expense Cut
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light">
                      {formatNaira(monthlyOvertimeSavings)}
                    </span>
                    <span className="block text-[11px] text-ivory-warm/60 font-light">
                      Monthly Cash Saved
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif text-amber-glow font-light">
                      {formatNaira(annualCashSavings)}
                    </span>
                    <span className="block text-[11px] text-ivory-warm/60 font-light">
                      Annual Cash Expense Reduction
                    </span>
                  </div>
                </div>

                <p className="text-xs text-ivory-warm/80 font-light leading-relaxed pt-2 border-t border-amber-glow/20">
                  Direct, verifiable reduction in unmonitored weekend overtime claims, temporary
                  event staffing agency fees, and payroll leakage.
                </p>
              </div>

              {/* Core Philosophy Advisory */}
              <div className="p-4 rounded-xl bg-shadow-darkest border border-champagne-200/10 text-xs text-ivory-warm/70 font-light leading-relaxed flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
                <p>
                  <strong>No Arbitrary Layoffs Assumed:</strong> The stronger commercial proposition
                  is a hotel that can scale its revenue, occupancy, and banquet volume by 2x without
                  needing its administrative headcount to grow at the same rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
