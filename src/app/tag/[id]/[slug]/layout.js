import AsideCategoriesTabs from '@/app/components/HomePage/AsideCategoriesTabs';
import Pagination from '@/app/components/shared/Pagination/Pagination';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TagLayout = ({ children, params }) => {
    const { slug } = params;

    return (
        <section className='container max-w-[1170px] min-h-screen mx-auto px-4 md:px-2'>
            <div className='flex flex-wrap'>
                <aside className='w-full md:w-2/3 pr-6'>
                    <div className='border-solid border-black border-b-[1px] mb-4'>
                        <h1
                            className="flex gap-1 text-2xl mb-4"
                        >
                            <FontAwesomeIcon className='' icon={faTag} />
                            <span>{decodeURIComponent(slug).split("-").join(" ")}</span>
                        </h1>
                    </div>
                    {children}
                </aside>
                <aside className='w-full md:w-1/3'>
                    <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                        <AsideCategoriesTabs />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default TagLayout;