
import { getData } from '@/app/utils/getData';
import getHeadlineColor from '@/app/utils/getHeadlineColor';
import Image from 'next/image';
import React from 'react';

const WritePage = async ({ params }) => {
    const { id, slug } = params;

    const { writerData, newsRows } = await getData(`https://api.medivoicebd.com/writer/${id}?page=1`);
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex gap-6">
                {/* Top Profile Section */}
                <Image
                    className="w-36 h-40 rounded-md object-contain"
                    src={`https://medivoicebd.com/${writerData?.image}`}
                    height={200} width={200}
                    alt={writerData?.name}
                />
                <div className='mt-2'>
                    <h2 className="text-[28px] font-bold text-red-600">{writerData?.name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: writerData?.details }}></div>
                </div>
            </div>
            {
                newsRows && (
                    <div className='grid grid-cols-2 sm:grid-cols-3 md gap-4'>
                        {
                            newsRows?.map((news, index) => (
                                <div className='shadow-md p-2' key={index}>
                                    <figure className='mb-2'>
                                        <Image
                                            className="w-full max-h-36 object-contain"
                                            src={`https://medivoicebd.com/${news?.image}`}
                                            height={200} width={400}
                                            alt={news?.title}
                                        />
                                    </figure>
                                    <div>
                                        <h1 className={`text-[22px] hover:text-red-600 ${getHeadlineColor(news?.headline_color)}`}><a href={`/article/${news?.id}/${news?.slug}`}>{news?.title}</a></h1>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default WritePage;