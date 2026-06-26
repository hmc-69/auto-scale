"use client";

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

export const Workflow = () => {
  const revealRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section className="py-24 bg-nocturnal/20 border-y border-mint/10 relative overflow-hidden" aria-label="Workflow Builder Showcase" ref={revealRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,43,54,0.8)_0%,rgba(17,76,90,0.4)_100%)]"></div>
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(241, 246, 244, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 246, 244, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center'
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-16 reveal fade-up">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-powder mb-6">
            Build complex workflows visually
          </h2>
          <p className="text-lg text-mint/80 font-sans">
            Connect apps, define logic, and unleash AI agents using an intuitive node-based editor. No coding required.
          </p>
        </div>

        {/* Node Graph Mockup */}
        <div className="w-full max-w-5xl mx-auto h-[500px] glass-card rounded-2xl border border-mint/20 relative shadow-2xl overflow-hidden reveal fade-up group/canvas" style={{ transitionDelay: '100ms' }}>
          {/* Header */}
          <div className="h-12 border-b border-mint/10 bg-nocturnal/50 flex items-center justify-between px-4 relative z-20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-mint bg-oceanic px-2 py-1 rounded">Lead_Qualification_Flow</span>
              <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse shadow-[0_0_8px_#27C93F]"></span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-mint/20 hover:bg-[#FF5F56] transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-mint/20 hover:bg-[#FFBD2E] transition-colors cursor-pointer"></div>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative w-full h-[calc(100%-3rem)] bg-[#0f1f27]">
            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#114C5A" />
                  <stop offset="50%" stopColor="#FFC801" />
                  <stop offset="100%" stopColor="#FF9932" />
                </linearGradient>
                <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFC801" />
                  <stop offset="100%" stopColor="#114C5A" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Paths */}
              <g fill="none" strokeWidth="3" filter="url(#glow)" className="opacity-70 group-hover/canvas:opacity-100 transition-opacity duration-700">
                {/* Webhook -> AI */}
                <path d="M 180 200 C 250 200, 300 150, 400 150" stroke="url(#flowGrad1)" strokeDasharray="8 8" className="animate-dash-fast" />
                {/* AI -> CRM */}
                <path d="M 600 150 C 700 150, 750 100, 800 100" stroke="url(#flowGrad2)" strokeDasharray="8 8" className="animate-dash-fast" />
                {/* AI -> Slack */}
                <path d="M 600 150 C 700 150, 750 300, 800 300" stroke="url(#flowGrad2)" strokeDasharray="8 8" className="animate-dash-fast" />
              </g>
            </svg>

            {/* Nodes */}
            {/* Webhook Node */}
            <div className="absolute left-[10%] top-[40%] w-48 glass-card border-mint/30 rounded-xl p-3 z-10 animate-float-slow hover:border-mint/60 hover:shadow-[0_0_20px_rgba(217,232,226,0.15)] transition-all cursor-default group" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-mint/20 flex items-center justify-center group-hover:bg-mint/30 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer"></div>
                  <svg className="w-5 h-5 text-powder" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-powder">Webhook</h4>
                  <p className="text-[10px] text-mint">Catch Hook</p>
                </div>
              </div>
              <div className="w-full bg-oceanic rounded p-1.5 text-[10px] font-mono text-mint/60 truncate flex items-center justify-between">
                Waiting for event...
                <span className="w-1.5 h-1.5 rounded-full bg-mint/40 animate-pulse"></span>
              </div>
            </div>

            {/* AI Agent Node */}
            <div className="absolute left-[40%] top-[30%] w-56 glass-card border-forsythia/50 rounded-xl p-3 z-10 shadow-[0_0_20px_rgba(255,200,1,0.2)] animate-float hover:scale-105 transition-transform duration-300 group" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 rounded-xl border border-forsythia/0 group-hover:border-forsythia/50 animate-[pulse-glow_2s_infinite]"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center shadow-[0_0_10px_rgba(255,200,1,0.5)]">
                  <svg className="w-5 h-5 text-oceanic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forsythia">AI Classifier</h4>
                  <p className="text-[10px] text-mint">LLM Reasoning</p>
                </div>
              </div>
              <div className="w-full bg-oceanic rounded p-1.5 text-[10px] font-mono text-mint/60 relative z-10">
                <span className="text-saffron">Prompt:</span> Analyze lead intention...
                <span className="inline-block w-1.5 h-3 bg-saffron/80 align-middle ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* CRM Node */}
            <div className="absolute left-[75%] top-[15%] w-48 glass-card border-mint/30 rounded-xl p-3 z-10 animate-float-medium hover:border-mint/60 hover:shadow-[0_0_20px_rgba(217,232,226,0.15)] transition-all cursor-default group" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-mint/20 flex items-center justify-center group-hover:bg-mint/30 transition-colors relative overflow-hidden">
                  <span className="font-bold text-powder text-xs relative z-10">CRM</span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer"></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-powder">HubSpot</h4>
                  <p className="text-[10px] text-mint">Create Contact</p>
                </div>
              </div>
            </div>

            {/* Slack Node */}
            <div className="absolute left-[75%] top-[55%] w-48 glass-card border-mint/30 rounded-xl p-3 z-10 animate-float-medium hover:border-mint/60 hover:shadow-[0_0_20px_rgba(217,232,226,0.15)] transition-all cursor-default group" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-mint/20 flex items-center justify-center group-hover:bg-mint/30 transition-colors relative overflow-hidden">
                  <span className="font-bold text-powder text-xs relative z-10">#</span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer"></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-powder">Slack</h4>
                  <p className="text-[10px] text-mint">Send Message</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
