"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const DIFFERENTIATORS = [
  {
    icon: "🆓",
    title: "Free demo built first.",
    desc: "You see it. You love it. Then we talk. No commitment, no invoice.",
  },
  {
    icon: "⚡",
    title: "AI-powered everything.",
    desc: "Research, copywriting, 24/7 chatbot — faster builds, smarter sites, you benefit directly.",
  },
  {
    icon: "✨",
    title: "Framer Motion & GSAP.",
    desc: "Premium animations on every site. The kind of feel that makes visitors stop scrolling.",
  },
  {
    icon: "🎨",
    title: "Nothing templated. Ever.",
    desc: "Every site is built for that specific business only. Period.",
  },
  {
    icon: "🌐",
    title: "Fully remote.",
    desc: "Built for businesses across multiple states. Doesn't matter where you are.",
  },
  {
    icon: "⏰",
    title: "Available 24/7.",
    desc: "Text me at midnight if something's wrong. I'll be there.",
  },
];

export default function AboutSection() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const diffRef    = useRef(null);
  const diffInView = useInView(diffRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        borderTop:  "1px solid rgba(132,204,22,0.08)",
        background: "rgba(11,24,16,0.4)",
      }}
      aria-label="About Jacob"
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(132,204,22,0.05) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* Who's behind */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, x: -32 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: E }}
          >
            <div className="section-divider mb-5" />
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#E8F2E8", lineHeight: 1.05 }}
            >
              Hey, I&apos;m{" "}
              <span style={{ color: "#84CC16" }}>Jacob.</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base font-sans leading-relaxed" style={{ color: "rgba(232,242,232,0.65)" }}>
                Based in Isanti, MN. What got me into this was simple — I kept seeing great local businesses running on Facebook pages and garbage GoDaddy templates, losing customers every day to people who just couldn't find them online.
              </p>
              <p className="text-base font-sans leading-relaxed" style={{ color: "rgba(232,242,232,0.65)" }}>
                So I started fixing it. I'm pro-AI, tech-forward, and I love solving problems — web or otherwise. Available 24/7, fully remote, so it doesn't matter where you are. As long as I don't need to be there in person, we're good.
              </p>
              <p className="text-base font-sans leading-relaxed" style={{ color: "rgba(232,242,232,0.65)" }}>
                I use AI to research, write, and build faster than a traditional agency — meaning you get a premium animated site starting at $1,200 that would cost $5,000–$10,000 elsewhere.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Pro-AI", "Tech-forward", "Problem solver", "Available 24/7"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-sans"
                  style={{
                    background: "rgba(132,204,22,0.08)",
                    border: "1px solid rgba(132,204,22,0.2)",
                    color: "#84CC16",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: E, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {[
              { value: "6+",      label: "Sites built",     sub: "Across MN and SD" },
              { value: "$1,200",  label: "Starting price",  sub: "vs $5–10k at agencies" },
              { value: "24/7",    label: "Availability",    sub: "Text me anytime" },
              { value: "0",       label: "Templates used",  sub: "Every site is custom" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: E }}
                className="flex items-center gap-5 p-5 rounded-2xl"
                style={{
                  background: "rgba(11,24,16,0.7)",
                  border: "1px solid rgba(132,204,22,0.1)",
                }}
              >
                <div
                  className="font-display font-bold text-3xl flex-shrink-0"
                  style={{ color: "#84CC16", minWidth: 80 }}
                >
                  {stat.value}
                </div>
                <div>
                  <div
                    className="font-sans font-medium text-sm"
                    style={{ color: "#E8F2E8" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="font-sans text-xs mt-0.5"
                    style={{ color: "rgba(232,242,232,0.4)" }}
                  >
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Differentiators */}
        <motion.div
          ref={diffRef}
          initial={{ opacity: 0, y: 24 }}
          animate={diffInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: E }}
          className="mb-12"
        >
          <div className="section-divider mb-5" />
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#E8F2E8", lineHeight: 1.05 }}
          >
            What makes this{" "}
            <span style={{ color: "#84CC16" }}>different.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFFERENTIATORS.map((d, i) => {
            const dRef    = useRef(null);
            const dInView = useInView(dRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={d.title}
                ref={dRef}
                initial={{ opacity: 0, y: 20 }}
                animate={dInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: E }}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(11,24,16,0.5)",
                  border: "1px solid rgba(132,204,22,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(132,204,22,0.25)";
                  (e.currentTarget as HTMLDivElement).style.background   = "rgba(11,24,16,0.85)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(132,204,22,0.08)";
                  (e.currentTarget as HTMLDivElement).style.background   = "rgba(11,24,16,0.5)";
                }}
              >
                <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{d.icon}</span>
                <div>
                  <h3
                    className="font-sans font-semibold text-sm mb-1"
                    style={{ color: "#E8F2E8" }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-xs font-sans leading-relaxed" style={{ color: "rgba(232,242,232,0.5)" }}>
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
