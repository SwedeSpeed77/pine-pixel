"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no prior consent decision
    const stored = localStorage.getItem("pp-cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("pp-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("pp-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          aria-modal="false"
          aria-describedby="cookie-desc"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.4, ease: E }}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9998,
            width: "calc(100% - 2rem)",
            maxWidth: "480px",
            background: "rgba(11,24,16,0.97)",
            border: "1px solid rgba(132,204,22,0.2)",
            borderRadius: "0.75rem",
            padding: "1.25rem 1.5rem",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(132,204,22,0.08)",
          }}
        >
          <p
            id="cookie-desc"
            style={{
              color: "rgba(232,242,232,0.75)",
              fontSize: "0.8125rem",
              lineHeight: 1.6,
              marginBottom: "1rem",
              fontFamily: "var(--font-inter)",
            }}
          >
            We use cookies to improve your experience. By continuing, you agree to our{" "}
            <Link
              href="/privacy"
              style={{ color: "#84CC16", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <motion.button
              onClick={accept}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12 }}
              style={{
                flex: 1,
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                background: "#84CC16",
                color: "#05080A",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "0.8125rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Accept
            </motion.button>
            <motion.button
              onClick={decline}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12 }}
              style={{
                flex: 1,
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                background: "transparent",
                color: "rgba(232,242,232,0.55)",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "0.8125rem",
                border: "1px solid rgba(132,204,22,0.15)",
                cursor: "pointer",
              }}
            >
              Decline
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
