import React from 'react';
import AsideCategoriesTabs from '../components/HomePage/AsideCategoriesTabs';

const SearchLayout = ({ children }) => {

    return (
        <section className='container max-w-[1170px] min-h-screen mx-auto px-4 md:px-2'>
            <div className='flex flex-wrap'>
                <aside className='w-full md:w-2/3 pr-6'>
                    {children}
                </aside>
                <aside className='w-full md:w-1/3'>
                    <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                        <AsideCategoriesTabs />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default SearchLayout;