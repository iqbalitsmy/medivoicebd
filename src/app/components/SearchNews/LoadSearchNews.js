"use client"

import React, { useEffect, useRef, useState } from 'react';
import SearchNewsCard from './SearchNewsCard';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';

const LoadSearchNews = ({keyword}) => {
    // get keyword from search params

    const [newsData, setNewsData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const elementRef = useRef(null);

    function onIntersection(entries) {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasMore) {
            fetchMoreItems()
        }
    }
    // console.log(keyword)
    useEffect(() => {
        // Reset states when keyword changes
        setNewsData([]);
        setHasMore(true);
        setPage(1);

        // Call fetchMoreItems to get the first page of new keyword data
        fetchMoreItems();
    }, [keyword]);


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
    }, [newsData])

    async function fetchMoreItems() {
        try {
            const response = await fetch(`https://api.medivoicebd.com/search-news?keyword=${encodeURIComponent(keyword)}&page=${page}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();

            if (data.newsRows.length === 0) {
                setHasMore(false);
            } else {
                setNewsData(prev => [...prev, ...data.newsRows]);
                setPage(prevPage => prevPage + 1);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            setHasMore(false);
        }
    }

    return (
        <>
            {
                newsData.length > 0 ? (
                    newsData.map((news, index) => (
                        <SearchNewsCard key={index} id={news.id} title={news.title} date={news.date} link={news.news_url} description={news.description} />
                    ))
                ) : (
                    <h1 className='text-3xl text-center text-gray-500'>কোনো নিউজ পাওয়া যায়নি</h1>
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

export default LoadSearchNews;