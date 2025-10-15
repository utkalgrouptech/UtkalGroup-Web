"use client";

import { home27 } from "@/assests/Home";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Welcome() {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    offices: 0,
  });

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });

    // Counter animation
    const interval = setInterval(() => {
      setCounters((prev) => ({
        years: prev.years < 18 ? prev.years + 1 : 18,
        clients: prev.clients < 250 ? prev.clients + 5 : 250,
        projects: prev.projects < 500 ? prev.projects + 10 : 500,
        offices: prev.offices < 12 ? prev.offices + 1 : 12,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-10 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">
        {/* Content Column */}
        <div className="lg:col-span-2 space-y-10">
          {/* Header */}
          <div className="space-y-6">
            <div
              className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mb-4 rounded-full"
              data-aos="fade-right"
            ></div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              data-aos="fade-up"
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                Utkal Group
              </span>
            </h2>
            <p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We are the largest Management Solutions provider, associated with
              Facility Management, Green Energy, Utility Services, IT Software,
              Real Estate, Payroll services, Automobiles, and CSR across PAN
              India operations.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-amber-600 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600">
                To delight customers with our value-added products and services
                while meeting the needs and expectations of all our stakeholders
                including employees and society.
              </p>
            </div>

            <div
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-amber-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600">
                To create a respected pan-India brand of Utkal Group, recognized
                for excellence and innovation across all our service verticals.
              </p>
            </div>
          </div>

          {/* Counters */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-600">
                {counters.years}+
              </h3>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-600">
                {counters.clients}+
              </h3>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-600">
                {counters.projects}+
              </h3>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-600">
                {counters.offices}
              </h3>
              <p className="text-sm text-gray-600">Regional Offices</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6" data-aos="fade-up" data-aos-delay="500">
            <Link href="/contact">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              Learn More →
            </button>
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div
          className="relative h-full"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-full min-h-[450px] group">
            <img
              src={home27.src}
              alt="Utkal Group Office"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md animate-bounce">
              <span className="text-xs font-medium text-gray-800">
                Since 2005
              </span>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-medium">Trusted Across India</p>
              <h3 className="text-xl font-bold mt-1">
                Building India&apos;s Future
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
