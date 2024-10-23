'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AsideCategoriesTabs = ({ newsTabsData }) => {
    const [tabsIndex, setTabsIndex] = useState(0);

    const { latestNews, popularNews, selectedNews } = newsTabsData || [];

    const handleTabsIndex = (index) => {
        setTabsIndex(index)
    }

    return (
        <Tabs className={"text-lg"} defaultIndex={0} onSelect={handleTabsIndex}>
            <TabList className={"text-lg mb-4"}>
                <Tab><a className={"cursor-pointer font-bold inline-block hover:text-[#008000]"}>সর্বশেষ</a></Tab>
                <Tab><a className={"cursor-pointer font-bold inline-block hover:text-[#008000]"}>সর্বাধিক পঠিত</a></Tab>
                <Tab><a className={"cursor-pointer font-bold inline-block hover:text-[#008000]"}>নির্বাচিত</a></Tab>
            </TabList>
            {/* ------latestNews tab panel------ */}
            <div className={`transition-opacity duration-500 ease-linear ${tabsIndex === 0 ? "opacity-100" : "opacity-0"}`}>
                <TabPanel>
                    {
                        (latestNews?.length > 0) && (
                            <>
                                <div className="flex items-start gap-4 shadow-sm pt-2 pb-3 bg-white opacity-100 transition-opacity delay-300">
                                    {/* News Image */}
                                    <Image
                                        src={`https://medivoicebd.com/${latestNews[0].image}`}
                                        alt={latestNews[0].title}
                                        width={80}
                                        height={64}
                                        className="w-20 h-16 object-cover"
                                    />
                                    {/* News Headline */}
                                    <div className="leading-tight">
                                        <p className="hover:text-[#d84315] cursor-pointer">
                                            <a href={`/article/${latestNews[0].id}/${latestNews[0].news_url}`}>{latestNews[0].title}</a>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                                        {
                                            latestNews.slice(1).map((news, i) => (
                                                <li key={i} className='bg-white py-2'>
                                                    <a className='hover:text-[#d84315]' href={`/article/${news.id}/${news.news_url}`}>{news.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </>
                        )
                    }
                </TabPanel>
            </div>
            {/* -------- popularNews tab panel------ */}
            <div className={`transition-opacity duration-500 ease-linear ${tabsIndex === 1 ? "opacity-100" : "opacity-0"}`}>
                <TabPanel>
                    {
                        (popularNews?.length > 0) && (
                            <>
                                <div className="flex items-start gap-4 shadow-sm pt-2 pb-3 bg-white opacity-100 transition-opacity delay-300">
                                    {/* News Image */}
                                    <Image
                                        src={`https://medivoicebd.com/${popularNews[0].image}`}
                                        alt={popularNews[0].title}
                                        width={80}
                                        height={64}
                                        className="w-20 h-16 object-cover"
                                    />
                                    {/* News Headline */}
                                    <div className="leading-tight">
                                        <p className="hover:text-[#d84315] cursor-pointer">
                                            <a href={`/article/${popularNews[0].id}/${popularNews[0].news_url}`}>{popularNews[0].title}</a>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                                        {
                                            popularNews.slice(1).map((news, i) => (
                                                <li key={i} className='bg-white py-2'>
                                                    <a className='hover:text-[#d84315]' href={`/article/${news.id}/${news.news_url}`}>{news.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </>
                        )
                    }
                </TabPanel>
            </div>
            {/* --------selectedNews tab panel----- */}
            <div className={`transition-opacity duration-500 ease-linear ${tabsIndex === 2 ? "opacity-100" : "opacity-0"}`}>
                <TabPanel>
                    {
                        (selectedNews?.length > 0) && (
                            <>
                                <div className="flex items-start gap-4 shadow-sm pt-2 pb-3 bg-white opacity-100 transition-opacity delay-300">
                                    {/* News Image */}
                                    <Image
                                        src={`https://medivoicebd.com/${selectedNews[0].image}`}
                                        alt={selectedNews[0].title}
                                        width={80}
                                        height={64}
                                        className="w-20 h-16 object-cover"
                                    />
                                    {/* News Headline */}
                                    <div className="leading-tight">
                                        <p className="hover:text-[#d84315] cursor-pointer">
                                            <a href={`/article/${selectedNews[0].id}/${selectedNews[0].news_url}`}>{selectedNews[0].title}</a>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="mt-4 grid gap-[1px] bg-gray-100">
                                        {
                                            selectedNews.slice(1).map((news, i) => (
                                                <li key={i} className='bg-white py-2'>
                                                    <a className='hover:text-[#d84315]' href={`/article/${news.id}/${news.news_url}`}>{news.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </>
                        )
                    }
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default AsideCategoriesTabs;