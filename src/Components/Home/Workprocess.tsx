"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function WorkProcess() {
  const services = [
    {
      id: 1,
      title: "Facility Management",
      description:
        "Comprehensive facility management solutions ensuring efficient, safe, and well-maintained environments.",
      features: ["24/7 Maintenance", "Energy Management", "Space Optimization"],
      icon: "🏢",
    },
    {
      id: 3,
      title: "Payroll Management",
      description:
        "Integrated payroll solutions allowing you to focus on your core business operations.",
      features: [
        "Automated Processing",
        "Compliance Management",
        "Employee Self-Service",
      ],
      icon: "💰",
    },
    {
      id: 4,
      title: "Green Energy Solutions",
      description:
        "Sustainable energy solutions including our 50MW solar plant and renewable energy initiatives.",
      features: [
        "Solar Installation",
        "Energy Audits",
        "Sustainability Consulting",
      ],
      icon: "🌱",
    },
    {
      id: 5,
      title: "Real Estate Services",
      description:
        "Complete real estate solutions from property development to investment advisory services.",
      features: [
        "Property Development",
        "Real Estate Sales",
        "Investment Advisory",
      ],
      icon: "🏠",
    },
    {
      id: 6,
      title: "IT Solutions",
      description:
        "Custom software development and IT solutions through our IndoPlus division.",
      features: ["Web Development", "Mobile Apps", "Digital Solutions"],
      icon: "💻",
    },
    {
      id: 7,
      title: "Utility Services",
      description:
        "End-to-end utility management solutions for corporate and industrial clients.",
      features: [
        "Water Management",
        "Waste Management",
        "Infrastructure Support",
      ],
      icon: "⚙️",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 py-24 px-6 md:px-8 lg:px-16 xl:px-24">
      {/* 🔥 Animated gradient waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_180deg_at_50%_50%,#007bff33_0%,#ff7e0033_50%,#007bff33_100%)] animate-aurora blur-3xl opacity-70"></div>
      </div>

      {/* 🌌 Floating soft particle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400/20 rounded-full blur-sm"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatParticle ${5 + Math.random() * 5}s ease-in-out infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-semibold text-blue-600 mb-2 tracking-wide uppercase">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Innovative Solutions for a Smarter Future
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full shadow-md"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const isBlue = index % 2 === 0;
            const gradient = isBlue
              ? "from-[#007bff] to-[#00bfff]"
              : "from-[#ff7e00] to-[#ffb347]";

            return (
              <motion.div
                key={service.id}
                className={`relative bg-gradient-to-br ${gradient} p-[2px] rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.05)]`}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 h-full group overflow-hidden">
                  {/* Gradient inner shine */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-5 group-hover:opacity-10 rounded-2xl transition`}
                  ></div>

                  {/* Icon */}
                  <motion.div
                    className={`text-5xl mb-4 ${
                      isBlue ? "text-blue-600" : "text-orange-500"
                    }`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3
                    className={`text-2xl font-semibold mb-3 ${
                      isBlue
                        ? "text-gray-900 group-hover:text-blue-700"
                        : "text-gray-900 group-hover:text-orange-600"
                    } transition-all duration-300`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <svg
                          className={`w-5 h-5 mr-3 ${
                            isBlue ? "text-blue-500" : "text-orange-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link href="/service" passHref>
                    <motion.button
                      className={`relative inline-flex items-center px-5 py-2 font-semibold border rounded-full transition-all duration-300 overflow-hidden
                      ${
                        isBlue
                          ? "text-blue-600 border-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white"
                          : "text-orange-600 border-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ✨ Animations */}
      <style jsx>{`
        @keyframes aurora {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }

        .animate-aurora {
          animation: aurora 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
