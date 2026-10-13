"use client";

import { useEffect, useState } from "react";

/** Floating button that fades in once you have scrolled past the hero. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-line bg-surface/90 text-amber shadow-lg shadow-black/40 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_10px_28px_-10px_var(--color-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber active:scale-95 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </a>
  );
}
