import getHeadlineColor from '@/app/utils/getHeadlineColor';
import Image from 'next/image';
import React from 'react';

const MiniNewsCard = ({ image = "/images/news/dengue-130x240_thumb.jpg", alt = "National News", title = "‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’", small_title ="", news_url ="", headline_color, shoulder_color }) => {
    
    return (
        <div className='grid gap-2'>
            <Image className="w-full" src={image} alt={alt} width={160} height={80} />
            <div>
                <p className={`text-xs ${getHeadlineColor(shoulder_color)}`}>{small_title}</p>
                <h3 className={`hover:text-red-600 text-lg leading-6 ${getHeadlineColor(headline_color)}`}><a href={news_url}>{title}</a></h3>
            </div>
        </div>
    );
};

export default MiniNewsCard;