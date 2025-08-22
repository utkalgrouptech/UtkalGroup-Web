import { clientArr } from '@/utils/Home';
import React from 'react';
import Slider from 'react-slick';

export default function More() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
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
    <div className="overflow-hidden mb-32">
      <Slider {...settings}>
        {clientArr.map((client) => (
          <div key={client.id} className=" justify-center">
            <img 
              src={client.img.src} 
              alt={`client-${client.id}`} 
              className="w-28 h-14" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
