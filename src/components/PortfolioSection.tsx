"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const PROJECTS = [
  {
    id: 1,
    type: "Cannabis Dispensary",
    name: "Minnesota Dispensary",
    location: "Adult-use retail · MN",
    accent: "#7C3AED",
    accentDim: "rgba(124,58,237,0.12)",
    problem: "Generic template, broken links, no age gate, zero compliance language.",
    built: "Dark 4-page site with 21+ age gate, compliance language, and live menu integration.",
    tags: ["Custom Design", "Age Gate", "Menu Integration"],
    stat: "4 pages · 1 week",
  },
  {
    id: 2,
    type: "Coffee House",
    name: "Neighborhood Coffee House",
    location: "Local café · MN",
    accent: "#C8881A",
    accentDim: "rgba(200,136,26,0.12)",
    problem: "400+ reviews and zero web presence. Zero. A Facebook page and nothing else.",
    built: "Warm editorial site with real menu, hours, weekly specials, and full brand story.",
    tags: ["Editorial Design", "Menu", "Brand Story"],
    stat: "5 pages · 5 days",
  },
  {
    id: 3,
    type: "Lawn & Snow",
    name: "Local Outdoor Services",
    location: "Year-round services · MN",
    accent: "#059669",
    accentDim: "rgba(5,150,105,0.12)",
    problem: "Facebook-only business with a perfect 5.0 Google rating. Invisible online.",
    built: "Two-season site with service breakdowns for summer and winter, full contact flow.",
    tags: ["Two-Season", "Service Pages", "Lead Gen"],
    stat: "3 pages · 4 days",
  },
  {
    id: 4,
    type: "Industrial B2B",
    name: "Automation & Fabrication Shop",
    location: "Industrial systems · SD",
    accent: "#0EA5E9",
    accentDim: "rgba(14,165,233,0.12)",
    problem: "Template burying 40+ years of credibility and certs — UL 508a, Wonderware, invisible.",
    built: "Technical B2B site with credentials front-and-center, clear capability breakdown.",
    tags: ["B2B", "Credentials", "Technical Copy"],
    stat: "6 pages · 1 week",
  },
  {
    id: 5,
    type: "Artisan Bakery",
    name: "Award-Winning Cottage Bakery",
    location: "Pop-up bakery · MN",
    accent: "#84CC16",
    accentDim: "rgba(132,204,22,0.12)",
    problem: "GoDaddy contact form only — five state awards barely mentioned anywhere.",
    built: "All five awards leading the page, Saturday pop-up schedule, custom order system.",
    tags: ["Awards Focus", "Custom Orders", "Pop-up Schedule"],
    stat: "4 pages · 3 days",
  },
  {
    id: 6,
    type: "Party Rentals",
    name: "Bounce House Rental Company",
    location: "Event rentals · MN",
    accent: "#F59E0B",
    accentDim: "rgba(245,158,11,0.12)",
    problem: "10 products dumped in one endless scroll. No organization, no pricing, no flow.",
    built: "Tabbed catalog — Bounce Houses / Add-Ons / Packages / Pricing — clean and bookable.",
    tags: ["Tabbed Catalog", "Booking Flow", "Pricing Page"],
    stat: "5 pages · 6 days",
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.65, ease: E }}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "rgba(11,24,16,0.6)",
        border: `1px solid rgba(${project.accent === "#84CC16" ? "132,204,22" : "232,242,232"},0.08)`,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {/* Header band */}
      <div
        className="px-6 pt-6 pb-5"
        style={{ borderBottom: "1px solid rgba(232,242,232,0.06)" }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className="text-[10px] tracking-[0.24em] uppercase font-sans font-medium px-2.5 py-1 rounded-full"
            style={{
              background: project.accentDim,
              color: project.accent,
              border: `1px solid ${project.accent}30`,
            }}
          >
            {project.type}
          </span>
          <span
            className="text-[10px] font-sans"
            style={{ color: "rgba(232,242,232,0.3)" }}
          >
            {project.stat}
          </span>
        </div>
        <h3
          className="font-display font-bold text-lg mb-0.5"
          style={{ color: "#E8F2E8" }}
        >
          {project.name}
        </h3>
        <p className="text-xs font-sans" style={{ color: "rgba(232,242,232,0.4)" }}>
          {project.location}
        </p>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex flex-col gap-4">
        {/* Problem */}
        <div>
          <div
            className="text-[9px] tracking-[0.22em] uppercase font-sans mb-1.5"
            style={{ color: "rgba(232,242,232,0.3)" }}
          >
            Problem
          </div>
          <p className="text-sm font-sans leading-relaxed" style={{ color: "rgba(232,242,232,0.55)" }}>
            {project.problem}
          </p>
        </div>

        {/* Solution — reveals on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="solution"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: E }}
            >
              <div
                className="text-[9px] tracking-[0.22em] uppercase font-sans mb-1.5"
                style={{ color: project.accent }}
              >
                Built
              </div>
              <p className="text-sm font-sans leading-relaxed" style={{ color: "#E8F2E8" }}>
                {project.built}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-0.5 rounded-full font-sans"
              style={{
                background: "rgba(232,242,232,0.04)",
                border: "1px solid rgba(232,242,232,0.08)",
                color: "rgba(232,242,232,0.4)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="h-0.5 transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(90deg, transparent, ${project.accent}, transparent)`
            : "transparent",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function PortfolioSection() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(132,204,22,0.08)" }}
      aria-label="Portfolio"
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
            A few things{" "}
            <span style={{ color: "#84CC16" }}>we&apos;ve built.</span>
          </h2>
          <p className="mt-4 text-base font-sans max-w-lg" style={{ color: "rgba(232,242,232,0.55)" }}>
            Six businesses, six completely different industries. Zero templates. Hover any card to see what was built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* CTA below portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: E }}
          className="mt-14 text-center"
        >
          <p className="text-sm font-sans mb-5" style={{ color: "rgba(232,242,232,0.45)" }}>
            Your business could be next.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-sans cursor-pointer transition-all duration-200"
            style={{
              background: "transparent",
              border: "1px solid rgba(132,204,22,0.35)",
              color: "#84CC16",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(132,204,22,0.08)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#84CC16";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(132,204,22,0.35)";
            }}
          >
            Get your free demo →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
