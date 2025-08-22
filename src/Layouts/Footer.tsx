import Image from 'next/image';
import { home26, logo1 } from '@/assests/Home';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
        {/* Logo & Social Media */}
        <div className="space-y-4">
          <Image src={logo1.src} alt="Utkal Logo" width={120} height={60} />
          <p className="text-sm">
            To set up a benchmark with {`it’s`} efforts for the Utkal Group in the art of the state of Odisha as well as in National wise.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/company/89945747/admin/dashboard/">
              <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <LinkedInIcon />
              </div>
            </Link>
            <Link href="https://www.instagram.com/utkalgroupltd/">
              <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <InstagramIcon />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <FacebookIcon />
              </div>
            </Link>
          </div>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <p className="text-sm w-64">
          Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhuabneswar, Dist- Khurda, Odisha, India-751019.
          </p>
        </div>

        {/* Services List */}
        <div className="lg:w-[600px]">
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              'Utkal facility', 'Utkal smart', 'Indoplus', 'Utkal global', 'MR corporate', 'Maxim', 
              'Odo management', 'Homedeal', 'Topfront', 'Utkal foundation', 'Utkal homes', 
              'Utkal corporation', 'Utkal bottling', 'Utkal education', 'Zplus security', 
              'Utkal international', 'Utkal power', 'My job'
            ].map((service, index) => (
              <li key={index}>
                <Link href="/service" className="text-white hover:underline">
                  ➤ {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 mt-10 max-w-7xl mx-auto border-t border-gray-700 pt-4">
        <p className="font-bold text-center">
          © 2010 Utkal Group Companies. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="#" className="hover:text-white font-bold">Privacy Policy</Link>
          <Link href="#" className="hover:text-white font-bold">Terms Of Condition</Link>
        </div>
      </div>
    </footer>
  );
}
