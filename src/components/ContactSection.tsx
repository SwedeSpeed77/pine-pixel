"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const BUSINESS_TYPES = [
  "Restaurant / Café / Bakery",
  "Lawn / Landscaping / Snow removal",
  "Retail store",
  "Service business",
  "Health & beauty",
  "Events / Rentals",
  "Industrial / Manufacturing",
  "Cannabis / Dispensary",
  "Other",
];

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "", business: "", website: "", type: "", message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/xpwrkozo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     form.name,
          business: form.business,
          website:  form.website,
          type:     form.type,
          message:  form.message,
          _subject: `Pine & Pixel demo request from ${form.business}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", business: "", website: "", type: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(11,24,16,0.7)",
    border: "1px solid rgba(132,204,22,0.15)",
    borderRadius: 12,
    color: "#E8F2E8",
    fontFamily: "var(--font-inter)",
    fontSize: 14,
    padding: "12px 16px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(232,242,232,0.4)",
    fontFamily: "var(--font-inter)",
    marginBottom: 6,
    display: "block",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(132,204,22,0.5)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(132,204,22,0.15)";
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden dot-grid"
      style={{ borderTop: "1px solid rgba(132,204,22,0.08)" }}
      aria-label="Contact"
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: 800, height: 400,
          background: "radial-gradient(ellipse, rgba(132,204,22,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, x: -28 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: E }}
          >
            <div className="section-divider mb-5" />
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#E8F2E8", lineHeight: 1.05 }}
            >
              Let&apos;s build{" "}
              <span style={{ color: "#84CC16" }}>something.</span>
            </h2>
            <p className="text-base font-sans leading-relaxed mb-8" style={{ color: "rgba(232,242,232,0.55)" }}>
              Tell me about your business. I&apos;ll build a free preview site — no commitment, no invoice. If you love it, we go from there.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Built from your real business info",
                "See it before paying anything",
                "Delivered within 24–48 hours",
                "No sales pressure",
                "Any business, anywhere",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-sans" style={{ color: "rgba(232,242,232,0.6)" }}>
                  <span style={{ color: "#84CC16" }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 flex flex-col gap-5" style={{ borderTop: "1px solid rgba(132,204,22,0.1)" }}>
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase font-sans mb-2" style={{ color: "rgba(232,242,232,0.3)" }}>
                  Reach out directly
                </div>
                <a
                  href="tel:+16514200670"
                  className="font-display font-semibold text-lg transition-colors duration-200 block"
                  style={{ color: "#E8F2E8" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#84CC16"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#E8F2E8"; }}
                >
                  651-420-0670
                </a>
                <a
                  href="mailto:Swedespeedjb@gmail.com"
                  className="font-sans text-sm transition-colors duration-200 block mt-0.5"
                  style={{ color: "rgba(132,204,22,0.75)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#84CC16"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(132,204,22,0.75)"; }}
                >
                  Swedespeedjb@gmail.com
                </a>
                <p className="text-xs font-sans mt-2" style={{ color: "rgba(232,242,232,0.3)" }}>
                  Usually respond same day.
                </p>
              </div>

              {/* Location badge */}
              <div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl self-start"
                style={{
                  background: "rgba(132,204,22,0.05)",
                  border: "1px solid rgba(132,204,22,0.14)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" style={{ width: 16, height: 16, flexShrink: 0, color: "#84CC16" }} stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21c-4.4-4.4-7-8.3-7-11a7 7 0 0 1 14 0c0 2.7-2.6 6.6-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <div>
                  <div className="text-xs font-sans font-medium" style={{ color: "#E8F2E8" }}>Isanti, MN</div>
                  <div className="text-[10px] font-sans" style={{ color: "rgba(232,242,232,0.35)" }}>45.4897° N · 93.2433° W · Serving nationwide</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: E, delay: 0.1 }}
            className="rounded-2xl p-7"
            style={{
              background: "rgba(11,24,16,0.7)",
              border: "1px solid rgba(132,204,22,0.12)",
            }}
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: E }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: "rgba(132,204,22,0.12)", border: "1px solid rgba(132,204,22,0.3)" }}
                  >
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-xl" style={{ color: "#84CC16" }}>
                    Request sent!
                  </h3>
                  <p className="text-sm font-sans" style={{ color: "rgba(232,242,232,0.55)" }}>
                    I&apos;ll have a demo ready for you within 24–48 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="pp-name" style={labelStyle}>Your name</label>
                      <input
                        id="pp-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="Jane Smith"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="pp-business" style={labelStyle}>Business name</label>
                      <input
                        id="pp-business"
                        name="business"
                        type="text"
                        required
                        value={form.business}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="Main Street Café"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pp-website" style={labelStyle}>Current website (if any)</label>
                    <input
                      id="pp-website"
                      name="website"
                      type="text"
                      value={form.website}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      placeholder="yoursite.com or none"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="pp-type" style={labelStyle}>Business type</label>
                    <select
                      id="pp-type"
                      name="type"
                      required
                      value={form.type}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none" }}
                    >
                      <option value="" disabled>Select one...</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t} style={{ background: "#0B1810" }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pp-message" style={labelStyle}>What do you need?</label>
                    <textarea
                      id="pp-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      placeholder="Tell me about your business, what you're working with, and what you need..."
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs font-sans" style={{ color: "#F87171" }}>
                      Something went wrong. Email me directly at Swedespeedjb@gmail.com
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15, ease: E }}
                    className="w-full py-3.5 rounded-full text-sm font-semibold font-sans cursor-pointer transition-all duration-200"
                    style={{
                      background: status === "sending" ? "rgba(132,204,22,0.5)" : "#84CC16",
                      color: "#05080A",
                      boxShadow: "0 0 24px rgba(132,204,22,0.2)",
                      opacity: status === "sending" ? 0.7 : 1,
                    }}
                  >
                    {status === "sending" ? "Sending..." : "Send my request →"}
                  </motion.button>

                  <p className="text-xs text-center font-sans" style={{ color: "rgba(232,242,232,0.3)" }}>
                    Usually respond same day. Demo in 24–48 hrs.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
