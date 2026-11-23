import React from "react";
import { Building2, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-shadow-darkest border-t border-champagne-200/10 text-xs text-ivory-warm/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Concept Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-shadow-main border-hairline flex items-center justify-center text-amber-glow">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-normal tracking-[0.2em] text-ivory-warm">
                  JOCLARIF
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-amber-glow font-medium">
                  Dual-Platform Hospitality Ecosystem
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory-warm/65 leading-relaxed font-light max-w-sm">
              A bespoke architectural and commercial proposal for transforming guest experiences,
              banquet reservations, and hotel operations in Zaria, Kaduna State, Nigeria.
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-champagne-200 block mb-2 font-mono">
              Presentation Chapters
            </span>
            <ul className="space-y-1.5 text-xs text-ivory-warm/60 font-light">
              <li>
                <a href="#chapter-vision" className="hover:text-amber-glow transition-colors">
                  01 &bull; The Vision &amp; Architecture
                </a>
              </li>
              <li>
                <a href="#chapter-mobile" className="hover:text-amber-glow transition-colors">
                  02 &bull; The Mobile App Companion
                </a>
              </li>
              <li>
                <a href="#chapter-ecosystem" className="hover:text-amber-glow transition-colors">
                  03 &bull; The Connected Ecosystem
                </a>
              </li>
              <li>
                <a href="#chapter-mobility" className="hover:text-amber-glow transition-colors">
                  04 &bull; Joclarif Mobility &amp; Chauffeur
                </a>
              </li>
              <li>
                <a href="#chapter-demos" className="hover:text-amber-glow transition-colors">
                  05 &bull; Experience the Demos
                </a>
              </li>
              <li>
                <a href="#chapter-intelligence" className="hover:text-amber-glow transition-colors">
                  06 &bull; System Intelligence
                </a>
              </li>
              <li>
                <a href="#chapter-roadmap" className="hover:text-amber-glow transition-colors">
                  07 &bull; Roadmap &amp; Executive Brief
                </a>
              </li>
              <li className="pt-2 border-t border-champagne-200/10">
                <a href="/investment" className="text-amber-glow hover:underline flex items-center gap-1 font-mono text-[11px] font-semibold">
                  <span>&rarr; The Business Case (Commercial Strategy &amp; ROI)</span>
                </a>
              </li>
              <li>
                <a href="/intelligence" className="text-champagne-200/80 hover:text-amber-glow hover:underline flex items-center gap-1 font-mono text-[11px]">
                  <span>&rarr; Joclarif Intelligence (Command Centre)</span>
                </a>
              </li>
              <li>
                <a href="/companion" className="text-champagne-200/50 hover:text-amber-glow hover:underline flex items-center gap-1 font-mono text-[10px]">
                  <span>&rarr; Joclarif Companion (Private Showcase)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Compliance */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-champagne-200 block mb-2 font-mono">
              Compliance &amp; Engineering Standards
            </span>
            <div className="space-y-2 text-[11px] text-ivory-warm/60 font-light">
              <p className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-glow" />
                <span>NDPR (Nigeria Data Protection Regulation) Compliant Architecture</span>
              </p>
              <p className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-glow" />
                <span>PCI-DSS Level 1 Compliant Payment Gateway Handshake</span>
              </p>
              <p className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-glow" />
                <span>Deterministic AI Orchestration (Zero Price Hallucinations)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Proposal Restrictions Disclaimers */}
        <div className="pt-8 border-t border-champagne-200/10 space-y-3 text-[11px] text-ivory-warm/50 leading-relaxed font-light">
          <p>
            <strong className="text-ivory-warm/75 font-medium">Important Advisory:</strong> This proposal
            microsite is an independent technical and creative concept created for private demonstration
            to the management and ownership of Joclarif Hotel, Zaria, Nigeria. It is not an officially
            commissioned product, public booking portal, or verified operational representation.
          </p>
          <p>
            <strong className="text-ivory-warm/75 font-medium">Photography &amp; Visual Inspiration:</strong>{" "}
            All room, banquet, and hotel photographs utilized across this concept presentation are
            curated from high-resolution editorial hospitality collections to demonstrate art direction,
            layout aesthetics, and visual standards. They do not misrepresent themselves as actual
            photographs of Joclarif Hotel&apos;s physical premises.
          </p>
        </div>

        <div className="pt-4 border-t border-champagne-200/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory-warm/50 gap-2">
          <span>&copy; {new Date().getFullYear()} Joclarif Digital Hospitality Ecosystem Proposal. All rights reserved.</span>
          <span className="font-mono text-[10px] text-amber-glow">
            Next.js 14 &bull; TypeScript &bull; Three.js &bull; Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
