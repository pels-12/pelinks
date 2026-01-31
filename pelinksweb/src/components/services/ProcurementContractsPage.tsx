"use client";

import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

export default function ProcurementContractsPage() {
  const title = "Procurement & General Contracts";
  const subtitle = "Supply Chain + Project Execution";
  const description = "We source office equipment, handle installations, and manage logistics. From procurement to deployment, we coordinate the technical details.";
  const items = [
    "Office Equipment & Electronics",
    "Security Device Installations",
    "Facility Maintenance",
    "Supply Chain & Logistics",
    "Interior Materials"
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