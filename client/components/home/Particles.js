"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles = [];
    let frameId = 0;

    function createParticles() {
      const count = width < 640 ? 35 : 70;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(Math.random() * 0.15 + 0.03),
        alpha: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(time, moving) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f3e9c6";

      for (const p of particles) {
        if (moving) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.y < -4) p.y = height + 4;
          if (p.x < -4) p.x = width + 4;
          if (p.x > width + 4) p.x = -4;
        }

        const twinkle = moving ? 0.6 + 0.4 * Math.sin(time / 1500 + p.phase) : 1;

        ctx.globalAlpha = p.alpha * twinkle;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    function loop(time) {
      draw(time, true);
      frameId = requestAnimationFrame(loop);
    }

    function stop() {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }

    function start() {
      stop();

      if (reduceMotion.matches || document.hidden) {
        draw(0, false);
        return;
      }

      frameId = requestAnimationFrame(loop);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
      start();
    }

    resize();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", start);
    reduceMotion.addEventListener("change", start);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", start);
      reduceMotion.removeEventListener("change", start);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
}