'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Get Your Free Quote
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          No obligation. No hidden fees. Just honest pricing.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tell us about your needs</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Describe your cleaning requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal text-white font-semibold py-4 rounded-lg hover:bg-teal/90 transition-smooth"
              >
                Request a Free Quote
              </button>
            </form>
          </div>

          {/* Info + Map */}
          <div className="space-y-8">
            <div className="bg-light-gray p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-teal text-2xl">📍</div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">Waterloo, Ontario, Canada</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-teal text-2xl">📞</div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(519) 555-0123</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-teal text-2xl">✉️</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@gibsonscleaning.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-teal text-2xl">⏰</div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8am-6pm | Sat-Sun: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center border-2 border-gray-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
