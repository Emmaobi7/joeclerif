"use client";

import React, { useState } from "react";
import { EMPLOYEES, EmployeeRecord } from "@/data/intelligenceMockData";
import {
  Users,
  Clock,
  CalendarCheck,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  Search,
  Filter,
} from "lucide-react";

interface Props {
  onTriggerAssistantQuery: (queryText: string) => void;
}

export function IntelligencePeopleWorkspace({ onTriggerAssistantQuery }: Props) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const departments = ["All", "Front Office", "Food & Beverage", "Housekeeping", "Engineering", "Finance & Admin", "Security"];

  const filteredEmployees = EMPLOYEES.filter((emp) => {
    const matchesDept = selectedDepartment === "All" || emp.department === selectedDepartment;
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const hrQueries = [
    "How many employees are currently on duty and are there any staffing shortages?",
    "Which department has the highest staffing cost?",
    "Who is scheduled to work the night shift today?",
    "Show pending leave requests awaiting approval.",
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-glow px-2.5 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Workspace 03
            </span>
            <span className="text-xs font-mono text-champagne-300/60">
              Biometric Attendance &bull; ZKTeco Hardware Integration
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-light">
            Human Resources &amp; Workforce Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-ivory-warm/70 mt-1 max-w-2xl">
            Live duty rosters, biometric clock-in verification, shift coverage, and departmental payroll allocations.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onTriggerAssistantQuery("How many employees are currently on duty and are there any staffing shortages?")}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-amber-glow/40 bg-amber-glow/10 text-amber-glow text-xs font-mono hover:bg-amber-glow hover:text-shadow-darkest transition-all shadow-glow"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Audit Shift Coverage</span>
        </button>
      </div>

      {/* 4 Key Workforce KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Active Staff on Duty
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            38 / 64 Staff
          </div>
          <div className="text-[11px] font-mono text-emerald-400 mt-1">
            Morning Shift (07:00 – 15:00)
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Full duty desk and housekeeping coverage active with zero vacant posts.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Biometric Attendance
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            94.2% Rate
          </div>
          <div className="text-[11px] font-mono text-emerald-400 mt-1">
            0 Unexplained Absences
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Real-time biometric terminal punches reconciled against duty schedules.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Approved Staff Leave
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            6 on Leave
          </div>
          <div className="text-[11px] font-mono text-champagne-300/80 mt-1">
            4 Pending Requests
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Pre-scheduled annual rotation with verified departmental relief workers.
          </div>
        </div>

        <div className="p-5 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury">
          <div className="text-[11px] font-mono text-champagne-300/70 uppercase">
            Monthly Payroll Outlay
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-champagne-100 font-light mt-2">
            ₦8,400,000
          </div>
          <div className="text-[11px] font-mono text-amber-glow mt-1">
            28.5% of Total OpEx
          </div>
          <div className="text-[11px] text-ivory-warm/60 mt-2">
            Consolidated salaries across all hospitality, security, and maintenance teams.
          </div>
        </div>
      </div>

      {/* Role-Based Privacy Notice */}
      <div className="p-4 rounded-xl border border-champagne-200/15 bg-shadow-darkest/80 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-glow shrink-0" />
          <span className="text-ivory-warm/80">
            <strong>NDPR Workforce Safeguard:</strong> Granular compensation details and private employee banking records are restricted based on assigned executive credentials.
          </span>
        </div>
        <span className="text-[10px] font-mono text-champagne-300/60 uppercase shrink-0 hidden sm:inline">
          Role-Enforced
        </span>
      </div>

      {/* Department Filter & Search Bar */}
      <div className="p-6 rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest/90 backdrop-blur-md shadow-luxury space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedDepartment === dept
                    ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                    : "text-ivory-warm/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-champagne-300/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search staff name or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-4 py-1.5 rounded-lg bg-shadow-darkest border border-champagne-200/15 text-xs text-ivory-warm placeholder:text-ivory-warm/30 focus:outline-none focus:border-amber-glow/60 w-full sm:w-60"
            />
          </div>
        </div>

        {/* Interactive Employee Duty Roster */}
        <div className="space-y-2 overflow-x-auto">
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="p-4 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-amber-glow/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-glow/15 border border-amber-glow/30 flex items-center justify-center font-serif text-amber-glow text-xs font-medium">
                  {emp.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-serif text-sm text-champagne-200 font-medium">
                    {emp.name}
                  </div>
                  <div className="text-[11px] text-ivory-warm/60">
                    {emp.role} &bull; {emp.department}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <span className="text-ivory-warm/75">{emp.shift}</span>
                <span className="text-emerald-400 font-semibold">{emp.attendanceRate} Attendance</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] ${
                    emp.status === "On Duty"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {emp.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clickable HR Queries */}
      <div className="p-6 rounded-2xl border border-amber-glow/30 bg-gradient-to-r from-shadow-darkest via-shadow-main to-shadow-darkest shadow-luxury">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-amber-glow" />
          <h4 className="font-serif text-base text-champagne-200 font-light">
            Ask Joclarif Workforce Intelligence
          </h4>
        </div>
        <p className="text-xs text-ivory-warm/70 mb-4 max-w-xl">
          Click any query below to audit shifts, staffing costs, or attendance records with verified clock-in evidence.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {hrQueries.map((q, idx) => (
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
