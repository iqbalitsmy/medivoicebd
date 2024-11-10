import Image from 'next/image';
import React from 'react';
import AsideCategoriesTabs from './AsideCategoriesTabs';
import BanglaCalendar from './BanglaCalender';
import FlexMiniNewsCard from '../shared/FlexMiniNewsCard/FlexMiniNewsCard';
import Advertisement from '../shared/Advertisement/Advertisement';
import { getData } from '@/app/utils/getData';
import SidebarListStyle from './DynamicComponent/SidebarListStyle';
import MainBodyGridStyle from './DynamicComponent/MainBodyGridStyle';
import OnLead from './DynamicComponent/OnLead';
import LatestNewsTabs from './DynamicComponent/LatestNewsTabs';
import NewsTabs from './DynamicComponent/NewsTabs';
import FacebookTheme from './DynamicComponent/FacebookTheme';
import Archive from './DynamicComponent/Archive';
import VideoGallery from './DynamicComponent/VideoGallery';

const Asidebar = async () => {
    const rightSideStructure = await getData('https://api.medivoicebd.com/home-setup?deviceType=PC&positionName=Right%20Sidebar');


    return (
        <aside className='w-full md:w-1/3'>
            <div>
                {rightSideStructure.sort((a, b) => a.position - b.position).map((setup) => {
                    switch (setup.theme) {
                        case 'sidebar-list-style':
                            return <SidebarListStyle key={setup.id} id={setup.id} />;
                        case 'main-body-grid-style':
                            return <MainBodyGridStyle key={setup.id} id={setup.id} />;
                        case 'on-lead':
                            return <OnLead key={setup.id} id={setup.id} />;
                        case 'latest-news-tabs':
                            return <LatestNewsTabs key={setup.id} id={setup.id} />;
                        case 'news-tabs':
                            return <NewsTabs key={setup.id} id={setup.id} />;
                        case 'facebook':
                            return <FacebookTheme key={setup.id} id={setup.id} />;
                        case 'archive':
                            return <Archive key={setup.id} id={setup.id} />;
                        case 'video-gallery':
                            return <VideoGallery key={setup.id} id={setup.id} />;
                        default:
                            return null;
                    }
                })}
            </div>

            {/* advertisement */}
            {/* <div className='mx-auto mb-4'>
                <Advertisement image={"/images/advertisement/gif__4_image.gif"} />
            </div> */}
            {/* <div className="p-1 mb-4">
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4"> <a href="">স্বাস্থ্য</a></h2>
                <div className='grid gap-2'>
                    <Image src="/images/news/clinical-psychology.jpg" alt="National News" width={400} height={200} className="" />
                    <p className='text-lg font-bold leading-5 hover:text-[#d84315]'><a href="">চিকিৎসাধীন শিশুদের হয়ে স্কুলে যাবে রোবট</a></p>
                </div>
            </div> */}
            {/* small news card */}
            {/* <div className='bg-gray-100 grid gap-[1px] mb-4'>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <FlexMiniNewsCard key={index} />
                    ))
                }
            </div> */}
            {/* categories tabs */}
            {/* <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                <AsideCategoriesTabs />
            </div> */}
            {/* advertisement */}
            {/* <div className='mx-auto mb-4'>
                <Advertisement image={"/images/advertisement/sergel_heart-burn_facebook-ad_4.png"} />
            </div> */}
            {/* categories tabs */}
            {/* <div className='mb-6 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                <AsideCategoriesTabs />
            </div> */}
            {/* facebook page */}
            {/* <div className='mb-6'>
                <iframe
                    className='w-full'
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedivoicebd&tabs=page&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="250"
                    height="130"
                    style={{ border: 'none', overflow: 'hidden' }} // Style updated for JSX
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true} // Boolean values in JSX
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div> */}
            {/* calender */}
            {/* <div>
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">আর্কাইভ</h2>
                <BanglaCalendar />
            </div> */}
        </aside>
    );
};

export default Asidebar;