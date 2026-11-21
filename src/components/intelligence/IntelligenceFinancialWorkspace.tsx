"use client";

import React, { useState } from "react";
import {
  FINANCIAL_METRICS,
  DEPARTMENT_REVENUES,
  EXPENSE_DISTRIBUTION,
  MONTHLY_FINANCIAL_TRENDS,
  PENDING_SUPPLIERS,
} from "@/data/intelligenceMockData";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  BarChart3,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  AlertCircle,
  FileText,
} from "lucide-react";

interface Props {
  onTriggerAssistantQuery: (queryText: string) => void;
}

export function IntelligenceFinancialWorkspace({ onTriggerAssistantQuery }: Props) {
  const [selectedMonth, setSelectedMonth] = useState("Nov (MTD)");

  const exampleQueries = [
    "How much revenue did we generate this month?",
    "Which department has the highest operating expenses?",
    "Compare this month's revenue with last month.",
    "What are our outstanding supplier payments?",
    "What is our historical room revenue from 2023 compared to this year?",
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Workspace 02
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              General Ledger &bull; Real-Time Currency in Nigerian Naira (₦)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-light">
            Financial Intelligence &amp; Performance
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
            Unified financial consolidation reconciling live PMS guest charges, Savannah Dining F&amp;B folios,
            and legacy accounting ledger archives.
          </p>
        </div>

        {/* Intelligence Query Launcher Pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="text-[11px] font-mono text-champagne-300/60 uppercase">
            Quick AI Audit:
          </div>
          <button
            type="button"
            onClick={() => onTriggerAssistantQuery("Give me an overview of the hotel's operational performance this month.")}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-amber-glow/40 bg-amber-glow/10 text-amber-glow text-xs font-mono hover:bg-amber-glow hover:text-shadow-darkest transition-all shadow-glow"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Audit Month P&amp;L</span>
          </button>
        </div>
      </div>

      {/* 4 Executive Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FINANCIAL_METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury relative overflow-hidden"
          >
            <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
              {metric.title}
            </div>
            <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2 tracking-tight">
              {metric.value}
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <span
                className={`text-[11px] font-mono font-medium ${
                  metric.isPositive ? "text-emerald-400" : "text-amber-400"
                }`}
              >
                {metric.trend}
              </span>
            </div>
            <div className="text-[11px] text-ivory-warm/60 mt-2 leading-relaxed">
              {metric.subtext}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Visualizations: Monthly Trends & Departmental Profitability */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Monthly Revenue vs. Expenditure Trend Chart */}
        <div className="lg:col-span-8 p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-champagne-200/10">
            <div>
              <h3 className="font-serif text-lg text-ivory-warm font-light">
                Monthly Operating Trajectory (2026)
              </h3>
              <p className="text-xs text-ivory-warm/60 mt-0.5">
                Gross Revenue vs. Operating Expenses in Millions of Naira (₦M)
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#F5B841]" />
                <span className="text-champagne-200/80">Revenue</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#80613A]" />
                <span className="text-champagne-200/80">OpEx</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#22C55E]" />
                <span className="text-champagne-200/80">NOI Profit</span>
              </div>
            </div>
          </div>

          {/* Custom SVG Bar & Trend Chart */}
          <div className="relative w-full h-64 pt-4">
            <div className="absolute inset-0 grid grid-rows-4 pointer-events-none opacity-10">
              <div className="border-b border-champagne-200" />
              <div className="border-b border-champagne-200" />
              <div className="border-b border-champagne-200" />
              <div className="border-b border-champagne-200" />
            </div>

            <div className="relative h-full flex items-end justify-between gap-3 sm:gap-6 px-2 sm:px-6">
              {MONTHLY_FINANCIAL_TRENDS.map((item) => {
                const maxVal = 55;
                const revHeight = (item.revenue / maxVal) * 100;
                const opexHeight = (item.opex / maxVal) * 100;
                const isSelected = selectedMonth === item.month;

                return (
                  <div
                    key={item.month}
                    onClick={() => setSelectedMonth(item.month)}
                    className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-full flex items-end justify-center gap-1 sm:gap-2 h-48">
                      {/* Revenue Bar */}
                      <div
                        style={{ height: `${revHeight}%` }}
                        className={`w-3 sm:w-5 rounded-t-sm transition-all duration-500 relative group-hover:brightness-125 ${
                          isSelected ? "bg-[#F5B841] shadow-glow" : "bg-[#F5B841]/75"
                        }`}
                        title={`Revenue: ₦${item.revenue}M`}
                      />
                      {/* OpEx Bar */}
                      <div
                        style={{ height: `${opexHeight}%` }}
                        className="w-3 sm:w-5 bg-[#80613A]/80 rounded-t-sm transition-all duration-500 hover:brightness-125"
                        title={`OpEx: ₦${item.opex}M`}
                      />
                    </div>
                    <span
                      className={`text-[10px] font-mono transition-colors ${
                        isSelected ? "text-amber-glow font-bold" : "text-ivory-warm/60"
                      }`}
                    >
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d0804]/80 border border-champagne-200/10 text-xs text-ivory-warm/75 flex items-center justify-between">
            <span>
              Selected Period: <strong className="text-champagne-200">{selectedMonth}</strong> &bull;
              Revenue: <strong className="text-amber-glow">₦48.65M</strong> &bull; Net Profit:{" "}
              <strong className="text-emerald-400">₦19.23M (39.5%)</strong>
            </span>
            <span className="text-[10px] font-mono text-champagne-300/60 hidden sm:inline">
              Deterministic Calculation
            </span>
          </div>
        </div>

        {/* Revenue Contribution by Department */}
        <div className="lg:col-span-4 p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-5">
          <div className="pb-3 border-b border-champagne-200/10">
            <h3 className="font-serif text-lg text-ivory-warm font-light">
              Revenue by Department
            </h3>
            <p className="text-xs text-ivory-warm/60 mt-0.5">
              Month-to-date departmental contribution
            </p>
          </div>

          <div className="space-y-4">
            {DEPARTMENT_REVENUES.map((dept, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-ivory-warm/90">{dept.department}</span>
                  <span className="text-amber-glow font-medium">{dept.amount}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-shadow-darkest overflow-hidden border border-champagne-200/10">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${dept.share}%`, backgroundColor: dept.color }}
                  />
                </div>
                <div className="text-[10px] font-mono text-champagne-300/60 text-right">
                  {dept.share}% of gross turnover
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-champagne-200/10 text-[11px] text-ivory-warm/65 leading-relaxed">
            Guest Rooms generate over half of hotel revenue. The Savannah Dining F&amp;B operation contributes
            30.4%, representing high recurring dining velocity.
          </div>
        </div>
      </div>

      {/* Expense Distribution & Supplier Liabilities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Operating Expense Breakdown */}
        <div className="lg:col-span-5 p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-4">
          <div className="pb-3 border-b border-champagne-200/10">
            <h3 className="font-serif text-lg text-ivory-warm font-light">
              Operating Expenditure (OpEx)
            </h3>
            <p className="text-xs text-ivory-warm/60 mt-0.5">
              Total monthly expenditure: ₦29,420,000
            </p>
          </div>

          <div className="space-y-3">
            {EXPENSE_DISTRIBUTION.map((exp, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <div className="text-xs text-ivory-warm/90 font-medium">{exp.category}</div>
                  <div className="text-[10px] font-mono text-champagne-300/60">
                    {exp.share}% of total expenditure
                  </div>
                </div>
                <div className="text-xs font-mono font-semibold text-champagne-200">
                  {exp.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Supplier Liabilities */}
        <div className="lg:col-span-7 p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-champagne-200/10">
            <div>
              <h3 className="font-serif text-lg text-ivory-warm font-light">
                Pending Supplier Liabilities
              </h3>
              <p className="text-xs text-ivory-warm/60 mt-0.5">
                5 verified vendor invoices totaling ₦4,850,000 awaiting disbursement
              </p>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-amber-glow/15 border border-amber-glow/30 text-amber-glow">
              30-Day Terms
            </span>
          </div>

          <div className="space-y-2.5 overflow-x-auto">
            {PENDING_SUPPLIERS.map((sup, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-serif text-champagne-200 font-medium text-sm">
                    {sup.vendor}
                  </div>
                  <div className="text-[11px] text-ivory-warm/60">{sup.service}</div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0">
                  <div className="font-mono font-semibold text-amber-glow text-sm">
                    {sup.amount}
                  </div>
                  <div className="text-[10px] font-mono text-champagne-300/60">
                    Due: {sup.dueDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clickable Intelligence Queries Prompt Deck */}
      <div className="p-6 rounded-2xl border border-amber-glow/30 bg-gradient-to-r from-shadow-darkest via-shadow-main to-shadow-darkest shadow-luxury">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-amber-glow" />
          <h4 className="font-serif text-base text-champagne-200 font-light">
            Ask Joclarif Financial Intelligence in Natural Language
          </h4>
        </div>
        <p className="text-xs text-ivory-warm/70 mb-4 max-w-xl">
          Click any query below to launch the enterprise assistant and view underlying ledger evidence.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {exampleQueries.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onTriggerAssistantQuery(q)}
              className="px-3.5 py-2 rounded-xl border border-champagne-200/20 bg-shadow-darkest/90 hover:border-amber-glow hover:bg-amber-glow/10 text-xs font-mono text-champagne-200/90 hover:text-white transition-all flex items-center gap-2 text-left"
            >
              <span>{q}</span>
              <ArrowRight className="w-3 h-3 text-amber-glow shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
