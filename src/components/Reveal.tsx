"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades + slides its children up the first time they scroll into view.
 * Content stays visible without JavaScript: the hidden state is only
 * applied after mount, and only to elements that start below the fold.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove("reveal-pending");
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
