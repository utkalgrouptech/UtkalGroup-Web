import { about3 } from '@/assests/About';
import React from 'react';

export default function Who() {
  return (
    <div className="flex flex-col md:flex-row main-container gap-10 p-6 mb-11 mx-auto mt-10"> {/* Changed to flex-col for mobile */}
      
      {/* Text Section with flip-left effect */}
      <div data-aos="flip-left" className="flex-1">
        {/* <p className="text-[#B69974] text-lg font-bold">
          WHO_WE_ARE
        </p> */}
        <p className="text-black mt-2 font-bold text-3xl md:text-5xl"> {/* Adjusted font size for responsiveness */}
          Transforming Ideas<br /> Into Reality
        </p>
       
        {/* First Paragraph with numbering and HR line */}
        <p className="w-full text-gray-800 font-semibold mt-16 mb-10">
          <span className="text-black text-xl font-bold mb-5">01 Sustainability:</span> <br />
          As responsible corporate citizens, {`we’re`} dedicated to reducing our ecological footprint and enhancing the quality of life for future generations.
        </p>
        <hr className="border-t-2 border-[#B69974] mb-4 w-1/2 md:w-1/3" /> {/* Adjusted width for HR line */}

        {/* Second Paragraph with numbering and HR line */}
        <p className="w-full text-gray-800 mb-4 font-semibold">
          <span className="text-black text-xl font-bold">02 Innovation:</span> <br />
          Our commitment to innovation fuels our projects and processes, enabling us to deliver cutting-edge solutions in every sector.
        </p>
        <hr className="border-t-2 border-[#B69974] mb-4 w-1/2 md:w-1/3" /> {/* Adjusted width for HR line */}

        <p className="w-full text-gray-800 mb-4 font-semibold">
          <span className="text-black text-xl font-bold">03 Excellence:</span> <br />
          From planning to execution, we strive for perfection in every detail, ensuring that our work consistently meets and exceeds expectations.
        </p>
      </div>
      
      {/* Image Section with flip-right effect */}
      <div data-aos="flip-right">
        <img 
          src={about3.src} 
          alt="Who We Are" 
          className="w-full md:w-[500px] h-96 rounded-lg ml-auto" // Adjusted image size for responsiveness
        />
      </div>
    </div>
  );
}
