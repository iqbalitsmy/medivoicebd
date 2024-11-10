import React from 'react';
import LoadSearchNews from '../components/SearchNews/LoadSearchNews';
import SearchInput from '../components/SearchNews/SearchInput';

const SearchPage = ({searchParams}) => {
    const keyword = searchParams.keyword;
    return (
        <div>
            <div className='mb-4'>
                <h1 className='text-2xl'>Search Results for: &quot;{keyword}&quot;</h1>
            </div>
            <div className='mb-6 w-full bg-white shadow-md flex items-center justify-center'>
                <SearchInput />
            </div>
            <LoadSearchNews keyword={keyword} />
        </div>
    );
};

export default SearchPage;