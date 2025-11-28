import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Import your images
import {
  e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11,
  s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11,
  t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11,
  w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12
} from "@/assests/Gallery";

const gallerySections = [
  {
    title: "Celebrations & Events",
    images: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11]
  },
  {
    title: "Community & Charity Service",
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]
  },
  {
    title: "Workplace Moments",
    images: [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12]
  },
  {
    title: "Training & Development",
    images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11]
  }
];

export default function GallerySectionWise() {
  // Fix: explicitly type state as StaticImageData | null
  const [lightboxImg, setLightboxImg] = useState<StaticImageData | null>(null);

  return (
    <div className="w-full pt-32 pb-16 px-4 md:py-24 md:px-10 lg:px-20 bg-gradient-to-b from-white via-[#e8f0ff] to-white">
      {gallerySections.map((section, index) => (
        <div key={index} className={`mb-20 ${index === 0 ? 'mt-4 md:mt-0' : ''}`}>
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-[#000080] mb-8 tracking-wide">
            {section.title}
          </h2>

          {/* Masonry Layout */}
          <div className="columns-2 sm:columns-3 md:columns-4 gap-5 space-y-5">
            {section.images.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl shadow-md transition-all duration-500 break-inside-avoid opacity-0 animate-fadeIn relative cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setLightboxImg(img)}
              >
                <Image
                  src={img}
                  alt={`${section.title}-${i}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover shadow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none shadow-[0_0_25px_#00008050]"></div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* LIGHTBOX POPUP */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl w-[90%]">
            <Image
              src={lightboxImg}
              alt="lightbox"
              className="rounded-xl shadow-xl"
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 text-white text-xl bg-black/50 px-3 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Keyframe animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
