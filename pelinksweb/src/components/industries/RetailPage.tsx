"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function RetailPage() {
  const content = [
    "For shopping malls, supermarkets, boutiques, and business plazas:",
    "",
    "• 3D signs, illuminated signage, and LED shopfront displays",
    "• Indoor/outdoor digital screens for promotions and directions",
    "• Access control systems, motion sensors, and surveillance",
    "• Smart automation for lighting, energy saving, and customer experience",
    "",
    "Boost visibility, drive foot traffic, and protect your assets."
  ];

  return (
    <IndustryTemplate
      title="Retail & Commercial Businesses"
      intro="For shopping malls, supermarkets, boutiques, and business plazas."
      content={content}
    />
  );
}
