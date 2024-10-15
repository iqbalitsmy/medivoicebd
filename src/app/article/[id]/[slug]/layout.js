import AsideCategoriesTabs from '@/app/components/HomePage/AsideCategoriesTabs';
import FlexMiniNewsCard from '@/app/components/shared/FlexMiniNewsCard/FlexMiniNewsCard';
import NavLink from '@/app/components/shared/NavLink/NavLink';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const subCategories = [
    { title: "সরকার", path: "সরকার" },
    { title: "জেলার খবর", path: "জেলার-খবর" },
    { title: "স্পেশাল রিপোর্ট", path: "স্পেশাল-রিপোর্ট" },
    { title: "অন্যান্য খবর", path: "অন্যান্য-খবর" },
]

const ArticleLayout = ({ children }) => {
    return (
        <section className='container max-w-[1170px] min-h-screen mx-auto px-4'>
            {/* navigation */}
            <div className='w-full'>
                {
                    (subCategories.length > 0) && (
                        <nav className='mt-6 flex items-center gap-8 pb-4 border-solid border-black border-b-[1px]'>
                            <h1 className='text-[#fd0408] text-[22px] font-bold'><Link href={"/category/জাতীয়"}>জাতীয়</Link></h1>
                            <ul className='flex items-center'>
                                {subCategories.map((subCategory, i) => (
                                    <li
                                        key={i}
                                        className={`text-lg px-4 ${i < subCategories.length - 1 ? "border-solid border-black border-0 border-r-[1px]" : ""}`}
                                    >
                                        <NavLink path={`/category/জাতীয়/${subCategory.path}`} title={subCategory.title} />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )
                }
            </div>
            <section className='flex flex-wrap pt-6'>
                {/* main article content */}
                <aside className='w-full md:w-2/3'>
                    {children}
                </aside>
                {/* side bar */}
                <aside className='w-full md:w-1/3'>
                    {/* advertisement */}
                    <div className='mx-auto mb-4'>
                        <a className='mx-auto' href="">
                            <Image className='mx-auto' src="/images/advertisement/gif__4_image.gif" alt='advertisement gif' width={350} height={450} />
                        </a>
                    </div>
                    {/* categories tabs */}
                    <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                        <AsideCategoriesTabs />
                    </div>
                    {/* advertisement */}
                    <div className='mx-auto mb-4'>
                        <a className='mx-auto' href="">
                            <Image className='mx-auto' src="/images/advertisement/gif__4_image.gif" alt='advertisement gif' width={350} height={450} />
                        </a>
                    </div>
                    {/* -----বিভাগের সর্বাধিক পঠিত-------- */}
                    <div>
                        <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg font-bold mb-2 pl-4">এই বিভাগের সর্বাধিক পঠিত</h2>
                        <div>
                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <FlexMiniNewsCard key={index} />
                                ))
                            }
                        </div>
                    </div>
                </aside>
            </section>
        </section>
    );
};

export default ArticleLayout;