import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "champagne" | "bronze" | "umber" | "hairline";
  className?: string;
}

export function Badge({ children, variant = "champagne", className = "" }: BadgeProps) {
  const variantStyles = {
    amber: "bg-amber-glow/10 text-amber-glow border border-amber-glow/30",
    champagne: "bg-champagne-200/10 text-champagne-200 border border-champagne-200/25",
    bronze: "bg-bronze-muted/15 text-champagne-300 border border-bronze-muted/30",
    umber: "bg-umber-800/80 text-ivory-warm border border-umber-600/40",
    hairline: "bg-shadow-main/80 text-ivory-warm/80 border border-champagne-200/15 backdrop-blur-md",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.18em] uppercase transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
