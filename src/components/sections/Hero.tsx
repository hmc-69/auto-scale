"use client";

import React from 'react';
import Link from 'next/link';
import { useMagnetic } from '@/hooks/useMagnetic';

export const Hero = () => {
  const startFreeRef = useMagnetic(15) as React.RefObject<HTMLAnchorElement>;
  const bookDemoRef = useMagnetic(15) as React.RefObject<HTMLAnchorElement>;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20" aria-label="Hero Section">
      {/* CSS Backgrounds with Reactive Mouse Movement */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-oceanic"></div>

        {/* Dynamic Gradient Flow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(17,76,90,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,200,1,0.05)_0%,transparent_50%)] animate-gradient-flow opacity-70"></div>

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Mouse Tracking Glow (using CSS variables set by useMousePosition) */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full bg-mint/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-100 ease-linear"
          style={{ left: 'var(--mouse-x, 50%)', top: 'var(--mouse-y, 50%)' }}
        ></div>

        {/* CSS Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
          style={{
            backgroundImage: 'linear-gradient(rgba(241, 246, 244, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 246, 244, 0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}
        ></div>

        {/* CSS Particles Simulation */}
        <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-forsythia animate-pulse-glow shadow-[0_0_10px_#FFC801]"></div>
        <div className="absolute top-[60%] left-[5%] w-1 h-1 rounded-full bg-saffron animate-pulse-glow shadow-[0_0_10px_#FF9932]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-2 h-2 rounded-full bg-mint animate-pulse-glow shadow-[0_0_10px_#D9E8E2]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[5%] w-1.5 h-1.5 rounded-full bg-powder animate-pulse-glow shadow-[0_0_5px_#F1F6F4]" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[80%] left-[40%] w-1 h-1 rounded-full bg-forsythia animate-pulse-glow shadow-[0_0_10px_#FFC801]" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <div className="flex flex-col items-start text-left max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-forsythia/30 mb-8 hover:border-forsythia/60 transition-colors group cursor-default">
            <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse shadow-[0_0_8px_rgba(255,200,1,0.8)]"></span>
            <span className="text-xs font-mono font-medium text-forsythia tracking-wider uppercase group-hover:text-saffron transition-colors">Platform 2.0 Now Live</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-powder leading-[1.1] mb-6 relative">
            Automate Everything.<br />
            <span className="relative inline-block text-gradient-accent">
              Scale Intelligence.
              {/* Highlight sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite_ease-in-out]"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-mint opacity-90 mb-10 max-w-xl font-sans leading-relaxed">
            The enterprise-grade platform that connects your data, builds AI-driven workflows, and scales operations autonomously. Built for teams that move fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/start"
              ref={startFreeRef}
              className="group relative overflow-hidden inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-forsythia to-saffron text-oceanic font-bold text-lg hover:shadow-[0_0_30px_rgba(255,200,1,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full"></span>
            </Link>
            <Link
              href="/demo"
              ref={bookDemoRef}
              className="group relative inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full glass text-powder font-semibold text-lg hover:bg-nocturnal hover:border-mint/50 hover:shadow-[0_0_20px_rgba(217,232,226,0.1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-mint"
            >
              <span className="relative z-10">Book Demo</span>
              <span className="absolute inset-0 rounded-full border border-mint/0 group-hover:border-mint/50 transition-colors duration-300"></span>
            </Link>
          </div>
        </div>

        {/* Right Side - Visuals */}
        <div className="hidden lg:block relative h-[600px] w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center">
            {/* Background Rings */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-mint/10 border-dashed animate-rotate-slow"></div>
            <div className="absolute w-[550px] h-[550px] rounded-full border border-forsythia/10 border-dashed animate-[rotate-slow_45s_linear_infinite_reverse]"></div>

            {/* SVG Graph Connections */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 600 600" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#114C5A" />
                  <stop offset="50%" stopColor="#FFC801" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#114C5A" />
                </linearGradient>
                <filter id="glow-line">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glow-line)" className="animate-dash-slow opacity-80">
                <path d="M 120,150 C 250,150 250,300 300,300" />
                <path d="M 480,150 C 350,150 350,300 300,300" />
                <path d="M 120,450 C 250,450 250,300 300,300" />
                <path d="M 480,450 C 350,450 350,300 300,300" />
                <path d="M 300,300 C 300,100 300,100 300,50" />
                <path d="M 300,50 L 300,300" />
              </g>
            </svg>

            {/* Nodes */}
            {/* Center Node (AI Agent) */}
            <div className="absolute z-10 animate-pulse-glow-intense" style={{ top: '300px', left: '300px', transform: 'translate(-50%, -50%)' }}>
              <div className="glass-card w-28 h-28 rounded-3xl flex flex-col items-center justify-center gap-2 border-forsythia/50 relative group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-forsythia/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-3xl border border-forsythia/0 group-hover:border-forsythia/50 animate-[pulse-glow_2s_infinite]"></div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center shadow-[0_0_20px_rgba(255,200,1,0.8)] text-oceanic font-black text-2xl relative">
                  AI
                  <div className="absolute inset-0 bg-white/20 rounded-2xl animate-[shimmer_2s_infinite]"></div>
                </div>
                <span className="text-[11px] font-mono font-bold text-powder tracking-widest mt-1">CORE</span>
              </div>
            </div>

            {/* Top Left Node (Slack) */}
            <div className="absolute z-10 animate-float-medium" style={{ top: '150px', left: '120px', transform: 'translate(-50%, -50%)', animationDelay: '0s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/60 hover:shadow-[0_0_15px_rgba(217,232,226,0.2)] transition-all cursor-default group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm group-hover:bg-gradient-to-br group-hover:from-mint/20 group-hover:to-transparent transition-colors">
                  Sl
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder group-hover:text-white transition-colors">Slack Event</span>
                  <span className="text-[10px] text-mint">Trigger</span>
                </div>
              </div>
            </div>

            {/* Top Right Node (CRM) */}
            <div className="absolute z-10 animate-float-slow" style={{ top: '150px', left: '480px', transform: 'translate(-50%, -50%)', animationDelay: '1s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/60 hover:shadow-[0_0_15px_rgba(217,232,226,0.2)] transition-all cursor-default group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm group-hover:bg-gradient-to-br group-hover:from-mint/20 group-hover:to-transparent transition-colors">
                  CR
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder group-hover:text-white transition-colors">HubSpot</span>
                  <span className="text-[10px] text-mint">Update lead</span>
                </div>
              </div>
            </div>

            {/* Bottom Left Node (Database) */}
            <div className="absolute z-10 animate-float-medium" style={{ top: '450px', left: '120px', transform: 'translate(-50%, -50%)', animationDelay: '2s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/60 hover:shadow-[0_0_15px_rgba(217,232,226,0.2)] transition-all cursor-default group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm group-hover:bg-gradient-to-br group-hover:from-mint/20 group-hover:to-transparent transition-colors">
                  DB
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder group-hover:text-white transition-colors">PostgreSQL</span>
                  <span className="text-[10px] text-mint">Query data</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Node (Email) */}
            <div className="absolute z-10 animate-float-slow" style={{ top: '450px', left: '480px', transform: 'translate(-50%, -50%)', animationDelay: '0.5s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/60 hover:shadow-[0_0_15px_rgba(217,232,226,0.2)] transition-all cursor-default group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm group-hover:bg-gradient-to-br group-hover:from-mint/20 group-hover:to-transparent transition-colors">
                  Em
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder group-hover:text-white transition-colors">SendGrid</span>
                  <span className="text-[10px] text-mint">Send alert</span>
                </div>
              </div>
            </div>

            {/* Top Node (Analytics) */}
            {/* <div className="absolute z-10 animate-float" style={{ top: '50px', left: '300px', transform: 'translate(-50%, -50%)', animationDelay: '1.5s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/60 hover:shadow-[0_0_15px_rgba(217,232,226,0.2)] transition-all cursor-default group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm group-hover:bg-gradient-to-br group-hover:from-mint/20 group-hover:to-transparent transition-colors">
                  An
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder group-hover:text-white transition-colors">Analytics</span>
                  <span className="text-[10px] text-mint">Log execution</span>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};
