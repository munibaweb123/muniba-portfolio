"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(raw: string) {
  const match = raw.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  return { prefix, number: parseFloat(numStr), suffix };
}

// Renders the final value immediately (correct with no JS), then — once it
// scrolls into view — counts up from 0 to that value for a bit of motion.
export default function AnimatedStat({ value }: { value: string }) {
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed || animated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        observer.disconnect();

        const { prefix, number, suffix } = parsed;
        const duration = 1200;
        const start = performance.now();

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          if (progress >= 1) {
            setDisplay(value);
            return;
          }
          setDisplay(`${prefix}${Math.round(number * eased)}${suffix}`);
          requestAnimationFrame(step);
        };

        setDisplay(`${prefix}0${suffix}`);
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed, value]);

  return <span ref={ref}>{display}</span>;
}
