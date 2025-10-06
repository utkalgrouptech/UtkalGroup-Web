import { team1, team2, team3, team4, team5, team6, team7, team8, team9 } from '@/assests/Team';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Suresh Mishra',
      role: 'CMD',
      image: team1,
      linkedIn: '#',
      icon: <CorporateFareIcon className="text-amber-600" />,
      bio: 'Suresh Mishra is the visionary leader and CMD of our organization.',
      departments: ['Corporate Strategy', 'Executive Leadership', 'Growth Visionary']
    },
    {
      name: 'Swayanshree Mishra',
      role: 'Director',
      image: team2,
      linkedIn: '#',
      icon: <BusinessIcon className="text-amber-600" />,
      bio: 'Swayanshree Mishra brings expertise and dedication as Director.',
      departments: ['Business Development', 'Operations']
    },
    // {
    //   name: 'LTP Narayan',
    //   role: 'Director',
    //   image: team3,
    //   linkedIn: '#',
    //   icon: <BusinessIcon className="text-amber-600" />,
    //   bio: 'LTP Narayan is a driving force in our leadership team.',
    //   departments: ['Finance', 'Strategy']
    // },
    {
      name: 'Niranjan Mishra',
      role: 'Director',
      image: team4,
      linkedIn: '#',
      icon: <BusinessIcon className="text-amber-600" />,
      bio: 'Niranjan Mishra leads with experience and insight.',
      departments: ['Operations', 'Compliance']
    },
    {
      name: 'Priyabrata Mishra',
      role: 'Branch Head',
      image: team6,
      linkedIn: '#',
      icon: <EngineeringIcon className="text-amber-600" />,
      bio: 'Priyabrata Mishra drives enterprise initiatives.',
      departments: ['Enterprise Solutions', 'Engineering']
    },
    // {
    //   name: 'B N Mohapatra',
    //   role: 'Enterprise Director',
    //   image: team7,
    //   linkedIn: '#',
    //   icon: <EngineeringIcon className="text-amber-600" />,
    //   bio: 'B N Mohapatra is a key leader in enterprise direction.',
    //   departments: ['Enterprise Solutions', 'Project Management']
    // },
    // {
    //   name: 'Malaya Kumar Rath',
    //   role: 'CTO',
    //   image: team9,
    //   linkedIn: '#',
    //   icon: <EngineeringIcon className="text-amber-600" />,
    //   bio: 'Malaya Kumar Rath leads technology as CTO.',
    //   departments: ['Technology', 'Innovation']
    // },
  ];

  return (
<section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-20">
      <span className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full mb-4">
        OUR LEADERSHIP
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Executive Team</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Visionary leaders driving innovation and excellence across our organization
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-8 rounded-full"></div>
    </div>

    {/* Leadership Spotlight */}
    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-24 group">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 h-96 lg:h-auto relative overflow-hidden">
          <Image
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        <div className="lg:col-span-7 p-10 lg:p-14 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-800 bg-amber-200 rounded-full mb-3">
                CHAIRMAN & MANAGING DIRECTOR
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-amber-500">{teamMembers[0].icon}</span>
                {teamMembers[0].name}
              </h3>
              <p className="text-lg text-gray-500 mt-2">{teamMembers[0].role}</p>
            </div>
            <a 
              href={teamMembers[0].linkedIn} 
              className="text-gray-300 hover:text-amber-600 transition-colors p-2 hover:bg-amber-50 rounded-full"
              aria-label={`Connect with ${teamMembers[0].name} on LinkedIn`}
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With over 25 years of industry experience, {teamMembers[0].name.split(' ')[0]} provides strategic vision and 
            leadership that has guided our company&apos;s exponential growth and innovation across global markets.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium">
              <CorporateFareIcon className="mr-2" fontSize="small" />
              Corporate Strategy
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <GroupsIcon className="mr-2" fontSize="small" />
              Executive Leadership
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
              <TrendingUpIcon className="mr-2" fontSize="small" />
              Growth Visionary
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Team Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {teamMembers.slice(1).map((member, index) => (
        <div 
          key={index}
          className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {/* Image with overlay */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-amber-300 font-medium">{member.role}</p>
            </div>
            <a 
              href={member.linkedIn}
              className="absolute top-6 right-6 bg-white/90 text-gray-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-amber-500 hover:text-white"
              aria-label={`Connect with ${member.name} on LinkedIn`}
            >
              <LinkedInIcon fontSize="medium" />
            </a>
          </div>
          
          {/* Content */}
          <div className="bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-amber-500">{member.icon}</span>
              <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
            </div>
            <p className="text-gray-600 mb-5">{member.bio || `${member.name.split(' ')[0]} brings ${Math.floor(Math.random() * 15) + 10} years of experience to their role as ${member.role}.`}</p>
            <div className="flex flex-wrap gap-2">
              {member.departments?.map((dept, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  {dept}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Gallery Section */}
    {/* <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership in Action</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div 
            key={item}
            className="relative group rounded-xl overflow-hidden aspect-square"
            data-aos="zoom-in"
            data-aos-delay={item * 50}
          >
            <Image
              src={`/team-gallery-${item}.jpg`}
              alt={`Team activity ${item}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div> */}

    {/* CTA */}
    <div className="text-center">
      <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        Explore Our Full Leadership Team
        <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
    </div>
  </div>
</section>
  );
};

export default TeamSection;