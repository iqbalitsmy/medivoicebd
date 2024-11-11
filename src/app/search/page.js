import React from 'react';
import LoadSearchNews from '../components/SearchNews/LoadSearchNews';
import SearchInput from '../components/SearchNews/SearchInput';
import { getData } from '../utils/getData';

const SearchPage = async ({searchParams}) => {
    const keyword = searchParams.keyword;
    const data = await getData(`https://api.medivoicebd.com/search-news?keyword=${encodeURIComponent(keyword)}&page=1`);

    const { totalNews } = data;

    return (
        <div>
            <div className='mb-4'>
                <h1 className='text-2xl'>{totalNews} Results for: &quot;{keyword}&quot;</h1>
            </div>
            <div className='mb-6 w-full bg-white shadow-md flex items-center justify-center'>
                <SearchInput />
            </div>
            <LoadSearchNews keyword={keyword} />
        </div>
    );
};

export default SearchPage;