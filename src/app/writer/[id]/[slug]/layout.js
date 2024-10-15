import AsideCategoriesTabs from '@/app/components/HomePage/AsideCategoriesTabs';
import React from 'react';

const WriterLayout = ({ children }) => {
    return (
        <section className='container mx-auto max-w-[1170px] min-h-screen flex gap-y-4 flex-wrap px-4 mt-6'>
            <aside className='w-full md:w-2/3 md:pr-4'>
                {children}
            </aside>
            <aside className='w-full md:w-1/3 md:pl-4'>
                {/* categories tabs */}
                <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                    <AsideCategoriesTabs />
                </div>
            </aside>
        </section>
    );
};

export default WriterLayout;