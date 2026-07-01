import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Pine & Pixel",
  description: "How Pine & Pixel collects, uses, and protects your information.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(132,204,22,0.7)", fontSize: "0.875rem", fontFamily: "var(--font-inter)", marginBottom: "3rem" }}>
          Last updated: June 30, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", fontFamily: "var(--font-inter)", lineHeight: 1.75 }}>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Who We Are
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Pine & Pixel is a web design studio operated by Jacob Brown, based in Isanti, MN. We build custom websites for small businesses. You can reach us at{" "}
              <a href="mailto:Swedespeedjb@gmail.com" style={{ color: "#84CC16" }}>Swedespeedjb@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Information We Collect
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
              We collect information you provide directly to us:
            </p>
            <ul style={{ color: "rgba(232,242,232,0.7)", fontSize: "0.9375rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li><strong style={{ color: "#E8F2E8" }}>Contact information</strong> — your name, email address, and any message you send through our contact form.</li>
              <li><strong style={{ color: "#E8F2E8" }}>Usage data</strong> — pages visited, time on site, browser type, and device type, collected via cookies if you consent.</li>
              <li><strong style={{ color: "#E8F2E8" }}>Communications</strong> — emails or messages you send us.</li>
            </ul>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginTop: "0.75rem" }}>
              We do not collect payment card numbers, Social Security numbers, or government IDs on this website.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              How We Use Your Information
            </h2>
            <ul style={{ color: "rgba(232,242,232,0.7)", fontSize: "0.9375rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>To respond to your inquiries and provide services you request.</li>
              <li>To send project updates and communicate about your website.</li>
              <li>To understand how people use our site so we can improve it.</li>
              <li>To comply with legal obligations.</li>
            </ul>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginTop: "0.75rem" }}>
              We do not sell, rent, or share your personal information with third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Cookies
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
              We use cookies only with your consent. If you click &quot;Accept&quot; on our cookie banner, we may use analytics cookies to understand site traffic. If you click &quot;Decline,&quot; no analytics cookies are set.
            </p>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              You can change your preference at any time by clearing your browser storage or contacting us.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              AI Disclosure
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Some content on our website and client websites we build uses AI-assisted tools during creation. All AI-generated content is reviewed and edited by a human before publishing. We disclose this in accordance with FTC guidelines.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Your Rights
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
              Depending on where you live, you may have the right to:
            </p>
            <ul style={{ color: "rgba(232,242,232,0.7)", fontSize: "0.9375rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li><strong style={{ color: "#E8F2E8" }}>Access</strong> — request a copy of the personal information we hold about you.</li>
              <li><strong style={{ color: "#E8F2E8" }}>Correction</strong> — request that we correct inaccurate information.</li>
              <li><strong style={{ color: "#E8F2E8" }}>Deletion</strong> — request that we delete your personal information.</li>
              <li><strong style={{ color: "#E8F2E8" }}>Opt-out</strong> — opt out of any data sharing (we don&apos;t sell data, but you can ask us to stop using yours).</li>
              <li><strong style={{ color: "#E8F2E8" }}>Portability</strong> — request your data in a portable format.</li>
            </ul>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginTop: "0.75rem" }}>
              To exercise any of these rights, email{" "}
              <a href="mailto:Swedespeedjb@gmail.com" style={{ color: "#84CC16" }}>Swedespeedjb@gmail.com</a>{" "}
              with the subject &quot;Privacy Request.&quot; We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Data Retention
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              We retain contact form submissions for up to 2 years to maintain communication history. You may request deletion at any time.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Security
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              This website is served over HTTPS with security headers including Content Security Policy, HSTS, and X-Frame-Options to protect against common web vulnerabilities. We take reasonable technical measures to protect your information.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Changes to This Policy
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              We may update this policy. We will update the &quot;Last updated&quot; date above when we do. Continued use of our site constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Contact
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Pine & Pixel · Jacob Brown · Isanti, MN<br />
              <a href="mailto:Swedespeedjb@gmail.com" style={{ color: "#84CC16" }}>Swedespeedjb@gmail.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
