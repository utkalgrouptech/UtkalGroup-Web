import { home28 } from '@/assests/Home';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#004C97] to-[#0078D7] text-white py-24 md:py-32 px-6 md:px-10 lg:px-16">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-10 order-2 lg:order-1" data-aos="fade-right">
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              A <span className="text-blue-200">Legacy</span> of Vision, Growth, and Trust
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full mt-4"></div>
          </div>

          {/* Message Box */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-300 to-blue-600 rounded-l-lg"></div>
            <p className="text-white/90 italic leading-relaxed text-lg mb-4">
              “At Utkal Group, we don’t just build enterprises — we build enduring relationships, guided by innovation, trust, and a vision for a better future.”
            </p>
            <p className="text-white/80 leading-relaxed">
              Our commitment is to deliver sustainable excellence through integrity and strategic foresight — driving transformation in every endeavor we undertake.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-blue-300/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-400/20 rounded-xl">
                  <svg
                    className="w-7 h-7 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                To become a global symbol of reliability, delivering value-driven innovation and transforming industries through forward-thinking leadership.
              </p>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 rounded-tl-full blur-2xl"></div>
            </div>

            {/* Mission Card */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-blue-300/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <svg
                    className="w-7 h-7 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                To empower growth through integrity, innovation, and excellence — building a sustainable and inclusive future for all stakeholders.
              </p>
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400/10 rounded-br-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="relative group order-1 lg:order-2 flex flex-col items-center" data-aos="fade-left">
          <div className="absolute -inset-8 bg-gradient-to-tr from-blue-400 via-blue-500 to-white rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all"></div>
          
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[480px] lg:max-w-[520px]">
            <img
              src={home28.src}
              alt="Managing Director"
              className="w-full h-[640px] object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Managing Director Tag */}
          <div className="mt-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-3 hover:bg-white/20 transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
            <p className="text-white font-semibold tracking-wide uppercase text-sm">
              Managing Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
