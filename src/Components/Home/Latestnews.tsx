"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { home16, home17, home18 } from "@/assests/Home";
import Link from "next/link";

export default function LatestNews() {
  const blogData = [
    {
      image: home16.src,
      category: "HouseKeeping",
      title: "Professional Housekeeping Services for Your Property",
      excerpt:
        "We provide thorough and professional housekeeping services to take care of all aspects of your property.",
      slug: "professional-housekeeping-services",
    },
    {
      image: home17.src,
      category: "PayRoll",
      title: "Integrated Payroll Solutions",
      excerpt:
        "We offer a wide spectrum of integrated payroll solutions while you can focus on your core business mission.",
      slug: "integrated-payroll-solutions",
    },
    {
      image: home18.src,
      title: "Comprehensive Staffing Solutions",
      category: "Staffing Solution",
      excerpt:
        "We provide both temporary and permanent qualified staffing solutions across various business sectors.",
      slug: "comprehensive-staffing-solutions",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#e8efff] via-[#fff5ed] to-[#e8efff] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-[#f47920] mb-2 tracking-wider">
            INSIGHTS & UPDATES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
            Latest News & Articles
          </h2>
          <div className="w-24 h-1 bg-[#4fa941] mx-auto rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Parallax Image */}
              <motion.div
                className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl bg-white cursor-pointer transform transition-transform duration-500"
                whileHover={{ rotate: -1.5, scale: 1.03 }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    x: 3,
                    transition: { duration: 0.6 },
                  }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                <span className="absolute top-4 left-4 bg-[#f47920] text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                  {blog.category}
                </span>
              </motion.div>

              {/* Text Card */}
              <motion.div
                className="relative w-11/12 -mt-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 z-10 text-center transform transition-transform duration-500"
                whileHover={{ rotate: 1.5, y: -6 }}
              >
                <h3 className="text-xl font-bold text-[#000080] mb-3 leading-snug group-hover:text-[#f47920] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm">{blog.excerpt}</p>
                <Link
                  href={`/blog`}
                  className="inline-flex items-center text-[#4fa941] font-semibold hover:text-[#f47920] transition-all duration-300"
                >
                  Read More
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    whileHover={{ x: 5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-[#000080] text-white font-medium rounded-full shadow-md hover:bg-[#4fa941] transition-all duration-300"
            >
              View All Articles
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
