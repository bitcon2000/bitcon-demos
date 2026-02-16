'use client';

export default function WhyChooseUs() {
  const benefits = [
    {
      number: '1',
      title: 'Certified & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage and quality guarantees.',
    },
    {
      number: '2',
      title: 'Eco-Friendly Practices',
      description: 'We use green cleaning products and sustainable methods that are safe for your environment.',
    },
    {
      number: '3',
      title: 'Flexible Scheduling',
      description: 'Work around your schedule with flexible hours, including after-hours and weekend services.',
    },
    {
      number: '4',
      title: 'Competitive Pricing',
      description: 'Premium service at fair prices. Free quotes and transparent billing with no hidden charges.',
    },
    {
      number: '5',
      title: '24/7 Support',
      description: 'Responsive customer service team available around the clock for questions and emergency requests.',
    },
    {
      number: '6',
      title: 'Quality Guarantee',
      description: 'We stand behind our work with satisfaction guarantees and rapid response to any concerns.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Choose Gibson's?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the difference that professional care and attention to detail can make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative group"
              data-animate
            >
              {/* Card with subtle shadow */}
              <div className="bg-gradient-to-br from-white to-light-gray rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-smooth">
                {/* Number circle */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white font-bold text-xl mb-6">
                  {benefit.number}
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-teal-50 group-hover:scale-110 transition-transform"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
