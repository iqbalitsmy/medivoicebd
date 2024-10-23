import Image from 'next/image';
import React from 'react';

const Banner = ({ bannerDetails }) => {
    const { source, link, alter, height, width } = bannerDetails || {};
    return (
        <figure className='mb-4'>
            <a href={link || ""}>
                <Image className='w-full' src={source || "/images/banner/banner-ad-medivoice-health.jpg"} height={height || 200} width={width || 600} alt={alter || 'banner ad medivoice health'} />
            </a>
        </figure>
    );
};

export default Banner;