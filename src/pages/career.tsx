"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Head from "next/head";
import MainLayouts from "@/Layouts/MainLayouts";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resume: File | null;
  coverLetter: string;
}

interface JobOpening {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export default function Careers() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files ? e.target.files[0] : null
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Application submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: null,
      coverLetter: "",
    });
  };

  const jobOpenings: JobOpening[] = [
    { id: 1, title: "Senior Frontend Developer", department: "Technology", type: "Full-time", location: "Bhubaneswar, Odisha", experience: "3-5 years", description: "We are looking for a skilled Frontend Developer to join our technology team." },
    { id: 2, title: "Business Development Manager", department: "Sales", type: "Full-time", location: "Multiple Locations", experience: "5-7 years", description: "Drive business growth and build client relationships across our group companies." },
    { id: 3, title: "Facility Management Executive", department: "Operations", type: "Full-time", location: "Kolkata, West Bengal", experience: "2-4 years", description: "Manage facility operations and ensure smooth service delivery." },
    { id: 4, title: "Digital Marketing Specialist", department: "Marketing", type: "Full-time", location: "Remote", experience: "2-3 years", description: "Create and execute digital marketing strategies for our group companies." },
  ];

  const benefits: Benefit[] = [
    { icon: "💼", title: "Competitive Salary", description: "Industry-standard compensation with performance bonuses" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive health coverage for you and your family" },
    { icon: "📚", title: "Learning & Development", description: "Continuous skill development and training programs" },
    { icon: "🏠", title: "Work Flexibility", description: "Hybrid work models and flexible working hours" },
    { icon: "🎯", title: "Career Growth", description: "Clear career progression paths across group companies" },
    { icon: "🍕", title: "Wellness Programs", description: "Health wellness programs and recreational activities" },
  ];

  return (
    <MainLayouts>
      <Head>
        <title>Careers - Utkal Group | Join Our Team</title>
        <meta name="description" content="Build your career with Utkal Group. Explore opportunities across our diverse portfolio of companies." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Build Your Career With <span className="text-blue-400">Utkal Group</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Join our diverse family of companies and shape the future across multiple industries
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 text-sm sm:text-base">
              <span className="font-semibold">20+</span> Companies
            </div>
            <div className="bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 text-sm sm:text-base">
              <span className="font-semibold">100+</span> Open Positions
            </div>
            <div className="bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 text-sm sm:text-base">
              <span className="font-semibold">500+</span> Cities
            </div>
          </div>
          <button
            onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl"
          >
            Explore Open Positions
          </button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Join Utkal Group?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of a dynamic conglomerate that values innovation, growth, and employee development
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Current Openings</h2>
            <p className="text-base sm:text-lg text-gray-600">Explore opportunities across our group companies</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4 text-xs sm:text-sm">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{job.department}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{job.type}</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">{job.location}</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Exp: {job.experience}</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">{job.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position: job.title }));
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap text-sm sm:text-base"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Apply for Position</h2>
              <p className="text-base sm:text-lg text-gray-300">Ready to join our team? Submit your application below.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">Position Applied For *</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Enter position title"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">Upload Resume *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Accepted formats: PDF, DOC, DOCX (Max: 5MB)</p>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Tell us why you're interested in this position..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 text-base sm:text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                    Submitting Application...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayouts>
  );
}
