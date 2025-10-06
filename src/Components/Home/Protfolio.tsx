"use client";

import React, { useState } from "react";
import { photoArr } from "@/utils/Home";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(photoArr[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLogoClick = (index: number) => {
    setSelectedItem(photoArr[index]);
    setActiveIndex(index);
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            UTKAL GROUP{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              PORTFOLIO
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our diverse verticals and services that drive innovation,
            growth, and sustainability across India.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-[420px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                  {selectedItem.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-gray-200 shadow-xl transition-all hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-500 pl-3">
                {selectedItem.title}
              </h3>
              <ul className="space-y-4">
                {selectedItem.content
                  .split(".")
                  .filter(Boolean)
                  .map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 mt-1 mr-3">
                        <svg
                          className="w-5 h-5 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-base leading-relaxed">
                        {bullet.trim()}.
                      </span>
                    </li>
                  ))}
              </ul>
              <Link href="/service" passHref>
                <button className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90 text-white font-semibold rounded-full shadow-md transition-transform duration-300 hover:scale-105">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <Slider {...sliderSettings} className="px-6">
            {photoArr.map((logo, index) => (
              <div
                key={logo.id}
                className="px-3 focus:outline-none"
                onClick={() => handleLogoClick(index)}
              >
                <div
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 shadow-md ${
                    activeIndex === index
                      ? "bg-white border border-amber-400 shadow-lg scale-105"
                      : "bg-white/70 border border-gray-200 hover:border-amber-300 hover:shadow-lg"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-3 flex items-center justify-center">
                      <Image
                        src={logo.logo}
                        alt={logo.title}
                        width={80}
                        height={80}
                        className={`object-contain transition-all duration-300 ${
                          activeIndex === index ? "scale-110" : "scale-100"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-sm font-semibold text-center transition-colors ${
                        activeIndex === index
                          ? "text-amber-600"
                          : "text-gray-600"
                      }`}
                    >
                      {logo.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
