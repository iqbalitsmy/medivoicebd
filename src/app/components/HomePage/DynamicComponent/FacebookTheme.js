import React from 'react';
import Facebook from '../Facebook';
import { getData } from '@/app/utils/getData';
import Banner from '../../shared/Banner/Banner';

const FacebookTheme = async ({ id }) => {
    const facebookData = await getData(`https://api.medivoicebd.com/home-page-data?homePageSetupId=${id}`);
    const { advertisement } = facebookData;

    return (
        <div className='mb-4'>
            <div className='mb-6'>
                <Facebook />
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
        </div>
    );
};

export default FacebookTheme;