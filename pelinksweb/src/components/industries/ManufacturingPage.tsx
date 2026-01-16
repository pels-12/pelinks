"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function ManufacturingPage() {
  const content = [
    "Helping factories and processing plants with:",
    "",
    "• Durable signage for zoning, warnings, and equipment areas",
    "• Real-time LED data screens (production, safety metrics)",
    "• Full-coverage surveillance, automatic gates, perimeter defense",
    "• Smart lighting systems for operational efficiency",
    "",
    "Built to handle tough conditions and regulatory protocols."
  ];

  return (
    <IndustryTemplate
      title="Manufacturing & Industrial Facilities"
      intro="Helping factories and processing plants with industrial-grade solutions."
      content={content}
    />
  );
}
