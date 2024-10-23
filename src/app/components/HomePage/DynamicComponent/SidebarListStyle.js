import { getData } from '@/app/utils/getData';
import React from 'react';
import NewsLists from '../NewsLists';
import Banner from '../../shared/Banner/Banner';

const SidebarListStyle = async ({ id }) => {
    const mainBodyGridStyleData = await getData(`https://api.medivoicebd.com/home-page-data?homePageSetupId=${id}`);
    const { categoryData, advertisement } = mainBodyGridStyleData;

    return (
        <>
            {/* -------- categories news list------- */}
            <div className="grid gap-6 justify-center grid-cols-1 py-4">
                {
                    Object.keys(categoryData).map((key) => (
                        <NewsLists
                            key={key}
                            category={categoryData[key].category}
                            categoryUrl={`category/${categoryData[key].category_url}`}
                            news={categoryData[key].newsRows}
                        />
                    ))
                }
            </div>
            {(advertisement && (Array.isArray(advertisement) ? advertisement.length > 0 : true)) && (
                <Banner
                    bannerDetails={{
                        source: `https://medivoicebd.com/${Array.isArray(advertisement) ? advertisement[0]?.image : advertisement.image}`,
                        link: Array.isArray(advertisement) ? advertisement[0]?.url : advertisement.url,
                        alter: Array.isArray(advertisement) ? advertisement[0]?.title : advertisement.title,
                    }}
                />
            )}
        </>
    );
};

export default SidebarListStyle;