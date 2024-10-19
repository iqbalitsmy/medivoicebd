import MiniNewsCard from '@/app/components/shared/MiniNewsCard/MiniNewsCard';
import Pagination from '@/app/components/shared/Pagination/Pagination';
import { getData } from '@/app/utils/getData';
import React from 'react';

const TagPageLayout = async ({ params }) => {
    const { id, slug, page } = params;

    const { newsRows } = await getData(`https://api.medivoicebd.com/tag-news?page=${page}&tagId=${id}&type=tag`);

    const currentPage = parseInt(1, 10) || 1;
    const totalPages = 10;

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    newsRows && (newsRows.length > 0) ? (newsRows.map((news, index) => (
                        <MiniNewsCard
                            key={index}
                            title={news.title}
                            small_title={news.small_title}
                            image={`https://medivoicebd.com/${news?.image}`}
                            news_url={`/article/${news.id}/${news.news_url}`}
                        />
                    ))
                    ) : (
                        <h1 className='text-3xl text-center'>News not found</h1>
                    )
                }
            </div>
            {
                newsRows && (newsRows.length > 0) && (
                    <div className='mt-10'>
                        <Pagination route={`/tag/${id}/${slug}/`} currentPage={currentPage} totalPages={totalPages} />
                    </div>
                )
            }
        </div>
    );
};

export default TagPageLayout;