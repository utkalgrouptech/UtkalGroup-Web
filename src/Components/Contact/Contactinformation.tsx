import React from 'react';
import { LocationOn, Call, Mail, LinkedIn, Instagram, Facebook, Twitter } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="bg-gray-50">

      {/* Contact Form + Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                  className="bg-gray-50 rounded-lg"
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                  className="bg-gray-50 rounded-lg"
                />
              </div>
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                required
                className="bg-gray-50 rounded-lg"
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                className="bg-gray-50 rounded-lg"
              />
              <TextField
                label="Your Message"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                className="bg-gray-50 rounded-lg"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                fullWidth
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <LocationOn className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Headquarters</h4>
                    <p className="text-gray-600">
                      Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, 
                      Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhubaneswar, 
                      Dist- Khurda, Odisha, India-751019
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Call className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 9853030003</p>
                    <p className="text-gray-600">+91 9668848999</p>
                    <p className="text-gray-600">+91 9692200370</p>
                    <p className="text-gray-600">+91 9853034446</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@utkalgroup.in</p>
                    <p className="text-gray-600">support@utkalgroup.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <LinkedIn className="text-blue-600" />
                </Link>
                <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Instagram className="text-blue-600" />
                </Link>
                <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Facebook className="text-blue-600" />
                </Link>
                <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Twitter className="text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New Delhi",
                address: "Corporate Office: 214, Second Floor, Sector A, Pocket C, Vasant Kunj, New Delhi 110070",
                phone: "+91 9668848999"
              },
              {
                city: "Bhubaneswar",
                address: "Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhuabneswar, Dist- Khurda, Odisha, India-751019.",
                phone: "+91 9853030003"
              },
              {
                city: "Bangalore",
                address: "789 Tech Plaza, Whitefield, Bangalore - 560066",
                phone: "+91 9692200370"
              }
            ].map((branch, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.city}</h3>
                <div className="flex items-start mb-4">
                  <LocationOn className="text-blue-600 mr-2 mt-0.5" />
                  <p className="text-gray-600">{branch.address}</p>
                </div>
                <div className="flex items-start">
                  <Call className="text-blue-600 mr-2 mt-0.5" />
                  <p className="text-gray-600">{branch.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to partner with us?</h2>
          <p className="text-xl mb-8">
            Contact our business development team to explore collaboration opportunities
          </p>
          <Button
            variant="contained"
            size="large"
            className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;