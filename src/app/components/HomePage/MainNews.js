import Image from 'next/image';
import React from 'react';
import MiniNewsCard from '../shared/MiniNewsCard/MiniNewsCard';
import FlexMiniNewsCard from '../shared/FlexMiniNewsCard/FlexMiniNewsCard';

const MainNews = ({ news }) => {
    return (
        <div className='flex flex-wrap mx-auto'>
            <div className='mx-auto w-full md:w-7/12 pb-4 md:pb-0 md:pr-4'>
                {/* first news card */}
                <article className='mb-4 mx-auto'>
                    <Image className='mx-auto' src={`https://medivoicebd.com/${news[0].image}`} height={450} width={600} alt={news[0].title} />
                    <div className="text-[32px] font-bold leading-10 mt-2">
                        <h1 className='hover:text-[#d84315] cursor-pointer'>{news[0].title}</h1>
                    </div>
                </article>
                {/* after first news card 2 cards */}
                <div className='flex gap-2 justify-between'>
                    {
                        news.slice(1, 3).map((n, index) => (
                            <MiniNewsCard
                                key={index}
                                title={n.title}
                                small_title={n.small_title}
                                image={`https://medivoicebd.com/${n?.image}`}
                                news_url={`/article/${n.id}/${n.news_url}`}
                            />
                        ))
                    }
                </div>
            </div>
            {/* aside news card */}
            <div className='w-full md:w-5/12 bg-gray-100 grid gap-[1px]'>
                {
                    news.slice(3).map((n, i) => (
                        <FlexMiniNewsCard
                            key={i}
                            newsDetails={{
                                image: `https://medivoicebd.com/${n?.image}`,
                                title: n.title,
                                small_title: n.small_title,
                                news_url: `/article/${n.id}/${n.news_url}`,
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MainNews;