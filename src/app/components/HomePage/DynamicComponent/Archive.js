import React from 'react';
import Banner from '../../shared/Banner/Banner';
import BanglaCalendar from '../BanglaCalender';
import { getData } from '@/app/utils/getData';

const Archive = async({id}) => {
    const archiveData = await getData(`https://api.medivoicebd.com/home-page-data?homePageSetupId=${id}`);
    const { advertisement } = archiveData;
    return (
        <div className='mb-4'>
            <div className=''>
                <BanglaCalendar />
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

export default Archive;