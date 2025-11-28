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
    <section className="relative bg-gradient-to-br from-[#e8efff] via-white to-[#e8efff] py-24 overflow-hidden">
      {/* Blue glow background accents */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#000080]/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#000080]/25 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#000080] font-semibold text-lg tracking-wider mb-2">
            OUR PARTNERS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#000080] to-[#000080]/70 bg-clip-text text-transparent drop-shadow-sm">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
            Collaborating with forward-thinking brands to create lasting impact.
          </p>
          <div className="w-24 h-1 bg-[#000080] mx-auto mt-6 rounded-full shadow-lg"></div>
        </motion.div>

        {/* Slider Section */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#e8efff] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#e8efff] to-transparent z-10"></div>

          <Slider {...settings} className="px-8">
            {clientArr.map((client, i) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center justify-center h-32 bg-white/80 backdrop-blur-md rounded-2xl border border-[#000080]/20 shadow-md hover:shadow-xl hover:bg-white/90 group transition-all duration-500"
                >
                  <Image
                    src={client.img.src}
                    alt={`Client ${client.id}`}
                    width={150}
                    height={80}
                    className="object-contain transition-all duration-500"
                  />
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0,0,128,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#000080] hover:bg-[#0a0aa0] text-white font-semibold text-lg rounded-full shadow-md transition-all duration-300"
            >
              Become Our Partner 🚀
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
