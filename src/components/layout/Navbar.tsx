"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useMagnetic } from '@/hooks/useMagnetic';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useMousePosition();

  // Magnetic refs for buttons
  const getStartedRef = useMagnetic(15) as React.RefObject<HTMLAnchorElement>;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-layout duration-500 ${scrolled ? 'bg-oceanic/70 backdrop-blur-xl border-b border-mint/10 py-4 shadow-lg' : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center text-oceanic font-bold text-xl group-hover:shadow-[0_0_20px_rgba(255,200,1,0.6)] group-hover:rotate-12 transition-all duration-300">
            A
          </div>
          <span className="font-mono font-bold text-xl tracking-tight text-powder transition-colors group-hover:text-white">Auto<span className="text-forsythia group-hover:text-saffron transition-colors">Scale</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-mint hover:text-powder transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-sm px-1 py-1 group"
            >
              {link.name}
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-forsythia to-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Link 
            href="/signin" 
            className="text-sm font-medium text-powder hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md px-3 py-2 relative group overflow-hidden"
          >
            <span className="relative z-10">Sign In</span>
            <span className="absolute inset-0 bg-white/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
          </Link> */}
          <Link
            href="/start"
            ref={getStartedRef}
            className="relative overflow-hidden text-sm font-medium bg-gradient-to-r from-forsythia to-saffron text-oceanic px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(255,200,1,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md z-50 relative group bg-white/5 border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`block w-5 h-[2px] bg-powder transition-all duration-300 rounded-full ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : 'group-hover:w-6'}`}></span>
          <span className={`block w-5 h-[2px] bg-powder transition-all duration-300 rounded-full ${mobileMenuOpen ? 'opacity-0' : 'opacity-100 group-hover:w-4'}`}></span>
          <span className={`block w-5 h-[2px] bg-powder transition-all duration-300 rounded-full ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : 'group-hover:w-6'}`}></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-oceanic/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col pt-28 px-6 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col gap-6 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-mono font-medium text-mint hover:text-forsythia transition-colors relative group"
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-mint/20 to-transparent my-4"></div>
          <Link
            href="/signin"
            className="text-xl font-medium text-powder hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/start"
            className="w-full max-w-xs text-center text-xl font-medium bg-gradient-to-r from-forsythia to-saffron text-oceanic px-6 py-4 rounded-full mt-4 hover:shadow-[0_0_20px_rgba(255,200,1,0.4)] transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};
