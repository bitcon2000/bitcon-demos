'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-teal">Gibson's</h3>
            <p className="text-gray-300">
              Premium commercial cleaning services in Waterloo Region since 2009.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-teal transition-smooth">Office Cleaning</a></li>
              <li><a href="#services" className="hover:text-teal transition-smooth">Post-Construction</a></li>
              <li><a href="#services" className="hover:text-teal transition-smooth">Medical Facilities</a></li>
              <li><a href="#services" className="hover:text-teal transition-smooth">Facility Maintenance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#why" className="hover:text-teal transition-smooth">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-teal transition-smooth">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-teal transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-teal transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(519) 555-0123</li>
              <li>info@gibsonscleaning.com</li>
              <li>Waterloo, Ontario</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Gibson's Janitorial Service. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal transition-smooth">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal transition-smooth">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 002.856-3.586 10 10 0 01-2.836.769 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal transition-smooth">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM16 16h-2v-3c0-.837-.029-1.917-1.168-1.917-1.168 0-1.347.912-1.347 1.853v3.064h-2v-6h1.921v.812h.027c.268-.507.922-1.04 1.898-1.04 2.03 0 2.405 1.335 2.405 3.071v3.157z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
