import React from 'react';
import Image from 'next/image';
import { home16, home17, home18 } from '@/assests/Home';

export default function LatestNews() {
  const blogData = [
    {
      image: home16.src,
      category: "HouseKeeping",
      title: "Professional Housekeeping Services for Your Property",
      excerpt: "We provide thorough and professional housekeeping services to take care of all aspects of your property.",
      link: "#",
    },
    {
      image: home17.src,
      category: "PayRoll",
      title: "Integrated Payroll Solutions",
      excerpt: "We offer a wide spectrum of integrated payroll solutions while you can focus on your core business mission.",
      link: "#",
    },
    {
      image: home18.src,
      title: "Comprehensive Staffing Solutions",
      category: "Staffing Solution",
      excerpt: "We provide both temporary and permanent qualified staffing solutions across various business sectors.",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-amber-600 mb-2">INSIGHTS & UPDATES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Articles</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center">
                  <a 
                    href={blog.link} 
                    className="text-amber-600 font-medium flex items-center hover:text-amber-700 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 text-sm ml-auto">3 min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}