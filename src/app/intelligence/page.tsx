"use client";

import React, { useState } from "react";
import { IntelligenceOpeningExperience } from "@/components/intelligence/IntelligenceOpeningExperience";
import { IntelligenceCommandCentre } from "@/components/intelligence/IntelligenceCommandCentre";

export default function IntelligencePage() {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <IntelligenceOpeningExperience onEnter={() => setHasEntered(true)} />;
  }

  return <IntelligenceCommandCentre />;
}
