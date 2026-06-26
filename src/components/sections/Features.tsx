"use client";

import React, { useState, createContext, useContext, useEffect } from 'react';
import { 
  ArrowPathIcon, 
  ArrowTrendingUpIcon, 
  ChartPieIcon, 
  Cog8ToothIcon, 
  Cube16SolidIcon 
} from '@/components/ui/Icons';

// Features Context
const FeaturesContext = createContext<{
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  isMobile: boolean;
}>({
  activeIndex: 0,
  setActiveIndex: () => {},
  isMobile: false,
});

const features = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Deploy autonomous agents that reason, plan, and execute complex workflows without human intervention.',
    icon: <Cube16SolidIcon className="w-6 h-6 text-forsythia" />,
    preview: 'Agent analyzing customer data...',
  },
  {
    id: 'workflow-builder',
    title: 'Workflow Builder',
    description: 'Visual drag-and-drop interface to connect your entire tech stack in minutes.',
    icon: <ArrowPathIcon className="w-6 h-6 text-saffron" />,
    preview: 'Connecting Slack to Salesforce...',
  },
  {
    id: 'nlp-automation',
    title: 'Natural Language Automation',
    description: 'Simply type what you want to automate, and our engine builds the logic for you.',
    icon: <Cog8ToothIcon className="w-6 h-6 text-mint" />,
    preview: '"When a new lead arrives, send a welcome email."',
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC2 compliance, and granular role-based access control.',
    icon: <ChartPieIcon className="w-6 h-6 text-powder" />,
    preview: 'Security dashboard preview...',
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    description: 'Real-time monitoring of all automated processes with predictive failure alerts.',
    icon: <ArrowTrendingUpIcon className="w-6 h-6 text-forsythia" />,
    preview: 'Performance metrics chart...',
  }
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FeaturesContext.Provider value={{ activeIndex, setActiveIndex, isMobile }}>
      <section id="features" className="py-24 bg-oceanic" aria-label="Platform Features">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-powder mb-6">
              Intelligence at every layer
            </h2>
            <p className="text-lg text-mint/80 font-sans">
              Everything you need to automate your business, from simple data transfers to complex AI reasoning chains.
            </p>
          </div>

          {isMobile ? <MobileAccordion /> : <DesktopBento />}
        </div>
      </section>
    </FeaturesContext.Provider>
  );
};

const MobileAccordion = () => {
  const { activeIndex, setActiveIndex } = useContext(FeaturesContext);

  return (
    <div className="flex flex-col gap-4">
      {features.map((feature, index) => {
        const isActive = activeIndex === index;
        return (
          <div 
            key={feature.id}
            className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? 'border-forsythia/40 shadow-[0_0_15px_rgba(255,200,1,0.1)]' : 'border-mint/10'}`}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-inset"
              onClick={() => setActiveIndex(isActive ? -1 : index)}
              aria-expanded={isActive}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-nocturnal' : 'bg-oceanic'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-powder">{feature.title}</h3>
              </div>
              <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              className={`px-6 transition-all duration-300 ease-in-out ${isActive ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              <p className="text-mint/80 mb-4">{feature.description}</p>
              <div className="w-full h-32 rounded-xl bg-nocturnal border border-mint/10 flex items-center justify-center p-4">
                <span className="text-xs font-mono text-mint/60">{feature.preview}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DesktopBento = () => {
  const { activeIndex, setActiveIndex } = useContext(FeaturesContext);

  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[600px]">
      {/* Interactive List (Left Column) */}
      <div className="col-span-4 row-span-2 flex flex-col gap-4">
        {features.map((feature, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={feature.id}
              className={`text-left p-5 rounded-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia ${
                isActive 
                  ? 'glass-card border-forsythia/40 shadow-[0_0_15px_rgba(255,200,1,0.1)] translate-x-2' 
                  : 'bg-nocturnal/20 border border-mint/5 hover:bg-nocturnal/50 hover:border-mint/20'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-selected={isActive}
              role="tab"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-nocturnal' : 'bg-transparent'}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-forsythia' : 'text-powder'}`}>
                  {feature.title}
                </h3>
              </div>
              <p className={`text-sm transition-opacity duration-300 ${isActive ? 'text-mint opacity-100' : 'text-mint/60 opacity-0 h-0 overflow-hidden'}`}>
                {feature.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Preview Area (Right Column) */}
      <div className="col-span-8 row-span-2 glass-card rounded-3xl border border-mint/20 relative overflow-hidden flex flex-col group">
        <div className="absolute inset-0 bg-gradient-to-br from-forsythia/5 to-transparent"></div>
        
        {/* Top Bar */}
        <div className="h-12 border-b border-mint/10 flex items-center px-6 gap-2 bg-oceanic/50">
          <div className="w-3 h-3 rounded-full bg-mint/20"></div>
          <div className="w-3 h-3 rounded-full bg-mint/20"></div>
          <div className="w-3 h-3 rounded-full bg-mint/20"></div>
          <div className="ml-4 px-3 py-1 rounded-md bg-nocturnal/50 text-xs font-mono text-mint/60 flex-1">
            platform://feature/{features[activeIndex].id}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 p-8 flex items-center justify-center relative">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-500 ${
                activeIndex === index 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="w-full max-w-md aspect-video rounded-xl bg-oceanic border border-mint/10 flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:border-forsythia/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,1,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Placeholder for the complex visual preview */}
                <div className="text-center relative z-10">
                  <div className="inline-block p-4 rounded-2xl bg-nocturnal/80 border border-mint/20 mb-4 animate-float">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-mono text-powder mb-2">{feature.title}</h4>
                  <p className="text-sm text-mint/60">{feature.preview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
