"use client";

import React from "react";
import {
  LocationOn,
  Call,
  Mail,
  LinkedIn,
  Instagram,
  Facebook,
  Twitter,
} from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const branches = [
    {
      city: "New Delhi",
      address:
        "Corporate Office: 214, Second Floor, Sector A, Pocket C, Vasant Kunj, New Delhi 110070",
      phone: "+91 9668848999",
    },
    {
      city: "Bhubaneswar",
      address:
        "Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhubaneswar, Khurda, Odisha - 751019",
      phone: "+91 9853034446",
    },
    {
      city: "Bangalore",
      address: "789 Tech Plaza, Whitefield, Bangalore - 560066",
      phone: "+91 9692200370",
    },
  ];

  const socialLinks = [
    { icon: LinkedIn, href: "#", color: "#000080" },
    { icon: Instagram, href: "#", color: "#f47920" },
    { icon: Facebook, href: "#", color: "#4fa941" },
    { icon: Twitter, href: "#", color: "#000080" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Header Section */}
      <section className="relative text-center py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-cover bg-center opacity-5"></div>
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-[#000080]"
        >
          Contact <span className="text-[#f47920]">Utkal Group</span>
        </motion.h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Let’s collaborate to build impactful partnerships and sustainable
          solutions. Reach out to us for inquiries or opportunities.
        </p>
      </section>

   {/* Contact Form + Info Section */}
<section className="py-46 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
    {/* Contact Form */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full"
    >
      <div className="bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-lg p-8 flex-1">
        <h2 className="text-3xl font-semibold text-[#000080] mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField label="First Name" variant="outlined" fullWidth required />
            <TextField label="Last Name" variant="outlined" fullWidth required />
          </div>
          <TextField label="Email Address" type="email" variant="outlined" fullWidth required />
          <TextField label="Phone Number" variant="outlined" fullWidth />
          <TextField
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: "#000080",
              "&:hover": { backgroundColor: "#f47920" },
              padding: "12px",
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>

    {/* Contact Info + Social */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col h-full space-y-4"
    >
      <div className="bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-lg p-6 flex-1 flex flex-col justify-between">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-[#000080] mb-3">
            Contact Information
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-[#f47920]/10 p-2 rounded-full">
                <LocationOn className="text-[#f47920]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Headquarters</h4>
                <p className="text-gray-600 text-sm">
                  Arya Surya Enclave, Plot No- K5/475, Kalinga Vihar,
                  Patrapada, Bhubaneswar, Odisha - 751019
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#4fa941]/10 p-2 rounded-full">
                <Call className="text-[#4fa941]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+91 9692200370</p>
                <p className="text-gray-600">+91 9853034446</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#000080]/10 p-2 rounded-full">
                <Mail className="text-[#000080]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">info@utkalgroup.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-[#000080] mb-3">
            Connect With Us
          </h3>
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="p-2 bg-gray-100 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <social.icon sx={{ color: social.color }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

    {/* Map + Branches Section */}
<section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
    {/* Map */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full"
    >
      <h2 className="text-3xl font-bold text-[#000080] mb-4 text-center lg:text-left">
        Our Location
      </h2>
      <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#000080]/10 flex-1 min-h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>

    {/* Branches */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full"
    >
      <h2 className="text-3xl font-bold text-[#000080] mb-4 text-center lg:text-left">
        Our Branches
      </h2>
      <div className="grid grid-cols-1 gap-4 flex-1">
        {branches.map((branch, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg p-4 hover:shadow-2xl hover:-translate-y-2 transition-all h-full"
          >
            <h3 className="text-xl font-semibold text-[#000080] mb-2">
              {branch.city}
            </h3>
            <div className="flex items-start mb-2 gap-2">
              <LocationOn className="text-[#f47920] mt-0.5" />
              <p className="text-gray-600 text-sm">{branch.address}</p>
            </div>
            <div className="flex items-start gap-2">
              <Call className="text-[#4fa941] mt-0.5" />
              <p className="text-gray-600 text-sm">{branch.phone}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

    </div>
  );
}
