"use client";

import React from "react";
import Image from "next/image";

import {
  team1,
  team2,
  team3,
  team4,
  team8,
  team9,
  team11,
  team13,
  team14,
  team17,
  team18,
  team19,
  team20,
  team21,
  team22,
  team23,
  team27,
  team29,
  staff1,
  staff2,
  staff3,
  staff4,
  staff5,
  staff6,
   staff7,
   staff8,
   staff9
} from "@/assests/Team";

export default function Team() {
  /* =========================
     TEAM DATA
  ========================= */

  const cmd = {
    name: "Mr. Suresh Mishra",
    title: "Founder, CEO / CMD",
    image: team1,
  };

  const higherAuthority = [
    {
      id: 1,
      name: "Swayanshree Mishra",
      title: "Executive Director",
      image: team2,
    },
    {
      id: 2,
      name: "Niranjan Mishra",
      title: "Director of Finance",
      image: team3,
    },
    {
      id: 3,
      name: "PK Sahoo",
      title: "CHRO",
      image: staff7,
    },
  ];

  const branchManagers = [
    {
      id: 1,
      name: "Administrative Head",
      title: "Administration",
      image: team8,
    },
  ];

  const hrTeam = [
    {
      id: 1,
      name: "Head Of Hr",
      title: "Human Resources",
      image: team9,
    },
    {
      id: 2,
      name: "HR Administration Supervisor",
      title: "HR Administration",
      image: team11,
    },
    {
      id: 3,
      name: "HR Manager",
      title: "Human Resources",
      image: staff5,
    },
    {
      id: 4,
      name: "HR Operations Executive",
      title: "HR Operations",
      image: staff4,
    },
  ];

  const accountsTeam = [
    {
      id: 1,
      name: "Senior Accounts Officer",
      title: "Accounts & Finance",
      image: team13,
    },
    {
      id: 2,
      name: "Manager in Finance",
      title: "Finance",
      image: staff8,
    },
  ];

  const technicalTeam = [
    {
      id: 1,
      name: "Lead Software Engineer",
      title: "Technology",
      image: staff2,
    },
    {
      id: 2,
      name: "Graphics Designer",
      title: "Creative & Design",
      image: staff9,
    },
  ];

  const businessTeam = [
    {
      id: 1,
      name: "BDM",
      title: "Business Development",
      image: staff9,
    },
    {
      id: 2,
      name: "Tender Manager",
      title: "Tender Management",
      image: staff9,
    },
    {
      id: 3,
      name: "Tender Executive",
      title: "Tender Operations",
      image: staff6,
    },
    {
      id: 4,
      name: "NGO Lead",
      title: "NGO & Social Initiatives",
      image: team29,
    },
  ];

  const operationalTeam = [
    {
      id: 1,
      name: "Operations Administration Head",
      title: "Operations",
      image: team17,
    },
    {
      id: 2,
      name: "Facilities Operations Officer",
      title: "Facilities",
      image: team18,
    },
    {
      id: 3,
      name: "Inventory Control Supervisor",
      title: "Inventory Control",
      image: team19,
    },
    {
      id: 4,
      name: "Field Operations Lead",
      title: "Field Operations",
      image: team20,
    },
    {
      id: 5,
      name: "Office Operations Specialist",
      title: "Office Operations",
      image: team21,
    },
    {
      id: 6,
      name: "Facilities Service Officer",
      title: "Facilities Services",
      image: team22,
    },
    {
      id: 7,
      name: "Facilities Training Supervisor",
      title: "Training & Development",
      image: team23,
    },
  ];

  /* =========================
     SECTION HEADING
  ========================= */

  const SectionHeading = ({
    eyebrow,
    title,
    description,
  }: {
    eyebrow: string;
    title: string;
    description?: string;
  }) => (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-[2px] w-10 bg-[#F4B400]" />

        <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#000080]">
          {eyebrow}
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101828]">
        {title}
      </h3>

      {description && (
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );

  /* =========================
     STANDARD TEAM CARD
  ========================= */

  const TeamCard = ({
    image,
    name,
    title,
  }: {
    image: any;
    name: string;
    title: string;
  }) => (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#000080]/20 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
        
        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-[#000080] via-[#000080] to-[#F4B400] opacity-80" />

        {/* Image */}
        <div className="relative aspect-[4/4.5] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <h4 className="text-base sm:text-lg font-bold leading-snug text-[#101828]">
            {name}
          </h4>

          <div className="mx-auto mt-3 h-[2px] w-8 bg-[#F4B400] transition-all duration-300 group-hover:w-14" />

          <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#000080]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );

  /* =========================
     SMALL TEAM CARD
  ========================= */

  const CompactCard = ({
    image,
    name,
    title,
  }: {
    image: any;
    name: string;
    title: string;
  }) => (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative mx-auto aspect-square w-full max-w-[190px] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pt-4 text-center">
        <h4 className="text-sm sm:text-base font-bold text-gray-900">
          {name}
        </h4>

        <p className="mt-1 text-xs sm:text-sm font-medium text-[#000080]">
          {title}
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28">
      
      {/* =========================
          BACKGROUND DECORATION
      ========================= */}

      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#000080]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-[45%] h-80 w-80 rounded-full bg-[#F4B400]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            HERO / INTRO
        ========================= */}

        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">
          
          <span className="inline-flex items-center gap-2 rounded-full border border-[#000080]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#000080] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F4B400]" />
            Our Leadership
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#101828] sm:text-5xl lg:text-6xl">
            Meet the People
            <br />

            <span className="bg-gradient-to-r from-[#000080] to-[#F4B400] bg-clip-text text-transparent">
              Behind Our Success
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A dedicated team of experienced professionals working together
            with a shared vision for sustainable growth, operational excellence,
            and long-term success.
          </p>
        </div>

        {/* =========================
            CMD / FOUNDER
        ========================= */}

        <div className="relative mb-20 sm:mb-28">
          
          <div className="overflow-hidden rounded-3xl bg-[#071427] shadow-[0_25px_70px_rgba(7,20,39,0.18)]">
            
            <div className="grid lg:grid-cols-12">

              {/* Image */}
              <div className="relative min-h-[380px] sm:min-h-[480px] lg:col-span-5 lg:min-h-[560px]">
                <Image
                  src={cmd.image}
                  alt={cmd.name}
                  fill
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071427] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#071427]/30" />

                {/* Badge */}
                <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#000080] shadow-lg backdrop-blur">
                  Founder & Visionary
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:col-span-7 lg:px-16">
                
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4B400]">
                  Leadership
                </span>

                <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  {cmd.name}
                </h3>

                <p className="mt-3 text-lg font-semibold text-[#F4B400] sm:text-xl">
                  {cmd.title}
                </p>

                <div className="my-7 h-px w-full bg-white/10" />

                <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  With over 25 years of leadership excellence, he continues to
                  lead growth, innovation, and global operations with a strong
                  strategic vision.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                    Strategic Leadership
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                    Business Growth
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            HIGHER AUTHORITY
        ========================= */}

        <section className="mb-20 sm:mb-28">
          
          <SectionHeading
            eyebrow="Executive Leadership"
            title="Higher Authority"
            description="Our senior leadership team drives strategic direction, financial discipline, and organizational growth."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {higherAuthority.map((member) => (
              <TeamCard
                key={member.id}
                image={member.image}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </section>

        {/* =========================
            DEPARTMENT SECTION
        ========================= */}

        <section className="mb-20 sm:mb-28">
          
          <SectionHeading
            eyebrow="Administration"
            title="Branch Management"
            description="Focused leadership ensuring smooth administration and effective coordination across operations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {branchManagers.map((member) => (
              <TeamCard
                key={member.id}
                image={member.image}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </section>

        {/* =========================
            HR
        ========================= */}

        <section className="mb-20 sm:mb-28">
          
          <SectionHeading
            eyebrow="People & Culture"
            title="Human Resource Team"
            description="Building strong teams, supporting people, and creating a culture of continuous growth."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {hrTeam.map((member) => (
              <TeamCard
                key={member.id}
                image={member.image}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </section>

        {/* =========================
            ACCOUNTS + TECHNICAL
        ========================= */}

        <section className="mb-20 sm:mb-28">
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Accounts */}
            <div>
              <SectionHeading
                eyebrow="Finance"
                title="Accounts Team"
                description="Managing financial operations with accuracy, transparency, and accountability."
              />

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {accountsTeam.map((member) => (
                  <CompactCard
                    key={member.id}
                    image={member.image}
                    name={member.name}
                    title={member.title}
                  />
                ))}
              </div>
            </div>

            {/* Technical */}
            <div>
              <SectionHeading
                eyebrow="Technology"
                title="Technical Team"
                description="Supporting digital innovation, technology, communication, and creative development."
              />

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {technicalTeam.map((member) => (
                  <CompactCard
                    key={member.id}
                    image={member.image}
                    name={member.name}
                    title={member.title}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================
            BUSINESS DEVELOPMENT
        ========================= */}

        <section className="mb-20 sm:mb-28">
          
          <SectionHeading
            eyebrow="Growth & Development"
            title="Business & Development Team"
            description="Driving business opportunities, tender management, partnerships, and social initiatives."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {businessTeam.map((member) => (
              <TeamCard
                key={member.id}
                image={member.image}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </section>

        {/* =========================
            OPERATIONS
        ========================= */}

        <section>
          
          <SectionHeading
            eyebrow="Operations"
            title="Operational Team"
            description="The professionals responsible for maintaining efficient, reliable, and high-quality day-to-day operations."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {operationalTeam.map((member) => (
              <CompactCard
                key={member.id}
                image={member.image}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </section>

        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        <div className="mt-20 sm:mt-28">
          <div className="relative overflow-hidden rounded-3xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-gray-200 sm:px-10 sm:py-14">
            
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#000080] via-[#F4B400] to-[#000080]" />

            <p className="text-xl font-bold text-[#101828] sm:text-2xl">
              Strong Teams. Shared Vision. Sustainable Growth.
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
              Together, our people form the foundation of our commitment to
              excellence, innovation, and long-term value creation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}