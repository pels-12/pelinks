"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function ReligiousPage() {
  const content = [
    "For churches, mosques, and public event venues:",
    "",
    "• Large-format LED display screens (indoor & outdoor)",
    "• Branded stage and directional signage",
    "• Smart lighting control and AV integration",
    "• CCTV systems and metal detectors for crowd security",
    "",
    "Blend message clarity with community safety."
  ];

  return (
    <IndustryTemplate
      title="Religious Organizations & Event Centers"
      intro="For churches, mosques, and public event venues."
      content={content}
    />
  );
}
