import React, { useState } from "react";
import Head from "next/head";

interface GalleryItem {
  id: number;
  image: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Gallery data with only id and image
const galleryData: GalleryItem[] = [
  { id: 1, image: "/images/gallery/WhatsApp Image 2024-11-30 at 4.58.17 PM.jpg" },
  { id: 2, image: "/images/gallery/WhatsApp Image 2024-12-03 at 1.13.52 PM.jpg" },
  { id: 3, image: "/images/gallery/WhatsApp Image 2024-12-03 at 1.13.53 PM.jpg" },
  { id: 4, image: "/images/gallery/WhatsApp Image 2024-12-23 at 3.03.19 PM.jpg" },
  { id: 5, image: "/images/gallery/WhatsApp Image 2025-01-22 at 5.26.56 PM (1).jpg" },
  { id: 6, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.44 AM.jpg" },
  { id: 7, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.45 AM.jpeg" },
  // { id: 8, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.54 AM.jpeg" },
  { id: 9, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.54 AM (1).jpeg" },
  { id: 10, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.55 AM.jpeg" },
  { id: 11, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.55 AM (1).jpeg" },
  { id: 12, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.55 AM (2).jpeg" },
  { id: 13, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.56 AM (1).jpeg" },
  { id: 14, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.56 AM (2).jpeg" },
  { id: 15, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.57 AM.jpeg" },
  { id: 16, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.57 AM (1).jpeg" },
  { id: 17, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.57 AM (2).jpeg" },
  { id: 18, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.58 AM.jpeg" },
  { id: 19, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.58 AM (1).jpeg" },
  { id: 20, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.58 AM (2).jpeg" },
  { id: 21, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.06.59 AM (1).jpeg" },
  { id: 22, image: "/images/gallery/WhatsApp Image 2025-06-18 at 9.07.00 AM.jpeg" },
  { id: 23, image: "/images/gallery/WhatsApp Image 2025-09-01 at 2.51.20 PM.jpeg" },
  { id: 24, image: "/images/gallery/WhatsApp Image 2025-09-01 at 2.51.20 PM (1).jpeg" },
  { id: 25, image: "/images/gallery/WhatsApp Image 2025-09-01 at 2.51.20 PM (2).jpeg" },
  { id: 26, image: "/images/gallery/WhatsApp Image 2025-09-01 at 2.52.52 PM.jpeg" },
  { id: 27, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.33.59 AM.jpeg" },
  { id: 28, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.33.59 AM (1).jpeg" },
  { id: 29, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.34.00 AM.jpeg" },
  { id: 30, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.34.00 AM (1).jpeg" },
  { id: 31, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.34.00 AM (2).jpeg" },
  { id: 32, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.34.01 AM.jpeg" },
  { id: 33, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.34.01 AM (1).jpeg" },
  { id: 34, image: "/images/gallery/WhatsApp Image 2025-09-11 at 9.34.02 AM.jpeg" },
];


  const stats = [
    { number: "15+", label: "Companies" },
    { number: "50+", label: "Projects" },
    { number: "1000+", label: "Team Members" },
    { number: "10+", label: "Cities" }
  ];

  // Function to handle image download
  const handleDownload = async (imageItem: GalleryItem) => {
    try {
      const response = await fetch(imageItem.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Extract filename from URL or use id
      const filename = imageItem.image.split('/').pop() || `image-${imageItem.id}.jpg`;
      link.download = filename;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  // Function to handle image sharing
  const handleShare = async (imageItem: GalleryItem) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Utkal Group Image',
          text: 'Check out this image from Utkal Group',
          url: window.location.origin + imageItem.image,
        });
      } catch (error) {
        console.log('Sharing cancelled or failed');
      }
    } else {
      // Fallback: copy image URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.origin + imageItem.image);
        alert('Image URL copied to clipboard!');
      } catch (error) {
        console.error('Clipboard copy failed:', error);
        alert('Sharing not supported on this browser.');
      }
    }
  };

  return (
    <>
      <Head>
        <title>Gallery - Utkal Group</title>
        <meta name="description" content="Explore the visual journey of Utkal Group" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Utkal Group
              <span className="text-blue-400"> Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Visual journey through our corporate excellence
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Gallery image ${item.id}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback for broken images
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                            <div class="text-center p-4">
                              <div class="text-4xl mb-2">🏢</div>
                              <div class="text-gray-700 font-semibold">Image ${item.id}</div>
                              <div class="text-gray-500 text-sm mt-1">Utkal Group</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-lg mb-1">Image {item.id}</h3>
                    <p className="text-gray-200 text-sm mb-2">Utkal Group Gallery</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Utkal Group
                      </span>
                      <button 
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(item);
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See More?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Follow us on social media for regular updates
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              <span>📸</span>
              Follow on Instagram
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border border-white/20">
              <span>💼</span>
              Connect on LinkedIn
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="p-8 flex flex-col items-center">
                {/* Image Display */}
                <div className="bg-gray-100 p-6 flex items-center justify-center max-w-2xl max-h-96 mb-6 rounded-lg">
                  <img
                    src={selectedImage.image}
                    alt={`Gallery image ${selectedImage.id}`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="text-center">
                            <div class="text-6xl mb-4">🏢</div>
                            <div class="text-gray-600">Image not available</div>
                            <div class="text-gray-500 text-sm mt-2">Image ${selectedImage.id}</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 w-full max-w-md">
                  <button 
                    onClick={() => handleDownload(selectedImage)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                  <button 
                    onClick={() => handleShare(selectedImage)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}