"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Work",     href: "#portfolio" },
  { label: "Services", href: "#services"  },
  { label: "Pricing",  href: "#pricing"   },
  { label: "About",    href: "#about"     },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: E, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,8,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(132,204,22,0.12)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Pine & Pixel — scroll to top"
          >
            {/* P&P pixel mark */}
            <div
              className="relative flex-shrink-0"
              style={{ width: 30, height: 30 }}
              aria-hidden="true"
            >
              {/* Pixel grid icon */}
              <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 30, height: 30 }}>
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
            </div>
            <div className="flex flex-col items-start leading-none">
              <span
                className="font-display font-bold text-base tracking-tight transition-colors duration-200 group-hover:text-pixel"
                style={{ color: "#E8F2E8" }}
              >
                Pine & Pixel
              </span>
              <span
                className="text-[9px] tracking-[0.28em] uppercase"
                style={{ color: "rgba(132,204,22,0.75)", fontFamily: "var(--font-inter)" }}
              >
                Web Design
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="pixel-underline text-sm tracking-wide transition-colors duration-200 cursor-pointer"
                style={{ color: "rgba(232,242,232,0.65)", fontFamily: "var(--font-inter)", fontWeight: 400 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#E8F2E8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(232,242,232,0.65)"; }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16, ease: E }}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200"
              style={{
                background: "#84CC16",
                color: "#05080A",
                fontFamily: "var(--font-inter)",
                boxShadow: "0 0 20px rgba(132,204,22,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#A3E635";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 32px rgba(132,204,22,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#84CC16";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(132,204,22,0.25)";
              }}
            >
              Get a free demo
            </motion.button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-5 h-0.5 transition-all duration-300"
                  style={{
                    background: "#E8F2E8",
                    transform: i === 0 && menuOpen ? "translateY(7px) rotate(45deg)" :
                               i === 1 && menuOpen ? "scaleX(0)" :
                               i === 2 && menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                    opacity: i === 1 && menuOpen ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: E }}
            className="fixed top-[68px] left-0 right-0 z-[99]"
            style={{
              background: "rgba(5,8,10,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(132,204,22,0.15)",
              padding: "1.5rem 1.5rem 2rem",
            }}
          >
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.22 }}
                  className="text-left text-lg font-display font-semibold cursor-pointer"
                  style={{ color: "#E8F2E8" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-2 px-6 py-3 rounded-full text-sm font-semibold text-center cursor-pointer"
                style={{ background: "#84CC16", color: "#05080A", fontFamily: "var(--font-inter)" }}
              >
                Get a free demo
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
