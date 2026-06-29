"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const ADDONS = [
  { label: "Google Business Profile",  price: "$150" },
  { label: "Monthly social posts",     price: "$200/mo" },
  { label: "Extra pages",              price: "$200–$400" },
  { label: "Local SEO setup",          price: "$150" },
  { label: "Domain email",             price: "$50" },
  { label: "Rush delivery (3 days)",   price: "+$200" },
];

function PricingCard({
  badge,
  title,
  price,
  priceSub,
  features,
  ctaLabel,
  featured = false,
  index,
}: {
  badge?: string;
  title: string;
  price: string;
  priceSub: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
  index: number;
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.65, ease: E }}
      className="relative flex flex-col rounded-2xl p-7 gap-6"
      style={{
        background: featured ? "rgba(132,204,22,0.06)" : "rgba(11,24,16,0.5)",
        border: featured
          ? "1px solid rgba(132,204,22,0.35)"
          : "1px solid rgba(232,242,232,0.08)",
        boxShadow: featured ? "0 0 60px rgba(132,204,22,0.08)" : "none",
      }}
    >
      {badge && (
        <div
          className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-sans font-semibold"
          style={{ background: "#84CC16", color: "#05080A" }}
        >
          {badge}
        </div>
      )}

      <div>
        <h3
          className="font-display font-bold text-xl mb-1"
          style={{ color: "#E8F2E8" }}
        >
          {title}
        </h3>
        <div className="flex items-end gap-2 mt-3">
          <span
            className="font-display font-bold"
            style={{ fontSize: "2.5rem", color: featured ? "#84CC16" : "#E8F2E8", lineHeight: 1 }}
          >
            {price}
          </span>
          <span
            className="text-sm font-sans mb-1"
            style={{ color: "rgba(232,242,232,0.45)" }}
          >
            {priceSub}
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm font-sans" style={{ color: "rgba(232,242,232,0.7)" }}>
            <span style={{ color: "#84CC16", flexShrink: 0, marginTop: 2 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={scrollToContact}
        className="mt-auto w-full py-3 rounded-full text-sm font-semibold font-sans cursor-pointer transition-all duration-200"
        style={
          featured
            ? { background: "#84CC16", color: "#05080A", boxShadow: "0 0 24px rgba(132,204,22,0.25)" }
            : { background: "transparent", border: "1px solid rgba(132,204,22,0.3)", color: "#84CC16" }
        }
        onMouseEnter={(e) => {
          if (featured) {
            (e.currentTarget as HTMLButtonElement).style.background = "#A3E635";
          } else {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(132,204,22,0.08)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#84CC16";
          }
        }}
        onMouseLeave={(e) => {
          if (featured) {
            (e.currentTarget as HTMLButtonElement).style.background = "#84CC16";
          } else {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(132,204,22,0.3)";
          }
        }}
      >
        {ctaLabel}
      </button>
    </motion.div>
  );
}

export default function PricingSection() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const addonsRef  = useRef(null);
  const addonsView = useInView(addonsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="pricing"
      className="py-24 md:py-32"
      style={{
        borderTop:    "1px solid rgba(132,204,22,0.08)",
        background:   "rgba(11,24,16,0.25)",
      }}
      aria-label="Pricing"
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
            Honest pricing.{" "}
            <span style={{ color: "#84CC16" }}>No surprises.</span>
          </h2>
          <p className="mt-4 text-base font-sans max-w-md" style={{ color: "rgba(232,242,232,0.55)" }}>
            Free demo before you spend a dime. 50% upfront, 50% at launch. No contracts on monthly.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <PricingCard
            index={0}
            title="One-time Build"
            price="$1,200"
            priceSub="one-time · launch & done"
            features={[
              "Custom site built for your business",
              "Free demo first — always",
              "Launched on your domain",
              "Your real photos and content",
              "Mobile-friendly and fast",
              "Up to 5 pages",
            ]}
            ctaLabel="Get started"
          />
          <PricingCard
            index={1}
            badge="Most popular"
            title="Build + Care"
            price="$127"
            priceSub="/mo after $600 setup · cancel anytime"
            features={[
              "Everything in One-time Build",
              "Hosting included",
              "One update or edit per month",
              "Hours, prices, menu changes handled",
              "Direct line when something's off",
              "Priority response",
            ]}
            ctaLabel="Get started"
            featured
          />
        </div>

        {/* Add-ons */}
        <motion.div
          ref={addonsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={addonsView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: E, delay: 0.2 }}
          className="mt-12 max-w-3xl"
        >
          <div
            className="rounded-2xl p-7"
            style={{
              background: "rgba(11,24,16,0.5)",
              border: "1px solid rgba(132,204,22,0.08)",
            }}
          >
            <h3
              className="font-display font-semibold text-lg mb-5"
              style={{ color: "#E8F2E8" }}
            >
              Add-ons
              <span
                className="ml-3 text-[10px] tracking-[0.2em] uppercase font-sans font-medium"
                style={{ color: "rgba(132,204,22,0.7)" }}
              >
                À la carte
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADDONS.map((a) => (
                <div
                  key={a.label}
                  className="flex items-center justify-between py-2.5 px-4 rounded-xl"
                  style={{
                    background: "rgba(132,204,22,0.04)",
                    border: "1px solid rgba(132,204,22,0.08)",
                  }}
                >
                  <span className="text-sm font-sans" style={{ color: "rgba(232,242,232,0.65)" }}>
                    {a.label}
                  </span>
                  <span className="text-sm font-semibold font-sans" style={{ color: "#84CC16" }}>
                    {a.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs font-sans" style={{ color: "rgba(232,242,232,0.35)" }}>
              Ask about add-ons when you request your demo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
