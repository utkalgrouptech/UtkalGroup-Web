import React, { useState, useEffect } from "react";
import { navArr } from "@/utils/Home";
import { useRouter } from "next/router";
import { logo, logo1 } from "@/assests/Home";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const listenScrollEvent = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled ? "bg-white/90 shadow-md" : "bg-white/90"
      }`}
      style={{
        height: isScrolled ? "4rem" : "5rem",
      }}
    >
      <section className="hidden lg:block main-container">
        <section className="flex h-16 items-center justify-between px-8">
          {/* Logo + Name */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src={isScrolled ? logo.src : logo.src}
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "w-16 h-12" : "w-18 h-14"
              }`}
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8 relative">
            {navArr.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span
                  className={`flex cursor-pointer items-center px-3 py-2 transition-colors duration-300 ${
                    isScrolled
                      ? router.pathname === item.path
                        ? "text-blue-900 font-semibold"
                        : "text-gray-800 hover:text-blue-900"
                      : router.pathname === item.path
                      ? "text-blue-500 font-semibold"
                      : "text-black hover:text-blue-400"
                  }`}
                  onClick={() => router.push(item.path)}
                >
                  <h2 className="text-lg capitalize">{item.title}</h2>
                </span>

                {/* Submenu with Grid Layout */}
                {item.subMenu && activeMenu === item.id && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-auto min-w-[24rem] bg-white shadow-xl rounded-xl py-3 px-4 z-50 border border-gray-100">
                    <div className="grid grid-cols-2 gap-2">
                      {item.subMenu.map((sub) => (
                        <div
                          key={sub.id}
                          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200"
                          onClick={() => router.push(sub.path)}
                        >
                          <div className="flex-shrink-0">
                            <img
                              src={sub.img?.src || "/default-submenu.png"}
                              alt={sub.title}
                              className="w-8 h-8 object-contain rounded-sm"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-gray-700 text-sm font-medium truncate">
                              {sub.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </header>
  );
}