"use client";

import React, { useState, createContext, useContext, memo } from 'react';

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

// Isolated Price component to prevent re-rendering the whole card
const PriceDisplay = memo(({ tier }: { tier: keyof typeof pricingMatrix }) => {
  const { currency, billing } = useContext(PricingContext);
  
  const basePrice = pricingMatrix[tier];
  const converted = basePrice * conversionRates[currency];
  const discounted = billing === 'annual' ? converted * 0.8 : converted;
  
  // Format based on currency
  const finalPrice = currency === 'INR' 
    ? Math.round(discounted) 
    : Math.ceil(discounted) - 0.01; // E.g. 28.99

  return (
    <div className="flex items-baseline gap-1 my-6 transition-all">
      <span className="text-2xl font-sans text-mint/60">{currencySymbols[currency]}</span>
      <span className="text-5xl font-mono font-bold text-powder tracking-tight tabular-nums">
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
    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16 animate-fade-in-up">
      <div className="glass-card rounded-full p-1 inline-flex items-center">
        <button
          onClick={() => setBilling('monthly')}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
            billing === 'monthly' ? 'bg-nocturnal text-powder shadow-md' : 'text-mint hover:text-powder hover:bg-nocturnal/50'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling('annual')}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
            billing === 'annual' ? 'bg-nocturnal text-powder shadow-md' : 'text-mint hover:text-powder hover:bg-nocturnal/50'
          }`}
        >
          Annual <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-forsythia text-oceanic">Save 20%</span>
        </button>
      </div>

      <div className="relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="appearance-none glass-card bg-transparent border border-mint/20 text-powder text-sm rounded-lg px-4 py-2.5 pr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia cursor-pointer"
          aria-label="Select Currency"
        >
          <option value="USD" className="bg-oceanic text-powder">USD ($)</option>
          <option value="EUR" className="bg-oceanic text-powder">EUR (€)</option>
          <option value="INR" className="bg-oceanic text-powder">INR (₹)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-mint">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
});

PricingControls.displayName = 'PricingControls';

// Static pricing card frame to avoid re-renders
const PricingCards = memo(() => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Starter */}
      <div className="glass-card rounded-3xl p-8 border border-mint/10 hover:border-mint/30 transition-all duration-300 flex flex-col group">
        <h3 className="text-xl font-bold text-powder mb-2">Starter</h3>
        <p className="text-mint/70 text-sm">Perfect for individuals and small side projects.</p>
        
        <PriceDisplay tier="starter" />
        
        <button className="w-full py-3 rounded-xl border border-mint/20 text-powder font-semibold hover:bg-nocturnal hover:border-mint/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia mb-8">
          Get Started
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
                <svg className="w-5 h-5 text-forsythia shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Professional */}
      <div className="glass-card rounded-3xl p-8 border border-forsythia/40 shadow-[0_0_30px_rgba(255,200,1,0.1)] hover:shadow-[0_0_40px_rgba(255,200,1,0.2)] transition-all duration-300 flex flex-col relative scale-100 md:scale-105 z-10 group bg-gradient-to-b from-nocturnal/80 to-oceanic/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-forsythia to-saffron text-oceanic text-xs font-bold uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
        <h3 className="text-xl font-bold text-forsythia mb-2">Professional</h3>
        <p className="text-mint/70 text-sm">For growing teams that need more power and support.</p>
        
        <PriceDisplay tier="pro" />
        
        <button className="w-full py-3 rounded-xl bg-forsythia text-oceanic font-bold hover:bg-saffron hover:shadow-[0_0_15px_rgba(255,200,1,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia mb-8">
          Start Free Trial
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
                <svg className="w-5 h-5 text-forsythia shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enterprise */}
      <div className="glass-card rounded-3xl p-8 border border-mint/10 hover:border-mint/30 transition-all duration-300 flex flex-col group">
        <h3 className="text-xl font-bold text-powder mb-2">Enterprise</h3>
        <p className="text-mint/70 text-sm">Advanced security and control for large organizations.</p>
        
        <PriceDisplay tier="enterprise" />
        
        <button className="w-full py-3 rounded-xl border border-mint/20 text-powder font-semibold hover:bg-nocturnal hover:border-mint/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia mb-8">
          Contact Sales
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
                <svg className="w-5 h-5 text-forsythia shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  return (
    <PricingContext.Provider value={{ currency, billing, setCurrency, setBilling }}>
      <section id="pricing" className="py-24 bg-oceanic" aria-label="Pricing Options">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
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
