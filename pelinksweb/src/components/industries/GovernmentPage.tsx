"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function GovernmentPage() {
  const content = [
    "We serve ministries, parastatals, and public agencies with:",
    "",
    "• Custom directional and identity signage (indoor/outdoor)",
    "• Conference room automation and digital briefing screens",
    "• Comprehensive security architecture with perimeter defense, gate access, and central monitoring",
    "• Cladding for public structures and smart notice boards",
    "",
    "Meeting national infrastructure standards and ICT policies."
  ];

  return (
    <IndustryTemplate
      title="Government & Public Institutions"
      intro="We serve ministries, parastatals, and public agencies with compliant solutions."
      content={content}
    />
  );
}
