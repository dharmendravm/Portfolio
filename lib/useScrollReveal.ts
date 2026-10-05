"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Adds the `visible` class to elements with `.reveal` or `.reveal-stagger`
 * as they enter the viewport. CSS handles the animation.
 */
export default function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const init = useCallback(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger");
    if (!elements.length) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Unobserve after triggering — animate once only
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(init, 50);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [init]);
}
