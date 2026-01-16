"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function OilGasPage() {
  const content = [
    "Serving high-security and technically demanding industries:",
    "",
    "• Industrial-grade cladding, branded outdoor signage",
    "• High-luminance LED boards for sites and safety alerts",
    "• Integrated control rooms with smart surveillance",
    "• Access control, automatic barriers, motion-triggered lighting",
    "",
    "Engineered for harsh environments and industry compliance (e.g., HSE, ISO)."
  ];

  return (
    <IndustryTemplate
      title="Oil & Gas, Engineering & Utilities"
      intro="Serving high-security and technically demanding industries."
      content={content}
    />
  );
}
