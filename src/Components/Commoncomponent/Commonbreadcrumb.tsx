import React from "react";
import { motion } from "framer-motion";

type Prop = {
  data: {
    cont1: string;
    cont2: string;
  };
};

export default function CommonBanner({ data }: Prop) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-64 md:h-96 lg:h-[32rem] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#e6ecff] to-[#000080]">

        {/* Decorative Floating Blue Orb */}
        <motion.div
          className="absolute top-[-4rem] left-[-4rem] w-72 h-72 rounded-full bg-[#000080]/10 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative Floating Orange Orb */}
        <motion.div
          className="absolute bottom-[-3rem] right-[-3rem] w-64 h-64 rounded-full bg-[#f47920]/10 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle Glass Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-[5] h-full flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#000080] drop-shadow-sm"
        >
          {data.cont1}
        </motion.h1>

        {/* Underline */}
        <motion.div
          variants={item}
          className="w-24 h-1 bg-[#f47920] rounded-full my-5"
        />

        <motion.p
          variants={item}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl leading-relaxed"
        >
          {data.cont2}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          variants={item}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-[#000080]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
