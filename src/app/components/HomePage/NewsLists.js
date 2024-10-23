import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const NewsLists = ({category, categoryUrl, news}) => {
    return (
        <div className="p-1">
            {/* -----category title----- */}
            <h2 className="border-solid border-l-[3px] border-[#d84315] text-[22px] mb-4 pl-4"><a href={categoryUrl}>{category}</a></h2>
            {/* first news */}
            <div className='grid gap-2'>
                <Image src={`https://medivoicebd.com/${news[0].image}`} alt="National News" width={160} height={80} className="w-full" />
                <p
                    className='text-lg font-bold leading-5 hover:text-[#d84315]'
                >
                    <a href={`/article/${news[0].id}/${news[0].news_url}`}>{news[0].title}</a>
                </p>
            </div>
            {/* news list */}
            <ul className="mt-4 grid gap-[1px] bg-gray-100">
                {
                    news.slice(1, 5).map((leadNewsList, i) => (
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
    );
};

export default NewsLists;