"use client";

import React, { useState, useEffect } from "react";
import { navArr } from "@/utils/Home";
import { useRouter } from "next/router";
import { group } from "@/assests/Home";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-xl border-b border-gray-200"
          : "bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4c1d95] shadow-sm backdrop-blur-md"
      }`}
      style={{ height: isScrolled ? "4.2rem" : "5rem" }}
    >
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo + Flag Shape */}
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/")}
          >
            <motion.div
              className="absolute -left-3 top-1/2 -translate-y-1/2 
              bg-gradient-to-b from-white via-gray-50 to-gray-200 
              shadow-md backdrop-blur-xl"
              animate={{
                width: isScrolled ? 170 : 205,
                height: isScrolled ? 58 : 70,
                borderRadius: "0px 10px 10px 0px",
                clipPath:
                  "polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)"
              }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            />

            <motion.img
              src={group.src}
              alt="Logo"
              className="relative z-10 object-contain pl-3"
              animate={{
                width: isScrolled ? 115 : 145,
                height: isScrolled ? 50 : 60,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-10 relative">
            {[...navArr,
              { id: 99, title: "Gallery", path: "/gallery" },
              { id: 100, title: "Career", path: "/career" }
            ].map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span
                  className={`relative flex cursor-pointer items-center px-2 py-2 text-[15px] font-semibold transition-all duration-300 ${
                    router.pathname === item.path
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                      : isScrolled
                      ? "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600"
                      : "text-gray-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-300 hover:to-pink-400"
                  }`}
                  onClick={() => router.push(item.path)}
                >
                  {item.title}

                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </span>

                {/* Dropdown */}
      {/* Dropdown */}
      <AnimatePresence>
    {item.subMenu && activeMenu === item.id && (
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          absolute left-1/2 transform -translate-x-1/2 mt-5 w-[34rem]
          bg-white border border-gray-200
          rounded-2xl shadow-xl
          overflow-hidden z-50
        "
      >
        {/* SLIDER WRAPPER */}
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-none p-4">
          {item.subMenu.map((sub) => (
            <div
              key={sub.id}
              onClick={() => router.push(sub.path)}
              className="
                flex flex-col items-center justify-center min-w-[130px]
                bg-gradient-to-br from-[#ffffff] via-[#f2f6ff] to-[#dfe8ff]
                hover:from-[#f0f5ff] hover:via-[#e2eaff] hover:to-[#d5e0ff]
                p-5 rounded-full cursor-pointer
                transition-all duration-300
                hover:scale-105 hover:shadow-md
              "
            >
              <img
                src={sub.img?.src}
                alt={sub.title}
                className="w-12 h-12 object-contain"
              />

              <span className="mt-2 text-sm text-gray-900 font-semibold text-center">
                {sub.title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    )}
      </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
