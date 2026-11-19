"use client";

import { useEffect, useRef } from "react";

const MAX_PARTICLES = 90;
const LIGHT_COLORS = ["#b8955a", "#c9a96e", "#8a6d3b", "#d6bb85"];
const DARK_COLORS = ["#f3e2bd", "#e8dfd1", "#ffd98a", "#fff4dc"];

export default function CursorSparkles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const particles = [];
    let frame = 0;
    let last = null;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function spawn(x, y, count) {
      const dark = document.documentElement.classList.contains("dark-mode");
      const colors = dark ? DARK_COLORS : LIGHT_COLORS;
      for (let i = 0; i < count && particles.length < MAX_PARTICLES; i += 1) {
        particles.push({
          x, y,
          vx: (Math.random() - .5) * 1.1,
          vy: (Math.random() - .5) * 1.1 + .35,
          life: 1,
          decay: .018 + Math.random() * .022,
          size: 1.4 + Math.random() * 2.6,
          star: Math.random() < .3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function drawStar(x, y, size) {
      context.beginPath();
      for (let i = 0; i < 8; i += 1) {
        const radius = i % 2 === 0 ? size * 2.2 : size * .55;
        const angle = (Math.PI / 4) * i;
        context.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
      }
      context.closePath();
      context.fill();
    }

    function draw() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += .02;
        p.life -= p.decay;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        context.globalAlpha = p.life;
        context.fillStyle = p.color;
        context.shadowColor = p.color;
        context.shadowBlur = 8;
        if (p.star) drawStar(p.x, p.y, p.size * p.life);
        else { context.beginPath(); context.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2); context.fill(); }
      }
      context.globalAlpha = 1;
      frame = particles.length ? requestAnimationFrame(draw) : 0;
    }

    function handleMove(event) {
      if (event.pointerType && event.pointerType !== "mouse") return;
      const { clientX: x, clientY: y } = event;
      const distance = last ? Math.hypot(x - last.x, y - last.y) : 0;
      last = { x, y };
      spawn(x, y, Math.min(4, 1 + Math.floor(distance / 12)));
    }

    function handleLeave() { last = null; }

    function stopForReducedMotion() {
      if (!reducedMotion.matches) return;
      particles.length = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      window.removeEventListener("pointermove", handleMove);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    reducedMotion.addEventListener("change", stopForReducedMotion);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
      reducedMotion.removeEventListener("change", stopForReducedMotion);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-sparkles" aria-hidden="true" />;
}
