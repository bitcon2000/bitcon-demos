'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold">Gibson's</span>
            </div>
            <p className="text-slate-300 text-sm">
              Premium commercial cleaning services for Waterloo and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="#services" className="hover:text-teal-400 transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-teal-400 transition-smooth">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-teal-400 transition-smooth">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-400 transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Office Cleaning</li>
              <li>Post-Construction</li>
              <li>Medical Facilities</li>
              <li>Carpet & Upholstery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>📞 (519) 555-0123</li>
              <li>📧 info@gibsonscleaning.com</li>
              <li className="mt-4">
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-smooth">
                    f
                  </a>
                  <a href="#" className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-smooth">
                    𝕏
                  </a>
                  <a href="#" className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-smooth">
                    in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Gibson's Janitorial Service. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-teal-400 transition-smooth">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
