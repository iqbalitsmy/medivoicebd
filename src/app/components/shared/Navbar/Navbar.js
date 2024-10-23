import Image from 'next/image';
import AllCategories from './AllCategories'; // Client component for the menu toggle
import SearchToggle from './SearchToggle'; // Client component for the search toggle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MenuDrawer from './MenuDrawer';
import Link from 'next/link';
import { getData } from '@/app/utils/getData';
import NavLink from '../NavLink/NavLink';

const Navbar = async ({ defaultConfig }) => {
  const categories = await getData("https://api.medivoicebd.com/categories");

  if (!categories) {
    return (
      <div className="text-white pt-6 text-center">
        <p>Loading categories...</p>
      </div>
    );
  }

  return (
    <nav
      className={`shadow-md py-2 fixed top-0 left-0 bg-white w-full z-50 transition-all duration-300 ease-in-out`}
    >
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
        <div className='hidden md:flex items-center justify-between text-lg'>
          {/* Links */}
          <div className="flex items-center lg:text-lg md:text-base gap-2 lg:gap-4">
            {
              categories.slice(0, 7).map((category, i) => (
                <NavLink
                  key={i}
                  path={`/category/${category.category_url}`} className="hover:text-red-600"
                  title={category.category}
                />
              ))
            }
            {/* Menu & Search Toggle (Client Components) */}
            <AllCategories categories={categories} />
            <SearchToggle /> {/* Search Toggle Client Component */}
          </div>

          {/* Social Icons (shown on desktop) */}
          <div className="hidden md:flex flex-col lg:flex-row gap-[2px] lg:gap-2 justify-center items-center">
            <a target='_blank' href={defaultConfig.facebook_link}>
              <FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:text-blue-600 cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
            </a>
            <a target='_blank' href={defaultConfig.twitter_link}>
              <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 hover:text-black cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
            </a>
            <a target='_blank' href={defaultConfig.youtube_link}>
              <FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-red-600 cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
            </a>
            <a href={`mailto:${defaultConfig.company_email}`}>
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 hover:text-black cursor-pointer h-4 md:h-5 lg:h-6 w-4 lg:w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
