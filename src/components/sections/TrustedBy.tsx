import React from 'react';

const companies = [
  "Acme Corp", "GlobalTech", "Nexus", "Stark Industries", "Wayne Enterprises", 
  "Cyberdyne", "Initech", "Massive Dynamic", "Soylent Corp", "Umbrella Corp"
];

export const TrustedBy = () => {
  return (
    <section className="py-12 border-y border-mint/10 bg-oceanic relative overflow-hidden" aria-label="Trusted by companies">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <p className="text-center text-sm font-mono font-medium text-mint/60 uppercase tracking-widest">
          Trusted by innovative engineering teams worldwide
        </p>
      </div>
      
      {/* Infinite Marquee */}
      <div className="flex w-full overflow-hidden relative group">
        {/* Left/Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-oceanic to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-oceanic to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max">
          {[...companies, ...companies].map((company, index) => (
            <div 
              key={index} 
              className="mx-12 text-2xl font-bold font-sans text-mint/30 hover:text-mint/80 transition-colors duration-300 cursor-default select-none"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
