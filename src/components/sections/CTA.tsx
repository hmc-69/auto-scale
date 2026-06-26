"use client";

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { useMagnetic } from '@/hooks/useMagnetic';

export const CTA = () => {
  const revealRef = useReveal() as React.RefObject<HTMLElement>;
  const startTrialRef = useMagnetic(15) as React.RefObject<HTMLAnchorElement>;
  const bookDemoRef = useMagnetic(15) as React.RefObject<HTMLAnchorElement>;

  return (
    <section className="py-24 bg-oceanic relative overflow-hidden" aria-label="Call to Action" ref={revealRef}>
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,200,1,0.15)_0%,transparent_70%)] pointer-events-none animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="glass-card max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 border border-mint/20 relative overflow-hidden group reveal scale-in hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700">
          {/* Subtle hover effect on card */}
          <div className="absolute inset-0 bg-gradient-to-t from-forsythia/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-powder mb-6 leading-tight relative z-10">
            Ready to automate<br />your business?
          </h2>
          <p className="text-xl text-mint/90 font-sans max-w-2xl mx-auto mb-10 relative z-10 group-hover:text-powder transition-colors duration-500">
            Join thousands of engineering teams who have already scaled their operations with AutoScale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link 
              href="/start" 
              ref={startTrialRef}
              className="group/btn relative overflow-hidden inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-forsythia to-saffron text-oceanic font-bold text-lg hover:shadow-[0_0_40px_rgba(255,200,1,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:animate-shimmer"></span>
            </Link>
            <Link 
              href="/demo" 
              ref={bookDemoRef}
              className="group/btn relative inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-nocturnal border border-mint/20 text-powder font-bold text-lg hover:bg-oceanic hover:border-mint/50 hover:shadow-[0_0_20px_rgba(217,232,226,0.15)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-mint"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Demo
                <div className="w-2 h-2 rounded-full bg-mint/40 group-hover/btn:bg-forsythia transition-colors animate-pulse"></div>
              </span>
              <span className="absolute inset-0 rounded-full border border-mint/0 group-hover/btn:border-mint/50 transition-colors duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
