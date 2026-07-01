"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Zap, RefreshCw, Shield, MapPin, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const SERVICES: { Icon: LucideIcon; title: string; sub: string; bullets: string[] }[] = [
  {
    Icon: Monitor,
    title: "Custom Websites",
    sub: "Built for your business, not borrowed from a template.",
    bullets: [
      "Every site designed from scratch",
      "Mobile-first and fast-loading",
      "Free preview demo before you commit",
      "Launched on your own domain",
      "Your real content, photos, and hours built in",
    ],
  },
  {
    Icon: Zap,
    title: "AI-Powered Speed",
    sub: "Faster builds mean lower prices. You benefit directly.",
    bullets: [
      "AI handles research and copywriting",
      "Built in days, not weeks",
      "Premium quality at a fraction of agency cost",
      "24/7 chatbot available on your site",
      "Smarter strategy from day one",
    ],
  },
  {
    Icon: RefreshCw,
    title: "Site Redesigns",
    sub: "Got a rough GoDaddy template? I'll rebuild it properly.",
    bullets: [
      "Same domain, better everything",
      "Actual brand identity, not defaults",
      "Keep your reviews and SEO history",
      "Modernized design and performance",
      "Delivered within days",
    ],
  },
  {
    Icon: Shield,
    title: "Monthly Care Plans",
    sub: "$127/month. Hosting, updates, edits — handled.",
    bullets: [
      "Hosting included",
      "One update or edit per month",
      "Hours, prices, menu changes handled",
      "Direct line when something's off",
      "Never touch your site again",
    ],
  },
  {
    Icon: MapPin,
    title: "Local SEO Basics",
    sub: "Get found when people search nearby.",
    bullets: [
      "Google Business Profile setup",
      "Local search foundations built in",
      "Schema markup on every page",
      "Location-optimized copy",
      "Citation and directory setup",
    ],
  },
  {
    Icon: Share2,
    title: "Social Content",
    sub: "Monthly posts written and scheduled for your business.",
    bullets: [
      "Content calendar each month",
      "Posts written for your brand voice",
      "Scheduled across platforms",
      "Reels captions and hashtag strategy",
      "Stay active without the stress",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.65, ease: E }}
      className="group relative p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 cursor-default"
      style={{
        background: "rgba(11,24,16,0.5)",
        border: "1px solid rgba(132,204,22,0.1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(132,204,22,0.35)";
        (e.currentTarget as HTMLDivElement).style.background  = "rgba(11,24,16,0.85)";
        (e.currentTarget as HTMLDivElement).style.boxShadow   = "0 0 40px rgba(132,204,22,0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(132,204,22,0.1)";
        (e.currentTarget as HTMLDivElement).style.background  = "rgba(11,24,16,0.5)";
        (e.currentTarget as HTMLDivElement).style.boxShadow   = "none";
      }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(132,204,22,0.08)", border: "1px solid rgba(132,204,22,0.15)" }}
        aria-hidden="true"
      >
        <service.Icon style={{ width: 18, height: 18, color: "#84CC16" }} />
      </div>

      {/* Text */}
      <div>
        <h3
          className="font-display font-bold text-lg mb-1"
          style={{ color: "#E8F2E8" }}
        >
          {service.title}
        </h3>
        <p className="text-sm font-sans" style={{ color: "rgba(232,242,232,0.55)" }}>
          {service.sub}
        </p>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-1.5 mt-1">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-xs font-sans" style={{ color: "rgba(232,242,232,0.5)" }}>
            <span style={{ color: "#84CC16", flexShrink: 0, marginTop: 1 }}>▸</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Bottom pixel accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-[1px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, transparent, rgba(132,204,22,0.4), transparent)" }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(132,204,22,0.08)" }}
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: E }}
          className="mb-16"
        >
          <div className="section-divider mb-5" />
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#E8F2E8", lineHeight: 1.05 }}
          >
            Everything your business
            <br />
            <span style={{ color: "#84CC16" }}>needs online.</span>
          </h2>
          <p className="mt-4 text-base font-sans max-w-xl" style={{ color: "rgba(232,242,232,0.55)" }}>
            One designer, AI-powered speed, and a genuine interest in seeing small businesses win.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
