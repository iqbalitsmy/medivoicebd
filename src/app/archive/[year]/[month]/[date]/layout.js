import React from 'react';
import BanglaCalendar from '../../../../components/HomePage/BanglaCalender';
import AsideCategoriesTabs from '../../../../components/HomePage/AsideCategoriesTabs';

const ArchiveLayout = ({ children }) => {
    return (
        <section className="container mx-auto min-h-screen px-4 md:px-2 flex flex-wrap max-w-[1170px]">
            <aside className='w-full md:w-2/3 md:pr-4'>
                {children}
            </aside>
            <aside className='w-full md:w-1/3'>
                {/* categories tabs */}
                <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                    <AsideCategoriesTabs />
                </div>
                {/* calender */}
                <div>
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">আর্কাইভ</h2>
                    <BanglaCalendar />
                </div>
            </aside>
        </section>
    );
};

export default ArchiveLayout;