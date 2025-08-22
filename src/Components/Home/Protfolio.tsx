import React, { useState } from "react";
import { photoArr } from "@/utils/Home";
import Image, { StaticImageData } from "next/image";
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
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            UTKAL GROUP <span className="text-amber-500">PORTFOLIO</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white">{selectedItem.title}</h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-500 mb-6">
                {selectedItem.title}
              </h3>
              <ul className="space-y-4">
                {selectedItem.content.split(".").filter(Boolean).map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-3">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{bullet.trim()}.</span>
                  </li>
                ))}
              </ul>
              <Link href="/service" passHref>
              <button className="mt-8 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-300">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <Slider {...sliderSettings} className="px-4">
            {photoArr.map((logo, index) => (
              <div
                key={logo.id}
                className="px-2 focus:outline-none"
                onClick={() => handleLogoClick(index)}
              >
                <div className={`p-4 rounded-lg transition-all duration-300 ${activeIndex === index ? 'bg-gray-700/50 border border-amber-500/30' : 'bg-gray-800/30 hover:bg-gray-700/50'}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <Image
                        src={logo.logo}
                        alt={logo.title}
                        width={64}
                        height={64}
                        className={`object-contain transition-all duration-300 ${activeIndex === index ? 'scale-110' : 'scale-100'}`}
                      />
                    </div>
                    <p className={`text-sm font-medium text-center transition-colors ${activeIndex === index ? 'text-amber-400' : 'text-gray-300'}`}>
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