'use client';

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faL, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Headlines = () => {
    const [direction, setDirection] = useState("left");
    const [isPaused, setIsPaused] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        async function headlinesData() {
            try {
                const res = await fetch("https://api.medivoicebd.com/latest-news");
                const data = await res.json()
                setHeadlines(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        headlinesData();
    }, []);


    if (isLoading) {
        return (
          <div className="text-black pt-6 text-center">
            <p>Loading Headlines...</p>
          </div>
        );
      }

    if (error) {
        return (
          <div className="text-red-700 pt-6 text-center">
            <p>{error}</p>
          </div>
        );
      }

    return (
        <div className="relative container mx-auto flex items-center border-solid border-[#d84315] border-[1px] my-6">
            {/* Headline Title */}
            <div className="text-white bg-[#d84315] px-4 py-1 pr-6"
                style={{
                    clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
                }}
            >
                শিরোনাম
            </div>
            <div className="w-full grid place-content-center">
                {/* Marquee with control state */}
                <Marquee
                    pauseOnHover={true}
                    gradient={false}
                    speed={50}
                    direction={direction}
                    play={!isPaused}
                >
                    {
                        headlines.map((headline, i) => (
                            <span key={headline.id} className='flex items-center hover:text-blue-800' >
                                <Image src="/images/logo/favicon.png" alt="Logo" width={20} height={20} />
                                <a className='mx-2' href={headline.url}>{headline.title}</a>
                            </span>
                        ))
                    }
                </Marquee>
            </div>
            {/* Control buttons */}
            <div className='grid place-content-center bg-gray-200 z-10'>
                <div className="absolute top-0 bottom-0 right-0 min-h-full flex items-center">
                    <button
                        onClick={() => setDirection("left")}
                        className="px-3 h-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 border-solid border-gray-300 border-[1px]"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="w-10 h-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 border-solid border-gray-300 border-[1px] grid place-content-center"
                    >
                        <FontAwesomeIcon className='' icon={isPaused ? faPlay : faPause} />
                    </button>
                    <button
                        onClick={() => setDirection("right")}
                        className="px-3 h-full text-sm text-gray-500 bg-gray-100 border-solid border-gray-300 border-[1px]"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Headlines;