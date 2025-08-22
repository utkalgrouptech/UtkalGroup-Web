import { home28 } from '@/assests/Home';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-amber-600">Utkal Group</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Section */}
          <div className="relative h-full" data-aos="fade-right">
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-square">
              <img
                src={home28.src}
                alt="Managing Director"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium">Leadership</p>
                <h3 className="text-xl font-bold mt-1">Managing Director</h3>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Message from the <span className="text-amber-600">Director&apos;s Desk</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Utkal Group, we drive toward sustainable business practices that ensure long-term existence while developing notable client relationships across PAN India operations.
                </p>
                <p>
                  We believe in rendering exceptional services to our trusted clients, which accelerates mutual growth and creates lasting value. Our commitment extends beyond service delivery to building enduring partnerships.
                </p>
                <p>
                  Utkal Group endeavors to expand its footprint not only across India but also in international markets, with continued efforts aimed at achieving organizational objectives and setting new benchmarks.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  Our Promise
                </h4>
                <p className="text-gray-600 text-sm">
                  We guarantee a hassle-free business environment with 24/7 support and reliable solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </span>
                  Our Approach
                </h4>
                <p className="text-gray-600 text-sm">
                  Combining innovation with experience to deliver comprehensive management solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}