import { getData } from '@/app/utils/getData';
import React from 'react';
import AsideCategoriesTabs from '../AsideCategoriesTabs';
import Banner from '../../shared/Banner/Banner';

const LatestNewsTabs = async ({ id }) => {
    const newsTabsData = await getData(`https://api.medivoicebd.com/home-page-data?homePageSetupId=${id}`);

    const { advertisement } = newsTabsData;

    return (
        <>
            <AsideCategoriesTabs newsTabsData={newsTabsData} />
            {/* advertisement */}
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

export default LatestNewsTabs;