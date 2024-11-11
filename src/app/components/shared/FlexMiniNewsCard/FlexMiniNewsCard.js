import getHeadlineColor from '@/app/utils/getHeadlineColor';
import Image from 'next/image';
import React from 'react';

const FlexMiniNewsCard = ({ newsDetails }) => {
    // shoulder color and headline color are optional
    const { image, title, small_title, news_url, width, height, headline_color, shoulder_color } = newsDetails || {};
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
            <div className="grid gap-1">
                <p className={`text-xs ${getHeadlineColor(shoulder_color)}`}>{small_title}</p>
                <h2 className={`leading-6 hover:text-[#d84315] cursor-pointer text-lg ${getHeadlineColor(headline_color)}`}>
                    <a href={news_url}>
                        {title || "ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু"}
                    </a>
                </h2>
            </div>
        </div>
    );
};

export default FlexMiniNewsCard;