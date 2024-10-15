// src/app/components/shared/Navbar.js (Server Component)
import Image from 'next/image';
import MenuToggle from './MenuToggle'; // Client component for the menu toggle
import SearchToggle from './SearchToggle'; // Client component for the search toggle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MenuDrawer from './MenuDrawer';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="shadow-md py-2 relative bg-white">
      <div className="container mx-auto max-w-[1170px] flex items-center justify-between py-2 px-4">
        <div className='pl-4 block md:hidden'>
          <SearchToggle /> {/* Search Toggle Client Component */}
        </div>
        {/* Logo */}
        <div className="grid place-content-center">
          <Link href={"/"}>
            <Image src="/images/logo/logo.png" alt="Logo" width={150} height={300} />
          </Link>
        </div>
        <div className='mr-4 block md:hidden p-2 border-solid border-gray-200 border-[1px]'>
          <MenuDrawer />
        </div>
        <div className='hidden md:flex items-center justify-between'>
          {/* Links */}
          <div className="flex items-center lg:text-lg md:text-base gap-2 lg:gap-4">
            <Link href="/categories/জাতীয়" className="hover:text-red-600">জাতীয়</Link>
            <Link href="/categories/আন্তর্জাতিক" className="hover:text-red-600">আন্তর্জাতিক</Link>
            <Link href="/categories/সাক্ষাৎকার" className="hover:text-red-600">সাক্ষাৎকার</Link>
            <Link href="/categories/ক্যাম্পাস" className="hover:text-red-600">ক্যাম্পাস</Link>
            <Link href="/categories/এডুকর্ণার" className="hover:text-red-600">এডুকর্ণার</Link>
            <Link href="/categories/স্বাস্থ্য" className="hover:text-red-600">স্বাস্থ্য</Link>
            <Link href="/categories/সম্পাদকীয়" className="hover:text-red-600">সম্পাদকীয়</Link>
            <Link href="/categories/চাকরি" className="hover:text-red-600">চাকরি</Link>
            {/* Menu & Search Toggle (Client Components) */}
            <MenuToggle />
            <SearchToggle /> {/* Search Toggle Client Component */}
          </div>

          {/* Social Icons (shown on desktop) */}
          <div className="hidden md:flex flex-col lg:flex-row gap-[2px] lg:gap-2 justify-center items-center">
            <FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:text-blue-600 cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
            <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 hover:text-black cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
            <FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-red-600 cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 hover:text-black cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
