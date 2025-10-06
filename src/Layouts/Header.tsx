"use client";

import React, { useState, useEffect } from "react";
import { navArr } from "@/utils/Home"; // Make sure to update navArr with new items
import { useRouter } from "next/router";
import { group, logo, MainLogo } from "@/assests/Home";
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
          ? "bg-white/90 shadow-md backdrop-blur-xl border-b border-gray-200"
          : "bg-gradient-to-l from-indigo-700 via-purple-700 to-pink-600 backdrop-blur-md"
      }`}
      style={{ height: isScrolled ? "4rem" : "5rem" }}
    >
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer transition-transform duration-500"
            onClick={() => router.push("/")}
          >
            <motion.img
              src={group.src}
              alt="Logo"
              className="object-contain"
              animate={{
                width: isScrolled ? 100 : 140,
                height: isScrolled ? 45 : 55,
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
                  className={`relative flex cursor-pointer items-center px-2 py-2 text-base font-medium transition-all duration-300 ${
                    router.pathname === item.path
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
                      : isScrolled
                      ? "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-500"
                      : "text-white hover:text-yellow-200"
                  }`}
                  onClick={() => router.push(item.path)}
                >
                  {item.title}
                  {/* Underline Hover Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </span>

                {/* Dropdown / Mega Menu */}
                <AnimatePresence>
                  {item.subMenu && activeMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -15, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.97 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[28rem] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="grid grid-cols-2 gap-3 p-5">
                        {item.subMenu.map((sub) => (
                          <div
                            key={sub.id}
                            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-indigo-50 hover:to-pink-50 transition-all"
                            onClick={() => router.push(sub.path)}
                          >
                            <div className="flex-shrink-0">
                              <img
                                src={sub.img?.src || "/default-submenu.png"}
                                alt={sub.title}
                                className="w-9 h-9 object-contain rounded-md"
                              />
                            </div>
                            <div className="flex-1">
                              <span className="text-gray-700 text-sm font-semibold">
                                {sub.title}
                              </span>
                            </div>
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
