'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-slate-600">
            No obligation. No pressure. Just honest pricing and professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="quote-form" className="bg-white rounded-2xl p-8 shadow-sm" data-animate>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-smooth"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-smooth"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-smooth"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-smooth"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-smooth"
                >
                  <option value="">Select a service</option>
                  <option value="office">Office Cleaning</option>
                  <option value="construction">Post-Construction Cleanup</option>
                  <option value="medical">Medical Facilities</option>
                  <option value="carpet">Carpet & Upholstery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-smooth resize-none"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg transition-smooth hover-lift"
              >
                Request Free Quote
              </button>

              {submitted && (
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg text-teal-700 font-medium">
                  ✓ Thank you! We'll be in touch within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8" data-animate>
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 text-xl">
                      📞
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <p className="text-slate-600">(519) 555-0123</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 text-xl">
                      📧
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <p className="text-slate-600">info@gibsonscleaning.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 text-xl">
                      📍
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Location</p>
                    <p className="text-slate-600">Waterloo, Ontario, Canada</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 text-xl">
                      🕐
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Hours</p>
                    <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sat - Sun: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl p-8 h-80 flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <p className="text-4xl mb-4">📍</p>
                <p className="text-slate-600 font-medium">Waterloo, Ontario</p>
                <p className="text-sm text-slate-500 mt-2">Serving the Greater Waterloo Region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
