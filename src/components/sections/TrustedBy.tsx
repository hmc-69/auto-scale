"use client";

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

export const TrustedBy = () => {
  const revealRef = useReveal() as React.RefObject<HTMLElement>;

  // Duplicated array to create a seamless infinite loop
  const companies = [
    "ACME Corp", "GlobalTech", "Nexus", "Quantum", "Starlight", "Vanguard",
    "ACME Corp", "GlobalTech", "Nexus", "Quantum", "Starlight", "Vanguard"
  ];

  return (
    <section className="py-12 bg-oceanic/50 border-b border-mint/5 overflow-hidden" aria-label="Trusted Companies" ref={revealRef}>
      <div className="container mx-auto px-6 mb-6 text-center reveal fade-up">
        <p className="text-xs font-mono font-semibold text-mint/50 uppercase tracking-[0.2em]">
          Powering data teams at industry leaders
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden reveal fade-up" style={{ transitionDelay: '100ms' }}>
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-oceanic to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-oceanic to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee hover:animate-play-state-paused cursor-default w-max">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-12 opacity-50 hover:opacity-100 hover:scale-110 hover:text-forsythia transition-all duration-300 group"
            >
              <span className="text-xl md:text-2xl font-bold text-powder font-sans tracking-tight">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
