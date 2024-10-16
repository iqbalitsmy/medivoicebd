import PersonDetailsCard from '@/app/components/ArticleDetails/SharedCard';
import SocialShare from '@/app/components/ArticleDetails/SocialShare';
import MiniNewsCard from '@/app/components/shared/MiniNewsCard/MiniNewsCard';
import convertToBengaliDate from '@/app/utils/convertToBengaliDate';
import convertToBengaliTime from '@/app/utils/convertToBengaliTime';
import { getData } from '@/app/utils/getData';
import { faCaretRight, faPlay, faShare, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const person = {
    name: "নিশাত তাসনীম স্বস্তি",
    image: "/images/person/nishat-tasnim.jpg",
    occupation: "শিক্ষার্থী",
    organization: "সোহরাওয়ার্দী মেডিকেল কলেজ",
}
const title = 'Check out this awesome article!';

const events = [
    { date: '৩১ আগস্ট, ২০২৪', title: 'তোমাদের স্বাধীনতায়' },
    { date: '২৮ মার্চ, ২০২৪', title: 'কপোতাক্ষ এক প্রেমিকের নাম' },
    { date: '২৭ আগস্ট, ২০২৩', title: 'স্বাগতম যুবতী, স্বাগতম কমরেড' },
    { date: '৩০ জুলাই, ২০২৩', title: 'বেঁচে থাকো' },
    { date: '২০ ফেব্রুয়ারি, ২০২২', title: 'বইমেলায় ডা. আকনের নবম কবিতার বই “নীলাঞ্জনা ও একটি জোনাকির রাত”' },
    { date: '১৫ জুন, ২০২০', title: 'কবি বিজেন্দ্র লালের নন্দলাল যখন ‘ডাক্তার নন্দলাল’' },
];


const ArticlePage = async ({ params }) => {
    const { id, slug } = params;
    const { articleData, nextNews, previousNews, streamData, streamRows, readMoreNews } = await getData(`https://api.medivoicebd.com/article/${id}`);


    return (
        <div className='flex flex-wrap'>
            {/* person information */}
            <aside className='w-full md:w-1/4 px-4'>
                {/* ------shared option------ */}
                <PersonDetailsCard person={{}} publishDate={`${convertToBengaliDate(articleData.date)} ${convertToBengaliTime(articleData.time)}`} />
            </aside>
            {/* article */}
            <div className='w-full md:w-3/4 px-4 grid gap-4'>
                <article className=''>
                    <div>
                        {/* small title */}
                        <h6 className='text-xs text-[#1a0dab]'>{articleData.small_title}</h6>
                        {/* title */}
                        <h1 className='text-[32px] font-bold'>{articleData.title}</h1>
                        {/* image */}
                        <Image src={`https://medivoicebd.com/${articleData.image}`} height={400} width={800} alt={articleData.title} />
                        {/* image caption */}
                        <figcaption className='italic'>ছবি: {articleData.image_caption}</figcaption>
                    </div>
                    {/* --------details----- */}
                    <div
                        dangerouslySetInnerHTML={{ __html: articleData.details }}
                    />
                </article>

                {/* --------MedivoiceBD ইউটিউব চ্যানেল---- */}
                <div className='p-2 text-justify text-lg border-solid border-y-2 border-blue-900 bg-[#fffeea]'>
                    <p>মেডিভয়েসের জনপ্রিয় ভিডিও কন্টেন্টগুলো দেখতে সাবস্ক্রাইব করুন MedivoiceBD ইউটিউব চ্যানেল। আপনার মতামত/লেখা পাঠান medivoice.2014@gmail.com এ।</p>
                </div>
                {/* --------share and tags option-------- */}
                <div className="">
                    <div className="p-2 flex items-center gap-2 bg-[#e6f4e5] text-2xl mb-4">
                        <FontAwesomeIcon icon={faShare} />
                        <span className="text-[#fd0408] text-[22px] font-bold">সংবাদটি শেয়ার করুন</span>
                    </div>
                    <div className='flex justify-between gap-6'>
                        {/* social share */}
                        <SocialShare title={title} />
                        {/* tags */}
                        <div className="flex flex-wrap gap-2 text-lg">
                            {
                                articleData.tags.map((tag, i) => (
                                    <a
                                        key={i}
                                        href={`/tag/${tag.id}/${tag.tag_url}`}
                                        className="flex gap-1"
                                    >
                                        <FontAwesomeIcon className='text-xl' icon={faTag} />
                                        <span>{tag.tag}</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* ---- stream Data------ */}
                {/* ---------ঘটনা প্রবাহ-------- */}
                {/* @TODO more button */}
                {
                    streamData && (
                        <div>
                            <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg mb-2 pl-4">
                                ঘটনা প্রবাহ : {streamData.tag}
                            </h2>
                            <ul className="pl-4">
                                {streamRows.map((streamRow, index) => (
                                    <li key={index} className="flex flex-wrap mb-2">
                                        {/* right side */}
                                        <span className="w-1/4 text-lg font-bold ">{convertToBengaliDate(streamRow.date)}</span>
                                        {/* left side */}
                                        <div className='pl-2 text-left w-3/4'>
                                            {/* small title */}
                                            <p className="text-red-600 text-xs pl-4">
                                                {streamRow.small_title}
                                            </p>
                                            {/* title */}
                                            <div className='flex gap-2'>
                                                <span className="text-blue-500 text-[22px] font-bold cursor-pointer hover:text-[#d84315]">
                                                    <span className='text-black pr-2 text-'>
                                                        <FontAwesomeIcon icon={faCaretRight} />
                                                    </span>
                                                    <a href={`/article/${streamRow.id}/${streamRow.url}`}>
                                                        {streamRow.title}
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }
                {/* -------news navigation------ */}
                <div className="mt-8">
                    <div className="text-center flex justify-between items-center gap-4">
                        <h2 className="font-bold text-[28px]">
                            <a href={`/article/${previousNews.id}/${previousNews.url}`}>{previousNews.title}</a>
                        </h2>

                        <h2 className="font-bold text-[28px]">
                            <a href={`/article/${nextNews.id}/${nextNews.url}`}>{nextNews.title}</a>
                        </h2>
                    </div>
                    {/* navigation button */}
                    <div className="text-center flex justify-between items-center gap-6">
                        {/* previeous news button */}
                        <a href={`/article/${previousNews.id}/${previousNews.url}`} className="w-full mt-4 py-4 bg-gray-200 text-[22px] font-bold hover:bg-gray-300">
                            <span className='text-red-600 pr-2'>&lt;&lt;&lt;</span>
                            <span>আগের নিউজ</span>
                        </a>

                        {/* next news button */}
                        <a href={`/article/${nextNews.id}/${nextNews.url}`} className="w-full mt-4 py-4 bg-gray-200 text-[22px] font-bold hover:bg-gray-300">
                            <span>পরের নিউজ </span>
                            <span className='text-red-600 pl-2'>&gt;&gt;&gt;</span>
                        </a>
                    </div>
                </div>
                {/* ------------আরও পড়ুন------------ */}
                <div>
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-[22px] mb-2 pl-4">আরও পড়ুন</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-4 gap-y-1'>
                        {
                            readMoreNews.map((news, index) => (
                                <MiniNewsCard
                                    key={index}
                                    title={news.title}
                                    small_title={news.small_title}
                                    image={`https://medivoicebd.com/${news.image}`}
                                    news_url={`/article/${news.id}/${news.news_url}`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;