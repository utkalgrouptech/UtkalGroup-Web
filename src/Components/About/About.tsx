import { Breadcrumb } from '@/assests/About';
import React from 'react';

export default function About() {
  return (
    <div className="relative flex items-center main-container bg-cover">
      <img 
        src={Breadcrumb.src}
        alt="Description"
        className="w-full h-[70vh] object-cover " 
      />
      <div className="absolute  items-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold mr-4">About Us</h1>
        <p className="text-white text-base md:text-xl font-semibold mt-2 md:mt-0 ml-auto">Home &gt; About</p> 
      </div>
    </div>
  );
}
