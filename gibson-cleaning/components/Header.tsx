'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal font-display">
          Gibson's
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="#services" className="text-dark-gray hover:text-teal transition-smooth">
            Services
          </Link>
          <Link href="#why" className="text-dark-gray hover:text-teal transition-smooth">
            Why Us
          </Link>
          <Link href="#testimonials" className="text-dark-gray hover:text-teal transition-smooth">
            Testimonials
          </Link>
          <Link href="#contact" className="text-dark-gray hover:text-teal transition-smooth">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-dark-gray"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <Link href="#services" className="text-dark-gray hover:text-teal">
                Services
              </Link>
              <Link href="#why" className="text-dark-gray hover:text-teal">
                Why Us
              </Link>
              <Link href="#testimonials" className="text-dark-gray hover:text-teal">
                Testimonials
              </Link>
              <Link href="#contact" className="text-dark-gray hover:text-teal">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
