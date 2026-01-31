"use client";

import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

export default function PelinksSolutionsPage() {
  const title = "Pelinks Solutions";
  const subtitle = "Smart Home | Security Systems | Tech Integration";
  const description = "Security cameras, access control, smart lighting, and automation that actually works. We install and maintain systems for homes, offices, and warehouses across Nigeria.";
  const items = [
    "Smart Lighting & Automation",
    "CCTV & Surveillance",
    "Access Control (Biometric, RFID, Keypad)",
    "Remote Monitoring",
    "Automatic Gates & Barriers",
    "Alarm Systems & Intercoms",
    "IT Infrastructure Setup"
  ];

  return (
    <ServiceTemplate
      title={title}
      subtitle={subtitle}
      description={description}
      items={items}
    />
  );
}