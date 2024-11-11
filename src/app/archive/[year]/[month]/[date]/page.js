import React from 'react';
import MiniNewsCard from '../../../../components/shared/MiniNewsCard/MiniNewsCard';
import { getData } from '@/app/utils/getData';

const ArchivePage = async ({ params }) => {
    const { date, month, year } = params;
    const {newsRows} = await getData(`https://api.medivoicebd.com/archive?date=${date}&month=${month}&year=${year}`);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-4 gap-y-2'>
            {
                newsRows && (
                    newsRows.map((news, index) => (
                        <MiniNewsCard
                            key={index}
                            title={news.title}
                            headline_color={news.headline_color}
                            shoulder_color={news.shoulder_color}
                            small_title={news.small_title}
                            image={`https://medivoicebd.com/${news?.image}`}
                            news_url={`/article/${news.id}/${news.news_url}`}
                        />
                    ))
                )
            }
        </div>
    );
};

export default ArchivePage;