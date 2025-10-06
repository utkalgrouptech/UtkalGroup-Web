import React, { useState } from "react";
import Head from "next/head";
import MainLayouts from "@/Layouts/MainLayouts";

interface GalleryItem {
  id: number;
  category: string;
  company: string;
  title: string;
  description: string;
  image: string;
}
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Gallery data with images for different categories
  const galleryData = [
    {
      id: 1,
      category: "corporate",
      title: "Corporate Headquarters",
      description: "Our state-of-the-art corporate office in Bhubaneswar",
      image: "/images/corporate-hq.jpg",
      company: "Utkal Group"
    },
    {
      id: 2,
      category: "events",
      title: "Annual Meet 2024",
      description: "Utkal Group annual leadership conference",
      image: "/images/annual-meet.jpg",
      company: "All Companies"
    },
    {
      id: 3,
      category: "facilities",
      title: "Modern Workspace",
      description: "Collaborative work environment at MR Corporate",
      image: "/images/workspace.jpg",
      company: "MR Corporate"
    },
    {
      id: 4,
      category: "projects",
      title: "Solar Power Plant",
      description: "50 MW solar plant installation in Odisha",
      image: "/images/solar-plant.jpg",
      company: "Utkal Power"
    },
    {
      id: 5,
      category: "team",
      title: "Leadership Team",
      description: "Our visionary leadership guiding the group",
      image: "/images/leadership-team.jpg",
      company: "Utkal Group"
    },
    {
      id: 6,
      category: "events",
      title: "Product Launch",
      description: "Launching new organic products globally",
      image: "/images/product-launch.jpg",
      company: "Utkal International"
    },
    {
      id: 7,
      category: "facilities",
      title: "Bottling Unit",
      description: "Advanced beverage bottling facility",
      image: "/images/bottling-unit.jpg",
      company: "Utkal Bottling"
    },
    {
      id: 8,
      category: "projects",
      title: "Textile Manufacturing",
      description: "Modern textile production unit",
      image: "/images/textile-unit.jpg",
      company: "Utkal Global"
    },
    {
      id: 9,
      category: "team",
      title: "Development Team",
      description: "Our talented software development team",
      image: "/images/dev-team.jpg",
      company: "Indoplus"
    },
    {
      id: 10,
      category: "corporate",
      title: "Client Meeting",
      description: "Strategic client discussions",
      image: "/images/client-meeting.jpg",
      company: "All Companies"
    },
    {
      id: 11,
      category: "events",
      title: "CSR Initiative",
      description: "Community development programs",
      image: "/images/csr-event.jpg",
      company: "Utkal Foundation"
    },
    {
      id: 12,
      category: "projects",
      title: "Construction Site",
      description: "Ongoing infrastructure development",
      image: "/images/construction.jpg",
      company: "Utkal Homes"
    }
  ];

  const filters = [
    { key: "all", label: "All Photos" },
    { key: "corporate", label: "Corporate" },
    { key: "events", label: "Events" },
    { key: "facilities", label: "Facilities" },
    { key: "projects", label: "Projects" },
    { key: "team", label: "Our Team" }
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const stats = [
    { number: "15+", label: "Companies" },
    { number: "50+", label: "Projects" },
    { number: "1000+", label: "Team Members" },
    { number: "10+", label: "Cities" }
  ];

  return (
    <>
      <Head>
        <title>Gallery - Utkal Group | Our Corporate Journey</title>
        <meta name="description" content="Explore the visual journey of Utkal Group - our offices, events, projects, and team across all companies." />
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
              Visual journey through our corporate excellence, events, and achievements across all companies
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

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
                  {/* In real implementation, replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 group-hover:scale-110 transition-transform duration-700">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">🏢</div>
                      <div className="text-gray-700 font-semibold">{item.title}</div>
                      <div className="text-gray-500 text-sm mt-1">{item.company}</div>
                    </div>
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.company}
                      </span>
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Companies Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore visual stories from across our diverse portfolio of companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Utkal Facility", icon: "🏢", count: "24", color: "blue" },
              { name: "MR Corporate", icon: "💼", count: "18", color: "green" },
              { name: "Utkal Power", icon: "⚡", count: "12", color: "yellow" },
              { name: "Utkal International", icon: "🌍", count: "15", color: "purple" },
              { name: "Indoplus", icon: "💻", count: "20", color: "indigo" },
              { name: "Utkal Homes", icon: "🏠", count: "16", color: "pink" }
            ].map((company, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{company.icon}</div>
                    <h3 className="font-bold text-gray-900">{company.name}</h3>
                  </div>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                    {company.count} photos
                  </span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <button className="w-full bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors border border-gray-300">
                  View Gallery
                </button>
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
            Follow us on social media for regular updates from across the Utkal Group companies
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
          <div className="relative max-w-6xl max-h-full">
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
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <div className="text-gray-600">Image Preview</div>
                  </div>
                </div>

                {/* Details Side */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {selectedImage.category}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImage.company}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedImage.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Added on January 15, 2024</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Bhubaneswar, Odisha</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      Download
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}