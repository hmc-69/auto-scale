import React from 'react';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section className="py-24 bg-oceanic relative overflow-hidden" aria-label="Call to Action">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,200,1,0.15)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="glass-card max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 border border-mint/20 relative overflow-hidden group">
          {/* Subtle hover effect on card */}
          <div className="absolute inset-0 bg-gradient-to-t from-forsythia/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-powder mb-6 leading-tight">
            Ready to automate<br />your business?
          </h2>
          <p className="text-xl text-mint/90 font-sans max-w-2xl mx-auto mb-10">
            Join thousands of engineering teams who have already scaled their operations with AutoScale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/start" 
              className="inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-forsythia to-saffron text-oceanic font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,200,1,0.4)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/demo" 
              className="inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-nocturnal border border-mint/20 text-powder font-bold text-lg hover:bg-oceanic hover:border-mint/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-mint"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
