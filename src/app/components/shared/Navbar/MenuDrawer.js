'use client';

import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import MenuToggle from './MenuToggle';
import SearchToggle from './SearchToggle';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MenuDrawer = () => {
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
    const toggleMenu = () => setIsMenuDrawerOpen(!isMenuDrawerOpen);

    return (
        <div>
            {/* Menu Button */}
            <button onClick={toggleMenu} className="text-lg lg:text-xl flex flex-wrap items-center gap-[1px] lg:gap-1">
                <FontAwesomeIcon icon={faBars} className='' />
            </button>
            <nav
                className={`py-2 absolute left-0 right-0 bg-white mx-auto transition-all duration-300 -z-10 ${isMenuDrawerOpen ? "translate-y-6 z-20" : "-translate-y-full"}`}
            >
                <div className='block flex-col md:hidden items-center justify-start pl-4'>
                    {/* Links */}
                    <div>
                        <ul className="grid items-center lg:text-lg md:text-base gap-4">
                            <li>
                                <a href="/lf" className="hover:text-red-600">জাতীয়</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600">আন্তর্জাতিক</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600">সাক্ষাৎকার</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600">ক্যাম্পাস</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600">এডুকর্ণার</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600">স্বাস্থ্য</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600">সম্পাদকীয়</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600">চাকরি</a>
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