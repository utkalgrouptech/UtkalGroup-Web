"use client"

import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StarIcon from '@mui/icons-material/Star'
import { ayushman, bott, corporation1, education1, facility, found, global1, homedeal, indo1, link, maxim1, myjob, national, odo1, power, slider12, top1, zplus } from "@/assests/Home"

export const serviceData = [
  {
    id: 1,
    title: "UTKAL FACILITY",
    slug: "utkal-facility",
    category: "Management",
    image: facility.src,
    description:
      "Manpower Management. Landscaping and Gardening. Resource Optimization. Maintenance Services. Security Services.",
    services: ["Manpower Management", "Landscaping", "Resource Optimization", "Maintenance", "Security"],
    rating: 4.9,
    clients: 300,
    featured: true,
  },
  {
    id: 2,
    title: "MR CORPORATE",
    slug: "mr-corporate",
    category: "Corporate Services",
    image: slider12.src,
    description:
      "Business Consulting. Corporate Branding. Compliance Services. Staff Outsourcing. Event Management.",
    services: ["Consulting", "Branding", "Compliance", "Outsourcing", "Events"],
    rating: 4.6,
    clients: 85,
    featured: false,
  },
  {
    id: 3,
    title: "TOPFRONT",
    slug: "topfront",
    category: "Marketing",
    image: top1.src,
description:
  "Engineering Project Management. Technical Staffing Solutions. Industrial Operations Support. Process Optimization. On-Site Workforce Deployment.",
services: ["Project Management", "Staffing Solutions", "Operations Support", "Process Optimization", "Workforce Deployment"],
    rating: 4.7,
    clients: 160,
    featured: true,
  },
  // {
  //   id: 4,
  //   title: "ZPLUS SECURITY",
  //   slug: "zplus-security",
  //   category: "Security",
  //   image: zplus.src,
  //   description:
  //     "Executive Protection. Residential Security. Commercial Security. Event Security Management. Emergency Response Services.",
  //   services: [
  //     "Executive Protection",
  //     "Residential Security",
  //     "Commercial Security",
  //     "Event Security",
  //     "Emergency Response",
  //   ],
  //   rating: 4.8,
  //   clients: 180,
  //   featured: true,
  // },
  {
    id: 5,
    title: "UTKAL INTERNATIONAL",
    slug: "utkal-international",
    category: "Trade",
    image: national.src,
    description:
      "Export of Organic Products. Import of Organic Essentials. Quality Assurance. Supply Chain Management. Global Clientele Support.",
    services: ["Organic Export", "Import Services", "Quality Assurance", "Supply Chain", "Global Support"],
    rating: 4.7,
    clients: 80,
    featured: false,
  },
   {
    id: 6,
    title: "UTKAL FOUNDATION",
    slug: "utkal-foundation",
    category: "Non-Profit",
    image: found.src,
    description:
      "Charity Programs. Education Support. Healthcare Initiatives. Community Development. Environmental Projects.",
    services: ["Charity", "Education", "Healthcare", "Community", "Environment"],
    rating: 5.0,
    clients: 500,
    featured: true,
  },
  {
    id: 7,
    title: "UTKAL SMART",
    slug: "utkal-smart",
    category: "Technology",
    image: link.src,
    description:
      "Smart City Solutions. IoT Integration. Digital Infrastructure Development. AI & Automation. Smart Governance Tools.",
    services: ["Smart City Solutions", "IoT", "Digital Infrastructure", "Automation", "Governance Tools"],
    rating: 4.8,
    clients: 220,
    featured: true,
  },
  {
    id: 8,
    title: "INDOPLUS",
    slug: "indoplus",
    category: "Technology",
    image: indo1.src,
    description:
      "Custom Web Development. Mobile App Development. UI/UX Design. Software Development. Digital Marketing Services.",
    services: ["Web Development", "Mobile Apps", "UI/UX Design", "Software Development", "Digital Marketing"],
    rating: 4.7,
    clients: 90,
    featured: false,
  },
  {
    id: 9,
    title: "UTKAL GLOBAL",
    slug: "utkal-global",
    category: "Trade",
    image: global1.src,
    description:
      "International Trade Facilitation. Import-Export Services. Global Market Research. Supply Chain Solutions. Overseas Partnerships.",
    services: ["Trade Facilitation", "Import-Export", "Market Research", "Supply Chain", "Partnerships"],
    rating: 4.7,
    clients: 140,
    featured: true,
  },
  
  {
    id: 10,
    title: "MAXIM",
    slug: "maxim",
    category: "Retail",
    image: maxim1.src,
    description:
      "Retail Chain Management. Wholesale Distribution. Brand Franchising. Consumer Electronics. FMCG Supply.",
    services: ["Retail Management", "Wholesale", "Franchising", "Electronics", "FMCG"],
    rating: 4.8,
    clients: 200,
    featured: true,
  },
  {
    id: 11,
    title: "ODO MANAGEMENT",
    slug: "odo-management",
    category: "Management",
    image: odo1.src,
description:
  "Corporate Events. Wedding Planning. Brand Promotions. Stage & Venue Management. Logistics & Guest Coordination.",
services: ["Corporate Events", "Weddings", "Brand Promotions", "Venue Management", "Logistics"],

    rating: 4.5,
    clients: 110,
    featured: false,
  },
  {
    id: 12,
    title: "HOMEDEAL",
    slug: "homedeal",
    category: "Real Estate",
    image: homedeal.src,
    description:
      "Real Estate Sales. Property Development. Home Renovations. Property Rentals. Interior Design Services.",
    services: ["Sales", "Development", "Renovations", "Rentals", "Interior Design"],
    rating: 4.9,
    clients: 310,
    featured: true,
  },
  
 
  {
    id: 13,
    slug: "utkal-homes",
    title: "UTKAL HOMES",
    category: "Real Estate",
    image: homedeal.src,
    description:
      "Property Development and Construction. Real Estate Sales and Marketing. Home Maintenance Services. Interior Design and Furnishing. Property Management.",
    services: ["Property Development", "Real Estate Sales", "Construction", "Interior Design", "Property Management"],
    rating: 4.9,
    clients: 150,
    featured: true,
  },
  {
    id: 14,
    title: "UTKAL CORPORATION",
    slug: "utkal-corporation",
    category: "Corporate",
    image: corporation1.src,
description:
  "Global Metal Trading. Import & Export of Ferrous and Non-Ferrous Metals. Industrial Supply Chain. Quality Procurement. International Logistics.",
services: ["Metal Export", "Metal Import", "Industrial Supply", "Procurement", "Logistics"],
    rating: 4.8,
    clients: 130,
    featured: true,
  },
  {
    id: 15,
    title: "UTKAL BOTTLING",
    slug: "utkal-bottling",
    category: "Manufacturing",
    image: bott.src,
    description:
      "Beverage Bottling. Packaging Solutions. Quality Control. Private Label Services. Bulk Production.",
    services: ["Beverage Bottling", "Packaging", "Quality Control", "Private Label", "Bulk Production"],
    rating: 4.6,
    clients: 120,
    featured: false,
  },
  {
    id: 16,
    title: "UTKAL EDUCATION",
    slug: "utkal-education",
    category: "Education",
    image: education1.src,
    description:
      "School Education Support. Skill Development and Vocational Training. Higher Education Assistance. Digital Learning Solutions. Special Education Programs.",
    services: ["School Support", "Skill Development", "Higher Education", "Digital Learning", "Special Education"],
    rating: 4.6,
    clients: 75,
    featured: false,
  },
  
  
  {
    id: 17,
    title: "UTKAL POWER",
    slug: "utkal-power",
    category: "Energy",
    image: power.src,
    description:
      "Solar Energy Solutions. 50 MW Solar Plant Operations. Energy Efficiency Audits. Green Energy Advocacy. Nationwide Expansion of Solar Projects.",
    services: ["Solar Energy", "50MW Solar Plant", "Energy Audits", "Green Energy", "Solar Projects"],
    rating: 4.8,
    clients: 200,
    featured: true,
  },
  {
    id: 18,
    title: "MY JOB",
    slug: "my-job",
    category: "Recruitment",
    image: myjob.src,
    description:
      "Job Placement Services. Resume Building. Career Counseling. Corporate Recruitment. Skill Development Workshops.",
    services: ["Placement", "Resume Building", "Counseling", "Recruitment", "Skill Workshops"],
    rating: 4.7,
    clients: 250,
    featured: true,
  },{
  id: 19,
  title: "Ayusman Foundation",
  slug: "ayusman-foundation",
  category: "Charity",
  image: ayushman.src,
  description:
    "Empowering communities through health initiatives, education support, food distribution, and social awareness campaigns.",
  services: ["Healthcare Support", "Educational Aid", "Food Distribution", "Social Awareness", "Community Welfare"],
  rating: 4.9,
  clients: 1200,
  featured: true,
}
];

const categories = [
  "All",
  "Real Estate",
  "Energy",
  "Security",
  "Management",
  "Technology",
  "Trade",
  "Manufacturing",
  "Education",
]

export default function ServicePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const filteredServices = serviceData
    .filter(
      (service) =>
        (selectedCategory === "All" || service.category === selectedCategory) &&
        (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "featured") return b.featured ? 1 : -1
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "clients") return b.clients - a.clients
      return 0
    })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-[#f3f6ff] to-[#dce6ff] overflow-hidden">

  {/* Soft Floating Blobs */}
  <div className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-[#000080]/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-[-60px] right-[-20px] w-96 h-96 bg-[#4fa941]/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#f47920]/10 rounded-full blur-3xl opacity-70"></div>

  <div className="max-w-5xl mx-auto text-center relative z-10">

    {/* Tag */}
    <span className="inline-block bg-[#000080]/10 text-[#000080] px-7 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm backdrop-blur-md mb-10">
      Our Services
    </span>

    {/* Title */}
    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#000080]">
      Transforming Businesses with
      <span className="block text-[#f47920] mt-1">Integrated Solutions</span>
    </h1>

    {/* Subtitle */}
    <p className="text-lg md:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
      Explore our diverse ecosystem of <span className="font-semibold text-[#000080]">20+ specialized companies</span> delivering 
      world-class services across India with innovation and excellence.
    </p>

    {/* Highlights Badges */}
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {[
        "20+ Companies",
        "PAN India Presence",
        "24/7 Support",
        "5000+ Happy Clients"
      ].map((item, i) => (
        <span
          key={i}
          className="inline-block bg-white shadow-sm border border-[#000080]/10 px-5 py-2 rounded-full text-sm text-[#000080] hover:shadow-md transition-all backdrop-blur-md"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</section>
      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FilterAltIcon className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter by:</span>
              </div>

              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-40 rounded-full border border-gray-300 px-4 py-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-40 rounded-full border border-gray-300 px-4 py-2"
              >
                <option value="featured">Featured</option>
                <option value="rating">Rating</option>
                <option value="clients">Clients</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{filteredServices.length} Services Found</h2>
                <p className="text-gray-600">
                  {selectedCategory !== "All" ? `in ${selectedCategory}` : "across all categories"}
                </p>
              </div>
              <div className="grid w-40 grid-cols-2 gap-1 bg-gray-200 p-1 rounded-lg">
                <button className="bg-white py-2 rounded-md">Grid</button>
                <button className="py-2 rounded-md">List</button>
              </div>
            </div>

            {/* Grid View */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-xl border border-gray-200"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {service.featured && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs">
                          Featured
                        </span>
                      )}
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs">
                        {service.category}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center gap-1">
                      <StarIcon className="fill-yellow-400 text-yellow-400" style={{ fontSize: 16 }} />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">{service.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.services.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                          {item}
                        </span>
                      ))}
                      {service.services.length > 3 && (
                        <span className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                          +{service.services.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">{service.clients}+ clients served</div>
                      <button
                        className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 rounded-full px-4 py-2 bg-blue-500 text-white text-sm"
                        onClick={() => {
                          const slug = service.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^a-z0-9-]/g, "")
                          window.location.href = `/services/${service.slug}`
                        }}
                      >
                        Learn More
                        <ArrowForwardIcon style={{ fontSize: 16, marginLeft: 4 }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Can&apos;t find exactly what you are looking for? Our team can create customized solutions tailored to your
            specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium">
              Request Custom Solution
              <ArrowForwardIcon style={{ marginLeft: 8 }} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full bg-transparent font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}