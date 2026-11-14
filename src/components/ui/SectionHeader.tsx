import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "amber" | "champagne" | "bronze" | "umber" | "hairline";
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  badgeVariant = "champagne",
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-14 md:mb-20 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      {subtitle && (
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-amber-glow/90 mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory-warm tracking-tight font-normal leading-[1.12] mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-ivory-warm/70 leading-relaxed font-light">
          {description}
        </p>
      )}
      <div
        className={`w-20 h-[1px] bg-gradient-to-r from-amber-glow/60 via-champagne-200/40 to-transparent mt-8 ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
