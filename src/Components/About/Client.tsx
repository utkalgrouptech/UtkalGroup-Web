import { clientArr } from "@/utils/Home"; // Ensure clientArr is correctly imported
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="overflow-hidden">
      <div className="">
        {/* Heading */}
       

        {/* Slider */}
        <Slider {...settings}>
          {clientArr.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4"
            >
              <div className=" h-20 ">
                <img
                  src={client.img.src}
                  alt={`client-${client.id}`} // Fixed interpolation
                  className="w-32 h-auto object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
