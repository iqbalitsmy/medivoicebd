'use client';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const SearchToggle = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isInputFocus, setIsInputFocus] = useState(false);

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const toggleIsInputFocus = () => setIsInputFocus(true);

    // handle input focus click outside
    const handleFocusClickOutside =
        (event) => {
            if (!event.target.closest(".input-search")) {
                setIsInputFocus(false);
            } else if (event.target.closest(".input-search")) {
                setIsInputFocus(true);
            }
            return;
        };

    // handle drawer click outside
    const handleTopInputClickOutside =
        (event) => {
            if (!event.target.closest(".top-search-input")) {
                console.log("top-search-input 2")
                setIsSearchOpen(false);
            }
            return;
        };

    // Add event listener for clicks outside
    useEffect(() => {
        window.addEventListener("click", handleFocusClickOutside);
        window.addEventListener("click", handleTopInputClickOutside);
        return () => {
            window.removeEventListener("click", handleFocusClickOutside);
            window.removeEventListener("click", handleTopInputClickOutside);
        };
    }, []);

    return (
        <div className=''>
            {/* Search Button */}
            <button onClick={toggleSearch} className="pr-2 text-base md:text-lg lg:text-xl top-search-input">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {/* for shadow */}
            <div className={`fixed inset-0 bg-black w-full min-h-full mx-auto transition-all duration-200 ${isSearchOpen ? "opacity-20 z-10" : "opacity-0 -z-50"}`}
            >
            </div>

            {/* Search Input */}
            <div className={`absolute top-0 left-0 right-0 px-4 transition-all duration-300 ${isSearchOpen ? "translate-y-0 z-20" : "-translate-y-full"} top-search-input`}>
                <div className='px-4 w-full bg-white p-4 shadow-md flex items-center justify-center'>
                    <input
                        type="text"
                        placeholder="Search..."
                        onFocus={toggleIsInputFocus}
                        className="w-full p-2 pl-6 border-solid border-[1px] focus:border-green-600 focus:outline-none input-search"
                    />
                    <button className={`text-xl px-5 py-2 border-solid border-gray-400 border-[1px] hover:bg-slate-300 ${isInputFocus ? "bg-green-200" : ""}`}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button onClick={toggleSearch} className={`text-xl px-6 py-2 border-solid border-gray-400 border-[1px] hover:bg-slate-300 ${isInputFocus ? "bg-green-200" : ""}`}>
                        x
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchToggle;
