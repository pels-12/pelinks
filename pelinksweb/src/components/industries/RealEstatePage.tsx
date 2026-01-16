"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function RealEstatePage() {
  const content = [
    "We support developers, estate managers, and architects with:",
    "",
    "• Branded monument signs, estate entry signage, and cladding systems",
    "• Integrated smart home systems (lighting, climate control, voice control)",
    "• Security solutions including CCTV, automatic gates, video intercoms, and alarm systems",
    "• LED display boards for property ads and alerts",
    "",
    "Compliance with building codes, estate standards, and smart living expectations."
  ];

  return (
    <IndustryTemplate
      title="Real Estate & Property Development"
      intro="We support developers, estate managers, and architects with integrated solutions for modern living spaces."
      content={content}
    />
  );
}
