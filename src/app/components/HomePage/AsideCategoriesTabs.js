'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AsideCategoriesTabs = () => {
    const [tabsIndex, setTabsIndex] = useState(0);

    const handleTabsIndex = (index) => {
        setTabsIndex(index)
    }

    return (
        <Tabs defaultIndex={0} onSelect={handleTabsIndex}>
            <TabList>
                <Tab><a className={"cursor-pointer font-bold inline-block hover:text-[#008000]"}>সর্বশেষ</a></Tab>
                <Tab><a className={"cursor-pointer font-bold inline-block hover:text-[#008000]"}>সর্বাধিক পঠিত</a></Tab>
                <Tab><a className={"cursor-pointer font-bold inline-block hover:text-[#008000]"}>নির্বাচিত</a></Tab>
            </TabList>
            {/* tab panel */}
            <div className={`transition-opacity duration-500 ease-linear ${tabsIndex === 0 ? "opacity-100" : "opacity-0"}`}>
                <TabPanel>
                    <div className="flex items-start gap-4 shadow-sm pt-2 pb-3 bg-white opacity-100 transition-opacity delay-300">
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
                    <div>
                        <ul className="mt-4 grid gap-[1px] bg-gray-100">
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন: &quot;এটি হবে আন্দোলনের একটি অধ্যায়&quot;</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                        </ul>
                    </div>
                </TabPanel>
            </div>
            {/* tab panel */}
            <div className={`transition-opacity duration-500 ease-linear  ${tabsIndex === 1 ? "opacity-100" : "opacity-0"}`}>
                <TabPanel>

                    <div className="flex items-start gap-4 shadow-sm pt-2 pb-3 bg-white opacity-100 transition-opacity delay-300">
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
                    <div>
                        <ul className="mt-4 grid gap-[1px] bg-gray-100">
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন: &quot;এটি হবে আন্দোলনের একটি অধ্যায়&quot;</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                        </ul>
                    </div>
                </TabPanel>
            </div>
            {/* tab panel */}
            <div className={`transition-opacity duration-500 ease-linear ${tabsIndex === 2 ? "opacity-100" : "opacity-0"}`}>
                <TabPanel>
                    <div className="flex items-start gap-4 shadow-sm pt-2 pb-3 bg-white opacity-100 transition-opacity delay-300">
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
                    <div>
                        <ul className="mt-4 grid gap-[1px] bg-gray-100">
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন: &quot;এটি হবে আন্দোলনের একটি অধ্যায়&quot;</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                        </ul>
                    </div>
                </TabPanel>
            </div>
            {/* tab panel */}
            <div className={`transition-opacity duration-500  ${tabsIndex === 2 ? "opacity-100" : "opacity-0"}`}>
                <TabPanel>

                    <div className="flex items-start gap-4 shadow-sm pt-2 pb-3 bg-white opacity-100 transition-opacity delay-300">
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
                    <div>
                        <ul className="mt-4 grid gap-[1px] bg-gray-100">
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">চাকরিতে প্রবেশিকা: পুরুষের ৯২, নারীর ৩৭ করায় সুপারিশ</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">ডেঙ্গু একদিনে সর্বোচ্চ মরণ, মৃত্যু, আক্রান্ত আর ৯</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">জন-জগত আন্দোলন: &quot;এটি হবে আন্দোলনের একটি অধ্যায়&quot;</a></li>
                            <li className='bg-white py-2'><a className='hover:text-[#d84315]' href="">‘দুই লোক সব জায়গায় থাকে, তারা চেষ্টা করে অকারণ ঘটানোর’</a></li>
                        </ul>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default AsideCategoriesTabs;