"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  team1, team2, team3, team4, team5, team6, team7, team8,
  team9, team10, team11, team12, team13, team14,
  team15, team16, team17, team18, team19, team20, team21,
  team22, team23, team24, team25
} from "@/assests/Team";

export default function Team() {

  const seniorNames = [
    "Mr. Suresh Mishra",
    "Swayanshree Mishra",
    "Niranjan Mishra",
    "B B Shingh",
    "Liaison Manager",
    "Branch Manager",
    "Admin Manager"
  ];

  const cmd = {
    id: 1,
    name: "Mr. Suresh Mishra",
    title: "Founder, CEO / CMD",
    image: team1,
  };

  const higherAuthority = [
    { id: 2, name: "Swayanshree Mishra", title: "Executive Director", image: team2 },
    { id: 3, name: "Niranjan Mishra", title: "Director of Finance", image: team3 },
    { id: 4, name: "B B Shingh", title: "Techno Commercial Head", image: team4 },
  ];

  const branchManagers = [
    { id: 1, name: "Senior Liaison Officer", image: team5 },
    { id: 2, name: "Regional Branch Lead", image: team6 },
    { id: 3, name: "Senior Branch Operations Lead", image: team7 },
    { id: 4, name: "Administrative Operations Head", image: team8 },
  ];

  const hrTeam = [
    { id: 1, name: "Head Of Hr", image: team9 },
    { id: 2, name: "Senior HR Operations Manager", image: team10 },
    { id: 3, name: "HR Administration Supervisor", image: team11 },
    { id: 4, name: "HR Operations Executive", image: team12 },
  ];

  const accountants = [
    { id: 1, name: "Senior Accounts Officer", image: team13 },
    { id: 2, name: "Manager in Finance", image: team14 },
  ];

  const exportImport = {
    id: 1,
    name: "International Trade Strategist",
    image: team25,
  };

  const technicalTeam = [
    { id: 1, name: "Lead Software Engineer", image: team15 },
    { id: 2, name: "Graphics Designer", image: team16 },
  ];

  const operationalTeam = [
    { id: 1, name: "Operations Administration Head", image: team17 },
    { id: 2, name: "Facilities Operations Officer", image: team18 },
    { id: 3, name: "Inventory Control Supervisor", image: team19 },
    { id: 4, name: "Field Operations Lead", image: team20 },
    { id: 5, name: "Office Operations Specialist", image: team21 },
    { id: 6, name: "Facilities Service Officer", image: team22 },
    { id: 7, name: "Facilities Training Supervisor", image: team23 },
    { id: 8, name: "Security Training & Compliance Officer", image: team24 },
  ];

  const SectionTitle = ({ title }: { title: string }) => (
    <h3
      className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 border-l-8 pl-4"
      style={{ borderColor: "#000080" }}
    >
      {title}
    </h3>
  );

  const Card = ({ image, name, title }: any) => {
    const isSenior = seniorNames.includes(name);
    const isHigherAuthority = higherAuthority.some(h => h.name === name);

    return (
      <div className="relative group bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

        <div className={`absolute inset-0 rounded-xl sm:rounded-2xl border-4 transition-all duration-300 pointer-events-none ${
          isSenior ? "border-yellow-500" : "border-transparent"
        }`}></div>

        <div className="relative h-52 sm:h-48 group-hover:scale-105 transition-transform duration-300">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover ${isHigherAuthority ? "object-top" : ""}`}
          />
        </div>

        <div className="p-4 text-center">
          <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{name}</h4>
          {title && (
            <p className="text-sm mt-1 font-medium" style={{ color: "#f47920" }}>
              {title}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 sm:mb-20">
          <span
            className="inline-block px-4 py-1 text-sm font-semibold rounded-full mb-4"
            style={{ backgroundColor: "#4fa94120", color: "#4fa941" }}
          >
            OUR LEADERSHIP
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Meet Our
            <span
              className="ml-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #000080, #f47920)",
              }}
            >
              Executive Team
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 px-2">
            Experienced professionals committed to organizational excellence and long-term success.
          </p>
        </div>

        <div
          className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mb-16 sm:mb-24 border"
          style={{ borderColor: "#00008010" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 h-72 sm:h-96 relative">
              <Image src={cmd.image} alt={cmd.name} fill className="object-cover" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-12 flex flex-col justify-center text-center sm:text-left">
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900">{cmd.name}</h3>
              <p className="text-lg sm:text-xl mt-2 font-semibold" style={{ color: "#f47920" }}>
                {cmd.title}
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
                With over 25 years of leadership excellence, he continues to lead growth,
                innovation, and global operations with a strong strategic vision.
              </p>
            </div>
          </div>
        </div>

        <SectionTitle title="Higher Authority" />

        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 sm:mb-24">

          <div className="lg:w-1/3 w-full">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl rounded-2xl p-6 sm:p-8 relative text-center lg:text-left">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Our Leadership Philosophy
              </h4>
              <p className="text-gray-700 mb-2 text-sm sm:text-base">
                Our executive team combines decades of experience with innovative thinking,
                ensuring sustainable growth and organizational excellence across all operations.
              </p>
              <p className="text-gray-700 italic text-sm sm:text-base">
                Leadership is not about titles, it’s about inspiring and guiding the team.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {higherAuthority.map((m) => (
              <Card key={m.id} image={m.image} name={m.name} title={m.title} />
            ))}
          </div>
        </div>

        <SectionTitle title="Branch Managers" />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {branchManagers.map((m) => (
            <Card key={m.id} image={m.image} name={m.name} />
          ))}
        </div>

        <SectionTitle title="Human Resource Team" />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {hrTeam.map((m) => (
            <Card key={m.id} image={m.image} name={m.name} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 text-center">
            <SectionTitle title="Accounts Team" />
            <SectionTitle title="Business Coordinator" />
            <SectionTitle title="Technical Team" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            <Card image={accountants[0].image} name={accountants[0].name} />
            <Card image={accountants[1].image} name={accountants[1].name} />
            <Card image={exportImport.image} name={exportImport.name} />
            <Card image={technicalTeam[0].image} name={technicalTeam[0].name} />
            <Card image={technicalTeam[1].image} name={technicalTeam[1].name} />
          </div>
        </div>

        <SectionTitle title="Operational Team" />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {operationalTeam.map((m) => (
            <SwiperSlide key={m.id}>
              <div className="group bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center">

                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-gray-200 group-hover:ring-[#000080] transition">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>

                <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mt-4 text-center">
                  {m.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
