'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-navy">Gibson's</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-smooth">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-smooth">
              Why Us
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-smooth">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-smooth">
              Contact
            </Link>
            <button
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-medium hover:shadow-lg transition-smooth"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#services" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
              Services
            </Link>
            <Link href="#why-us" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
              Why Us
            </Link>
            <Link href="#testimonials" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
              Testimonials
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
              Contact
            </Link>
            <button
              onClick={() => {
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-medium"
            >
              Get Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
