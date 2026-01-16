"use client";

import React from 'react';
import IndustryTemplate from '../IndustryTemplate';

export default function BankingPage() {
  const content = [
    "For banks, microfinance firms, and fintechs:",
    "",
    "• Corporate signage, ATM branding, and teller-area cladding",
    "• Video surveillance, alarm systems, and metal detection",
    "• LED tickers, FX rate displays, and digital announcement boards",
    "• Smart facility control and restricted access zones",
    "",
    "Security and trust, built from the ground up."
  ];

  return (
    <IndustryTemplate
      title="Banking & Financial Institutions"
      intro="For banks, microfinance firms, and fintechs."
      content={content}
    />
  );
}
