"use client";

import { motion } from "framer-motion";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const LINKS = {
  Services: [
    { label: "Custom websites", href: "#services" },
    { label: "Site redesigns",  href: "#services" },
    { label: "Monthly care",    href: "#pricing"  },
    { label: "Local SEO",       href: "#services" },
    { label: "Social content",  href: "#services" },
  ],
  "Quick links": [
    { label: "Our work",   href: "#portfolio" },
    { label: "Pricing",    href: "#pricing"   },
    { label: "About",      href: "#about"     },
    { label: "Free demo",  href: "#contact"   },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background:  "#030506",
        borderTop:   "1px solid rgba(132,204,22,0.1)",
        paddingTop:  "4rem",
        paddingBottom: "2rem",
      }}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-2.5 mb-4 cursor-pointer"
              aria-label="Pine & Pixel — scroll to top"
            >
              <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
                <rect x="0"  y="0"  width="9"  height="9"  rx="1.5" fill="#84CC16"/>
                <rect x="11" y="0"  width="9"  height="9"  rx="1.5" fill="#84CC16" opacity="0.5"/>
                <rect x="21" y="0"  width="9"  height="9"  rx="1.5" fill="#84CC16" opacity="0.2"/>
                <rect x="0"  y="11" width="9"  height="9"  rx="1.5" fill="#84CC16" opacity="0.7"/>
                <rect x="11" y="11" width="9"  height="9"  rx="1.5" fill="#84CC16"/>
                <rect x="21" y="11" width="9"  height="9"  rx="1.5" fill="#84CC16" opacity="0.4"/>
                <rect x="0"  y="21" width="9"  height="9"  rx="1.5" fill="#84CC16" opacity="0.3"/>
                <rect x="11" y="21" width="9"  height="9"  rx="1.5" fill="#84CC16" opacity="0.6"/>
                <rect x="21" y="21" width="9"  height="9"  rx="1.5" fill="#84CC16"/>
              </svg>
              <span
                className="font-display font-bold text-base"
                style={{ color: "#E8F2E8" }}
              >
                Pine & Pixel
              </span>
            </button>
            <p className="text-sm font-sans max-w-xs leading-relaxed" style={{ color: "rgba(232,242,232,0.4)" }}>
              Custom web design for small businesses — wherever you are.
            </p>
            <div className="mt-4 text-xs font-sans" style={{ color: "rgba(232,242,232,0.3)" }}>
              Jacob Brown · Isanti, MN
            </div>
            <a
              href="mailto:Swedespeedjb@gmail.com"
              className="mt-1 text-xs font-sans transition-colors duration-200"
              style={{ color: "rgba(132,204,22,0.6)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#84CC16"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(132,204,22,0.6)"; }}
            >
              Swedespeedjb@gmail.com
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <div
                className="text-[10px] tracking-[0.24em] uppercase font-sans mb-4"
                style={{ color: "rgba(132,204,22,0.6)" }}
              >
                {group}
              </div>
              <ul className="flex flex-col gap-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm font-sans cursor-pointer transition-colors duration-200"
                      style={{ color: "rgba(232,242,232,0.45)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#84CC16"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(232,242,232,0.45)"; }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(132,204,22,0.08)" }}
        >
          <p className="text-xs font-sans" style={{ color: "rgba(232,242,232,0.25)" }}>
            © 2026 Pine & Pixel · Remote web design · Available 24/7
          </p>
          <p className="text-xs font-sans" style={{ color: "rgba(132,204,22,0.35)" }}>
            Jacob Brown · Isanti, MN
          </p>
        </div>
      </div>
    </footer>
  );
}
