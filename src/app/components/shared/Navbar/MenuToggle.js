// src/app/components/shared/MenuToggle.js (Client Component)
'use client';

import { faBars, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SearchToggle from './SearchToggle';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const MenuToggle = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleClickOutside =
        (event) => {
            if (!event.target.closest(".menu-open") && !event.target.closest(".input-search")) {
                setIsMenuOpen(false);
            }
            return;
        };

    // Add event listener for clicks outside
    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* Menu Button */}
            <button onClick={toggleMenu} className="text-base md:text-lg  lg:text-xl flex flex-wrap items-center gap-[1px] lg:gap-1 menu-open">
                <FontAwesomeIcon icon={faBars} className='' />
                <span>সব</span>
            </button>

            {/* for shadow */}
            <div className={`fixed inset-0 bg-black w-full min-h-full mx-auto transition-all ${isMenuOpen ? "opacity-20 z-10" : "opacity-0 -z-50"}`}
            >
            </div>
            {/* Dropdown Menu */}
            <nav
                className={`py-2 absolute top-0 left-0 right-0 w-full bg-white mx-auto transition-all duration-300 z-20 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className=''>
                    <div className="container mx-auto flex flex-wrap items-center justify-between py-2">
                        {/* Logo */}
                        <div className="grid place-content-center">
                            <Image src="/images/logo/logo.png" alt="Logo" width={150} height={300} />
                        </div>
                        <div className='flex justify-between gap-16'>
                            {/* Links */}
                            <div className="md:flex items-center text-lg gap-2 lg:gap-4">
                                <button onClick={toggleMenu} className="text-xl flex flex-wrap items-center gap-1">
                                    <FontAwesomeIcon icon={faXmark} />
                                    <span>সব</span>
                                </button>
                                <SearchToggle /> {/* Search Toggle Client Component */}
                            </div>

                            {/* Social Icons (shown on desktop) */}
                            <div className="flex flex-row gap-3 justify-center items-center">
                                <FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:text-blue-600 cursor-pointer h-4 md:h-6 w-4 md:w-6" />
                                <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 hover:text-black cursor-pointer h-4 md:h-6 w-4 md:w-6" />
                                <FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-red-600 cursor-pointer h-4 md:h-6 w-4 md:w-6" />
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 hover:text-black cursor-pointer h-4 md:h-6 w-4 md:w-6" />
                            </div>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="m-4 container mx-auto">
                        <ul className='grid justify-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center text-lg gap-2 lg:gap-4'>
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
                </div>
            </nav>
        </>
    );
};

export default MenuToggle;
