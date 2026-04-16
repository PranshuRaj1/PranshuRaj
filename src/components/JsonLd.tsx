"use client";

import Script from "next/script";

interface JsonLdProps {
  data: Record<string, any>;
  id?: string; // unique ID for Script tracking
}

export default function JsonLd({ data, id = "json-ld" }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
