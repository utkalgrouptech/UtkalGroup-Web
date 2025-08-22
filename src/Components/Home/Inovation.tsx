// import { facility,  home27,  } from '@/assests/Home';
// import React from 'react';

// export default function Inovation() {
//   return (
//     <div className="relative mb-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-12 lg:space-y-0 p-4 main-container lg:p-8">
//       {/* Main Image Section */}
//       <div
//         className="relative h-1/2 lg:w-1/2"
//         data-aos="fade-up"
//         data-aos-anchor-placement="center-bottom"
//       >
        
//          <img
//           src={home27.src}
//           alt=""
//           className="rounded-lg w-3/4" 
//         />
//        <img
//           src={facility.src}
//           alt=""
//           className="absolute bottom-0 left-48 w-52 rounded-lg"
//         />
//       </div>

//       {/* Text Section */}
//       <div
//         className="w-full lg:w-1/2 space-y-4 text-center lg:text-left"
//         data-aos="fade-up"
//         data-aos-anchor-placement="center-bottom"
//       >
//         {/* Headings */}
//         <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-black">
//           About Us
//         </p>
//         <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 text-black">
//           Innovative Solutions For Digital Success.
//         </p>

//         {/* Paragraph */}
//         <p className="text-sm sm:text-base lg:text-lg mt-4 lg:mt-8 text-gray-700">
//           Utkal Group is {`India's`} leading provider of diverse services and
//           innovative products focusing on creating a comfortable and supportive
//           environment that empowers businesses to thrive. Headquartered in
//           Delhi, with a corporate office in Bhubaneswar, our comprehensive
//           portfolio covers Facility Management, Premium Security Services,
//           Green Energy Solutions, Utility services, IT software, Real Estate,
//           Payroll Management, Logistics, Textiles, and Agricultural Products.
//           We forge strong partnerships, going beyond just products and
//           services, to deliver exceptional, customized solutions seamlessly.
//           Utkal Group is dedicated to fostering sustainable practices across all
//           endeavors ensuring a lasting positive impact on the communities we
//           serve. We also provide community services through Utkal Foundation
//           and Ayushman Foundation.
//         </p>

//         {/* Progress Bars Section */}
//         <div className="space-y-6 mt-6 lg:mt-11">
//           {/* Digital Marketing */}
//           <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
//             <div className="flex justify-between items-center">
//               <span className="text-black uppercase font-bold text-xs sm:text-sm">
//                 Digital Marketing
//               </span>
//               <span className="text-black font-bold text-xs sm:text-sm">95%</span>
//             </div>
//             <div className="w-full h-2 bg-gray-300 rounded-full">
//               <div
//                 className="bg-[#B69974] h-2 rounded-full"
//                 style={{ width: '95%' }}
//               ></div>
//             </div>
//           </div>

//           {/* Digital Business */}
//           <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
//             <div className="flex justify-between items-center">
//               <span className="text-black uppercase font-bold text-xs sm:text-sm">
//                 Digital Business
//               </span>
//               <span className="text-black font-bold text-xs sm:text-sm">90%</span>
//             </div>
//             <div className="w-full h-2 bg-gray-300 rounded-full">
//               <div
//                 className="bg-[#B69974] h-2 rounded-full"
//                 style={{ width: '90%' }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// // import { facility, home27 } from "@/assests/Home";
// // import React from "react";

// // const Innovation = () => {
// //   return (
// //     <section className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-white">

// //       <div className="relative w-96 h-96">
// //         <img
// //           src={home27.src}
// //           alt=""
// //           className="rounded-lg w-3/4" 
// //         />
// //         <img
// //           src={facility.src}
// //           alt=""
// //           className="absolute bottom-0 left-48 w-2/3 rounded-lg"
// //         />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Innovation;

import React from 'react';

export default function BusinessTransformation() {
  return (
    <section className="relative bg-gray-900 py-20 px-6 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-transparent w-1/3"></div>
        <div className="absolute inset-0 bg-[url('/path/to/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s discuss how our comprehensive solutions can help your organization achieve its goals.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-amber-500 mb-1">150+</div>
                <p className="text-sm text-gray-300">Satisfied Clients</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-amber-500 mb-1">24/7</div>
                <p className="text-sm text-gray-300">Support Available</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-amber-500 mb-1">10+</div>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Consultation Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select a service</option>
                    <option value="facility">Facility Management</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="security">Security Solutions</option>
                    <option value="energy">Green Energy</option>
                    <option value="realestate">Real Estate</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
