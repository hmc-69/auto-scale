"use client";

import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AnimatedNumber = ({ 
  value, 
  duration = 2000, 
  suffix = '', 
  isFloat = false 
}: { 
  value: number; 
  duration?: number; 
  suffix?: string;
  isFloat?: boolean;
}) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function (easeOutExpo)
      const easeOut = progress === duration ? 1 : 1 - Math.pow(2, -10 * progress / duration);
      const current = Math.min(value * easeOut, value);

      setCount(current);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isIntersecting, value, duration]);

  const displayValue = isFloat 
    ? count.toFixed(2) 
    : count >= 10 ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

export const Stats = () => {
  const stats = [
    { label: 'Uptime SLA', value: 99.99, suffix: '%', isFloat: true },
    { label: 'Automations Run', value: 10, suffix: 'M+', isFloat: false },
    { label: 'Integrations', value: 150, suffix: '+', isFloat: false },
    { label: 'User Rating', value: 4.8, suffix: '★', isFloat: true },
  ];

  return (
    <section className="py-20 border-y border-mint/10 bg-nocturnal/20 relative" aria-label="Platform Statistics">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[100px] bg-forsythia/10 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-mint/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center pl-0 first:pl-0 sm:pl-8">
              <h3 className="text-4xl md:text-5xl font-mono font-bold text-gradient-accent mb-2">
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isFloat={stat.isFloat} 
                />
              </h3>
              <p className="text-sm font-sans font-medium text-mint/80 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
