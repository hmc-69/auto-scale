"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-layout ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center text-oceanic font-bold text-xl group-hover:shadow-[0_0_15px_rgba(255,200,1,0.5)] transition-hover">
            A
          </div>
          <span className="font-mono font-bold text-xl tracking-tight text-powder">Auto<span className="text-forsythia">Scale</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-mint hover:text-forsythia transition-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-sm px-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/signin" 
            className="text-sm font-medium text-powder hover:text-mint transition-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md px-3 py-2"
          >
            Sign In
          </Link>
          <Link 
            href="/start" 
            className="text-sm font-medium bg-forsythia text-oceanic px-5 py-2.5 rounded-full hover:bg-saffron hover:-translate-y-0.5 transition-hover shadow-[0_0_10px_rgba(255,200,1,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic focus-visible:ring-forsythia"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-powder transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-powder transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-powder transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-oceanic/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 flex flex-col pt-24 px-6 ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-mono font-medium text-mint hover:text-forsythia transition-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full h-px bg-nocturnal my-4"></div>
          <Link 
            href="/signin" 
            className="text-lg font-medium text-powder hover:text-mint transition-hover"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link 
            href="/start" 
            className="w-full text-center text-lg font-medium bg-forsythia text-oceanic px-6 py-3 rounded-full mt-4 hover:bg-saffron transition-hover"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};
