import Image from 'next/image';
import React from 'react';

const WritePage = () => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex gap-6">
                {/* Top Profile Section */}
                <Image
                    className="w-36 h-40 rounded-md object-cover"
                    src="/images/person/nishat-tasnim.jpg"
                    height={200} width={200}
                    alt="Profile"
                />
                <div>
                    <h2 className="text-[28px] font-bold text-red-600">নিশাত তাসনীম স্বস্তি</h2>
                    <p className="text-gray-600">শিক্ষার্থী, সোহরাওয়ার্দী মেডিকেল কলেজ।</p>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                <div className='shadow-md p-1'>
                    <figure className='mb-2'>
                        <Image
                            className="w-full max-h-36 object-contain"
                            src="/images/news/2574.jpg"
                            height={200} width={400}
                            alt="Profile"
                        />
                    </figure>
                    <div>
                        <h1 className='text-[22px] hover:text-red-600'><a href="">তোমাদের স্বাধীনতায়</a></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WritePage;