"use client";

import { home27 } from '@/assests/Home';
import React from 'react';

export default function Welcome() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">
        {/* Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header with decorative element */}
          <div className="space-y-6">
            <div className="w-20 h-1 bg-amber-500 mb-4" data-aos="fade-right"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" data-aos="fade-up">
              Welcome to <span className="text-amber-600">Utkal Group</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed" data-aos="fade-up">
              We are the largest Management Solutions provider, associated with Facility Management, 
              Green Energy, Utility Services, IT Software, Real Estate, Payroll services, Automobiles, 
              and CSR across PAN India operations.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div 
              className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To delight customers with our value-added products and services while meeting the needs 
                and expectations of all our stakeholders including employees and society.
              </p>
            </div>

            <div 
              className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To create a respected pan-India brand of Utkal Group, recognized for excellence 
                and innovation across all our service verticals.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-600">
              Headquartered in Delhi with regional offices in Bhubaneswar, we partner with reputed 
              corporate clients to deliver exceptional services in a hassle-free environment, ensuring 
              client comfort and long-term business sustainability.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative h-full" data-aos="zoom-in" data-aos-delay="300">
          <div className="relative overflow-hidden rounded-lg shadow-xl h-full min-h-[400px]">
            <img
              src={home27.src}
              alt="Utkal Group Office"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-medium">Since 2005</p>
              <h3 className="text-xl font-bold mt-1">Building India&apos;s Future</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}