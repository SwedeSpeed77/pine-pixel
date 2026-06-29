"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  rotation: number;
  rotSpeed: number;
}

export default function PixelParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const COUNT = 55;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (): Particle => ({
      x:            Math.random() * canvas.width,
      y:            canvas.height + Math.random() * 40,
      size:         Math.random() * 3 + 1,
      speedX:       (Math.random() - 0.5) * 0.4,
      speedY:       -(Math.random() * 0.6 + 0.2),
      opacity:      Math.random() * 0.5 + 0.1,
      opacitySpeed: 0,
      rotation:     Math.random() * Math.PI * 2,
      rotSpeed:     (Math.random() - 0.5) * 0.03,
    });

    for (let i = 0; i < COUNT; i++) {
      const p = spawn();
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x        += p.speedX;
        p.y        += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.y < -10) {
          Object.assign(p, spawn());
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle   = "#84CC16";
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
