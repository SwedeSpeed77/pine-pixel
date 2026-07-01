import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#84CC16",
};

export const metadata: Metadata = {
  title: "Pine & Pixel — Custom Web Design for Small Businesses",
  description:
    "Custom-built websites for small businesses. No templates. AI-powered speed. Free demo first, always. Based in Isanti, MN — serving businesses everywhere.",
  keywords: "web design, small business websites, custom website, Minnesota web designer, free demo",
  manifest: "/manifest.json",
  openGraph: {
    title: "Pine & Pixel — Custom Web Design for Small Businesses",
    description: "Custom-built websites for small businesses. No templates. Free demo first, always.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pine & Pixel — Custom Web Design",
    description: "Custom-built websites for small businesses. Free demo first, always.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        {/* Skip navigation — visible on keyboard focus only (ADA/WCAG 2.1) */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        {/* Screen reader live region for dynamic announcements */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          id="sr-announcer"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        />

        <div id="main-content" tabIndex={-1} style={{ outline: "none" }}>
          {children}
        </div>

        <CookieBanner />
      </body>
    </html>
  );
}
