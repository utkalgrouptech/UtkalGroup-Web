"use client";

import { home26, home27 } from "@/assests/Home";
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

    const interval = setInterval(() => {
      setCounters((prev) => ({
        years: prev.years < 18 ? prev.years + 1 : 23,
        clients: prev.clients < 250 ? prev.clients + 5 : 2500,
        projects: prev.projects < 500 ? prev.projects + 10 : 500,
        offices: prev.offices < 12 ? prev.offices + 1 : 24,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
  <section
  className="relative w-full 
    bg-gray-50 
    bg-[radial-gradient(circle_at_top_left,rgba(0,0,128,0.08),transparent_60%), 
       radial-gradient(circle_at_bottom_right,rgba(244,121,32,0.10),transparent_70%)]
    py-20 md:py-28 overflow-hidden">

    {/* <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20 md:py-28 overflow-hidden"> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 md:px-10 lg:px-20 items-start">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-start space-y-10">
          {/* Title + Text */}
          <div className="space-y-6" data-aos="fade-up">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
              Welcome to Utkal Group
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Empowering Growth,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                Driving Innovation
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              As India’s leading Management Solutions provider, we’re redefining
              excellence across Facility Management, IT, Energy, Real Estate,
              Payroll, and more.
            </p>
          </div>

          {/* Mission + Vision Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-6"
            data-aos="fade-up"
          >
            {/* Mission Card */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="ml-4 text-2xl font-bold text-gray-900 tracking-tight">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed relative z-10">
                To delight customers with our value-added products and services
                while meeting the needs and expectations of all our stakeholders
                — including employees and society.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-b-xl"></div>
            </div>

            {/* Vision Card */}
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="ml-4 text-2xl font-bold text-gray-900 tracking-tight">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed relative z-10">
                To create a respected pan-India brand of Utkal Group, recognized
                for excellence, integrity, and innovation across all our service
                verticals.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-b-xl"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FIXED STRAIGHT IMAGE */}
        <div className="flex flex-col items-center justify-start space-y-12">

          {/* FIXED IMAGE WITH MORE HEIGHT */}
          <div
            className="relative w-[90%] h-[480px] rounded-2xl overflow-hidden shadow-2xl"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <img
              src={home27.src}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Counters */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 gap-6 w-[90%]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[
              { label: "Years of Excellence", value: `${counters.years}+` },
              { label: "Happy Clients", value: `${counters.clients}+` },
              { label: "Projects Delivered", value: `${counters.projects}+` },
              { label: "Regional Offices", value: `${counters.offices}+` },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 border border-amber-200"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-amber-700">
                  {item.value}
                </h3>
                <p className="text-sm font-medium text-gray-700 text-center mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className="flex justify-center md:justify-start pt-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link href="/about">
              <button className="px-10 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300">
                Learn More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
