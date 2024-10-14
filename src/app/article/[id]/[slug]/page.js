import SharedCard from '@/app/components/ArticleDetails/SharedCard';
import SocialShare from '@/app/components/ArticleDetails/SocialShare';
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


const ArticlePage = () => {
    return (
        <div className='flex flex-wrap'>
            <aside className='w-full md:w-1/4 px-4'>
                {/* shared option */}
                <SharedCard person={person} publishDate={"৩১ অগাস্ট, ২০২৪ ১০:১৬ এএম"} />
            </aside>
            {/* article */}
            <div className='w-full md:w-3/4 px-4 grid gap-4'>
                <article className=''>
                    <div>
                        <h6 className='text-xs text-[#1a0dab]'>শহীদ আবু সাঈদ, মুগ্ধদের স্মরণে</h6>
                        <h1 className='text-[32px] font-bold'>তোমাদের স্বাধীনতায়</h1>
                        <Image src={"/images/news/2574.jpg"} height={400} width={800} alt='শহীদ আবু সাঈদ, মুগ্ধদের স্মরণে' />
                        <figcaption className='italic'>ছবি: সংগৃহীত</figcaption>
                    </div>
                    <div>
                        <p>শহরের বুকে যেদিন জলপাই রঙা ট্যাঙ্ক এলো ,<br />
                            আমার শিরদাঁড়া বেয়ে বয়ে গেল শীতল একটা স্রোত <br />
                            আর তোমার ঘৃণার পারদ তখন তুঙ্গে <br />
                            ওই লোহার টুপি কিংবা হাতের ভারী অস্ত্র নেভাতে পারেনি তোমার চোখের আগুন । <br />
                        </p>
                    </div>
                </article>

                {/* --------MedivoiceBD ইউটিউব চ্যানেল---- */}
                <div className='p-2 text-justify text-lg border-solid border-y-2 border-blue-900 bg-[#fffeea]'>
                    <p>মেডিভয়েসের জনপ্রিয় ভিডিও কন্টেন্টগুলো দেখতে সাবস্ক্রাইব করুন MedivoiceBD ইউটিউব চ্যানেল। আপনার মতামত/লেখা পাঠান medivoice.2014@gmail.com এ।</p>
                </div>
                {/* share and tags option */}
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
                            <a href='' className="flex gap-1">
                                <FontAwesomeIcon className='text-xl' icon={faTag} />
                                <span>কবিতা</span>
                            </a>
                            <a href='' className="flex gap-1">
                                <FontAwesomeIcon className='text-xl' icon={faTag} />
                                <span>শহীদ</span>
                            </a>
                            <a href='' className="flex gap-1">
                                <FontAwesomeIcon className='text-xl' icon={faTag} />
                                <span>নিশাত তাসনীম</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* ঘটনা প্রবাহ */}
                <div>
                    <h2 className="border-solid border-l-[3px] border-[#d84315] text-lg mb-2 pl-4">
                        ঘটনা প্রবাহ : কবিতা
                    </h2>
                    <ul className="pl-4">
                        {events.map((event, index) => (
                            <li key={index} className="flex flex-wrap mb-2">
                                {/* right side */}
                                <span className="w-1/4 text-lg font-bold ">{event.date}</span>
                                {/* left side */}
                                <div className='text-left w-3/4'>
                                    {/* <p className="text-gray-600 text-xs pl-4">
                                        শহীদ আবু সাঈদ, মুজিবের সাথের
                                    </p> */}
                                    <div className='flex gap-2'>
                                        <span className="text-blue-500 text-[22px] font-bold cursor-pointer hover:text-[#d84315]">
                                            <span className='text-black pr-2 text-'>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </span>
                                            {event.title}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* news navigation */}
                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 mt-8">
                    <div className="text-center">
                        <h2 className="font-bold text-lg md:text-xl text-gray-800">
                            বিএসএমএমইউ’র বায়োকেমিস্ট্রির চেয়ারম্যান অধ্যাপক মোজাম্মেল
                        </h2>
                        <button className="mt-4 bg-gray-200 text-red-600 px-4 py-2 rounded-lg shadow hover:bg-gray-300">
                            &lt;&lt;&lt; আগের নিউজ
                        </button>
                    </div>

                    <div className="text-center">
                        <h2 className="font-bold text-lg md:text-xl text-gray-800">
                            ৫ দশমিক ৯ মাত্রার ভূমিকম্পে কাঁপল রাশিয়ার কামচাটকা
                        </h2>
                        <button className="mt-4 bg-gray-200 text-red-600 px-4 py-2 rounded-lg shadow hover:bg-gray-300">
                            পরের নিউজ &gt;&gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;