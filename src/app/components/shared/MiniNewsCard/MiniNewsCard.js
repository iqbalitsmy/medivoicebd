import Image from 'next/image';
import React from 'react';

const MiniNewsCard = () => {
    return (
        <div className='grid gap-2'>
            <Image src="/images/news/dengue-130x240_thumb.jpg" alt="National News" width={400} height={200} className="" />
            <p className='hover:text-[#d84315]'><a href="">‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’</a></p>
        </div>
    );
};

export default MiniNewsCard;