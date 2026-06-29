"use client";

import { PixelHero } from "@/components/ui/pixel-perfect-hero";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PixelHero
      word1="Pine"
      word2="& Pixel."
      description="Custom-built websites for small businesses. Free demo first — always. AI-powered speed, zero templates, no BS."
      primaryCta="Get your free demo"
      primaryCtaMobile="Free demo"
      secondaryCta="See our work"
      secondaryCtaMobile="Our work"
      onPrimaryClick={() => scrollTo("#contact")}
      secondaryHref="#portfolio"
    />
  );
}
