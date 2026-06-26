"use client";

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useReveal } from '@/hooks/useReveal';

// Custom hook to animate numbers
const useCountUp = (end: number, duration: number = 2000, startAnimating: boolean) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!startAnimating) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = end * easeOutExpo(progress);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startAnimating]);

  return count;
};

const AnimatedNumber = ({ value, suffix = '', decimal = false }: { value: number, suffix?: string, decimal?: boolean }) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5, triggerOnce: true });
  const count = useCountUp(value, 2500, isIntersecting);

  const displayValue = decimal 
    ? count.toFixed(2)
    : Math.round(count).toString();

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-mono font-bold text-forsythia mb-2 drop-shadow-[0_0_15px_rgba(255,200,1,0.3)]">
      {displayValue}{suffix}
    </div>
  );
};

export const Stats = () => {
  const revealRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section className="py-20 bg-oceanic border-y border-mint/10 relative overflow-hidden" aria-label="Platform Statistics" ref={revealRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,1,0.03)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="flex flex-col items-center text-center reveal fade-up group" style={{ transitionDelay: '0ms' }}>
            <AnimatedNumber value={99.99} suffix="%" decimal />
            <p className="text-sm font-sans text-mint/80 uppercase tracking-widest font-semibold group-hover:text-powder transition-colors">Uptime SLA</p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal fade-up group" style={{ transitionDelay: '100ms' }}>
            <AnimatedNumber value={500} suffix="M+" />
            <p className="text-sm font-sans text-mint/80 uppercase tracking-widest font-semibold group-hover:text-powder transition-colors">Events Processed</p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal fade-up group" style={{ transitionDelay: '200ms' }}>
            <AnimatedNumber value={120} suffix="ms" />
            <p className="text-sm font-sans text-mint/80 uppercase tracking-widest font-semibold group-hover:text-powder transition-colors">Avg Latency</p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal fade-up group" style={{ transitionDelay: '300ms' }}>
            <AnimatedNumber value={4} suffix="k+" />
            <p className="text-sm font-sans text-mint/80 uppercase tracking-widest font-semibold group-hover:text-powder transition-colors">Active Teams</p>
          </div>

        </div>
      </div>
    </section>
  );
};
