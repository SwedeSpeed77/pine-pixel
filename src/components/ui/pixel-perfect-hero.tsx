"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Brand / tech logos Pine & Pixel actually uses ─────────────────────── */

const BRAND_LOGOS = [
  // Tailwind CSS
  () => (
    <svg
      className="h-[20px] sm:h-[26px] w-auto select-none opacity-50 hover:opacity-90 transition-opacity duration-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 262 33"
    >
      <path
        className="fill-cyan-500"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
      />
      <path
        style={{ fill: "rgba(232,242,232,0.6)" }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.996 13.652H76.284V22.772C76.284 25.204 77.88 25.166 80.996 25.014V28.7C74.688 29.46 72.18 27.712 72.18 22.772V13.652H68.684V9.69996H72.18V4.59596L76.284 3.37996V9.69996H80.996V13.652ZM98.958 9.69996H103.062V28.7H98.958V25.964C97.514 27.978 95.272 29.194 92.308 29.194C87.14 29.194 82.846 24.824 82.846 19.2C82.846 13.538 87.14 9.20596 92.308 9.20596C95.272 9.20596 97.514 10.422 98.958 12.398V9.69996ZM92.954 25.28C96.374 25.28 98.958 22.734 98.958 19.2C98.958 15.666 96.374 13.12 92.954 13.12C89.534 13.12 86.95 15.666 86.95 19.2C86.95 22.734 89.534 25.28 92.954 25.28ZM109.902 6.84996C108.458 6.84996 107.28 5.63396 107.28 4.22796C107.281 3.53297 107.558 2.86682 108.049 2.37539C108.541 1.88395 109.207 1.60728 109.902 1.60596C110.597 1.60728 111.263 1.88395 111.755 2.37539C112.246 2.86682 112.523 3.53297 112.524 4.22796C112.524 5.63396 111.346 6.84996 109.902 6.84996ZM107.85 28.7V9.69996H111.954V28.7H107.85ZM116.704 28.7V0.959961H120.808V28.7H116.704ZM147.446 9.69996H151.778L145.812 28.7H141.784L137.832 15.894L133.842 28.7H129.814L123.848 9.69996H128.18L131.866 22.81L135.856 9.69996H139.77L143.722 22.81L147.446 9.69996ZM156.87 6.84996C155.426 6.84996 154.248 5.63396 154.248 4.22796C154.249 3.53297 154.526 2.86682 155.017 2.37539C155.509 1.88395 156.175 1.60728 156.87 1.60596C157.565 1.60728 158.231 1.88395 158.723 2.37539C159.214 2.86682 159.491 3.53297 159.492 4.22796C159.492 5.63396 158.314 6.84996 156.87 6.84996ZM154.818 28.7V9.69996H158.922V28.7H154.818ZM173.666 9.20596C177.922 9.20596 180.962 12.094 180.962 17.034V28.7H176.858V17.452C176.858 14.564 175.186 13.044 172.602 13.044C169.904 13.044 167.776 14.64 167.776 18.516V28.7H163.672V9.69996H167.776V12.132C169.03 10.156 171.082 9.20596 173.666 9.20596ZM200.418 2.09996H204.522V28.7H200.418V25.964C198.974 27.978 196.732 29.194 193.768 29.194C188.6 29.194 184.306 24.824 184.306 19.2C184.306 13.538 188.6 9.20596 193.768 9.20596C196.732 9.20596 198.974 10.422 200.418 12.398V2.09996ZM194.414 25.28C197.834 25.28 200.418 22.734 200.418 19.2C200.418 15.666 197.834 13.12 194.414 13.12C190.994 13.12 188.41 15.666 188.41 19.2C188.41 22.734 190.994 25.28 194.414 25.28ZM218.278 29.194C212.54 29.194 208.246 24.824 208.246 19.2C208.246 13.538 212.54 9.20596 218.278 9.20596C222.002 9.20596 225.232 11.144 226.752 14.108L223.218 16.16C222.382 14.374 220.52 13.234 218.24 13.234C214.896 13.234 212.35 15.78 212.35 19.2C212.35 22.62 214.896 25.166 218.24 25.166C220.52 25.166 222.382 23.988 223.294 22.24L226.828 24.254C225.232 27.256 222.002 29.194 218.278 29.194ZM233.592 14.944C233.592 18.402 243.814 16.312 243.814 23.342C243.814 27.142 240.508 29.194 236.404 29.194C232.604 29.194 229.868 27.484 228.652 24.748L232.186 22.696C232.794 24.406 234.314 25.432 236.404 25.432C238.228 25.432 239.634 24.824 239.634 23.304C239.634 19.922 229.412 21.822 229.412 15.02C229.412 11.448 232.49 9.20596 236.366 9.20596C239.482 9.20596 242.066 10.65 243.396 13.158L239.938 15.096C239.254 13.614 237.924 12.93 236.366 12.93C234.884 12.93 233.592 13.576 233.592 14.944ZM251.11 14.944C251.11 18.402 261.332 16.312 261.332 23.342C261.332 27.142 258.026 29.194 253.922 29.194C250.122 29.194 247.386 27.484 246.17 24.748L249.704 22.696C250.312 24.406 251.832 25.432 253.922 25.432C255.746 25.432 257.152 24.824 257.152 23.304C257.152 19.922 246.93 21.822 246.93 15.02C246.93 11.448 250.008 9.20596 253.884 9.20596C257 9.20596 259.584 10.65 260.914 13.158L257.456 15.096C256.772 13.614 255.442 12.93 253.884 12.93C252.402 12.93 251.11 13.576 251.11 14.944Z"
      />
    </svg>
  ),
  // Framer Motion
  () => (
    <div className="flex items-center gap-2 font-bold text-sm md:text-base opacity-50 hover:opacity-90 transition-opacity duration-300" style={{ color: "rgba(232,242,232,0.7)" }}>
      <svg viewBox="0 0 14 21" className="h-[20px] md:h-[24px] fill-current">
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" />
      </svg>
      Motion
    </div>
  ),
  // Next.js
  () => (
    <svg
      className="h-[13px] sm:h-[17px] w-auto select-none opacity-50 hover:opacity-90 transition-opacity duration-300"
      style={{ fill: "rgba(232,242,232,0.7)" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394 79"
    >
      <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" />
      <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" />
      <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" />
      <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" />
      <path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fillRule="evenodd" />
    </svg>
  ),
  // TypeScript
  () => (
    <div className="flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity duration-300">
      <svg viewBox="0 0 100 100" className="h-[20px] w-[20px]" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="8" fill="#3178C6" />
        <path d="M56.5 52.5h9.5v-6h-26v6h9.5v27h7V52.5z" fill="white" />
        <path d="M70 79.5V73c0 0 4.5 3.5 9 3.5s6-2 6-4.5c0-7-15.5-5.5-15.5-17C69.5 48 74 44 82 44c4 0 8 1.5 8 1.5V51.5s-3.5-2.5-7.5-2.5c-4.5 0-5.5 2-5.5 4 0 6.5 15.5 5 15.5 17C92.5 78 88 82 80.5 82c-5 0-10.5-2.5-10.5-2.5z" fill="white" />
      </svg>
      <span className="font-bold text-sm" style={{ color: "rgba(232,242,232,0.6)" }}>TypeScript</span>
    </div>
  ),
];

/* ─── Canvas pixel physics ───────────────────────────────────────────────── */

type Pixel = {
  x: number; y: number; color: string; ctx: CanvasRenderingContext2D;
  speed: number; size: number; sizeStep: number; minSize: number;
  maxSizeInt: number; maxSize: number; delay: number; counter: number;
  counterStep: number; isIdle: boolean; isReverse: boolean; isShimmer: boolean;
  draw: () => void; appear: () => void; disappear: () => void; shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,
  x: number, y: number, color: string, baseSpeed: number, delay: number
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;
  const p: Pixel = {
    x, y, color, ctx,
    speed: rand(0.08, 0.4) * baseSpeed,
    size: 0, sizeStep: rand(0.12, 0.28), minSize: 0.5, maxSizeInt: 2,
    maxSize: rand(0.5, 2), delay, counter: 0,
    counterStep: rand(1.8, 3.2) + (canvas.width + canvas.height) * 0.008,
    isIdle: false, isReverse: false, isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) { p.counter += p.counterStep; return; }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer(); else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false; p.counter = 0;
      if (p.size <= 0) { p.isIdle = true; return; }
      p.size -= 0.1; p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed; else p.size += p.speed;
    },
  };
  return p;
}

type PixelCanvasProps = { colors: string[]; gap?: number; speed?: number };

function PixelCanvas({ colors, gap = 5, speed = 30 }: PixelCanvasProps) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const wrapRef     = useRef<HTMLDivElement>(null);
  const pixelsRef   = useRef<Pixel[]>([]);
  const animRef     = useRef<number>(0);
  const lastFrame   = useRef(performance.now());
  const reducedRef  = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current, wrap = wrapRef.current;
    if (!canvas || !wrap || colors.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width), h = Math.floor(height);
    canvas.width = w; canvas.height = h;
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    const effectiveSpeed = reducedRef.current ? 0 : Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];
    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2, dy = y - h / 2;
        const delay = reducedRef.current ? 0 : Math.sqrt(dx * dx + dy * dy) * 0.65;
        pixels.push(createPixel(ctx, canvas, x, y, color, effectiveSpeed, delay));
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode: "appear" | "disappear") => {
    cancelAnimationFrame(animRef.current);
    const frameInterval = 1000 / 60;
    const loop = () => {
      animRef.current = requestAnimationFrame(loop);
      const now = performance.now(), elapsed = now - lastFrame.current;
      if (elapsed < frameInterval) return;
      lastFrame.current = now - (elapsed % frameInterval);
      const canvas = canvasRef.current, ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();
      if (pixels.every((p) => p.isIdle)) cancelAnimationFrame(animRef.current);
    };
    animRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    init();
    const ro = new ResizeObserver(() => init());
    if (wrapRef.current) ro.observe(wrapRef.current);
    animate("appear");
    return () => { ro.disconnect(); cancelAnimationFrame(animRef.current); };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

/* ─── Hero component ─────────────────────────────────────────────────────── */

interface PixelHeroProps {
  word1?: string;
  word2?: string;
  description?: string;
  primaryCta?: string;
  primaryCtaMobile?: string;
  secondaryCta?: string;
  secondaryCtaMobile?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  secondaryHref?: string;
}

export function PixelHero({
  word1 = "Silent",
  word2 = "Precision.",
  description = "Minimalist interfaces driven by refined motion.",
  primaryCta = "Get a free demo",
  primaryCtaMobile = "Free demo",
  secondaryCta = "See our work",
  secondaryCtaMobile = "Our work",
  onPrimaryClick,
  onSecondaryClick,
  secondaryHref = "#portfolio",
}: PixelHeroProps) {
  const [isLoaded, setIsLoaded]       = useState(false);
  const [pixelColors, setPixelColors] = useState<string[]>([]);

  useEffect(() => {
    /* Pine green pixel palette — 4 dark moss shades + 1 lime burst */
    setPixelColors([
      "rgba(22, 48, 32, 0.9)",
      "rgba(26, 58, 34, 0.7)",
      "rgba(38, 74, 48, 0.6)",
      "rgba(22, 48, 32, 0.8)",
      "rgba(132, 204, 22, 0.65)",
    ]);
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between md:justify-center md:gap-6 py-8 md:py-0 px-2 sm:px-6 overflow-hidden select-none isolate"
      style={{ background: "#05080A" }}
    >
      <style>{`
        @keyframes marquee-pp {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pp-marquee { animation: marquee-pp 28s linear infinite; }

        .pp-glass-text {
          color: transparent;
          background: linear-gradient(
            135deg,
            rgba(132,204,22,1)    0%,
            rgba(232,242,232,0.9) 20%,
            rgba(163,230,53,0.5)  42%,
            rgba(232,242,232,0.95) 55%,
            rgba(132,204,22,0.6)  75%,
            rgba(163,230,53,1)    100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 1px rgba(132,204,22,0.2);
          filter: drop-shadow(0 12px 32px rgba(132,204,22,0.18)) drop-shadow(0 4px 8px rgba(0,0,0,0.4));
          animation: pp-shimmer 7s linear infinite;
        }
        @keyframes pp-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
      `}</style>

      {/* Pixel canvas layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {pixelColors.length > 0 && <PixelCanvas colors={pixelColors} gap={6} speed={28} />}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, transparent 0%, #05080A 100%)", opacity: 0.82 }} />
      </div>

      {/* Headline */}
      <div className="flex flex-col items-center justify-center text-center order-1 mt-28 sm:mt-0 pointer-events-none w-full">
        <h1
          className="pp-glass-text flex flex-row items-center justify-center gap-2 sm:gap-4 px-1 w-full flex-wrap leading-none"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontStyle: "italic" }}>
            {word1}
          </span>
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}>
            {word2}
          </span>
        </h1>
      </div>

      {/* Description + mobile marquee */}
      <div className="flex flex-col items-center justify-center text-center my-auto md:my-0 order-2 px-1 w-full pointer-events-none">
        <p
          className="text-sm sm:text-lg md:text-xl font-light max-w-[95%] sm:max-w-md md:max-w-xl px-1 leading-relaxed"
          style={{ color: "rgba(232,242,232,0.65)" }}
        >
          {description}
        </p>

        {/* Mobile marquee */}
        <div className="block md:hidden w-full mt-12 pointer-events-auto">
          <div className="text-[10px] uppercase tracking-[0.24em] mb-4" style={{ color: "rgba(132,204,22,0.55)" }}>
            Built with
          </div>
          <div className="relative w-full overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)" }}>
            <div className="flex w-max gap-10 py-1 pp-marquee">
              <div className="flex gap-10 items-center">{BRAND_LOGOS.map((L, i) => <L key={i} />)}</div>
              <div className="flex gap-10 items-center" aria-hidden="true">{BRAND_LOGOS.map((L, i) => <L key={`c-${i}`} />)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div
        className={cn(
          "pointer-events-auto flex flex-row items-center justify-center gap-3 mt-4 md:mt-10 mb-4 md:mb-0 order-4 md:order-3 transition-all duration-1000 px-1",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "450ms" }}
      >
        <button
          onClick={onPrimaryClick}
          className="relative inline-flex h-10 md:h-12 items-center justify-center gap-1.5 md:gap-2 rounded-xl px-4 md:px-8 text-xs md:text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          style={{
            background: "linear-gradient(to bottom, rgba(163,230,53,0.95), #84CC16)",
            color: "#05080A",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3), 0 0 28px rgba(132,204,22,0.3), 0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          <span className="inline md:hidden">{primaryCtaMobile}</span>
          <span className="hidden md:inline">{primaryCta}</span>
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </button>

        <a
          href={secondaryHref}
          onClick={(e) => {
            if (secondaryHref?.startsWith("#")) {
              e.preventDefault();
              const el = document.querySelector(secondaryHref);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
            onSecondaryClick?.();
          }}
          className="relative inline-flex h-10 md:h-12 items-center justify-center gap-1.5 md:gap-2 rounded-xl px-4 md:px-8 text-xs md:text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          style={{
            background: "rgba(11,24,16,0.7)",
            color: "#E8F2E8",
            border: "1px solid rgba(132,204,22,0.25)",
            backdropFilter: "blur(12px)",
            boxShadow: "inset 0 1px 1px rgba(132,204,22,0.08), 0 2px 12px rgba(0,0,0,0.2)",
          }}
        >
          <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: "#84CC16" }} />
          <span className="inline md:hidden">{secondaryCtaMobile}</span>
          <span className="hidden md:inline">{secondaryCta}</span>
        </a>
      </div>

      {/* Desktop marquee — pinned to bottom */}
      <div
        className={cn(
          "hidden md:flex absolute bottom-8 left-0 right-0 w-full z-10 pointer-events-auto flex-col items-center gap-4 transition-all duration-1000 order-3 md:order-4",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <span className="text-[10px] uppercase tracking-[0.28em] select-none" style={{ color: "rgba(132,204,22,0.5)" }}>
          Built with
        </span>
        <div
          className="relative w-full max-w-4xl overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)" }}
        >
          <div className="flex w-max gap-14 py-3 pp-marquee">
            <div className="flex gap-14 items-center">{BRAND_LOGOS.map((L, i) => <L key={i} />)}</div>
            <div className="flex gap-14 items-center" aria-hidden="true">{BRAND_LOGOS.map((L, i) => <L key={`c-${i}`} />)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
