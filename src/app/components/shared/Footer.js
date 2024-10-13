import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white pt-6 text-center">
            <div className="bg-[#e6e7e9] grid place-content-center py-2">
                <Image src="/images/logo/logo.png" alt="Logo" width={150} height={50} />
            </div>
            <div className='bg-black py-4 pb-6 px-4'>
                {/* content title */}
                <div className='container mx-auto grid place-content-center'>
                    <ul className="text-xl font-bold mb-2 text-center flex justify-center flex-wrap gap-2 md:gap-4">
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">জাতীয়</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">আন্তর্জাতিক</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">সাক্ষাৎকার</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">স্বাস্থ্য প্রশাসন</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">ক্যাম্পাস</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">এডু কর্ণার</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">স্বাস্থ্য</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">সম্পাদকীয়</a></li>
                        <li className='transition-colors hover:text-[#9b1f21]'><a href="">চাকরি</a></li>
                        <li className='transition-colors hover:text-[#9b1f21] text-2xl'><a href="">সাইট ম্যাপ</a></li>
                    </ul>
                </div>
                <hr className="border-white border-dashed w-full my-4" />
                {/* Contact Information */}
                <div className="container mx-auto grid place-content-center text-center">
                    <div className="text-lg font-medium">
                        <p>বার্তা কক্ষ: <a href="tel:01870211288">০১৮৭০ ২১১ ২৮৮</a></p>
                        <p className='mb-4'>বার্তা সম্পাদক: <a href="tel:01639318319">০১৬৩৯ ৩১৮ ৩১৯</a></p>
                        <p>ই-মেইল: <a href="mailto:medivoice.2014@gmail.com" className="text-blue-400">medivoice.2014@gmail.com</a></p>
                    </div>

                    {/* Disclaimer */}
                    <p className="mt-4">
                        স্বত্বাধিকারী কর্তৃক <a href="medivoicebd.com" className="text-blue-400">medivoicebd.com</a> এর সর্বস্বত্ব সংরক্ষিত।
                        এই ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;