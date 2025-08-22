import { clientArr } from '@/utils/Home';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientShowcase() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with top organizations across multiple sectors
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Client Logos */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <Slider {...settings} className="px-8">
            {clientArr.map((client) => (
              <div key={client.id} className="px-4">
                <div className="flex items-center justify-center h-24 bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                  <Image
                    src={client.img.src}
                    alt={`Client ${client.id}`}
                    width={120}
                    height={60}
                    className="object-contain w-full h-full hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" passHref>
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Become Our Partner
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}