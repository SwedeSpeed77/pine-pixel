"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const STEPS = [
  {
    num: "01",
    title: "We find you.",
    desc: "Bad site, no site, just a Facebook page? I research your business and start building before we've even spoken.",
    tag: "Proactive",
  },
  {
    num: "02",
    title: "Free demo.",
    desc: "A fully-built preview at a real link. No commitment, no invoice — just proof of what your business could look like.",
    tag: "No risk",
  },
  {
    num: "03",
    title: "You say yes.",
    desc: "50% upfront. We add your real photos, finalize every detail, and get everything exactly right before launch.",
    tag: "Your input",
  },
  {
    num: "04",
    title: "We go live.",
    desc: "Your site goes live on your domain. Same address you've had — completely different experience for every customer.",
    tag: "Launch",
  },
  {
    num: "05",
    title: "We keep it up.",
    desc: "$99/month and you never worry about your website again. Hosting, updates, edits — all handled. Forever.",
    tag: "Ongoing",
  },
];

export default function ProcessSection() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:   "rgba(11,24,16,0.35)",
        borderTop:    "1px solid rgba(132,204,22,0.08)",
        borderBottom: "1px solid rgba(132,204,22,0.08)",
      }}
      aria-label="How it works"
    >
      {/* Background grid subtle */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
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
            How it works.
          </h2>
          <p className="mt-4 text-base font-sans max-w-md" style={{ color: "rgba(232,242,232,0.55)" }}>
            From finding you to keeping you live — start to finish, no guesswork.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => {
            const ref    = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });

            return (
              <motion.div
                key={step.num}
                ref={ref}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: E }}
                className="group relative flex items-start gap-6 py-8"
                style={{
                  borderBottom: i < STEPS.length - 1 ? "1px solid rgba(132,204,22,0.08)" : "none",
                }}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-[23px] top-[68px] w-[1px]"
                    style={{
                      height: "calc(100% - 44px)",
                      background: "linear-gradient(to bottom, rgba(132,204,22,0.3), rgba(132,204,22,0.05))",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Step number circle */}
                <div
                  className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300"
                  style={{
                    background: "rgba(132,204,22,0.08)",
                    border: "1.5px solid rgba(132,204,22,0.25)",
                    color: "#84CC16",
                    zIndex: 1,
                  }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="font-display font-bold text-lg md:text-xl"
                      style={{ color: "#E8F2E8" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[9px] tracking-[0.2em] uppercase font-sans"
                      style={{
                        background: "rgba(132,204,22,0.1)",
                        border: "1px solid rgba(132,204,22,0.2)",
                        color: "#84CC16",
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <p
                    className="text-sm md:text-base font-sans max-w-lg"
                    style={{ color: "rgba(232,242,232,0.55)", lineHeight: 1.7 }}
                  >
                    {step.desc}
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
