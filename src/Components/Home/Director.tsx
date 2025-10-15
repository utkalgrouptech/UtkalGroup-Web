import { home28 } from '@/assests/Home';
import Link from 'next/link';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-amber-50/30 py-20 md:py-28 px-6 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-amber-100 mb-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-amber-700 font-medium text-sm uppercase tracking-wider">About Our Legacy</span>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The <span className="text-amber-600 relative">
              Utkal
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            </span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Pioneering excellence across diverse sectors with innovation and integrity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Director's Message Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-2xl border border-white/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      From the <span className="text-amber-600">Director&apos;s Desk</span>
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p className="relative pl-6 border-l-2 border-amber-200">
                    <span className="absolute left-0 top-0 text-amber-500 text-2xl">&quot;</span>
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
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Our Promise</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We guarantee a hassle-free business environment with 24/7 support and reliable solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Our Approach</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Combining innovation with experience to deliver comprehensive management solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="relative" data-aos="fade-left">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="absolute -inset-6 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={home28.src}
                    alt="Managing Director - Utkal Group"
                    className="w-full h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-900">Leadership</span>
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-1">Visionary Leader</p>
                      <h3 className="text-xl font-bold text-gray-900">Managing Director</h3>
                      <p className="text-gray-600 text-sm mt-1">Driving Innovation & Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-600/20 rounded-full blur-lg"></div>
            </div>
            
            {/* Stats Bar */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                <div className="text-2xl font-bold text-amber-600">15+</div>
                <div className="text-xs text-gray-600 font-medium">Companies</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                <div className="text-2xl font-bold text-amber-600">50+</div>
                <div className="text-xs text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                <div className="text-2xl font-bold text-amber-600">1000+</div>
                <div className="text-xs text-gray-600 font-medium">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <Link href="/service">
            <span className="font-semibold text-lg">Explore Our Legacy</span>
            </Link>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}