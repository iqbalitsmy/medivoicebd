import MiniNewsCard from '@/app/components/shared/MiniNewsCard/MiniNewsCard';
import Image from 'next/image';
import React from 'react';

const SubCategoryPage = () => {
    return (
        <div className='mb-6'>
            {/* first news */}
            <div className='mx-auto md:pr-6 mb-4'>
                <Image className='mx-auto' src={"/images/news/clinical-psychology.jpg"} height={300} width={1000} alt='banner ad medivoice health' />
                <div className="text-[32px] font-bold leading-10 mt-4 mb-6">
                    <h1 className='hover:text-[#d84315] cursor-pointer'><a href="">‘মানসিক স্বাস্থ্যসেবার বাইরে দেশের ৯২ শতাংশ মানুষ’</a></h1>
                </div>
                <hr className='border-solid border-black border-0 border-b-[1px]' />
            </div>
            {/* নির্বাচিত section */}
            <div className='md:pr-6 mb-4'>
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-2 pl-4">নির্বাচিত</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-4 gap-y-1'>
                    {
                        Array.from({ length: 18 }).map((_, index) => (
                            <MiniNewsCard key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SubCategoryPage;