import { about5 } from '@/assests/About';
import { team1, team2, team3, team4 } from '@/assests/Team';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUtkal = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-[#e6ecff] to-[#000080] text-gray-900 py-28 px-6 overflow-hidden">

        {/* Soft Decorative Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#000080]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f47920]/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#000080]">
              About{" "}
              <span className="text-[#f47920] drop-shadow-sm">
                Utkal Group
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-gray-700">
              Pioneering India&apos;s Business Excellence
            </p>

            <p className="text-lg max-w-3xl mx-auto text-gray-600">
             Delivering transformative, end-to-end solutions through specialized companies, redefining excellence with innovation, precision, and unwavering commitment.  
            {/* Powering progress through expert-driven companies, united by a vision of innovation, superior quality, and meaningful impact across industries. */}
         </p>
          </motion.div>
        </div>
      </section>

  {/* Success Stories Section */}
  <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[#f9fbff] to-[#eef3ff]">

    {/* Floating gradient blobs */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-[#000080]/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f47920]/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Building Tomorrow&apos;s{" "}
          <span className="text-[#f47920]">Success Stories</span>
        </h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Since 2003, Utkal Group has grown from a single facility management company 
          into one of India&apos;s most trusted business conglomerates — powered by 
          20+ specialized companies committed to excellence, innovation, and sustainable impact.
        </p>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          With headquarters in Delhi and regional offices across India, we proudly 
          serve over <strong className="text-[#000080]">5000+ clients</strong>, enabling their success through 
          comprehensive business solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Comprehensive solutions across industries",
            "24/7 PAN India support infrastructure",
            "Commitment to sustainability & responsibility",
            "Long-term trusted partnerships",
            "Innovation-driven approach",
            "Certified quality management systems"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex items-start"
            >
              <svg className="w-6 h-6 text-[#4fa941] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group"
      >
        <Image 
          src={about5.src}
          alt="Utkal Group Headquarters"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute top-6 right-6 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center space-x-3"
        >
          <span className="w-4 h-4 bg-[#4fa941] rounded-full"></span>
          <p className="text-sm font-semibold text-gray-700">Growing Since 2003</p>
        </motion.div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Utkal Group Headquarters</h3>
          <div className="flex space-x-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl font-bold">23+</p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm opacity-80">Cities Served</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

    </div>
  </section>

      {/* Evolution Section */}
  <section className="py-18 px-6 relative bg-gradient-to-b from-[#f3f7ff] to-white overflow-hidden">

  {/* Soft floating blobs */}
  <div className="absolute top-10 left-0 w-60 h-60 bg-[#000080]/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#4fa941]/10 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Our <span className="text-[#f47920]">Evolution</span>
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        Key milestones that shaped our transformation
      </p>
    </motion.div>

{/* Foundation Day Highlight */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
  className="relative mt-10 max-w-6xl mx-auto p-[2px] rounded-2xl 
  bg-gradient-to-r from-blue-800 via-white/40 to-blue-600 mb-20 flex justify-between"
>
  {/* Inner box with blur & light background */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/30 w-full">
    
    {/* Ribbon Badge */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
      <div className="bg-blue-800 text-white text-sm px-4 py-1 rounded-full shadow-md 
      font-semibold tracking-wide">
        Foundation Day
      </div>
    </div>

    {/* Title */}
    <h3 className="text-2xl font-bold text-center text-blue-800">
      Our Foundation Day – April 1 (Utkal Divas)
    </h3>

    {/* Description */}
    <p className="text-gray-700 text-center mt-5 leading-relaxed">
      Utkal Group was founded on <span className="font-semibold text-blue-600">
        April 1, the historic Utkal Divas
      </span>, a day that celebrates the formation of the state of Odisha.
      This day symbolizes resilience, progress, and unity — values that have 
      guided our organisation since inception.  
      <br /><br />
      Our journey began with the vision to build a multi-sector enterprise rooted 
      in integrity and service excellence. Over the years, this foundation has 
      shaped our culture, strengthened our mission, and reinforced our commitment 
      to empowering communities and driving national growth.
    </p>
  </div>
</motion.div>


    {/* Horizontal Timeline */}
    <div className="relative overflow-x-auto pb-10">

      {/* Year Row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-between min-w-[900px] mb-10 relative"
      >
        {/* Gradient Line */}
        <div className="absolute top-1/2 left-0 w-full h-[4px] 
          bg-gradient-to-r from-[#000080] via-[#4fa941] to-[#f47920] 
          rounded-full -z-10 shadow-md"></div>

        {["2003","2009","2014","2018","2020","2024"].map((year, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-32"
          >
            <div className="bg-white border border-[#dce3ff] shadow-sm 
              px-5 py-2 rounded-full text-[#000080] font-semibold
              hover:bg-[#000080] hover:text-white transition-all duration-300 cursor-default">
              {year}
            </div>

            {/* Dot */}
            <motion.div
              whileHover={{ scale: 1.25 }}
              className="w-4 h-4 bg-[#000080] rounded-full shadow mt-3 
              ring-4 ring-[#000080]/20 transition-all"
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Cards Row */}
      <div className="flex justify-between min-w-[900px]">

        {[
          {
            title: "Foundation of Utkal Group",
            desc: "Started with facility management services in Delhi."
          },
          {
            title: "Security Division Launch",
            desc: "Introduced Z Plus Security for VIP and corporate protection."
          },
          {
            title: "Green Energy Initiative",
            desc: "Launched Utkal Power focusing on renewable energy."
          },
          {
            title: "Real Estate Expansion",
            desc: "Established Utkal Homes for premium real estate."
          },
          {
            title: "Digital Transformation",
            desc: "Launched IndoPlus to power digital innovation."
          },
          {
            title: "20+ Group Companies",
            desc: "Expanded into a multi-industry business conglomerate."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.07, 
              y: -5, 
              boxShadow: "0px 12px 35px rgba(0,0,0,0.15)" 
            }}
            className="bg-white w-40 p-5 rounded-xl shadow-md 
              border border-[#d6ddff] hover:border-[#000080]/40 
              transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-semibold text-[#000080] text-sm mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              {item.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-3 h-1 w-full bg-gradient-to-r 
              from-[#000080] via-[#4fa941] to-[#f47920] rounded-full opacity-60"></div>
          </motion.div>
        ))}

      </div>
    </div>
  </div>
  </section>

     {/* Foundation Section */}
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[#f7f9ff] to-white">

      {/* Floating subtle ambient glows */}
      <div className="absolute top-16 left-0 w-72 h-72 rounded-full bg-[#f47920]/10 blur-3xl"></div>
      <div className="absolute bottom-16 right-10 w-96 h-96 rounded-full bg-[#1a1c2b]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c2b]">
            Our <span className="text-[#f47920]">Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 mt-3">
            The principles that power our growth and define our culture
          </p>
        </motion.div>

        {/* Creative Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              title: "Excellence",
              desc: "We pursue mastery with precision, consistency, and an obsession for quality.",
              icon: "🏆"
            },
            {
              title: "Integrity",
              desc: "Transparency and ethics drive every decision, big or small.",
              icon: "🛡️"
            },
            {
              title: "Innovation",
              desc: "We challenge norms, embrace new ideas, and pioneer forward-thinking solutions.",
              icon: "💡"
            },
            {
              title: "Sustainability",
              desc: "From impact to footprint, we prioritize long-term responsibility.",
              icon: "🌱"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/70 backdrop-blur-xl border border-[#e4e7f5]
                p-8 rounded-2xl shadow-lg transition-all duration-500 cursor-pointer 
                hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Soft orange glow on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br 
                from-[#f47920] via-[#ffd8b2] to-white opacity-0 
                blur-xl group-hover:opacity-30 transition-all duration-700"></div>

              {/* Icon */}
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center 
                rounded-full bg-gradient-to-br from-[#f47920]/15 to-[#1a1c2b]/10 
                text-4xl group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <h3 className="relative text-xl font-bold text-[#1a1c2b] mb-3">
                {item.title}
              </h3>

              <p className="relative text-gray-700 leading-relaxed">
                {item.desc}
              </p>

              {/* Orange underline appear on hover */}
              <div className="absolute bottom-4 left-8 h-[3px] w-0 
                bg-gradient-to-r from-[#f47920] to-[#1a1c2b] rounded-full 
                group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>

        {/* Mission & Vision Section */}
<section className="py-14 px-6 bg-gradient-to-br from-[#f6f8ff] to-[#eef2ff] relative overflow-hidden"> 
  {/* REDUCED py-20 → py-14 */}

  {/* Parallax Blobs */}
  <div className="absolute top-[-50px] left-[20px] w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-[-80px] right-[0px] w-96 h-96 bg-[#f47920]/10 rounded-full blur-3xl animate-pulse"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-14" 
      // REDUCED mb-20 → mb-14
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#000080] mb-4">
        Our <span className="text-[#f47920]">Purpose</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Mission & Vision that shape our strategy and define our future leadership
      </p>
    </motion.div>

    {/* 2-Column Grid */}
    <div className="grid md:grid-cols-2 gap-10"> 
      {/* REDUCED gap-12 → gap-10 */}

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 bg-white/60 backdrop-blur-xl border border-[#000080]/20 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" 
        // REDUCED p-10 → p-8
      >
        <div className="flex items-center mb-5"> 
          {/* REDUCED mb-6 → mb-5 */}
          <div className="p-4 bg-[#000080]/10 rounded-full mr-4">
            <svg className="w-10 h-10 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {/* REDUCED mb-8 → mb-6 */}
          To deliver exceptional value through innovative and sustainable solutions, empowering individuals and organizations to grow with excellence.
        </p>

        <div className="space-y-3 border-l-4 border-[#000080]/30 pl-6">
          {/* REDUCED space-y-4 → space-y-3 */}

          {[
            "Customer-first operational excellence",
            "Sustainable and responsible approaches",
            "Continuous innovation & improvement",
            "Value creation for all stakeholders"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start"
            >
              <svg className="w-6 h-6 text-[#4fa941] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="p-8 bg-white/60 backdrop-blur-xl border border-[#f47920]/20 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" 
        // REDUCED p-10 → p-8
      >
        <div className="flex items-center mb-5">
          {/* REDUCED mb-6 → mb-5 */}
          <div className="p-4 bg-[#f47920]/10 rounded-full mr-4">
            <svg className="w-10 h-10 text-[#f47920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {/* REDUCED mb-8 → mb-6 */}
          To emerge as India's most trusted and globally respected conglomerate, known for innovation, leadership, and sustainable growth.
        </p>

        <div className="space-y-3 border-l-4 border-[#f47920]/30 pl-6">
          {/* REDUCED space-y-4 → space-y-3 */}

          {[
            "Leadership across diverse sectors",
            "Global reputation for innovation",
            "Driving sustainability across industries",
            "Becoming the preferred global partner"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start"
            >
              <svg className="w-6 h-6 text-[#f47920] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>


    {/* Closing Message */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
  className="mt-20 mb-20 text-center max-w-3xl mx-auto" 
  // UPDATED: Added mb-24 to create space before footer
>
  <p className="text-4xl md:text-3xl font-serif text-[#000080] leading-relaxed px-4">
    <span className="relative">
      “Together, we build a future where integrity, innovation, 
      and excellence define every step we take.”
      <span className="absolute left-2 right-4 -bottom-4 h-[3px] bg-[#f47920]/60 rounded-full animate-pulse"></span>
    </span>
  </p>
    </motion.div>

    </div>
  );
};

export default AboutUtkal;