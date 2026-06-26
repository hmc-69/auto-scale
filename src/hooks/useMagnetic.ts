"use client";

import { useEffect, useRef } from 'react';

export function useMagnetic(strength = 30) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const hX = rect.left + rect.width / 2;
      const hY = rect.top + rect.height / 2;
      
      const x = ((mouseEvent.clientX - hX) / rect.width) * strength;
      const y = ((mouseEvent.clientY - hY) / rect.height) * strength;

      rafId = requestAnimationFrame(() => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const handleMouseLeave = () => {
      if (!el) return;
      rafId = requestAnimationFrame(() => {
        el.style.transform = 'translate(0px, 0px)';
      });
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return ref;
}
