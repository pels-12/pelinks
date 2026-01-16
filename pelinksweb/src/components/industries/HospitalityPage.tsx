"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function HospitalityPage() {
  const content = [
    "We partner with hospitality brands to deliver:",
    "",
    "• Eye-catching facade signage and branded lightboxes",
    "• LED wall screens for ambiance, promotions, and events",
    "• Smart room automation (lighting, temperature, curtain control)",
    "• Discreet yet powerful security systems including metal detectors, panic alarms, and CCTV",
    "",
    "First impressions and guest experience meet high-end security."
  ];

  return (
    <IndustryTemplate
      title="Hospitality (Hotels, Clubs & Restaurants)"
      intro="We partner with hospitality brands to deliver seamless guest experiences."
      content={content}
    />
  );
}
