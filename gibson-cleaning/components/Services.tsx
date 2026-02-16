'use client';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Office Cleaning',
      description: 'Daily, weekly, or monthly office maintenance with attention to detail. Professional janitorial service for your workspace.',
      icon: '🏢',
      features: ['Desk sanitization', 'Floor care', 'Restroom cleaning', 'Window washing'],
    },
    {
      id: 2,
      title: 'Post-Construction Cleanup',
      description: 'Comprehensive cleaning after construction or renovation projects. We handle debris removal and detailed finishing touches.',
      icon: '🏗️',
      features: ['Debris removal', 'Dust control', 'Surface cleaning', 'Final polish'],
    },
    {
      id: 3,
      title: 'Medical Facilities',
      description: 'Specialized cleaning for healthcare environments with strict sanitization protocols and medical-grade standards.',
      icon: '⚕️',
      features: ['HIPAA compliant', 'Infection control', 'Biohazard cleanup', 'Sterilization'],
    },
    {
      id: 4,
      title: 'Carpet & Upholstery',
      description: 'Professional deep cleaning services for carpets, rugs, and furniture using eco-friendly methods.',
      icon: '✨',
      features: ['Stain removal', 'Odor elimination', 'Eco-friendly', 'Quick dry'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive commercial cleaning solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-smooth hover-lift border border-slate-100 overflow-hidden"
              data-animate
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>

              <div className="relative">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-smooth">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
