import Image from 'next/image';
import React from 'react';

const MiniNewsCard = ({ image = "/images/news/dengue-130x240_thumb.jpg", alt = "National News", title = "‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’", small_title ="", news_url ="" }) => {
    return (
        <div className='grid gap-2'>
            <Image src={image} alt={alt} width={400} height={200} className="" />
            <div>
                <p className='text-xs text-red-600'>{small_title}</p>
                <p className='hover:text-[#d84315] leading-5'><a href={news_url}>{title}</a></p>
            </div>
        </div>
    );
};

export default MiniNewsCard;