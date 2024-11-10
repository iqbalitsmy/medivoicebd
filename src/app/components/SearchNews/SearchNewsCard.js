import convertToBanglaDigitDate from '@/app/utils/convertToBanglaDigitDate';
import React from 'react';

const SearchNewsCard = ({ title, date, link, description, id }) => {
    return (
        <div className="border shadow-sm transition-shadow p-4">
            <h2 className="text-2xl font-semibold mb-2 hover:text-red-500">
                <a href={`/article/${id}/${link}`}>
                    {title}
                </a>
            </h2>
            <a href={`/article/${id}/${link}`} className='text-[0.70rem] text-[#2196f3] font-serif'>https://medivoicebd.com/search/article/${id}</a>

            <p className="mt-2 line-clamp-3 text-lg"><span className='text-gray-500'>{convertToBanglaDigitDate(date)}</span> - {description}</p>
        </div>
    );
};

export default SearchNewsCard;