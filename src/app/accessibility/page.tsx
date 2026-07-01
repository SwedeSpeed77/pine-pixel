import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement — Pine & Pixel",
  description: "Pine & Pixel's commitment to web accessibility and WCAG 2.1 AA compliance.",
};

export default function AccessibilityPage() {
  return (
    <div style={{ background: "#05080A", minHeight: "100dvh", color: "#E8F2E8" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "6rem 1.5rem 4rem" }}>

        <Link
          href="/"
          style={{ color: "#84CC16", fontSize: "0.875rem", fontFamily: "var(--font-inter)", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}
        >
          ← Back to Pine & Pixel
        </Link>

        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem,5vw,3rem)", marginBottom: "0.5rem" }}>
          Accessibility Statement
        </h1>
        <p style={{ color: "rgba(132,204,22,0.7)", fontSize: "0.875rem", fontFamily: "var(--font-inter)", marginBottom: "3rem" }}>
          Last reviewed: June 30, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", fontFamily: "var(--font-inter)", lineHeight: 1.75 }}>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Our Commitment
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Pine & Pixel is committed to making our website accessible to everyone, including people with disabilities. We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard as published by the World Wide Web Consortium (W3C).
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Conformance Status
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
              We target <strong style={{ color: "#E8F2E8" }}>WCAG 2.1 Level AA</strong> conformance. Our implementation includes:
            </p>
            <ul style={{ color: "rgba(232,242,232,0.7)", fontSize: "0.9375rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Keyboard navigation support for all interactive elements</li>
              <li>Screen reader compatibility with semantic HTML and ARIA labels</li>
              <li>Color contrast ratios meeting or exceeding 4.5:1 for text</li>
              <li>Text that can be resized up to 200% without loss of functionality</li>
              <li>Skip navigation link at the top of every page</li>
              <li>Visible focus indicators for keyboard users</li>
              <li>Respect for <code style={{ background: "rgba(132,204,22,0.1)", padding: "0 0.3rem", borderRadius: 3 }}>prefers-reduced-motion</code> — all animations are disabled when this setting is active</li>
              <li>Descriptive alt text on images</li>
              <li>Mobile-responsive design with touch targets of at least 44×44px</li>
              <li>No content that flashes more than 3 times per second</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Known Limitations
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              The pixel canvas animation in our hero section is a visual enhancement only and is fully disabled when <code style={{ background: "rgba(132,204,22,0.1)", padding: "0 0.3rem", borderRadius: 3 }}>prefers-reduced-motion</code> is active. The decorative grain texture overlay is also disabled in reduced-motion mode. No critical information is conveyed through animation alone.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Feedback & Contact
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              If you experience any accessibility barriers on our website, or if you need content in an alternative format, please contact us:
            </p>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginTop: "0.75rem" }}>
              <strong style={{ color: "#E8F2E8" }}>Email:</strong>{" "}
              <a href="mailto:Swedespeedjb@gmail.com" style={{ color: "#84CC16" }}>Swedespeedjb@gmail.com</a><br />
              <strong style={{ color: "#E8F2E8" }}>Subject line:</strong> Accessibility Feedback
            </p>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginTop: "0.75rem" }}>
              We aim to respond to accessibility feedback within 5 business days.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              We Build Accessible Sites
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Accessibility is built into every website Pine & Pixel creates for clients — not added as an afterthought. All client sites include keyboard navigation, semantic HTML, proper ARIA labels, color contrast compliance, and reduced-motion support as standard.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
