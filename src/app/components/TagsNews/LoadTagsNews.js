"use client"

import React, { useEffect, useRef, useState } from 'react';
import MiniNewsCard from '../shared/MiniNewsCard/MiniNewsCard';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import { getData } from '@/app/utils/getData';

const LoadTagsNews = ({ tagId }) => {
    const [tagNews, setTagNews] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    const elementRef = useRef(null);

    function onIntersection(entries) {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasMore) {
            fetchMoreItems()
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);

        if (observer && elementRef.current) {
            observer.observe(elementRef.current);
        }
        return (() => {
            if (observer) {
                observer.disconnect();
            }
        })
    }, [tagNews])

    async function fetchMoreItems() {
        const data = await getData(`https://api.medivoicebd.com/tag-news?page=${page}&tagId=${tagId}&type=tag`)

        if (data.newsRows.length === 0) {
            setHasMore(false);
        } else {
            setTagNews(prev => [...prev, ...data.newsRows]);
            setPage(prevPage => prevPage + 1)
        }
    }

    return (
        <>
            {
                tagNews ? (
                    tagNews.map((news, index) => (
                        <MiniNewsCard key={index}
                            title={news.title}
                            small_title={news.small_title}
                            image={`https://medivoicebd.com/${news?.image}`}
                            news_url={`/article/${news.id}/${news.news_url}`}
                        />
                    ))
                ) : (
                    <h1 className='text-3xl text-center'>News not found</h1>
                )
            }
            {
                hasMore && (
                    <div className='grid place-items-center w-full mx-auto' ref={elementRef}>
                        <LoadingSpinner />
                    </div>
                )
            }
        </>
    );
};

export default LoadTagsNews;