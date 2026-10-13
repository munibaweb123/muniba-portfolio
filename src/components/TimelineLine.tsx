"use client";

import { useEffect, useRef } from "react";

/**
 * Vertical timeline rail that fills with amber as you scroll through the list.
 * Place it inside a `relative` parent; it spans the parent's full height.
 */
export default function TimelineLine() {
  const track = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    const bar = fill.current;
    if (!el || !bar) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bar.style.transform = "scaleY(1)";
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // The line "reaches" a point once it passes 65% of the way down the viewport.
      const reached = window.innerHeight * 0.65 - rect.top;
      const ratio = Math.min(Math.max(reached / rect.height, 0), 1);
      bar.style.transform = `scaleY(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={track} aria-hidden className="absolute -left-px top-0 h-full w-px bg-line">
      {/* Starts empty (the grey track still shows without JS); the scroll handler fills it. */}
      <div
        ref={fill}
        style={{ transform: "scaleY(0)" }}
        className="h-full w-full origin-top bg-amber shadow-[0_0_10px_var(--color-amber)] will-change-transform"
      />
    </div>
  );
}
