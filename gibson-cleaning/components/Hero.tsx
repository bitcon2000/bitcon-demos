'use client';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full pt-20 pb-20 bg-gradient-to-br from-navy via-slate-800 to-teal-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-white" data-animate>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Commercial Cleaning You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">Trust</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Spotless results for offices & facilities in Waterloo Region. Professional service that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleScroll}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:from-teal-400 hover:to-teal-500 transition-smooth hover-lift"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-teal-400 text-teal-300 rounded-xl font-semibold text-lg hover:bg-teal-400/10 transition-smooth"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-full hidden md:flex items-center justify-center" data-animate>
            <div className="relative w-full h-96">
              {/* Gradient card */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent rounded-2xl border border-teal-400/30 backdrop-blur-sm"></div>
              
              {/* Stats boxes */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
                <p className="text-teal-300 font-semibold text-sm mb-2">YEARS EXPERIENCE</p>
                <p className="text-4xl font-bold text-white">15+</p>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
                <p className="text-teal-300 font-semibold text-sm mb-2">SATISFIED CLIENTS</p>
                <p className="text-4xl font-bold text-white">500+</p>
              </div>

              <div className="absolute bottom-1/3 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover-lift">
                <p className="text-teal-100 font-semibold text-xs mb-2">⭐ 4.9/5 RATING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
