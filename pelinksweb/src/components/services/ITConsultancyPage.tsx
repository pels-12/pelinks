"use client";

import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

export default function ITConsultancyPage() {
  const title = "IT Consultancy";
  const subtitle = "System Integration + Corporate IT Support";
  const description = "IT infrastructure setup, system deployment, and ongoing technical support for businesses across Nigeria.";
  const items = [
    "Business Process Automation",
    "IT Infrastructure Deployment",
    "Server & Network Setup",
    "Corporate IT Support & Maintenance",
    "IT Advisory Services"
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