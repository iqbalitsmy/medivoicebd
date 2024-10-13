import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const MainSection = () => {
    return (
        <div className='w-full md:w-2/3 md:pr-8'>
            {/* --------- banner image------- */}
            <figure className='mb-4'>
                <a href="">
                    <Image src={"/images/banner/banner-ad-medivoice-health.jpg"} height={450} width={3600} alt='banner ad medivoice health' />
                </a>
            </figure>
            <div className='flex flex-wrap mx-auto'>
                <div className='mx-auto w-full md:w-7/12 pb-4 md:pb-0 md:pr-4'>
                    {/* first news card */}
                    <div className='mb-4 mx-auto'>
                        <Image className='mx-auto' src={"/images/news/clinical-psychology.jpg"} height={450} width={600} alt='banner ad medivoice health' />
                        <div className="text-[32px] font-bold leading-10 mt-2">
                            <h1 className='hover:text-[#d84315] cursor-pointer'>‘মানসিক স্বাস্থ্যসেবার বাইরে দেশের ৯২ শতাংশ মানুষ’</h1>
                        </div>
                    </div>
                    {/* after first news card */}
                    <div className='flex gap-2 justify-between'>
                        <div className=''>
                            <Image src={"/images/news/dengue-130x240_thumb.jpg"} height={300} width={400} alt='banner ad medivoice health' />
                            <div className="mt-2">
                                <h1 className='hover:text-[#d84315] cursor-pointer'>‘মানসিক স্বাস্থ্যসেবার বাইরে দেশের ৯২ শতাংশ মানুষ’</h1>
                            </div>
                        </div>
                        <div className=''>
                            <Image src={"/images/news/dengue-130x240_thumb.jpg"} height={300} width={400} alt='banner ad medivoice health' />
                            <div className="mt-2">
                                <h1 className='hover:text-[#d84315] cursor-pointer'>‘মানসিক স্বাস্থ্যসেবার বাইরে দেশের ৯২ শতাংশ মানুষ’</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* aside news card */}
                <div className='w-full md:w-5/12 bg-gray-100 grid gap-[1px]'>
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
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
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
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
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
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
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
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
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
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
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
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
            </div>
            {/* --------banner 2 image----------- */}
            <figure className='pt-8'>
                <a href="">
                    <Image src={"/images/banner/banner-ad-medivoice-health.jpg"} height={450} width={3600} alt='banner ad medivoice health' />
                </a>
            </figure>
            {/* categories news list */}
            <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4">
                {/* National Section */}
                <div className="p-1">
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">জাতীয়</h2>
                    <div className='grid gap-2'>
                        <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                        <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’</a></p>
                    </div>
                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন:  &#34;এটি হবে আন্দোলনের একটি অধ্যায়&#34;</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                    </ul>
                </div>
                {/* National Section */}
                <div className="p-1">
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">জাতীয়</h2>
                    <div className='grid gap-2'>
                        <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                        <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’</a></p>
                    </div>
                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন: &quot;এটি হবে আন্দোলনের একটি অধ্যায়&quot;</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                    </ul>
                </div>
                {/* National Section */}
                <div className="p-1">
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">জাতীয়</h2>
                    <div className='grid gap-2'>
                        <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                        <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’</a></p>
                    </div>
                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন:  &#34;এটি হবে আন্দোলনের একটি অধ্যায়&#34;</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                    </ul>
                </div>
                {/* National Section */}
                <div className="p-1">
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">জাতীয়</h2>
                    <div className='grid gap-2'>
                        <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                        <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’</a></p>
                    </div>
                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন:  &#34;এটি হবে আন্দোলনের একটি অধ্যায়&#34;</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                    </ul>
                </div>
                {/* National Section */}
                <div className="p-1">
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">জাতীয়</h2>
                    <div className='grid gap-2'>
                        <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                        <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’</a></p>
                    </div>
                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন:  &#34;এটি হবে আন্দোলনের একটি অধ্যায়&#34;</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                    </ul>
                </div>
                {/* National Section */}
                <div className="p-1">
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">জাতীয়</h2>
                    <div className='grid gap-2'>
                        <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                        <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">‘মানসিক স্বাস্থ্যের বাইরে দেশের ৯২ শতাংশ মানুষ’</a></p>
                    </div>
                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন:  &#34;এটি হবে আন্দোলনের একটি অধ্যায়&#34;</a></li>
                        <li className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} /> <a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                    </ul>
                </div>
            </div>
            {/* youtube video */}
            <div className='mb-4'>
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">ভিডিও</h2>
                <div className='h-80'>
                    <iframe width="100%" height={"100%"} src="https://www.youtube.com/embed/X1Sx-6ix1mM?si=uDfHmxdqlc8VtTVJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default MainSection;