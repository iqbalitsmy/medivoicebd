'use client';

import { faBars, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SearchToggle from './SearchToggle';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const AllCategories = ({ categories }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleClickOutside = (event) => {
        if (!event.target.closest(".menu-open")) {
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

    if (!categories) {
        return (
            <div className="text-white pt-6 text-center">
                <p>Loading categories...</p>
            </div>
        );
    }

    return (
        <>
            {/* Menu Button */}
            <button onClick={toggleMenu} className="text-base md:text-lg  lg:text-xl flex flex-wrap items-center gap-2 md:gap-[1px] lg:gap-1 menu-open">
                <FontAwesomeIcon icon={faBars} className='' />
                <span>সব</span>
            </button>

            {/* for shadow */}
            <div className={`fixed bg-black mx-auto transition-all ${isMenuOpen ? "opacity-20 z-20 inset-0 w-full min-h-full" : "opacity-0 -z-50"}`}
            >
            </div>
            {/* Dropdown Menu */}
            <nav
                className={`menu-open py-2 absolute top-0 left-0 right-0 w-full bg-white mx-auto transition-all duration-300 z-30 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className=''>
                    <div className="container max-w-[1170px] mx-auto flex flex-wrap items-center justify-between py-2">
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
                    <div className="m-4 container max-w-[1170px] mx-auto">
                        <ul className='grid justify-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center text-lg gap-2 lg:gap-4'>
                            {
                                categories.map((category, i) => (
                                    <li key={i}>
                                        <Link href={`/category/${category.category_url}`} className="hover:text-red-600">{category.category}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AllCategories;
