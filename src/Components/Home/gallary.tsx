import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Import images
import {
  e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20,
  s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
  t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, 
  w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16
} from "@/assests/Gallery";

const gallerySections = [
  { title: "Celebrations & Events", images: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11,e12, e13, e14, e15, e16, e17, e18, e19, e20] },
  { title: "Community & Charity Service", images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11,s12, s13,] },
  { title: "Workplace Moments", images: [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12,w13, w14, w15, w16] },
  { title: "Training & Development", images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11,t12] }
];

export default function GallerySectionWise() {
  const [lightboxImg, setLightboxImg] = useState<StaticImageData | null>(null);

  return (
    <div className="w-full pt-28 pb-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white via-[#e8f0ff] to-white">
      {gallerySections.map((section, index) => (
        <div key={index} className="mb-16 sm:mb-20">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#000080] mb-6 sm:mb-8 tracking-wide">
            {section.title}
          </h2>

          {/* Masonry */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
            {section.images.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl shadow-md break-inside-avoid animate-fadeInSlow cursor-pointer"
                onClick={() => setLightboxImg(img)}
              >
                <Image
                  src={img}
                  alt={`${section.title}-${i}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none shadow-[0_0_20px_#00008040]"></div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src={lightboxImg}
              alt="lightbox"
              className="rounded-xl shadow-xl w-full h-auto max-h-[80vh] object-contain"
            />

            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 text-white text-lg bg-black/50 px-3 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Static animation — SAFE */}
      <style>
        {`
          @keyframes fadeInSlow {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlow {
            animation: fadeInSlow 0.7s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
