import Link from 'next/link';
import React from 'react';

export default function WorkProcess() {
  const services = [
    {
      id: 1,
      title: "Facility Management",
      description: "Comprehensive facility management solutions ensuring efficient, safe, and well-maintained environments.",
      features: ["24/7 Maintenance", "Energy Management", "Space Optimization"],
      icon: "🏢"
    },
    // {
    //   id: 2,
    //   title: "Security Services",
    //   description: "Z Plus Security services providing specialized protection for VIPs, VVIPs, and corporate organizations.",
    //   features: ["VIP Protection", "Corporate Security", "24/7 Monitoring"],
    //   icon: "🛡️"
    // },
    {
      id: 3,
      title: "Payroll Management",
      description: "Integrated payroll solutions allowing you to focus on your core business operations.",
      features: ["Automated Processing", "Compliance Management", "Employee Self-Service"],
      icon: "💰"
    },
    {
      id: 4,
      title: "Green Energy Solutions",
      description: "Sustainable energy solutions including our 50MW solar plant and renewable energy initiatives.",
      features: ["Solar Installation", "Energy Audits", "Sustainability Consulting"],
      icon: "🌱"
    },
    {
      id: 5,
      title: "Real Estate Services",
      description: "Complete real estate solutions from property development to investment advisory services.",
      features: ["Property Development", "Real Estate Sales", "Investment Advisory"],
      icon: "🏠"
    },
    {
      id: 6,
      title: "IT Solutions",
      description: "Custom software development and IT solutions through our IndoPlus division.",
      features: ["Web Development", "Mobile Apps", "Digital Solutions"],
      icon: "💻"
    },
    {
      id: 7,
      title: "Utility Services",
      description: "End-to-end utility management solutions for corporate and industrial clients.",
      features: ["Water Management", "Waste Management", "Infrastructure Support"],
      icon: "⚙️"
    },
    {
      id: 8,
      title: "Automobile Solutions",
      description: "Comprehensive automobile services including fleet management and logistics.",
      features: ["Fleet Management", "Vehicle Maintenance", "Logistics Support"],
      icon: "🚗"
    },
    {
      id: 9,
      title: "CSR Initiatives",
      description: "Corporate social responsibility programs making meaningful community impact.",
      features: ["Education Support", "Healthcare Initiatives", "Community Development"],
      icon: "🤝"
    }
  ];

  return (
<section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 md:px-8 lg:px-16 xl:px-24">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <p className="text-lg font-semibold text-indigo-600 mb-2">OUR SERVICES</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Comprehensive Business Solutions
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div 
          key={service.id}
          className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-transparent"
          data-aos="fade-up"
          data-aos-delay={service.id * 100}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative p-8 z-10">
            <div className="flex items-start">
              {/* Icon with animated background */}
              <div className="relative mr-6">
                <div className="absolute -left-3 -top-3 w-16 h-16 rounded-full bg-indigo-100 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                <span className="relative text-4xl text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                  {service.icon}
                </span>
              </div>
              
              <div>
                <div className="text-indigo-400 text-2xl font-bold mb-1 group-hover:text-indigo-600 transition-colors duration-300">{`0${service.id}`}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="relative">
                        <svg className="w-5 h-5 text-indigo-400 mr-3 group-hover:text-indigo-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Animated button */}
            <button className="relative inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors duration-300 overflow-hidden">
              <Link href="/service" passHref>
              <span className="relative z-10">Learn More</span>
              </Link>
              <svg className="w-4 h-4 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 group-hover:bg-indigo-300 transition-all duration-300"></span>
            </button>
          </div>
          
          {/* Floating dots decoration */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex space-x-1">
              {[1, 2, 3].map((dot) => (
                <div 
                  key={dot}
                  className="w-2 h-2 rounded-full bg-indigo-200"
                  style={{ animation: `bounce 1.5s infinite ${dot * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Add this to your global CSS for the bounce animation */}
    <style jsx>{`
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
    `}</style>
  </div>
</section>
  );
}