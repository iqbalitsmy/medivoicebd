'use client';

import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import MenuToggle from './MenuToggle';
import SearchToggle from './SearchToggle';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

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
                className={`py-2 absolute bottom-0 left-0 right-0 bg-white mx-auto transition-all duration-300 overflow-hidden -z-10 ${isMenuDrawerOpen ? "h-full z-20" : "h-0"}`}
            >
                <div className='block flex-col md:hidden items-center justify-start pl-4'>
                    {/* Links */}
                    <div>
                        <ul className="grid items-center lg:text-lg md:text-base gap-4">
                            <li>
                                <Link href="/categories/জাতীয়" className="hover:text-red-600">জাতীয়</Link>
                            </li>
                            <li>
                                <Link href="/categories/আন্তর্জাতিক" className="hover:text-red-600">আন্তর্জাতিক</Link>
                            </li>
                            <li>
                                <Link href="/categories/সাক্ষাৎকার" className="hover:text-red-600">সাক্ষাৎকার</Link>
                            </li>
                            <li>
                                <Link href="/categories/ক্যাম্পাস" className="hover:text-red-600">ক্যাম্পাস</Link>
                            </li>
                            <li>
                                <Link href="/categories/এডুকর্ণার" className="hover:text-red-600">এডুকর্ণার</Link>
                            </li>
                            <li>
                                <Link href="/categories/স্বাস্থ্য" className="hover:text-red-600">স্বাস্থ্য</Link>
                            </li>
                            <li>
                                <Link href="/categories/সম্পাদকীয়" className="hover:text-red-600">সম্পাদকীয়</Link>
                            </li>
                            <li>
                                <Link href="/categories/চাকরি" className="hover:text-red-600">চাকরি</Link>
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