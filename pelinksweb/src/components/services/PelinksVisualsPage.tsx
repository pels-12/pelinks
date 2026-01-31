"use client";

import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

export default function PelinksVisualsPage() {
  const title = "Pelinks Visuals";
  const subtitle = "Signage & Cladding Solutions";
  const description = "We handle everything from LED displays to building cladding. If you need signage that works in Lagos weather, we've got the experience and the team to install it properly.";
  const items = [
    "LED Display Screens",
    "ACP & Stainless Steel Cladding",
    "3D Channel Letters",
    "Lightboxes & Flex Banners",
    "Installation & Maintenance",
    "Wayfinding Signage",
    "Vehicle Branding"
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