import React from "react";
import { motion } from "framer-motion";

type Prop = {
  data: {
    cont1: string;
    cont2: string;
  };
};

export default function CommonBanner({ data }: Prop) {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full h-64 md:h-96 lg:h-[30rem] overflow-hidden">
      {/* Gradient background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600">
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full"
          animate={{
            x: [0, -100, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-10"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1 
          variants={item}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg"
        >
          {data.cont1}
        </motion.h1>
        
        <motion.div variants={item} className="w-24 h-1 bg-white/80 my-4 rounded-full" />
        
        <motion.p 
          variants={item}
          className="text-white/90 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl"
        >
          {data.cont2}
        </motion.p>

        {/* Animated scroll indicator (optional) */}
        <motion.div 
          variants={item}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}