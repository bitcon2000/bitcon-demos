'use client';

const services = [
  {
    title: 'Office Cleaning',
    description: 'Daily, weekly, or monthly office maintenance with attention to detail. Professional teams ensure your workspace stays pristine.',
    icon: '🏢',
  },
  {
    title: 'Post-Construction Cleanup',
    description: 'Comprehensive cleanup after renovations. We handle debris, dust, and specialized deep cleaning for new or renovated spaces.',
    icon: '🏗️',
  },
  {
    title: 'Medical Facilities',
    description: 'Specialized sanitization for healthcare environments. HIPAA-compliant, hospital-grade cleaning with proper protocols.',
    icon: '🏥',
  },
  {
    title: 'Facility Maintenance',
    description: 'Customized maintenance plans for any commercial facility. From lobbies to restrooms, we keep everything spotless.',
    icon: '🔧',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Tailored cleaning solutions for every business need in Waterloo Region
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover-lift border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-navy">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-teal font-semibold flex items-center gap-2 hover:gap-3 transition-smooth">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
