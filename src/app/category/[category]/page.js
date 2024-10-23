import MiniNewsCard from '@/app/components/shared/MiniNewsCard/MiniNewsCard';
import { getData } from '@/app/utils/getData';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = async ({ params }) => {

    const categoriesNews = await getData(`https://api.medivoicebd.com/category-news?categoryUrl=%E0%A6%8F%E0%A6%A1%E0%A7%81-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%B0`);
    // const categoriesNews = await getData(`https://api.medivoicebd.com/category-news?categoryUrl=${decodeURIComponent(params.category)}`);

    const { leadNews, newsRows } = categoriesNews;
    console.log(categoriesNews)

    return (
        <div>
            {/* first news */}
            {/* lead News */}
            <div className='mx-auto md:pr-6 mb-4'>
                {/* image */}
                <Image className='w-full' src={`https://medivoicebd.com/${leadNews[0].image}`} height={400} width={530} alt={leadNews[0].title} />
                {/* title */}
                <div className="text-[32px] font-bold leading-10 mt-4 mb-6">
                    <h1 className='hover:text-[#d84315] cursor-pointer'>
                        <a href={`/article/${leadNews[0].id}/${leadNews[0].news_url}`}>{leadNews[0].title}</a>
                    </h1>
                </div>
                <hr className='border-solid border-black border-0 border-b-[1px]' />
            </div>
            {/* নির্বাচিত section */}
            <div className='md:pr-6 mb-4'>
                <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-2 pl-4">নির্বাচিত</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-4 gap-y-2'>
                    {
                        leadNews && (
                            leadNews.map((news, index) => (
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
            {/* subcategory news */}
            {/* parentCategories in api */}
            <div className='md:pr-6 grid gap-6'>
                {
                    newsRows && (newsRows.map((parentCategory, i) => (
                        <div key={i}>
                            <a
                                href={`/category/${params.category}/${parentCategory.category_url}`}
                                className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-2 pl-4"
                            >
                                {parentCategory.category}
                            </a>
                            <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-4 gap-y-2'>
                                {
                                    (parentCategory.newsRows) && (
                                        parentCategory.newsRows.map((newsRow, index) => (
                                            <MiniNewsCard
                                                key={index}
                                                title={newsRow.title}
                                                small_title={newsRow.small_title}
                                                image={`https://medivoicebd.com/${newsRow?.image}`}
                                                news_url={`/article/${newsRow.id}/${newsRow.news_url}`}
                                            />
                                        )
                                        ))
                                }
                            </div>
                            <div className='text-end'>
                                <Link className='font-thin text-[#d84315] hover:text-green-800 text-end' href={`/category/${params.category}/${parentCategory.category_url}`}>
                                    <FontAwesomeIcon icon={faGreaterThan} />
                                    <FontAwesomeIcon icon={faGreaterThan} />
                                    <FontAwesomeIcon icon={faGreaterThan} />
                                </Link>
                            </div>
                        </div>
                    ))
                    )
                }
            </div>
        </div>
    );
};

export default Category;