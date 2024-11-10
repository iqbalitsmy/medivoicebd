import { getData } from '@/app/utils/getData';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import MainBodyGridStyle from './DynamicComponent/MainBodyGridStyle';
import OnLead from './DynamicComponent/OnLead';
import LatestNewsTabs from './DynamicComponent/LatestNewsTabs';
import NewsTabs from './DynamicComponent/NewsTabs';
import FacebookTheme from './DynamicComponent/FacebookTheme';
import Archive from './DynamicComponent/Archive';
import VideoGallery from './DynamicComponent/VideoGallery';
import { headers } from 'next/headers';
 
const MainSection = async () => {
    const userAgent = headers().get('user-agent') || '';

    // Basic check for mobile devices
    const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

    const mainStructure = await getData(`https://api.medivoicebd.com/home-setup?deviceType=${isMobile ? "Mobile" : "PC"}&positionName=Main%20Body`);

    console.log(isMobile);

    const categories = await getData("https://api.medivoicebd.com/categories");

    // Use Promise.all to fetch category-specific news in parallel
    const newsPromises = categories.slice(0, 6).map(category =>
        getData(`https://api.medivoicebd.com/category-news?categoryUrl=${category.category_url}`)
    );

    // Wait for all the requests to complete
    // const newsData = await Promise.all(newsPromises);

    return (
        <div className='w-full md:w-2/3 md:pr-5'>

            <div>
                { mainStructure &&
                (mainStructure.sort((a, b) => a.position - b.position).map((setup) => {
                    switch (setup.theme) {
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
                }))
                }
            </div>

            {/* --------- banner image------- */}
            {/* <figure className='mb-4'>
                <a href="">
                    <Image className='w-full' src={"/images/banner/banner-ad-medivoice-health.jpg"} height={200} width={600} alt='banner ad medivoice health' />
                </a>
            </figure> */}
            {/* -------main news------- */}
             {/* <div className='flex flex-wrap mx-auto'>
                <div className='mx-auto w-full md:w-7/12 pb-4 md:pb-0 md:pr-4'>
                    first news card
                    <div className='mb-4 mx-auto'>
                        <Image className='mx-auto' src={"/images/news/clinical-psychology.jpg"} height={450} width={600} alt='banner ad medivoice health' />
                        <div className="text-[32px] font-bold leading-10 mt-2">
                            <h1 className='hover:text-[#d84315] cursor-pointer'>‘মানসিক স্বাস্থ্যসেবার বাইরে দেশের ৯২ শতাংশ মানুষ’</h1>
                        </div>
                    </div>
                    after first news card
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
                aside news card
                <div className='w-full md:w-5/12 bg-gray-100 grid gap-[1px]'>
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
                        News Image
                        <Image
                            src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                            alt="News Thumbnail"
                            width={80}
                            height={64}
                            className="w-20 h-16 object-cover"
                        />
                        News Headline
                        <div className="leading-tight">
                            <p className="hover:text-[#d84315] cursor-pointer">
                                ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
                        News Image
                        <Image
                            src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                            alt="News Thumbnail"
                            width={80}
                            height={64}
                            className="w-20 h-16 object-cover"
                        />
                        News Headline
                        <div className="leading-tight">
                            <p className="hover:text-[#d84315] cursor-pointer">
                                ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
                        News Image
                        <Image
                            src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                            alt="News Thumbnail"
                            width={80}
                            height={64}
                            className="w-20 h-16 object-cover"
                        />
                        News Headline
                        <div className="leading-tight">
                            <p className="hover:text-[#d84315] cursor-pointer">
                                ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
                        News Image
                        <Image
                            src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                            alt="News Thumbnail"
                            width={80}
                            height={64}
                            className="w-20 h-16 object-cover"
                        />
                        News Headline
                        <div className="leading-tight">
                            <p className="hover:text-[#d84315] cursor-pointer">
                                ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
                        News Image
                        <Image
                            src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                            alt="News Thumbnail"
                            width={80}
                            height={64}
                            className="w-20 h-16 object-cover"
                        />
                        News Headline
                        <div className="leading-tight">
                            <p className="hover:text-[#d84315] cursor-pointer">
                                ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-2 shadow-sm pt-2 pb-3 bg-white">
                        News Image
                        <Image
                            src="/images/news/weather-12-oct-70x120_thumb.jpg" // Replace with actual image path
                            alt="News Thumbnail"
                            width={80}
                            height={64}
                            className="w-20 h-16 object-cover"
                        />
                        News Headline
                        <div className="leading-tight">
                            <p className="hover:text-[#d84315] cursor-pointer">
                                ছাত্র-জনতার আন্দোলনে আহতদের গণস্বাস্থ্যে পুনর্বাসন শুরু
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* --------banner 2 image----------- */}
            {/* <figure className='pt-8'>
                <a href="">
                    <Image className='w-full' src={"/images/banner/banner-ad-medivoice-health.jpg"} height={200} width={600} alt='banner ad medivoice health' />
                </a>
            </figure> */}
            {/* -------- categories news list------- */}
            {/* <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4">
                {
                    newsData && (
                        newsData.map(({ leadNews }, i) => (
                            <div key={i} className="p-1">
                                -----category title-----
                                <h2 className="border-solid border-l-[3px] border-[#d84315] text-[22px] mb-4 pl-4">{categories[i].category}</h2>
                                first news
                                <div className='grid gap-2'>
                                    <Image src={`https://medivoicebd.com/${leadNews[0].image}`} alt="National News" width={160} height={80} className="w-full" />
                                    <p
                                        className='text-lg font-bold leading-5 hover:text-[#d84315]'
                                    >
                                        <a href={`/article/${leadNews[0].id}/${leadNews[0].news_url}`}>{leadNews[0].title}</a>
                                    </p>
                                </div>
                                news list
                                <ul className="mt-4 grid gap-[1px] bg-gray-100">
                                    {
                                        leadNews.slice(1, 5).map((leadNewsList, i) => (
                                            <li key={i} className='bg-white py-2'><FontAwesomeIcon icon={faCaretRight} />
                                                <a
                                                    className='hover:text-[#d84315] pl-2'
                                                    href={`/article/${leadNewsList.id}/${leadNewsList.news_url}`}
                                                >
                                                    {leadNewsList.title}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    )
                }
            </div> */}
            {/* youtube video */}
            {/* <div className='mb-4'>
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-4 pl-4">ভিডিও</h2>
                <div className='h-80'>
                    <iframe width="100%" height={"100%"} src="https://www.youtube.com/embed/X1Sx-6ix1mM?si=uDfHmxdqlc8VtTVJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div> */}
        </div>
    );
};

export default MainSection;