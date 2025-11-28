import React from "react";

export default function BusinessTransformation() {
  return (
    <section className="relative bg-[#000015] py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* Soft Glow Background Elements */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#000080]/40 blur-3xl rounded-full opacity-40"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#f47920]/30 blur-3xl rounded-full opacity-40"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid.svg')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Transform Your Business With  
              <span className="text-[#f47920]"> Expert Guidance</span>
            </h2>

            <p className="text-lg text-gray-300 mb-10 max-w-xl">
              Get customized solutions built for growth, efficiency, and long-term success.
              Connect with our experts for a free consultation.
            </p>

            <div className="w-28 h-1 bg-gradient-to-r from-[#f47920] to-[#4fa941] rounded-full"></div>
          </div>

          {/* Form – Glassmorphism */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Get Free Consultation</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-[#f47920] outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-[#f47920] outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-[#f47920] outline-none"
                    placeholder="Enter your phone"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-[#f47920] outline-none"
                  >
                    <option value="" className="text-black">Select a service</option>
                    <option value="facility" className="text-black">Facility Management</option>
                    <option value="payroll" className="text-black">Payroll Services</option>
                    <option value="security" className="text-black">Security Solutions</option>
                    <option value="energy" className="text-black">Green Energy</option>
                    <option value="realestate" className="text-black">Real Estate</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f47920] hover:bg-[#d86612] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-[#f47920]/30 transition-all duration-300"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
