"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function EducationPage() {
  const content = [
    "Solutions for safe, smart, and inspiring campuses:",
    "",
    "• Campus signage, directional posts, and wayfinding systems",
    "• Interactive digital boards and LED info screens",
    "• Smart access control, CCTV surveillance, metal detectors, and perimeter alerts",
    "• Classroom automation systems (light, AV control)",
    "",
    "Safety, organization, and tech-enabled learning."
  ];

  return (
    <IndustryTemplate
      title="Education (Schools, Colleges & Universities)"
      intro="Solutions for safe, smart, and inspiring campuses."
      content={content}
    />
  );
}
