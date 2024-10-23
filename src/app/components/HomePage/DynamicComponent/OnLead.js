import { getData } from '@/app/utils/getData';
import React from 'react';
import MainNews from '../MainNews';

const OnLead = async ({ id }) => {
    const onLeadNews = await getData(`https://api.medivoicebd.com/home-page-data?homePageSetupId=${id}`);
    const { newsRows } = onLeadNews;
    return (
        <MainNews news={newsRows} />
    );
};

export default OnLead;