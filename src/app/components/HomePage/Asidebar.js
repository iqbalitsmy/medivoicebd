import Image from 'next/image';
import React from 'react';
import AsideCategoriesTabs from './AsideCategoriesTabs';
import BanglaCalendar from './BanglaCalender';

const Asidebar = () => {
    return (
        <aside className='w-full md:w-1/3'>
            {/* advertisement */}
            <div className='mx-auto mb-4'>
                <a className='mx-auto' href="">
                    <Image className='mx-auto' src="/images/advertisement/gif__4_image.gif" alt='advertisement gif' width={350} height={450} />
                </a>
            </div>
            <div className="p-1 mb-4">
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4"> <a href="">স্বাস্থ্য</a></h2>
                <div className='grid gap-2'>
                    <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                    <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">চিকিৎসাধীন শিশুদের হয়ে স্কুলে যাবে রোবট</a></p>
                </div>
            </div>
            {/* small news card */}
            <div className='bg-gray-100 grid gap-[1px] mb-4'>
                <div className="flex items-start gap-6 pt-2 pb-3 bg-white">
                    {/* News Image */}
                    <Image
                        src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                        alt="News Thumbnail"
                        width={80}
                        height={64}
                        className="w-20 h-16 object-cover"
                    />
                    {/* News Headline */}
                    <div className="leading-tight">
                        <p className="hover:text-[#d84315] cursor-pointer">
                            ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-6 pt-2 pb-3 bg-white">
                    {/* News Image */}
                    <Image
                        src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                        alt="News Thumbnail"
                        width={80}
                        height={64}
                        className="w-20 h-16 object-cover"
                    />
                    {/* News Headline */}
                    <div className="leading-tight">
                        <p className="hover:text-[#d84315] cursor-pointer">
                            ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-6 pt-2 pb-3 bg-white">
                    {/* News Image */}
                    <Image
                        src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                        alt="News Thumbnail"
                        width={80}
                        height={64}
                        className="w-20 h-16 object-cover"
                    />
                    {/* News Headline */}
                    <div className="leading-tight">
                        <p className="hover:text-[#d84315] cursor-pointer">
                            ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-6 pt-2 pb-3 bg-white">
                    {/* News Image */}
                    <Image
                        src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                        alt="News Thumbnail"
                        width={80}
                        height={64}
                        className="w-20 h-16 object-cover"
                    />
                    {/* News Headline */}
                    <div className="leading-tight">
                        <p className="hover:text-[#d84315] cursor-pointer">
                            ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-6 pt-2 pb-3 bg-white">
                    {/* News Image */}
                    <Image
                        src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                        alt="News Thumbnail"
                        width={80}
                        height={64}
                        className="w-20 h-16 object-cover"
                    />
                    {/* News Headline */}
                    <div className="leading-tight">
                        <p className="hover:text-[#d84315] cursor-pointer">
                            ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-6 pt-2 pb-3 bg-white">
                    {/* News Image */}
                    <Image
                        src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                        alt="News Thumbnail"
                        width={80}
                        height={64}
                        className="w-20 h-16 object-cover"
                    />
                    {/* News Headline */}
                    <div className="leading-tight">
                        <p className="hover:text-[#d84315] cursor-pointer">
                            ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                        </p>
                    </div>
                </div>
            </div>
            {/* categories tabs */}
            <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                <AsideCategoriesTabs />
            </div>
            {/* advertisement */}
            <div className='mx-auto mb-4'>
                <a className='mx-auto' href="">
                    <Image className='mx-auto' src="/images/advertisement/sergel_heart-burn_facebook-ad_4.png" alt='sergel heart burn' width={350} height={450} />
                </a>
            </div>
            {/* categories tabs */}
            <div className='mb-6 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                <AsideCategoriesTabs />
            </div>
            {/* facebook page */}
            <div className='mb-6'>
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedivoicebd&tabs=page&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="340"
                    height="130"
                    style={{ border: 'none', overflow: 'hidden' }} // Style updated for JSX
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true} // Boolean values in JSX
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
            {/* calender */}
            <div>
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">জাতীয়</h2>
                <BanglaCalendar/>
            </div>
        </aside>
    );
};

export default Asidebar;