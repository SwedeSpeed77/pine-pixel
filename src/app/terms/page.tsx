import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Pine & Pixel",
  description: "Terms and conditions for Pine & Pixel web design services.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ color: "rgba(132,204,22,0.7)", fontSize: "0.875rem", fontFamily: "var(--font-inter)", marginBottom: "3rem" }}>
          Last updated: June 30, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", fontFamily: "var(--font-inter)", lineHeight: 1.75 }}>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Agreement
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              By using this website or engaging Pine & Pixel (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) for web design services, you agree to these Terms of Service. If you do not agree, do not use our services.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Services
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginBottom: "0.75rem" }}>
              Pine & Pixel provides custom website design and development for small businesses, including but not limited to:
            </p>
            <ul style={{ color: "rgba(232,242,232,0.7)", fontSize: "0.9375rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Custom website design and development</li>
              <li>Website redesigns</li>
              <li>Monthly maintenance and care plans</li>
              <li>Local SEO setup</li>
              <li>Social media content</li>
            </ul>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem", marginTop: "0.75rem" }}>
              A free demo or mockup may be provided before any payment is required. We will discuss scope, timeline, and pricing before beginning paid work.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Payment
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Payment terms are agreed upon in a separate written agreement or invoice for each project. All fees are in USD. We reserve the right to pause or withhold delivery of work if payment is not received on agreed terms.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Intellectual Property
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Upon full payment, you own the final website files and content created specifically for you. Pine & Pixel retains the right to display the completed work in our portfolio unless you request otherwise in writing. We retain ownership of any proprietary tools, frameworks, or code libraries used to build your site.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Client Responsibilities
            </h2>
            <ul style={{ color: "rgba(232,242,232,0.7)", fontSize: "0.9375rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>You are responsible for providing accurate business information and content.</li>
              <li>You represent that any content you provide does not infringe third-party rights.</li>
              <li>You are responsible for maintaining your own domain, hosting credentials, and third-party accounts after handoff.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Limitation of Liability
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              Pine & Pixel is not liable for any indirect, incidental, or consequential damages arising from use of our services or websites we build. Our maximum liability for any claim is limited to the amount you paid us for the specific service giving rise to the claim. We do not guarantee specific business results, search rankings, or revenue outcomes from your website.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Governing Law
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              These terms are governed by the laws of the State of Minnesota, USA, without regard to conflict of law principles. Any disputes will be resolved in Isanti County, Minnesota.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#84CC16", marginBottom: "0.75rem" }}>
              Changes
            </h2>
            <p style={{ color: "rgba(232,242,232,0.75)", fontSize: "0.9375rem" }}>
              We may update these terms at any time. Continued use of our services after changes constitutes acceptance.
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
