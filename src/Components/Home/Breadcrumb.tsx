"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { sliderArr } from "@/utils/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/router";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  fade: true,
  arrows: false,
  cssEase: "ease-in-out",
};

export default function CorporateHero() {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Breadcrumb */}

        {pathSegments.map((segment, index) => (
          <span key={index} className="flex items-center space-x-2">
            <span className="text-white/50">/</span>
            <Link
              href={`/${pathSegments.slice(0, index + 1).join("/")}`}
              className={`text-xs sm:text-sm capitalize font-medium ${
                index === pathSegments.length - 1
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300"
              } transition`}
            >
              {segment.replace(/-/g, " ")}
            </Link>
          </span>
        ))}


      {/* Hero Slider */}
      <Slider {...settings}>
        {sliderArr.map((item, index) => (
          <div key={index} className="relative h-[90vh] w-full">
            {/* Background image */}
            <img
              src={item.img.src}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center">
              {/* Logo */}
              {item.logo && (
                <div
                  className="mb-6 p-3 bg-white backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg"
                  data-aos="zoom-in"
                >
                  <img
                    src={item.logo.src}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              )}

              {/* Title */}
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl mb-4"
                data-aos="fade-up"
              >
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="max-w-3xl text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {item.paragraph}
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap justify-center gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link href="/service">
                  <button className="px-6 md:px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition flex items-center gap-2">
                    🚀 Explore Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-6 md:px-8 py-3 bg-white/20 text-white font-semibold rounded-full border border-white/40 hover:bg-white/30 backdrop-blur-sm hover:scale-105 transition flex items-center gap-2">
                    📩 Get in Touch
                  </button>
                </Link>
                <button className="px-6 md:px-8 py-3 bg-transparent text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm hover:scale-105 transition flex items-center gap-2">
                  📂 View Portfolio
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
