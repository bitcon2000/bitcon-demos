'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Gibson's transformed our office space. The attention to detail is unmatched. They're reliable, professional, and always go above and beyond.",
      author: 'Sarah Mitchell',
      title: 'Office Manager',
      company: 'Tech Solutions Inc.',
      rating: 5,
    },
    {
      id: 2,
      quote: "After our renovation, they cleaned up everything perfectly. Couldn't have asked for a more thorough post-construction cleanup. Highly recommended!",
      author: 'David Chen',
      title: 'Building Owner',
      company: 'Waterloo Properties',
      rating: 5,
    },
    {
      id: 3,
      quote: "For our medical facility, we needed expert care and strict protocols. Gibson's exceeded our expectations in every way. Our patients notice the pristine environment.",
      author: 'Dr. Jennifer Park',
      title: 'Clinic Director',
      company: 'Wellness Medical Center',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-navy via-slate-900 to-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Waterloo's Best
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See what our clients say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-smooth hover-lift"
              data-animate
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-slate-200 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-teal-300">{testimonial.title}</p>
                <p className="text-xs text-slate-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-animate>
          <p className="text-lg text-slate-300 mb-6">
            Join hundreds of satisfied clients in Waterloo
          </p>
          <button
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-smooth hover-lift"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
