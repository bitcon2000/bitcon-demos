'use client';

const benefits = [
  { title: 'Experienced Team', description: '15+ years serving Waterloo businesses' },
  { title: 'Eco-Friendly Products', description: 'Safe for employees, environment, and budgets' },
  { title: '24/7 Support', description: 'Always available for urgent cleaning needs' },
  { title: 'Fully Insured', description: 'Complete coverage and peace of mind' },
  { title: 'Custom Plans', description: 'Tailored solutions that fit your schedule' },
  { title: 'Quality Guaranteed', description: 'If you\'re not satisfied, we\'re not done' },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Why Choose Gibson's
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Premium service, professional results, every single time
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-smooth border border-gray-100"
            >
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3 ml-12">{benefit.title}</h3>
              <p className="text-gray-600 ml-12">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy to-teal rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join 200+ satisfied businesses in Waterloo Region
          </p>
          <button className="px-8 py-4 bg-white text-teal font-semibold rounded-xl hover-lift">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
