"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import typewriter (disable SSR)
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function CorporateHero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Bluish Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000080]/40 via-[#001f5c]/30 to-transparent"></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1.05, y: 0 }}
        transition={{ duration: 2.8, ease: "easeOut" }}
        className="relative z-10 text-white px-6 -mt-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.5 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-6 drop-shadow-lg"
        >
          Utkal Group
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl mx-auto leading-relaxed"
        >
          <Typewriter
            options={{
              strings: [
                "Empowering Businesses with Innovative Solutions.",
                "A Trusted Partner for Your Corporate Success.",
                "Driving Growth through Technology and Vision.",
              ],
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 25,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
