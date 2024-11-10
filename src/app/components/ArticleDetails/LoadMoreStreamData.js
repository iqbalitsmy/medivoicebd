"use client"

import convertToBengaliDate from '@/app/utils/convertToBengaliDate';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import { getData } from '@/app/utils/getData';

const LoadMoreStreamData = ({ eventStreamId }) => {
    const [streams, setStreams] = useState([]);
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
    }, [streams])

    async function fetchMoreItems() {
        const data = await getData(`https://api.medivoicebd.com/more-stream-news?page=${page}&eventStreamId=${eventStreamId}`)

        // const data = await response.json();

        if (data.streamRows.length === 0) {
            setHasMore(false);
        } else {
            setStreams(prev => [...prev, ...data.streamRows]);
            setPage(prevPage => prevPage + 1)
        }
    }

    return (
        <>
            {
                streams && (
                    <ul className="pl-4">
                        {
                            streams.map((streamRow, index) => (
                                <li key={index} className="flex flex-wrap mb-2">
                                    {/* right side */}
                                    <span className="w-1/4 text-lg font-bold ">{convertToBengaliDate(streamRow.date)}</span>
                                    {/* left side */}
                                    <div className='pl-2 text-left w-3/4'>
                                        {/* small title */}
                                        <p className="text-red-600 text-xs pl-4">
                                            {streamRow.small_title}
                                        </p>
                                        {/* title */}
                                        <div className='flex gap-2'>
                                            <span className="text-blue-500 text-[22px] font-bold cursor-pointer hover:text-[#d84315]">
                                                <span className='text-black pr-2 text-'>
                                                    <FontAwesomeIcon icon={faCaretRight} />
                                                </span>
                                                <a href={`/article/${streamRow.id}/${streamRow.url}`}>
                                                    {streamRow.title}
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            )
                            )}
                    </ul>
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

export default LoadMoreStreamData;