"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function HealthcarePage() {
  const content = [
    "We empower healthcare environments through:",
    "",
    "• Compliance signage (emergency exit, hygiene, restricted access)",
    "• Waiting room LED info boards and directional signage",
    "• Smart lighting and automation for wards and labs",
    "• Surveillance, access control, and visitor monitoring",
    "",
    "Supporting patient care, safety, and regulatory compliance."
  ];

  return (
    <IndustryTemplate
      title="Healthcare (Hospitals & Clinics)"
      intro="We empower healthcare environments through compliant signage and security."
      content={content}
    />
  );
}
