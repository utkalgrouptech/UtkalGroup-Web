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
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  swipe: true,
  arrows: true,
  fade: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
};

export default function HeroWithBreadcrumb() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="py-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 md:space-x-2">
          <li className="flex items-center">
            <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link
                href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className={`ml-2 text-sm font-medium ${index === pathSegments.length - 1 ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'} transition-colors capitalize`}
              >
                {segment.replace(/-/g, ' ')}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* Hero Slider */}
      <section className="relative rounded-xl overflow-hidden shadow-xl mb-8">
        <Slider {...settings}>
          {sliderArr.map((item, index) => (
            <div key={index} className="relative h-[32rem] md:h-[40rem]">
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
              
              {/* Background image */}
              <img
                src={item.img.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center z-10 px-6 sm:px-8 lg:px-12">
                <div
                  className="max-w-3xl mx-auto text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {item.logo && (
                    <img
                      src={item.logo.src}
                      alt="Logo"
                      className="h-16 w-16 lg:h-20 lg:w-20 mx-auto mb-6 object-contain drop-shadow-lg"
                    />
                  )}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                    {item.paragraph}
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link href="/service" passHref>
                      <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transition-all duration-300 border border-white/30 hover:border-white/50 hover:shadow-lg">
                        Learn More
                      </button>
                    </Link>
                    <Link href="/contact" passHref>
                      <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}