'use client';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy via-teal to-navy text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight fade-in-up">
          Premium Commercial Cleaning You Can Trust
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
          Spotless Results for Offices & Facilities in Waterloo Region
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button className="px-8 py-4 bg-teal text-navy font-semibold rounded-xl hover-lift shadow-lg">
            Get a Free Quote
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover-lift hover:bg-white hover:text-navy transition-smooth">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-20 max-w-4xl mx-auto">
        <div className="aspect-video bg-gradient-to-br from-teal/20 to-navy/20 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center">
          <svg className="w-16 h-16 text-white/50" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6.5c0-.827.373-1.563 1.065-2.065A4.5 4.5 0 0110 2a4.5 4.5 0 016.935 2.435c.692.502 1.065 1.238 1.065 2.065 0 .827-.373 1.563-1.065 2.065A4.5 4.5 0 0110 11a4.5 4.5 0 01-6.935-2.435C2.373 8.063 2 7.327 2 6.5zm0 7c0-.827.373-1.563 1.065-2.065A4.5 4.5 0 0110 9a4.5 4.5 0 016.935 2.435c.692.502 1.065 1.238 1.065 2.065 0 .827-.373 1.563-1.065 2.065A4.5 4.5 0 0110 19a4.5 4.5 0 01-6.935-2.435C2.373 16.563 2 15.827 2 15z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
