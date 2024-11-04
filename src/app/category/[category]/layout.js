import AsideCategoriesTabs from '@/app/components/HomePage/AsideCategoriesTabs';
import FlexMiniNewsCard from '@/app/components/shared/FlexMiniNewsCard/FlexMiniNewsCard';
import NavLink from '@/app/components/shared/NavLink/NavLink';
import { getData } from '@/app/utils/getData';
import Link from 'next/link';
import React from 'react';


const CategoryLayout = async ({ children, params }) => {
    const subCategories = await getData(`https://api.medivoicebd.com/parent-categories?categoryUrl=${decodeURIComponent(params.category)}`);

    return (
        <section className='min-h-screen container mx-auto max-w-[1170px] px-4'>
            {
                (subCategories?.length > 0) && (
                    <nav className='mt-6 flex items-center gap-8 pb-4 border-solid border-black border-b-[1px]'>
                        <h1 className='text-[#fd0408] text-[22px] font-bold'>
                            <Link href={`/category/${params.category}`}>{decodeURIComponent(params.category)}</Link>
                        </h1>
                        {/* ---------subcategory---- */}
                        {
                            (subCategories.length > 0) && (
                                <ul className='flex flex-wrap items-center'>
                                    {subCategories.map((subCategory, i) => (
                                        <li
                                            key={i}
                                            className={`text-lg px-4 ${i < subCategories.length - 1 ? "border-solid border-black border-0 border-r-[1px]" : ""}`}
                                        >
                                            <NavLink path={`/category/${decodeURIComponent(params.category)}/${subCategory.category_url}`} title={subCategory.category} />
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    </nav>
                )
            }
            <div className='flex flex-wrap mt-6'>
                <aside className='w-full md:w-2/3'>
                    {children}
                </aside>
                <aside className='w-full md:w-1/3'>
                    {/* categories tabs */}
                    <div className='mb-4 p-3 py-4 border-solid border-gray-200 border-[1px] shadow-sm'>
                        <AsideCategoriesTabs />
                    </div>
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
            </div>
        </section>
    );
};

export default CategoryLayout;