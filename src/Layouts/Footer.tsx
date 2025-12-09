import Image from 'next/image';
import { logo1 } from '@/assests/Home';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
        {/* Logo & Social Media */}
        <div className="space-y-4">
          <div className="w-32 sm:w-36">
            <Image src={logo1.src} alt="Utkal Logo" width={144} height={72} />
          </div>
          <p className="text-sm sm:text-base">
            To set up a benchmark with {`it’s`} efforts for the Utkal Group in the art of the state of Odisha as well as nationally.
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            <Link href="https://www.linkedin.com/company/89945747/admin/dashboard/">
              <div className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center">
                <LinkedInIcon className="text-white text-sm sm:text-base" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/utkalgroupltd/">
              <div className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center">
                <InstagramIcon className="text-white text-sm sm:text-base" />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center">
                <FacebookIcon className="text-white text-sm sm:text-base" />
              </div>
            </Link>
          </div>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Address</h2>
          <p className="text-sm sm:text-base">
            Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur,
            Kalinga Vihar, Patrapada, Bhuabneswar, Dist- Khurda, Odisha, India-751019.
          </p>
          <p className="text-sm sm:text-base mt-3">
            📞 <span className="font-semibold">+91 9853034446</span>
          </p>
        </div>

        {/* Services List */}
        <div className="sm:col-span-2 lg:col-span-1 lg:w-[600px]">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Our Services</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-sm sm:text-base">
            {[
              { name: 'Utkal Facility', link: 'https://utkalfacility.com' },
              { name: 'Utkal Smart', link: 'https://utkalsmart.net' },
              { name: 'Indoplus', link: 'https://indoplus.net ' },
              { name: 'Utkal Global', link: 'https://utkalglobal.in' },
              { name: 'MR Corporate', link: 'https://mrcorporate.in' },
              { name: 'Maxim', link: 'https://maximplus.in' },
              { name: 'Odo Management', link: 'https://odo.ind.in' },
              { name: 'Homedeal', link: 'https://homedeal.co.in' },
              { name: 'Topfront', link: 'https://topfront.in' },
              { name: 'Utkal Foundation', link: 'https://utkalfoundation.com' },
              { name: 'Utkal Homes', link: 'https://utkalhomes.in' },
              { name: 'Utkal Corporation', link: 'https://utkalcorporation.com' },
              { name: 'Utkal Bottling', link: 'https://utkalbottling.in' },
              { name: 'Utkal Education', link: 'https://utkaleducation.in' },
              { name: 'Utkal International', link: 'https://utkalinternational.com' },
              { name: 'Utkal Power', link: 'https://utkalpower.in' },
              { name: 'My Job', link: 'https://myjob.ind.in' },
              { name: 'Ayushman Foundation', link: 'https://ayushmanfoundation.in/' },
            ].map((service, index) => (
              <li key={index}>
                <Link
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  ➤ {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base text-gray-500 mt-10 max-w-7xl mx-auto border-t border-gray-700 pt-4 gap-3 sm:gap-0">
        <p className="font-bold text-center sm:text-left">
          © 2025 Utkal Group Companies. All Rights Reserved.
        </p>
        <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-4 gap-2 sm:gap-0 mt-2 sm:mt-0 justify-center sm:justify-start">
          <Link href="#" className="hover:text-white font-bold">Privacy Policy</Link>
          <Link href="#" className="hover:text-white font-bold">Terms Of Condition</Link>
        </div>
      </div>
    </footer>
  );
}
