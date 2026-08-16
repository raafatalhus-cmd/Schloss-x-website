"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps content that should gently fade/slide in on scroll.
 *
 * Progressive enhancement: children render fully visible on the server
 * and on first paint. Only after this component mounts on the client
 * does it opt into the hidden→visible animation, and only if the
 * visitor hasn't requested reduced motion. This avoids the bug we hit
 * in the static-HTML version, where content could stay invisible if
 * JavaScript was slow or failed.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !("IntersectionObserver" in window)) return;

    setEnabled(true);
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Safety net: reveal regardless after a beat, in case the observer
    // never fires for some reason.
    const fallback = setTimeout(() => setInView(true), 4000);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    // @ts-expect-error — dynamic tag with ref is fine at runtime
    <Tag
      ref={ref}
      className={`reveal ${enabled ? "enabled" : ""} ${inView ? "in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
