"use client";

import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: "How does the AI reasoning engine work?",
    answer: "Our engine uses fine-tuned large language models tailored for enterprise data workflows. It analyzes your structured and unstructured data, determines the most efficient routing, and executes actions across your connected apps autonomously while adhering to strict security constraints."
  },
  {
    question: "Do I need coding experience to use AutoScale?",
    answer: "Not at all. While we offer a robust API and custom scripting for developers, our visual Workflow Builder and Natural Language Automation allow non-technical users to build complex logic by simply describing what they want to achieve."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our foundation. We are SOC2 Type II compliant, offer end-to-end encryption, and never use your private data to train our foundational models. Enterprise customers also get dedicated VPC deployment options."
  },
  {
    question: "Can I connect custom internal tools?",
    answer: "Yes. AutoScale supports custom Webhooks and generic REST/GraphQL API connections. If your internal tool has an API, you can integrate it into your workflows seamlessly."
  },
  {
    question: "What happens if a workflow fails?",
    answer: "Our system includes predictive failure analysis and automatic retry logic. If a hard failure occurs, the workflow state is saved, an alert is dispatched, and you can manually resume the process exactly where it stopped from the dashboard."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const revealRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="faq" className="py-24 bg-nocturnal/20 relative overflow-hidden" aria-label="Frequently Asked Questions" ref={revealRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(17,76,90,0.2)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-16 reveal fade-up">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-powder mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-mint/80 font-sans">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`reveal fade-up glass-card rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group ${
                  isOpen ? 'border-forsythia/40 shadow-[0_0_20px_rgba(255,200,1,0.1)] -translate-y-1' : 'border-mint/10 hover:border-mint/30 hover:-translate-y-0.5'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  className="w-full text-left px-6 md:px-8 py-6 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-inset"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-forsythia' : 'text-powder group-hover:text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isOpen ? 'border-forsythia text-forsythia rotate-180 bg-forsythia/10 scale-110 shadow-[0_0_10px_rgba(255,200,1,0.2)]' : 'border-mint/20 text-mint group-hover:border-mint/50 group-hover:text-powder'
                  }`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`px-6 md:px-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top ${
                    isOpen ? 'max-h-96 pb-8 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 overflow-hidden'
                  }`}
                >
                  <p className="text-mint/80 font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
