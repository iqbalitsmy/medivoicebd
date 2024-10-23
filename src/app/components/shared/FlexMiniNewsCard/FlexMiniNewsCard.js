import Image from 'next/image';
import React from 'react';

const FlexMiniNewsCard = ({ newsDetails }) => {
    const { image, title, small_title, news_url, width, height } = newsDetails || {};
    return (
        <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
            {/* News Image */}
            <Image
                src={image || "/images/news/weather-12-oct-70x120_thumb.jpg"}
                alt={title || "News Thumbnail"}
                width={width || 80}
                height={height || 64}
                className="w-20 h-16 object-cover"
            />
            {/* News Headline */}
            <div className="leading-tight grid gap-1">
                <p className='text-[9px] text-[#d84315]'>{small_title || "করোনা ও বার্ধক্যজনিত অসুস্থতা"}</p>
                <h2 className="hover:text-[#d84315] cursor-pointer">
                    <a href={news_url}>
                        {title || "ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু"}
                    </a>
                </h2>
            </div>
        </div>
    );
};

export default FlexMiniNewsCard;