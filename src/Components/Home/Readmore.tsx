"use client";

import { clientArr } from "@/utils/Home";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientShowcase() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 1800,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-amber-200/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-300/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly collaborate with some of the world’s most innovative
            organizations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Client Logos Slider */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <Slider {...settings} className="px-6">
            {clientArr.map((client, i) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-4"
              >
                <div className="flex items-center justify-center h-28 bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 group">
                  <Image
                    src={client.img.src}
                    alt={`Client ${client.id}`}
                    width={140}
                    height={70}
                    className="object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,165,0,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg transition-all"
            >
              Become Our Partner 🚀
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
