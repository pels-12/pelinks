"use client";

import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

export default function PelinksImprintPage() {
  const title = "Pelinks Imprint";
  const subtitle = "Printing & Promotional Solutions";
  const description = "General printing, large format, business cards, event materials. We run a print facility in Lagos and deliver across the country.";
  const items = [
    "Large Format Printing",
    "Business Cards & Brochures",
    "Event Branding Materials",
    "Branded Gift Items",
    "Corporate Stationery",
    "Custom Apparel"
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