"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

// IMPORT IMAGES
import {
  e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20,
  s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
  t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12,
  w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16
} from "@/assests/Gallery";

const gallerySections = [
  {
    title: "Training & Development",
    images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12],
  },
  {
    title: "Community & Charity Service",
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13],
  },
  {
    title: "Workplace Moments",
    images: [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16],
  },
  {
    title: "Celebrations & Events",
    images: [e1, e3, e4, e6, e7, e8, e9, e13, e16],
  },
];

export default function GallerySectionWise() {
  const [activeImage, setActiveImage] = useState<StaticImageData | null>(null);

  return (
    <div className="w-full bg-gradient-to-b from-white via-[#eef4ff] to-white pt-28 pb-20 px-4 sm:px-6 lg:px-16">

      {/* TOP HEADING */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#000080]">
          Our Gallery
        </h1>

        <div className="w-28 h-1 bg-[#000080] mx-auto mt-4 rounded-full"></div>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-base md:text-lg leading-7">
          Capturing memorable moments, celebrations, workplace culture,
          training sessions, and community services through our journey.
        </p>
      </div>

      {/* SECTIONS */}
      {gallerySections.map((section, index) => (
        <div key={index} className="mb-24">

          {/* SECTION TITLE */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-10 bg-[#000080] rounded-full"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
              {section.title}
            </h2>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {section.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >

                {/* IMAGE */}
                <Image
                  src={img}
                  alt={`${section.title}-${i}`}
                  className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000080d0] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 p-5 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-semibold text-lg">
                    {section.title}
                  </h3>

                  <p className="text-gray-200 text-sm mt-1">
                    View Image
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >

          <div className="relative max-w-5xl w-full">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-14 right-0 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <X size={24} />
            </button>

            {/* IMAGE */}
            <Image
              src={activeImage}
              alt="Preview"
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}