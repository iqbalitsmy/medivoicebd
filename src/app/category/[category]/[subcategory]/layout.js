import MiniNewsCard from '@/app/components/shared/MiniNewsCard/MiniNewsCard';
import Pagination from '@/app/components/shared/Pagination/Pagination';
import { getData } from '@/app/utils/getData';
import Image from 'next/image';
import React from 'react';

const SubCategoryLayout = async ({ params }) => {
    const subCategoriesNews = await getData(`https://api.medivoicebd.com/category-news?categoryUrl=${decodeURIComponent(params.category)}&parentUrl=${decodeURIComponent(params.subcategory)}`);

    const currentPage = parseInt(1, 10) || 1;
    const totalPages = 10;

    if (!subCategoriesNews) {
        <h1 className='text-center my-5 text-4xl'>Loading.....</h1>
    }
    
    const { leadNews, newsRows } = subCategoriesNews || [];

    return (
        <div>
            <div className='mb-6'>
                {/* first news */}
                <div className='mx-auto md:pr-6 mb-4'>
                    <Image className='mx-auto' src={`https://medivoicebd.com/${leadNews[0]?.image}`} height={300} width={1000} alt='banner ad medivoice health' />
                    <div className="text-[32px] font-bold leading-10 mt-4 mb-6">
                        <h1 className='hover:text-[#d84315] cursor-pointer'><a href={`/article/${leadNews[0].id}/${leadNews[0].news_url}`}>{leadNews[0].title}</a></h1>
                    </div>
                    <hr className='border-solid border-black border-0 border-b-[1px]' />
                </div>
                {/* নির্বাচিত section */}
                <div className='md:pr-6 mb-4'>
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-2 pl-4">নির্বাচিত</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-4 gap-y-3'>
                    {
                        leadNews && (
                            leadNews.slice(1).map((news, index) => (
                                <MiniNewsCard
                                    key={index}
                                    title={news.title}
                                    small_title={news.small_title}
                                    image={`https://medivoicebd.com/${news?.image}`}
                                    news_url={`/article/${news.id}/${news.news_url}`}
                                />
                            ))
                        )
                    }
                    {
                        newsRows && (
                            newsRows.map((news, index) => (
                                <MiniNewsCard
                                    key={index}
                                    title={news.title}
                                    small_title={news.small_title}
                                    image={`https://medivoicebd.com/${news?.image}`}
                                    news_url={`/article/${news.id}/${news.news_url}`}
                                />
                            ))
                        )
                        
                    }
                    
                    </div>
                </div>
            </div>
            {/* pagination */}
            <div>
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default SubCategoryLayout;