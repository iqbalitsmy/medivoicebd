"use client"

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchValue.trim()) {
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (searchValue.trim()) {
            router.push(`/search?keyword=${encodeURIComponent(searchValue.trim())}`);
        }
    };

    return (
        <div className='relative w-full flex items-center justify-center'>
            <input
                type="text"
                placeholder="কী খুঁজতে চান?"
                value={searchValue}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                className="flex-grow p-2 pl-6 border-solid border-[1px] focus:border-green-600 focus:outline-none input-search"
            />
            {/* search button */}
            <button
                onClick={handleSearch}
                className={`text-xl px-5 py-[6px] border-solid border-gray-400 bg-[#81b56a] border-[1px] hover:bg-slate-300`}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
};

export default SearchInput;