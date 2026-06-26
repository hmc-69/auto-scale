import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20" aria-label="Hero Section">
      {/* CSS Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-oceanic"></div>
        {/* Radial Gradient Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-nocturnal blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-nocturnal blur-[100px] opacity-50"></div>
        {/* CSS Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(241, 246, 244, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 246, 244, 0.1) 1px, transparent 1px)',
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-forsythia/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-forsythia tracking-wider uppercase">Platform 2.0 Now Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-powder leading-[1.1] mb-6">
            Automate Everything.<br />
            <span className="text-gradient-accent">Scale Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-mint opacity-90 mb-10 max-w-xl font-sans leading-relaxed">
            The enterprise-grade platform that connects your data, builds AI-driven workflows, and scales operations autonomously. Built for teams that move fast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/start" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-forsythia to-saffron text-oceanic font-bold text-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,200,1,0.4)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia"
            >
              Start Free
            </Link>
            <Link 
              href="/demo" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full glass text-powder font-semibold text-lg hover:bg-nocturnal hover:border-mint/30 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-mint"
            >
              Book Demo
            </Link>
          </div>
        </div>

        {/* Right Side - Visuals */}
        <div className="hidden lg:block relative h-[600px] w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Background Rings */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-mint/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[550px] h-[550px] rounded-full border border-forsythia/10 border-dashed animate-[spin_90s_linear_infinite_reverse]"></div>
            
            {/* SVG Graph Connections */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#114C5A" />
                  <stop offset="50%" stopColor="#FFC801" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#114C5A" />
                </linearGradient>
              </defs>
              <g stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="6 6" className="animate-[dash_30s_linear_infinite]">
                <style>{`
                  @keyframes dash {
                    to { stroke-dashoffset: -1000; }
                  }
                `}</style>
                <path d="M 120,150 C 250,150 250,300 300,300" />
                <path d="M 480,150 C 350,150 350,300 300,300" />
                <path d="M 120,450 C 250,450 250,300 300,300" />
                <path d="M 480,450 C 350,450 350,300 300,300" />
                <path d="M 300,300 C 300,100 300,100 300,50" />
              </g>
            </svg>

            {/* Nodes */}
            {/* Center Node (AI Agent) */}
            <div className="absolute z-10 animate-pulse-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="glass-card w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 border-forsythia/40 relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forsythia/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center shadow-[0_0_15px_rgba(255,200,1,0.6)] text-oceanic font-bold text-xl">
                  AI
                </div>
                <span className="text-[10px] font-mono font-bold text-powder">Core Agent</span>
              </div>
            </div>

            {/* Top Left Node (Slack) */}
            <div className="absolute z-10 animate-float" style={{ top: '25%', left: '20%', transform: 'translate(-50%, -50%)', animationDelay: '0s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm">
                  Sl
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder">Slack Event</span>
                  <span className="text-[10px] text-mint">Trigger</span>
                </div>
              </div>
            </div>

            {/* Top Right Node (CRM) */}
            <div className="absolute z-10 animate-float" style={{ top: '25%', right: '0%', transform: 'translate(-50%, -50%)', animationDelay: '1s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm">
                  CR
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder">HubSpot</span>
                  <span className="text-[10px] text-mint">Update lead</span>
                </div>
              </div>
            </div>

            {/* Bottom Left Node (Database) */}
            <div className="absolute z-10 animate-float" style={{ bottom: '25%', left: '20%', transform: 'translate(-50%, 50%)', animationDelay: '2s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm">
                  DB
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder">PostgreSQL</span>
                  <span className="text-[10px] text-mint">Query data</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Node (Email) */}
            <div className="absolute z-10 animate-float" style={{ bottom: '25%', right: '0%', transform: 'translate(-50%, 50%)', animationDelay: '0.5s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm">
                  Em
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder">SendGrid</span>
                  <span className="text-[10px] text-mint">Send alert</span>
                </div>
              </div>
            </div>

            {/* Top Node (Analytics) */}
            <div className="absolute z-10 animate-float" style={{ top: '5%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '1.5s' }}>
              <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border-mint/20 hover:border-mint/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-nocturnal flex items-center justify-center text-powder font-bold text-sm">
                  An
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-powder">Analytics</span>
                  <span className="text-[10px] text-mint">Log execution</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
