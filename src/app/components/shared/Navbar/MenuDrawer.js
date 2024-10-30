'use client';

import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AllCategories from './AllCategories';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MenuDrawer = ({ categories }) => {
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
    const toggleMenu = () => setIsMenuDrawerOpen(!isMenuDrawerOpen);

    return (
        <div>
            {/* Menu Button */}
            <button onClick={toggleMenu} className="text-lg lg:text-xl flex flex-wrap items-center gap-[1px] lg:gap-1">
                <FontAwesomeIcon icon={faBars} className='' />
            </button>
            <nav
                className={`py-2 pb-10 absolute bottom-0 left-0 right-0 bg-white mx-auto transition-all duration-300 overflow-hidden -z-10 ${isMenuDrawerOpen ? "translate-y-full z-10" : "-translate-y-full"}`}
            >
                <div className='block flex-col md:hidden items-center justify-start pl-4'>
                    {/* as */}
                    <div>
                        <ul className="grid items-center lg:text-lg md:text-base gap-4">
                            {
                                categories.slice(0, 7).map((category, i) => (
                                    <li key={i}>
                                        <a
                                            href={`/category/${category.category_url}`}
                                            className="hover:text-red-600"
                                        >
                                            {category.category}
                                        </a>
                                    </li>
                                ))
                            }
                            <li>
                                <AllCategories />
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons (shown on desktop) */}
                    <div className="flex flex-row gap-2 justify-start items-center mt-4">
                        <FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:text-blue-600 cursor-pointer h-6 w-6" />
                        <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 hover:text-black cursor-pointer h-6 w-6" />
                        <FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-red-600 cursor-pointer h-6 w-6" />
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 hover:text-black cursor-pointer h-6 w-6" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MenuDrawer;