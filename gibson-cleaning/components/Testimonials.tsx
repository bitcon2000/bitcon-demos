'use client';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Tech Solutions Inc.',
    quote: 'Gibson\'s transformed our office. Professional, reliable, and they notice details others miss. Highly recommend!',
    rating: 5,
  },
  {
    name: 'John Winters',
    company: 'Waterloo Medical Clinic',
    quote: 'The sanitation standards are exceptional. Our patients and staff feel confident in the cleanliness. Outstanding service.',
    rating: 5,
  },
  {
    name: 'Emma Chen',
    company: 'Urban Construction Ltd.',
    quote: 'Post-construction cleanup was thorough and efficient. Turned our mess into a pristine space in one day.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Real feedback from real businesses we've helped
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover-lift border-t-4 border-teal"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
