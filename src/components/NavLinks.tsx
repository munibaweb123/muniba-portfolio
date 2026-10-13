"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Item = { href: string; label: string };

/** Desktop nav links; the link for the section in view gets an animated underline. */
export default function NavLinks({ items }: { items: Item[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      // A thin band just under the sticky header decides which section is "current".
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
      {items.map((i, n) => {
        const on = active === i.href;
        return (
          <li key={i.href} className="hero-in" style={{ "--d": `${0.25 + n * 0.06}s` } as CSSProperties}>
            <a
              href={i.href}
              aria-current={on ? "true" : undefined}
              className={`group relative py-1 transition hover:text-text ${on ? "text-text" : ""}`}
            >
              {i.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded bg-amber transition-transform duration-300 ${
                  on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
