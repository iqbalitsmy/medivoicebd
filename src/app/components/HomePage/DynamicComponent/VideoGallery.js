import { getData } from '@/app/utils/getData';
import React from 'react';
import Banner from '../../shared/Banner/Banner';

const VideoGallery = async ({ id }) => {
    const videosData = await getData(`https://api.medivoicebd.com/home-page-data?homePageSetupId=${id}`);
    const { newsRows, advertisement } = videosData;

    return (
        <div>
            {/* youtube video */}
            <div className='mb-4'>
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-[22px] mb-4 pl-4">ভিডিও</h2>
                <div className='h-80'>
                    <iframe width="100%" height={"100%"} src={`https://www.youtube.com/embed/${newsRows[0].video_url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="grid gap-5 justify-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 py-4">
                    {
                        newsRows.slice(1).map((news, i) => (
                            <div key={i}>
                                <div className='mb-2'>
                                    <iframe className='h-20' width="100%" height={"100%"} src={`https://www.youtube.com/embed/${news.video_url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <a
                                    className='hover:text-[#d84315] text-lg'
                                    href={`/article/${news.id}/${news.news_url}`}
                                >
                                    {news.title}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            {(advertisement && (Array.isArray(advertisement) ? advertisement.length > 0 : true)) && (
                <Banner
                    bannerDetails={{
                        source: `https://medivoicebd.com/${Array.isArray(advertisement) ? advertisement[0]?.image : advertisement.image}`,
                        link: Array.isArray(advertisement) ? advertisement[0]?.url : advertisement.url,
                        alter: Array.isArray(advertisement) ? advertisement[0]?.title : advertisement.title,
                    }}
                />
            )}
        </div>
    );
};

export default VideoGallery;