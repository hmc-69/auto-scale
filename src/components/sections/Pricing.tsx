"use client";

import React, { useState, createContext, useContext, memo } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Currency = 'USD' | 'EUR' | 'INR';
type Billing = 'monthly' | 'annual';

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  INR: '₹'
};

const conversionRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  INR: 83.5
};

const pricingMatrix = {
  starter: 29,
  pro: 79,
  enterprise: 199
};

const PricingContext = createContext<{
  currency: Currency;
  billing: Billing;
  setCurrency: (c: Currency) => void;
  setBilling: (b: Billing) => void;
}>({
  currency: 'USD',
  billing: 'monthly',
  setCurrency: () => {},
  setBilling: () => {}
});

const PriceDisplay = memo(({ tier }: { tier: keyof typeof pricingMatrix }) => {
  const { currency, billing } = useContext(PricingContext);
  
  const basePrice = pricingMatrix[tier];
  const converted = basePrice * conversionRates[currency];
  const discounted = billing === 'annual' ? converted * 0.8 : converted;
  
  const finalPrice = currency === 'INR' 
    ? Math.round(discounted) 
    : Math.ceil(discounted) - 0.01;

  return (
    <div className="flex items-baseline gap-1 my-6 transition-all">
      <span className="text-2xl font-sans text-mint/60">{currencySymbols[currency]}</span>
      <span className="text-5xl font-mono font-bold text-powder tracking-tight tabular-nums transition-all duration-300">
        {currency === 'INR' ? finalPrice.toLocaleString('en-IN') : finalPrice.toFixed(2)}
      </span>
      <span className="text-sm font-sans text-mint/60 ml-2">/ month</span>
    </div>
  );
});

PriceDisplay.displayName = 'PriceDisplay';

const PricingControls = memo(() => {
  const { currency, billing, setCurrency, setBilling } = useContext(PricingContext);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16 reveal fade-up">
      <div className="glass-card rounded-full p-1 inline-flex items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
        <button
          onClick={() => setBilling('monthly')}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ${
            billing === 'monthly' ? 'bg-nocturnal text-powder shadow-[0_0_15px_rgba(17,76,90,0.5)]' : 'text-mint hover:text-powder hover:bg-nocturnal/50'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling('annual')}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 relative z-10 ${
            billing === 'annual' ? 'bg-nocturnal text-powder shadow-[0_0_15px_rgba(17,76,90,0.5)]' : 'text-mint hover:text-powder hover:bg-nocturnal/50'
          }`}
        >
          Annual <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-forsythia text-oceanic relative overflow-hidden group-hover:animate-[pulse-glow_2s_infinite]">Save 20%</span>
        </button>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-forsythia/20 to-saffron/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="relative appearance-none glass-card bg-transparent border border-mint/20 text-powder text-sm rounded-lg px-4 py-2.5 pr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia cursor-pointer transition-colors hover:border-mint/50"
          aria-label="Select Currency"
        >
          <option value="USD" className="bg-oceanic text-powder">USD ($)</option>
          <option value="EUR" className="bg-oceanic text-powder">EUR (€)</option>
          <option value="INR" className="bg-oceanic text-powder">INR (₹)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-mint transition-transform group-hover:translate-y-0.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
});

PricingControls.displayName = 'PricingControls';

const PricingCards = memo(() => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Starter */}
      <div className="reveal fade-up glass-card rounded-3xl p-8 border border-mint/10 hover:border-mint/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col group hover:-translate-y-2" style={{ transitionDelay: '0ms' }}>
        <h3 className="text-xl font-bold text-powder mb-2 group-hover:text-white transition-colors">Starter</h3>
        <p className="text-mint/70 text-sm">Perfect for individuals and small side projects.</p>
        
        <PriceDisplay tier="starter" />
        
        <button className="relative overflow-hidden w-full py-3 rounded-xl border border-mint/20 text-powder font-semibold hover:bg-nocturnal hover:border-mint/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia mb-8 group/btn">
          <span className="relative z-10">Get Started</span>
          <span className="absolute inset-0 bg-white/5 -translate-x-full group-hover/btn:animate-shimmer"></span>
        </button>

        <div className="flex-1">
          <p className="text-sm font-semibold text-powder mb-4">What's included</p>
          <ul className="space-y-3">
            {[
              "Up to 5 active workflows",
              "1,000 tasks per month",
              "Standard integrations",
              "Community support"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-mint">
                <svg className="w-5 h-5 text-forsythia shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Professional */}
      <div className="reveal fade-up glass-card rounded-3xl p-8 border border-forsythia/40 shadow-[0_0_30px_rgba(255,200,1,0.15)] hover:shadow-[0_15px_50px_rgba(255,200,1,0.25)] transition-all duration-500 flex flex-col relative scale-100 md:scale-105 z-10 group bg-gradient-to-b from-nocturnal/80 to-oceanic/80 hover:-translate-y-3" style={{ transitionDelay: '100ms' }}>
        {/* Animated Gradient Border Overlay */}
        <div className="absolute inset-0 rounded-3xl border border-forsythia/0 group-hover:border-forsythia/60 animate-[pulse-glow_3s_infinite] pointer-events-none transition-colors duration-500"></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-forsythia to-saffron text-oceanic text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse-glow">
          Most Popular
        </div>
        <h3 className="text-xl font-bold text-forsythia mb-2 group-hover:text-saffron transition-colors">Professional</h3>
        <p className="text-mint/70 text-sm">For growing teams that need more power and support.</p>
        
        <PriceDisplay tier="pro" />
        
        <button className="relative overflow-hidden w-full py-3 rounded-xl bg-gradient-to-r from-forsythia to-saffron text-oceanic font-bold hover:shadow-[0_0_20px_rgba(255,200,1,0.5)] hover:scale-[1.02] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia mb-8 group/btn">
          <span className="relative z-10">Start Free Trial</span>
          <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:animate-shimmer"></span>
        </button>

        <div className="flex-1">
          <p className="text-sm font-semibold text-powder mb-4">Everything in Starter, plus</p>
          <ul className="space-y-3">
            {[
              "Unlimited active workflows",
              "10,000 tasks per month",
              "Premium API integrations",
              "Custom AI logic builder",
              "Priority email support"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-powder">
                <svg className="w-5 h-5 text-forsythia shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enterprise */}
      <div className="reveal fade-up glass-card rounded-3xl p-8 border border-mint/10 hover:border-mint/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col group hover:-translate-y-2" style={{ transitionDelay: '200ms' }}>
        <h3 className="text-xl font-bold text-powder mb-2 group-hover:text-white transition-colors">Enterprise</h3>
        <p className="text-mint/70 text-sm">Advanced security and control for large organizations.</p>
        
        <PriceDisplay tier="enterprise" />
        
        <button className="relative overflow-hidden w-full py-3 rounded-xl border border-mint/20 text-powder font-semibold hover:bg-nocturnal hover:border-mint/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia mb-8 group/btn">
          <span className="relative z-10">Contact Sales</span>
          <span className="absolute inset-0 bg-white/5 -translate-x-full group-hover/btn:animate-shimmer"></span>
        </button>

        <div className="flex-1">
          <p className="text-sm font-semibold text-powder mb-4">Everything in Pro, plus</p>
          <ul className="space-y-3">
            {[
              "Unlimited tasks",
              "SSO & advanced security",
              "Dedicated success manager",
              "Custom SLA guarantees",
              "On-premise deployment option"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-mint">
                <svg className="w-5 h-5 text-forsythia shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

PricingCards.displayName = 'PricingCards';

export const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billing, setBilling] = useState<Billing>('monthly');
  const revealRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <PricingContext.Provider value={{ currency, billing, setCurrency, setBilling }}>
      <section id="pricing" className="py-24 bg-oceanic" aria-label="Pricing Options" ref={revealRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal fade-up">
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-powder mb-6">
              Predictable pricing for scale
            </h2>
            <p className="text-lg text-mint/80 font-sans">
              Start for free, upgrade when you need more power. No hidden fees or surprise limits.
            </p>
          </div>

          <PricingControls />
          <PricingCards />
          
        </div>
      </section>
    </PricingContext.Provider>
  );
};
