"use client";

import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

export default function FabricationConstructionPage() {
  const title = "Fabrication & Construction";
  const subtitle = "Metal Works + Structural Projects";
  const description = "Metal fabrication, structural installations, and construction projects. Quality craftsmanship for residential and commercial builds across Nigeria.";
  const items = [
    "Metal Fabrication & Welding",
    "Structural Steel Works",
    "Gates & Railings",
    "Roof & Canopy Installations",
    "Building Construction",
    "Renovation & Upgrades"
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