import { about5 } from '@/assests/About';
import { team1, team2, team3, team4 } from '@/assests/Team';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUtkal = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-amber-400">Utkal Group</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
              Pioneering India&apos;s Business Excellence
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive solutions across 18+ specialized companies with unwavering commitment to excellence
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "18+", label: "Group Companies", desc: "Specialized business units" },
            { value: "1000+", label: "Happy Clients", desc: "Satisfied customers nationwide" },
            { value: "50+", label: "Cities Covered", desc: "PAN India presence" },
            { value: "15+", label: "Years Experience", desc: "Industry expertise" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <h3 className="text-4xl font-bold text-blue-800 mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-800">{stat.label}</p>
              <p className="text-gray-600 mt-2">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building Tomorrow&apos;s <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Since 2008, Utkal Group has evolved from a single facility management company into India&apos;s most trusted conglomerate of 18+ specialized companies. Our journey represents unwavering commitment to excellence, innovation, and sustainable growth.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Operating from our headquarters in Delhi and regional offices across India, we serve over 1000+ clients with comprehensive business solutions that drive success and create lasting value.
            </p>
            <ul className="space-y-3">
              {[
                "Comprehensive business solutions across multiple industries",
                "24/7 support infrastructure with PAN India operations",
                "Commitment to sustainability and environmental responsibility",
                "Long-term partnerships built on trust and excellence",
                "Innovation-driven approach to business challenges",
                "Certified quality management systems and processes"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src={about5.src} 
              alt="Utkal Group Headquarters"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold">Utkal Group Headquarters</h3>
                <div className="flex mt-4 space-x-6">
                  <div>
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-sm">Years of Excellence</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-sm">Cities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600">
              Mission & Vision that define our purpose and guide our strategic decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-6">
                To deliver exceptional value to our customers through innovative, sustainable, and comprehensive business solutions while fostering growth for all stakeholders including employees, partners, and communities we serve.
              </p>
              <ul className="space-y-3">
                {[
                  "Customer-centric approach in all operations",
                  "Sustainable business practices and solutions",
                  "Continuous innovation and improvement",
                  "Stakeholder value creation and growth"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-6">
                To be India&apos;s most respected and trusted business conglomerate, recognized globally for excellence, innovation, and sustainable practices across all sectors we operate in.
              </p>
              <ul className="space-y-3">
                {[
                  "Market leadership in all business verticals",
                  "Global recognition for excellence and innovation",
                  "Sustainable and responsible business practices",
                  "Preferred partner for comprehensive solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Foundation</span>
            </h2>
            <p className="text-xl text-gray-600">
              Core Values that shape our culture and guide our decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We maintain the highest standards of quality and performance in every project we undertake.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                )
              },
              {
                title: "Integrity",
                desc: "We conduct business with unwavering ethics, transparency, and accountability.",
                icon: (
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: "Innovation",
                desc: "We embrace cutting-edge technologies and creative solutions to drive progress.",
                icon: (
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                )
              },
              {
                title: "Sustainability",
                desc: "We are committed to environmentally responsible practices and social impact.",
                icon: (
                  <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership <span className="text-blue-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">
              Experienced leaders driving innovation, growth, and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "MR. SURESH MISHRA",
                role: "Chairman & Managing Director",
                bio: "Visionary leader with 20+ years of experience in business development and strategic planning.",
                img: team1
              },
              {
                name: "MS. SWAYANSHREE MISHRA",
                role: "Director of Strategy",
                bio: "Strategic thinker with expertise in market analysis and business growth strategies.",
                img: team2
              },
              {
              name: "MR. NIRANJAN MISHRA",
                role: "Director of Operations",
                bio: "Expert in operational efficiency with a focus on sustainable practices and quality management.",
                img: team4
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Evolution</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped our transformation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {[
              {
                year: "2008",
                title: "Foundation of Utkal Group",
                desc: "Established with facility management services in Delhi, setting the foundation for comprehensive business solutions."
              },
              {
                year: "2012",
                title: "Security Division Launch",
                desc: "Launched Z Plus Security division, expanding into specialized VIP and corporate security services."
              },
              {
                year: "2015",
                title: "Green Energy Initiative",
                desc: "Established Utkal Power with renewable energy focus, beginning our sustainability journey."
              },
              {
                year: "2018",
                title: "Real Estate Expansion",
                desc: "Launched Utkal Homes for comprehensive property development and real estate services."
              },
              {
                year: "2020",
                title: "Digital Transformation",
                desc: "Launched IndoPlus for IT solutions, embracing digital innovation across all sectors."
              },
              {
                year: "2024",
                title: "18+ Group Companies",
                desc: "Achieved comprehensive business solutions portfolio with specialized companies across industries."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with <span className="text-amber-300">Excellence</span>
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join over 1000+ satisfied clients who trust Utkal Group for comprehensive business solutions and exceptional service delivery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-800 hover:bg-gray-100 font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="mb-6">
                Subscribe to Our Newsletter for the latest updates on our services, industry insights, and exclusive offers from Utkal Group
              </p>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm">Join 10,000+ subscribers. No spam, unsubscribe anytime.</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Enter your email address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUtkal;