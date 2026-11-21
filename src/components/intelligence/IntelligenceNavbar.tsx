"use client";

import React, { useState } from "react";
import {
  UserRole,
  WorkspaceId,
  ROLES,
  RoleConfig,
} from "@/data/intelligenceMockData";
import {
  Shield,
  Layers,
  DollarSign,
  Users,
  Wrench,
  Activity,
  Sparkles,
  Database,
  History,
  ChevronDown,
  ArrowLeft,
  Menu,
  X,
  Lock,
} from "lucide-react";

interface Props {
  activeWorkspace: WorkspaceId;
  onSelectWorkspace: (ws: WorkspaceId) => void;
  activeRole: UserRole;
  onChangeRole: (role: UserRole) => void;
}

export function IntelligenceNavbar({
  activeWorkspace,
  onSelectWorkspace,
  activeRole,
  onChangeRole,
}: Props) {
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentRoleConfig: RoleConfig = ROLES[activeRole];

  const workspaces: { id: WorkspaceId; label: string; icon: any; num: string }[] = [
    { id: "overview", label: "Overview", icon: Layers, num: "01" },
    { id: "financials", label: "Financials", icon: DollarSign, num: "02" },
    { id: "people", label: "People", icon: Users, num: "03" },
    { id: "assets", label: "Assets", icon: Wrench, num: "04" },
    { id: "operations", label: "Operations", icon: Activity, num: "05" },
    { id: "assistant", label: "Intelligence", icon: Sparkles, num: "06" },
    { id: "datasources", label: "Data Sources", icon: Database, num: "07" },
    { id: "activity", label: "Activity", icon: History, num: "08" },
  ];

  const isWorkspaceAllowed = (wsId: WorkspaceId) => {
    return currentRoleConfig.allowedWorkspaces.includes(wsId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0804]/95 border-b border-champagne-200/10 backdrop-blur-xl">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4">
        {/* Brand & Return */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-champagne-200/15 bg-shadow-darkest text-xs font-mono text-champagne-200/70 hover:text-white hover:border-amber-glow transition-all"
            title="Return to Presentation"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Presentation</span>
          </a>

          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg tracking-[0.25em] text-champagne-200 uppercase font-light">
              Joclarif
            </span>
            <span className="text-[10px] font-mono tracking-widest text-amber-glow uppercase px-2 py-0.5 rounded bg-amber-glow/10 border border-amber-glow/30">
              Intelligence
            </span>
          </div>
        </div>

        {/* Desktop Workspace Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-shadow-darkest/90 border border-champagne-200/10">
          {workspaces.map((ws) => {
            const Icon = ws.icon;
            const allowed = isWorkspaceAllowed(ws.id);
            const isCurrent = activeWorkspace === ws.id;

            return (
              <button
                key={ws.id}
                type="button"
                disabled={!allowed}
                onClick={() => onSelectWorkspace(ws.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isCurrent
                    ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                    : allowed
                    ? "text-ivory-warm/75 hover:text-white hover:bg-white/5"
                    : "opacity-35 cursor-not-allowed text-ivory-warm/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{ws.label}</span>
                {!allowed && <Lock className="w-2.5 h-2.5 ml-0.5" />}
              </button>
            );
          })}
        </nav>

        {/* Role Selector Simulated Badge */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-amber-glow/40 bg-amber-glow/10 hover:bg-amber-glow/20 transition-all text-left"
          >
            <Shield className="w-3.5 h-3.5 text-amber-glow shrink-0" />
            <div className="text-[10px] leading-tight">
              <div className="text-champagne-300/60 uppercase font-mono tracking-wider">Role:</div>
              <div className="font-serif text-xs text-champagne-200 font-medium">
                {currentRoleConfig.title}
              </div>
            </div>
            <ChevronDown className="w-3 h-3 text-amber-glow/70 ml-1" />
          </button>

          {roleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 rounded-xl bg-[#0d0804] border border-amber-glow/40 shadow-luxury p-2 z-50 backdrop-blur-2xl animate-fadeIn">
              <div className="px-3 py-2 border-b border-champagne-200/10 text-[10px] font-mono text-champagne-300/60 uppercase">
                Simulated Permission Profiles
              </div>
              <div className="py-1 space-y-1">
                {(Object.keys(ROLES) as UserRole[]).map((roleKey) => {
                  const cfg = ROLES[roleKey];
                  const isSelected = activeRole === roleKey;
                  return (
                    <button
                      key={roleKey}
                      type="button"
                      onClick={() => {
                        onChangeRole(roleKey);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-lg text-xs transition-all ${
                        isSelected
                          ? "bg-amber-glow/20 border border-amber-glow/50 text-white"
                          : "hover:bg-white/5 text-ivory-warm/80"
                      }`}
                    >
                      <div className="flex items-center justify-between font-serif text-sm">
                        <span className={isSelected ? "text-amber-glow font-medium" : "text-champagne-200"}>
                          {cfg.title}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-shadow-darkest border border-champagne-200/15 text-champagne-300">
                          {cfg.badge}
                        </span>
                      </div>
                      <p className="text-[10px] text-ivory-warm/60 mt-1 line-clamp-2">
                        {cfg.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg border border-champagne-200/15 text-champagne-200"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 py-4 border-t border-champagne-200/10 bg-[#0d0804] space-y-1">
          <div className="text-[10px] font-mono text-champagne-300/60 uppercase px-2 pb-1">
            Workspaces
          </div>
          {workspaces.map((ws) => {
            const Icon = ws.icon;
            const allowed = isWorkspaceAllowed(ws.id);
            const isCurrent = activeWorkspace === ws.id;

            return (
              <button
                key={ws.id}
                type="button"
                disabled={!allowed}
                onClick={() => {
                  onSelectWorkspace(ws.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full p-2.5 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                  isCurrent
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : allowed
                    ? "text-ivory-warm/80 hover:bg-white/5"
                    : "opacity-40 cursor-not-allowed text-ivory-warm/40"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{ws.label}</span>
                </div>
                {!allowed && <Lock className="w-3 h-3" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
